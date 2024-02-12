const { readFile, writeFile } = require("fs");

readFile("./node/content/first.txt", "utf8", (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile("./node/content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    writeFile('./node/content/result-async.txt', `${first} + ${second}`, (err, result) => {
        if(err){
            console.log(err)
        }
        console.log(result)
    })
  });
});
