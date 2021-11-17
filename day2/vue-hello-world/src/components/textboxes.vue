<script setup>   
import { ref } from 'vue';

const textForAllInputs = ref('type something...');

function updateText(ev) {
    textForAllInputs.value = ev.target.value;
}
</script>

<template>
    <input type="text" :value="textForAllInputs" @input="updateText" />
    <input type="text" :value="textForAllInputs" @input="updateText"/>
    <input type="text" :value="textForAllInputs" @input="updateText"/>
    <input type="text" :value="textForAllInputs" @input="updateText"/>
    <input type="text" :value="textForAllInputs" @input="updateText"/>    
</template>

<style scoped>
</style>