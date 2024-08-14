---
title: "SQLite Extensions"
---

SQLite intentionally maintains a tight set of features and ruthlessly cuts out anything that doesn't contribute to that core use case of a small SQL database. But that said, SQLite has a rich ecosystem of extensions to fill in those gaps of other functionality you may want and many of those are written by the developers of SQLite themselves.

[Click here to see the unofficial SQLite package manager, sqlpkg][sqlpkg].

As of writing there are 102 extensions in here that have been indexed, and more than that exist. If there's some core database thing you want to do that SQLite doesn't currently do, there likely exists and extension for it.

If you're curious how they're written, Alex Garcia (who has written many SQLite extensions, including the vector search we're about to use) wrote one called [hello][hello] that is the minimum viable extension.

So how do we load an extension? Let's load the hello extension. I'm going to use sqlpkg CLI but you can also do it manually. If you're following along with me [here are the instructions][install].

Once installed, do:

```bash
sqlpkg install asg017/hello
sqlpkg which asg017/hello # copy the path this gives you
```

Now that you've done that, load into the SQLite CLI and run

```sql
.load /Users/my-user/.sqlpkg/asg017/hello/hello0.dylib
SELECT hello('Brian');
```

That's it! You use the .load syntax to load an extension and then you can start using it right away. Keep in mind you need to load the extension every time you open the file because, again, it's not a server, it's a library that's writing to a file.

> hello() is just a function that was added by the extension. SQLite let's you query from these. Try `SELECT max(1,2,3,4,5,100);`. max() is built into SQLite

[sqlpkg]: https://sqlpkg.org/
[hello]: https://github.com/asg017/sqlite-hello
[cli]: https://github.com/nalgeon/sqlpkg-cli
[install]: https://github.com/nalgeon/sqlpkg-cli?tab=readme-ov-file#download-and-install-preferred-method
