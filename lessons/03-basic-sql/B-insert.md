---
title: "INSERT"
---

We've seen how to read from tables using SELECT. Let's see how to insert new data into tables using INSERT.

```sql
INSERT INTO Artist (name) VALUES ('Radiohead');
SELECT * from Artist WHERE name = 'Radiohead';
```

This inserts a new artist into the Artist table. That table will have one column in it, `name` and that value is going to be `'Radiohead'` (notice single quotes again.) Notice we did not give it an ArtistId. That ID is autogenerated by SQLite for us and is guaranteed unique. If you had multiple columns, you would just make sure it's the same order on both sides

```sql
-- Not a valid query for our database, just to show you
INSERT INTO food (name, food_group, color) VALUES ('carrot', 'vegetable', 'orange'); -- notice the order is the same
```

Also note that here you could use double quotes (though I typically won't.)

```sql
INSERT INTO "Artist" ("name") VALUES ('Radiohead');
```

## UPDATE

Let's say you didn't intend to insert the band Radiohead but instead wanted to insert Daft Punk. You could do this.

```sql
UPDATE Artist SET name = 'Daft Punk' WHERE name = 'Radiohead';
SELECT * from Artist WHERE name = 'Daft Punk';
```

Notice the IDs are the same. You also could have selected by the ArtistId instead of the name (and probably would have been a safer practice.)

> We'll talk about how to upsert in a bit. We need to talk about table constraint before we talk about upserts. Just wanted you to know I'm not leaving it out as I knew some of you would be wondering!

## RETURNING

One more update, let's change it to a different French techno group

```sql
UPDATE Artist SET name = 'Justice' WHERE name = 'Daft Punk' RETURNING *;
```

The returning allows you to basically SELECT the rows you're updating so you can see what changed.

## DELETE

Very similar to UPDATEs. RETURNING also works here if you want to see what gets deleted.

```sql
DELETE FROM Artist WHERE name = 'Justice'; -- Feel free to put RETURNING * at the end
```