<script setup lang="ts">
import { RouterView } from "vue-router";
import View from "./components/View.vue";
</script>

<template>
  <header></header>
  <View element="div" class="underline"> Hello from view </View>
  <RouterView />
</template>

<style scoped></style>
