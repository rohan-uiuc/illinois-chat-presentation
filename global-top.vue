<template>
  <ThemeToggle />
</template>

<script setup>
import ThemeToggle from './components/ThemeToggle.vue'
import { inject } from '@vercel/analytics'

inject()
</script> 