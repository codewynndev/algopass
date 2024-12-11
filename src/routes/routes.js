import genPasswod from "../controllers/genPassword.js";

const routes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    return reply.status(201).send({ data: "Rota raiz" });
  });

  fastify.post("/create", (req, reply) => {
    const { length, upper, digits, special } = req.body;
    return reply
      .status(201)
      .send({ data: genPasswod(length, upper, digits, special) });
  });

  fastify.delete("/delete", (req, reply) => {
    return reply.status(200).send({ data: "Rota de deletar" });
  });

  done();
};

export default routes;
