<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/common/TheHeader.vue";
import CRLoading from "./components/UI/CRLoading.vue";
import { useLoading } from "./stores/loading";

const loadingHandler = useLoading();
</script>

<template>
  <CRLoading v-if="loadingHandler.status" />

  <main>
    <TheHeader> Where in the world? </TheHeader>
    <RouterView />
  </main>
</template>

<style scoped></style>
