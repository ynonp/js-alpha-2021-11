<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Ex3 from './components/Ex3.vue';
import Counter from './components/Counter.vue';
import TextBoxes from './components/textboxes.vue';
import Clock from './components/clock.vue';
</script>

<template>
  <Clock />
  <hr />
  <TextBoxes />
  <Counter :step="4" />
  <HelloWorld />

  <Ex3 name="ynon" />
  <Ex3 name="ynon" />
  <Ex3 name="world" />  
  <Ex3  />  

</template>


<style>
  body { background: orange; }
</style>
