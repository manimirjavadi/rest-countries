<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/common/TheHeader.vue";
</script>

<template>
  <main>
    <TheHeader> Where in the world? </TheHeader>
    <RouterView />
  </main>
</template>

<style scoped></style>
