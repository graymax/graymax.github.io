<script lang="ts" setup>
import { computed } from 'vue';

interface LoadingProps {
  dimmed?: boolean;
  fullscreen?: boolean;
}

const props = withDefaults(defineProps<LoadingProps>(), {
  dimmed: false,
  fullscreen: false,
});

const wrapperClass = computed(() => ({
  'loading-wrapper': true,
  'dimmed': props.dimmed,
  'fullscreen': props.fullscreen,
}));
</script>

<template>
  <div :class="wrapperClass">
      <div class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
@use '@scss/components/loading.scss'
</style>