<template>
  <Header />
  <div class="content">
    <h1>Our partners</h1>
    <div class="content__wrapper">
      <PartnerCard
        v-for="item in data"
        :key="item.icao_code"
        :name="item.name"
        :logo="item.logo"
        :icao_code="item.icao_code"
        :num_aircraft="item.num_aircraft"
        :homepage="item.homepage"
      />
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import PartnerCard from "/components/card/PartnerCard.vue";

const data = ref([]);

const loadData = async () => {
  try {
    const response = await fetch("/static/airlines.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    data.value = result.data;
  } catch (error) {
    console.error("Error loading JSON data:", error);
  }
};

onMounted(() => {
  loadData();
});
</script>

<style lang="scss">
.content__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px 0px;
}
</style>
