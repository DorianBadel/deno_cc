import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

const router = new Router();

const people = [
  {
    id: 1,
    slug: "luke-skywalker",
    name: "Luke Skywalker",
    homeWorld: "Tatooine",
  },
  {
    id: 2,
    slug: "leia-organa",
    name: "Leia Organa",
    homeWorld: "Alderaan",
  },
];

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello from our api";
  })
  .get("/people", (ctx) => {
    ctx.response.body = people;
  })
  .get("/people/:slug", (ctx) => {
    const { slug } = ctx.params;
    const person = people.find((person) => person.slug === slug);
    if (person) {
      ctx.response.body = person;
    } else {
      ctx.response.body = "That person was not found!";
    }
  })
  .post("/people", async (ctx) => {
    const { id, slug, name, homeWorld } = await ctx.request.body("json").value;
    const person = {
      id,
      slug,
      name,
      homeWorld,
    };
    if (person) {
      people.push(person);
      ctx.response.body = "Person Added";
    } else {
      ctx.response.body = "Person not added";
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log("App is running on http://localhost:8000");
});

app.use((ctx) => {
  ctx.response.body = people;
});
await app.listen({ port: 8000 });
