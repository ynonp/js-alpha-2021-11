<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    step: { type: Number, required: true },
    start: { type: Number, default: 0 },
})

const val = ref(props.start);

function inc(step) {
    val.value += step
}

</script>

<template>
    <button @click="inc(step)">{{val}}</button>    
</template>

<style scoped>
</style>