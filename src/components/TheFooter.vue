<template>
  <footer>
    <div class="main-footer">
      <TheBackgroundOverlay :opacity="0.8" />
      <div class="footer-content">
        <div class="container flex justify-center">
          <TheDivider />
          <TheLogo />
          <TheDivider />
        </div>
        <div class="container grid grid-4-cols">
          <div class="footer-col">
            <h5>About</h5>
            <ul class="footer-nav">
              <li><a href="#">shop</a></li>
              <li><a href="#">plan my kitchen</a></li>
              <li><a href="#">about us</a></li>
              <li><a href="#">gallery</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Service</h5>
            <ul class="footer-nav">
              <li><a href="#">faq</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#">how to buy</a></li>
              <li><a href="#">downloads</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Info</h5>
            <p>
              <a href="tel:01234567890">delivery</a><br>
              <a href="mailto:hello@mk.com">terms</a>
              <a href="mailto:hello@mk.com">privacy</a>
            </p>
          </div>
          <div class="footer-col">
            <h5>Follow</h5>
            <div class="grid grid-3-cols">
              <TheFaceBookIcon />
              <TheInstagramIcon />
              <TheTwitterIcon />
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <p>Copyright Online MTC Home Kitchens 2018 - All rights reserved. Responsive website design, Development &
              Hosting by mtc.</p>
            <TheDivider width="100%" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import TheFaceBookIcon from "@/components/Icons/TheFaceBookIcon.vue";
import TheInstagramIcon from "@/components/Icons/TheInstagramIcon.vue";
import TheTwitterIcon from "@/components/Icons/TheTwitterIcon.vue";
import TheDivider from "@/components/TheDivider.vue";
import TheBackgroundOverlay from "@/components/TheBackgroundOverlay.vue";
import heroImage from "@/assets/images/hero1.png";

const footerSectionStyle = {
  backgroundImage: `url(${heroImage})`
};
</script>

<style scoped>
.main-footer {
  position: relative;
  background-image: v-bind('footerSectionStyle.backgroundImage');
  background-size: cover;
  background-position: center;
  background-color: var(--color-text-title);
  color: var(--color-light-ui);
  padding: 4rem 0 0 0;
}

.main-footer h5 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.main-footer p {
  color: var(--color-light-ui);
  font-size: 0.9rem;
  line-height: 1.8;
}

.footer-col .logo {
  font-family: var(--font-family-secondary);
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  border: 2px solid var(--color-white);
  padding: 0.5rem 0.75rem;
  line-height: 1;
  color: var(--color-white);
  display: inline-block;
  margin-bottom: 1rem;
}

.footer-nav {
  list-style: none;
  padding: 0;
}

.footer-nav li {
  margin-bottom: 0.5rem;
}

.footer-nav a, .footer-col p a {
  color: var(--color-light-ui);
  text-decoration: none;
  font-size: var(--font-size-sm);
  transition: color 0.3s;
}

.footer-nav a:hover, .footer-col p a:hover {
  color: var(--color-primary);
}

.footer-socials {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.footer-socials a {
  color: var(--color-white);
  font-weight: bold;
}

.footer-bottom {
  margin-top: 3rem;
  padding: 1.5rem 0;
  text-align: center;
}

.footer-bottom p {
  margin-bottom: 0;
  font-size: var(--font-size-xs);
  color: #aaa;
}

.footer-content {
  position: relative;
  z-index: 2;
}

/* Responsive adjustments for footer columns */
@media (max-width: 768px) {
  .footer-col {
    text-align: center;
    margin-bottom: 2rem;
  }

  .footer-socials {
    justify-content: center;
  }
}
</style>
