<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div class="flex gap-4 justify-center items-center mt-3">
    <button @click="counter++" class="border border-white px-4 py-1">+</button>
    <button @click="counter--" class="border border-white px-4 py-1">-</button>
  </div>
  <Counter />
</template>
