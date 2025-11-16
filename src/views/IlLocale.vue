<template>
  <div class="il-locale bg-black min-h-screen text-white">
    <!-- HERO SECTION -->
    <section class="hero relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/interno-divani.jpg"
          alt="Interno Bukowski's Bar"
          class="w-full h-full object-cover opacity-40"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p class="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-accent">Est. 2014</p>

        <h1 class="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-8 font-display leading-tight">
          IL LOCALE
        </h1>

        <div class="my-8 flex items-center justify-center">
          <div class="h-px w-12 bg-white/30"></div>
          <span class="mx-4 text-white/40">✦</span>
          <div class="h-px w-12 bg-white/30"></div>
        </div>

        <p class="text-white/80 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          Più di un bar. Una galleria dove l'arte incontra l'aperitivo,<br class="hidden md:block">
          una biblioteca dove i libri profumano di gin,<br class="hidden md:block">
          un salotto dove gli sconosciuti diventano amici.
        </p>
      </div>
    </section>

    <!-- LA STORIA -->
    <section class="py-24 md:py-32 border-t border-white/10">
      <div class="max-w-4xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">La Storia</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-12 text-center font-display">
          Da Galleria d'Arte a Salotto Letterario
        </h2>

        <div class="space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
          <p class="text-center max-w-3xl mx-auto">
            Nel <strong class="text-white">dicembre del 2014</strong>, nel cuore di Borgo Pio,
            una ex galleria d'arte ha iniziato una nuova vita. Alessandro Mattei ha trasformato
            quegli spazi espositivi in quello che oggi è il Bukowski's Bar: un luogo dove la cultura
            non è mai andata via, ha solo cambiato forma.
          </p>

          <p>
            Le pareti che un tempo ospitavano quadri ora accolgono mostre fotografiche rotanti.
            Gli scaffali della biblioteca convivono con i banconi del bar. I divani rossi raccontano
            storie di Fellini, Bukowski e Star Wars, mentre il profumo del Gin del Marchese si
            mescola a quello dei libri antichi.
          </p>

          <blockquote class="border-l-2 border-white/20 pl-6 my-12 italic text-white/60 text-center">
            "Un bar che non sa stare zitto. Parla di tutto: di ginepro, di iris, di Roma autentica."
          </blockquote>

          <p>
            Dal 2014 a oggi, ogni sera dalle 15:00 alle 02:00 (tranne il lunedì), il Bukowski's
            è un punto di riferimento per chi cerca qualcosa di più di un semplice aperitivo.
            È un salotto letterario dove l'autenticità romana incontra l'atmosfera bohémien
            di un speakeasy degli anni '20.
          </p>
        </div>
      </div>
    </section>

    <!-- ALESSANDRO MATTEI -->
    <section class="py-24 bg-black border-y border-white/10">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img
              src="/esterno-ingresso.jpg"
              alt="Bukowski's Bar Entrance"
              class="w-full h-auto"
            >
          </div>

          <div class="order-1 lg:order-2 text-center lg:text-left">
            <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Il Proprietario</p>
            <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-8 font-display">
              Alessandro Mattei
            </h2>

            <div class="space-y-4 text-white/70 leading-relaxed">
              <p>
                Più che un proprietario, Alessandro è l'anima del Bukowski's.
                È lui che ti accoglie all'ingresso, che ti racconta la storia del Gin del Marchese,
                che ti consiglia il libro giusto dalla biblioteca.
              </p>

              <p>
                Con la sua passione per l'arte, la letteratura e i distillati di qualità,
                ha creato un luogo unico dove ogni serata è diversa, ma sempre autentica.
                Dove i fronzoli non servono, servono solo storie vere e gin fatto come si deve.
              </p>

              <p class="text-white/50 text-sm italic">
                "Qui da noi gli sconosciuti diventano amici davanti a un bicchiere.
                È questo che fa la differenza."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- L'ATMOSFERA -->
    <section class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">L'Atmosfera</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-16 text-center font-display">
          Un Viaggio Nel Tempo
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center p-8 border border-white/10">
            <div class="text-4xl mb-4">📚</div>
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Letterario</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Biblioteca viva con collezione estesa: dai classici alla pop culture,
              da Bukowski a Star Wars. Libri che puoi sfogliare mentre sorseggi.
            </p>
          </div>

          <div class="text-center p-8 border border-white/10">
            <div class="text-4xl mb-4">🎭</div>
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Bohémien</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Arredamento vintage anni '20, divani rossi vissuti, riferimenti a Fellini.
              L'intimità di uno speakeasy d'altri tempi.
            </p>
          </div>

          <div class="text-center p-8 border border-white/10">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Artistico</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Mostre fotografiche rotanti con opere in vendita. L'arte non è solo
              alle pareti, è nell'anima del locale.
            </p>
          </div>
        </div>

        <p class="text-white/60 text-center max-w-3xl mx-auto">
          Un mix eclettico che funziona: l'eleganza dark di un salotto romano,
          la spontaneità bohémien di chi non si prende troppo sul serio,
          e quella dose giusta di cultura che rende ogni conversazione interessante.
        </p>
      </div>
    </section>

    <!-- COSA CI RENDE UNICI -->
    <section class="py-24 bg-black border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6 text-center">Perché Siamo Diversi</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-16 text-center font-display">
          Sette Buoni Motivi
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 1. Art Gallery -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">1. Galleria d'Arte</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Mostre fotografiche rotanti con opere in vendita. Eventi culturali
              nel cuore romano dell'arte.
            </p>
          </div>

          <!-- 2. Library -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">2. Biblioteca Viva</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Collezione estesa dai classici alla pop culture. Libri che puoi leggere,
              sfogliare, commentare.
            </p>
          </div>

          <!-- 3. Gin -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">3. Gin Proprietario</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Il Gin del Marchese: nato qui, fatto per Roma, con botaniche
              che raccontano la nostra storia.
            </p>
          </div>

          <!-- 4. Spritz -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">4. 12 Tipi di Spritz</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Variazioni speciali dell'aperitivo italiano. Da Aperol a creazioni
              uniche, sbizzarritevi.
            </p>
          </div>

          <!-- 5. Vintage Decor -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">5. Arredamento Vintage</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Mobili eclettici con riferimenti a Fellini, Bukowski, Star Wars.
              Ogni angolo racconta una storia.
            </p>
          </div>

          <!-- 6. Personal Touch -->
          <div class="p-6 border-l-2 border-white/20">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">6. Accoglienza Personale</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Alessandro ti accoglie personalmente all'ingresso. Qui non sei un numero,
              sei un ospite.
            </p>
          </div>

          <!-- 7. Events -->
          <div class="p-6 border-l-2 border-white/20 md:col-span-2 lg:col-span-3">
            <h3 class="text-white text-lg font-light mb-3 tracking-wide">7. Eventi Culturali</h3>
            <p class="text-white/60 text-sm leading-relaxed">
              Mostre, degustazioni, serate musicali. Il calendario è sempre pieno,
              ma l'atmosfera resta intima.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ORARI E VISITA -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Vieni a Trovarci</p>
        <h2 class="text-white text-4xl md:text-5xl font-light tracking-wide mb-8 font-display">
          Ti Aspettiamo
        </h2>

        <p class="text-white/60 text-lg mb-12 leading-relaxed">
          Siamo in quel vicolo di Borgo Pio dove non passa mai nessuno<br class="hidden md:block">
          e per questo passano tutti.<br class="hidden md:block">
          Alessandro sarà fuori ad aspettarti.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="border border-white/10 p-8">
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Dove Siamo</h3>
            <p class="text-white/60 mb-2">
              Via degli Ombrellari, 25<br>
              00193 Roma - Borgo Pio
            </p>
            <p class="text-white/40 text-sm mt-4">
              A due passi dal Vaticano, nel cuore storico di Roma
            </p>
          </div>

          <div class="border border-white/10 p-8">
            <h3 class="text-white text-xl font-light mb-4 tracking-wide">Quando Siamo Aperti</h3>
            <p class="text-white/60 mb-2">
              Martedì - Domenica<br>
              15:00 - 02:00
            </p>
            <p class="text-white/40 text-sm mt-4">
              Lunedì: Chiuso
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/contatti"
            class="inline-block border-2 border-white text-white px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
          >
            Contattaci
          </router-link>
          <router-link
            to="/menu"
            class="inline-block border border-white/60 text-white px-10 py-3 text-xs tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300 no-underline"
          >
            Vedi il Menu
          </router-link>
        </div>

        <p class="text-white/40 text-sm italic mt-12">
          "Qui non servono fronzoli. Solo tavoli vissuti, risate vere, e storie che si incrociano tra un sorso e l'altro."
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Il Locale page component
</script>
