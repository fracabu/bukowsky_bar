<template>
  <div class="gin bg-black min-h-screen text-white">
    <!-- HERO SECTION -->
    <section class="hero relative h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p class="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-accent">Edizione Bukowski's</p>

        <h1 class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-6 font-display leading-tight">
          IL GIN<br>DEL MARCHESE
        </h1>

        <div class="my-8 flex items-center justify-center">
          <div class="h-px w-12 bg-white/30"></div>
          <span class="mx-4 text-white/40">✦</span>
          <div class="h-px w-12 bg-white/30"></div>
        </div>

        <p class="text-white/70 text-lg md:text-xl italic font-light max-w-2xl mx-auto">
          "Nato tra i libri e le ombre di un salotto romano"
        </p>
      </div>
    </section>

    <!-- LA GENESI -->
    <section class="py-24 md:py-32 border-t border-white/10">
      <div class="max-w-4xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">La Genesi</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-12 text-center font-display">
          Una Storia Romana
        </h2>

        <div class="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
          <p class="text-center max-w-3xl mx-auto">
            Il Gin del Marchese non è nato in una distilleria. È nato qui, tra le ombre
            di Via degli Ombrellari, dove ogni bottiglia racconta la stessa storia che
            raccontano i nostri divani rossi: quella di Roma, quella dell'autenticità,
            quella delle cose fatte come si deve.
          </p>

          <blockquote class="border-l-2 border-white/20 pl-6 my-12 italic text-white/60">
            "Find what you love and let it kill you."
            <span class="block mt-2 text-sm not-italic text-white/40">— Charles Bukowski</span>
          </blockquote>

          <p>
            C'era una volta un bar che non sapeva stare zitto. Un salotto letterario che
            parlava di tutto: di Fellini, di Bukowski, di Ginepro e di Iris. Fino a quando
            qualcuno disse: "E se facessimo un gin che racconti tutto questo?"
          </p>

          <p>
            E così è nato il Gin del Marchese. Piccoli lotti. Attenzione artigianale.
            Nessun compromesso. Ogni bottiglia è il risultato di un processo meticoloso
            che rispetta i tempi della natura e dell'arte.
          </p>
        </div>
      </div>
    </section>

    <!-- GIN IMAGE SECTION -->
    <section class="py-24 bg-black">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex justify-center">
          <img
            src="/gin.png"
            alt="Gin del Marchese - Bottiglia"
            class="w-full max-w-2xl h-auto object-contain"
          >
        </div>
      </div>
    </section>

    <!-- LE BOTANICHE -->
    <section class="py-24 bg-black border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">Le Botaniche</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-8 text-center font-display">
          Ogni Botanica è un Capitolo
        </h2>
        <p class="text-white/60 text-center max-w-2xl mx-auto mb-16">
          Della storia di Roma. O almeno, della nostra Roma.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Ginepro -->
          <div class="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
            <div class="text-4xl mb-4">🌿</div>
            <h3 class="text-white text-xl font-light mb-2 tracking-wide">Ginepro Toscano</h3>
            <p class="text-white/40 text-xs tracking-wider uppercase mb-4">Toscana, Italia</p>
            <p class="text-white/60 text-sm leading-relaxed">
              Base aromatica classica, con note resinose e leggermente speziate
              tipiche della varietà toscana.
            </p>
          </div>

          <!-- Iris -->
          <div class="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
            <div class="text-4xl mb-4">🌸</div>
            <h3 class="text-white text-xl font-light mb-2 tracking-wide">Iris Fiorentino</h3>
            <p class="text-white/40 text-xs tracking-wider uppercase mb-4">Firenze, Italia</p>
            <p class="text-white/60 text-sm leading-relaxed">
              Note floreali eleganti e polverose che aggiungono complessità
              e un tocco di sofisticazione.
            </p>
          </div>

          <!-- Salvia -->
          <div class="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
            <div class="text-4xl mb-4">🍃</div>
            <h3 class="text-white text-xl font-light mb-2 tracking-wide">Salvia Romana</h3>
            <p class="text-white/40 text-xs tracking-wider uppercase mb-4">Roma, Italia</p>
            <p class="text-white/60 text-sm leading-relaxed">
              Erbacea e aromatica, porta il profumo dei colli romani
              nel bicchiere.
            </p>
          </div>

          <!-- Rosa -->
          <div class="text-center p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
            <div class="text-4xl mb-4">🌹</div>
            <h3 class="text-white text-xl font-light mb-2 tracking-wide">Rosa Centifolia</h3>
            <p class="text-white/40 text-xs tracking-wider uppercase mb-4">Italia</p>
            <p class="text-white/60 text-sm leading-relaxed">
              Delicate note floreali che bilanciano gli elementi più robusti.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NOTE DI DEGUSTAZIONE -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">Note di Degustazione</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-16 text-center font-display">
          Il Profilo Aromatico
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <h3 class="text-white text-2xl font-light mb-6 tracking-wide">Naso</h3>
            <ul class="space-y-3 text-white/60">
              <li>Note di ginepro fresco</li>
              <li>Iris fiorito</li>
              <li>Agrumi romani</li>
              <li>Spezie delicate</li>
            </ul>
          </div>

          <div class="text-center">
            <h3 class="text-white text-2xl font-light mb-6 tracking-wide">Palato</h3>
            <ul class="space-y-3 text-white/60">
              <li>Morbido e avvolgente</li>
              <li>Botaniche bilanciate</li>
              <li>Leggermente speziato</li>
              <li>Note erbacee</li>
            </ul>
          </div>

          <div class="text-center">
            <h3 class="text-white text-2xl font-light mb-6 tracking-wide">Finale</h3>
            <ul class="space-y-3 text-white/60">
              <li>Persistente</li>
              <li>Pulito</li>
              <li>Botanico</li>
              <li>Elegante</li>
            </ul>
          </div>
        </div>

        <div class="mt-12 text-center text-white/50 text-sm space-y-2">
          <p><strong class="text-white/70">Volume:</strong> 700ml</p>
          <p><strong class="text-white/70">Origine:</strong> Roma, Italia</p>
        </div>
      </div>
    </section>

    <!-- COME BERLO -->
    <section class="py-24 bg-black border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">Come Berlo</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-8 text-center font-display">
          Le Nostre Ricette
        </h2>

        <p class="text-white/60 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Non siamo snob. Ma siamo onesti: questo gin merita rispetto. Puoi berlo liscio con ghiaccio,
          puoi farne un Gin Tonic come si deve, puoi chiederci un Negroni e vedere Alessandro sorridere compiaciuto.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Gin & Tonic -->
          <div class="border border-white/10 p-8">
            <h3 class="text-white text-2xl font-light mb-6 tracking-wide">Gin & Tonic Bukowski's</h3>

            <h4 class="text-white/70 text-sm tracking-wider uppercase mb-4">Ingredienti</h4>
            <ul class="text-white/60 space-y-2 mb-6">
              <li>50ml Gin del Marchese</li>
              <li>150ml Tonica premium</li>
              <li>Ghiaccio</li>
              <li>Scorza di limone</li>
              <li>Bacche di ginepro</li>
            </ul>

            <h4 class="text-white/70 text-sm tracking-wider uppercase mb-4">Preparazione</h4>
            <p class="text-white/60 leading-relaxed">
              Riempi un bicchiere balloon con ghiaccio. Versa il Gin del Marchese,
              aggiungi la tonica lentamente. Guarnisci con scorza di limone e bacche di ginepro.
            </p>
          </div>

          <!-- Negroni -->
          <div class="border border-white/10 p-8">
            <h3 class="text-white text-2xl font-light mb-6 tracking-wide">Negroni</h3>

            <h4 class="text-white/70 text-sm tracking-wider uppercase mb-4">Ingredienti</h4>
            <ul class="text-white/60 space-y-2 mb-6">
              <li>30ml Gin del Marchese</li>
              <li>30ml Vermouth Rosso</li>
              <li>30ml Campari</li>
              <li>Scorza d'arancia</li>
            </ul>

            <h4 class="text-white/70 text-sm tracking-wider uppercase mb-4">Preparazione</h4>
            <p class="text-white/60 leading-relaxed">
              Mescola tutti gli ingredienti con ghiaccio in un mixing glass.
              Filtra in un tumbler con ghiaccio fresco. Guarnisci con scorza d'arancia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DOVE TROVARLO -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Dove Trovarlo</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-8 font-display">
          Vieni a Degustarlo
        </h2>

        <p class="text-white/60 text-lg mb-12 leading-relaxed">
          Il modo migliore? Vieni al Bukowski's.<br>
          Degustalo al bancone, chiedi ad Alessandro di raccontarti la storia,<br>
          e portane a casa una bottiglia.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="border border-white/10 p-8">
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Nel Locale</h3>
            <p class="text-white/60 mb-6">
              Via degli Ombrellari, 25<br>
              00193 Roma - Borgo Pio
            </p>
            <p class="text-white/50 text-sm mb-6">Martedì - Domenica: 15:00-02:00</p>
            <router-link
              to="/contatti"
              class="inline-block border-2 border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
            >
              Contattaci
            </router-link>
          </div>

          <div class="border border-white/10 p-8">
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Rivenditori</h3>
            <p class="text-white/60 mb-6">
              Interessato a distribuire<br>
              il Gin del Marchese?
            </p>
            <a
              href="tel:+390664760105"
              class="inline-block border border-white/60 text-white px-8 py-3 text-xs tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Chiamaci
            </a>
          </div>
        </div>

        <p class="text-white/40 text-sm italic">
          "Un gin che non sa stare zitto. Parla di ginepro, di iris, di Roma autentica."
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Gin page component
</script>
