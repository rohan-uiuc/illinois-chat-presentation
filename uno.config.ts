import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      // Illinois Chat brand colors - matches style.css
      'illinois-orange': '#ff6b35',
      'illinois-blue': '#13294b',
      'illinois-light-blue': '#0ea5e9',
    }
  },
  
  shortcuts: {
    // Montserrat font utilities (matches the font weights in style.css)
    'montserrat-heading': 'font-sans font-bold',
    'montserrat-paragraph': 'font-sans font-medium',
    
    // Theme-aware text colors
    'theme-text-primary': 'text-white dark:text-white',
    'theme-text-secondary': 'text-gray-200 dark:text-gray-200', 
    'theme-text-muted': 'text-gray-400 dark:text-gray-400',
  },
  
  // Enable custom color utilities with opacity support
  safelist: [
    // Illinois color utilities with opacity support
    'text-illinois-orange', 'text-illinois-blue', 'text-illinois-light-blue',
    'bg-illinois-orange', 'bg-illinois-blue', 'bg-illinois-light-blue',
    'border-illinois-orange', 'border-illinois-blue', 'border-illinois-light-blue',
    // Opacity variants
    'bg-illinois-orange/10', 'bg-illinois-orange/20', 'bg-illinois-orange/30',
    'border-illinois-orange/10', 'border-illinois-orange/20', 'border-illinois-orange/30',
    'bg-illinois-blue/10', 'bg-illinois-blue/20', 'bg-illinois-blue/30',
    'border-illinois-blue/10', 'border-illinois-blue/20', 'border-illinois-blue/30',
    // Dark mode classes
    'dark:bg-blue-900', 'dark:bg-green-900/20', 'dark:bg-purple-900/20', 'dark:bg-gray-800/50',
    'dark:border-blue-700', 'dark:border-green-700', 'dark:border-purple-700', 'dark:border-gray-700',
    'dark:text-gray-300', 'dark:text-gray-400',
  ],
}) 