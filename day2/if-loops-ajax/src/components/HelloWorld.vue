<script setup>
import { ref, computed } from 'vue'

const username = ref('');
const goodUsername = computed(() => username.value.startsWith('xo'))
</script>

<template>
  <input type="text" v-model="username" />
  <div v-if="username.length === 0">
    <p>who are you?</p>
  </div>
  <div v-else-if="goodUsername">
    <p>Welcome Boss</p>
  </div>
  <div v-else>
    <p>Go away!!!</p>
  </div>
</template>

<style scoped>
</style>
