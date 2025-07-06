<template>
  <section class="section">
    <div class="container text-center">
      <h2 class="section-title">Customer Gallery</h2>
      <div class="grid grid-4-cols gallery-wrapper">
        <div v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <img :src="image" alt="Gallery Image" class="gallery-image">
        </div>
      </div>
      <a href="#" class="btn btn-primary">View more</a>
    </div>
  </section>
</template>

<script setup>

import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";

const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4
];
</script>

<style scoped>
.gallery-wrapper {
  gap: var(--gutter)
}
</style>
