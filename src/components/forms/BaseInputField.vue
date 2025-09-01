<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :id="id" :type="type" v-model="modelValue" :placeholder="placeholder" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  label: string
  type?: string
  placeholder?: string
}>()

const modelValue = defineModel<string>()
</script>

<style scoped lang="scss"></style>
