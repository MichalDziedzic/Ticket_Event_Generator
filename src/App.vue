<template>
  <div class="main__wrapper">
    <header>
      <NavBar />
    </header>
    <main class="main__container">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
</script>
