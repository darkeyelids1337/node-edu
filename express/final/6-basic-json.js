const express = require('express')
const app = express()
const {products} = require('./data')
app.use(express.static('./navbar'))

app.get('/', (req, res) => {
    res.json(products);
})


app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})



app.listen(5000, () => {
    console.log('Listen on 5000...')
})