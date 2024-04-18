<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <p>ID: {{ $route.params.id }}</p>
    <Profile />
  </div>
</template>
