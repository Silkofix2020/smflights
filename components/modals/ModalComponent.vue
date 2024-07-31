<template>
  <div class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="close">X</button>
      <h3>Route to {{ title }}</h3>
      <form class="modal-form">
        <UInput class="modal-input" id="name">Name</UInput>
        <UInput class="modal-input" id="email">E-mail</UInput>
        <UInput class="modal-input" id="phone" type="tel">Phone</UInput>
        <UButton class="form-button">Send request</UButton>
      </form>
    </div>
  </div>
</template>

<script setup>
import UInput from "../Input/UInput.vue";
import UButton from "../Button/UButton.vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  width: 100%;
  max-width: 700px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.modal-input {
  position: relative;
}
.modal-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
</style>
