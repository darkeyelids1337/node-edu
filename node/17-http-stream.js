const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
    const fileStream = fs.createReadStream(`./node/content/big.txt`, 'utf8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
}).listen(5000)