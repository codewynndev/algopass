import Fastify from "fastify";
const app = Fastify({ logger: true });
const PORT = 8080;
import Rotas from "./src/routes/routes.js";
app.register(Rotas, { prefix: "pass" });

try {
  app.listen({ port: PORT }, () => {
    console.log(`servidor operacional na porta: ${PORT}`);
  });
} catch (error) {
  console.error(error);
}
