---
title: "sqlite3"
---

There are so many libraries for connecting to SQLite. It's a very ubiquitious piece of software and so lots of people have opinions on how to build with it.

I am going to show you the standard one, the first one, the one that everyone knows. I will say that when I build stuff with SQLite, it is _not_ the one I normally choose. However I think it's good for you to get exposure to the OG and then you can branch out and choose other libraries once you know what you're getting away from.

[Click here][sqlite3] to go to the sqlite3 docs.

> Why is it sqlite3? It's because it's for version 3 of SQLite, the third major version.

## Connecting to the database

Connecting to a SQLite database from Node.js is a snap. Import the the sqlite3 library and create a `new` database.

```javascript
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./my-database.db");
```

Again, keep in mind that SQLite databases are files. You need to give it a file path to be able to open the database and to start writing to it.

## Querying the database

Once you have your `db` Database instance, you can then start running queries. There's a few functions to be aware of. We'll talk about the parameters to the functions after this.

- `db.run(sql, params, callback)` – This will run a query and not care about the results. You generally use this to run `UPDATE` and `DELETE` commands as you're just updating and not necessarily caring about what the database has to say back to you.
- `db.get(sql, params, callback)` – Runs a query and only gives you back the first one. Some times all you need is one result (like when you're querying a unique ID). This simplifies your code a bit because you don't need an array of one result.
- `db.all(sql, params, callback)` – Like get, but it gives you all results back that match the query instead of just one. It always returns an array. If you got no results, you get an empty array
- `db.each(sql, params, callback, complete)` – Like all, but instead of one big array of results, your callback will get called once for each row in the set. Then the complete function will be called to let you know it's done. This is nice if you have some action you want to take on each row as it's basically a `.map()` of the result set instead of an array.

## Node.js style callbacks (a.k.a. "Nodebacks")

Some of you whippersnappers may be too young to remember writing JavaScript before promises, async-await, generators, etc. Before the magical time of ES2015 / ES6, we only had one way to deal with asynchronous code, callbacks. These are just functions that are invoked when something async completes. JS has since long moved past this (nearly a decade as of writing) and it's to the point that it feels weird to write callbacks as we've been writing promises so long.

sqlite3 never updated to use promises so you still have to use Node.js-style callbacks (or Nodebacks, as they were sometimes called.) They are Node.js callbacks as they always have the signature of `function myCallback(error, data)`. If that `error` is populated with anything, it means that something went wrong. Otherwise it succeeded. That's it. That's what makes a "Nodeback".

So with `.all()`, your code will look like this

```javascript
db.rows(
  `SELECT * FROM Track WHERE name LIKE '%live%'`,
  [], // we'll talk about this array in a sec
  function (err, rows) {
    if (err) {
      // do error stuff here
      return;
    }

    // do stuff here with rows
  }
);
```

## Parameters and SQL Injection

Let's take this example:

```javascript
const id = getIdFromUser();
db.get(`SELECT * FROM Track WHERE TrackId=${id}`, [], function (err, row) {
  // do stuff
});
```

What's wrong with this? There's a **major** problem with this. If that id is coming from a user, it means they can put _anything_ there, right? So they could in theory put valid SQL in there. What if they put `15; DROP TABLE Customer`? Then your SQL statement would be `SELECT * FROM Track WHERE id=15; DROP TABLE Customer`. Uh oh, good bye to all your customer data. They could also do even more nefarious things like steal your data. This is called SQL injection. This is why you **never, ever, ever, ever** put user input directly into a SQL statement. You _always_ let the library do it for you. No exceptions.

So how do we fix this? sqlite3 gives us that array to handle just that.

```javascript
const id = getIdFromUser();
db.get(`SELECT * FROM Track WHERE TrackId=?`, [id], function (err, row) {
  // do stuff
});
```

Done! By replacing it with the question mark and providing the user input in the array, sqlite3 will guarantee you that it's safe to use that no matter where it came from. You can also use an object notation.

```javascript
const id = getIdFromUser();
db.get(
  `SELECT * FROM Track WHERE TrackId=$id`,
  { $id: id },
  function (err, row) {
    // do stuff
  }
);
```

Both are fine. Question marks rely on order, objection notation relies on names matching.

This should be enough of an intro for you to write your sample app.

[sqlite3]: https://github.com/TryGhost/node-sqlite3/wiki/API
