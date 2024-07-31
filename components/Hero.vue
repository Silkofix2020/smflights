<template>
  <div class="hero" :class="class">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss">
.hero {
  position: relative;
  padding: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url(/img/header-bg.webp);
  height: 400px;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    height: 840px;
  }
}
</style>
