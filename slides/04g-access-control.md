---
layout: two-cols
transition: slide-up
---

<ThemeToggle />

# <span class="slide-title">🔐 Access Control</span>

<div class="pr-6">
  <h4 class="montserrat-paragraph text-base font-bold text-orange-800 dark:text-orange-100 mb-4">
    Role-Based Access Control (RBAC)
  </h4>
  
  <!-- Project Visibility -->
  <div class="mb-4">
    <h4 class="montserrat-paragraph text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
      <span class="text-blue-500">🌐</span> Project Visibility
    </h4>
    <ul class="space-y-2 text-sm">
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph"><strong>Public Projects:</strong> Open access to all users</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph"><strong>Private Projects:</strong> Restricted access control</span>
      </li>
    </ul>
  </div>

  <!-- User Roles & Permissions -->
  <div class="mb-4">
    <h4 class="montserrat-paragraph text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
      <span class="text-green-500">👥</span> User Roles & Permissions
    </h4>
    <ul class="space-y-2 text-sm">
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        <span class="montserrat-paragraph"><strong>Viewers/Users:</strong> Chat access only (private projects)</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
        <span class="montserrat-paragraph"><strong>Admins:</strong> Full project control (both public & private)</span>
      </li>
    </ul>
  </div>

  <!-- Admin Controls -->
  <div class="mb-4">
    <h4 class="montserrat-paragraph text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
      <span class="text-purple-500">⚙️</span> Admin Dashboard Controls
    </h4>
    <ul class="space-y-2 text-sm">
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph">Upload & content management</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph">Analytics & usage monitoring</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph">Prompting & AI behavior settings</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span class="montserrat-paragraph">API configuration & tool management</span>
      </li>
    </ul>
  </div>
</div>

::right::

<!-- Screenshot -->
<div class="pl-6 pr-6 h-full flex items-center justify-center">
  <div class="p-4">
    <img src="/images/access_control.png" alt="Access Control Dashboard Interface" class="w-full max-w-xs rounded-lg shadow-lg" />
  </div>
</div>

<!--
Access control slide:
- RBAC with project visibility controls (public/private)
- User roles from viewers to super admins
- Admin dashboard controls for all platform features
Using banner_step_003.png as the screenshot (moved from analytics)
--> 