<script setup lang="ts">
import { MenuItem } from '@headlessui/vue';

interface Props {
  icon?: any;
  text?: string;
  iconClass?: string;
  activeClass?: string;
  inactiveClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  iconClass: 'text-violet-400',
  activeClass: 'text-white',
  inactiveClass: '',
});

// const {text} = toRefs(props);
</script>

<template>
  <MenuItem v-slot="{ active }">
    <button
      :class="[
        active ? 'bg-violet-500 text-white' : 'text-gray-900',
        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
      ]"
    >
      <slot name="icon">
        <component
          :is="icon"
          class="w-5 h-5 mr-2"
          :class="[iconClass, active ? activeClass : inactiveClass]"
          aria-hidden="true"
        />
      </slot>
      <slot>
        {{ text }}
      </slot>
    </button>
  </MenuItem>
</template>

<style scoped></style>
