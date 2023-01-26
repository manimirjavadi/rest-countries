<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify as searchIcon, mdiWindowClose as close } from "@mdi/js";
import { ref } from "vue";

const searchText = ref("");
</script>

<template>
  <div class="relative">
    <input
      v-model="searchText"
      class="cr_input"
      placeholder="Search for a country..."
    />
    <div class="iconContainer" v-if="!searchText.length">
      <SvgIcon type="mdi" :path="searchIcon"></SvgIcon>
    </div>
    <div class="iconContainer" v-else @click="() => (searchText = '')">
      <SvgIcon type="mdi" :path="close"></SvgIcon>
    </div>
  </div>
</template>

<style scoped>
input {
  @apply w-[230px] md:w-[450px] shadow-3xl text-sm pl-12;
}

.iconContainer {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer;
}
</style>
