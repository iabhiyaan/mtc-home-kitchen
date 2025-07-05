<template>
  <div class="hero-overlay" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  opacity: {
    type: Number,
    default: 0.4
  }
});

const bgColorOpacity = computed(() => {
  return `rgba(0, 0, 0, ${props.opacity})`;
});
</script>

<style scoped>
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: v-bind(bgColorOpacity)
}
</style>