<template>
  <a class="header-social-icons-item" target="_blank" href="#">
    <TheFaceBookIcon />
  </a>
  <a class="header-social-icons-item" target="_blank" href="#">
    <TheTwitterIcon />
  </a>
  <a class="header-social-icons-item" target="_blank" href="#">
    <TheInstagramIcon />
  </a>
</template>
<script setup lang="ts">
import TheFaceBookIcon from "@/components/Icons/TheFaceBookIcon.vue";
import TheTwitterIcon from "@/components/Icons/TheTwitterIcon.vue";
import TheInstagramIcon from "@/components/Icons/TheInstagramIcon.vue";
</script>

<style scoped>
.header-social-icons-item {
  font-family: var(--font-family-secondary); /* Use Roboto for nav links */
  font-size: var(--font-size-xs); /* Use 13px for nav links */
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: color 0.3s ease;
}

.header-social-icons-item:hover {
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .header-social-icons-item {
    color: var(--color-dark);
  }
}

</style>