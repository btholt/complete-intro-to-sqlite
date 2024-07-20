---
title: "What is SQLite?"
---

## A Brief History

Let's take a look back at where SQLite came from, as that can help us understand why SQLite was created in the first place and what place it has in the world of development. SQLite was written by Dr. D. Richard Hipp in 2000 while he was working on a contract for the United States Navy writing software for destroyers. He evaluated other database engines but ended designing his own implementation.

Now SQLite is [open source][timeline] ([GitHub mirror][gh]) and released to the public domain but it is not open contribution. Dr. Hipp keeps a tight control on the software and only lets a few people contribute. Notably, SQLite does not use Git but instead Fossil. [This is a nice little summary of how they differ][diff]. Fossil was created specifically by Dr. Hipp for the maintenance of SQLite (much like Git was for Linux.)

In practice you don't really need to care. The thing to take away is that Dr. Hipp and the SQLite crew take immense care of the project and are very thoughtful of maintaining an amazing project.

## The Most Widely Deployed and Used Database Engine

[SQLite is the most used database engine by a huge margin.][most-used]

According to their website, SQLite is used in:

- Every Android device
- Every iPhone and iOS device
- Every Mac
- Every Windows10 machine
- Every Firefox, Chrome, and Safari web browser
- Every instance of Skype
- Every instance of iTunes
- Every Dropbox client
- Every TurboTax and QuickBooks
- PHP and Python
- Most television sets and set-top cable boxes
- Most automotive multimedia systems
- Countless millions of other applications

Many of these will continue actually hundreds of individual SQLite databases. This leads them to estimate that there are over 1,000,000,000,000 (trillion) SQLite databases!

Suffice to say, it's one of (if the not **the**) most battle-tested piece of software. It runs everywhere and incredibly reliably so.

## What is SQLite not?

SQLite is not a server. It is not a standalone piece of software but instead a library designed to be attached to a running program. Importantly for you, especially if you've used something like Postgres, MySQL, MongoDB, or any other piece of database software before, you won't have a database _server_ running. SQLite will just create a database file locally on your computer. Your SDK, CLI, or whatever method of accessing your database will just be pointed at that file and that's how you'll read and write to your database.

Importantly **SQLite has no network access**. In and of itself, it doesn't handle ports, connections, etc. unlike most other database engines. SQLite was designed to work on the same computer as the app using it

SQLite is single node. Whereas other databases have replication and consensus, SQLite is designed to be a node of one. You can still do backups and other things like that, but there's no concept of primary/leader and secondary/follower.

SQLite is unbelievably fast. Because we don't have replication nor networks to deal with, queries take microseconds instead of milliseconds.

## Can I use SQLite in production?

Yes and no. No replication is a tight bottleneck and no network access means you need more tools to use SQLite as a distributed database. So, yes, you can, but you need more tools.

The startup I work at, [SQLite Cloud][cloud] is a paid service that can do this for you (with a generous free tier). [LiteFS][litefs] is an open source way to do it yourself.

[timeline]: https://sqlite.org/src/timeline
[gh]: https://github.com/sqlite/sqlite?tab=readme-ov-file
[diff]: https://www.fossil-scm.org/home/doc/trunk/www/fossil-v-git.wiki#devorg
[most-used]: https://sqlite.org/mostdeployed.html
[cloud]: https://sqlitecloud.io?ref=fem
[litefs]: https://github.com/superfly/litefs
