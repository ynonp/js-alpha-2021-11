const fs = require('fs');
const fileName = 'data.txt';
const fileData = fs.readFileSync(fileName);

const lines = fileData.toString().split('\n');
console.log(lines.length);
