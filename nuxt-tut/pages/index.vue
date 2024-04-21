<script setup lang="ts">
const route = useRoute();
const { $sayHello } = useNuxtApp() as any;
const { sayHello } = useUtils();
$sayHello("from index");
sayHello();
/* 
definePageMeta({
  middleware: ["auth"],
}); */
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <p>Nuxt Content : <ContentDoc /></p>
  </div>
</template>
