<template>
  <div>
    <h1>User Form</h1>
    <form @submit.prevent="onSubmit" novalidate>
      <BaseInputField id="fullName" label="Full Name" v-model="userTicketData.fullName" />
      <BaseInputField
        id="emailAddress"
        label="Email Address"
        v-model="userTicketData.emailAddress"
      />
      <BaseInputField
        id="githubUsername"
        label="Github Username"
        v-model="userTicketData.githubUsername"
      />
      <BaseButton type="submit" text="Submit" />
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../baseComponents/BaseButton.vue'
import BaseInputField from './BaseInputField.vue'
import { reactive } from 'vue'

interface IUserTicketData {
  fullName: string
  emailAddress: string
  githubUsername: string
}

const userTicketData = reactive<IUserTicketData>({
  fullName: '',
  emailAddress: '',
  githubUsername: '',
})

const onSubmit = () => {
  console.log(userTicketData)
}
</script>

<style scoped lang="scss"></style>
