<script setup>
import { ref, computed } from 'vue';
// ref turns a number or string to a reactive object
// to work with reactive objects you:
// 1. read its .value property
// 2. write to its .value property

// ref(initial value) -> returns a reactive object
let count = ref(0);

function increaseCount() {
	count.value++;
}

const textStyle = computed(() => ({
	color: count.value > 5 ? 'red' : 'black' 
}));

</script>

<template>
	<p>In vue a state is a REACTIVE VARIABLE</p>
	<p>{{JSON.stringify(textStyle)}}</p>
	<p :style="textStyle">count = {{count}}</p>
	<button @click="increaseCount" >Increase</button>
</template>

<style scoped>
</style>
