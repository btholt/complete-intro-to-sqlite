So far we've done a one-to-one matching of records. We've used a record in a database to represent one item: one band member, band, etc.

Now we're going to get into records that can relate to each other. Let's think about albums. An album has multiple tracks. That **has** word is key here. It means there is a relationship. A single album has many tracks. This is a one-to-many relationship – one album has multiple tracks. Those tracks belong to that album. A track does not belong to multiple albums (in theory you could model this differently but let's say we choose to model it this way.)

A band member can belong to multiple bands, and a band has multiple members. Dave Grohl has been in Nirvana, Foo Fighters, and Them Crooked Vultures. This kind of relationship is called many-to-many. Recipes and ingredients would be another good example of this. A recipe has many ingredients, and an ingredient can belong to many recipes.

There can also exist one-to-one relationships but in general, you would just make those the same record altogether. You could split up the type and title into two tables, but why would you? Then you have a data sync problem. What if a band renames themselves? Ex: On a Friday → Radiohead, Prince → The Artist Formerly Known as Prince, The Quarrymen → The Beatles. Anyone who has ever tried to manually keep data in sync in two+ places knows eventually you will have issues.

Luckily we can use relational data to have one table of bands and one table of albums.

```sql
SELECT * FROM Album LIMIT 5;
```

Notice that we're just getting ArtistId (a number) instead of the actual name of the band. That's not what we want, we want to see the name of the album and the name of the band. Enter JOINs. This allows us to join two tables based on common data. Let's see how to do that.

```sql
SELECT
    Artist.Name, Album.Title
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
LIMIT 5;
```

> Once we start getting into longer queries (especially when in code) I start spacing it out using new lines to make it easier to read. Makes it easier to understand at a glance.

We JOIN'd the Artist table to the Album table based on them sharing a common ArtistId. Pretty cool, right? Let's look at a few more tricks here.

## Table Aliases

```sql
SELECT
    b.Name, a.Title
FROM
    Album a
JOIN
    Artist b ON
        a.ArtistId = b.ArtistId
LIMIT 5;
```

You can give tables aliases so they're easier to refer to. Some of the table names can get quite long so this can make it more readable. In this case, I'd argue that the single-letter variable names make it _less_ readable, that's up to you.

## You can use WHERE!

```sql
SELECT
    Artist.Name, Album.Title
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
WHERE
    Artist.Name = 'Nirvana';

SELECT
    Artist.Name, Album.Title
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
WHERE
    Album.Title = 'IV';

SELECT
    Artist.Name, Album.Title
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
WHERE
    Album.Title LIKE '%live%';
```

As you can see, once you set up the JOIN and how you want to join the tables together, you can start filtering your results based on either table. The first query we asked for only Nirvana's albums, the second is just albums named `IV`, and the third we're asking for any album that `live` in it.

## Joining more than two tables

```sql
SELECT
    Artist.Name, Album.Title, Track.Name
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
JOIN
    Track ON
        Track.AlbumId = Album.AlbumId
WHERE
    Album.Title = 'IV';
```

As you can see, you can just keep joining tables as long you have ways to join the table.

```sql
SELECT
    Artist.Name, Album.Title, Track.Name, Genre.Name
FROM
    Album
JOIN
    Artist ON
        Album.ArtistId = Artist.ArtistId
JOIN
    Track ON
        Track.AlbumId = Album.AlbumId
JOIN
    Genre ON
        Track.GenreId = Genre.GenreId
WHERE
    Artist.Name = 'Foo Fighters';
```

You can just keep joining as you need to.
