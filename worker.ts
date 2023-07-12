const handler = () => new Response("Hello World!!");

Deno.serve({
  port: 8080,
  handler,
});
