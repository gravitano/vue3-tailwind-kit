<script setup lang="ts">
import SidebarMenus from './SidebarMenus.vue';
import SidebarFooter from './SidebarFooter.vue';
import SidebarHeader from './SidebarHeader.vue';
</script>

<template>
  <div class="bg-black inset-0 fixed opacity-40 hidden"></div>

  <aside
    class="
      hidden
      left-0
      top-0
      bottom-0
      w-10/12
      sm:flex sm:flex-col
      items-center
      transition-all
      duration-300
      bg-gray-900
      text-white
      h-full
      sm:h-screen sm:w-72
      flex-shrink-0
    "
  >
    <SidebarHeader />

    <SidebarMenus />

    <SidebarFooter />
  </aside>
</template>

<style scoped></style>
