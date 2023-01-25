<script setup lang="ts">
import { watch } from "vue";
import { RouterView } from "vue-router";
import { useTheme, Theme } from "./stores/theme";
import View from "./components/View.vue";
import { storeToRefs } from "pinia";

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
  <main>
    <header></header>
    <View element="div" class="underline"> Hello from view </View>
    <RouterView />
    <button @click="themeHandler.toggleTheme()">Toggle theme</button>
  </main>
</template>

<style scoped></style>
