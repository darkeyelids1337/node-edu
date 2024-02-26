const greetPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).send("Provide credentionals");
  } else {
    res.status(200).send(`Welcome ${name}`);
  }
};

module.exports = {greetPerson}