<script setup lang="ts">
import IconBreaker from '../icons/IconBreaker.vue';
import IconUser from '../icons/IconUser.vue';
import IconDatabase from '../icons/IconDatabase.vue';
import IconHome from '../icons/IconHome.vue';
import IconChevronDown from '../icons/IconChevronDown.vue';
</script>

<template>
  <div class="bg-black inset-0 fixed opacity-40 hidden"></div>
  <aside
    class="
      hidden
      left-0
      top-0
      bottom-0
      w-10/12
      sm:flex sm:flex-col
      items-center
      transition-all
      duration-300
      bg-gray-900
      text-white
      h-full
      sm:h-screen sm:w-72
      flex-shrink-0
    "
  >
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

    <!-- menu -->
    <ul class="space-y-1 flex-grow w-full menu px-2">
      <li>
        <a
          class="
            cursor-pointer
            w-full
            flex
            items-center
            gap-4
            px-2
            py-2
            hover:bg-gray-800
            rounded-md
            text-gray-400
            hover:text-gray-300
          "
        >
          <IconHome />
          <span class="truncate link-item-text">Home</span>
        </a>
      </li>
      <li>
        <a
          class="
            cursor-pointer
            w-full
            flex
            items-center
            gap-4
            px-2
            py-2
            hover:bg-gray-800
            rounded-md
            text-gray-400
            hover:text-gray-300
          "
        >
          <IconUser />
          <span class="truncate link-item-text">User Management</span>
        </a>
      </li>

      <li>
        <a
          class="
            cursor-pointer
            w-full
            flex
            items-center
            gap-4
            px-2
            py-2
            hover:bg-gray-800
            rounded-md
            text-gray-400
            hover:text-gray-300
          "
        >
          <IconDatabase />
          <span class="truncate link-item-text">Content</span>
          <div class="flex-grow"></div>
          <IconChevronDown />
        </a>

        <ul class="space-y-1 mt-1">
          <li>
            <a
              class="
                cursor-pointer
                w-full
                flex
                items-center
                gap-4
                px-2
                py-2
                hover:bg-gray-800
                rounded-md
                text-gray-400
                hover:text-gray-300
              "
            >
              <span class="w-6"> </span>
              <span class="truncate link-item-text">Post Management</span>
            </a>
          </li>
          <li>
            <a
              class="
                cursor-pointer
                w-full
                flex
                items-center
                gap-4
                px-2
                py-2
                hover:bg-gray-800
                rounded-md
                text-gray-400
                hover:text-gray-300
              "
            >
              <span class="w-6"></span>
              <span class="truncate link-item-text">FAQ Management</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>

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
        <IconUser class="w-5 h-5" />
        <span class="login-user">John Doe</span>
      </a>
      <button
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
  </aside>
</template>

<style scoped></style>
