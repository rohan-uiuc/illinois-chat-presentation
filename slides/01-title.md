---
layout: default
transition: fade
---

<!-- # Illinois Chat
## Your AI Teaching & Learning Assistant -->

<!-- Theme Toggle Component -->
<ThemeToggle />

<div class="flex flex-col items-center justify-center h-full">
  <!-- Illinois Chat Logo Container -->
  <div class="flex items-center justify-center mb-12">
    <!-- I Logo -->
    <img 
      src="/images/logo_illinois.png" 
      alt="Illinois Logo" 
      class="h-24 w-auto mr-4"
    />
    <!-- Illinois Chat Text -->
    <a href="https://chat.illinois.edu" target="_blank" class="montserrat-heading text-6xl md:text-7xl lg:text-8xl font-bold theme-text-primary hover:text-orange-500 transition-colors no-underline cursor-pointer" style="border-bottom: none;">
      Illinois Chat
    </a>
  </div>
  
  <!-- Subtitle -->
  <div class="montserrat-paragraph text-xl md:text-2xl theme-text-secondary mb-16 max-w-4xl leading-relaxed text-center">
    Launching as an official campus service at the
    <br />University of Illinois at Urbana-Champaign
    <br />this fall
  </div>
  
  <!-- Presenter Information -->
  <div class="flex items-center gap-8">
    <img 
      src="/images/Rohan Marwaha.jpeg" 
      alt="Rohan Marwaha" 
      class="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-orange-500 shadow-lg theme-profile-image"
    />
    <div class="text-left">
      <div class="montserrat-heading text-xl md:text-2xl font-semibold theme-text-primary mb-3">
        Rohan Marwaha
      </div>
      <div class="montserrat-paragraph theme-text-muted text-base md:text-lg">
        Center for AI Innovation, NCSA
      </div>
      <div class="montserrat-paragraph theme-text-muted text-sm md:text-base opacity-75">
        University of Illinois at Urbana-Champaign
      </div>
    </div>
  </div>
  
  <!-- Navigation hint -->
  <div 
    @click="$slidev.nav.next" 
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 
           montserrat-paragraph theme-text-muted text-sm md:text-base 
           hover:text-orange-500 transition-colors cursor-pointer
           flex items-center gap-2"
  >
    Press Space to continue
    <carbon:arrow-right class="text-lg" />
  </div>
</div>

<style>
/* Custom styling for the title slide with theme support */
.slidev-page {
  background: var(--theme-bg-primary, linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%));
  min-height: 100vh;
  transition: background 0.3s ease-in-out;
}

/* Enhanced logo styling with theme-aware Illinois colors */
.montserrat-heading {
  /* Light mode: Blue gradient */
  background: linear-gradient(135deg, var(--illinois-blue) 0%, #0891b2 50%, var(--illinois-blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  transition: background 0.3s ease-in-out;
}

/* Dark mode: Orange gradient */
.dark .montserrat-heading {
  background: linear-gradient(135deg, var(--illinois-orange) 0%, #f7931e 50%, var(--illinois-orange) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Theme-based text colors */
.theme-text-primary {
  color: var(--theme-text-primary, #ffffff);
  transition: color 0.3s ease-in-out;
}

.theme-text-secondary {
  color: var(--theme-text-secondary, #d1d5db);
  transition: color 0.3s ease-in-out;
}

.theme-text-muted {
  color: var(--theme-text-muted, #9ca3af);
  transition: color 0.3s ease-in-out;
}

/* Profile image with theme-aware border */
.theme-profile-image {
  border-color: var(--theme-accent-orange, #ff6b35) !important;
  transition: border-color 0.3s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .montserrat-heading {
    font-size: 2.5rem !important;
  }
}

/* Subtle animation for the profile image */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
  }
}

.theme-profile-image {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Light theme adjustments */
:root.theme-light .theme-profile-image {
  animation: pulse-glow-light 3s ease-in-out infinite;
}

@keyframes pulse-glow-light {
  0%, 100% {
    box-shadow: 0 0 15px rgba(19, 41, 75, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(19, 41, 75, 0.3);
  }
}
</style>


<!--
Title slide for Illinois Chat presentation
Event: Summer of AI @ CITL, July 2, 2025
Presenter: Rohan Marwaha, Research Software Engineer at NCSA
Using standard Tailwind classes for compatibility
--> 