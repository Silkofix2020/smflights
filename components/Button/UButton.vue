<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #c96262;
  }
}
</style>
