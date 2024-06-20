<template>
  <div :class="class" class="container">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1108px;

  @media (max-width: 760px) {
    padding: 0 10px;
  }
}
</style>
