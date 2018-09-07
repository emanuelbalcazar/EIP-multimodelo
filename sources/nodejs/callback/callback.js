/**
 * @author Carlos Emanuel Balcazar
 */
var fs = require("fs");

const filepath = __dirname + '/file.txt';

fs.readFile(filepath, (err, data) => {
    if (err)
        return console.error(err);

    console.log('1 Con Async:', data.toString());
});

console.log('2 Con lectura asincrona finalizada');

var data = fs.readFileSync(filepath);
console.log('3 Con Sync:', data.toString());
console.log('4 Con lectura sincrona finalizada');
