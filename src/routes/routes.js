const routes = (fastify, options, done) => {

  // Rota GET (obter informações):
  fastify.get("/", (req, reply) => {
    return reply.status(200).send({ data: "Rota raiz" });
  });

  // Rota PUT (atualizar recurso):
  fastify.put("/update/:id", (req, reply) => { 
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
      return reply.status(400).send({error: "Conteúdo não fornecido."});
    }
    return reply.status(200).send({data: `Recurso com ID ${id} atualizado com o conteúdo: ${content}.`});
  });

  //  rota de crição post 
  fastify.post("/senha", (req, reply) => {
    const {senha} = req.body;
  
    if (!senha) {
      return reply.status(400).send({ message: "Senha é obrigatória." });
    }
    
    // senhas.push(senha);
  
    reply.send({ message: "Senha adicionada com sucesso!", senha });
  
  })
  
  done();

};


export default routes;
