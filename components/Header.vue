<template>
  <header class="header">
    <div class="wrap">
      <NuxtLink class="header__logo" to="/">
        <span class="header__logo header__logo--bold">S</span>m<span
          class="header__logo header__logo--bold"
          >F</span
        >lights
      </NuxtLink>
      <nav class="header__nav">
        <BurgerMenu />
      </nav>
    </div>
  </header>
</template>

<script setup>
import BurgerMenu from "./BurgerMenu.vue";
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.wrap {
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px 30px;

  @media (max-width: 760px) {
    padding: 10px 18px 0;
  }
}

.header {
  width: 100%;
  overflow: hidden;
  color: #fff;
  text-shadow: 7px 8px 12px rgba(0, 0, 0, 0.21);
  background-color: #f5f8ff;
  &__logo {
    @include nunito-sans;
    font-size: 30px;
    text-decoration: none;
    font-weight: 400;
    color: #000000;
    &--bold {
      font-weight: 700;
      background: linear-gradient(to right, #ff7e5f, #feb47b);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
