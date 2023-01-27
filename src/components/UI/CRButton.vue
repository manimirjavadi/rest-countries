<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowLeft as backArrow } from "@mdi/js";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  backBtn?: boolean;
  countryName?: string;
  to?: string;
  active?: boolean;
}>();

const handleClick = () => {
  if (props.backBtn) {
    router.go(-1);
  }

  if (props.to) {
    router.push(props.to);
  }
};
</script>

<template>
  <button class="cr_input" @click="handleClick">
    <SvgIcon type="mdi" :path="backArrow" v-if="backBtn" />
    <div :class="backBtn ? 'text-lg' : 'text-sm'">
      <slot />
    </div>
  </button>
</template>

<style scoped>
button {
  @apply scale-100 duration-100 flex gap-2 justify-center items-center overflow-hidden;
}

button:hover {
  @apply scale-105 duration-100;
}
</style>
