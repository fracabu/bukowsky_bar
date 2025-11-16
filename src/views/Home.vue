<template>
  <div class="home">
    <!-- HERO SECTION - Dante Style -->
    <section class="hero relative h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-16">
      <!-- Background Video -->
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/2345459-uhd_3840_2160_25fps.mp4" type="video/mp4">
        <!-- Fallback to image if video doesn't load -->
        <img
          src="/503350915_2987122261470100_8225564212138507156_n.jpg"
          alt="Bukowski's Bar Interior"
          class="absolute inset-0 w-full h-full object-cover"
        >
      </video>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <p class="text-white/80 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-accent">Est. 2014</p>

        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.1em] sm:tracking-[0.15em] mb-2 sm:mb-3 md:mb-4 font-display leading-tight">
          BUKOWSKI'S
        </h1>

        <p class="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-accent mb-6">
          Borgo Pio · Roma
        </p>

        <p class="text-white/70 text-sm sm:text-base md:text-lg italic font-light mb-8 max-w-2xl mx-auto">
          "Qui non servono fronzoli. Solo tavoli vissuti, risate vere, Gin del Marchese e storie che si incrociano tra un sorso e l'altro."
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/il-locale"
            class="inline-block border-2 border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-accent hover:bg-white hover:text-black transition-all duration-300 no-underline"
          >
            Scopri il Locale
          </router-link>
          <router-link
            to="/gin"
            class="inline-block border border-white/60 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-accent hover:border-white hover:bg-white/10 transition-all duration-300 no-underline"
          >
            Il Nostro Gin
          </router-link>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-44 sm:bottom-48 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div class="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- INTRO SECTION - Dante Style -->
    <section class="bg-black py-24 md:py-32 overflow-x-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/60 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.3em] uppercase mb-6 font-accent">
          Galleria · Café · Bistrot
        </p>

        <h2 class="text-white text-3xl md:text-5xl font-light tracking-normal md:tracking-wide mb-8 font-display leading-relaxed">
          Un salotto letterario dove l'arte incontra il gin
        </h2>

        <p class="text-white/70 text-base md:text-lg leading-relaxed font-body max-w-2xl mx-auto">
          Dal 2014, nel cuore di Borgo Pio, il Bukowski's è più di un bar.
          È una galleria dove l'arte incontra l'aperitivo, una biblioteca dove
          i libri profumano di gin, un salotto dove gli sconosciuti diventano amici.
        </p>
      </div>
    </section>

    <!-- BUKOWSKI QUOTE SECTION -->
    <section class="bg-black py-16 border-y border-white/10">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <blockquote class="text-white/80 text-xl md:text-2xl font-light italic leading-relaxed">
          "Find what you love and let it kill you."
        </blockquote>
        <p class="text-white/40 text-sm mt-6 tracking-wider">— Charles Bukowski</p>
      </div>
    </section>

    <!-- SPLIT SECTION - Image + Text -->
    <section class="bg-black py-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 lg:order-1">
            <img
              src="/503578895_2987121988136794_5560936930106572160_n.jpg"
              alt="Interno Bukowski's Bar"
              class="w-full h-auto object-cover"
            >
          </div>

          <!-- Text -->
          <div class="order-1 lg:order-2 text-center lg:text-left">
            <p class="text-white/60 text-xs tracking-[0.3em] uppercase mb-6 font-accent">
              La Storia
            </p>

            <h3 class="text-white text-3xl md:text-4xl font-light mb-8 font-display tracking-wide">
              Ex Galleria d'Arte Trasformata
            </h3>

            <div class="space-y-4 text-white/70 font-body text-base leading-relaxed mb-8">
              <p>
                Nel dicembre del 2014, <strong class="text-white">Alessandro Mattei</strong> ha trasformato
                una ex galleria d'arte nel cuore di Borgo Pio in quello che oggi è il Bukowski's Bar.
              </p>
              <p>
                Un salotto letterario dove la biblioteca viva convive con mostre fotografiche rotanti,
                dove i divani rossi raccontano storie di Fellini, Bukowski e Star Wars, dove ogni sera
                dalle 15:00 alle 02:00 gli sconosciuti diventano amici davanti a un Gin del Marchese.
              </p>
              <p class="text-white/50 text-sm italic">
                "Un bar che non sa stare zitto. Parla di tutto: di ginepro, di iris, di Roma autentica."
              </p>
            </div>

            <router-link
              to="/il-locale"
              class="inline-block border-2 border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-accent hover:bg-white hover:text-black transition-all duration-300 no-underline"
            >
              Scopri di Più
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- THREE PILLARS SECTION -->
    <section class="bg-black py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Arte</p>
            <h3 class="text-white text-2xl font-light mb-4 tracking-wide">Galleria & Cultura</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Mostre fotografiche rotanti, opere in vendita, eventi culturali
              nel cuore romano dell'arte.
            </p>
          </div>

          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Drink</p>
            <h3 class="text-white text-2xl font-light mb-4 tracking-wide">12 Spritz & Cocktails</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Da Aperol a creazioni uniche, la nostra carta celebra l'aperitivo
              italiano in 12 variazioni.
            </p>
          </div>

          <div class="text-center">
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Gin</p>
            <h3 class="text-white text-2xl font-light mb-4 tracking-wide">Botaniche Artigianali</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Il Gin del Marchese: nato qui, fatto per Roma, con botaniche
              che raccontano la nostra storia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ENTRANCE IMAGE SECTION -->
    <section class="bg-black py-20">
      <div class="max-w-7xl mx-auto px-6">
        <img
          src="/503801575_2987122254803434_5297063782742739829_n.jpg"
          alt="Entrata Bukowski's Bar"
          class="w-full h-auto"
        >
      </div>
    </section>

    <!-- VISIT US SECTION -->
    <section class="bg-black py-24">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-6">Vieni a Trovarci</p>

        <h2 class="text-white text-3xl md:text-5xl font-light mb-12 tracking-wide">
          Borgo Pio, Roma
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
          <div>
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Indirizzo</p>
            <p class="text-white/70 text-base leading-relaxed">
              Via degli Ombrellari, 25<br>
              00193 Roma - Borgo Pio
            </p>
          </div>

          <div>
            <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Orari</p>
            <p class="text-white/70 text-base leading-relaxed">
              Martedì - Domenica<br>
              15:00 - 02:00
            </p>
            <p class="text-white/40 text-sm mt-2">Lunedì: Chiuso</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+390664760105"
            class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
          >
            Chiamaci
          </a>
          <a
            href="https://www.google.com/maps/dir//Via+degli+Ombrellari,+25,+00193+Roma"
            target="_blank"
            class="inline-block border border-white text-white px-10 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
          >
            Indicazioni
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
</script>
