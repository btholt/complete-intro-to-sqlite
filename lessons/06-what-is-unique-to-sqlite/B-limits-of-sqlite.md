---
title: "Limits of SQLite"
---

SQLite has unique limits in what it can and can't do. Nearly all of them are overly generous and you should _never_ hit their ceiling and if you do, you are doing something wrong.

## Row size

Max length of text: 1GB

Each row can be a 1 GB of size. If you're reaching anything remotely close to this, you need a different storage strategy, probably using something like [S3][s3] to store large object and then store the metadata using SQLite.

## Columns on a table

Max amount of columns on a table: 2,000 (and up to 32,000) columns

You can have 2,000 columns on a table but man, you can probably architect your data differently if you have 2,000 columns. A JSON column could help a lot or just move to a document based database like MongoDB.

If you want to, you can recompile SQLite yourself and remove the limit and have up to 32,767 columns but please, please do not do that.

## Length of SQL query

Max length of a SQL query, 1,000,000,000 characters

Look, if you can write a query that long, I'm just in awe. At that point you're just coding your whole app as SQL.

## Tables in a join

Max number of tables in a join: 64 tables

This actually feels like one you _could_ hit though it'd be weird. SQLite uses 8 bytes to do its lookup table for joins and therefore it has a hard limit of 64 tables that it can reference. If you have a query doing 64 joins, you can rearchitect your data to not need so many joins or just do two queries.

## Length of LIKE terms

Max length of LIKE globs: 50,000 characters

Write "globs" (or the terms you give to LIKE) can have some perfomance implications if they're too long so they limt these to 50,000 characters. Still seems plenty long but good advice here is to limit how long of term users can give to SQLite so not to slow down your database.

## Attached databases

Max number of attached database: 10 databases

We haven't done this, but what if you have two database files and want to query them like one database? SQLite lets you with ATTACH. This does make it hard to do things like have an IoT database per device and to address with ATTACH as it will only support 10. You're better off using some sort of data ingestion pipeline to something like BigQuery or Snowflake and then querying that.

## Size of database / rows in a database

- Size of a database: 281TB
- Rows in a database: 1.8e+19 rows (theoretically)
- Rows in a database: 2e+13 rows (effectively)

In theory the database can grow to 281TB of data (which is effectively unlimited for all but the biggest problems in data.) Likewise with number of rows. The database systems can support 2^64 rows but in practice that isn't possible becauase with the smallest amount of data possible you'll run out of space around 2e+13 rows. Or, in other words, more than enough.

To read through more of the limits, [check here][limits]. I just wanted to go through these with you to demonstrate that SQLite can scale its data capabilities as much as you can. It is powerful enough to tackle just about any problem.

[limits]: https://www.sqlite.org/limits.html
[s3]: https://aws.amazon.com/s3/
