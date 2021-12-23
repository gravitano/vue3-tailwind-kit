<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import Sidebar from './components/layout/Sidebar.vue';
</script>

<template>
  <div class="flex">
    <Sidebar />

    <main class="flex-grow">
      <AppHeader />

      <div class="px-7 py-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style></style>
