<script setup>
import { ref } from 'vue';
const info = ref({});

async function showInfo() {
  const res = await fetch('http://localhost:3000/product/3');
  const data = await res.json();
  info.value = data;
}
</script>

<template>
  <button @click="showInfo">Load Data</button>
  <pre>{{info}}</pre>
</template>

<style scoped>
</style>
