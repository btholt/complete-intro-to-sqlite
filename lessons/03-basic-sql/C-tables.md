Let's create our first table, the `BandMember` table.

```sql
CREATE TABLE BandMember (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  role TEXT VARCHAR
);
```

> SQLite has only four real data types: INTEGER, REAL, TEXT, and BLOB. It is a dynamically typed system. Therefore you can give datatypes like TINYINT but SQLite will just treat it like an INTEGER and likewise you can give a type of VARCHAR(255) but it will just treat it like TEXT (and therefore won't truncate it.) [See more here][types].

To see the table you created, run `.schema BandMember` in your psql instance to see it and the the sequence that you created. The sequence stores the `id` counter.

We now have a table. A table is the actual repository of data. Think of a database like a folder and a table like a spreadsheet. You can have many spreadsheets in a folder. Same with tables.

We now have a table, ingredients. Our table has two fields in it, an incrementing ID and a string that is the the title of the ingredients. You can think of fields like columns in a spreadsheet.

A table contains records. A record can be thought of as a row in a spreadsheet. Every time we insert a new record into a table, we're adding another row to our spreadsheet.

> The spreadsheet analogy isn't just theoretical. [You can essentially use Google Sheets as a database][sheets] (appropriate for small, infrequent use.)

Let's add a record to our table.

```sql
INSERT INTO BandMember (name, role) VALUES ('Thom Yorke', 'singer') RETURNING *;
```

This adds one row with a name of Thom Yorke and role of singer. Where is the id? Since we made it `PRIMARY KEY` it gets created automatically. Since this is the first item in our database, its ID will be `1`. As you have likely guessed already, the next item in the table will be `2`.

Let's see the record.

```sql
SELECT * FROM BandMember;
```

You should see something like

```plaintext
1|Thom Yorke|singer
```

Amazing! We now have a table with a record in it.

Let's add multiple.

```sql
INSERT INTO
    BandMember
    (name, role)
VALUES
    ('Jonny Greenwood', 'guitarist'),
    ('Colin Greenwood', 'bassist'),
    ('Ed O''Brien', 'guitarist'),
    ('Philip Selway', 'drummer')
RETURNING *;
```

You can add multiple add a time as long as you comma separate them.

## ALTER TABLE

Okay so now we have a table again. What happens if we wanted to add a third field to our table? Let's add an `image` field that will point to a URL of an image of the person.

```sql
ALTER TABLE BandMember ADD COLUMN image TEXT;
```

Likewise we can drop it too:

```sql
ALTER TABLE BandMember DROP COLUMN image;
```

There's a lot of ways to alter a table. You can make it UNIQUE like we did or NOT NULL. You can also change the data type. For now let's add back our extra column.

```sql
ALTER TABLE BandMember
ADD COLUMN nationality TEXT NOT NULL DEFAULT 'UK';
```

Specifying a DEFAULT when using a NOT NULL constraint will prevent errors if the column has existing null values. In this case we're saying "add a new non null column, and for those that exist give them the value of 'UK'."

> SQLite does not allow you to do multiple alterations in one statement. If you want to add multiple columns, you have to do multiple alter tables commands.

## Dropping a table

What if we messed up and we didn't want an BandMember table?

```sql
DROP TABLE BandMember;
```

Pretty simple, right? That's it! Do be careful with this command. Like `rm` in bash, it's not one you can recover from. Once a table is dropped, it is dropped.

[sheets]: https://www.npmjs.com/package/google-spreadsheet
[types]: https://www.sqlite.org/datatype3.html
