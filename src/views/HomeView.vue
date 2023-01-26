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
</script>

<template>
  <main class="mainContainer rp">
    <div class="headerContainer">
      <CRInput />
      <CRDropdown />
    </div>

    <div class="countriesList">
      <div
        v-for="country in countriesHandler.countries"
        :key="country.name?.common"
      >
        <CRCard
          :image="country.flags?.svg"
          :name="country.name?.common"
          :population="country.population"
          :region="country.region"
          :capital="country.capital"
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
