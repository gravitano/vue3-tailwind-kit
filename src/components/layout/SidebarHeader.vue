<script setup lang="ts">
import IconBreaker from '../icons/IconBreaker.vue';
</script>

<template>
  <!-- brand -->
  <header
    class="
      font-bold
      text-left
      mb-3
      flex
      w-full
      items-center
      gap-4
      px-4
      py-4
      border-gray-800
      -mx-2
      border-b
    "
  >
    <IconBreaker />

    <span class="brand flex-grow font-bold">Brand</span>

    <!-- menu mini toggler -->
    <!-- <label
        for="mini-toggle"
        class="
          arrow-toggler
          block
          py-2
          relative
          transition
          duration-300
          rounded-md
          px-2
          cursor-pointer
          hover:bg-gray-800
        "
      >
        <IconChevronDoubleLeftSolid />
      </label> -->
  </header>
</template>

<style scoped></style>
