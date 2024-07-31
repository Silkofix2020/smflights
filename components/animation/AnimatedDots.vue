<template>
  <div class="animate">
    <span class="animate__item">.</span>
    <span class="animate__item">.</span>
    <span class="animate__item">.</span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.animate {
  position: relative;

  &__item {
    position: absolute;
    &:nth-child(1) {
      left: 0;
      animation: 0.7s ease-in infinite 0.2s jump1;
    }
    &:nth-child(2) {
      left: 5px;
      animation: 0.7s ease-in infinite 0.4s jump1;
    }
    &:nth-child(3) {
      left: 10px;
      animation: 0.7s ease-in infinite 0.6s jump1;
    }
  }
}
@keyframes jump1 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
