<template>
  <section class="section">
    <div class="container grid grid-2-cols">
      <div class="col-image">
        <img :src="contentImage" alt="Handmade kitchen detail">
      </div>
      <div class="col-text">
        <p class="subheading">Quality craftsmanship from build to delivery</p>
        <h2>Discover the beauty of a handmade kitchen</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis vestibulum
          elit. Morbi eget est sit amet sapien venenatis vestibulum. Nam mauris arcu, feugiat in finibus vitae,
          sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
        </p>
        <a href="#" class="btn btn-primary">About us</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import contentImage from "@/assets/images/content1.png";
</script>

<style scoped>
.col-text {
  padding-left: 2rem;
}

.subheading {
  font-family: var(--font-family-secondary); /* Use Roboto */
  font-size: var(--font-size-xs); /* Use 13px */
  color: var(--color-text-body);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .col-text {
    padding-left: 0;
    margin-top: 2rem;
  }
}
</style>
