<template>
  <a class="partner-card__link" :href="homepage" target="_blank">
    <div class="partner-card">
      <div class="wrapppper">
        <div class="partner-card__logo">
          <img
            v-lazy="logo"
            :src="logo"
            :alt="icao_code"
            class="partner-card__item"
          />
        </div>
        <div class="partner-card__info">
          <h3 class="partner-card__title">{{ props.name }}</h3>
          <p class="partner-card__code">
            ICAO: <strong>{{ icao_code }}</strong>
          </p>
          <p class="partner-card__count">
            Amount aircraft: <strong>{{ num_aircraft }}</strong>
          </p>
        </div>
      </div>
      <div class="discript">
        <p>
          American Airlines, founded in 1930, is one of the largest airlines in
          the world. Headquartered in Fort Worth, Texas, it operates a vast
          network of domestic and international flights, serving over 350
          destinations in more than 50 countries. As a founding member of the
          Oneworld alliance, American Airlines provides its passengers with a
          wide range of travel options and benefits. The airline is known for
          its comprehensive frequent flyer program, AAdvantage, and offers
          various in-flight services and amenities to enhance the passenger
          experience. With a modern fleet of over 800 aircraft, American
          Airlines is committed to safety, customer service, and innovation in
          the aviation industry.
        </p>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  name: String,
  logo: String,
  icao_code: String,
  num_aircraft: Number,
  homepage: String,
});
</script>

<style lang="scss">
.partner-card {
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  border: 0.03125em solid #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.07);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 35px 35px -35px rgba(101, 93, 78, 0.5);
    cursor: pointer;
  }
  &__logo {
    width: 100px;
    height: 100px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 0 1px rgba($color: #000000, $alpha: 0.2);
  }
  &__item {
    width: 100%;
  }
  & strong {
    color: #000000;
  }
  &__link {
    text-decoration: none;
    color: inherit;
  }
}
.discript {
  border: 1px solid gray;
}
.wrapppper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 360px;
}
</style>
