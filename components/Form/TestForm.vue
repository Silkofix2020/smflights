<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="name">Name</label>
      <input v-model="name" type="text" id="name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input v-model="email" type="email" id="email" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");

// URL вашего API (например, Google Apps Script)
const apiURL =
  "https://script.google.com/macros/s/AKfycbwQSRg2OW0op1iLAriSEdqcJGqGcZ53Me5f3E5OtoieMTc2RdeFV2_aTZXY9yEQQv-3HQ/exec";

const onSubmit = async () => {
  console.log("Form submitted:", { name: name.value, email: email.value });

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
      }),
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Server response:", data);
    alert("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form", error);
    alert("Failed to submit form");
  }
};
</script>

<style scoped>
span {
  color: red;
}
</style>
