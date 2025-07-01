import { defineAppSetup } from '@slidev/types'
import { inject } from '@vercel/analytics'

export default defineAppSetup(({ app, router }) => {
  // Initialize Vercel Analytics
  inject()
  
  // You can add other global configurations here
  // For example:
  // - Global Vue plugins
  // - Router guards
  // - Global components
}) 