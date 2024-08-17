---
title: "libSQL"
---

## What is libSQL and why fork SQLite?

[libSQL][libsql] bills itself as "SQLite for modern applications". It is a fork of the SQLite codebase that [Turso][turso] made to make its SQLite offering in the cloud. [SQLite is open source but not open contribution][oss] which makes it hard if you want to take SQLite and extend it further (as the Turso folks found.) In the end they decided to fork SQLite and make their own version on top of it. [The publish a manifesto][manifesto] which is a good read if you're curious.

libSQL is the same in terms all of your SQLite queries will work as-is and many of the extensions you would expect to work do. They've committed to make the delta between the two as low as possible.

Where libSQL differs is a few things:

- libSQL works as a server, more similar to Postgres and MySQL. We'll talk about that in the next section.
- Due to it working more as a server, it has a [user management system][user].
- libSQL works over HTTP which means you'll need a different client to work with it. Luckily Turso maintains a few [including a JavaScript one][js].
- Because it works as a server, it's easy to expose it to the Internet so you can have remote servers.
- They allow you to do more standard [ALTER TABLE][alter] actions.
- A few other things and always adding more. They do aim to be the modern SQLite database.

## sqld

So let's try it. [Install sqld][sqld] first. Then run it with `sqld`. This will start a sqld server on localhost:8080.

Now we can start running queries against its HTTP API. I use [Bruno][bruno] for API requests but Postman or Insomnia are just fine. From here we need to see our sqld server with Chinook. I took the liberty or writing a Postman collection for this

- [Click here][postman] for a Postman-compatible collection of API requests (both Insomnia and Bruno can use Postman-style collections too.)
- [Click here][query] for just the JSON used to query the API.

Run the query to add all the rows to the database. Once you've done that, [clone this repo][repo], run `npm install`, and `npm run dev` to get the app and running. Now we have our same app running on libSQL and sqld!

- We just used the [libsql sqlite3][sqlite3] driver here. It's a drop-in replacement which means we didn't have to rewrite any code, just change the URL.
- There is a better SDK, [the official libSQL JS SDK][sdk]. This one is closer to better-sqlite3 and has promises built-in.
- Beyond that, we're 100% the same app!

[libsql]: https://turso.tech/libsql
[oss]: https://www.sqlite.org/copyright.html
[manifesto]: https://turso.tech/libsql-manifesto
[js]: https://github.com/tursodatabase/libsql-js
[alter]: https://github.com/tursodatabase/libsql/blob/main/libsql-sqlite3/doc/libsql_extensions.md#altering-columns
[sqld]: https://github.com/tursodatabase/libsql/blob/main/docs/BUILD-RUN.md#build-and-run-sqld
[user]: https://github.com/tursodatabase/libsql/blob/main/docs/USER_GUIDE.md
[bruno]: https://www.usebruno.com/
[query]: /chinook-sqld.json
[postman]: /sqld-collection.json
[repo]: https://github.com/btholt/sqlite-app-libsql
[sqlite3]: https://github.com/libsql/libsql-node-sqlite3
[sdk]: https://github.com/tursodatabase/libsql-js
[turso]: https://turso.tech/
