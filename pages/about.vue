<template>
  <Header />
  <div class="container">
    <div class="content-container">
      <h2 class="content-container__title">What is SM Flights?</h2>
      <div class="about">
        <div class="about__item">
          <p class="about__text"></p>
          <strong>At SmFlights</strong>, we combine the convenience of online
          booking with the personal touch of expert travel managers. Our
          dedicated team, driven by a love of travel, uses their extensive
          experience to offer you tailored flight options that align with your
          preferences and budget.
        </div>
        <div class="about__item">
          <p class="about__text">
            Our service goes beyond algorithms; we provide a human connection,
            ensuring you have all the information and support you need. From
            carefully selected tickets to personalized advice on where to enjoy
            the best local experiences, our managers are just a call away.
          </p>
        </div>
        <div class="about__item">
          <p class="about__text">
            Discover effortless travel with SmFlights. We save our customers
            money and time with the help of our expert travel managers, our
            advanced technology used to find the best deals on tickets, and
            direct partnerships with airlines.
          </p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <h3 class="content-container__subtitle">How SM Flights Works?</h3>
      <h2 class="content-container__title">Simple and Fast</h2>
      <div class="content-container__wrapper">
        <InfoCard
          v-for="(item, index) in content"
          :key="index"
          :title="item.title"
          :text="item.text"
          :image="item.image"
          :hasAfter="item.hasAfter"
        />
      </div>
    </div>
    <div class="content-container">
      <h2 class="content-container__title">SM Flights Services</h2>
      <div class="content-container__wrapper">
        <InfoCard
          v-for="(item, index) in service"
          :key="index"
          :title="item.title"
          :text="item.text"
          :image="item.image"
        />
      </div>
    </div>
  </div>

  <Footer />
</template>
<script setup>
import { useFormStore } from "../store/formStore";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import InfoCard from "../components/Card/InfoCard.vue";

useHead({
  title: "About Us - SM Flights",
  meta: [
    {
      name: "description",
      content: "Learn more about SM Flights and what we offer.",
    },
    { name: "keywords", content: "about, SM Flights, company information" },
    { property: "og:title", content: "About Us - SM Flights" },
    {
      property: "og:description",
      content: "Learn more about SM Flights and what we offer.",
    },
    {
      property: "og:image",
      content: "https://smflights.vercel.app/og-image.jpg",
    },
    { property: "og:url", content: "https://smflights.vercel.app/about" },
    { property: "og:type", content: "article" },
  ],
});

const content = ref([
  {
    title: "Call for Cheap Flights",
    text: "ASAP Tickets has unique contracts with Airlines and access to unpublished fares unavailable online. Uncover the best deals to top destinations around the world by calling your Travel Agent.",
    image: "/img/pic_call.svg",
    hasAfter: true,
    hasBefore: false,
  },
  {
    title: "Get FREE Quotes",
    text: "Free trip planning and personalized itineraries available 24/7. Discuss travel plans with your personal travel agent and get as many details as you need.",
    image: "/img/pic_diamond.svg",
    hasAfter: true,
    hasBefore: false,
  },
  {
    title: "Pay Securely",
    text: "Confirm your travel and book securely online. ASAP Tickets offer a variety of payment solutions, and we want you to feel confident by protecting your data and sensitive details.",
    image: "/img/pic_secure.svg",
    hasAfter: true,
    hasBefore: false,
  },
]);

const service = ref([
  {
    title: "Most budget-friendly flight options",
    image: "/img/service-1.webp",
    text: "",
  },
  {
    title: "Get professional support",
    image: "/img/service-2.webp",
    text: "",
  },
  {
    title: "Safe payment",
    image: "/img/service-3.webp",
    text: "",
  },
]);
</script>
<style lang="scss">
.about {
  display: flex;

  align-items: stretch;
  gap: 20px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }

  &__item {
    width: 50%;
    padding: 20px;
    border-radius: 5px 40px;
    box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);

    @media (max-width: 760px) {
      width: 98%;
    }
  }
}
.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;

  &__title {
    margin: 30px 0 40px;
    &:nth-child(2) {
      margin-top: 0;
    }
  }

  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 760px) {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
