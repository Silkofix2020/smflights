<template>
  <main>
    <Hero>
      <section class="book">
        <div class="book-cta">
          <h2 class="book-cta__title">
            Book cheap flights and save up to 50% OFF
          </h2>

          <div class="book-cta__advantages">
            <div class="book-cta__item">
              <span class="book-cta__item--gold">30+</span> quotes in seconds
            </div>
            <div class="book-cta__item">
              <span class="book-cta__item--gold">$287+</span> savings on each
              ticket
            </div>
            <div class="book-cta__item">
              <span class="book-cta__item--gold">100%</span> free service
            </div>
          </div>
        </div>

        <div class="book__wrapper">
          <Form class="book__form" />
        </div>
      </section>
    </Hero>
    <UContainer>
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
            :backgroundImageClass="card.backgroundImageClass"
            :currency="card.currency"
          />
        </div>
      </div>
    </UContainer>
    <UContainer>
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
            :pageLink="discoverCard.pageLink"
            :maskShow="discoverCard.maskShow"
            :isAvailable="discoverCard.isAvailable"
          />
        </div></div
    ></UContainer>
    <UContainer>
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
            :backgroundImageClass="cheap.backgroundImageClass"
          />
        </div>
      </div>
    </UContainer>
  </main>
</template>

<script setup>
import Form from "./Form/Form.vue";
import OfferCard from "./Card/OfferCard.vue";
import DiscoverCard from "./Card/DiscoverCard.vue";
import UContainer from "./Container/UContainer.vue";

const cards = [
  {
    title: "New York",
    discript: "Direct flight 5h 15 min",
    img: "/img/patrick-tomasso-SVVTZtTGyaU-unsplash.jpg",
    logo: "/airlines/DAL.png",
    price: 35,
    cardClass: "yellow50",
    priceClass: "red",
    button: true,
    backgroundImageClass: "bg-new-york",
    currency: "$",
  },
  {
    title: "Miami",
    discript: "Direct flight 2h 15 min",
    img: "/img/aurora-kreativ-UN4cs4zNCYo-unsplash.jpg",
    logo: "/airlines/FFT.png",
    price: 45,
    button: false,
    backgroundImageClass: "bg-miami",
    currency: "$",
  },
  {
    title: "Las Vegas",
    discript: "Direct flight 4h 15 min",
    img: "/img/grant-cai-9xjdQ8-zLKI-unsplash.jpg",
    logo: "/airlines/UAL.png",
    price: 25,
    button: false,
    backgroundImageClass: "bg-las-vegas",
    currency: "$",
  },
  {
    title: "Los Angeles",
    discript: "Direct flight 3h 15 min",
    img: "/img/linda-pomerantz-zhang-u5ul0b-59-k-unsplash.jpg",
    logo: "/airlines/AAL.png",
    price: 55,
    button: true,
    backgroundImageClass: "bg-los-angeles",
    currency: "$",
  },
];

const cheap = [
  {
    title: "London",
    discript: "Direct flight 5h 15 min",
    img: "/img/Rectangle_52.png",
    logo: "/img/KLM.png",
    price: 35,
    cardClass: "yellow50",
    priceClass: "red",
    backgroundImageClass: "bg-london",
  },
  {
    title: "Rome",
    discript: "Direct flight 3h 15 min",
    img: "/img/Rectangle_53.png",
    logo: "/img/JBU.png",
    price: 45,
    cardClass: "yellow50",
    priceClass: "red",
    backgroundImageClass: "bg-rome",
  },
  {
    title: "Madrid",
    discript: "Direct flight 3h 15 min",
    img: "/img/Rectangle_54.png",
    logo: "/img/DLH.png",
    price: 25,
    cardClass: "yellow50",
    priceClass: "red",
    backgroundImageClass: "bg-madrid",
  },
  {
    title: "Paris",
    discript: "Direct flight 3h 15 min",
    img: "/img/Rectangle_55.png",
    logo: "/img/AFR.png",
    price: 55,
    cardClass: "yellow50",
    priceClass: "red",
    backgroundImageClass: "bg-paris",
  },
];
const discoverCards = [
  {
    index: 0,
    title: "How can SM Flights offer such cheap flights?",
    text: "Unlocking the Secrets to SM Flights' Affordable Airfare",
    bgImg: "/img/viktor-forgacs-1jhykJUftOc-unsplash.jpg",
    pageLink: "/longread/how-sm-flights-offers-cheap-flights",
    maskShow: false,
    isAvailable: true,
  },
  {
    index: 1,
    title: "Coming Soon",
    text: "Exciting new content is on the way. Stay tuned!",
    bgImg: "/img/blue-sky-plane-taking-off-260nw-1779337220.jpg",
    pageLink: "",
    maskShow: true,
    isAvailable: false,
  },
  {
    index: 2,
    title: "Coming Soon",
    text: "Exciting new content is on the way. Stay tuned!",
    bgImg: "/img/blue-sky-plane-taking-off-260nw-1779337220.jpg",
    pageLink: "",
    maskShow: true,
    isAvailable: false,
  },
];
</script>

<style lang="scss">
.book {
  margin: 0 auto;
  width: 100%;
  max-width: 1108px;
  &-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: #ffffff;
    padding: 20px 0;
    @media (max-width: 450px) {
      text-align: center;
    }

    &__advantages {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    &__item {
      width: calc(100% / 3);
      font-size: 18px;
      text-align: center;
      border-right: 1px solid #ffffff;
      padding: 0 20px;

      &:nth-child(3) {
        border: none;
      }
      &--gold {
        color: #ffd586;
        font-weight: 700;
      }
    }
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
