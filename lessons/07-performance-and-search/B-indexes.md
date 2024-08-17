Okay, so now we know we have a query we need to optimize. How do we do it? With an index!

An index makes a B-Tree (which stands for balanced tree) to make look ups much faster. Instead of taking O(n) to do a lookup items, it takes O(log n) since it can use a tree to find the item instead of scanning every item in the database.

```sql
CREATE INDEX idx_track_name ON Track (Name);

-- see it's there now
PRAGMA index_list('Track');

EXPLAIN QUERY PLAN SELECT * FROM Track Where name ='Black Dog';
-- `--SEARCH Track USING INDEX idx_track_name (Name=?)
```

Notice it's a SEARCH now instead of a SCAN. This means it was able to use an index and only look at a subset of the table instead of every row. Hooray!

```sql
EXPLAIN QUERY PLAN SELECT * FROM Track Where name ='Black Dog';
```

```
-- w/ index
addr  opcode         p1    p2    p3    p4             p5  comment
----  -------------  ----  ----  ----  -------------  --  -------------
0     Init           0     19    0                    0   Start at 19
1     OpenRead       0     409   0     9              0   root=409 iDb=0; Track
2     OpenRead       1     2     0     k(2,,)         2   root=2 iDb=0; idx_track_name
3     String8        0     1     0     Black Dog      0   r[1]='Black Dog'
4     SeekGE         1     18    1     1              0   key=r[1]
5       IdxGT          1     18    1     1              0   key=r[1]
6       DeferredSeek   1     0     0                    0   Move 0 to 1.rowid if needed
7       IdxRowid       1     2     0                    0   r[2]=rowid; Track.rowid
8       Column         1     0     3                    0   r[3]= cursor 1 column 0
9       Column         0     2     4                    0   r[4]= cursor 0 column 2
10      Column         0     3     5                    0   r[5]= cursor 0 column 3
11      Column         0     4     6                    0   r[6]= cursor 0 column 4
12      Column         0     5     7                    0   r[7]= cursor 0 column 5
13      Column         0     6     8                    0   r[8]= cursor 0 column 6
14      Column         0     7     9                    0   r[9]= cursor 0 column 7
15      Column         0     8     10                   0   r[10]= cursor 0 column 8
16      ResultRow      2     9     0                    0   output=r[2..10]
17    Next           1     5     1                    0
18    Halt           0     0     0                    0
19    Transaction    0     0     65    0              1   usesStmtJournal=0
20    Goto           0     1     0                    0
```

Again, I have a hard time reading this. You can see that it refers to the index in the comments so that's positive.

Okay so let's talk a little bit more about why you may not to index everything. I've heard the saying that indexes are like aspirin – they're a great help when you have a problem but if you use too many they become a problem.

Every time you insert into a table that has indexes, it has to do some rebuilding of the indexes to accommodate this information. Likewise, if you delete, it has to move its nodes around its B-tree to keep it balanced. B-trees also take up space, and on large tables it can be non-trivial amounts of space. The trade-off here is that indexes help with reads but slow down updates, deletes, and inserts as well as take up space. In general I wait for a query to become a problem first before I try to index it, and even then I try to index only what I need to solve my problem. Pre-mature optimization generally is a bad thing to do because as developers we're pretty bad at guessing what's going to go wrong.
