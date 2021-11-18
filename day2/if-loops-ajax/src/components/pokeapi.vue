<script setup>
import { ref, watchEffect } from 'vue';
const pokemonId = ref(0);
const pokemonData = ref({});
const isLoading = ref(false);

async function getPokemonDetails() {
    isLoading.value = true;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId.value}`);
    isLoading.value = false;
    pokemonData.value = await res.json();    
}

watchEffect(() => {
    getPokemonDetails();
});

</script>

<template>
    <label>
        Pokemon ID
        <input type="number" v-model="pokemonId" />
    </label>
    
    <button @click="getPokemonDetails">Get Pokemon Data</button>
    <div>
        <p v-if="isLoading">Please wait...</p>
        <p v-else>Your pokemon name is: {{pokemonData.name}}</p>
    </div>
    
</template>

<style scoped>
</style>