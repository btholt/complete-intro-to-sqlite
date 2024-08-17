Views are not unique to SQLite but SQLite certainly has its own version of them.

The idea of a view is that it is an abstract or virtual table that makes use of other data in the table. A really good use case for us is that getting a list of track names with artists and albums requires two joins right now. Any time we want to get that information, we have two to write a query with two joins.

```sql
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
  ar.ArtistId = al.ArtistId

LIMIT 5;
```

This is a super usable set of data for us to list out all the tracks in a database. Now if it only wasn't so burdensome to query. Well, spoilers, it doesn't have to be. We can make a view that automatically does this for us and presents it as a pretty table.

```sql
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

Now go ahead and `SELECT * FROM easy_tracks LIMIT 15;` to see what we did. Cool, right? We can even start doing things like joins to this table as well. If you find yourself constantly doing the same joins (like we have this whole course) views can your friend.

> SQLite does not do materialized views like Postgres. That is to say, we cannot tell SQLite "run this query and store the results" like you can in Postgres. SQLite is always querying the live data underneath. [Click here to read more about materialized views][materialized].
>
> SQLite also does not support inserting into views like other databases do.

[materialized]: https://sql.holt.courses/lessons/views/materialized-views
