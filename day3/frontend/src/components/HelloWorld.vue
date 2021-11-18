<script setup>
import { onMounted, ref } from 'vue';
const products = ref({});

async function load() {
  const res = await fetch('http://localhost:3000/products');
  const data = await res.json();
  products.value = data;
}

load();


</script>

<template>
  <ul>
    <li v-for="p in products">{{p.name}} - {{p.price}}$</li>
  </ul>
</template>

<style scoped>
</style>
