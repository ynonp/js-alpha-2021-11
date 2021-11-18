<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Pokeapi from './components/pokeapi.vue';
import { ref, computed } from 'vue';

const search = ref('');

// CHANGE ONLY THIS NEXT LINE:
const days = computed(() => (
  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ].filter(d => d.includes(search.value))
));
</script>

<template>
  <Pokeapi />
  <label>
    Filter
    <input type="search" v-model="search" />
  </label>
  <ul>    
    <li v-for="d in days" >{{d}}</li>
  </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
