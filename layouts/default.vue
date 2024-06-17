<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
  <SpeedInsights />
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<style lang="scss">
.wrapper {
  padding: 0;
  background-image: url(/public/img/header-bg.webp);
  height: 570px;
  background-size: cover;
  background-position: center;
}
</style>
