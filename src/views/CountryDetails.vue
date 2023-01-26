<script setup lang="ts">
import CRButton from "@/components/UI/CRButton.vue";
import type { Country } from "@/interfaces/Country";
import { useCountries } from "@/stores/countries";
import { onMounted, watchEffect, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const countriesHandler = useCountries();
const borders = ref([] as Country[]);

onMounted(async () => {
  await countriesHandler.fetchCountries();
});

watchEffect(async () => {
  countriesHandler.findCountryByCca3(route.params.cioc.toString());
  borders.value = countriesHandler.getBorders();
});
</script>

<template>
  <main class="mainContainer rp" v-if="countriesHandler.singleCountry">
    <div class="headerContainer">
      <CRButton :back-btn="true">Back</CRButton>
    </div>
    <div class="detailsContainer">
      <div class="image">
        <img :src="countriesHandler.singleCountry.flags?.svg" />
      </div>
      <div class="details">
        <h1 class="title">
          {{ countriesHandler.singleCountry.name }}
        </h1>
        <div class="information">
          <div class="list">
            <div class="item">
              <span class="item__title">Native Name: </span>
              <span>
                {{ countriesHandler.singleCountry.nativeName }}
              </span>
            </div>
            <div class="item">
              <span class="item__title">Population: </span>
              <span>
                {{
                  countriesHandler.singleCountry.population?.toLocaleString()
                }}
              </span>
            </div>
            <div class="item">
              <span class="item__title">Sub Region: </span>
              <span>
                {{ countriesHandler.singleCountry.subregion }}
              </span>
            </div>
            <div class="item">
              <span class="item__title">Capital: </span>
              <span>
                {{ countriesHandler.singleCountry.capital }}
              </span>
            </div>
          </div>
          <div class="list">
            <div
              class="item"
              v-if="countriesHandler.singleCountry.topLevelDomain"
            >
              <span class="item__title">Top Level Domain: </span>
              <span>
                {{ countriesHandler.singleCountry.topLevelDomain[0] }}
              </span>
            </div>
            <div class="item">
              <span class="item__title">Currencies: </span>
              <span
                v-for="(currency, idx) in countriesHandler.singleCountry
                  .currencies"
                :key="currency.name"
              >
                {{ currency.name }}
                {{
                  idx + 1 === countriesHandler.singleCountry.currencies?.length
                    ? ""
                    : ","
                }}
              </span>
            </div>
            <div class="item">
              <span class="item__title">Languages: </span>
              <span
                v-for="(lang, idx) in countriesHandler.singleCountry.languages"
                :key="lang.name"
              >
                {{ lang.name }}
                {{
                  idx + 1 === countriesHandler.singleCountry.languages?.length
                    ? ""
                    : ", "
                }}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1 class="borderTitle">Border Countries:</h1>
        </div>
        <div class="borders">
          <CRButton
            v-for="border in borders"
            :key="border.name"
            :to="`/${border.name}/${border.cioc}`"
          >
            {{ border.name }}
          </CRButton>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.headerContainer {
  @apply md:flex md:justify-between md:items-center mt-4 md:mt-0 py-8;
}

.detailsContainer {
  @apply my-4 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8;
}

.image {
  @apply aspect-video bg-black;
}

.image img {
  @apply w-full h-full object-cover;
}

.information {
  @apply grid grid-cols-1 md:grid-cols-2 py-8;
}

.list {
  @apply mb-2;
}

.item {
  @apply text-sm my-2;
}

.item__title {
  @apply font-semibold;
}

.borders {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-self-auto;
}
.borderTitle {
  @apply font-bold h-[40px];
}
</style>
