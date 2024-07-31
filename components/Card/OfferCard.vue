<template>
  <div :class="cardClass" class="card">
    <div class="card__image-wrapper">
      <img class="card__image" :src="img" :alt="title" />
    </div>
    <div class="card__discription">
      <div class="card__text">
        <h3 class="card__title">{{ title }}</h3>
        <div class="card__date">
          <p class="card__date-item">
            {{ formattedDate }}
          </p>
          <p class="card__discript">{{ discript }}</p>
        </div>

        <div>
          <img class="card__logo" :src="logo" alt="image" />
        </div>
      </div>
      <div class="card__price">
        <a :disabled="button" href="#" :class="priceClass" class="card__link"
          ><span>{{ currency }}</span> {{ price }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick } from "vue";

const props = defineProps({
  title: String,
  discript: String,
  img: String,
  logo: String,
  price: Number,
  cardClass: String,
  priceClass: String,
  button: Boolean,
  backgroundImageClass: String,
  currency: {
    type: String,
    default: "€",
  },
});

// Функция для форматирования даты в нужный формат
const formatDate = (date) => {
  const options = { month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

// Объявляем реактивную переменную startDay
const startDay = ref(new Date());

// Вычисляемое свойство для форматированной даты с диапазоном
const formattedDate = computed(() => {
  const startDate = new Date(startDay.value);
  startDate.setDate(startDate.getDate() + 6);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  return `${formattedStartDate} - ${formattedEndDate}`;
});
</script>

<style lang="scss">
.card {
  width: 100%;
  max-width: 530px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f8ff;
  border-radius: 5px;
  color: #4e4e4e;
  border: 1px solid #c2cff0;
  box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.07);
  overflow: hidden;
  user-select: none;
  &:hover {
    .card__image {
      transform: scale(1.03);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &-wrapper {
      width: 100%;
      max-width: 250px;
    }
  }
  &__item {
    height: 170px;
  }

  &__discription {
    width: 100%;
    max-width: 314px;
    padding: 22px 0 0 20px;
    display: flex;
    justify-content: space-between;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    font-size: 18px;
  }
  &__discript,
  &__date-item {
    font-size: 14px;
  }
  &__logo {
    width: 100px; /* Ширина логотипа */
    height: auto; /* Автоматическая высота для сохранения пропорций */
    max-height: 20px; /* Максимальная высота логотипа */
    object-fit: contain; /* Сохранение пропорций без обрезки */
  }
  &__price {
    align-self: flex-end;
    padding: 0 18px 17px 0;
    font-size: 18px;
  }
  &__link {
    color: #4e4e4e;
    text-decoration: none;
  }
}

.yellow50 {
  background-color: #fff8e1;
}
.red {
  color: #ff0000;
}
</style>
