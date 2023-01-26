<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWindowClose as close } from "@mdi/js";
import { useAlert } from "@/stores/alert";

const alert = useAlert();

const getAlertColor = (type: string) => {
  switch (type) {
    case "error":
      return "bg-red-500";

    case "success":
      return "bg-green-600";

    default:
      return "bg-green-600";
  }
};
const color = getAlertColor(alert.type);
</script>

<template>
  <div
    :class="`w-96 ${color} rounded-2xl p-5 absolute left-0 right-0 mx-auto mt-10 z-50`"
  >
    <div class="absolute right-2 top-2 text-white">
      <button @click="alert.closeAlert">
        <SvgIcon type="mdi" :path="close"></SvgIcon>
      </button>
    </div>
    <span class="text-white text-sm">
      {{ alert.message }}
    </span>
  </div>
</template>
