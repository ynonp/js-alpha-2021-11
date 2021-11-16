<script setup>
import { ref, computed, watchEffect } from 'vue';

const db = {
  Israel: [ 'Jerusalem', 'Tel Aviv', 'Ashdod' ],
  England: [ 'London', 'Manchester' ],
};

const countries = Object.keys(db);
const selectedCountry = ref("");
const cities = computed(() => db[selectedCountry.value] || []);
const selectedCity = ref("");

watchEffect(() => {
  if (!cities.value.includes(selectedCity.value)) {
    selectedCity.value = '';
  }
});

</script>

<template>
<div>
  <select v-model="selectedCountry">
    <option value="" disabled="true">Please select a country</option>
    <option v-for="country in countries" :value="country">{{country}}</option>
  </select>

  <p>Selected country = {{selectedCountry}}</p>
  <pre>Cities = {{cities}}</pre>

  <select v-model="selectedCity">
    <option value="" disabled="true">Please select city</option>
    <option v-for="city in cities" :value="city">{{city}}</option>
  </select>
  <p>You selected country = {{selectedCountry}} and city = {{selectedCity}}</p>
</div>
</template>

<style scoped>
</style>
