import { countries } from "@/api";
import { defineStore } from "pinia";
import type { Country } from "../interfaces/Country";

export const useCountries = defineStore("countries", {
  state: () => {
    return {
      countries: [] as Country[],
    };
  },
  actions: {
    async fetchCountries() {
      const response = await countries.fetchCountries();
      this.countries = response;
    },
  },
});
