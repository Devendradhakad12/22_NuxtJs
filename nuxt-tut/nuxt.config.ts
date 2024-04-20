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
    "/": { swr: true },
    "/events": { ssr: false },
    "/state": { ssr: true },
  },
});
