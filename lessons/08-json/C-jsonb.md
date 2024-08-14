---
title: "jsonb"
---

So we've been doing everything with the JSON functions but in reality we really want to use JSONB. It's a more compact way to represent JSON and it's faster to use. It makes everything a little harder to read but otherwise is just better.

```sql
-- notice the b in jsonb
SELECT jsonb('{"username": "btholt", "favorites":["Daft Punk", "Radiohead"]}');
-- ?1?usernamegbtholt?favorites??Daft Punk?Radiohead
```

It comes out a little hard to read but ultimately we don't want to read it until it's out of the database so I'd suggest always using JSONB.

Given that, let's make a table, insert some stuff into it, and write some queries.

```sql
CREATE TABLE users (email, data);

INSERT INTO
  users
  (email, data)
VALUES
  ('brian@example.com', jsonb('{"favorites":["Daft Punk", "Radiohead"], "name": {"first": "Brian", "last": "Holt"}}')),
  ('bob@example.com', jsonb('{"favorites":["Daft Punk"], "name": {"first": "Bob", "last": "Smith"}}')),
  ('alice@example.com', jsonb('{"admin": true, "favorites":["The Beatles", "Queen"], "name": {"first": "Alice", "last": "Johnson"}}')),
  ('charlie@example.com', jsonb('{"favorites":["Nirvana", "Pearl Jam"], "name": {"first": "Charlie", "last": "Brown"}}')),
  ('dave@example.com', jsonb('{"favorites":["Pink Floyd", "Led Zeppelin"], "name": {"first": "Dave", "last": "Wilson"}}')),
  ('eve@example.com', jsonb('{"favorites":["Madonna", "Michael Jackson"], "name": {"first": "Eve", "last": "Davis"}}')),
  ('frank@example.com', jsonb('{"favorites":["Queen", "David Bowie"], "name": {"first": "Frank", "last": "Miller"}}')),
  ('grace@example.com', jsonb('{"favorites":["Radiohead", "Led Zeppelin"], "name": {"first": "Grace", "last": "Lee"}}')),
  ('hank@example.com', jsonb('{"favorites":["U2", "Radiohead"], "name": {"first": "Hank", "last": "Taylor"}}')),
  ('ivy@example.com', jsonb('{"favorites":["Adele", "Beyoncé"], "name": {"first": "Ivy", "last": "Anderson"}}')),
  ('jack@example.com', jsonb('{"favorites":["Radiohead", "Muse"], "name": {"first": "Jack", "last": "Thomas"}}')),
  ('kate@example.com', jsonb('{"favorites":["Taylor Swift", "Madonna"], "name": {"first": "Kate", "last": "Martinez"}}')),
  ('leo@example.com', jsonb('{"favorites":["Nirvana", "Daft Punk"], "name": {"first": "Leo", "last": "Garcia"}}'));

-- it's readable but hard to. **never** modify this directly, always let SQLite do it
SELECT data from users;

-- get nested data
SELECT data -> 'name' ->> 'first', data -> 'name' ->> 'last' FROM users;

SELECT data -> 'name' ->> 'first', data -> 'name' ->> 'last' FROM users WHERE json_array_length(data, '$.favorites') < 2;
```

Pretty straightforward here. Getting data out of JSON is very similar to just normal fields.

For the second one, we are asking for all users that have less than two favorites. You can use these functions anywhere.
