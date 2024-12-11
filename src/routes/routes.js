import genPasswod from "../controllers/genPassword.js";

const routes = (fastify, options, done) => {
  fastify.get("/", (req, reply) => {
    return reply.status(201).send({ data: "Rota raiz" });
  });

  fastify.put("/update/:id", (req, reply) => {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      return reply.status(400).send({ error: "Conteúdo não fornecido." });
    }
    return reply.status(200).send({
      data: `Recurso com ID ${id} atualizado com o conteúdo: ${content}.`,
    });
  });

  fastify.post("/password", (req, reply) => {
    const { length, upper, digits, special } = req.body;

    if (!length) {
      return reply
        .status(400)
        .send({ message: "O tamanho da senha não foi fornecido." });
    }
    const password = genPasswod(length, upper, digits, special);

    return reply.send({
      messag: "senha criada com sucesso",
      data: password,
    });
  });

  done();
};

export default routes;
