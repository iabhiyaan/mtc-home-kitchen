<template>
  <section class="hero-section">
    <TheBackgroundOverlay :opacity="0.2" />
    <div class="container hero-content">
      <p class="hero-subheading">Design and order your new kitchen online today</p>
      <h1>Bespoke & made to measure handmade kitchen design</h1>
      <a href="#" class="btn btn-primary">Order Now</a>
      <div class="slider-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/images/hero1.png'
import TheBackgroundOverlay from "@/components/TheBackgroundOverlay.vue";
const heroSectionStyle = {
  backgroundImage: `url(${heroImage})`
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-image: v-bind('heroSectionStyle.backgroundImage');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
}

.hero-content {
  position: relative; /* To be on top of the overlay */
  z-index: 2;
  max-width: 800px;
}

.hero-subheading {
  font-family: var(--font-family-secondary); /* Use Roboto */
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.hero-content h1 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.slider-dots {
  position: absolute;
  bottom: -60px; /* Position below the content */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 50px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
}

.dot.active {
  background-color: var(--color-primary);
}
</style>