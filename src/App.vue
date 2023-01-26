<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/common/TheHeader.vue";
import CRLoading from "./components/UI/CRLoading.vue";
import CRAlert from "./components/UI/CRAlert.vue";
import { useAlert } from "./stores/alert";
import { useLoading } from "./stores/loading";

const loadingHandler = useLoading();
const alert = useAlert();
</script>

<template>
  <CRLoading v-if="loadingHandler.status" />

  <main>
    <TheHeader> Where in the world? </TheHeader>
    <div>
      <transition name="slide-fade">
        <CRAlert v-if="alert.showAlert" />
      </transition>
    </div>
    <transition name="slide-fade">
      <RouterView />
    </transition>
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
