export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (msg: string) => {
        return console.log(`Hello ${msg}`);
      },
    },
  };
});
