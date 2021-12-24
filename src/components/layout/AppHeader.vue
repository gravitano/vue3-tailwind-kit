<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout';
import IconMenu from '../icons/IconMenu.vue';
import IconUser from '../icons/IconUser.vue';
import IconCog from '../icons/IconCog.vue';
import IconLogout from '../icons/IconLogout.vue';
import Dropdown from '../dropdown/Dropdown.vue';
import DropdownItem from '../dropdown/DropdownItem.vue';

const layout = useLayoutStore();

const toggleMenu = () => {
  if (window.innerWidth < 600) {
    layout.toggleSidebar();
  } else {
    layout.toggleMini();
  }
};
</script>

<template>
  <div class="py-2 px-4 shadow-md bg-white">
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
        @click="toggleMenu"
      >
        <IconMenu />
      </button>

      <Dropdown>
        <template #activator>
          <span
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
          </span>
        </template>

        <template #default>
          <div class="p-1">
            <DropdownItem :icon="IconUser"> Profile </DropdownItem>
            <DropdownItem :icon="IconCog"> Preferences </DropdownItem>
          </div>
          <div class="p-1">
            <DropdownItem :icon="IconLogout"> Logout </DropdownItem>
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped></style>
