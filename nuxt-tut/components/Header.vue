<template>
  <header class="bg-slate-800 text-white px-3 py-4">
    <nav>
      <ul class="flex gap-5">
        <li>
          <NuxtLink to="/" class="flex gap-1 items-center">
            <span><IconsHome /></span> Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/events" class="flex gap-1 items-center">
            <span><IconsBell /></span>Events</NuxtLink
          >
        </li>
        <li><NuxtLink to="/profile/123">Profile</NuxtLink></li>
        <li><NuxtLink to="/custom">Custom</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <li><NuxtLink to="/state">State</NuxtLink></li>
        <li><NuxtLink to="/pinia-state">PiniaState</NuxtLink></li>
        <li><NuxtLink to="/admin/dashboard">AdminDashboard</NuxtLink></li>
        <li><NuxtLink to="/admin/info">AdminInfo</NuxtLink></li>
        <li><NuxtLink to="/datafetch">datafetch</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
