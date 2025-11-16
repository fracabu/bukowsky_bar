<template>
  <div class="menu bg-black min-h-screen text-white pt-32 pb-32">
    <!-- MENU HEADER -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 font-accent">Il Nostro Menu</p>

        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.1em] mb-8 font-display leading-tight">
          FOOD & DRINK
        </h1>

        <div class="my-8 flex items-center justify-center">
          <div class="h-px w-12 bg-white/30"></div>
          <span class="mx-4 text-white/40">✦</span>
          <div class="h-px w-12 bg-white/30"></div>
        </div>

        <p class="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Non abbiamo la cucina stellata. Abbiamo la tartare che fa tornare.<br class="hidden md:block">
          I taglieri che fanno restare. E gli spritz che fanno dimenticare<br class="hidden md:block">
          che esistono altri 11 tipi di spritz da provare.
        </p>
      </div>
    </section>

    <!-- MENU TABS -->
    <section class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <!-- Tab Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-16">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300',
              activeTab === tab.id
                ? 'bg-white text-black'
                : 'border border-white/40 text-white hover:border-white hover:bg-white/10'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- SPRITZ TAB -->
        <div v-show="activeTab === 'spritz'" class="animate-fade-in">
          <div class="text-center mb-12">
            <h2 class="text-white text-3xl md:text-4xl font-light tracking-wide mb-4 font-display">
              12 Tipi di Spritz
            </h2>
            <p class="text-white/60 text-base">
              Sbizzarritevi! La tradizione dell'aperitivo italiano in 12 variazioni.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="spritz in spritzList" :key="spritz.name" class="border border-white/10 p-6 hover:border-white/30 transition-all duration-300">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-white text-lg font-light tracking-wide">{{ spritz.name }}</h3>
                <span class="text-white/80 text-lg">{{ spritz.price }}</span>
              </div>
              <p class="text-white/60 text-sm">{{ spritz.description }}</p>
            </div>
          </div>
        </div>

        <!-- COCKTAILS TAB -->
        <div v-show="activeTab === 'cocktails'" class="animate-fade-in">
          <div class="text-center mb-12">
            <h2 class="text-white text-3xl md:text-4xl font-light tracking-wide mb-4 font-display">
              Cocktails
            </h2>
          </div>

          <!-- Signature Cocktails -->
          <div class="mb-16">
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Signature Cocktails</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="cocktail in signatureCocktails" :key="cocktail.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ cocktail.name }}</h4>
                  <span class="text-white/80 text-lg">{{ cocktail.price }}</span>
                </div>
                <p class="text-white/60 text-sm leading-relaxed">{{ cocktail.description }}</p>
              </div>
            </div>
          </div>

          <!-- Classic Cocktails -->
          <div>
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Classici</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="cocktail in classicCocktails" :key="cocktail.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ cocktail.name }}</h4>
                  <span class="text-white/80 text-lg">{{ cocktail.price }}</span>
                </div>
                <p class="text-white/60 text-sm">{{ cocktail.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOD TAB -->
        <div v-show="activeTab === 'food'" class="animate-fade-in">
          <div class="text-center mb-12">
            <h2 class="text-white text-3xl md:text-4xl font-light tracking-wide mb-4 font-display">
              Food
            </h2>
          </div>

          <!-- Antipasti -->
          <div class="mb-16">
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Antipasti & Specialità</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="item in antipasti" :key="item.name" :class="[
                'border p-6',
                item.highlight ? 'border-white/40 bg-white/5' : 'border-white/10'
              ]">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ item.name }}</h4>
                  <span class="text-white/80 text-lg">{{ item.price }}</span>
                </div>
                <p class="text-white/60 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Primi & Secondi -->
          <div class="mb-16">
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Primi & Secondi</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="item in primiSecondi" :key="item.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ item.name }}</h4>
                  <span class="text-white/80 text-lg">{{ item.price }}</span>
                </div>
                <p class="text-white/60 text-sm leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- Dolci -->
          <div>
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Dolci</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div v-for="item in dolci" :key="item.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ item.name }}</h4>
                  <span class="text-white/80 text-lg">{{ item.price }}</span>
                </div>
                <p class="text-white/60 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- WINE TAB -->
        <div v-show="activeTab === 'wine'" class="animate-fade-in">
          <div class="text-center mb-12">
            <h2 class="text-white text-3xl md:text-4xl font-light tracking-wide mb-4 font-display">
              Carta dei Vini
            </h2>
          </div>

          <!-- Vini Bianchi -->
          <div class="mb-16">
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Vini Bianchi</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="wine in viniBianchi" :key="wine.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ wine.name }}</h4>
                  <span class="text-white/80 text-lg">{{ wine.price }}</span>
                </div>
                <p class="text-white/60 text-sm">{{ wine.description }}</p>
              </div>
            </div>
          </div>

          <!-- Vini Rossi -->
          <div class="mb-16">
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Vini Rossi</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="wine in viniRossi" :key="wine.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ wine.name }}</h4>
                  <span class="text-white/80 text-lg">{{ wine.price }}</span>
                </div>
                <p class="text-white/60 text-sm">{{ wine.description }}</p>
              </div>
            </div>
          </div>

          <!-- Prosecco & Bollicine -->
          <div>
            <h3 class="text-white/80 text-xl font-light mb-8 tracking-wider uppercase text-center">Prosecco & Bollicine</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div v-for="wine in bollicine" :key="wine.name" class="border border-white/10 p-6">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-white text-lg font-light tracking-wide">{{ wine.name }}</h4>
                  <span class="text-white/80 text-lg">{{ wine.price }}</span>
                </div>
                <p class="text-white/60 text-sm">{{ wine.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="py-20 border-t border-white/10">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/60 text-base mb-8">
          Tutti i nostri piatti e cocktails sono preparati al momento<br class="hidden md:block">
          con ingredienti di qualità selezionati
        </p>

        <router-link
          to="/contatti"
          class="inline-block border-2 border-white text-white px-10 py-3 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 no-underline"
        >
          Prenota un Tavolo
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('spritz')

const tabs = [
  { id: 'spritz', label: 'Spritz (12!)' },
  { id: 'cocktails', label: 'Cocktails' },
  { id: 'food', label: 'Food' },
  { id: 'wine', label: 'Vini' }
]

const spritzList = [
  { name: 'Spritz Aperol', price: '€7', description: 'Il classico intramontabile' },
  { name: 'Spritz Campari', price: '€7', description: 'Più amaro, più carattere' },
  { name: 'Spritz Hugo', price: '€7', description: 'Sambuco, prosecco e menta' },
  { name: 'Spritz Select', price: '€7', description: 'Veneziano doc' },
  { name: 'Spritz Cynar', price: '€7', description: 'Carciofo e prosecco' },
  { name: 'Spritz Limoncello', price: '€7', description: 'Fresco e mediterraneo' },
  { name: 'Spritz Angostura', price: '€7', description: 'Speziato e aromatico' },
  { name: 'Spritz Americano', price: '€7', description: 'Campari e vermouth' },
  { name: 'Spritz Montenegro', price: '€7', description: 'Amaro e prosecco' },
  { name: 'Spritz Gin del Marchese', price: '€9', description: 'La nostra versione speciale' },
  { name: 'Spritz Lillet', price: '€8', description: 'Elegante e floreale' },
  { name: "Spritz Bukowski's Special", price: '€9', description: 'Ricetta segreta di Alessandro' }
]

const signatureCocktails = [
  {
    name: 'Gin del Marchese & Tonic',
    price: '€10',
    description: 'Il nostro gin con tonica premium, scorza di limone e bacche di ginepro'
  },
  {
    name: "Negroni Bukowski's",
    price: '€10',
    description: 'Gin del Marchese, Campari, Vermouth Rosso, scorza d\'arancia'
  },
  {
    name: 'Martini Letterario',
    price: '€11',
    description: 'Gin, Vermouth Dry, oliva o twist di limone'
  },
  {
    name: "Bukowski's Sour",
    price: '€9',
    description: 'Whisky, limone, zucchero, albume'
  }
]

const classicCocktails = [
  { name: 'Mojito', price: '€8', description: 'Rum, menta, lime, zucchero, soda' },
  { name: 'Moscow Mule', price: '€8', description: 'Vodka, ginger beer, lime' },
  { name: 'Old Fashioned', price: '€10', description: 'Bourbon, zucchero, Angostura, arancia' },
  { name: 'Manhattan', price: '€10', description: 'Whisky, Vermouth Rosso, Angostura' }
]

const antipasti = [
  {
    name: 'Tartare Speciale ⭐',
    price: '€14',
    description: 'La nostra tartare di qualità indiscussa, preparata al momento',
    highlight: true
  },
  {
    name: 'Tagliere Misto',
    price: '€12',
    description: 'Salumi e formaggi DOP selezionati, confetture artigianali'
  },
  {
    name: 'Hummus del Marchese',
    price: '€8',
    description: 'Hummus fatto in casa con crudité e pane tostato'
  },
  {
    name: 'Bruschette Assortite',
    price: '€9',
    description: '3 varianti con pomodoro, burrata, funghi'
  }
]

const primiSecondi = [
  {
    name: 'Lasagna della Casa',
    price: '€11',
    description: 'Ricetta tradizionale, fatta in casa'
  },
  {
    name: 'Carbonara',
    price: '€12',
    description: 'La classica romana come si deve'
  },
  {
    name: "Insalata Bukowski's",
    price: '€9',
    description: 'Mix di verdure fresche, noci, parmigiano, vinaigrette al balsamico'
  }
]

const dolci = [
  {
    name: 'Tiramisù',
    price: '€6',
    description: 'Fatto in casa, ricetta tradizionale'
  },
  {
    name: 'Dolce del Giorno',
    price: '€6',
    description: 'Chiedi al personale'
  }
]

const viniBianchi = [
  {
    name: 'Frascati Superiore DOCG',
    price: '€18',
    description: 'Lazio - Calice €5'
  },
  {
    name: 'Verdicchio dei Castelli di Jesi DOC',
    price: '€22',
    description: 'Marche - Calice €6'
  },
  {
    name: 'Gavi DOCG',
    price: '€24',
    description: 'Piemonte - Calice €6'
  }
]

const viniRossi = [
  {
    name: 'Chianti Classico DOCG',
    price: '€22',
    description: 'Toscana - Calice €6'
  },
  {
    name: "Montepulciano d'Abruzzo DOC",
    price: '€20',
    description: 'Abruzzo - Calice €5'
  },
  {
    name: "Nero d'Avola DOC",
    price: '€21',
    description: 'Sicilia - Calice €6'
  },
  {
    name: 'Barolo DOCG',
    price: '€45',
    description: 'Piemonte - Calice €12'
  }
]

const bollicine = [
  {
    name: 'Prosecco DOC',
    price: '€18',
    description: 'Veneto - Calice €5'
  },
  {
    name: 'Franciacorta DOCG',
    price: '€35',
    description: 'Lombardia - Calice €9'
  }
]
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
