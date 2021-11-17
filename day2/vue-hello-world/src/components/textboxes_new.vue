<script setup>   
import { ref } from 'vue';

const textForAllInputs = ref('type something...');
</script>

<template>
    <input type="text" v-model="textForAllInputs" />
    <input type="text" v-model="textForAllInputs" />
    <input type="text" v-model="textForAllInputs" />
    <input type="text" v-model="textForAllInputs" />
    <input type="text" v-model="textForAllInputs" />
</template>

<style scoped>
</style>