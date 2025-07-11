<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layoutComponent = computed(() => {
  const layout = route.meta.layout || 'DefaultLayout'; // Default to DefaultLayout if not specified
  return layout;
});
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<style scoped></style>
