<template>
  <div class="burger-menu-container">
    <button class="burger-menu" @click="toggleMenu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>
    <ul class="header__nav-list" :class="{ open: isMenuOpen }">
      <li class="header__nav-item">
        <NuxtLink to="/" class="header__nav-link">Home</NuxtLink>
      </li>
      <li class="header__nav-item">
        <NuxtLink to="/about" class="header__nav-link">About</NuxtLink>
      </li>
      <li class="header__nav-item">
        <NuxtLink to="/privacy" class="header__nav-link">Help</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.burger-menu-container {
  position: relative;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  span {
    width: 24px;
    height: 2px;
    background: #fff;
    transition: all 0.3s linear;

    &:nth-child(2) {
      margin: 4px 0;
    }
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 760px) {
    display: flex;
  }
}

.header__nav-list {
  display: flex;
  gap: 56px;
  list-style: none;

  @media (max-width: 760px) {
    position: absolute;
    top: 30px; /* Adjust the value to position the menu below the button */
    right: 0;
    flex-direction: column;
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: max-height, padding 0.3s ease-in-out;
    overflow: hidden;
    max-height: 0;
    gap: 0;

    &.open {
      padding: 10px;
      max-height: 200px; /* Adjust this value according to the number of items */
    }
  }
}

.header__nav-item {
  cursor: pointer;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #ffa200;
    text-decoration-thickness: 3px;
  }
}

.header__nav-link {
  font-weight: 300;
  text-decoration: none;
  color: #fff;
}
</style>

.wrap { position: relative; margin: 0 auto; width: 100%; max-width: 1440px;
display: flex; justify-content: space-between; align-items: center; padding:
70px 120px 0; z-index: 1; } @media (max-width: 760px) { .wrap { padding: 10px
18px 0; } } .header { position: relative; height: 570px; overflow: hidden;
color: #fff; } .header__background { position: absolute; top: 0; left: 0; width:
100%; height: 100%; background-image: url(/img/header-bg.webp); background-size:
cover; background-position: center; z-index: -1; } .header__background::after {
content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
background-color: rgba(0, 0, 0, 0.42); } .header__logo { font-family: 'Nunito
Sans', sans-serif; font-size: 40px; text-decoration: none; font-weight: 200;
color: #fff; } .header__logo--bold { font-weight: 700; background:
linear-gradient(to right, #ff7e5f, #feb47b); background-clip: text;
-webkit-text-fill-color: transparent; } .header__title { text-align: end;
padding: 151px 120px 0; text-shadow: 7px 8px 12px rgba(0, 0, 0, 0.21); } @media
(max-width: 760px) { .header__title { padding: 225px 15px 0; } }
.burger-menu-container { position: relative; } .burger-menu { display: none;
flex-direction: column; justify-content: space-around; width: 24px; height:
24px; background: transparent; border: none; cursor: pointer; z-index: 2; }
.burger-menu span { width: 24px; height: 2px; background: #fff; transition: all
0.3s linear; } .burger-menu span:nth-child(2) { margin: 4px 0; }
.burger-menu.open span:nth-child(1) { transform: rotate(45deg) translate(5px,
5px); } .burger-menu.open span:nth-child(2) { opacity: 0; } .burger-menu.open
span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); } @media
(max-width: 760px) { .burger-menu { display: flex; } } .header__nav-list {
display: flex; gap: 56px; list-style: none; } @media (max-width: 760px) {
.header__nav-list { position: absolute; top: 30px; right: 0; flex-direction:
column; align-items: flex-end; background-color: rgba(0, 0, 0, 0.2);
border-radius: 5px; transition: max-height 0.3s ease-in-out, padding 0.3s
ease-in-out; overflow: hidden; max-height: 0; gap: 0; } .header__nav-list.open {
padding: 10px; max-height: 200px; /* Adjust this value according to the number
of items */ } } .header__nav-item { cursor: pointer; margin: 5px 0; }
.header__nav-item:hover { text-decoration: underline; text-decoration-color:
#ffa200; text-decoration-thickness: 3px; } .header__nav-link { font-weight: 300;
color: #fff; }
