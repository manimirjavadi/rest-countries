import { defineStore } from "pinia";

export enum Theme {
  LIGHT,
  DARK,
}

export const useTheme = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme"),
    };
  },
  actions: {
    toggleTheme() {
      switch (this.theme) {
        case "0":
          this.theme = Theme.DARK.toString();
          localStorage.setItem("theme", this.theme.toString());
          break;
        case "1":
          this.theme = Theme.LIGHT.toString();
          localStorage.setItem("theme", this.theme.toString());
          break;

        default:
          this.theme = Theme.DARK.toString();
          localStorage.setItem("theme", this.theme.toString());
          break;
      }
    },
  },
});
