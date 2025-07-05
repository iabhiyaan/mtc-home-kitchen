<template>
  <div>
    <TheHeader />
    <main>
      <HeroSection />
      <ContentSection />
      <TestimonialSection />
      <GallerySection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import ContentSection from '@/components/ContentSection.vue';
import TestimonialSection from '@/components/TestimonialSection.vue';
import GallerySection from "@/components/GallerySection.vue";
import TheFooter from '@/components/TheFooter.vue';
</script>