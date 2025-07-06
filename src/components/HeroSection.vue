<template>
  <section class="hero-section">
    <TheBackgroundOverlay :opacity="0.2" />
    <div class="container hero-content">
      <template v-for="(heroSectionItem, index) in heroSectionItems" :key="index">
        <template v-if="current === index">
          <p class="hero-subheading">{{ heroSectionItem.subheading }}</p>
          <h1 class="hero-heading">{{ heroSectionItem.heading }}</h1>
        </template>
      </template>
      <a href="#" class="btn btn-primary">Order Now</a>
    </div>
    <div class="slider-dots">
      <span v-for="(_,index) in heroSectionItems"
            :key="index"
            @click="setCurrent(index)"
            class="dot"
            :class="{ active: current === index }"
      />
    </div>
  </section>
</template>

<script setup>
import heroImage from "@/assets/images/hero1.png";
import TheBackgroundOverlay from "@/components/TheBackgroundOverlay.vue";
import useSlider from "@/composables/useSlider.js";

const heroSectionStyle = {
  backgroundImage: `url(${heroImage})`
};

const heroSectionItems = [
  {
    heading: "Bespoke & made to measure handmade kitchen design",
    subheading: "Design and order your new kitchen online today"
  },
  {
    heading: "Luxury Kitchen Solutions Tailored to Your Space",
    subheading: "Transform your home with our custom kitchen designs"
  },
  {
    heading: "Premium Materials, Timeless Craftsmanship",
    subheading: "Elevate Your Home With Bespoke Kitchen Solutions"
  }
];

const { current, setCurrent } = useSlider(heroSectionItems);
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

.hero-heading {
  font-family: var(--font-family-primary);
  color: var(--color-white);
  text-shadow: 0px 0px 25px #00000080;
  font-size: var(--font-size-xxxl);
  letter-spacing: -1px;
}

.hero-subheading {
  font-family: var(--font-family-secondary); /* Use Roboto */
  text-shadow: 0px 0px 4px #000000;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
}

.hero-content h1 {
  color: var(--color-white);
  margin-bottom: 2rem;
}

.slider-dots {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.dot {
  width: 50px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  cursor: pointer;
}

.dot.active {
  background-color: var(--color-primary);
}
</style>