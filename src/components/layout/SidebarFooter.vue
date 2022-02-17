<script setup lang="ts">
import IconUser from "../icons/IconUser.vue";
import IconCog from "../icons/IconCog.vue";
import Dropdown from "../dropdown/Dropdown.vue";
import DropdownItem from "../dropdown/DropdownItem.vue";

interface Props {
  mini?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mini: false,
  dark: false,
});
</script>

<template>
  <!-- footer -->
  <footer
    class="border-t w-full py-2 px-2 flex items-center justify-between"
    :class="[dark ? 'border-gray-800' : 'border-gray-200']"
  >
    <Dropdown top left>
      <template #activator>
        <a
          class="flex gap-2 px-2 py-2 rounded-md items-center"
          :class="[dark ? 'hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100']"
        >
          <IconUser />
          <span v-if="!mini" class="login-user">John Doe</span>
        </a>
      </template>

      <div class="p-1">
        <DropdownItem :icon="IconUser"> Profile </DropdownItem>
        <DropdownItem :icon="IconCog"> Preferences </DropdownItem>
      </div>
    </Dropdown>
    <button
      v-if="!mini"
      class="btn-logout appearance-none text-red-500 p-2 rounded-md hover:bg-red-100"
    >
      Logout
    </button>
  </footer>
</template>

<style scoped></style>
