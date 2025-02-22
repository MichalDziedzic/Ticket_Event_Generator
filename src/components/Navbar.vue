<template>
  <nav class="navbar">
    <div class="navbar__control">
      <Button v-if="!isOpen" class="hamburger__icon" @click="toggleMenu"
        ><Bars3Icon class="hamburger__icon"
      /></Button>
      <Button v-if="isOpen" class="hamburger__icon" @click="toggleMenu"
        ><XMarkIcon class="hamburger__icon"
      /></Button>
    </div>
    <div v-if="isOpen" class="navbar__wrapper">
      <ul class="navbar__list">
        <li class="navbar__item" v-for="item in navItems" :key="item.to">
          <router-link class="navbar__link" :to="item.to">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import { routes } from '@/router'
import { useRoute } from 'vue-router'
import useMediaQuery from '@/hooks/useMediaQuery'

const isWideScreen = useMediaQuery('(min-width: 768px)')
const route = useRoute()
const isOpen = ref(false)

const navItems = routes.map((route) => ({
  text: route.name,
  to: route.path,
}))

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

watch(isWideScreen, (newValue) => (isOpen.value = newValue))

watch(
  () => route.path,
  () => {
    if (!isWideScreen.value) {
      isOpen.value = false
    }
  },
)

onMounted(() => {
  isOpen.value = isWideScreen.value
})
</script>

<style scoped lang="scss">
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
}

.hamburger__icon {
  width: 50px;
  height: 40px;

  @include respond(medium) {
    display: none;
  }
}
</style>
