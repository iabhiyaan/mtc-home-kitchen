<template>
  <header class="main-header">
    <div class="container header-container">
      <div class="header-socials">
        <!-- Placeholder for social icons -->
        <a href="#">
          <TheFaceBookIcon/>
        </a>
        <a href="#">
          <TheTwitterIcon/>
        </a>
        <a href="#">
          <TheInstagramIcon/>
        </a>
      </div>
      <nav class="main-nav">
        <a href="#" class="nav-link">Shop</a>
        <a href="#" class="nav-link">Plan My Kitchen</a>
      </nav>
      <TheLogo />
      <nav class="main-nav">
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Gallery</a>
      </nav>
      <a href="#" class="btn btn-alt">My Order <TheShoppingCartIcon /></a>
    </div>
    <div class="container overflow-x-hidden">
      <TheDivider width="1300px" :opacity="0.3" />
    </div>
  </header>
</template>

<script setup>
import TheFaceBookIcon from "@/components/Icons/TheFaceBookIcon.vue";
import TheTwitterIcon from "@/components/Icons/TheTwitterIcon.vue";
import TheInstagramIcon from "@/components/Icons/TheInstagramIcon.vue";
import TheShoppingCartIcon from "@/components/Icons/TheShoppingCartIcon.vue";
import TheLogo from "@/components/TheLogo.vue";
import TheDivider from "@/components/TheDivider.vue";
</script>

<style scoped>
.main-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 10;
  overflow-x: auto;
  box-sizing: border-box;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
}

.main-nav, .header-socials {
  display: flex;
  gap: 1.5rem;
}

.nav-link, .header-socials a {
  font-family: var(--font-family-secondary); /* Use Roboto for nav links */
  font-size: 16px; /* Use 13px for nav links */
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.nav-link:hover, .header-socials a:hover {
  color: var(--color-primary);
}

.main-header .btn-alt {
  color: var(--color-white);
  background-color: transparent;
  font-size: var(--font-size-xs); /* Adjust button font size */
  border: 1px solid var(--color-white);
  border-radius: 25px;
  padding: 14px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--font-size-xs);
}

.main-header .btn-alt:hover {
  background-color: var(--color-white);
  color: var(--color-text-title);
}

@media (max-width: 1024px) {
  .main-nav, .header-socials {
    display: none;
  }
}
</style>
