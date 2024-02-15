const http = require('http')

const server = http.createServer((req, res) => {
    console.log('req event')
    res.end('Hello')
})

server.listen(5000, () => {
    console.log('Server listening on 5000')
})