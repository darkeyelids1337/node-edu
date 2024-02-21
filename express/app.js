const express = require("express");
const morgan = require('morgan')
let {people} = require('./data')
const app = express();
//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('tiny'))

app.get("/api/people",(req, res) => {
  res.status(200).json({success: true, data:people})
});

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
