Okay, what if you want to find all customer invoices from a certain email address? Using joins, we could accomplish

```sql
SELECT
 *
FROM
  Invoice i

JOIN
  Customer c
ON
  c.CustomerId = i.CustomerId

WHERE
  c.Email = 'hholy@gmail.com';
```

This totally works and if you like this, roll with it. No issues here. However I'm going to show you a second way (mostly to demonstrate subqueries!)

```sql
SELECT
  *
FROM
  Invoice
WHERE
  CustomerId = (
    SELECT CustomerId FROM Customer WHERE Email='hholy@gmail.com'
  );
```

If you put parens in, you can do a subquery. This query is run first and its results can be fed into the parent query. In this case, we use a subquery to find the ID of the email. In this case, for a one-off query, the performance difference isn't important. If this was a thing run constantly in production and it was slow, I'd analyze the performance of both and pick the better one given our data and indexes (stuff we'll talk about later.)

In thise case you can use JOINs to work around using subqueries but it's not always possible. It's a good little tool in your SQL tool belt to have.
