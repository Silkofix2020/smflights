<template>
  <footer class="footer">
    <UContainer :class="'footer__container'">
      <ul class="footer__list">
        <h3 class="footer__title">Passengers</h3>
        <li class="footer__item">
          <NuxtLink class="footer__link" to="/airlines">Airlines</NuxtLink>
        </li>
      </ul>
      <ul class="footer__list">
        <h3 class="footer__title">Business and Community</h3>
        <li class="footer__item">
          <NuxtLink class="footer__link" to="/about">About us</NuxtLink>
        </li>
        <li>
          <NuxtLink class="footer__link" to="/partnerships"
            >Partnerships</NuxtLink
          >
        </li>
      </ul>
      <ul class="footer__list">
        <h3 class="footer__title">General</h3>
        <li class="footer__item">
          <NuxtLink class="footer__link" to="/terms">Terms of Service</NuxtLink>
        </li>
        <li>
          <NuxtLink class="footer__link" to="/contact">Contact us</NuxtLink>
        </li>
      </ul>
    </UContainer>
  </footer>
</template>

<script setup>
import UContainer from "./Container/UContainer.vue";

const passengers = [{}];
const business = [{}];
const general = [{}];
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: #c2cff0;
  &__container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    padding: 36px 0;
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
