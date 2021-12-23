<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';
import IconChevronDown from '../icons/IconChevronDown.vue';

interface Props {
  modelValue?: boolean;
  icon?: any;
  text?: string;
  isGroup?: boolean;
  children?: Record<string, any>[];
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  isGroup: false,
  modelValue: false,
  children: () => [],
});

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(modelValue.value);

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  { immediate: true }
);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});
</script>

<template>
  <li @click="isOpen = !isOpen">
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
        select-none
      "
    >
      <slot name="icon">
        <div class="w-5">
          <component :is="icon" />
        </div>
      </slot>
      <span class="truncate link-item-text"> {{ text }}</span>
      <div class="flex-grow"></div>
      <slot name="icon.right">
        <IconChevronDown v-if="children.length > 0" />
      </slot>
    </a>
    <slot name="items">
      <ul v-if="children && isOpen" class="space-y-1 mt-1">
        <ListItem v-for="(child, idx) in children" :key="idx" v-bind="child" />
      </ul>
    </slot>
  </li>
</template>

<style scoped></style>
