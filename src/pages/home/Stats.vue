<script setup lang="ts">
import { shallowRef } from 'vue';
import IconBreaker from '@/components/icons/IconBreaker.vue';
import IconDatabase from '@/components/icons/IconDatabase.vue';
import IconUser from '@/components/icons/IconUser.vue';
import IconHome from '@/components/icons/IconHome.vue';

const stats = shallowRef([
  {
    text: 'User',
    value: '123',
    icon: IconUser,
    colorClass: 'bg-emerald-500',
  },
  {
    text: 'Transactions',
    value: '$1234.5',
    icon: IconBreaker,
    colorClass: 'bg-sky-500',
  },
  {
    text: 'This Month',
    value: '$1234.5',
    icon: IconHome,
    colorClass: 'bg-amber-500',
  },
  {
    text: 'This Year',
    value: '$1234.5',
    icon: IconDatabase,
    colorClass: 'bg-indigo-500',
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-5">
    <div
      v-for="stat in stats"
      :key="stat.text"
      class="bg-white shadow-md p-4 rounded-md flex gap-4 items-center"
    >
      <div class="p-3 rounded-xl" :class="stat.colorClass">
        <component :is="stat.icon" class="w-8 h-8 text-white" />
      </div>
      <div class="space-y-1">
        <h3 class="font-semibold text-gray-500">{{ stat.text }}</h3>
        <h4 class="text-2xl font-bold text-gray-700">{{ stat.value }}</h4>
      </div>
    </div>
  </div>
</template>
