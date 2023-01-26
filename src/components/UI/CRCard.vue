<script setup lang="ts">
defineProps<{
  image?: string;
  name?: string;
  population?: number;
  region?: string;
  capital?: string[];
}>();
</script>

<template>
  <div class="card">
    <div class="image">
      <img
        :title="name"
        :alt="name"
        loading="lazy"
        :src="image"
        :class="name === 'Nepal' ? 'object-contain' : 'object-cover'"
      />
    </div>
    <div class="content">
      <h1
        v-if="name"
        :title="name"
        :class="name?.length > 27 ? 'text-sm' : 'text-lg'"
      >
        {{ name }}
      </h1>
      <div class="list">
        <div class="item">
          <span class="item__title">Population: </span>
          <span>{{ population?.toLocaleString() }}</span>
        </div>
        <div class="item">
          <span class="item__title">Region: </span>
          <span>{{ region }}</span>
        </div>
        <div class="item">
          <span class="item__title">Capital: </span>
          <span v-if="capital?.length">{{ capital[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply bg-lightBg text-lightText dark:bg-darkElement dark:text-darkText whitespace-nowrap shadow-3xl rounded-sm pb-1;
}

.image img {
  @apply aspect-video;
}

.card:hover {
  @apply bg-lightInput/10 dark:bg-darkElement/50 duration-300 cursor-pointer;
}

.content {
  @apply px-4;
}

.content h1 {
  @apply h-[80px] w-full overflow-x-hidden font-semibold py-4;
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
