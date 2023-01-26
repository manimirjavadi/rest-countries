<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify as searchIcon, mdiWindowClose as close } from "@mdi/js";
import { ref } from "vue";

const searchText = ref("");

const emit = defineEmits<{
  (e: "submitSearch", id: string): void;
}>();

const submit = () => {
  emit("submitSearch", searchText.value);
};

const clear = () => {
  searchText.value = "";
  emit("submitSearch", "");
};
</script>

<template>
  <div class="relative">
    <input
      v-model="searchText"
      class="cr_input"
      placeholder="Search for a country..."
      @keydown.enter="submit"
    />
    <div class="iconContainer" v-if="!searchText.length">
      <SvgIcon type="mdi" :path="searchIcon"></SvgIcon>
    </div>
    <div class="iconContainer" v-else @click="clear">
      <SvgIcon type="mdi" :path="close"></SvgIcon>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply w-full md:w-[450px] h-[50px] shadow-3xl text-sm pl-12;
}

input:focus {
  @apply outline-none dark:bg-darkElement/50 bg-slate-100;
}

.iconContainer {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer;
}
</style>
