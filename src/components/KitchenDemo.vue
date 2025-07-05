<template>
  <div class="kitchen-demo">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <nav class="kitchen-nav">
          <div class="nav-left">
            <div class="social-links">
              <a href="#" class="social-link">f</a>
              <a href="#" class="social-link">v</a>
              <a href="#" class="social-link">in</a>
            </div>
          </div>
          <div class="nav-center">
            <div class="nav-links">
              <a href="#" class="nav-link">SHOP</a>
              <a href="#" class="nav-link">PLAN MY KITCHEN</a>
              <a href="#" class="nav-link">ABOUT US</a>
              <a href="#" class="nav-link">GALLERY</a>
            </div>
          </div>
          <div class="nav-right">
            <button class="btn btn-outline text-inverse">MY ORDER (0)</button>
          </div>
        </nav>

        <div class="hero-content">
          <div class="brand-logo">
            <h1 class="logo-text">MK</h1>
          </div>

          <div class="hero-text">
            <p class="hero-subtitle">PREMIUM HANDCRAFTED SOLID WOOD MRK KITCHEN ONLINE TODAY</p>
            <h1 class="hero-title">Bespoke & made to measure handmade kitchen design</h1>
            <button class="btn btn-primary btn-lg">ORDER NOW</button>
          </div>

          <div class="hero-indicators">
            <span class="indicator active" />
            <span class="indicator" />
            <span class="indicator" />
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content-section">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-6">
            <div class="kitchen-image">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Kitchen Interior"
                class="img-fluid rounded-lg"
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-text">
              <p class="content-subtitle">QUALITY CRAFTSMANSHIP BUILT TO DELIVER</p>
              <h2 class="content-title">Discover the beauty of a handmade kitchen</h2>
              <p class="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue elit, sed
                interdum velit sed, placerat tempor est ut porta tempor mauris eget, lobortis vel
                ipsum. Ut rhoncus, magna non pretium molestie, mauris purus bibendum.
              </p>
              <button class="btn btn-primary">ABOUT US</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="container">
        <div class="text-center">
          <h2 class="experience-title">Over 35 years experience designing handmade kitchens</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Kitchen demo component
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1556909114-4da9c8c8b7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}

/* Navigation */
.kitchen-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  background: rgba(0, 0, 0, 0.1);
}

.social-links {
  display: flex;
  gap: var(--space-3);
}

.social-link {
  color: var(--text-inverse);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  width: 24px;
  height: 24px;
  border: 1px solid var(--text-inverse);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: var(--text-inverse);
  color: var(--text-primary);
}

.nav-links {
  display: flex;
  gap: var(--space-6);
}

.nav-link {
  color: var(--text-inverse);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  letter-spacing: 1px;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--primary-300);
}

/* Hero Content */
.hero-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--space-6);
}

.brand-logo {
  margin-bottom: var(--space-8);
}

.logo-text {
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-inverse);
  letter-spacing: 8px;
  margin: 0;
}

.hero-text {
  max-width: 600px;
  margin-bottom: var(--space-8);
}

.hero-subtitle {
  font-size: var(--font-size-xs);
  color: var(--text-inverse);
  letter-spacing: 2px;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
}

.hero-title {
  font-size: var(--font-size-4xl);
  color: var(--text-inverse);
  margin-bottom: var(--space-6);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
}

.hero-indicators {
  display: flex;
  gap: var(--space-2);
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.indicator.active {
  background-color: var(--text-inverse);
}

/* Content Section */
.content-section {
  padding: var(--space-20) 0;
  background-color: var(--bg-primary);
}

.kitchen-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.content-text {
  padding: var(--space-6);
}

.content-subtitle {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  letter-spacing: 2px;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
}

.content-title {
  font-size: var(--font-size-3xl);
  color: var(--text-primary);
  margin-bottom: var(--space-5);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
}

.content-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
}

/* Experience Section */
.experience-section {
  padding: var(--space-16) 0;
  background-color: var(--bg-secondary);
}

.experience-title {
  font-size: var(--font-size-3xl);
  color: var(--text-primary);
  margin: 0;
  font-weight: var(--font-weight-bold);
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    height: 80vh;
  }

  .kitchen-nav {
    flex-direction: column;
    gap: var(--space-4);
  }

  .nav-links {
    gap: var(--space-4);
  }

  .logo-text {
    font-size: 3rem;
    letter-spacing: 4px;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 70vh;
  }

  .kitchen-nav {
    padding: var(--space-3);
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-3);
  }

  .nav-link {
    font-size: var(--font-size-xs);
  }

  .logo-text {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .hero-title {
    font-size: var(--font-size-2xl);
  }

  .content-text {
    padding: var(--space-4);
    margin-top: var(--space-6);
  }

  .content-title {
    font-size: var(--font-size-2xl);
  }

  .experience-title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 480px) {
  .social-links {
    display: none;
  }

  .hero-content {
    padding: var(--space-4);
  }

  .hero-title {
    font-size: var(--font-size-xl);
  }

  .logo-text {
    font-size: 2rem;
  }
}

/* Image utilities */
.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
