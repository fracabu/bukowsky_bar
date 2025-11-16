<template>
  <div class="gin pt-32 bg-black min-h-screen text-white">
    <section class="py-20 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Gin del Marchese</p>
        <h1 class="text-4xl md:text-6xl font-light tracking-wide mb-8">Il Nostro Gin</h1>
        <p class="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Fatto a mano, fatto per Roma
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/60 text-base mb-8">Contenuto in arrivo...</p>
        <router-link
          to="/menu"
          class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline">
          Vedi il Menu
        </router-link>
      </div>
    </section>
  </div>
</template>
