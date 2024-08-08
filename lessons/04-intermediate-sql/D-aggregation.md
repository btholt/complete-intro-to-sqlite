---
description: ""
---

Occasionally you need to query for macro statistics about your tables, not just query for individual rows.

Let's use what we've already used before, `COUNT`. What if we want to know how many tracks we have overall in our track table?

```sql
SELECT COUNT(*) FROM Track;
```

`COUNT` is an aggregation function. We give the `*` is saying "count everything and don't remove nulls or duplicates of any variety".

What if we wanted to count how many distinct `genre`s of tracks we have in the Track table?

```sql
SELECT COUNT(DISTINCT GenreId) FROM Track;
```

This is going to tell how many different `type`s we have in the ingredients table. Keep in mind the query to see _what_ the distinct ingredients are.

```sql
SELECT DISTINCT GenreId FROM Track;
```

The first query gives you the number, the count of many distinct things in the list. The second query gives you what those distinct things are with no indication of how many of each there are. There could be 1 fruit and 10,000 vegetables and you'd not indicate that.

Okay, so you want to see both at the same time? Let's see that.

```sql
SELECT
  GenreId, COUNT(GenreId)
FROM
  Track
GROUP BY
  GenreId;
```

This is combining both of what we saw plus a new thing, `GROUP BY`. This allows us to specify what things we want to aggregate together: the type. Keep in mind if you want to SELECT for something with a GROUP BY clause, you do need to put them in the GROUP BY clause.

Now what if we want to include the actual genre names?

```sql
SELECT
  Track.GenreId, Genre.Name, COUNT(Track.GenreId)
FROM
  Track
JOIN
    Genre
ON
    Genre.GenreId = Track.GenreId
GROUP BY
  Track.GenreId; -- you can also have Genre.GenreId here, no difference
```

This one can be a bit of a mind trip. Remember the aggregation happens at the end. So after all your selects happen, then on the row set, it goes and runs the aggregation function here using the GROUP BY. So we get a bunch of rows with their Genre.Name attached, and then we count those up.

What if we wanted to find the biggest or smallest TrackId with each genre? (Doesn't seem that useful but I'll still show you how.)

```sql
SELECT
  Track.GenreId, Genre.Name, MAX(Track.TrackId) -- MIN(Track.TrackId)
FROM
  Track
JOIN
    Genre
ON
    Genre.GenreId = Track.GenreId
GROUP BY
  Track.GenreId;
```

## HAVING

What if you only want genres that have more than 300 tracks?

> The following query does not work.

```sql
SELECT
  Track.GenreId, Genre.Name, COUNT(Track.GenreId)
FROM
  Track
JOIN
    Genre
ON
    Genre.GenreId = Track.GenreId
WHERE
    COUNT(Track.GenreId) > 500
GROUP BY
  Track.GenreId;
```

You can't use WHERE because that applies to the initial result set. You could filter out all rock songs or only select tracks with a certain length. But you can't filter based on the aggregated values because that happens after WHERE happens. This is why HAVING is useful.

```sql
SELECT
  Track.GenreId, Genre.Name, COUNT(Track.GenreId)
FROM
  Track
JOIN
    Genre
ON
    Genre.GenreId = Track.GenreId
GROUP BY
  Track.GenreId
HAVING
    COUNT(Track.GenreId) > 300;
```

Using HAVING we can filter on the aggregated set.
