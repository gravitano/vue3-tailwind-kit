<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import AppHeader from './components/layout/AppHeader.vue';
import Sidebar from './components/layout/Sidebar.vue';
import { useLayoutStore } from './stores/layout';

const layout = useLayoutStore();

const closeSidebar = () => {
  layout.closeMini();
  layout.closeSidebar();
};

const onResize = () => {
  if (window.innerWidth < 600) {
    layout.closeMini();
    layout.closeSidebar();
  } else {
    layout.openSidebar();
  }
};

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <div class="sm:flex">
    <Sidebar
      v-model="layout.isSidebarOpen"
      v-model:mini="layout.mini"
      @overlay:click="closeSidebar"
      @close="closeSidebar"
    />

    <main class="flex-grow">
      <AppHeader />

      <div class="px-7 py-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style></style>
