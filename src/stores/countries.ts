import { countries, search } from "@/api";
import { defineStore } from "pinia";
import type { Country } from "../interfaces/Country";
import { useAlert } from "./alert";
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
      const alert = useAlert();

      loadingHandler.startLoading();
      countries
        .fetchCountries()
        .then((res) => {
          this.countries = res;
          loadingHandler.stopLoading();
        })
        .catch((e) => {
          alert.throwAlert("error", "Server too busy!");
          loadingHandler.stopLoading();
        });
    },

    filterByRegion(name: String) {
      const loadingHandler = useLoading();
      const alert = useAlert();

      loadingHandler.startLoading();
      search
        .regionSearch(name)
        .then((res) => {
          this.countries = res;
          loadingHandler.stopLoading();
        })
        .catch((e) => {
          alert.throwAlert("error", "Server too busy!");
          loadingHandler.stopLoading();
        });
    },

    searchByName(name: String) {
      const loadingHandler = useLoading();
      const alert = useAlert();

      loadingHandler.startLoading();
      search
        .search(name)
        .then((res) => {
          this.countries = res;
          loadingHandler.stopLoading();
        })
        .catch((e) => {
          alert.throwAlert("error", e.response.data.message);
          loadingHandler.stopLoading();
        });
    },
  },
});
