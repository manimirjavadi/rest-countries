import { countries, search } from "@/api";
import { defineStore } from "pinia";
import type { Country } from "../interfaces/Country";
import { useAlert } from "./alert";
import { useLoading } from "./loading";

export enum sortEnum {
  POPULATION = 0,
  COUNTRYNAME = 1,
}

export const useCountries = defineStore("countries", {
  state: () => {
    return {
      singleCountry: {} as Country,
      countries: [] as Country[],
      sortType: sortEnum.COUNTRYNAME,
    };
  },
  actions: {
    fetchCountries() {
      this.sortType = sortEnum.COUNTRYNAME;
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
      this.sortType = sortEnum.COUNTRYNAME;
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
      this.sortType = sortEnum.COUNTRYNAME;
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

    findCountryByCca3(cioc: string) {
      Object.assign(
        this.singleCountry,
        this.countries.find((c: Country) => {
          if (c.cioc == cioc) {
            return c;
          }
        })
      );
    },

    getBorders() {
      let borders = [];

      if (this.singleCountry.borders?.length) {
        for (let c of this.singleCountry.borders) {
          let foundCountry = this.countries.find(
            (co) => co.cioc == c || co.alpha3Code == c
          );

          if (foundCountry) {
            borders.push(foundCountry);
          }
        }
      }

      return borders;
    },

    sort() {
      this.countries.sort((a, b) => {
        return b.population - a.population;
      });
    },
  },
});
