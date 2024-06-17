<template>
  <div class="passenger-selector">
    <div class="passenger-label" @click="togglePopover">
      {{ totalPassengers }} Passengers
    </div>
    <div v-if="open" class="popover">
      <div class="passenger-group">
        <div>Adults</div>
        <div class="counter">
          <button type="button" @click="decreaseCount('adults')">-</button>
          <span>{{ modelValue.adults }}</span>
          <button type="button" @click="increaseCount('adults')">+</button>
        </div>
      </div>
      <div class="passenger-group">
        <div>Children</div>
        <div class="counter">
          <button type="button" @click="decreaseCount('children')">-</button>
          <span>{{ modelValue.children }}</span>
          <button type="button" @click="increaseCount('children')">+</button>
        </div>
      </div>
      <div class="passenger-group">
        <div>Infants</div>
        <div class="counter">
          <button type="button" @click="decreaseCount('infants')">-</button>
          <span>{{ modelValue.infants }}</span>
          <button type="button" @click="increaseCount('infants')">+</button>
        </div>
      </div>
      <UButton type="button" class="ok-button" @click="closePopover"
        >OK</UButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import UButton from "../Button/UButton.vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      adults: 2,
      children: 0,
      infants: 0,
    }),
  },
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const adults = ref(props.modelValue.adults);
const children = ref(props.modelValue.children);
const infants = ref(props.modelValue.infants);

watch(
  () => props.modelValue,
  (newValue) => {
    adults.value = newValue.adults;
    children.value = newValue.children;
    infants.value = newValue.infants;
  },
  { immediate: true }
);

const togglePopover = () => {
  open.value = !open.value;
};

const closePopover = () => {
  open.value = false;
};

const increaseCount = (type) => {
  if (type === "adults") props.modelValue.adults++;
  if (type === "children") props.modelValue.children++;
  if (type === "infants") props.modelValue.infants++;
  updateModelValue();
};

const decreaseCount = (type) => {
  if (type === "adults" && props.modelValue.adults > 0)
    props.modelValue.adults--;
  if (type === "children" && props.modelValue.children > 0)
    props.modelValue.children--;
  if (type === "infants" && props.modelValue.infants > 0)
    props.modelValue.infants--;
  updateModelValue();
};

const updateModelValue = () => {
  emit("update:modelValue", {
    adults: props.modelValue.adults,
    children: props.modelValue.children,
    infants: props.modelValue.infants,
  });
};

const totalPassengers = computed(
  () =>
    props.modelValue.adults +
    props.modelValue.children +
    props.modelValue.infants
);
</script>

<style lang="scss" scoped>
.passenger-selector {
  position: relative;
  width: 100%;
  max-width: 170px;
  height: 39px;
  font-size: 14px;
  padding: 8px 0 8px 10px;
  border: 0.03125em solid #b9b9b9;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    outline-color: #feb47b;
  }
  @media (max-width: 760px) {
    max-width: 300px;
  }
}

.passenger-label {
  display: flex;
  align-items: center;
}

.caret {
  margin-left: 8px;
}

.popover {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  z-index: 1000;
}

.passenger-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.counter {
  display: flex;
  align-items: center;
}

.counter button {
  background: #feb47b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background: #ff6f00;
  }
}

.counter span {
  margin: 0 8px;
}

.ok-button {
  background: #feb47b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #ff6f00;
  }
}
</style>
