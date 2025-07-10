<template>
  <div class="wrapper">
    <Header />
    <main class="wrapper__main">
      <RouterView />
      <BaseButton text="Generate My Ticket" :onClick="handleButtonClick" />
    </main>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'

const handleButtonClick = () => {}
</script>
