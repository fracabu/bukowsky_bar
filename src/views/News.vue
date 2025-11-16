<template>
  <div class="news bg-black min-h-screen text-white pt-32 pb-32">
    <!-- HERO -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-accent">Eventi</p>

        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] mb-8 font-display leading-tight">
          NEWS & EVENTI
        </h1>

        <div class="my-8 flex items-center justify-center">
          <div class="h-px w-12 bg-white/30"></div>
          <span class="mx-4 text-white/40">✦</span>
          <div class="h-px w-12 bg-white/30"></div>
        </div>

        <p class="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Mostre, eventi e serate speciali al Bukowski's.<br class="hidden md:block">
          Segui le nostre iniziative culturali e i momenti unici del locale.
        </p>
      </div>
    </section>

    <!-- FILTERS -->
    <section class="py-8 border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="filter in filters"
            :key="filter.value"
            @click="activeFilter = filter.value"
            :class="[
              'px-6 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300',
              activeFilter === filter.value
                ? 'bg-white text-black'
                : 'border border-white/40 text-white hover:border-white hover:bg-white/10'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- NEWS GRID -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div v-if="filteredNews.length === 0" class="text-center py-20">
          <p class="text-white/60">Nessun evento in questa categoria</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in filteredNews"
            :key="item.id"
            class="group border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
          >
            <!-- Image -->
            <div class="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              >
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-white/40 text-xs uppercase tracking-wider">{{ item.category }}</span>
                <span class="text-white/30">·</span>
                <time class="text-white/40 text-xs">{{ formatDate(item.date) }}</time>
              </div>

              <h2 class="text-white text-xl font-light tracking-wide mb-3 group-hover:text-white/80 transition-colors">
                {{ item.title }}
              </h2>

              <p class="text-white/60 text-sm leading-relaxed mb-4">
                {{ item.excerpt }}
              </p>

              <button
                @click="selectedNews = item"
                class="text-white/80 text-xs uppercase tracking-wider hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Leggi tutto
                <span>→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- INSTAGRAM CTA -->
    <section class="py-20 border-t border-white/10 text-center">
      <div class="max-w-3xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Seguici</p>
        <h2 class="text-3xl md:text-4xl font-light mb-6 tracking-wide font-display">Resta Aggiornato</h2>
        <p class="text-white/60 text-base mb-8 leading-relaxed">
          Segui <span class="text-white">@bukowskis_bar</span> su Instagram per non perdere<br class="hidden md:block">
          eventi, mostre e novità dal locale
        </p>
        <a
          href="https://instagram.com/bukowskis_bar"
          target="_blank"
          class="inline-block border-2 border-white text-white px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
        >
          Seguici su Instagram
        </a>
      </div>
    </section>

    <!-- MODAL -->
    <div
      v-if="selectedNews"
      @click="selectedNews = null"
      class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto"
    >
      <div
        @click.stop
        class="bg-black border border-white/20 max-w-3xl w-full p-8 md:p-12 relative"
      >
        <button
          @click="selectedNews = null"
          class="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none"
        >
          ×
        </button>

        <div class="mb-6">
          <span class="text-white/40 text-xs uppercase tracking-wider">{{ selectedNews.category }}</span>
          <span class="text-white/30 mx-2">·</span>
          <time class="text-white/40 text-xs">{{ formatDate(selectedNews.date) }}</time>
        </div>

        <h2 class="text-white text-3xl md:text-4xl font-light tracking-wide mb-6 font-display">
          {{ selectedNews.title }}
        </h2>

        <img
          v-if="selectedNews.image"
          :src="selectedNews.image"
          :alt="selectedNews.title"
          class="w-full h-auto mb-8"
        >

        <p class="text-white/70 text-base leading-relaxed whitespace-pre-line">
          {{ selectedNews.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const newsItems = ref([])
const activeFilter = ref('all')
const selectedNews = ref(null)

const filters = [
  { value: 'all', label: 'Tutti' },
  { value: 'eventi', label: 'Eventi' },
  { value: 'drink', label: 'Drink' },
  { value: 'gin', label: 'Gin' },
  { value: 'cultura', label: 'Cultura' }
]

const filteredNews = computed(() => {
  if (activeFilter.value === 'all') {
    return newsItems.value
  }
  return newsItems.value.filter(item => item.category === activeFilter.value)
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('it-IT', options)
}

onMounted(async () => {
  try {
    const response = await fetch('/news.json')
    newsItems.value = await response.json()
    // Sort by date descending
    newsItems.value.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading news:', error)
  }
})
</script>
