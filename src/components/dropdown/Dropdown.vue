<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import IconChevronDown from '../icons/IconChevronDown.vue';
import IconHome from '../icons/IconHome.vue';
</script>

<template>
  <div class="w-56 text-right">
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
            right-0
            w-56
            mt-2
            origin-top-right
            bg-white
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            ring-1 ring-black ring-opacity-5
            focus:outline-none
          "
        >
          <slot />
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
