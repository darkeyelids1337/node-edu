const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide name" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide name" });
  }
  res.status(201).json({ success: true, data: [...people, { name }] });
};

const updatePerson = (req, res) => {
  // we want to UPDATE our PERSON in LIST
  const { name } = req.body;
  const newPeople = people.map((per) => {
    if (per.id === Number(req.params.id)) {
      per.name = name;
    }
    return per;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ success: false, msg: "Give an id" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
