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
    url(/public/img/header-bg.webp);
  height: 400px;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.2);
  z-index: 1;
}
slot {
  z-index: 2;
}
</style>
