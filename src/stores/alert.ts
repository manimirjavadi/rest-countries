import { defineStore } from "pinia";

export const useAlert = defineStore("alert", {
  state: () => {
    return {
      type: "info", // error, success, info, warning
      message: "",
      showAlert: false,
    };
  },

  actions: {
    throwAlert(type: string, message: string) {
      this.type = type;
      this.message = message;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    },

    closeAlert() {
      this.showAlert = false;
    },
  },
});
