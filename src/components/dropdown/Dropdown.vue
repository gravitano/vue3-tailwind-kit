<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import IconChevronDown from '../icons/IconChevronDown.vue';
import IconHome from '../icons/IconHome.vue';

interface Props {
  top?: boolean;
  left?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  top: false,
  left: false,
});
</script>

<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="
            inline-flex
            justify-center
            text-sm
            font-medium
            hover:bg-opacity-30
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-opacity-75
          "
        >
          <slot name="activator"></slot>
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="
            absolute
            w-56
            bg-white
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
          :class="[
            top ? 'origin-bottom-right bottom-12' : 'mt-2 origin-top-right',
            left ? 'left-0' : 'right-0',
          ]"
        >
          <slot />
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
