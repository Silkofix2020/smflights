<template>
  <div class="discover-card">
    <div class="discover-card__img">
      <img class="discover-card__item" :src="bgImg" alt="" />
      <div v-if="maskShow" class="mask"></div>
    </div>
    <div class="discover-card__content">
      <h2 class="discover-card__title">{{ title }}</h2>
      <p class="discover-card__text">
        {{ text }}
      </p>
      <NuxtLink class="discover-card__link" :to="pageLink">
        <svg
          v-if="isAvailable"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.82682 0.164084L6.82682 1.74612C6.82682 1.83596 6.86585 1.9219 6.93416 1.98244L11.8581 6.25783L0.868531 6.25783C0.78266 6.25783 0.712402 6.32815 0.712402 6.41408L0.712402 7.58596C0.712402 7.6719 0.78266 7.74221 0.868531 7.74221L11.8581 7.74221L6.93416 12.0176C6.86585 12.0762 6.82682 12.1621 6.82682 12.2539L6.82682 13.836C6.82682 13.9688 6.9849 14.041 7.08443 13.9531L14.5494 7.47072C14.6169 7.41213 14.6711 7.33968 14.7082 7.2583C14.7453 7.17692 14.7646 7.08851 14.7646 6.99904C14.7646 6.90958 14.7453 6.82117 14.7082 6.73979C14.6711 6.65841 14.6169 6.58596 14.5494 6.52737L7.08443 0.0468967C6.98295 -0.040994 6.82682 0.0312717 6.82682 0.164084Z"
            fill="#A4A4A4"
          />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#A4A4A4"
            d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm0-2h12V10H6zm6-3q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6zM6 20V10z"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  index: Number,
  title: String,
  text: String,
  bgImg: String,
  class: String,
  pageLink: String,
  maskShow: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

const backgroundImageClass = computed(() => {
  return {
    [`discover-card__bg-${props.index}`]: true,
  };
});
</script>

<style lang="scss">
.discover-card {
  width: 100%;
  max-width: 360px;
  height: 330px;
  border: 0.03125em solid #f0f0f0;
  border-radius: 5px;
  color: #4e4e4e;
  box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.07);
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    box-shadow: 0 35px 35px -35px rgba(101, 93, 78, 0.5);
    .discover-card__bg {
      transform: scale(1.03);
    }
  }

  &__img {
    position: relative;
    width: 100%;
    height: 165px;
    background-size: cover;
    background-position: center;
    transition: 0.3s;
    &-0 {
      background-image: url("/public/img/Rectangle 63.png");
    }
    &-1 {
      background-image: url("/public/img/Rectangle 64.png");
    }
    &-2 {
      background-image: url("/public/img/Rectangle 65.png");
    }
  }
  &__item {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  &__content {
    display: flex;
    flex-direction: column;
    height: calc(100% - 165px);
    justify-content: space-between;
    padding: 24px 14px 13px 30px;
    gap: 16px;
  }
  &__title {
    font-size: 20px;
    line-height: 16px;
  }
  &__text {
    font-size: 16px;
    line-height: 16px;
  }
  &__link {
    width: 20px;
    height: 20px;
    align-self: flex-end;
  }
}
.mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.3);
}
</style>
