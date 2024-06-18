<template>
  <Header class="result__header" />
  <Hero :class="'result__hero'">
    <UContainer>
      <div class="content">
        <div class="content__fare">
          <h2 class="content__title">
            {{ formStore.from }}
            <span v-if="formStore.from !== '' && formStore.to !== ''">-</span>
            {{ formStore.to }}
          </h2>
          <FareCard />
        </div>
        <div class="content__request">
          <RequestCard />
        </div>
      </div>
      ></UContainer
    >
  </Hero>

  <Footer />
</template>
<script setup>
useHead({
  title: "Search Result",
  meta: [{ name: "description", content: "My amazing site." }],
});
import { useFormStore } from "../store/formStore";
import FareCard from "/components/Card/FareCard.vue";
import RequestCard from "/components/Card/RequestCard.vue";
import UContainer from "/components/Container/UContainer.vue";
import { useFetch } from "nuxt/app";

const formStore = useFormStore();

const sendToGoogleSheets = async () => {
  const { data, error } = await useFetch("YOUR_GOOGLE_SHEETS_API_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: formStore.from,
      to: formStore.to,
      // Добавьте другие необходимые данные
    }),
  });
  if (error.value) {
    console.error("Error sending data:", error.value);
  } else {
    console.log("Data sent successfully:", data.value);
  }
};
</script>
<style lang="scss">
.result__hero {
  height: 500px;
}
.content {
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__title {
    text-align: center;
    color: #ffffff;
    padding: 10px 0;
    font-weight: 500;
    letter-spacing: 1px;
  }
  &__offer {
    width: 45%;
    height: 200px;
    background-color: black;
  }

  &__form {
    width: 45%;
    height: 200px;
    background-color: black;
  }
}
</style>
