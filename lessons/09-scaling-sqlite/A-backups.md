A lot of fantastic tooling has been built around SQLite, and in the spirit of the project they've been made straightforward and "lite." One of the most interesting ones in my opinion is [Litestream][litestream]. It allows you with very little effort to be able to stream point-in-time backups to somewhere else. This can be incredibly useful as this provides some security that if you have a bad query wipe out data you can restore it from an earlier version.

We're going to quickly set this up using Docker. This isn't a Docker course so just stick with me. If you want to more about Docker, I teach a [pretty cool course on it for Frontend Masters][containers] as well. If you like this course, I try to take the same approach to demystifying containers.

We're going to be using [MinIO][minio] to stream our backups too. You can think of MinIO like a mini [AWS S3][s3] bucket that runs on your computer.

Make sure that you have [Litestream][install] and [Docker][docker] installed.

Now let's get our MinIO container running.

```bash
docker run -p 9000:9000 -p 9001:9001 minio/minio server /data --console-address ":9001"
```

Next go to your local instance of MinIO running at [http://localhost:9001/]() and log in with the default username and password, minioadmin / minioadmin.

Click the "Create Bucket" and call it "chinook-backup". Click into the bucket and make sure it's set to be "Public" instead of "Private".

Next, from where-ever your database folder is, run

```bash
export LITESTREAM_ACCESS_KEY_ID=minioadmin
export LITESTREAM_SECRET_ACCESS_KEY=minioadmin

# be sure to replace data.db with something else if you called the file something else
litestream replicate data.db s3://chinook-backup.localhost:9000/data.db
```

DONE! You are now streaming your backups to the bucket. As you can imagine, instead of a local MinIO bucket, you can stream it to a cloud bucket like S3 or Azure Blob Storage. Backing up SQLite is as easy as that!

Let's go ahead and do a restore!

```bash
export LITESTREAM_ACCESS_KEY_ID=minioadmin
export LITESTREAM_SECRET_ACCESS_KEY=minioadmin
litestream restore -o data2.db s3://chinook-backup.localhost:9000/data.db
```

And just like that we were able to pull down the most recent copy of your data, no problem.

[litestream]: https://litestream.io/
[containers]: https://frontendmasters.com/teachers/brian-holt/
[minio]: https://min.io/
[s3]: https://aws.amazon.com/s3/
[install]: https://litestream.io/install/
[docker]: https://www.docker.com/products/docker-desktop/
