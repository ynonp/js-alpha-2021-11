<script setup>
import { ref, computed } from 'vue';

const seconds = ref(0);

const minutes = computed({
    get: () => seconds.value / 60,
    set: (val) => {
        seconds.value = val * 60;
    }
});
const hours = computed({
    get: () => seconds.value / 3600,
    set: (val) => {
        seconds.value = val * 3600;
    }
});
</script>

<template>
    <div class="clock">
    <label>
        Seconds
        <input type="number" v-model="seconds" />
    </label>

    <label>
        Minutes
        <input type="number" v-model="minutes" />
    </label>

    <label>
        Hours
        <input type="number" v-model="hours" />
    </label>
    </div>
</template>

<style scoped>
    .clock {
        margin: 20px 0;
    }

    label {
        display: block;
        margin-top: 5px;
    }
</style>