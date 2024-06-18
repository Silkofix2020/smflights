<template>
  <Header />
  <div v-html="policyMarkdown" class="privacy__content"></div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { marked } from "marked";

useHead({
  title: "SmFlights: Privacy Policy",
  meta: [
    {
      name: "Keywords",
      content:
        "SmFlights privacy policy, our privacy policy rules, Privacy policy, personal information, privacy protection, secure information, personal data collection policy",
    },
  ],
});

const policyMarkdown = ref("");

onMounted(async () => {
  const response = await fetch("static/policy.md");
  if (response.ok) {
    const markdownText = await response.text();
    policyMarkdown.value = marked(markdownText);
  } else {
    policyMarkdown.value = "Error loading policy file.";
  }
});
</script>

<style lang="scss">
.privacy__content {
  width: 100%;
  max-width: 1108px;
  margin: 0 auto;
  padding: 10px;
  color: #7e7e7e;
  &__table {
    width: 100%;
    overflow: auto;
  }
}
.privacy__content h1,
.privacy__content h2,
.privacy__content h3,
.privacy__content h4,
.privacy__content h5,
.privacy__content h6 {
  margin: 5px 0;
  color: #000000;
}
table {
  width: 100%;
  max-width: 1108px;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
  width: 33.33%;
  vertical-align: top;
}
</style>
