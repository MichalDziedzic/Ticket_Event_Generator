<template>
  <div class="wrapper">
    <Header />
    <main class="wrapper__main">
      <RouterView />
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>
