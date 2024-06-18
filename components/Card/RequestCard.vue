<template>
  <div class="request-card">
    <h3 class="request-card__title">
      <span class="request-card__title--red">CALL US Toll-FREE</span> to Save
      More
    </h3>
    <h4 class="request-card__subtitle">
      Call Now to Get the Best Unpublished Deal
    </h4>
    <div class="request-card__delimiter">
      <div class="request-card__delimiter-item"></div>
      <span class="request-card__delimiter-text">or</span>
      <div class="request-card__delimiter-item"></div>
    </div>
    <p class="request-card__cta">submit a request</p>
    <form class="request-card__form" @submit.prevent="sendToGoogleSheets">
      <div class="request-card__grid-container">
        <UInput :class="'form-group grid-group'" v-model="formStore.from"
          >From</UInput
        >
        <UInput :class="'form-group grid-group'" v-model="formStore.to"
          >To</UInput
        >
        <UInput :class="'form-group full-width'" v-model="clientEmail"
          >E-mail</UInput
        >
        <UInput :class="'form-group grid-group'" v-model="clientPhone"
          >Phone</UInput
        >
        <UInput :class="'form-group grid-group'" v-model="clientName"
          >Your Name (Optional)</UInput
        >
        <UButton class="submit-button full-width" type="submit"
          >get a free quote</UButton
        >
      </div>
    </form>
    <p class="request-card__privacy">
      By providing my contact details and clicking on "GET A FREE QUOTE" I agree
      to be contacted for travel information via phone, text messages and email.
      No purchase necessary. We respect your
      <NuxtLink to="/privacy" class="request-card__privacy-link"
        >privacy</NuxtLink
      >
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useFormStore } from "../store/formStore";
import UInput from "../Input/UInput.vue";
import UButton from "../Button/UButton.vue";

const formStore = useFormStore();
const clientEmail = ref("");
const clientPhone = ref("");
const clientName = ref("");

watch(
  [clientEmail, clientPhone, clientName],
  ([newClientEmail, newClientPhone, newClientName]) => {
    formStore.updateField("clientEmail", newClientEmail);
    formStore.updateField("clientPhone", newClientPhone);
    formStore.updateField("clientName", newClientName);
  }
);

const sendToGoogleSheets = async () => {
  try {
    console.log("Sending data:", {
      flightType: formStore.flightType,
      from: formStore.from,
      to: formStore.to,
      departureDate: formStore.departureDate,
      returnDate: formStore.returnDate,
      adults: formStore.adults,
      children: formStore.children,
      infants: formStore.infants,
      clientEmail: formStore.clientEmail,
      clientPhone: formStore.clientPhone,
      clientName: formStore.clientName,
    });

    const response = await $fetch(
      "https://script.google.com/macros/s/AKfycbxPZb8IW0SYulTCJI98MSZkrFz7WctgleV1EEzcfKKNq2f3GfYG70Ksx11LkzCuJVWs/exec",
      {
        method: "POST",
        body: {
          flightType: formStore.flightType,
          from: formStore.from,
          to: formStore.to,
          departureDate: formStore.departureDate,
          returnDate: formStore.returnDate,
          adults: formStore.adults,
          children: formStore.children,
          infants: formStore.infants,
          clientEmail: formStore.clientEmail,
          clientPhone: formStore.clientPhone,
          clientName: formStore.clientName,
        },
      }
    );

    console.log("Data sent successfully:", response);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
</script>

<style lang="scss">
.request-card {
  width: 100%;
  max-width: 460px;
  border-radius: 5px;
  padding: 15px 30px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &__title {
    font-size: 20px;
    font-weight: 800;
    &--red {
      color: #cc1f16;
    }
  }
  &__subtitle {
    font-size: 12px;
    font-weight: 800;
  }
  &__delimiter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item {
      width: 45%;
      height: 1px;
      background-color: rgba($color: #767676, $alpha: 0.3);
    }
    &-text {
      font-size: 14px;
    }
  }
  &__form {
    width: 100%;
    max-width: 600px;
  }
  &__grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px 5px;
  }
  &__privacy {
    font-size: 10px;
    padding: 10px 0;
    color: rgba($color: #767676, $alpha: 0.6);
    &-link {
      text-decoration: underline;
      color: inherit;
    }
  }
}
.grid-group input {
  width: 100%;
}
.full-width {
  grid-column: span 2;

  & input {
    width: 100%;
  }
}
.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #cc1f16;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
}

.submit-button:hover {
  background-color: darkred;
}
</style>
