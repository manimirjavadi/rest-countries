import { countries, search } from "@/api";
import { defineStore } from "pinia";
import type { Country } from "../interfaces/Country";
import { useLoading } from "./loading";
export const useCountries = defineStore("countries", {
  state: () => {
    return {
      countries: [] as Country[],
    };
  },
  actions: {
    fetchCountries() {
      const loadingHandler = useLoading();
      loadingHandler.startLoading();
      countries.fetchCountries().then((res) => {
        this.countries = res;
        loadingHandler.stopLoading();
      });
    },

    filterByRegion(name: String) {
      const loadingHandler = useLoading();
      loadingHandler.startLoading();
      search.regionSearch(name).then((res) => {
        this.countries = res;
        loadingHandler.stopLoading();
      });
    },
  },
});
