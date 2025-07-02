---
layout: default
transition: slide-up
---

<ThemeToggle />

# <span class="slide-title">Features</span>

<div class="max-w-6xl mx-auto">

## <span class="montserrat-heading">Comprehensive platform designed for</span> <span class="illinois-orange">**education**</span>

<div class="grid grid-cols-4 gap-4 mt-8 mb-4">

<div class="feature-card blue">

<div class="text-5xl mb-4">📤</div>

### Upload

</div>

<div class="feature-card orange">

<div class="text-5xl mb-4">🔐</div>

### Access Control

</div>

<div class="feature-card green">

<div class="text-5xl mb-4">💬</div>

### Chat

</div>

<div class="feature-card purple">

<div class="text-5xl mb-4">📊</div>

### Analytics

</div>


</div>

<div class="grid grid-cols-3 gap-4 max-w-5xl mx-auto">

<div class="feature-card indigo">

<div class="text-5xl mb-4">⚙️</div>

### Prompting/Chatbot Behavior

</div>

<div class="feature-card teal">

<div class="text-5xl mb-4">🔌</div>

### API

</div>

<div class="feature-card pink">

<div class="text-5xl mb-4">🔧</div>

### Tool Calling

</div>

</div>

<div class="mt-8 text-lg text-center">
<span class="call-to-action">Let's explore each feature in detail ↓</span>
</div>

</div>

<style>
.feature-card {
  @apply p-6 rounded-2xl text-center;
  @apply bg-gradient-to-br;
  @apply transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1;
  @apply shadow-lg hover:shadow-xl;
  /* @apply border border-white/20; */
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.feature-card h3 {
  @apply text-xl font-bold;
  @apply leading-tight;
  margin: 0;
}

.feature-card.blue {
  @apply from-blue-500/10 via-blue-400/15 to-blue-600/20;
  @apply dark:from-blue-600/20 dark:via-blue-500/25 dark:to-blue-700/30;
}

.feature-card.blue h3 {
  @apply text-blue-700 dark:text-blue-200;
}

.feature-card.green {
  @apply from-green-500/10 via-green-400/15 to-green-600/20;
  @apply dark:from-green-600/20 dark:via-green-500/25 dark:to-green-700/30;
}

.feature-card.green h3 {
  @apply text-green-700 dark:text-green-200;
}

.feature-card.purple {
  @apply from-purple-500/10 via-purple-400/15 to-purple-600/20;
  @apply dark:from-purple-600/20 dark:via-purple-500/25 dark:to-purple-700/30;
}

.feature-card.purple h3 {
  @apply text-purple-700 dark:text-purple-200;
}

.feature-card.orange {
  @apply from-orange-500/10 via-orange-400/15 to-orange-600/20;
  @apply dark:from-orange-600/20 dark:via-orange-500/25 dark:to-orange-700/30;
}

.feature-card.orange h3 {
  @apply text-orange-700 dark:text-orange-200;
}

.feature-card.indigo {
  @apply from-indigo-500/10 via-indigo-400/15 to-indigo-600/20;
  @apply dark:from-indigo-600/20 dark:via-indigo-500/25 dark:to-indigo-700/30;
}

.feature-card.indigo h3 {
  @apply text-indigo-700 dark:text-indigo-200;
}

.feature-card.teal {
  @apply from-teal-500/10 via-teal-400/15 to-teal-600/20;
  @apply dark:from-teal-600/20 dark:via-teal-500/25 dark:to-teal-700/30;
}

.feature-card.teal h3 {
  @apply text-teal-700 dark:text-teal-200;
}

.feature-card.pink {
  @apply from-pink-500/10 via-pink-400/15 to-pink-600/20;
  @apply dark:from-pink-600/20 dark:via-pink-500/25 dark:to-pink-700/30;
}

.feature-card.pink h3 {
  @apply text-pink-700 dark:text-pink-200;
}

/* Illinois brand color applications */
.call-to-action {
  color: var(--illinois-blue);
}

.dark .call-to-action {
  color: var(--illinois-orange);
}
</style>

<!--
Features overview slide with 7 feature cards in 2 rows (4+3):
- Row 1: Upload, Chat, Analytics, Access Control
- Row 2: Prompting/Chatbot Behavior, API, Tool Calling
Updated with cohesive, relaxed design matching reference screenshot
--> 