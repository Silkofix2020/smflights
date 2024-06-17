<template>
  <div
    :class="[
      customClass,
      {
        'input-focused': isFocused || internalValue,
        'input-date': type === 'date',
      },
    ]"
  >
    <label :for="id">
      <slot />
    </label>
    <input
      :id="id"
      :name="name"
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled || flightType === 'one-way'"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="errorMessage" class="form-group__error">{{
      errorMessage
    }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  id: String,
  name: String,
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  customClass: String,
  errorMessage: String,
  flightType: String,
});
const emit = defineEmits(["update:modelValue"]);

const isFocused = ref(false);
const internalValue = ref(props.modelValue);
const inputType = ref("date");

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
watch(
  () => props.modelValue,
  (newValue) => {
    internalValue.value = newValue;
  }
);

watch(internalValue, (newValue) => {
  emit("update:modelValue", newValue);
});
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  max-width: 170px;
  font-size: 14px;
  padding: 8px 0 8px 10px;
  border: 0.03125em solid #b9b9b9;
  border-radius: 5px;
  &:focus {
    outline-color: #feb47b;
  }
}

label {
  position: absolute;
  top: 10px;
  left: 11px;

  padding: 0 5px;
  font-size: 12px;
  color: #616161;
  transition: 0.3s; // плавный переход цвета
}

/* Добавляем стили для label, когда input в фокусе */
.input-focused label {
  top: -11px;
  background-color: white;
}
.input-date label {
  top: -11px;
  background-color: white;
}
.input-date input {
  padding: 7px 0 7px 10px;
}
</style>
