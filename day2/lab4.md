# Lab: Hello Vue

[x] Create a first Vue app in Vite. Change the text to show your name.

[x] Change the background color to a color you like

[ ] Add a new component that prints `Hello <your name>`. 
	  Add it to the page multiple times to see the message repeated.

[ ] Add a new component that shows an image.


[ ] Write a component that shows 5 text boxes and keeps the text in all the boxes in sync. That is when you change the text in one `<input />` the new value is copied to all the others.


[ ] Write a "Spoiler Alert" component. It accepts text as props, and initially shows only the words "Spoiler Alert". When a user clicks on the spoiler alert the real text is presented.












[ ] Write a component that shows 3 text boxes, first for "seconds", second for "minutes" and the third for "hours". Every time a user changes the value in one of the `<input />`s, the corresponding value should be written in the other boxes.

For example if we write "1" in "hours" then "seconds" should show 3600 and "minutes" should show 60.

















[ ] Modify the component that prints `Hello <your name>` so it will take the name as an input property

[ ] Create a component that takes a numeric value and prints the value, one number below it and one number aboe. For example this snippet:

```
<MyNumbers :value="5" />
```

shows the text: `4-5-6`

[ ] What happens if you try to use your component without the `:` i.e.:

```
<MyNumbers value="5" />
```

[ ] Create a component that accepts an array of numbers and prints out the largest value from the array.


