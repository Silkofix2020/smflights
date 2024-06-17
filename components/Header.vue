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
    <h1 class="header__title">We are here for you.</h1>
  </header>
</template>

<script setup>
import BurgerMenu from "./BurgerMenu.vue";
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.wrap {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px 120px 0;

  @media (max-width: 760px) {
    padding: 10px 18px 0;
  }
}

.header {
  position: relative;
  height: 570px;
  overflow: hidden;
  color: #fff;

  &__logo {
    @include nunito-sans;
    font-size: 40px;
    text-decoration: none;
    font-weight: 200;
    color: #fff;
    &--bold {
      font-weight: 700;
      background: linear-gradient(to right, #ff7e5f, #feb47b);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__title {
    text-align: end;
    padding: 151px 120px 0;
    text-shadow: 7px 8px 12px rgba(0, 0, 0, 0.21);

    @media (max-width: 760px) {
      padding: 225px 15px 0;
    }
  }
}
</style>
