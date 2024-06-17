<template>
  <div class="discover-card">
    <div :class="backgroundImageClass" class="discover-card__bg"></div>
    <div class="discover-card__content">
      <h2 class="discover-card__title">{{ title }}</h2>
      <p class="discover-card__text">
        {{ text }}
      </p>
      <a href="" class="discover-card__link">
        <svg
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
      </a>
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

  &__bg {
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
    width: 15px;
    height: 15px;
    align-self: flex-end;
  }
}
.full-width {
  width: calc(100% - 20px); /* Full width minus the margins */
  border: 2px dashed black;
}
</style>
