What if you're building an app and you want to be able to search for "black" you expect to get the results Amy Winehouse's "Back to Black", the band Black Sabbath, and Metallica's "Black Album". Those are three different columns! We could write three LIKE queries or try to hack it around it with something similar, but luckily there's something that already exists, FTS. FTS stands for full text search and we're going to be using version 5 of it, FTS5. FTS5 is technically an extension (like the JSON one we're about to use) but FTS5 is actually shipped bundled in with SQLite now.

FTS5 allows you to run queries that look like `SELECT * FROM track_search WHERE track_search MATCH 'black'`. We get to use MATCH to tell FTS5 to look across its columns. Really cool, right?

Alright, let's re-use that View we used earlier (easy_tracks). If you don't have it anymore, here's the query to recreate it.

```sql
DROP VIEW IF EXISTS easy_tracks;
CREATE VIEW
  easy_tracks
AS

SELECT
  t.TrackId as id,
  ar.Name as artist,
  al.Title as album,
  t.Name as track
FROM
  Track t

JOIN
  Album al
ON
  t.AlbumId = al.AlbumId

JOIN
  Artist ar
ON
  ar.ArtistId = al.ArtistId;
```

Then we need to create the virtual table that will contain the full text search.

```sql
CREATE VIRTUAL TABLE track_search USING FTS5(content="easy_tracks", content_rowid='id', track, album, artist);
```

- We have to identify where the content is going to com from which will be a table. This table won't actually contain the rows but only the text searchable table that will have a rowid (which we identified as id; if you just call it rowid we don't have to tell it which rowid to use.)
- We tell it what rows we want to include in full text search. Let's say we had producers in that table as well but we didn't want that to be searchable. No problem, you could write a query to select producers that have `MATCH 'black` and that still works fine! As long as it's in the view/table you're selecting from.
- We're choosing to index the view we created earlier but you can definitely do it on normal tables as well.

Okay, so because the table doesn't include the rows itself, we actually have to go populate it. We have to continually keep it up to date because [it does not automatically sync][sync] (unlike a view.)

```sql
INSERT INTO track_search SELECT album, artist, track FROM easy_tracks;
```

This is the fastest way. We just use a select statement to grab the correct bits of info and dump it directly into track_search. In theory you could just create a cron job to continually update the virtual table every hour/day/week or whatever meets your customers' needs.

You could get extra fancy and do it with TRIGGERs which we're not going to cover in this course. If you want to see that, [this StackOverflow answer][stack-overflow] explains exactly how to. If you do that it'll automatically keep your FTS5 table in sync with your view.

Okay, so let's run some queries!

```sql
SELECT * FROM track_search WHERE track_search MATCH 'black';
SELECT * FROM track_search WHERE track_search = 'white';
SELECT * FROM track_search('red');
```

All of these are valid ways of writing the same query. I tend to use the `MATCH` syntax as it's very clear that it's a FTS query.

## There's more than just match

I showed you just one of the ways to use MATCH but there's actually a whole myriad of ways to use it. [Click here][syntax] to read more of the docs of how you can use special syntax to select words that begin with the search term, ends with it, etc.

## bm25()

Generally you will want the "best" matches to show up first and the worst matches to show up last. SQLite provides a the bm25 function to do this.

```sql
SELECT bm25(track_search), * FROM track_search WHERE track_search MATCH 'black' ORDER BY bm25(track_search);
```

The smaller the number is (or the more negative) the better the match is. So this query will give you back all of the matches in order. If you want to learn more or see how the math is done, [the docs][bm25] are the best place to look.

[sync]: https://www.sqlite.org/fts5.html#external_content_and_contentless_tables
[stack-overflow]: https://stackoverflow.com/a/69981377
[syntax]: https://www.sqlite.org/fts5.html#full_text_query_syntax
[bm25]: https://www.sqlite.org/fts5.html#the_bm25_function
