<template>
  <header class="header">
    <UContainer class="wrap">
      <NuxtLink class="header__logo" to="/">
        <Logo />
      </NuxtLink>
      <nav class="header__nav">
        <BurgerMenu />
      </nav>
    </UContainer>
  </header>
</template>

<script setup>
import BurgerMenu from "./BurgerMenu.vue";
import UContainer from "./Container/UContainer.vue";
</script>

<style lang="scss">
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header {
  width: 100%;
  color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.21);
  & .wrap {
    padding: 0;
    @media (max-width: 760px) {
      padding: 4px 18px;
      justify-content: space-between;
    }
  }
  &__logo {
    @include nunito-sans;
    display: flex;
    gap: 10px;
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

.header-text__wrapper {
  display: flex;
  align-items: center;
}

.header-img__wrapper {
  max-height: 50px;
}
.header-img__item {
  width: 50px;
}
</style>
