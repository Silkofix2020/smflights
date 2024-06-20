<template>
  <div class="loader"></div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.loader {
  position: absolute;
  right: 10px;
  width: 25px;
  height: 25px;
  border: 4px solid #ccc;
  border-top: 4px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
