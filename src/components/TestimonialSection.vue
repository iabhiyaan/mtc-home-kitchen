<template>
  <section class="section section-features">
    <div class="container text-center">
      <p class="subheading text-primary">what our customers say</p>
      <h2 class="section-title section-content mx-auto">Over 35 years experience designing handmade kitchens</h2>
      <div class="testimonial-slider content-cta-gap">
        <button class="slider-button" @click="prev">
          <img :src="leftArrow" alt="left arrow" />
        </button>
        <div>
          <p class="testimonial-slider-content mx-auto section-content">
            {{ testimonials[current].text }}
          </p>
          <span>
            {{ testimonials[current].name }}
          </span>
        </div>
        <button class="slider-button" @click="next">
          <img :src="rightArrow" alt="right arrow" />
        </button>
      </div>
      <a href="#" class="btn btn-primary faq-btn">Frequently Asked Questions</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import leftArrow from "@/assets/images/left-arrow.svg";
import rightArrow from "@/assets/images/right-arrow.svg";
import useSlider from "@/composables/useSlider";

import { ref } from "vue";


const testimonials = [
  {
    text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
    name: "Jane, Dundee"
  },
  { text: "The team was professional and the kitchen looks amazing. Highly recommended!", name: "Jamie Smith" },
  { text: "Excellent service and beautiful craftsmanship. Will use again.", name: "Alastair Cook" }
];

const { next, prev, current } = useSlider(testimonials)
</script>

<style scoped>
.testimonial-slider {
  position: relative;
  display: grid;
  grid-template-columns:max-content 1fr max-content;
  justify-content: center;
  align-items: center;
}

.slider-button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}

</style>