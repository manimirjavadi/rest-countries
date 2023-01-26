<script setup lang="ts">
import CRCard from "@/components/UI/CRCard.vue";
import CRDropdown from "@/components/UI/CRDropdown.vue";
import CRInput from "@/components/UI/CRInput.vue";
import { useCountries } from "@/stores/countries";
import { onMounted } from "vue";

const countriesHandler = useCountries();

onMounted(async () => {
  await countriesHandler.fetchCountries();
});

const filterRegion = async (region: string) => {
  if (region !== "All") {
    await countriesHandler.filterByRegion(region);
  } else {
    await countriesHandler.fetchCountries();
  }
};

const searchCountry = async (name: string) => {
  if (name.length) {
    await countriesHandler.searchByName(name);
  } else {
    await countriesHandler.fetchCountries();
  }
};
</script>

<template>
  <main class="mainContainer rp">
    <div class="headerContainer">
      <CRInput @submit-search="searchCountry" />
      <CRDropdown @region-changed="filterRegion" />
    </div>

    <div class="countriesList">
      <div v-for="country in countriesHandler.countries" :key="country.name">
        <CRCard
          :image="country.flags?.svg"
          :name="country.name"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
          :cioc="country.cioc"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.headerContainer {
  @apply md:flex md:justify-between md:items-center mt-4 md:mt-0;
}
.countriesList {
  @apply w-full mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4;
}
</style>
