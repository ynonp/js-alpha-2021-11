# Lab: Vue Hooks

[ ] Create a hook named useLocalStorage that takes a ref variable and saves it in local storage, so next time we start our app it will continue from the same value. Examlpe usage in a Counter component:

```
<script setup>
import { ref } from 'vue';
import { useLocalStorage } from './hooks/useLocalStorage';

const value = useLocalStorage("counter", 0);

</script>

<template>
  <div>
  <button @click="() => value++">{{value}}</button>
  </div>
</template>
```

Value should be saved in local storage under the key "counter", and the next time we start the app it will continue from the last value.

[ ] Write a memory game in Vue:
  - The game should show a grid of N,N squares (N is received as a property)
  - The squares hide values (use English letters)
  - When clicking on a square its value is reveald
  - When clicking on the second square-
    - if it is identical to the revealed value they are both revealed forever
    - if it is different, it is revealed for a few seconds and then both squares are hidden again

