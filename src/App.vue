<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
  <AppHeader />

  <main class="py-4 container mx-auto">
    <router-view />
  </main>
</template>

<style></style>
