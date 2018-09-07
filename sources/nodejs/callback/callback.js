/**
 * @author Carlos Emanuel Balcazar
 */
var fs = require("fs");

const filepath = __dirname + '/file.txt';

fs.readFile(filepath, (err, data) => {
    if (err)
        return console.error(err);

    console.log('> Con Async:', data.toString());
});

console.log('Con lectura asincrona finalizada');


var data = fs.readFileSync(filepath);
console.log('> Con Sync:', data.toString());
console.log('Con lectura sincrona finalizada');
