<template>
  <UContainer>
    <ContentDoc :path="`/policy`" class="page__content"></ContentDoc>
  </UContainer>
</template>

<script setup>
import UContainer from "~/components/Container/UContainer.vue";

useHead({
  title: "SmFlights: Privacy Policy",
  meta: [
    {
      name: "keywords",
      content:
        "SmFlights privacy policy, our privacy policy rules, Privacy policy, personal information, privacy protection, secure information, personal data collection policy",
    },
    {
      name: "description",
      content:
        "SmFlights privacy policy, our privacy policy rules, Privacy policy, personal information, privacy protection, secure information, personal data collection policy",
    },
  ],
});
</script>

<style lang="scss">
.content__table {
  overflow-x: auto;
}
</style>
