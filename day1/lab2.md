# Lab2 - JavaScript Syntax

## const/let
[ ] Write a program that randomizes 10 numbers from 1 to 100 and print out their average. Use const and let.

[ ] Write a program that shows a button and a number on screen. Each time someone clicks on the button the number increases. Use let and const.

[ ] Write a program that shows a button on screen. Each time someone clicks the button the page's background color should change. Use let and const.

[ ] Move the lines in the following code snippet (without changing their contents) so the following code will work and print: 10, 5, 10

```
let x = 10;
{
  console.log(x);
  let x = 5;
  console.log(x);
}

console.log(x);
```

Why did the first version not work?


[ ] The code in this link:
https://codepen.io/ynonp/pen/KRaBbG

Shows 4 buttons. The developer wanted each button to print the number that's written on it, but unfortunately all print out "4". Fix the code using let. Can you explain what happened?


## Classes and Arrow Functions

[ ] Write a class called Summer to make the following code work:

```
const x = new Summer();
const y = new Summer();

x.add(10);
x.add(20);
x.add(5, 5);

y.add(100);

// prints: 40
console.log(x.result);

// prints: 100
console.log(y.result);
```



[ ] Write the classes Car and Race so the following code will print "green"

```
const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());
```




[ ] Fix the code in the following link:
https://codepen.io/ynonp/pen/yLoEGWW

So when clicking on the button it will show the alert "Yay JavaScript FTW"


[ ] (Bonus if time permits)
Create a class called EventBus that manages custom events in a system. The class provides two methods:

1. `on` - takes an event name and a function, and "registers" the function to handle the event later
2. `emit` - takes an event name and triggers all the functions that should handle the event

The following code snippet should work:

```
const bus = new EventBus();

function one() { console.log('one'); }
function two() { console.log('two'); }
function three(x) { console.log(x); }

bus.on('start', one);
bus.on('start', two);
bus.on('go', three);

bus.emit('start');
// this will call "one" and "two" and print the messages in console

bus.emit('go', 10);
// this will call "three" passing 10 as the value for "x"
```

## Destructuring

[ ] The following function takes a parameters object. Fill in the missing line so that the function prints the correct output:

```
function printTimes(options) {
  // TODO - fill code (1 line) here

  for (let i=0; i < times; i++) {
    console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
  }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world', times: 10 });
```


[ ] Now modify the function so the following code will use a default value of 5:

```
// print 'hello world' five times:
printTimes({ text: 'hello world' });
```

[ ] The following two code snippets will add an item to an array:

```
let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

arr1.push(50);
arr2 = [...arr2, 50];

console.log(arr1);
console.log(arr2);
```

Both the console.log calls now print the same thing.

What is the difference between the two methods? And how can you change the program to make the difference more visible?
