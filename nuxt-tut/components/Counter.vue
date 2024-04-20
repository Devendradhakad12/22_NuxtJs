<script setup lang="ts">
const counter =  useCounter()
</script>

<template>
  <div class="flex gap-4 justify-center items-center mt-3">
      <p>Counter Component</p>
    Counter: {{ counter }}
  </div>
</template>
