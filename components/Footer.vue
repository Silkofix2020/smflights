<template>
  <footer class="footer">
    <UContainer :class="'footer__container'">
      <nav class="footer__nav">
        <ul class="footer__list">
          <li v-for="item in links" class="footer__item">
            <NuxtLink class="footer__link" :to="`${item.link}`">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="footer__info">
        <p class="info__item">© 2024 SM Flights. All rights reserved.</p>
        <p class="info__item">
          SM Flights is an online flight booking website that has been designed
          to bridge the world through its innovative technology and personalized
          service. We believe in creating a global one-stop airline ticket
          booking solution, but acting locally to create tailored customer
          experiences. Enjoy the cheapest flight deals at wholesale prices and
          our customer service - because where you book matters.
        </p>
      </div>
      <div class="footer__payments">
        <NuxtImg
          v-for="item in paymentSystems"
          class="footer__payments-item"
          format="webp"
          :src="`${item.logo}`"
          alt="payment system"
        />
      </div>
    </UContainer>
  </footer>
</template>

<script setup>
import UContainer from "./Container/UContainer.vue";

const links = [
  { title: "About", link: "/about" },
  { title: "Service & Contact", link: "/service-and-contact" },
  { title: "Privacy", link: "/privacy" },
  { title: "Terms & Conditions", link: "/terms-and-conditions" },
];

const paymentSystems = [
  { title: "VISA", logo: "/img/payment-logos/visa.svg" },
  { title: "MasterCard", logo: "/img/payment-logos/mastercard.svg" },
  { title: "Maestro", logo: "/img/payment-logos/maestro.svg" },
  { title: "Paypal", logo: "/img/payment-logos/paypal.svg" },
  { title: "American Express", logo: "/img/payment-logos/amex.svg" },
];
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: rgba($color: #c2cff0, $alpha: 0.4);
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 36px 10px;
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
    width: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
  }
  &__link {
    text-decoration: none;
    color: #727171;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  &__payments {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    &-item {
      width: 80px;

      @media (max-width: 764px) {
        width: 60px;
      }
    }
  }
  &__info {
    color: #727171;
    font-size: 12px;
  }
}
</style>
