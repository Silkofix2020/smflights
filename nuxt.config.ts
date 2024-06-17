// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ["/privacy"],
    },
  },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/main.scss"],
});
