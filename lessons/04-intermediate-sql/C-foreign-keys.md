We can actually make that relationship between IDs explicit. We can make it so `AlbumId` isn't just an implicit relationship but an actual relationship tracked by SQLite itself. This relationship is called a foreign key: a key that references foreign information in another table. Our Chinook database already has these relationships built in. Type `.schema Track` and notice the FOREIGN KEY part on MediaTypeId, GenreId, and AlbumId.

> SQLite does not enforce foreign key rules by default. Every time you open the database connection you need to tell it respect it with `PRAGMA foreign_keys=on;`. Yes, it's by connection, and no, there's no way to always turn it on. Probably my biggest complaint about SQLite. It's done for historical / compat reasons.

```sql
PRAGMA foreign_keys=on;

INSERT INTO
    Track
    (Name, AlbumId, MediaTypeId, Composer, Milliseconds, Bytes, UnitPrice)
VALUES
    ('lol', 99999, 99999, 99999, 99999, 99999, 99999);

DELETE FROM
    Genre
WHERE
    GenreId=24;
```

> Both of those queries should fail due to foreign key constraints.

- PRAGMAs are basically policies you can tell SQLite to respect. In this case, we are saying for _this_ connection, please enforce rules around foreign keys. You need to do this for every connection to SQLite. There's a bunch but I tend not to use too many of them.
- You can actually set the foreign key pragma in the connection string when you connect in code. I'll show you how later.
- Notice it won't let us neither insert with violations of the constraint nor delete.
- You can also do `ON UPDATE` constraints as well.
- We did a `NO ACTION` constraint, but there are others as well. NO ACTION means that if a foreign key relationship would be severed and thus leaving orphan rows, error out the query. `RESTRICT` does this as well (but has some minuet difference that has never been important to me.) `ON DELETE CASCADE` will delete any affected rows. So if I delete "rock" from the Genre table, it will go delete every rock track from the Track table. You can also do `ON DELETE SET NULL` and `ON DELETE SET DEFAULT` to just change the value.
