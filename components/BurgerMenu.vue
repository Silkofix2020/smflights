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
        <NuxtLink to="/service-and-contact" class="header__nav-link"
          >Help</NuxtLink
        >
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
.burger-menu-container {
  position: relative;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10; /* Убедитесь, что z-index установлен */

  span {
    width: 24px;
    height: 2px;
    background: #000000;
    transition: all 0.3s linear;

    &:nth-child(2) {
      margin: 4px 0;
    }

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
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
    top: 20px;
    right: -18px;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    transition: width 0.3s ease-in-out, padding 0.3s ease-in-out,
      max-height 0.3s ease-in-out;
    overflow: hidden;
    width: 0;
    padding: 0;
    max-height: 0;
    gap: 0;
    z-index: 1;

    &.open {
      width: 200px;
      padding: 10px;
      max-height: 200px;
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
  font-weight: 400;
  text-decoration: none;
  color: #000000;
}
</style>
