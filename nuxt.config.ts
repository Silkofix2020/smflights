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
          content: "Book your flights easily and quickly with SM Flights.",
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
          content: "https://www.smflights.com/og-image.png",
        },
        { property: "og:url", content: "https://www.smflights.com" },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-gtag",
    "@nuxtjs/robots",
    "@nuxt/content",
    "@nuxt/image",
  ],
  content: {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
      anchorLinks: false, // Отключить якорные ссылки
    },
  },
  gtag: {
    id: "G-453R0PVPBW",
    config: {
      anonymize_ip: true, // опционально, анонимизация IP
      send_page_view: false, // опционально, отправка просмотра страниц
    },
  },
  sitemap: {
    xsl: false,
    hostname: "https://www.smflights.com",
    gzip: true,
    routes: [
      "/about",
      "/result",
      "/privacy",
      "/success",
      "/airlines",
      "/contacts",
      // дополнительные маршруты
    ],
  },
  robots: {
    UserAgent: "*",
    Disallow: "/admin",
    Allow: "/",
    Sitemap: "https://www.smflights.com/sitemap.xml",
  },
  plugins: ["~/plugins/v-click-outside.js", "~/plugins/loading.js"],
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/variables.scss";`,
        },
      },
    },
  },
});
