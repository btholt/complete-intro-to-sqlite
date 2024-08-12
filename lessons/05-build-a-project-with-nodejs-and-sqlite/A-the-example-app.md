> 🚨 Go clone the example [app repo from GitHub][app]. Once cloned, run `npm install` to install all the necessary files and then run `npm run dev` to start the development server. Please use Node.js version 20+.

We are going to build an app frontend to the Chinook database. Since SQLite is file-based, I went ahead and included a fresh copy for you to use.

This app uses [Fastify][fastify], [HTMX][htmx], and [Handlebars][handlebars] to make an app to render invoices for users. You won't need to touch the HTMX nor Handlebars at all, and you'll only need to write a minimal amount of Fastify.

The only file you'll be working on is invoice.js. This has a bare minimal amount of Fastify code to get you started working on the route. You'll be able to try the frontend code at [http://localhost:8080](http://localhost:8080) and to hit the route directly at [http://localhost:8080/invoice?id=1](http://localhost:8080/invoice?id=1). You do not need to modify any other files.

I have also included my code at invoice-complete.js. You can see the result of that function call at [http://localhost:8080/invoice-complete?id=1](http://localhost:8080/invoice-complete?id=1).

> I would strongly suggest you attempt to write the code yourself first before you look how I did it. I know it can be a struggle but I find that I learn the most in those moments of struggle where I know my destination and I'm unsure of how to navigate it and I have to chart the course myself.

[app]: https://github.com/btholt/sqlite-app
[fastify]: https://fastify.dev/
[htmx]: https://htmx.org/
[handlebars]: https://handlebarsjs.com/
