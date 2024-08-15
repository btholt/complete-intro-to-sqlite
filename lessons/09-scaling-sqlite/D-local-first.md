One of the amazing things that libSQL can do is thing called "local first" development. This is a confusing name but think of this way: when you're developing locally, you are running at the speed of "local". Everything is happening on the machine so you have no roundtrip latency between your app and your database. As soon as you start connecting to a database, your responses are guaranteed to be hundreds of milliseconds longer, if not more. Any time you hit the network you are working with the speed of light: your data can't travel any faster than the speed of light and your database is at best in the same data center and at worst across the world.

What if we could just load our database onto the same server seamlessly? LiteFS did this as well but this makes it even easier.

```bash
sqld --grpc-listen-addr=127.0.0.1:5001
```

```javascript
import { createClient } from "@libsql/client";

const db = createClient({
  url: "file:local-data.db",
  syncUrl: "http://localhost:5001",
  syncPeriod: 60,
});

const rep = await db.sync();
```

This is enough set up that libSQL via its SDK it will load a local copy of it onto your app server and now you can start querying at the speed of localhost. Pretty compelling, right? Local first can go a lot further but I wanted to give you a very fast intro to it.

I rewrote the invoice endpoint to use this feature under [invoice-local-first.js][js].

You won't a difference now because we were already doing local dev but you would if it was remote!

Quite a few companies are chasing this local-first paradigm and most of them are using SQLite. [Turso][turso] and [Electric SQL][electric] are two to look at if you're interested.

[js]: https://github.com/btholt/sqlite-app-libsql/blob/main/invoice-local-first.js
[turso]: https://docs.turso.tech/introduction
[electric]: https://electric-sql.com/
