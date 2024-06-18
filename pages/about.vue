<template>
  <Header />

  <Footer />
</template>
<script setup>
import { useFormStore } from "../store/formStore";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const formStore = useFormStore();

useHead({
  title: "About",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<style>
.container1 {
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
