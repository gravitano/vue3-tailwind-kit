<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppSidebar from './components/layout/AppSidebar.vue';
</script>

<template>
  <AppHeader />

  <div>
    <AppSidebar />

    <main class="py-4 px-7 ml-72">
      <router-view />
    </main>
  </div>
</template>

<style></style>
