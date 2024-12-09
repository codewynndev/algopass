const generator = (length, req, reply) => {
  // const length = req.body;
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const special = "!@#$%^&*()_+-={}:<>?";
  let userPassword = "";

  const toGenerate = lower + upper + digits + special;
  for (let i = 0; i < length; i++) {
    userPassword += toGenerate[Math.floor(Math.random() * toGenerate.length)];
  }

  return userPassword;
};

export default generator;
