import Fastify from "fastify";
const app = Fastify({ logger: true });
const PORT = 8080;
import Rotas from "./src/routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";
import fastifyCors from "fastify-cors";
cors();
dotenv.config();

Fastify.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});
// Registrando as rotas com o prefixo 'pass'
app.register(Rotas, { prefix: "pass" });

try {
  app.listen({ port: PORT }, () => {
    console.log(`servidor operacional na porta: ${PORT}`);
  });
} catch (error) {
  console.error(error);
}
