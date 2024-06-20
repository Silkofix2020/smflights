<template>
  <Header />

  <Footer />
</template>
<script setup>
import { useFormStore } from "../store/formStore";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const formStore = useFormStore();

useHead({
  title: "About Us - SM Flights",
  meta: [
    {
      name: "description",
      content: "Learn more about SM Flights and what we offer.",
    },
    { name: "keywords", content: "about, SM Flights, company information" },
    { property: "og:title", content: "About Us - SM Flights" },
    {
      property: "og:description",
      content: "Learn more about SM Flights and what we offer.",
    },
    {
      property: "og:image",
      content: "https://smflights.vercel.app/og-image.jpg",
    },
    { property: "og:url", content: "https://smflights.vercel.app/about" },
    { property: "og:type", content: "article" },
  ],
});
</script>
<style>
.container1 {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
