<script setup lang="ts">
import IconUser from '../icons/IconUser.vue';

interface Props {
  mini?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mini: false,
});
</script>

<template>
  <!-- footer -->
  <footer
    class="
      border-t
      w-full
      border-gray-800
      py-2
      px-2
      flex
      items-center
      justify-between
    "
  >
    <a class="flex gap-2 hover:bg-gray-800 px-2 py-2 rounded-md">
      <IconUser />
      <span v-if="!mini" class="login-user">John Doe</span>
    </a>
    <button
      v-if="!mini"
      class="
        btn-logout
        appearance-none
        text-gray-400
        hover:text-gray-300
        p-2
        rounded-md
        hover:bg-gray-800
      "
    >
      Logout
    </button>
  </footer>
</template>

<style scoped></style>
