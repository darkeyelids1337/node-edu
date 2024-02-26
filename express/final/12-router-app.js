const express = require("express");
const morgan = require('morgan')
const people = require('./routes/people')
const auth = require('./routes/auth')
const app = express();

//static assets
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log("Listen on 5000...");
});
