# Lab: Hello Node.JS

[ ] Write a Node.JS app that randomizes 10 numbers and prints the largest one

[ ] Integrate lodash into your app and use `_.random()` to randomize the numbers

[ ] Write a Node.JS app that takes a text file and counts the number of lines in the file. Name of the file can be hard coded in the code.

[ ] Write a Node.JS app that writes the numbers from 1 to 100 into a text file (each number in a new line)

[ ] Modify the last two scripts to take the name of the file from command line arguments (use process.argv as described here: https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)

[ ] Write a JavaScript file named utils.js with the following code:

```
exports.twice = function(x) {
  return x * 2;
};
```

Use the file from a main.js main node file.

[ ] Write a JavaScript file named random.js so we'll be able to use it in the following way:

```
const value = require('./random.js');

// prints some random value
console.log(value);
```

