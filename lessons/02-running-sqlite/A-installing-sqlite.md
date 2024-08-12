---
title: "Installing SQLite"
---

What's great is that SQLite is probably already on your device. For Windows you may have to look for it but in MacOS and Linux, you should be able to run `sqlite3` and it should get you into a temporary session.

### Windows

For Windows, feel free also to just [click here to download][download] a fresh version of SQLite. In all likelihood you need the Precompile Binaries for Windows, 64-bit. [Here's the 3.46 link][windows].

For the sake of this course, I'll be using what is the most current, 3.46. But honestly SQLite changes so little that it's likely unimportant which version you choose. I installed 3.46 via Homebrew.

### MacOS

```bash
brew install sqlite
```

I added this alias to my zshrc to not have to type out the path all the time.

```bash
alias edu-sqlite3="echo 'This is just an alias that Brian Holt is using for his homebrew installed sqlite3. Look at the first version of the class to see how I set up the alias' && /opt/homebrew/opt/sqlite/bin/sqlite3"
```

I added the echo so that people watching the video have a visual warning of what I'm doing with that command, you don't need the added echo.

If you need an alternative way to that (or need to get 3.46.0 specifically like I did) [click here][macos]. This will have the binary as part of a zip you can download.

## Chinook

We'll also be using [Chinook][chinook], a sample set of data. Please download the v1.4.5 Chinook_Sqlite.sql file as well. I'll teach you how to use it in a bit, but suffice to say it's a dataset about movies that we'll use to have a quick intro to querying.

## Start my server

[download]: https://sqlite.org/download.html
[windows]: https://sqlite.org/2024/sqlite-dll-win-x64-3460000.zip
[macos]: https://sqlite.org/2024/sqlite-tools-osx-x64-3460000.zip
[chinook]: https://github.com/lerocha/chinook-database/releases/tag/v1.4.5
