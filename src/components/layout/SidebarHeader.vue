<script setup lang="ts">
import IconBreaker from "../icons/IconBreaker.vue";
import IconX from "../icons/IconX.vue";

interface Props {
  mini?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  mini: false,
  dark: false,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <!-- brand -->
  <header
    class="font-bold text-left mb-3 flex w-full items-center gap-4 px-4 py-4 -mx-2 border-b border-r"
    :class="[dark ? 'border-gray-800' : 'border-gray-200']"
  >
    <IconBreaker />

    <span v-if="!mini" class="brand flex-grow font-bold">Brand</span>

    <button class="appearance-none sm:hidden" @click="emit('close')">
      <IconX />
    </button>
  </header>
</template>

<style scoped></style>
