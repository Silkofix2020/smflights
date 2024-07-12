<template>
  <NuxtLayout></NuxtLayout>
</template>
<script setup>
import { NuxtLoadingIndicator } from "#components";

useHead({
  script: [
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11141675864');
      `,
      type: "text/javascript",
    },
  ],
  __dangerouslyDisableSanitizersByTagID: {
    "gtag-config": ["innerHTML"],
  },
});
</script>
<style>
.wrapper {
  margin: 0 auto;
  padding: 0 10px;
}
</style>
