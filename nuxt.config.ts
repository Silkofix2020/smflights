import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://yourwebsite.com",
    gzip: true,
    routes: [
      "/about",
      "/result",
      "/privacy",
      // дополнительные маршруты
    ],
  },
  plugins: ["~/plugins/v-click-outside.js", "~/plugins/loading.js"],
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  css: ["~/assets/scss/main.scss"],
});
