<template>
  <Header class="result__header" />
  <div class="content">
    <div class="content__offer"><h1>Hello</h1></div>
    <div class="content__form"><h1>hello</h1></div>
  </div>
  <Footer />
</template>
<script setup>
useHead({
  title: "Search Result",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<style lang="scss">
.result__header {
  .header__title {
    display: none;
  }
  .wrap {
    padding: 20px 120px 0;
    @media (max-width: 760px) {
      padding: 10px 18px 0;
    }
  }
}
.content {
  position: absolute;
  width: 100%;
  height: 10px;
  top: 100px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  background-color: antiquewhite;
  display: flex;
  justify-content: space-around;

  &__offer {
    width: 45%;
    height: 200px;
    background-color: black;
  }

  &__form {
    width: 45%;
    height: 200px;
    background-color: black;
  }
}
</style>
