<template>
  <div class="success">
    <h2>Thank you! We will call you soon!</h2>
    <h4 class="success-subtitle">
      Redirect
      <div class="animate">
        <span class="animate__item">.</span>
        <span class="animate__item">.</span>
        <span class="animate__item">.</span>
      </div>
    </h4>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "#app";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/");
  }, 2000);
});
</script>

<style lang="scss">
.image-wrap {
  &__item {
    max-width: 266px;
    border-radius: 50%;
  }
}
.success {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-subtitle {
    display: flex;
    gap: 5px;
  }
}
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
@keyframes jump2 {
}
@keyframes jump3 {
}
</style>
