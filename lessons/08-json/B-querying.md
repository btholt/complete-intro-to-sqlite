---
title: "JSON"
---

The JSON extension ([json1][json1]) for SQLite is the most useful one to me, and one that I load nearly any time I do a project with SQLite. It is extremely useful for application development. It allows you to read and write arbitrary data. It allows you to treat SQLite essentially like a document-based database like MongoDB where you don't have to define your schema up front and can do so on the fly. It allows you to have arrays inside of rows instead of having to do one-to-many relations across tables. There are still reasons you'd want to define schema and have relations across table, but this makes it easy for simple use cases where you don't need all the SQL rigor.

Let's install it.

```bash
sqlpkg install sqlite/json1
sqlpkg which sqlite/json1 # copy the out output of this
```

Now load your database and run this

```sql
.load /Users/my-user/.sqlpkg/sqlite/json1/json1.dylib

SELECT json('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}');
```

This should return back to you a JSON object of the string we passed in. As you can see, we can now operate with JSON inside of SQLite! Pretty cool, right? Let's try a few more.

```sql
-- create an array
SELECT json_array(1, 2, 3);

-- get the length of an array
SELECT json_array_length('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}', '$.favorites');

-- get the type of a field in an object
SELECT json_type('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}', '$.username');

-- construct a new object using pairs
SELECT json_object('username', 'btholt', 'favorites', json_array('Daft Punk', 'Radiohead'));
```

These are a bunch of helper methods to help you interact with JSON objects in SQLite. Let's see how to manipulate it.

```sql
-- add a new field
SELECT json_insert('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}', '$.city', 'Sacramento');

-- remove a field
SELECT json_remove('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}', '$.favorites');

-- update a field
SELECT json_replace('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}', '$.username', 'holtbt');
```

## -> and ->>

SQLite provides two convenience operators that it copied from MySQL and Postgres to keep the syntaxes compatible. It allows you to extract specific values from JSON.

```sql
SELECT json('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}') -> 'username';
SELECT json('{"username": "btholt", "name": { "first": "Brian" }, "favorites":["Daft Punk", "Radiohead"]}') -> 'name';
SELECT json('{"username": "btholt", "name": { "first": "Brian" }, "favorites":["Daft Punk", "Radiohead"]}') -> 'name' -> 'first';
```

Notice you can do multiple levels of extraction. Also notice that anything that coming back from with -> operator has double quotes. That's because it's still treating it as JSON so that we can keep using -> to dig further into objects. If we want it to return it as text or integer, we use ->>

```sql
SELECT json('{"username": "btholt", "name": { "first": "Brian" }, "favorites":["Daft Punk", "Radiohead"]}') -> 'name' ->> 'first';
```

->> lets you get the actual value out and not JSON. Use it for your last extraction to acutally get the data out.

[json1]: https://sqlite.org/json1.html
