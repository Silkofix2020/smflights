<template>
  <div class="flare-card">
    <h3 class="flare-card__title">
      SMFL SPECIAL FARE / Ends {{ formattedDate }}
    </h3>
    <div class="flare-card__content">
      <div class="flare-card__promo">
        Text us and save $30 EXTRA: code SMFL30
      </div>
      <div class="flare-card__price">
        <span class="flare-card__price--old">$467</span>
        <div class="flare-card__price--actual">
          <span class="flare-card__price--currancy">$</span>137<span
            class="flare-card__price--article"
            >*</span
          >
        </div>
        <span class="flare-card__price--prefix">Total per person</span>
      </div>
      <div class="flare-card__fligt-type">
        {{ formStore.flightType }} / Economy Class
      </div>
    </div>
    <a href="https://wa.me/79935910334" target="_blank" class="flare-card__link"
      >Text US</a
    >
  </div>
</template>

<script setup>
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { useFormStore } from "../store/formStore";

const today = ref(new Date());
const formattedDate = ref(format(today.value, "MMMM d", { locale: enUS }));

const formStore = useFormStore();
</script>

<style lang="scss">
.flare-card {
  max-width: 340px;
  height: 322px;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba($color: #000000, $alpha: 0.5);
  &__title {
    color: #cc1f16;
    padding: 10px 0;
    font-weight: 700;
  }
  &__promo {
    width: auto;
    background-color: #ffe5e5;
    border-radius: 5px;
    text-align: center;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: 700;
  }
  &__content {
    height: calc(100% - 58px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid rgba($color: #767676, $alpha: 0.3);
    border-bottom: 1px solid rgba($color: #767676, $alpha: 0.3);
  }
  &__price {
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 10px;
    color: #cc1f16;

    &--old {
      text-decoration: line-through;
      font-size: 20px;
      color: #767676;
    }
    &--actual {
      display: flex;
      align-items: flex-start;
      font-size: 40px;
      font-weight: 700;
      line-height: 2px;
    }
    &--currancy {
      font-size: 30px;
      font-weight: 700;
    }
    &--article {
      position: absolute;
      font-size: 15px;
      top: 14px;
      left: 150px;
    }
    &--prefix {
      width: 44px;
      font-size: 10px;
      color: #767676;
    }
  }
  &__link {
    margin: 5px 0;
    padding: 4px 60px;
    background-color: $primary-color;
    text-decoration: none;
    color: #ffffff;
    border-radius: 5px;
    @media (hover: hover) {
      &:hover {
        background-color: $secondary-color;
      }
    }

    @media (hover: none) {
      &:active {
        background-color: $secondary-color;
      }
    }
  }
}
</style>
