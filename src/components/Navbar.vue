<template>
  <nav class="navbar">
    <div class="navbar__top-bar">
      <div class="navbar__logo">
        <img src="../assets//images/logo-mark.svg" alt="logo-ticket-generator" />
        <h1>Coding Conf</h1>
      </div>

      <Bars3Icon v-if="!isOpen" class="hamburger__icon" @click="toggleMenu" />
      <XMarkIcon v-if="isOpen" class="hamburger__icon" @click="toggleMenu" />
    </div>

    <div v-if="isOpen" class="navbar__wrapper">
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link class="navbar__link" to="/" @click="toggleMenu()">Home</router-link>
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" to="/about" @click="toggleMenu()">About</router-link>
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" to="/contact" @click="toggleMenu()"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'

const mql = window.matchMedia('(min-width: 768px)')
const isOpen = ref(mql.matches)

const updateMenuState = (event: MediaQueryListEvent) => {
  isOpen.value = event.matches
  console.log('Menu state updated:', isOpen.value)
}

onMounted(() => {
  console.log('Mounted, initial state:', isOpen.value, mql.matches)

  mql.addEventListener('change', updateMenuState)
})

onBeforeUnmount(() => {
  mql.removeEventListener('change', updateMenuState)
})

const toggleMenu = () => {
  if (!mql.matches) {
    isOpen.value = !isOpen.value
  }
}
</script>

<style lang="scss">
.navbar__top-bar {
  @include flex(row, flex-start, space-between, 12px);
}
.navbar {
  &__wrapper {
    @include flex(column, flex-start, start, 12px);
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: $orange700;

    @include respond(medium) {
      @include flex(column, center, start, 12px);
      position: static;
      min-height: auto;
      background-color: inherit;
      width: auto;
    }
  }

  &__list {
    @include flex(column, flex-start, center, 12px);

    @include respond(medium) {
      @include flex(row, flex-start, center, 12px);
    }
  }
  &__item {
    font-size: $fs-600;
  }

  &__link {
    color: $neutral0;
    &:hover {
      color: $orange700;
    }
  }

  &__top-bar {
    @include flex(row, center, center, 0);

    @include respond(small) {
      margin-left: 50px;
    }

    @include respond(medium) {
      margin-left: inherit;
    }
  }

  &__logo {
    @include flex(row, flex-start, flex-start, 12px);
    width: 100%;

    @include respond(small) {
      @include flex(row, flex-start, center, 12px);
    }

    @include respond(medium) {
      @include flex(row, center, center, 12px);
    }
  }
}

.hamburger__icon {
  width: 50px;
  height: 50px;

  @include respond(medium) {
    display: none;
  }
}
</style>
