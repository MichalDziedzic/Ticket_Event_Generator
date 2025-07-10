<template>
  <button class="button__primary" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
})

const handleClick = () => {
  props.onClick()
}
</script>

<style scoped lang="scss"></style>
