// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ["~/plugins/v-click-outside.js", "~/plugins/loading.js"],
  nitro: {
    prerender: {
      routes: ["/privacy"],
    },
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/main.scss"],
});
