<script setup lang="ts">
import { shallowRef } from 'vue';
import IconUser from '../icons/IconUser.vue';
import IconDatabase from '../icons/IconDatabase.vue';
import IconHome from '../icons/IconHome.vue';
import List from '../list/List.vue';
import ListItem from '../list/ListItem.vue';

const getItems = (length = 5, hasChildren = false): Record<string, any>[] => {
  return Array.from({ length }, (v, k) => ({
    text: `${hasChildren ? 'Item' : 'Sub Item'} ${k + 1}`,
    to: '/users',
    icon: hasChildren ? IconDatabase : hasChildren,
    isOpen: false,
    ...(hasChildren ? { children: getItems(3) } : {}),
  }));
};

const menus = shallowRef([
  {
    text: 'Home',
    to: '/',
    icon: IconHome,
  },
  {
    text: 'User Management',
    to: '/users',
    icon: IconUser,
  },
  ...getItems(5, true),
]);
</script>

<template>
  <List class="overflow-y-auto">
    <ListItem
      v-for="(item, idx) in menus"
      :key="idx"
      v-model="item.isOpen"
      v-bind="item"
    />
  </List>
</template>

<style scoped></style>
