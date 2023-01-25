import { defineStore } from "pinia";

export enum Theme {
  LIGHT,
  DARK,
}

export const useTheme = defineStore("theme", {
  state: () => {
    return {
      theme: Theme.LIGHT as Theme,
    };
  },
  actions: {
    toggleTheme() {
      switch (this.theme) {
        case Theme.LIGHT:
          this.theme = Theme.DARK;
          break;
        case Theme.DARK:
          this.theme = Theme.LIGHT;
          break;

        default:
          break;
      }
    },
  },
});
