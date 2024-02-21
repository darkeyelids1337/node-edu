const express = require('express')
const app = express()

app.use(express.static('./navbar'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar/index.html'))
//     adding to static assets
//     SSR
// })


app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})



app.listen(5000, () => {
    console.log('Listen on 5000...')
})