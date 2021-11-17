<script setup>
// vue SFC / setup script
import { defineProps } from 'vue';

defineProps({
    name: { type: String, default: 'guest' },
});

</script>

<template>
    <p>Hello {{name}}</p>
</template>

<style scoped>
</style>