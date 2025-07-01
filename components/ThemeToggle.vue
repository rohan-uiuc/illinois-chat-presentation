<template>
  <div class="theme-toggle-container">
    <button
      @click="toggleTheme"
      :class="[
        'theme-toggle-btn',
        isDark ? 'theme-toggle-dark' : 'theme-toggle-light'
      ]"
      :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
    >
      <!-- Sun Icon for Light Mode -->
      <svg 
        v-show="isDark" 
        class="theme-icon" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fill-rule="evenodd" 
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
          clip-rule="evenodd" 
        />
      </svg>
      
      <!-- Moon Icon for Dark Mode -->
      <svg 
        v-show="!isDark" 
        class="theme-icon" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" 
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const isDark = ref(true) // Default to dark theme

// Simplified theme state management
const getGlobalThemeState = () => {
  // Check localStorage first
  const savedTheme = localStorage.getItem('illinois-chat-theme')
  if (savedTheme) {
    return savedTheme === 'dark'
  }
  
  // Check actual DOM state as fallback
  const root = document.documentElement
  return root.classList.contains('dark')
}

const syncThemeState = () => {
  const globalState = getGlobalThemeState()
  if (isDark.value !== globalState) {
    isDark.value = globalState
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
  // Broadcast theme change to other instances
  window.dispatchEvent(new CustomEvent('theme-changed', { 
    detail: { isDark: isDark.value } 
  }))
}

const updateTheme = () => {
  const root = document.documentElement
  
  if (isDark.value) {
    // Add standard dark class - CSS handles the rest
    root.classList.add('dark')
  } else {
    // Remove dark class - CSS handles the rest
    root.classList.remove('dark')
  }
  
  // Store preference
  localStorage.setItem('illinois-chat-theme', isDark.value ? 'dark' : 'light')
}

// Listen for theme changes from other instances
const handleThemeChange = (event: CustomEvent) => {
  if (event.detail && typeof event.detail.isDark === 'boolean') {
    isDark.value = event.detail.isDark
  }
}

onMounted(async () => {
  // Wait for DOM to be ready
  await nextTick()
  
  // Sync with global theme state
  syncThemeState()
  
  // Initialize dark class on first load if needed
  const root = document.documentElement
  if (isDark.value && !root.classList.contains('dark')) {
    root.classList.add('dark')
  } else if (!isDark.value && root.classList.contains('dark')) {
    root.classList.remove('dark')
  }
  
  updateTheme()
  
  // Listen for theme changes from other instances
  window.addEventListener('theme-changed', handleThemeChange as EventListener)
  
  // Sync state when component becomes visible (slide navigation)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        syncThemeState()
      }
    })
  })
  
  const container = document.querySelector('.theme-toggle-container')
  if (container) {
    observer.observe(container)
  }
})

onUnmounted(() => {
  // Clean up event listener
  window.removeEventListener('theme-changed', handleThemeChange as EventListener)
})
</script>

<style scoped>
.theme-toggle-container {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}

.theme-toggle-btn {
  @apply flex items-center justify-center;
  @apply w-12 h-12;
  @apply rounded-full;
  @apply border-2;
  @apply transition-all duration-300 ease-in-out;
  @apply cursor-pointer;
  @apply shadow-lg hover:shadow-xl;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.theme-toggle-light {
  @apply bg-white text-gray-800;
  @apply border-gray-300 hover:border-blue-500;
  @apply hover:bg-blue-50;
  @apply focus:ring-blue-500;
}

.theme-toggle-dark {
  @apply bg-gray-800 text-orange-400;
  @apply border-orange-500 hover:border-orange-400;
  @apply hover:bg-gray-700;
  @apply focus:ring-orange-500;
}

.theme-icon {
  @apply w-6 h-6;
  @apply transition-transform duration-300;
}

.theme-toggle-btn:hover .theme-icon {
  @apply transform scale-110;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .theme-toggle-container {
    top: 1rem;
    right: 1rem;
  }
  
  .theme-toggle-btn {
    @apply w-10 h-10;
  }
  
  .theme-icon {
    @apply w-5 h-5;
  }
}
</style> 