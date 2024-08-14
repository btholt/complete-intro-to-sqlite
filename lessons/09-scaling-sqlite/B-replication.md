Okay, so we've been building locally with SQLite and most people end here. Now that they've built their app as big as they want to locally, they'll move to Postgres or MySQL. And frankly this is a totally acceptable thing to do if you are so inclined. I've been using Postgres myself for years like this. However I think this is sort of a vim thing: I've used Postgres for so many years and know it so well that I already know well how to use it (like vim users, who have already suffered through the hard part of learning.)

In any case, you no longer have to switch off of SQLite ever if you are so inclined. There is now something called [litefs][litefs]. Litefs is a tool that simulates a virtual filesystem and then replicates it across machines. In otherwords, it tricks SQLite into thinking it's just reading and writing to a file and underneath it is replicating it out to other replicas.

You end up with a primary node that you can read and write to and secondary nodes that you can write to. It's a smart, elegant system that has some great upside in how simple it is to manage and how simple SQLite is, and how fast it is since your database is running on the same node as your app so reads are local-speed instead of having to go over a network.

The downside is that your secondary nodes do have a bit of lag in receiving updates. Normally it's fast enough for most apps that this eventual consistency isn't a problem (it's usually like 200ms, depending on network speed and other things.) However if you're doing things were strong consistency is essential, this probably not your solution.

You're also using SQLite, for all the good and bad that means. That are lots of advantages that other databases have, so just keep in that mind.

Okay, so, let's adapt our little project and make it work in a distributed fashion. [Clone this repo][repo] and let's explore what's going on here.

- This already pre-completed so no code needed to write here.
- This is a [Docker Compose project][compose]. This means it will orchestrate multiple containers together to get this project. If you want to learn more, [watch my segment on it on Frontend Masters][compose-video].
- In our case we'll have an NGINX container that will act as ingress for traffic and also round-robin the connections to our primary and secondary nodes.
- We have two types of app nodes. The primary node (which there were only ever be one) has the SQLite node that you can write to. The secondary node(s) will have read only replica copies. You could have many of these but for simplicity's sake I hard coded it to be one copy
- [Notice][db-connection] that I'm connecting to `/litefs/data.db`. This is the virtual filesystem. As long as we're doing that, we'll be connecting to the distributed SQLite database.
- Feel free to look at the Dockerfile, docker-compose.yml and etc/litefs.yml. Those are probably the most interesting config files.

Let's run it. Run

```bash
docker compose up --build
```

You should be able to see the app running at [http://localhost:8080](http://localhost:8080).

> 🚨 If you see a weird SQLITE_ERROR, errno 1 error, delete you node_modules on your local computer and re-run Docker so that it builds the container again.

Let's try connecting to the nodes themselves.

```bash
docker exec -it sqlite-project-litefs-primary-1 sqlite3 /litefs/data.db
docker exec -it sqlite-project-litefs-replica1-1 sqlite3 /litefs/data.db
```

Pretty cool right? We're now working with a distributed SQLite database!!

[litefs]: https://github.com/superfly/litefs
[repo]: https://github.com/btholt/sqlite-app-litefs
[db-connection]: https://github.com/btholt/sqlite-app-litefs/blob/main/invoice.js#L3
[compose]: https://docs.docker.com/compose/
[compose-video]: https://frontendmasters.com/courses/complete-intro-containers-v2/docker-compose/
