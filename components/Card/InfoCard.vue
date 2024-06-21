<template>
  <div class="infocard-item">
    <div
      class="infocard-item__image"
      :style="{ backgroundImage: `url(${image})` }"
      :class="{ 'with-after': hasAfter, 'with-before': hasBefore }"
    ></div>
    <h4 class="infocard-item__title">{{ title }}</h4>
    <p class="infocard-item__text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  hasAfter: {
    type: Boolean,
    default: false,
  },
  hasBefore: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.infocard {
  &-item {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;

    @media (max-width: 760px) {
      max-width: 98%;
    }

    &__image {
      width: 80px;
      height: 80px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 1px 1px rgba($color: #000000, $alpha: 0.3);

      &:nth-child(1) {
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        &::after {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 20px;
          height: 20px;
          background-color: #feb47b;
          color: #fff;
          font-weight: 700;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
        }
      }
    }
    &:nth-child(1) .infocard-item__image.with-after {
      &::after {
        content: "1";
      }
    }

    &:nth-child(2) .infocard-item__image.with-after {
      &::after {
        content: "2";
      }
    }

    &:nth-child(3) .infocard-item__image.with-after {
      &::after {
        content: "3";
      }
    }
  }
}
</style>
