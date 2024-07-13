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
    <form class="request-card__form" @submit.prevent="handleSubmit">
      <div class="request-card__grid-container">
        <UInput
          :class="'form-group grid-group'"
          :disabled="true"
          v-model="formStore.from"
          >From</UInput
        >
        <UInput
          :class="'form-group grid-group'"
          :disabled="true"
          v-model="formStore.to"
          >To</UInput
        >
        <UInput :class="'form-group full-width'" v-model="clientEmail"
          >E-mail</UInput
        >
        <div class="group full-width">
          <CSelect v-model="phoneCode" />
          <UInput :class="'form-group full-width'" v-model="clientPhone"
            >Phone</UInput
          >
        </div>

        <UInput :class="'form-group full-width'" v-model="clientName"
          >Your Name</UInput
        >
        <UButton class="submit-button full-width" type="submit"
          >get a free quote
          <LoadCycle v-if="isLoading" />
        </UButton>
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
import { useRouter } from "#app";
import { useFormStore } from "../store/formStore";
import UInput from "../Input/UInput.vue";
import UButton from "../Button/UButton.vue";
import LoadCycle from "../animation/LoadCycle.vue";
import CSelect from "../Input/CSelect.vue";

const formStore = useFormStore();
const clientEmail = ref("");
const clientPhone = ref("");
const phoneCode = ref("");
const clientName = ref("");
const router = useRouter();
const isLoading = ref(false);

const sendTime = ref("");
watch(
  [clientEmail, phoneCode, clientPhone, clientName],
  ([newClientEmail, newPhoneCode, newClientPhone, newClientName]) => {
    formStore.updateField("clientEmail", newClientEmail);
    formStore.updateField("clientPhone", `${newPhoneCode}${newClientPhone}`);
    formStore.updateField("clientName", newClientName);
  }
);

const sendToGoogleSheets = async () => {
  try {
    const formData = {
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
      sendTime: sendTime.value, // Используем значение из ref
    };
    const response = await $fetch("/api/sendToGoogleSheets", {
      method: "POST",
      body: formData,
    });

    console.log("Data sent successfully:", response);
  } catch (error) {
    console.error("Error sending data:", error);
    console.error("Error details:", error.response); // Additional error details
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  isLoading.value = true;
  sendTime.value = new Date().toISOString(); // Обновляем дату и время отправки перед отправкой данных

  await sendToGoogleSheets();

  setTimeout(() => {
    router.push("/success");
  }, 2000);
};

onMounted(() => {
  console.log(sendTime.value);
});
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
    text-align: center;
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
.group {
  display: flex;
  gap: 5px;
}
</style>
