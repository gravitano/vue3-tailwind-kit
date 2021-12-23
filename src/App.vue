<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
  <div class="flex">
    <AppSidebar />

    <main class="flex-grow">
      <AppHeader />

      <div class="px-7 py-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style></style>
