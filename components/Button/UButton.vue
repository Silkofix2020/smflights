<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 10px;
  background: #f1f1f1;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #c96262;
  }
}
</style>
