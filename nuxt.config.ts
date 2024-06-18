import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "SM Flights",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Описание вашего сайта",
        },
        { name: "keywords", content: "aviation, flights, booking" },
        // Open Graph meta tags
        {
          property: "og:title",
          content: "SM Flights - Your Reliable Flight Booking Service",
        },
        {
          property: "og:description",
          content: "Book your flights easily and quickly with SM Flights.",
        },
        {
          property: "og:image",
          content: "https://smflights.vercel.app/og-image.png",
        },
        { property: "og:url", content: "https://smflights.vercel.app" },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
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
