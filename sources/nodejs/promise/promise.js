/**
 * Promise example.
 * @author Carlos Emanuel Balcazar
 */
const fs = require("fs");

const filepath = __dirname + '/file.txt';

/**
 * Reading a file with promises.
 * @param {String} fileName
 * @returns read file function promise
 */
function readFilePromise(fileName) {

    const promise = new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err)
                return reject(err);

            return resolve(data.toString());
        });
    });

    return promise;
}

var promise = readFilePromise(filepath);

promise.then((result) => {
    console.log('then:', result);
}, (error) => {
    console.error('error:', error);
});

// another way...
promise.then(console.log);
