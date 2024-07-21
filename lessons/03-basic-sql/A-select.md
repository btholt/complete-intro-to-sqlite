---
title: "SELECT"
---

I like to learn SQL by doing rather than some contrived explanation of how grammar is broken down and blah blah blah. I like putting fingers on keyboards and seeing what happens when we do things. Once we start to experience what SQL can do for us then we can get a bit more fine grained in terms of what is doing what and why.

> Note, this is meant to be a very quick intro to general SQL. I've taught [the Complete Intro to SQL][sql] before and it's more in-depth. This class uses Postgres but 95% of the grammar applies to both. I'll highlight where there's differences.

## SELECT

You should already have a database session open and have Chinook loaded. If not, look back at the previous lesson on how to do that.

SELECT is the name of the "command" part of the query. It's what the command is going to do. In our case, we're going to be reading from the database which is a SELECT command.

```sql
SELECT * FROM Artist;
```

> Capitalization of SELECT and FROM isn't important. I usually do it out of habit because _everyone_ used to do it that way. It's not as common now and you'll see me do both.

This will return about 275 rows from the database. We asked for _every_ single artist in the Artist table and we got it! The `*` just means that we wanted every single bit of info available for every artist. We if we only wanted _some_ of the info, we could ask for that like this.

```sql
SELECT name from Artist;
```

Notice the number is gone (which was the `ArtistId`) and we just have the name for each band. We could also ask for both like this

```sql
SELECT name, ArtistId from Artist;
```

Notice the columns came back in the order you ask for them too.

> If you need to get the name of columns, `.schema <TABLE_NAME>` is helpful.

## WHERE

In this case, we're querying all rows without any filtering whatsoever. Some times this is useful but normally you have an idea of some subset of rows you want. Let's say we wanted to get the ID of one of my favorite bands, The Postal Service. How would we do that?

```sql
SELECT ArtistID FROM Artist WHERE name = 'The Postal Service';
```

> Very important you use single quotes here. Single quotes mean a value or string literal. Double quotes in SQL refer to he name of columns and so putting double quotes would not be valid SQL.

This will just return `174` because that's all we asked for. Likewise we could do

```sql
SELECT name FROM Artist WHERE ArtistId = 174;
```

This one doesn't need quotes because it's the literal number 174.

## LIKE

Let's say you didn't know if The Postal Service was listed under "**The** Postal Service" or just "Postal Service". This is where LIKE can help.

> SQLite does not have ILIKE, just LIKE. LIKE is case insensitive.

```sql
SELECT ArtistID FROM Artist WHERE name LIKE '%Postal Service';
```

This will match "The Postal Service", "Postal Service", "Definitely Postal Service" and anything that has text before "Postal Service". The `%` means "give anything that match 0 to many characters before this".

You can use multiple too. Let's say we wanted to know every band that had "Orchestra" in the name. We can do that with

```sql
SELECT name FROM Artist WHERE name LIKE '%orchestra%';
```

Pretty cool, right?

There are more comparator operators that you can discover for yourself as well

```sql
SELECT * FROM Artist WHERE ArtistId <= 10;
```

## LIMIT and OFFSET

Sometimes you just want a few responses. I do this a lot to just see what's in a table.

```sql
SELECT * FROM Artist LIMIT 5;
SELECT * FROM Artist LIMIT 5 OFFSET 5;
SELECT * FROM Artist LIMIT 5 OFFSET 10;
```

This will allow you to page through results as well.

## ORDER BY

Frequently you will want to change how things are ordered as well.

```SQL
SELECT * FROM Artist ORDER BY name LIMIT 5;
SELECT * FROM Artist ORDER BY name ASC LIMIT 5; -- Same as above query. ASC is implied if left out.
SELECT * FROM Artist ORDER BY name DESC LIMIT 5;
```
