<template>
  <button class="button__primary" @click="handleClick" :type="type">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'

interface IButtonProps {
  text: string
  type?: ButtonType
}

const { text, type = 'button' } = defineProps<IButtonProps>()

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

const handleClick = (ev: MouseEvent) => emit('click', ev)
</script>

<style scoped lang="scss"></style>
