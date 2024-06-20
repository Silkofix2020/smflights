<template>
  <button :class="class">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss">
.form-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  border: none;
  border-radius: 5px;
  padding: 5px 50px;
  background-color: #ff6f00;
  color: #fff;
  cursor: pointer;
  &:hover {
    @media (hover: hover) {
      background-color: #feb47b;
    }
  }

  @media (hover: none) {
    &:active {
      background-color: #feb47b;
    }
  }
}
.submit-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: #cc1f16;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  &:hover {
    @media (hover: hover) {
      background-color: #cc1f16;
    }
  }

  @media (hover: none) {
    &:active {
      background-color: darkred;
    }
  }
}
</style>
