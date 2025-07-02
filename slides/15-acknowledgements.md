---
layout: default
transition: slide-up
---

<ThemeToggle />

# <span class="slide-title">🙏 Acknowledgements</span>

<div class="max-w-5xl mx-auto mt-8">

<div class="text-center mb-8">
  <p class="text-xl font-semibold text-gray-700 dark:text-gray-300 montserrat-paragraph">
    Special thanks to our funding sources and partners
  </p>
</div>

<!-- First Row: CAII, AirFarms, Illinois Computes -->
<div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">

<!-- CAII Card -->
<div class="card-wrapper">
  <a href="https://ai.ncsa.illinois.edu/" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <img src="/images/logos/caii_logo.svg" alt="CAII Logo" class="w-full h-16 object-contain">
  </a>
</div>

<!-- AirFarms Card -->
<div class="card-wrapper">
  <a href="https://aifarms.illinois.edu/" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <img src="/images/logos/cropwizard_logo.png" alt="AirFarms Logo" class="w-full h-16 object-contain">
  </a>
</div>

<!-- Illinois Computes Card -->
<div class="card-wrapper">
  <a href="https://computes.illinois.edu/" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <img src="/images/logos/ic.png" alt="Illinois Computes Logo" class="w-full h-16 object-contain">
  </a>
</div>

</div>

<!-- Second Row: SIIP, CIO, GIES -->
<div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">

<!-- SIIP Card -->
<div class="card-wrapper">
  <a href="https://ae3.grainger.illinois.edu/holding/strategic-instructional-initiatives-program-siip" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <h4 class="font-semibold text-gray-800 dark:text-gray-700 text-center leading-tight" style="font-size: 12px;">
      Strategic Instructional Innovations Program (SIIP)
    </h4>
  </a>
</div>

<!-- Office of CIO Card -->
<div class="card-wrapper">
  <a href="https://www.cio.illinois.edu/" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <img src="/images/logos/cio_logo.png" alt="Office of CIO Logo" class="w-full h-16 object-contain">
  </a>
</div>

<!-- GIES Card -->
<div class="card-wrapper">
  <a href="https://giesbusiness.illinois.edu/" target="_blank" rel="noopener noreferrer" class="acknowledgement-card">
    <img src="/images/logos/gies_logo.png" alt="GIES Logo" class="w-full h-16 object-contain">
  </a>
</div>

</div>

<div class="text-center mt-8">
  <p class="text-base text-gray-600 dark:text-gray-400 montserrat-paragraph">
    This project was made possible through the generous support of these organizations
  </p>
</div>

</div>

<style>
.card-wrapper {
  cursor: pointer !important;
}

.card-wrapper img,
.card-wrapper h4 {
  pointer-events: none !important;
}

.acknowledgement-card {
  @apply p-6 rounded-lg flex flex-col items-center justify-center;
  @apply bg-gradient-to-br from-gray-100 to-gray-200;
  @apply dark:from-gray-100 dark:to-gray-50;
  @apply transition-all duration-300 hover:scale-105;
  @apply shadow-md hover:shadow-lg;
  @apply min-h-[120px];
  @apply cursor-pointer;
  text-decoration: none !important;
  border: none !important;
  outline: none !important;
}

.acknowledgement-card:hover {
  text-decoration: none !important;
  border: none !important;
}

.acknowledgement-card:focus {
  text-decoration: none !important;
  border: none !important;
  outline: none !important;
}


</style>

<!--
Acknowledgements slide with 2 rows of 3 clickable cards:
Row 1: CAII, AirFarms, Illinois Computes
Row 2: SIIP, CIO, GIES
All cards link to their respective organization websites
--> 