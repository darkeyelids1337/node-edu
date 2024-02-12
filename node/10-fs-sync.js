const {readFileSync, writeFileSync} = require('fs')
const path = require('path')
console.log('start')
const firstPath = path.resolve(__dirname, 'content', 'first.txt')
const secondPath = path.resolve(__dirname, 'content', 'second.txt')

const first = readFileSync(firstPath, 'utf8')
const second = readFileSync(secondPath, 'utf8')

writeFileSync('./node/content/result-sync.txt', `Here is the result: ${first}, ${second}`)

console.log('done with this task')
console.log('starting the next one')