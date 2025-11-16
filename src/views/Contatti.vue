<template>
  <div class="contatti pt-32 bg-black min-h-screen text-white">
    <section class="py-20 text-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Contatti</p>
        <h1 class="text-4xl md:text-6xl font-light tracking-wide mb-8">Vieni a Trovarci</h1>
        <p class="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Borgo Pio, nel cuore di Roma
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Indirizzo</p>
            <p class="text-white/70 text-base leading-relaxed">
              Via degli Ombrellari, 25<br>
              00193 Roma - Borgo Pio
            </p>
          </div>

          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Orari</p>
            <p class="text-white/70 text-base leading-relaxed">
              Martedì - Domenica<br>
              15:00 - 02:00
            </p>
            <p class="text-white/40 text-sm mt-2">Lunedì: Chiuso</p>
          </div>

          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Telefono</p>
            <p class="text-white/70 text-base">
              <a href="tel:+390664760105" class="hover:text-white transition-colors no-underline">06 6476 0105</a>
            </p>
          </div>

          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">WhatsApp</p>
            <p class="text-white/70 text-base">
              <a href="https://wa.me/393517139892" target="_blank" class="hover:text-white transition-colors no-underline">351 713 9892</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+390664760105"
            class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline text-center">
            Chiamaci
          </a>
          <a
            href="https://www.google.com/maps/dir//Via+degli+Ombrellari,+25,+00193+Roma"
            target="_blank"
            class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline text-center">
            Indicazioni
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
