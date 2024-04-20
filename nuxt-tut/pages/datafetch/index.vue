<script setup>
const {
  data: count,
  pending: countPending,
  refresh,
} = await useLazyAsyncData("counts", () => $fetch("/api/count"));
const { data: pro, pending } = await useLazyFetch("/api/hello", {
  transform: (data) => data,
});
const refreshCount = () => {
  refreshNuxtData("counts");
};
//console.log(toRaw(pro.value));
</script>

<template>
  <p>{{ pending ? "Loading..." : pro[0] }}</p>
  <hr />
  <p>Count: {{ countPending ? "Loading..." : count }}</p>
  <button @click="refreshCount">Refresh</button>
</template>
