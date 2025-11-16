<template>
  <div class="galleria pt-32 bg-black min-h-screen text-white">
    <!-- GALLERY HERO -->
    <section class="py-20 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Galleria</p>
        <h1 class="text-4xl md:text-6xl font-light tracking-wide mb-8">Le Nostre Immagini</h1>
        <p class="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Le immagini raccontano quello che le parole non possono.
          Il Bukowski's attraverso gli occhi di chi lo vive.
        </p>
      </div>
    </section>

    <!-- FILTERS -->
    <section class="py-8 border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-6">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="{
              'text-white border-white': activeFilter === filter.value,
              'text-white/40 border-white/20 hover:text-white/70': activeFilter !== filter.value
            }"
            class="px-6 py-2 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300">
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- GALLERY GRID -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="group relative aspect-square overflow-hidden cursor-pointer transition-all duration-300">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
              <h3 class="text-white text-lg font-light mb-2 tracking-wide">{{ item.title }}</h3>
              <p class="text-white/70 text-center text-sm">{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM CTA -->
    <section class="py-20 border-t border-white/10 text-center">
      <div class="max-w-3xl mx-auto px-6">
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Social</p>
        <h2 class="text-3xl md:text-4xl font-light mb-8 tracking-wide">Seguici su Instagram</h2>
        <p class="text-white/60 text-base mb-8">
          Ogni giorno nuove foto, storie e momenti dal Bukowski's.<br>
          Tag <span class="text-white">@bukowskis_bar</span> per essere ripostato
        </p>
        <a
          href="https://instagram.com/bukowskis_bar"
          target="_blank"
          class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline">
          Instagram
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = [
  { value: 'all', label: 'Tutti' },
  { value: 'locale', label: 'Il Locale' },
  { value: 'cocktails', label: 'Cocktails' },
  { value: 'eventi', label: 'Eventi' },
  { value: 'arte', label: 'Arte' },
  { value: 'gin', label: 'Gin' }
]

const galleryItems = [
  { id: 1, category: 'locale', title: 'Interno Locale', caption: "L'atmosfera intima del Bukowski's", image: '/interno-locale.jpg' },
  { id: 2, category: 'locale', title: 'Divani Rossi', caption: 'I divani vintage del salotto letterario', image: '/interno-divani.jpg' },
  { id: 3, category: 'locale', title: 'Ingresso', caption: 'L\'ingresso del locale a Borgo Pio', image: '/esterno-ingresso.jpg' },
  { id: 4, category: 'gin', title: 'Gin del Marchese', caption: 'La nostra bottiglia artigianale', image: '/gin-bottiglia.png' }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryItems
  }
  return galleryItems.filter(item => item.category === activeFilter.value)
})
</script>
