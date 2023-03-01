// import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

//oak server
// import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

//express server
import express from "npm:express";

const decoder = new TextDecoder();
const data = await Deno.readFile("./data.json", { encoding: "utf-8" });

// serve((_req) => {
//   return new Response(data, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// });

// const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = data;
// });

// await app.listen({ port: 8000 });

const app = express();

app.listen(8000, () => {
  console.log("server runnin");
});

app.get("/", (req, res) => {
  res.send(decoder.decode(data));
});
