<template>
  <div class="success">
    <div class="success-image">
      <img
        class="success-image__item"
        src="/img/call-center-concept.webp"
        alt=""
      />
    </div>
    <div class="success-text">
      <h2>Thank you! We will call you soon!</h2>
      <h4 class="success-subtitle">
        Redirect
        <AnimatedDots />
      </h4>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "#app";

import AnimatedDots from "~/components/animation/AnimatedDots.vue";

useHead({
  title: "Success",
  meta: [{ name: "description", content: "Thank you! We will call you soon!" }],
});

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/");
  }, 4000);
});
</script>

<style lang="scss">
.success {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  &-image {
    width: 300px;
    &__item {
      width: 100%;
    }
  }
  &-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-subtitle {
    display: flex;
    gap: 5px;
  }
}
</style>
