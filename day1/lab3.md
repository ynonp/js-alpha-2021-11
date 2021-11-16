# Lab 3 - New Concepts

## Modules

[ ] Create a new Vite project and add to it a JavaScript file that defines a single function:

```
export function plus2(x) {
  return x + 2;
}
```

Import this file from main.js and use the function


[ ] In the same vite project, create another JavaScript file that exports a random value:

```
export default Math.random();
```

Import this file from main.js AND from one more file. Does it provide the same value?


[ ] Create a new JavaScript file in the project named utils.js so main.js will be able to use it like this:

```
import * as Utils from './utils';

// prints 20
console.log(Utils.twice(10));
```




## Promises

[ ] Write a function named "sleep" that takes a number of seconds and returns a promise that resolves AFTER this number of seconds has passed. Example usage:

```
async function main() {
    console.log('start');
    await sleep(10);
    console.log('10 seconds passed');
}
```


[ ] How long will the following code wait before printing "the end"?

```
async function main() {
  for (let i=0; i < 5; i++) {
    await sleep(10);
  }

  console.log('The end');
}
```

Can you modify the code so "sleep" function is still called 5 times, but the code only waits 10 seconds? That is, all "sleep" calls will wait simultaneously?

## Packages

[ ] Add the package [axios](https://www.npmjs.com/package/axios) to your project. Use it to fetch the data from the following URL and print it: `https://swapi.dev/api/people/1/`

[ ] Add the package [lodash](https://www.npmjs.com/package/lodash) to your project. Search the documentation for a function you like from the library and use it. Documentation link: `https://lodash.com/docs/`

[ ] Create a production build of your project. What files did you get? Can you guess why?
