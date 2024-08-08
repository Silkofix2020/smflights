<template>
  <UContainer>
    <div class="about-us">
      <div class="about-us__item">
        <img class="about-us__image" src="/img/about-team.webp" alt="team" />
      </div>
      <ContentDoc :path="`/about`" class="about-us__content"></ContentDoc>
    </div>
    <div class="how-it-works">
      <h2 class="how-it-works__title">How SM Flights Works</h2>
      <HorizontLine />
      <div class="how-it-works__wrapper">
        <div v-for="item in howItWorks" class="how-it-works__item">
          <div v-html="item.icon" class="how-it-works__item-image"></div>
          <h4 class="how-it-works__item-title">{{ item.title }}</h4>
          <p class="how-it-works__item-text">{{ item.text }}</p>
        </div>
      </div>
      <HorizontLine />
    </div>
    <div class="long-read">
      <ContentDoc
        :path="`/how-sm-flights-offers-cheap-flights`"
        class="long-read__content"
      ></ContentDoc>
    </div>
  </UContainer>
</template>
<script setup>
import UContainer from "~/components/Container/UContainer.vue";
import HorizontLine from "~/components/HorizontLine.vue";

useHead({
  title: "About",
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

const howItWorks = [
  {
    title: "Finding the Best Flight Deals",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
    text: "At SM Flights, we have special agreements with airlines and access to exclusivefares you won’t find online. Discover amazing deals to popular destinations worldwide by reaching out to your travel agent.",
  },
  {
    title: "Hunting for the Most Affordable Flights",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    text: "Our dedicated team searches tirelessly for the best flight deals, scouring for discounts, secret offers, and error fares around the clock. We’ll personally reach out to you with the top options available",
  },
  {
    title: "Making Payments Securely",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    text: "Once you’ve confirmed your travel plans, you can book securely online with SM Flihts. We offer a range of secure payment options to ensure your data and personal information are protected, giving you peace of mind throughout the process.",
  },
];
</script>
<style lang="scss">
.about-us {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 764px) {
    flex-direction: column;
  }

  &__item {
    width: 300px;
    @media (max-width: 764px) {
      width: 100%;
    }
  }
  &__image {
    width: 100%;
  }
  &__content {
    width: 70%;
    @media (max-width: 764px) {
      width: 100%;
    }
  }
}
.how-it-works {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 764px) {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
  &__item {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    @media (max-width: 764px) {
      width: 100%;
      gap: 15px;
    }

    &-image {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: #c2cff066;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ff6f00;
    }
  }
}
.long-read {
  &__content {
    @media (max-width: 764px) {
      margin-bottom: 15px;
    }
    & p {
      margin-bottom: 15px;
    }
    @media (max-width: 764px) {
      & h3 {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
