<script setup lang="ts"></script>

<template>
  <div class="py-3 shadow-md">
    <div class="container mx-auto flex items-center gap-6">
      <a href="#" class="font-bold text-blue-500 text-lg"> Vue 3 </a>
      <div class="space-x-2">
        <router-link
          exact-active-class="text-blue-500"
          to="/"
          class="font-semibold hover:text-blue-500"
        >
          Home
        </router-link>
        <router-link
          exact-active-class="text-blue-500"
          to="/about"
          class="font-semibold hover:text-blue-500"
        >
          About
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
