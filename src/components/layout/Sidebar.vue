<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import SidebarMenus from "./SidebarMenus.vue";
import SidebarFooter from "./SidebarFooter.vue";
import SidebarHeader from "./SidebarHeader.vue";

interface Props {
  modelValue?: boolean;
  mini?: boolean;
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  mini: false,
  dark: true,
});

const { mini, modelValue } = toRefs(props);

const emit = defineEmits(["update:mini", "update:modelValue", "overlay:click", "close"]);

const isOpen = ref(modelValue.value);
const isMini = ref(mini.value);

watch(
  mini,
  (val) => {
    isMini.value = val;
  },
  { immediate: true }
);

watch(isMini, (val) => {
  emit("update:mini", val);
});

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  { immediate: true }
);

watch(isOpen, (val) => {
  emit("update:modelValue", val);
});
</script>

<template>
  <div
    v-if="isOpen"
    @click="emit('overlay:click')"
    class="bg-black inset-0 fixed opacity-40 sm:hidden z-10"
  ></div>

  <aside
    class="flex flex-col items-center transition-all duration-300 flex-shrink-0 z-20 transform left-0 top-0 bottom-0 h-screen w-10/12 fixed sm:relative"
    :class="[
      dark ? 'bg-gray-900 text-white' : 'bg-white',
      isMini ? 'sm:w-14' : 'sm:w-72',
      isOpen ? 'translate-x-0 sm:transform-none' : '-translate-x-full',
    ]"
  >
    <SidebarHeader :mini="isMini" @close="emit('close')" :dark="dark" />

    <SidebarMenus :mini="isMini" :dark="dark" />

    <SidebarFooter :mini="isMini" :dark="dark" />
  </aside>
</template>

<style scoped></style>
