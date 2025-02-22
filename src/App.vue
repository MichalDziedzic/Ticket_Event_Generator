<template>
  <div class="wrapper">
    <header>
      <NavBar />
    </header>
    <main class="wrapper__main">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
</script>
