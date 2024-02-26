const express = require("express");
const morgan = require('morgan')
let {people} = require('./data')
const app = express();
//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('tiny'))


app.post('/api/people/postman', (req,res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({'success': false, 'msg': 'Please provide name'})
  }
  res.status(201).json({success:true, data: [...people, {name}]})
})

app.get("/api/people",(req, res) => {
  res.status(200).json({success: true, data:people})
});

app.post('/api/people', (req, res) => {
  const {name} = req.body;
  if(!name){
    return res.status(400).json({'success': false, 'msg': 'Please provide name'})
  }
  res.status(201).json({success: true, person: name})
})


app.put('/api/people/:id', (req, res) => {
  // we want to UPDATE our PERSON in LIST
  const {name} = req.body;
  const newPeople = people.map((per) => {
    if(per.id === Number(req.params.id)){
      per.name = name;
    }
    return per;
  })
  res.status(200).json({success:true, data: newPeople})
})

app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params;
  if(!id){
    return res.status(400).json({success: false, msg: "Give an id"})
  }
  const newPeople = people.filter((person) => person.id !== Number(id))
  res.status(200).json({success:true, data: newPeople})
})

app.post('/login', (req,res) => {
  const {name} = req.body;
  if(!name){
    res.status(401).send('Provide credentionals')
  }
  else{
    res.status(200).send(`Welcome ${name}`)
  }
})

app.listen(5000, () => {
  console.log("Listen on 5000...");
});
