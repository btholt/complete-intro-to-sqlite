This one is controversial but SQLite is not rigid at all about what data it will store in what columns. It really only has four data types, and it then it coerces all of the allowed SQL data types into those data types.

| Column Datatype | Types Allowed In That Column |
| --------------- | ---------------------------- |
| INTEGER         | INTEGER, REAL, TEXT, BLOB    |
| REAL            | REAL, TEXT, BLOB             |
| TEXT            | TEXT, BLOB                   |
| BLOB            | INTEGER, REAL, TEXT, BLOB    |

What is indeed nice about this is that SQLite will take most SQL queries written for other databases (like MySQL, Postgres, etc.) and it will work for SQLite as SQLite will just coerce most things to a TEXT data type.

A common one in other databases is VARCHAR and SQLite will happily accept that and just make it a text field. VARCHAR usually comes with a text limit (like this field can only be 255 characters long) and SQLite will not respect those limits. So you can create a table with VARCHAR(255) and then just insert a whole page's worth of text into it, SQLite does not care.

That said, SQLite did add a STRICT table feature in 2021 that allows SQLite to be slightly more mindful of types. However the core strongly believes this to be not the case.

If you want to read more, [the core team wrote their thoughts out here][sqlite].

## Lacked data types

Critically, there is no date type which can prove challenging sometimes. You'll either store some sort of date standard string of just UNIX time.

There's also no Boolean. You'll represent these as INTEGERS 0 and 1. TRUE and FALSE are just aliases of 0 and 1.

[sqlite]: https://www.sqlite.org/flextypegood.html
