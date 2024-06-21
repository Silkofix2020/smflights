<template>
  <footer class="footer">
    <UContainer :class="'footer__container'">
      <nav class="footer__nav">
        <ul class="footer__list">
          <h3 class="footer__title">Passengers</h3>
          <li class="footer__item">
            <NuxtLink class="footer__link" to="">Airlines</NuxtLink>
          </li>
        </ul>
        <ul class="footer__list">
          <h3 class="footer__title">Business and Community</h3>
          <li class="footer__item">
            <NuxtLink class="footer__link" to="/about">About us</NuxtLink>
          </li>
          <li>
            <NuxtLink class="footer__link" to="">Partnerships</NuxtLink>
          </li>
        </ul>
        <ul class="footer__list">
          <h3 class="footer__title">General</h3>
          <li class="footer__item">
            <NuxtLink class="footer__link" to="/privacy"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="footer__link" to="">Contact us</NuxtLink>
          </li>
        </ul>
      </nav>
    </UContainer>
  </footer>
</template>

<script setup>
import UContainer from "./Container/UContainer.vue";
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: #c2cff0;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 36px 0;
  }
  &__nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &__title {
    font-size: 16px;
    color: #4e4e4e;
  }
  &__list {
    list-style: none;
  }
  &__link {
    text-decoration: none;
    color: #727171;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
