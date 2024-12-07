import passwordEncypter from "../controllers/encrypt.js";
const routes = (fastify, options, done) => {
  fastify.get("/", passwordEncypter);

  fastify.post("/create", (req, reply) => {
    return reply.status(201).send({ data: "Rota de gerar criptografia" });
  });

  fastify.delete("/delete", (req, reply) => {
    return reply.status(200).send({ data: "Rota de deletar" });
  });

  done();
};

export default routes;
