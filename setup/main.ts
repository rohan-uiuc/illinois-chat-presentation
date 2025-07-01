import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Check for saved theme preference on app load
  const savedTheme = localStorage.getItem('illinois-chat-theme') || 'dark'
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Additional setup can go here
}) 