<template>
  <Header />
  <div class="container">
    <ContentDoc :path="`/${slug}`" class="longread-content">
      <template #not-found>
        <h1>Document not found</h1>
        <p>The document you are looking for does not exist.</p>
      </template>
    </ContentDoc>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const route = useRoute();
const slug = route.params.slug;
</script>

<style lang="scss">
.longread-content {
  color: #4e4e4e;
  & h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  & h3 {
    margin-bottom: 10px;
  }
  & p {
    margin-bottom: 15px;
  }
}
</style>
