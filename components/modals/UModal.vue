<template>
  <div v-if="isOpen" class="modal">
    <UButton class="modal__close-button" @click="onClose">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 60.963 60.842"
        style="enable-background: new 0 0 60.963 60.842"
        xml:space="preserve"
      >
        <path
          style="fill: #231f20"
          d="M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611
     c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611
     l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
     l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369
     C61.42,57.647,61.42,54.687,59.595,52.861z"
        />
      </svg>
    </UButton>
    <div class="modal__content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
import UButton from "../Button/UButton.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss">
.modal {
  width: 96%;
  max-width: 600px;
  max-height: 400px;
  position: fixed;
  top: calc(100dvh - 70%);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  overflow: auto;
  border-radius: 5px;

  box-shadow: 0 0 15px 5px rgba($color: #000000, $alpha: 0.4);

  &::-webkit-scrollbar {
    display: none;
  }

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-wrapper {
      padding: 50px 10px;
    }
  }

  &__close-button {
    position: absolute;
    width: 40px;
    background: none;
    border: none;
    cursor: pointer;
    top: 10px;
    right: 10px;
  }
}
</style>
