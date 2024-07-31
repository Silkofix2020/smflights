<template>
  <UnderConstruction />
</template>
<script setup>
import { useRouter } from "vue-router";
import UnderConstruction from "~/components/UnderConstruction.vue";

definePageMeta({
  layout: "construction",
});

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/");
  }, 2000);
});
</script>
<style lang="scss">
.result__hero {
  height: 580px;
  @media (max-width: 760px) {
    height: auto;
  }
}
.content {
  width: 100%;
  padding: 20px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &__fare {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
