import { defineStore } from "pinia";

export const useLoading = defineStore("loading", {
  state: () => {
    return {
      status: false,
    };
  },

  actions: {
    startLoading() {
      this.status = true;
    },

    stopLoading() {
      this.status = false;
    },
  },
});
