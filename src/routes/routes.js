import genPasswod from "../controllers/genPassword.js";

const routes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    return reply.status(201).send({ data: "Rota raiz" });
  });

  fastify.post("/create", (req, reply) => {
    return reply.status(201).send({ data: "Rota de gerar criptografia" });
  });

  fastify.delete("/delete", (req, reply) => {
    return reply.status(200).send({ data: "Rota de deletar" });
  });

  done();
};

export default routes;
