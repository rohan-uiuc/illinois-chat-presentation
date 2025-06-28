---
# Theme and styling configuration
theme: seriph
# Dynamic background - will be controlled by theme toggle
background: var(--theme-bg-primary, linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%))
# Presentation information
title: Illinois Chat
info: |
  ## Illinois Chat
  AI-Powered Conversational Interface for NCSA
  
  Presented by Rohan Marwaha
  Center for AI Innovation, NCSA
# Center alignment for clean look
class: text-center
# Smooth transitions
transition: slide-left
# Enable MDC Syntax
mdc: true
# SEO and sharing
seoMeta:
  title: Illinois Chat - NCSA Presentation
  description: AI-Powered Conversational Interface for the Center for AI Innovation
---

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
    <div class="montserrat-heading text-6xl md:text-7xl lg:text-8xl font-bold theme-text-primary">
      Illinois Chat
    </div>
  </div>
  
  <!-- Subtitle -->
  <div class="montserrat-paragraph text-xl md:text-2xl theme-text-secondary mb-16 max-w-4xl leading-relaxed">
    AI-Powered Conversational Interface for NCSA
  </div>
  
  <!-- Presenter Information -->
  <div class="flex items-center gap-6">
    <img 
      src="/images/Rohan Marwaha.jpeg" 
      alt="Rohan Marwaha" 
      class="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-orange-500 shadow-lg theme-profile-image"
    />
    <div class="text-left">
      <div class="montserrat-heading text-xl md:text-2xl font-semibold theme-text-primary">
        Rohan Marwaha
      </div>
      <div class="montserrat-paragraph theme-text-muted text-base md:text-lg">
        Center for AI Innovation, NCSA
      </div>
      <div class="montserrat-paragraph theme-text-muted text-sm md:text-base opacity-75">
        University of Illinois
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

/* Enhanced logo styling with Illinois colors */
.montserrat-heading {
  background: linear-gradient(135deg, var(--theme-accent-orange, #ff6b35) 0%, #f7931e 50%, var(--theme-accent-orange, #ff6b35) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
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
First slide: Illinois Chat presentation title with minimalistic, bold design
Features:
- I logo alongside "Illinois Chat" text creating unified branding
- Montserrat heading font for the title
- Clean gradient background
- Presenter information with profile image
- Responsive design with Tailwind classes
- Professional styling with Illinois orange accent colors
--> 