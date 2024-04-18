<script setup lang="ts">
const route = useRoute();
const { $sayHello } = useNuxtApp();
const { sayHello } = useUtils();
sayHello();
$sayHello("from index");
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
