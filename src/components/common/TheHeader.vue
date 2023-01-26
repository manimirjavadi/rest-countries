<script setup lang="ts">
import { useRouter } from "vue-router";
import ThemeToggler from "../utils/ThemeToggler.vue";

const router = useRouter();
</script>

<template>
  <main class="header rp">
    <div class="header__container" @click="() => router.push('/')">
      <h1 class="title">
        <slot />
      </h1>
      <ThemeToggler />
    </div>
  </main>
</template>

<style scoped>
.header {
  @apply w-full h-20 shadow-md bg-lightBg dark:bg-darkElement sticky top-0 z-40;
}

.header__container {
  @apply max-w-7xl h-full mx-auto flex justify-between items-center cursor-pointer;
}
</style>
