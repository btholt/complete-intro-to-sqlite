```sql
-- this is counting the most favorited bands
SELECT
  COUNT(f.value) AS count, f.value
FROM
  users, json_each(data ->> 'favorites') f
GROUP BY
  f.value
ORDER BY
  count DESC;
```

This query finds the most favorited bands. We are using aggregation and something called a [table valued functions][table-valued-function]. We're using it to make a virtual table of all of the values out of the JSON arrays and then summing those into a most commonly favorited bands.

In general this isn't something too common to use table valued functions but here it is useful. Essentially it allows you to give a table to a function and that will generate a virtual table out of values (with usually more or less rows than what in the table).

## Updating JSON

```sql
-- this is how you update json
UPDATE
  users
SET
  data = json_insert(
    (SELECT data FROM users WHERE email ='brian@example.com'),
    '$.favorites[#]',
    'The xx'
  )
WHERE
  email ='brian@example.com';
```

Updating the JSON can be a bit more difficult. We need a copy of the JSON to update (hence the subquery) and then we need to use a JSON method to update it, and then to set the whole thing as the new value. Because there's no real JSON type and it's really just a string at the end of the day, we have to set it holistically each time.

The `[#]` at the end of `'$.favorites[#]'` is a special syntax that means "add to the end". You can put a number in there if you want to update a specific place.

[table-valued-function]: https://www.sqlite.org/vtab.html#tabfunc2
