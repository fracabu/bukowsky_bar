<template>
  <nav class="navbar fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 overflow-x-hidden">
    <div class="nav-container max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="nav-logo flex items-center gap-3 no-underline">
        <div class="text-white">
          <p class="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-0.5">Est. 2014</p>
          <p class="text-lg tracking-[0.25em] font-light">BUKOWSKI'S</p>
          <p class="text-[9px] tracking-[0.3em] uppercase opacity-50">Borgo Pio · Roma</p>
        </div>
      </router-link>

      <!-- Mobile Menu Toggle -->
      <button
        class="menu-toggle lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-50"
        @click="toggleMenu"
        aria-label="Toggle menu">
        <span class="block w-6 h-px bg-white transition-all duration-300"
              :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
        <span class="block w-6 h-px bg-white transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }"></span>
        <span class="block w-6 h-px bg-white transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
      </button>

      <!-- Navigation Menu -->
      <ul class="nav-menu hidden lg:flex items-center gap-10 list-none m-0">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            class="nav-link text-white/60 hover:text-white text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 no-underline font-light"
            active-class="!text-white">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu -->
    <div
      class="mobile-menu w-full bg-black lg:hidden transition-all duration-300 overflow-hidden border-b border-white/10"
      :class="isMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0 border-b-0'">
      <ul class="flex flex-col gap-6 px-6 list-none max-w-7xl mx-auto">
        <li v-for="link in navLinks" :key="link.to">
          <router-link
            :to="link.to"
            @click="closeMenu"
            class="nav-link block text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors duration-300 no-underline"
            active-class="!text-white">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/il-locale', label: 'Il Locale' },
  { to: '/gin', label: 'Il Nostro Gin' },
  { to: '/news', label: 'News & Eventi' },
  { to: '/menu', label: 'Menu' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/contatti', label: 'Contatti' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
