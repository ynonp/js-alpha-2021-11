// files.js (AMD)
const fsPromises = require('fs/promises');
const fs = require('fs');

function v1() {
    try {
        const fileData = fs.readFileSync('./data.txt');
        console.log(fileData.toString())        
    } catch (err) {
        console.log('fail');
    }
}

async function v2() {
    try {
        const fileData = await fsPromises.readFile('./data.txt');
        console.log(fileData.toString());    
    } catch (err) {
        console.log('fail');
    }
}

function v3() {
    fs.readFile('./data.txt', function(err, fileData) {
        if (err) {
            throw err;
        }
        console.log(fileData.toString());
    });
}

v1();


// same as:
// import fs from 'fs';
