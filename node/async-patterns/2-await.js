const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try {
    const first = await readFile('./node/content/first.txt', 'utf8')
    const second = await readFile('./node/content/second.txt', 'utf8')
    await writeFile(
      './node/content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()