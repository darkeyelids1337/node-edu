const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar/index.html'))
})


app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})



app.listen(5000, () => {
    console.log('Listen on 5000...')
})