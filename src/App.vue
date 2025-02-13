<template>
  <header>
    <div class="wrapper">
      <h1>Ticket generator project</h1>
      <h2>title h2 test title</h2>
      <NavBar />
    </div>
  </header>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
</script>
