<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form__flight-select">
      <div class="form-group">
        <input
          id="round-trip"
          name="flightType"
          value="Round-trip"
          type="radio"
          v-model="flightType"
        />
        <label for="round-trip">Round-trip</label>
      </div>
      <div class="form-group">
        <input
          id="one-way"
          name="flightType"
          value="One-way"
          type="radio"
          v-model="flightType"
        />
        <label for="one-way">One-way</label>
      </div>
    </div>
    <div class="form-wrapper">
      <div>
        <UInput
          :class="'form-group'"
          @input="() => searchCities('from')"
          v-model="from"
          >Depart from</UInput
        >
        <ul v-if="showFromSuggestions" class="dropdown">
          <li
            v-for="suggestion in fromSuggestions"
            :key="suggestion"
            @click="selectCity('from', suggestion)"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
      <div>
        <UInput
          :class="'form-group'"
          @input="() => searchCities('to')"
          v-model="to"
          >Arrive at</UInput
        >
        <ul v-if="showToSuggestions" class="dropdown">
          <li
            v-for="suggestion in toSuggestions"
            :key="suggestion"
            @click="selectCity('to', suggestion)"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
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
      <UButton :disabled="isLoading" class="form-button" @click="handleSubmit">
        Search Flights
        <LoadCycle v-if="isLoading"></LoadCycle>
      </UButton>
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
import UButton from "../Button/UButton.vue";
import LoadCycle from "../animation/LoadCycle.vue";

const formStore = useFormStore();
const router = useRouter();

const from = ref("");
const to = ref("");
const fromCode = ref("");
const toCode = ref("");
const departureDate = ref("");
const returnDate = ref("");
const flightType = ref("Round-trip");
const passengerInfo = ref({
  adults: 2,
  children: 0,
  infants: 0,
});
const isLoading = ref(false);

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Chiccago",
  "Houston",
  "Phoenix",
  "Moscow",
  "Sochi",
  "Pekin",
  "Tula",
]; // Пример массива городов
const fromSuggestions = ref([]);
const toSuggestions = ref([]);
const showFromSuggestions = ref(false);
const showToSuggestions = ref(false);
let searchTimeout = null;

const airportsData = ref([]);

onMounted(() => {
  fetch("static/airports.json")
    .then((response) => response.json())
    .then((data) => {
      airportsData.value = data;
    })
    .catch((error) => {
      console.error("Error fetching airports data:", error);
    });
});

const searchCities = (field) => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = setTimeout(() => {
    const value = field === "from" ? from.value : to.value;

    if (value.length < 2) {
      if (field === "from") {
        fromSuggestions.value = [];
        showFromSuggestions.value = false;
      } else if (field === "to") {
        toSuggestions.value = [];
        showToSuggestions.value = false;
      }
      return;
    }

    const suggestions = Object.values(airportsData.value)
      .filter(
        (airport) =>
          airport.city.toLowerCase().startsWith(value.toLowerCase()) &&
          airport.iata
      )
      .map((airport) => `${airport.city} (${airport.iata})`);

    if (field === "from") {
      fromSuggestions.value = suggestions;
      showFromSuggestions.value = fromSuggestions.value.length > 0;
    } else if (field === "to") {
      toSuggestions.value = suggestions;
      showToSuggestions.value = toSuggestions.value.length > 0;
    }
  }, 300); // Задержка в 300 миллисекунд для лучшего UX
};

const selectCity = (field, cityWithCode) => {
  if (
    !cityWithCode ||
    typeof cityWithCode !== "string" ||
    !cityWithCode.includes(" (")
  ) {
    console.error("Invalid cityWithCode format:", cityWithCode);
    return;
  }

  const city = cityWithCode.split(" (")[0];
  const code = cityWithCode.match(/\(([^)]+)\)/)[1];

  const combinedValue = `${city} (${code})`;

  if (field === "from") {
    from.value = combinedValue;
    fromSuggestions.value = [];
    showFromSuggestions.value = false;
  } else if (field === "to") {
    to.value = combinedValue;
    toSuggestions.value = [];
    showToSuggestions.value = false;
  }
};

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
  margin: 0 auto;
  width: 99%;
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
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 5px;
    @media (max-width: 760px) {
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
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
  &__footnote {
    font-size: 12px;
    color: rgba($color: #616161, $alpha: 0.7);
  }
}

.dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 200px;
  z-index: 1000;
}
.dropdown li {
  padding: 10px;
  cursor: pointer;
}
.dropdown li:hover {
  background-color: #f0f0f0;
}
</style>
