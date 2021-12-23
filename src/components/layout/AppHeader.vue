<script setup lang="ts">
import IconMenu from '../icons/IconMenu.vue';
import IconUser from '../icons/IconUser.vue';
</script>

<template>
  <div class="py-2 px-4 shadow-md ml-72 bg-white">
    <div class="flex items-center justify-between gap-6">
      <button
        type="button"
        class="
          appearance-none
          hover:bg-gray-200
          p-2
          rounded
          transition
          duration-300
        "
      >
        <IconMenu />
      </button>

      <a
        href="#"
        class="
          flex
          gap-2
          px-4
          py-2
          rounded
          items-center
          font-semibold
          hover:bg-gray-200
          transition
          duration-300
        "
      >
        <IconUser />
        <span>John Doe</span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
