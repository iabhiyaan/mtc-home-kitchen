<template>
  <div class="divider" />
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '590px'
  },
  opacity: {
    type: Number,
    default: 0.2
  }
})
</script>

<style scoped>
.divider {
  width: v-bind('props.width');
  height: 1px;
  background-color: var(--color-white);
  opacity: v-bind('props.opacity');
}
</style>

