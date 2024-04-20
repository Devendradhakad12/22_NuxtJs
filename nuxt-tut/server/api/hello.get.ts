export default defineEventHandler(async (event) => {
  console.log("context", event.context);
  const res = await $fetch("https://jsonplaceholder.typicode.com/users");
  return res;
});

/* /api/hello */
