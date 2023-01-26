<script setup lang="ts">
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown as chevronDown } from "@mdi/js";
import { useLoading } from "@/stores/loading";

const emit = defineEmits<{
  (e: "regionChanged", id: string): void;
}>();
const loadingHandler = useLoading();

const regions = ref(["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]);
const dropDown = ref(false);
const dropDownValue = ref("Filter by Region");

const toggleDropDown = () => {
  if (!loadingHandler.status) {
    dropDown.value = !dropDown.value;
  }
};

const changeRegion = (region: string) => {
  dropDownValue.value = region;
  dropDown.value = false;
  emit("regionChanged", dropDownValue.value);
};
</script>

<template>
  <div v-if="dropDown" class="overlay" @click="() => (dropDown = false)"></div>
  <div class="my-8 w-[50%] md:max-w-[200px] relative inline-block">
    <button
      class="cr_input"
      @click="toggleDropDown"
      :disabled="loadingHandler.status"
    >
      <div class="iconContainer">
        <SvgIcon type="mdi" :path="chevronDown"></SvgIcon>
      </div>
      {{ dropDownValue === "All" ? "Filter By Region" : dropDownValue }}
    </button>
    <transition name="dropdown">
      <div v-show="dropDown">
        <div class="dropdownContainer" id="dropdown-menu">
          <a
            v-for="region in regions"
            :key="region"
            class="block px-4 py-1"
            @click="changeRegion(region)"
          >
            {{ region }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.overlay {
  @apply fixed w-full h-[200%];
}

button {
  @apply w-full h-[50px] flex justify-start items-center text-sm;
}

.iconContainer {
  @apply absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer;
}

.dropdownContainer {
  @apply absolute mt-2 w-full bg-lightBg shadow-3xl dark:bg-darkElement rounded-md py-2 px-4 z-50 cursor-pointer;
}
</style>
