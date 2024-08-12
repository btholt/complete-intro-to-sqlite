---
title: "Alternatives to sqlite3"
---

Now that you've experienced the OG SQLite client for Node.js, let's look at a few of the alternatives.

## Node.js's built-in client

[⛓️ Link][nodejs]

This is the one we'll all eventually use in the future. [Bun][bun] started shipping their own builtin clients so Node.js followed suit. This is unstable and under active development so expect to be able to use it some time in the future.

## better-sqlite3

[⛓️ Link][better-sqlite3]

As it states, it is an attempt to be sqlite3 but better. This SDK adds support for features like a synchronous API, better transaction support, better performance, and other things that are not supported in sqlite3.

## promised-sqlite3

[⛓️ Link][promised-sqlite3]

There's a few different versions of this that people have done, but generally speaking they take sqlite3 and make it easier to use with promises. You can also do this yourself with [Node.js's promisify function][promisify] and the normal sqlite3 library (this is normally what I do.)

## Prisma, Drizzle, Sequelize

- [⛓️ Prisma][prisma]
- [⛓️ Drizzle][drizzle]
- [⛓️ Sequelize][sequelize]

All of these are what you would call an ORM, object relational mapping. It is a library that abstracts away the actual writing of SQL. You call various functions and methods in the library and the library will generate and send SQL to your database for you.

I have a love/hate relationship with ORMs (having mostly used a lot of [Django's ORM][django] when I worked at Reddit). On one hand, it makes writing code frequently very easy when you're doing straightforward stuff. They also frequently can handle things like data migrations for you which can be nice.

However, I have found that ORMs can frequently make things harder too. Once you want to do something that ORM doesn't have or doesn't want you to do, it makes everything harder. It can sometimes be slower.

That said, these three ORMs are quite popular right now and I think they've made great strides in making them more easy to use and more performant. While I typically don't use them myself, I think it's a much more defendable thing to do than it used to be.

[nodejs]: https://nodejs.org/api/sqlite.html
[bun]: https://bun.sh/docs/api/sqlite
[better-sqlite3]: https://github.com/WiseLibs/better-sqlite3
[promised-sqlite3]: https://github.com/tguichaoua/promised-sqlite3
[promisify]: https://nodejs.org/api/util.html#utilpromisifyoriginal
[drizzle]: https://orm.drizzle.team/docs/get-started-sqlite
[prisma]: https://www.prisma.io/docs/getting-started/quickstart
[sequelize]: https://sequelize.org/docs/v7/databases/sqlite/
[django]: https://docs.djangoproject.com/en/5.0/topics/db/queries/
