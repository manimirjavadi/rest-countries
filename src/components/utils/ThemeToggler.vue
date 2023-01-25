<script setup lang="ts">
import { Theme, useTheme } from "@/stores/theme";
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMoonWaxingCrescent as moon,
  mdiWhiteBalanceSunny as sun,
} from "@mdi/js";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const themeHandler = useTheme();

const themeRef = storeToRefs(themeHandler);

watch(themeRef.theme, () => {
  if (themeRef.theme.value === Theme.LIGHT) {
    document.documentElement.classList.remove("dark");
  }

  if (themeRef.theme.value === Theme.DARK) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <div>
    <button id="toggleBtn" @click="themeHandler.toggleTheme">
      <SvgIcon
        id="moon"
        v-if="!themeHandler.theme"
        class="icon"
        type="mdi"
        :path="moon"
      ></SvgIcon>
      <SvgIcon id="sun" v-else class="icon" type="mdi" :path="sun"></SvgIcon>
    </button>
  </div>
</template>

<style scoped>
.icon:hover {
  @apply scale-110 duration-300 ease-out;
}
</style>
