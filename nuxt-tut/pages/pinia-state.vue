<script setup>
import { useCounterStore } from "~/stores/myStore";
const  store = useCounterStore();
 
</script>

<template>
  <h1>Pinia State</h1>
  <h2>Count: {{ store.count }}</h2>
 
  <h2>doubleCount: {{ store.doubleCount }}</h2>
  <button @click="store.increment">Increment</button>
</template>
