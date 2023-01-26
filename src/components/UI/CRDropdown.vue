<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown as chevronDown } from "@mdi/js";

const dropDown = ref(false);

const toggleDropDown = () => {
  dropDown.value = !dropDown.value;
};
</script>

<template>
  <div class="my-8 w-[50%] md:max-w-[200px] relative inline-block">
    <button class="cr_input" @click="toggleDropDown">
      <div class="iconContainer">
        <SvgIcon type="mdi" :path="chevronDown"></SvgIcon>
      </div>
      Search by Region
    </button>
    <transition name="dropdown">
      <div v-show="dropDown">
        <div
          class="absolute mt-2 w-full bg-lightBg shadow-3xl dark:bg-darkElement rounded-md py-2 px-4"
          id="dropdown-menu"
        >
          <a href="#" class="block px-4 py-1">Option 1</a>
          <a href="#" class="block px-4 py-2">Option 2</a>
          <a href="#" class="block px-4 py-2">Option 3</a>
          <a href="#" class="block px-4 py-2">Option 4</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
button {
  @apply w-full h-[50px] flex justify-start items-center text-sm;
}

.iconContainer {
  @apply absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer;
}
</style>
