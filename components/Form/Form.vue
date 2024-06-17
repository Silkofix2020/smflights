<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__flight-select">
      <div class="form-group">
        <input
          id="round-trip"
          name="flightType"
          value="round-trip"
          type="radio"
          v-model="flightType"
        />
        <label for="round-trip">Round-trip</label>
      </div>
      <div class="form-group">
        <input
          id="one-way"
          name="flightType"
          value="one-way"
          type="radio"
          v-model="flightType"
        />
        <label for="one-way">One-way</label>
      </div>
    </div>
    <div class="form-wrapper">
      <UInput :class="'form-group'" v-model="from">Depart from</UInput>
      <UInput :class="'form-group'" v-model="to">Arrive at</UInput>
      <UInput :class="'form-group'" type="date" v-model="departureDate"
        >Departure Date</UInput
      >
      <UInput
        :class="'form-group'"
        type="date"
        v-model="returnDate"
        :flightType="flightType"
        >Return Date</UInput
      >
      <USelect v-model="passengerInfo" />
      <button :disabled="isLoading" class="form-button" @click="handleSubmit">
        Search Flights
        <div v-if="isLoading" class="loader"></div>
      </button>
    </div>
    <p class="form__footnote">
      Dates are for informational purpose only. Fares about to be displayed may
      not necessarily be for the selected dates.
    </p>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "#app";
import { useFormStore } from "../store/formStore";
import UInput from "../Input/UInput.vue";
import USelect from "../Input/USelect.vue";

const formStore = useFormStore();
const router = useRouter();

const from = ref("");
const to = ref("");
const departureDate = ref("");
const returnDate = ref("");
const flightType = ref("round-trip");
const passengerInfo = ref({
  adults: 2,
  children: 0,
  infants: 0,
});
const isLoading = ref(false);

watch(
  [flightType, from, to, departureDate, returnDate, passengerInfo],
  ([
    newFlightType,
    newFrom,
    newTo,
    newDate,
    newReturnDate,
    newPassengerInfo,
  ]) => {
    formStore.updateField("flightType", newFlightType);
    formStore.updateField("from", newFrom);
    formStore.updateField("to", newTo);
    formStore.updateField("departureDate", newDate);
    formStore.updateField("returnDate", newReturnDate);
    formStore.updateField("adults", newPassengerInfo.adults);
    formStore.updateField("children", newPassengerInfo.children);
    formStore.updateField("infants", newPassengerInfo.infants);
  }
);

const handleSubmit = (event) => {
  event.preventDefault();
  isLoading.value = true;
  setTimeout(() => {
    router.push("/result");
  }, 2000);
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.form {
  width: 100%;
  max-width: 1108px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  box-shadow: 0 4px 4px 0 rgba($color: #000000, $alpha: 0.1);
  background-color: #fff;
  padding: 10px 20px;
  border: 0.03125em solid rgba($color: #a4a4a4, $alpha: 0.25);
  border-radius: 5px;
  user-select: none;
  &__flight-select {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    border-bottom: 0.03125em solid rgba($color: #a4a4a4, $alpha: 0.25);
  }
  &-wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5px;
  }
  &__inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  &-group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  &-wrapper {
    padding-top: 10px;
  }
  &-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 39px;
    border: none;
    border-radius: 5px;
    padding: 5px 60px;
    background-color: #feb47b;
    color: #fff;
    cursor: pointer;
    &:hover {
      @media (hover: hover) {
        background-color: #ff6f00;
      }
    }

    @media (hover: none) {
      &:active {
        background-color: #ff6f00;
      }
    }
  }
  &__footnote {
    font-size: 12px;
    color: rgba($color: #616161, $alpha: 0.7);
  }
}
.loader {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top: 2px solid #ff6f00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
