---
title: "EXPLAIN"
---

```sql
SELECT * FROM Track Where name ='Black Dog';
PRAGMA index_list('Track');
EXPLAIN SELECT * FROM Track Where name ='Black Dog';
EXPLAIN QUERY PLAN SELECT * FROM Track Where name ='Black Dog';
CREATE INDEX idx_track_name ON Track (Name);
EXPLAIN QUERY PLAN SELECT * FROM Track Where name ='Black Dog';
PRAGMA index_list('Track');
```

Generally speaking, SQLite is extremely fast even on large datasets. It does a great job of working with large amounts of data even on complicated queries. However occasionally it can use some help when you have heavy queries that you run frequently. Let's first understand how to look at queries using some fun features built into SQLite.

```sql
SELECT * FROM Track Where name ='Black Dog';
```

Let's say we are building an interface that frequently needs to look up tracks by their names. You'd be running queries like this frequently. Right now our Track database has some 3,000 rows in it but imagine if you had Spotify's database of music. Spotify says it has over 100,000,000 tracks on it, so that query get very slow. Let's see a few of the ways that SQLite gives you to inspect your queries.

```sql
EXPLAIN SELECT * FROM Track Where name ='Black Dog';
```

```
addr  opcode         p1    p2    p3    p4             p5  comment
----  -------------  ----  ----  ----  -------------  --  -------------
0     Init           0     17    0                    0   Start at 17
1     OpenRead       0     409   0     9              0   root=409 iDb=0; Track
2     Rewind         0     16    0                    0
3       Column         0     1     1                    0   r[1]= cursor 0 column 1
4       Ne             2     15    1     BINARY-8       82  if r[1]!=r[2] goto 15
5       Rowid          0     3     0                    0   r[3]=Track.rowid
6       Column         0     1     4                    0   r[4]= cursor 0 column 1
7       Column         0     2     5                    0   r[5]= cursor 0 column 2
8       Column         0     3     6                    0   r[6]= cursor 0 column 3
9       Column         0     4     7                    0   r[7]= cursor 0 column 4
10      Column         0     5     8                    0   r[8]= cursor 0 column 5
11      Column         0     6     9                    0   r[9]= cursor 0 column 6
12      Column         0     7     10                   0   r[10]= cursor 0 column 7
13      Column         0     8     11                   0   r[11]= cursor 0 column 8
14      ResultRow      3     9     0                    0   output=r[3..11]
15    Next           0     3     0                    1
16    Halt           0     0     0                    0
17    Transaction    0     0     66    0              1   usesStmtJournal=0
18    String8        0     2     0     Black Dog      0   r[2]='Black Dog'
19    Goto           0     1     0                    0
```

I'll be honest, I understand like zero of this. This is what SQLite is doing under the hood. I found the input from Postgres's explain to be much more readable and actionable. In any case, it's there and you can anaylze it if you want to. I never look at this so I just wanted to show you that it's there.

Instead, I use this

```sql
EXPLAIN QUERY PLAN SELECT * FROM Track Where name ='Black Dog';
-- `--SCAN Track
```

Critically, the word `SCAN` here lets you know that this query is going to look at _every_ row in the table. Now, if you only have 3,000 rows or you only run this query infrequently, who cares, a SCAN is fine. However, if you're Spotify and you're scanning 100,000,000 rows every search, then yes, you need to do something about this.

One more fun trick if you're playing around in the CLI:

```sql
.eqp on
SELECT * FROM Track Where name ='Black Dog';
```

If you run `.eqp on`, for the rest of your session it will always show you the query plan when it runs a query. Can be kinda cool to see how SQLite chooses to plan queries.
