<template>
  <header class="main-header" :class="{ 'sticky': isSticky }">
    <div class="container header-container">
      <div class="header-socials">
        <!-- Placeholder for social icons -->
        <TheHeaderSocialIcons />
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

      <div class="mobile-nav-icons">
        <TheCrossIcon v-if="showMobileMenu" @click="setShowMobileMenu(false)" class="mobile-nav-trigger-icon" />
        <TheHamburgerIcon v-else @click="setShowMobileMenu(true)" class="mobile-nav-trigger-icon" />
      </div>
      <div class="main-nav">
        <a href="#" class="btn btn-alt">My Order
          <TheShoppingCartIcon />
        </a>
      </div>
    </div>
    <div class="container overflow-x-hidden hidden" :class="{ 'navbar-divider-gap': !isSticky }">
      <TheDivider width="1300px" :opacity="0.3" />
    </div>
    <div v-if="showMobileMenu" class="mobile-nav">
      <div class="flex justify-between align-center mobile-logo-social-header">
        <div class="mobile-nav-logo-wrapper">
          <TheLogo />
        </div>
        <div class="header-socials">
          <!-- Placeholder for social icons -->
          <TheHeaderSocialIcons />
        </div>
      </div>
      <nav class="main-nav">
        <ul>
          <li>
            <a href="#" class="nav-link">Shop</a>
          </li>
          <li>
            <a href="#" class="nav-link">Plan My Kitchen</a>
          </li>
          <li>
            <a href="#" class="nav-link">About us</a>
          </li>
          <li>
            <a href="#" class="nav-link">gallery</a>
          </li>
        </ul>
      </nav>
      <div class="main-nav">
        <a href="#" class="btn btn-alt">My Order
          <TheShoppingCartIcon />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref } from "vue";

import TheShoppingCartIcon from "@/components/Icons/TheShoppingCartIcon.vue";
import TheLogo from "@/components/TheLogo.vue";
import TheDivider from "@/components/TheDivider.vue";
import TheHamburgerIcon from "@/components/Icons/TheHamburgerIcon.vue";
import TheCrossIcon from "@/components/Icons/TheCrossIcon.vue";
import TheHeaderSocialIcons from "@/components/TheHeaderSocialIcons.vue";

const isSticky = ref(false);
const showMobileMenu = ref(false);

const setShowMobileMenu = (status) => {
  showMobileMenu.value = status;
};

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
  nextTick(() => {
    if (isSticky.value) {
      document.body.style = "padding-top: 100px";
    } else {
      document.body.style = "padding-top: 0";
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 10;
  overflow-x: auto;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

.main-header.sticky {
  background-color: var(--color-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.navbar-divider-gap {
  display: block;
  padding-top: 40px;
}

.mobile-nav-icons {
  display: none;
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

.nav-link {
  font-family: var(--font-family-secondary); /* Use Roboto for nav links */
  font-size: var(--font-size-xs); /* Use 13px for nav links */
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.main-header .btn-alt {
  color: var(--color-white);
  background-color: transparent;
  font-size: var(--font-size-xs); /* Adjust button font size */
  border: 1px solid var(--color-white);
  border-radius: 25px;
  padding: 10px 40px;
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
  .mobile-nav-icons {
    display: block;
  }

  .main-nav, .header-socials {
    display: none;
  }

  .navbar-divider-gap {
    display: none;
  }

  .mobile-nav-trigger-icon {
    font-size: var(--font-size-lg);
  }

  .mobile-nav {
    height: 100vh;
    background-color: var(--color-white);
    font-family: var(--font-family-secondary);
    color: var(--color-dark);
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    z-index: 20;
  }

  .mobile-nav .header-socials,
  .mobile-nav .main-nav {
    display: flex;
  }

  .mobile-nav-logo-wrapper {
    background-color: var(--color-dark);
    width: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .mobile-nav .main-nav ul {
    list-style: none;
  }

  .mobile-nav {
    padding: 20px;
  }

  .mobile-nav .main-nav li {
    padding-bottom: 20px;
  }

  .mobile-nav .main-nav a,
  .mobile-nav .header-socials a {
    color: var(--color-dark);
  }

  .mobile-logo-social-header {
    margin-bottom: 20px;
  }

  .mobile-nav .btn-alt {
    border-color: var(--color-dark);
  }

  .mobile-nav, .header-socials {
    gap: 10px;
  }
}
</style>
