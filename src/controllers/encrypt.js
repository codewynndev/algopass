import bcrypt, { genSalt } from "bcrypt";

const passwordEncypter = async (req, resply) => {
  const password = "senha"; //req.body  pega a senha do usuario
  const saltrounds = 10;
  const salt = await genSalt(saltrounds); // numero do vezes que o hash vai rodar para criptografar a senha;

  const hash = bcrypt.hashSync(password, salt);
  console.log(hash);
};

export default passwordEncypter;
