<template>
  <Header />
  <NuxtPage />
  <Footer />
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss"></style>
