<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="../assets/images/logo-mark.svg"
        class="header__logo-img"
        alt="logo-ticket-generator"
      />
      <h1>Coding Conf</h1>
    </div>
    <NavBar />
  </header>
</template>

<script setup lang="ts">
import NavBar from '@/components/Navbar.vue'
</script>

<style scoped lang="scss">
.header {
  @include flex(row, flex-start, space-between, 12px);

  @include respond(medium) {
    @include flex(column, center, center, 12px);
  }

  &__logo {
    @include flex(row, center, flex-start, 12px);
    width: 100%;

    @include respond(small) {
      @include flex(row, center, center, 12px);
    }
  }

  &__logo-img {
    @include respond(small) {
      margin-left: 50px;
    }
    @include respond(medium) {
      margin-left: 0;
    }
  }
}
</style>
