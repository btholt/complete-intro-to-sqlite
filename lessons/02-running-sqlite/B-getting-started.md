So now you have SQLite on your computer, let's just get the most basic session started. In your terminal type `sqlite3` (or whatever you're using to get as your alias for it.) You should see something like

```bash
SQLite version 3.46.0 2024-05-23 13:25:27
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
```

Importantly, you'll see that we're connected to an in-memory database which means whatever we do in this session will be thrown away at the end. If you give a filename as an argument (e.g. `sqlite3 my-data.db`) then it'll either open that file if it exists or create it if it doesn't.

## Dot Commands

Type `.help` (note the leading period) into your session and hit enter. You should see a long list of possible commands you can run. The dot in front signifies that it's a dot command which are special administrative commands you can pass to SQLite to do something or get some information. This will be things like exporting your database to CSV, reporting potential bugs, opening a file, etc. In other words, it's anything that isn't a query. The `.help` one is super useful for you to know if you need to be reminded of what's available.

## Stopping SQLite

The easiest way is CTRL + D. `.exit` is a valid dot command that works too.

## Let's get it running

Let's save everything to a file. I'll be saving my database to my desktop. Do the following.

```bash
cd ~/Desktop
sqlite3 ./my-chinook.db

## Inside sqlite
.read ./Chinook_Sqlite.sql # or where-ever you downloaded this file
.tables # you should the tables you imported from Chinook
```

Once you're here we're ready to start writing queries!
