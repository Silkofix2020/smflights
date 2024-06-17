<template>
  <main>
    <section class="book">
      <Form class="book__form" />
    </section>
    <div class="some">
      <div class="some__header">
        <div class="some__title-group">
          <h3 class="some__title">Traveling from your location</h3>
          <h4 class="some__subtitle">round trip - one passenger</h4>
        </div>
        <a href="#" class="some__link">Explore more destinations</a>
      </div>

      <div class="some__cards">
        <OfferCard
          v-for="card in cards"
          :key="card.title"
          :title="card.title"
          :discript="card.discript"
          :img="card.img"
          :logo="card.logo"
          :price="card.price"
          :button="card.button"
        />
      </div>
    </div>
    <div class="discover">
      <div class="some__header">
        <h3 class="some__title">Discover</h3>
      </div>
      <div class="discover__cards">
        <DiscoverCard
          v-for="discoverCard in discoverCards"
          :key="discoverCard.index"
          :index="discoverCard.index"
          :title="discoverCard.title"
          :text="discoverCard.text"
          :bgImg="discoverCard.bgImg"
        />
      </div>
    </div>
    <div class="some">
      <div class="some__header">
        <div class="some__title-group">
          <h3 class="some__title">Cheap flights selected for you</h3>
        </div>
      </div>
      <div class="some__cards">
        <OfferCard
          v-for="cheap in cheap"
          :key="cheap.title"
          :title="cheap.title"
          :discript="cheap.discript"
          :img="cheap.img"
          :logo="cheap.logo"
          :price="cheap.price"
          :cardClass="cheap.cardClass"
          :priceClass="cheap.priceClass"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import Form from "./Form/Form.vue";
import OfferCard from "./Card/OfferCard.vue";
import DiscoverCard from "./Card/DiscoverCard.vue";
import UContainer from "./Container/UContainer.vue";

const cards = [
  {
    title: "London",
    discript: "Apr 5-8 <br/> Direct flight 5h 15 min",
    img: "/img/Rectangle52.png",
    logo: "/img/KLM.png",
    price: 35,
    cardClass: "yellow50",
    priceClass: "red",
    button: true,
  },
  {
    title: "Rome",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 53.png",
    logo: "/img/JBU.png",
    price: 45,
    button: false,
  },
  {
    title: "Madrid",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 54.png",
    logo: "/img/DLH.png",
    price: 25,
    button: false,
  },
  {
    title: "Paris",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 55.png",
    logo: "/img/AFR.png",
    price: 55,
    button: true,
  },
];

const cheap = [
  {
    title: "London",
    discript: "Apr 5-8 <br/> Direct flight 5h 15 min",
    img: "/img/Rectangle52.png",
    logo: "/img/KLM.png",
    price: 35,
    cardClass: "yellow50",
    priceClass: "red",
  },
  {
    title: "Rome",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 53.png",
    logo: "/img/JBU.png",
    price: 45,
    cardClass: "yellow50",
    priceClass: "red",
  },
  {
    title: "Madrid",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 54.png",
    logo: "/img/DLH.png",
    price: 25,
    cardClass: "yellow50",
    priceClass: "red",
  },
  {
    title: "Paris",
    discript: "Oct 5-8 <br /> Direct flight 3h 15 min",
    img: "/img/Rectangle 55.png",
    logo: "/img/AFR.png",
    price: 55,
    cardClass: "yellow50",
    priceClass: "red",
  },
];
const discoverCards = [
  {
    index: 0,
    title: "Latest travel restrictions",
    text: "We provide information on the entry requirements for all countries so you can plan your flight smoothly",
    bgImg: "/img/Rectangle 63.png",
  },
  {
    index: 1,
    title: "Install our mobile app",
    text: "Our mobile app provides real-time information when you are at the airport",
    bgImg: "/img/Rectangle 64.png",
  },
  {
    index: 2,
    title: "The most beautiful destinations",
    text: "Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022",
    bgImg: "/img/Rectangle 65.png",
  },
];
</script>

<style lang="scss">
.book {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1108px;
  padding: 45px 0 0 0;
  &__form {
    position: absolute;
    top: -130px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
.some,
.discover {
  margin: 0 auto;
  width: 100%;
  max-width: 1108px;
  padding: 45px 0;

  &__cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 11px;
  }
  &__link {
    text-decoration: none;
    color: #041bd7;
  }
  &__title {
    font-weight: 500;
    font-size: 16px;
    color: #4e4e4e;
  }
  &__subtitle {
    font-weight: 300;
    font-size: 14px;
  }
}
.discover {
  padding: 0;
  &__cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
