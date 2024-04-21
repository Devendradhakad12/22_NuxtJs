// https://nuxt.com/docs/api/configuration/nuxt-config
//import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@/*": "./src/*",
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/content", "@pinia/nuxt"],
  routeRules: {
    "/events": { ssr: false },
    "/state": { ssr: true },
  },
  hooks:{
      "ready":(ctx)=>console.log("context from hook",ctx)
  },
  
});
