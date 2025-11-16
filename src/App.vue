<template>
  <div id="app" class="min-h-screen bg-black">
    <AppHeader />
    <main class="pb-24">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
