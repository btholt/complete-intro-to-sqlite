We looked at several ways of doing joins in the last section by using the `JOIN` keyword. One key thing about that is we were doing `INNER JOIN`s. If you don't specify what type of join to do, it is implicitly an INNER JOIN. In practice it didn't matter because our queries matched up 1:1:

```sql
SELECT
    B.Name, A.Title
FROM
    Album A
INNER JOIN
    Artist B ON
        A.ArtistId = B.ArtistId
LIMIT
    5;
```

> `INNER JOIN` or just `JOIN` are the same thing.

[![diagram of SQL joins](/images/SQL_Joins.png)](https://commons.wikimedia.org/wiki/File:SQL_Joins.svg)

Our INNER JOIN is giving us the inner section on the Venn Diagram between the two tables. Let's say that we have an artist in the artist table that we don't have any albums for. If we just

```sql
SELECT
    B.Name, A.Title
FROM
    Album A
INNER JOIN
    Artist B ON
        A.ArtistId = B.ArtistId
WHERE
    B.Name = 'Snow Patrol';

SELECT
    B.Name, A.Title
FROM
    Album A
RIGHT JOIN
    Artist B ON
        A.ArtistId = B.ArtistId
WHERE
    B.Name = 'Snow Patrol';
```

Notice the first query doesn't give us any results. That's because it's an inner join – it will only give us things from rows in _both_ tables. Now if we run the second query, it'll give anything that's in the inner part (which is nothing, as we just saw) _and_ it will give us anything that _just_ exists in the Artist Table (the "right" table in this case.)

> LEFT refers to the FROM clause table, RIGHT refers to what comes from the JOIN.

What if we wanted to see all artists without an album in the album table?

```sql
SELECT
    B.Name, A.Title
FROM
    Album A
RIGHT OUTER JOIN
    Artist B ON
        A.ArtistId = B.ArtistId;
```

That OUTER part means _only_ take things that don't have anything in the Album table, so it will only give us artists with no albums in the albums table.

## NATURAL JOIN

```sql
SELECT
    B.Name, A.Title
FROM
    Album A
NATURAL JOIN
    Artist B
LIMIT
    5;

SELECT
    B.Name, A.Title, C.Name
FROM
    Album A
NATURAL JOIN
    Artist B
NATURAL JOIN
    Track C
LIMIT
    5;
```

I don't really like NATURAL JOIN but I thought I'd mention it because you'll see it from time to time. By saying NATURAL JOIN in this case, we're saying "Hey, I have columns in both tables that are named the same thing. Using that, join these tables."

It might seem convenient (and if you structure your tables well like Chinook is, it's easy) but it's so implicit. I don't like magic code and this feels magic and brittle. If you rename a column or drop it or anything like that, you can break your queries or, even worse, get the wrong data back. I'd say steer clear.
