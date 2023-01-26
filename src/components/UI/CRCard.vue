<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="image">
      <img alt="germany" loading="lazy" src="https://flagcdn.com/mu.svg" />
    </div>
    <div class="content">
      <h1>Germany</h1>
      <div class="list">
        <div class="item">
          <span class="item__title">Population: </span>
          <span>Value</span>
        </div>
        <div class="item">
          <span class="item__title">Region: </span>
          <span>Value</span>
        </div>
        <div class="item">
          <span class="item__title">Capital: </span>
          <span>Value</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-lightBg text-lightText dark:bg-darkElement dark:text-darkText whitespace-nowrap shadow-3xl rounded-sm;
}

.image img {
  @apply aspect-video object-cover;
}

.card:hover {
  @apply bg-lightInput/10 dark:bg-darkElement/50 duration-300 cursor-pointer;
}

.content {
  @apply px-4;
}

.content h1 {
  @apply text-lg font-semibold py-4;
}

.list {
  @apply mb-8;
}

.item {
  @apply text-sm my-1;
}

.item__title {
  @apply font-semibold;
}
</style>
