<template>
  <div class="under-construction">
    <div class="under-construction__item">
      <h4 class="under-construction__title">Under Construction</h4>
      <AnimatedDots />
    </div>
  </div>
</template>

<script setup>
import AnimatedDots from "~/components/animation/AnimatedDots.vue";
</script>

<style lang="scss">
.under-construction {
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__item {
    display: flex;
  }
}
</style>
