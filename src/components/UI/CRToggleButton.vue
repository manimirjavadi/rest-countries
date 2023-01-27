<script setup lang="ts">
import { useCountries } from "@/stores/countries";

const props = defineProps<{
  active?: boolean;
  type: string;
  class?: string;
}>();

const emit = defineEmits<{
  (e: "click", id: string): void;
}>();

const handleClick = () => {
  emit("click", props.type);
};
</script>

<template>
  <button class="cr_toggle" :class="class" @click="handleClick">
    <div>
      <slot />
    </div>
  </button>
</template>

<style scoped>
button {
  @apply scale-100 duration-100 flex gap-2 justify-center items-center overflow-hidden z-0;
}

button:hover {
  @apply scale-105 duration-100;
}
</style>
