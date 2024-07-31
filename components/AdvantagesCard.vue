<template>
  <div class="advantages__item">
    <img :src="`${image}`" :alt="`${imageAlt}`" />
    <div class="advantages__text">
      <h4 class="advantages__title">{{ title }}</h4>
      <p class="advantages__description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss">
.advantages {
  &__item {
    flex: 1 1 calc(25% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 1001px) {
      flex: 1 1 calc(50% - 20px);
    }
  }
  &__text {
    margin-top: 30px;
    width: 250px;
  }
  &__description {
    font-size: 14px;
    color: #727171;
  }
}
</style>
