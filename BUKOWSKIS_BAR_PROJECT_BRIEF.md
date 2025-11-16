# BUKOWSKI'S BAR WEBSITE - Complete Development Brief

## PROJECT OVERVIEW
Build a sophisticated, dark-themed website for Bukowski's Bar, a bohemian cocktail bar and art gallery in Rome's Borgo Pio district. The site should embody the intimate, literary atmosphere of a 1920s speakeasy while maintaining modern functionality and easy content management.

---

## BRAND IDENTITY

### Business Description
- **Name**: Bukowski's Bar
- **Location**: Via degli Ombrellari, 25 - 00193 Rome, Italy (Borgo Pio neighborhood)
- **Established**: December 2014
- **Owner**: Alessandro Mattei
- **Type**: Gallery · Café · Bistrot
- **Atmosphere**: Bohemian, literary, vintage 1920s, intimate speakeasy vibe
- **Hours**: Tuesday-Sunday 15:00-02:00 (Closed Monday)
- **Phone**: +39 06 6476 0105 / +39 351 713 9892
- **Social**: @bukowskis_bar (Instagram), Facebook: Bukowski's Bar Roma

### Unique Selling Points
1. **Art Gallery**: Rotating photography exhibitions with artworks for sale
2. **Literary Library**: Extensive collection spanning classics to pop culture
3. **Proprietary Gin**: "Gin del Marchese" - house-made botanical gin
4. **12 Types of Spritz**: Specialized cocktail variations
5. **Vintage Decor**: Eclectic furnishings with references to Fellini, Bukowski, Star Wars
6. **Personal Touch**: Owner Alessandro personally welcomes guests at entrance
7. **Cultural Events**: Regular exhibitions, tastings, music nights

### Key Menu Items
- **Drinks**: 12 Spritz variations, signature cocktails, Italian/French wines, whisky selection, Gin del Marchese
- **Food**: Special tartare, charcuterie/cheese boards, hummus, lasagna, Roman cuisine, salads

### Brand Voice & Tone
- Direct and authentic ("no frills needed")
- Literary but not pretentious
- Warm and welcoming
- Ironically sincere
- Roman authenticity
- Storytelling-driven

**Example Brand Copy**: 
> "Qui non servono fronzoli. Solo tavoli vissuti, risate vere, Gin del Marchese e storie che si incrociano tra un sorso e l'altro."

---

## DESIGN SYSTEM

### Style Inspiration
**Primary Reference**: Jerry Thomas Speakeasy Rome aesthetic
- Dark, moody, sophisticated
- Minimalist but impactful
- Mystery and exclusivity
- Vintage 1920s speakeasy
- Heavy use of shadows and dramatic lighting
- Cinematic noir photography style

### Color Palette
```css
/* Primary Colors */
--ink-black: #0D0D0D;
--dark-sepia: #2B1F1A;
--deep-bordeaux: #4A1C1C;
--antique-gold: #B8966E;

/* Accent Colors */
--paper-cream: #F4EFE6;
--bottle-green: #1F3A2C;
--seal-red: #8B2F2F;

/* Neutrals */
--smoke-gray: #4A4A4A;
--ivory: #FFFEF7;

/* Background should be predominantly dark (ink-black/dark-sepia) */
/* Text should be cream/ivory on dark backgrounds */
/* Accents in antique gold for CTAs and decorative elements */
```

### Typography System
```css
/* Display Headings (H1, Large Titles) */
font-family: 'Playfair Display', serif;
font-weight: 700;
letter-spacing: 0.05em;
text-transform: uppercase;
color: var(--paper-cream);

/* Subheadings (H2, H3) */
font-family: 'Cormorant Garamond', serif;
font-weight: 400;
font-style: italic;
color: var(--antique-gold);

/* Body Text */
font-family: 'Lora', serif;
font-weight: 400;
line-height: 1.8;
color: var(--paper-cream);

/* Labels/Accents/Navigation */
font-family: 'Montserrat', sans-serif;
font-weight: 300;
letter-spacing: 0.15em;
text-transform: uppercase;
font-size: 11px;
color: var(--antique-gold);
```

### Visual Elements & Textures
- **Background Textures**: Aged paper overlay (subtle), film grain, velvet/leather texture
- **Patterns**: Subtle damask pattern, botanical watermarks
- **Photography Style**: Low-key lighting, deep shadows, partial desaturation, 35mm film grain, cinematic noir
- **Decorative Elements**: 
  - Vintage botanical illustrations
  - Art deco flourishes (minimal)
  - Typewriter aesthetic for quotes
  - Ornamental separators: `───── ✦ ─────`
  - Elegant frames around key elements

### UI Components Style
```css
/* Buttons/CTAs */
.primary-button {
  border: 2px solid var(--antique-gold);
  background: transparent;
  color: var(--antique-gold);
  padding: 12px 30px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background: var(--antique-gold);
  color: var(--ink-black);
  box-shadow: 0 0 20px rgba(184, 150, 110, 0.4);
}

/* Cards */
.card {
  background: rgba(43, 31, 26, 0.6);
  border: 1px solid var(--antique-gold);
  padding: 30px;
  backdrop-filter: blur(10px);
}

/* Images */
.featured-image {
  border: 2px solid var(--antique-gold);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  filter: grayscale(20%) sepia(10%);
}
```

### Animation Guidelines
- **Scroll Animations**: Fade-in with stagger (0.2s delay between elements)
- **Parallax**: Very subtle on hero images (1.05x scale max)
- **Hover Effects**: 
  - Images: slight zoom (1.05x) + subtle glow
  - Buttons: border glow in gold
  - Links: underline slide-in from left
- **Page Transitions**: Fade to black (0.3s)
- **Loading**: Minimal spinner with logo OR typewriter text effect
- **No excessive animations** - keep it sophisticated and subtle

---

## SITE STRUCTURE & ARCHITECTURE

### Navigation Menu
```
Home | Il Locale | Il Nostro Gin | News & Eventi | Menu | Galleria | Contatti
```

**Navigation Style**:
- Desktop: Horizontal top nav, sticky on scroll
- Mobile: Hamburger menu (☰) with slide-in dark overlay
- Gold underline on hover/active state
- Smooth scroll to sections

---

## DETAILED PAGE LAYOUTS

### 1. HOMEPAGE

#### Hero Section (Fullscreen)
```html
<section id="hero">
  <!-- Background: Dark atmospheric photo or video of venue interior -->
  <!-- Overlay: Dark gradient for text readability -->
  
  <div class="hero-content">
    <!-- Elegant frame/border around logo area -->
    <div class="logo-frame">
      <h1 class="logo">BUKOWSKI'S BAR</h1>
      <p class="location">BORGO PIO, ROMA</p>
    </div>
    
    <p class="tagline">Galleria · Café · Bistrot</p>
    
    <!-- Decorative separator -->
    <div class="separator">───── ✦ ─────</div>
    
    <p class="subtitle">"Un salotto letterario dove l'arte incontra il gin"</p>
    
    <div class="cta-buttons">
      <button class="primary">Scopri il Locale</button>
      <button class="secondary">Il Nostro Gin</button>
    </div>
    
    <div class="scroll-indicator">
      <!-- Animated down arrow -->
      <span>Scroll Down ↓</span>
    </div>
  </div>
</section>
```

**Animations**:
- Logo frame: Fade in (1s delay)
- Text elements: Fade in stagger (0.2s each)
- Parallax on background (very subtle)

#### About Section (Split Layout)
```html
<section id="about">
  <div class="split-container">
    <div class="image-column">
      <!-- Vintage B&W photo of interior with gold border -->
      <img src="interior-vintage.jpg" alt="Bukowski's Bar Interior" />
    </div>
    
    <div class="text-column">
      <h2>LA STORIA</h2>
      <div class="separator">───── ✦ ─────</div>
      
      <p class="intro-text">
        Dal 2014, nel cuore di Borgo Pio, il Bukowski's è più di un bar. 
        È una galleria dove l'arte incontra l'aperitivo, una biblioteca dove 
        i libri profumano di gin, un salotto dove gli sconosciuti diventano amici.
      </p>
      
      <div class="features-list">
        <p>• Alessandro Mattei, proprietario</p>
        <p>• Ex galleria d'arte trasformata</p>
        <p>• Biblioteca viva e mostre fotografiche</p>
        <p>• Casa del Gin del Marchese</p>
      </div>
    </div>
  </div>
</section>
```

#### Experience Cards (3 Columns)
```html
<section id="experience">
  <h2 class="section-title">L'ESPERIENZA BUKOWSKI'S</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <div class="cards-grid">
    <div class="experience-card">
      <div class="icon">🎨</div>
      <h3>ARTE</h3>
      <p>Galleria & Cultura</p>
      <div class="card-hover-content">
        <p>Mostre fotografiche rotanti, opere in vendita, 
           eventi culturali nel cuore romano dell'arte.</p>
      </div>
    </div>
    
    <div class="experience-card">
      <div class="icon">🍸</div>
      <h3>DRINK</h3>
      <p>12 Spritz & Cocktails</p>
      <div class="card-hover-content">
        <p>Da Aperol a creazioni uniche, la nostra carta 
           celebra l'aperitivo italiano in 12 variazioni.</p>
      </div>
    </div>
    
    <div class="experience-card">
      <div class="icon">🌿</div>
      <h3>GIN</h3>
      <p>Botaniche Artigianali</p>
      <div class="card-hover-content">
        <p>Il Gin del Marchese: nato qui, fatto per Roma, 
           con botaniche che raccontano la nostra storia.</p>
      </div>
    </div>
  </div>
</section>
```

**Card Interactions**:
- Hover: Gold border glow
- Click/Tap: Expand to show full description
- Smooth transitions (0.3s)

#### Instagram Feed Section
```html
<section id="instagram">
  <h2>SEGUI LE NOSTRE STORIE</h2>
  <div class="separator">───── ✦ ─────</div>
  <p class="subtitle">@bukowskis_bar</p>
  
  <!-- Instagram feed widget (6-9 recent posts) -->
  <div class="instagram-grid">
    <!-- Auto-populate from Instagram API or embed widget -->
  </div>
  
  <a href="https://instagram.com/bukowskis_bar" class="instagram-cta">
    Seguici su Instagram
  </a>
</section>
```

#### Location & Hours Section
```html
<section id="location">
  <div class="split-container">
    <div class="map-column">
      <!-- Google Maps embed with dark theme -->
      <iframe src="[Google Maps Embed]"></iframe>
    </div>
    
    <div class="info-column">
      <h2>DOVE SIAMO</h2>
      <div class="separator">───── ✦ ─────</div>
      
      <div class="info-block">
        <h3>Indirizzo</h3>
        <p>Via degli Ombrellari, 25<br>
           00193 Roma - Borgo Pio</p>
      </div>
      
      <div class="info-block">
        <h3>Orari</h3>
        <p>Martedì - Domenica: 15:00 - 02:00<br>
           Lunedì: Chiuso</p>
      </div>
      
      <div class="info-block">
        <h3>Contatti</h3>
        <p>Tel: <a href="tel:+390664760105">06 6476 0105</a></p>
        <p>WhatsApp: <a href="https://wa.me/393517139892">351 713 9892</a></p>
      </div>
      
      <div class="cta-buttons">
        <button class="call-btn">Chiamaci</button>
        <button class="directions-btn">Come Arrivare</button>
      </div>
    </div>
  </div>
</section>
```

---

### 2. IL NOSTRO GIN (Flagship Product Page)

This is the **KEY SELLING PAGE** for their proprietary gin.

#### Hero Section
```html
<section id="gin-hero">
  <!-- Fullscreen image: Gin del Marchese bottle centered on dark textured background -->
  
  <div class="gin-hero-content">
    <div class="decorative-frame">
      <h1>IL GIN DEL MARCHESE</h1>
      <p class="subtitle">Edizione Bukowski's</p>
    </div>
    
    <div class="separator">───── ✦ ─────</div>
    
    <p class="tagline">
      "Nato tra i libri e le ombre di un salotto romano"
    </p>
    
    <div class="scroll-prompt">Scroll per scoprire ↓</div>
  </div>
</section>
```

#### Section 1: Genesi (Storytelling)
```html
<section id="gin-genesis">
  <!-- Parallax background: Scattered botanicals -->
  
  <div class="story-container">
    <h2>LA GENESI</h2>
    <div class="separator">───── ✦ ─────</div>
    
    <div class="story-content">
      <p class="lead-text">
        Il Gin del Marchese non è nato in una distilleria. 
        È nato qui, tra le ombre di Via degli Ombrellari, 
        dove ogni bottiglia racconta la stessa storia che 
        raccontano i nostri divani rossi: quella di Roma, 
        quella dell'autenticità, quella delle cose fatte come si deve.
      </p>
      
      <blockquote class="bukowski-quote">
        "Find what you love and let it kill you."<br>
        — Charles Bukowski
      </blockquote>
      
      <p>
        C'era una volta un bar che non sapeva stare zitto. Un salotto 
        letterario che parlava di tutto: di Fellini, di Bukowski, di 
        Ginepro e di Iris. Fino a quando qualcuno disse: "E se facessimo 
        un gin che racconti tutto questo?"
      </p>
    </div>
    
    <div class="image-feature">
      <!-- Photo of Alessandro with botanicals -->
      <img src="alessandro-botanicals.jpg" alt="Alessandro Mattei" />
      <p class="caption">Alessandro con le botaniche del Gin del Marchese</p>
    </div>
  </div>
</section>
```

#### Section 2: Le Botaniche
```html
<section id="gin-botanicals">
  <h2>LE BOTANICHE</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <p class="intro">
    Ogni botanica è un capitolo della storia di Roma.
    O almeno, della nostra Roma.
  </p>
  
  <div class="botanicals-grid">
    <!-- 4 column grid on desktop, 2 on tablet, 1 on mobile -->
    
    <div class="botanical-card">
      <div class="botanical-illustration">
        <!-- Vintage botanical illustration -->
        <img src="juniper-illustration.svg" alt="Ginepro" />
      </div>
      <h3>Ginepro Toscano</h3>
      <p class="origin">Toscana, Italia</p>
      <div class="hover-details">
        <p>Base aromatica classica, con note resinose 
           e leggermente speziate tipiche della varietà toscana.</p>
      </div>
    </div>
    
    <div class="botanical-card">
      <div class="botanical-illustration">
        <img src="iris-illustration.svg" alt="Iris" />
      </div>
      <h3>Iris Fiorentino</h3>
      <p class="origin">Firenze, Italia</p>
      <div class="hover-details">
        <p>Note floreali eleganti e polverose che aggiungono 
           complessità e un tocco di sofisticazione.</p>
      </div>
    </div>
    
    <div class="botanical-card">
      <div class="botanical-illustration">
        <img src="sage-illustration.svg" alt="Salvia" />
      </div>
      <h3>Salvia Romana</h3>
      <p class="origin">Roma, Italia</p>
      <div class="hover-details">
        <p>Erbacea e aromatica, porta il profumo dei 
           colli romani nel bicchiere.</p>
      </div>
    </div>
    
    <div class="botanical-card">
      <div class="botanical-illustration">
        <img src="rose-illustration.svg" alt="Rosa" />
      </div>
      <h3>Rosa Centifolia</h3>
      <p class="origin">Italia</p>
      <div class="hover-details">
        <p>Delicate note floreali che bilanciano 
           gli elementi più robusti.</p>
      </div>
    </div>
    
    <!-- Add more botanical cards as needed -->
  </div>
</section>
```

**Interaction**: Hover/tap on card to reveal detailed description

#### Section 3: Il Processo
```html
<section id="gin-process">
  <div class="process-container">
    <div class="video-column">
      <!-- Video loop of production/distillation process -->
      <video autoplay muted loop>
        <source src="gin-production.mp4" type="video/mp4" />
      </video>
    </div>
    
    <div class="text-column">
      <h2>IL PROCESSO</h2>
      <div class="separator">───── ✦ ─────</div>
      
      <p class="emphasis">
        Piccoli lotti.<br>
        Attenzione artigianale.<br>
        Nessun compromesso.
      </p>
      
      <p>
        Ogni bottiglia del Gin del Marchese è il risultato di un processo 
        meticoloso che rispetta i tempi della natura e dell'arte. 
        Non produciamo quantità industriali. Produciamo qualità.
      </p>
    </div>
  </div>
</section>
```

#### Section 4: Note di Degustazione
```html
<section id="gin-tasting">
  <h2>NOTE DI DEGUSTAZIONE</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <div class="tasting-wheel">
    <!-- Circular/radial infographic design -->
    <!-- Can be SVG illustration or styled divs -->
    
    <div class="tasting-section nose">
      <h3>NASO</h3>
      <ul>
        <li>Note di ginepro fresco</li>
        <li>Iris fiorito</li>
        <li>Agrumi romani</li>
        <li>Spezie delicate</li>
      </ul>
    </div>
    
    <div class="tasting-section palate">
      <h3>PALATO</h3>
      <ul>
        <li>Morbido e avvolgente</li>
        <li>Botaniche bilanciate</li>
        <li>Leggermente speziato</li>
        <li>Note erbacee</li>
      </ul>
    </div>
    
    <div class="tasting-section finish">
      <h3>FINALE</h3>
      <ul>
        <li>Persistente</li>
        <li>Pulito</li>
        <li>Botanico</li>
        <li>Elegante</li>
      </ul>
    </div>
  </div>
  
  <div class="specs">
    <p><strong>ABV:</strong> [TO BE PROVIDED]</p>
    <p><strong>Volume:</strong> 700ml</p>
    <p><strong>Origin:</strong> Rome, Italy</p>
  </div>
</section>
```

#### Section 5: Come Berlo
```html
<section id="gin-cocktails">
  <h2>COME BERLO</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <p class="intro">
    Non siamo snob. Ma siamo onesti: questo gin merita rispetto. 
    Puoi berlo liscio con ghiaccio, puoi farne un Gin Tonic come si deve, 
    puoi chiederci un Negroni e vedere Alessandro sorridere compiaciuto.
  </p>
  
  <div class="cocktails-grid">
    <div class="cocktail-card">
      <div class="cocktail-image">
        <img src="gin-tonic-bukowskis.jpg" alt="Gin Tonic" />
      </div>
      <h3>GIN & TONIC BUKOWSKI'S</h3>
      <div class="recipe">
        <h4>Ingredienti</h4>
        <ul>
          <li>50ml Gin del Marchese</li>
          <li>150ml Tonica premium</li>
          <li>Ghiaccio</li>
          <li>Scorza di limone</li>
          <li>Bacche di ginepro</li>
        </ul>
        
        <h4>Preparazione</h4>
        <p>Riempi un bicchiere balloon con ghiaccio. 
           Versa il Gin del Marchese, aggiungi la tonica lentamente. 
           Guarnisci con scorza di limone e bacche di ginepro.</p>
      </div>
    </div>
    
    <div class="cocktail-card">
      <div class="cocktail-image">
        <img src="negroni-bukowskis.jpg" alt="Negroni" />
      </div>
      <h3>NEGRONI</h3>
      <div class="recipe">
        <h4>Ingredienti</h4>
        <ul>
          <li>30ml Gin del Marchese</li>
          <li>30ml Vermouth Rosso</li>
          <li>30ml Campari</li>
          <li>Scorza d'arancia</li>
        </ul>
        
        <h4>Preparazione</h4>
        <p>Mescola tutti gli ingredienti con ghiaccio in un mixing glass. 
           Filtra in un tumbler con ghiaccio fresco. 
           Guarnisci con scorza d'arancia.</p>
      </div>
    </div>
    
    <div class="cocktail-card">
      <div class="cocktail-image">
        <img src="signature-cocktail.jpg" alt="Signature Cocktail" />
      </div>
      <h3>[SIGNATURE COCKTAIL NAME]</h3>
      <div class="recipe">
        <!-- To be provided by Bukowski's -->
      </div>
    </div>
  </div>
</section>
```

#### Section 6: Dove Acquistare
```html
<section id="gin-purchase">
  <h2>DOVE TROVARLO</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <p class="intro">
    Il modo migliore? Vieni al Bukowski's.<br>
    Il secondo migliore? Te lo mandiamo a casa.
  </p>
  
  <div class="purchase-options">
    <div class="option shop-online">
      <h3>SHOP ONLINE</h3>
      
      <div class="product-display">
        <img src="gin-bottle-product.jpg" alt="Gin del Marchese" />
        <p class="price">€[PRICE] + spedizione</p>
      </div>
      
      <button class="add-to-cart">Acquista Ora</button>
      
      <p class="shipping-info">
        Spedizione in tutta Italia<br>
        Tempi: 2-4 giorni lavorativi
      </p>
    </div>
    
    <div class="option visit-venue">
      <h3>NEL LOCALE</h3>
      
      <p>Vieni a degustarlo al bancone, 
         chiedi ad Alessandro di raccontarti la storia, 
         e portane a casa una bottiglia.</p>
      
      <button class="book-visit">Prenota una Visita</button>
      
      <div class="venue-info">
        <p>Via degli Ombrellari, 25<br>
           Roma - Borgo Pio</p>
        <p>Mar-Dom: 15:00-02:00</p>
      </div>
    </div>
  </div>
  
  <div class="wholesale-section">
    <h3>RIVENDITORI & DISTRIBUZIONE</h3>
    <p>Interessato a distribuire il Gin del Marchese?</p>
    <button class="contact-wholesale">Contattaci per Info</button>
  </div>
</section>
```

#### Section 7: Premi & Riconoscimenti (Optional)
```html
<section id="gin-awards">
  <!-- Only include if they have awards/recognition -->
  <h2>PREMI & RICONOSCIMENTI</h2>
  <div class="separator">───── ✦ ─────</div>
  
  <div class="awards-grid">
    <!-- Badge/seal graphics for any awards -->
  </div>
</section>
```

---

### 3. NEWS & EVENTI (CMS-Driven Blog)

This page needs to be **easily manageable by Alessandro** via WordPress CMS.

#### Page Structure
```html
<section id="news-hero">
  <h1>NEWS & EVENTI</h1>
  <div class="separator">───── ✦ ─────</div>
  <p class="subtitle">
    Mostre che cambiano le pareti. Serate che riempiono i bicchieri. 
    Storie che meritano di essere raccontate.
  </p>
</section>

<section id="news-filters">
  <div class="filter-buttons">
    <button class="filter active" data-filter="all">Tutti</button>
    <button class="filter" data-filter="eventi">Eventi</button>
    <button class="filter" data-filter="mostre">Mostre</button>
    <button class="filter" data-filter="gin">Gin</button>
    <button class="filter" data-filter="menu">Menu</button>
  </div>
</section>

<section id="news-grid">
  <!-- Magazine-style grid layout -->
  <!-- Cards auto-populate from WordPress posts -->
  
  <div class="news-grid">
    <article class="news-card featured">
      <!-- Featured post: larger, full-width -->
      <div class="card-image">
        <img src="[featured-image]" alt="[post-title]" />
        <span class="category-badge">[category]</span>
      </div>
      <div class="card-content">
        <time class="post-date">[date]</time>
        <h2 class="post-title">[title]</h2>
        <p class="post-excerpt">[excerpt]</p>
        <a href="[permalink]" class="read-more">Leggi di più →</a>
      </div>
    </article>
    
    <article class="news-card">
      <!-- Standard post card -->
      <div class="card-image">
        <img src="[thumbnail]" alt="[title]" />
        <span class="category-badge">[category]</span>
      </div>
      <div class="card-content">
        <time class="post-date">[date]</time>
        <h3 class="post-title">[title]</h3>
        <a href="[permalink]" class="read-more">Scopri →</a>
      </div>
    </article>
    
    <!-- Repeat for each post -->
  </div>
  
  <!-- Pagination -->
  <div class="pagination">
    <button class="load-more">Carica Altri</button>
  </div>
</section>
```

#### Single Post Template
```html
<article class="single-post">
  <header class="post-header">
    <div class="post-meta">
      <span class="category">[Category]</span>
      <time class="date">[Date]</time>
    </div>
    
    <h1 class="post-title">[Title]</h1>
    
    <div class="separator">───── ✦ ─────</div>
  </header>
  
  <div class="post-featured-image">
    <img src="[featured-image]" alt="[title]" />
  </div>
  
  <div class="post-content">
    <!-- WYSIWYG content from WordPress editor -->
    <!-- Support for: paragraphs, images, galleries, videos, quotes -->
    
    [content]
  </div>
  
  <aside class="event-info-box">
    <!-- Only show if post has event metadata -->
    <h3>INFO PRATICA</h3>
    <div class="separator">───── ✦ ─────</div>
    
    <div class="info-item">
      <strong>Data:</strong> [event-date]
    </div>
    <div class="info-item">
      <strong>Ora:</strong> [event-time]
    </div>
    <div class="info-item">
      <strong>Prezzo:</strong> [event-price]
    </div>
    
    <button class="book-event">Prenota Ora</button>
  </aside>
  
  <div class="post-social-share">
    <p>Condividi:</p>
    <div class="share-buttons">
      <button class="share-fb">Facebook</button>
      <button class="share-twitter">Twitter</button>
      <button class="share-whatsapp">WhatsApp</button>
      <button class="share-instagram">Instagram</button>
    </div>
  </div>
  
  <nav class="post-navigation">
    <a href="[previous-post]" class="nav-prev">← Evento Precedente</a>
    <a href="/news" class="nav-archive">Tutti gli Eventi</a>
    <a href="[next-post]" class="nav-next">Prossimo Evento →</a>
  </nav>
</article>
```

---

### 4. MENU

```html
<section id="menu-page">
  <div class="menu-header">
    <h1>IL NOSTRO MENU</h1>
    <div class="separator">───── ✦ ─────</div>
    <p class="subtitle">
      Non abbiamo la cucina stellata. Abbiamo la tartare che fa tornare.
      I taglieri che fanno restare. E gli spritz che fanno dimenticare
      che esistono altri 11 tipi di spritz da provare.
    </p>
  </div>
  
  <!-- Tabs for different menu sections -->
  <div class="menu-tabs">
    <button class="tab active" data-tab="cocktails">Cocktails</button>
    <button class="tab" data-tab="spritz">Spritz (12!)</button>
    <button class="tab" data-tab="food">Food</button>
    <button class="tab" data-tab="wine">Vini</button>
  </div>
  
  <div class="menu-content">
    <!-- COCKTAILS TAB -->
    <div class="menu-section" id="cocktails">
      <div class="menu-category">
        <h2>Signature Cocktails</h2>
        
        <div class="menu-item">
          <div class="item-header">
            <h3 class="item-name">[Cocktail Name]</h3>
            <span class="item-price">€[price]</span>
          </div>
          <p class="item-description">[ingredients/description]</p>
        </div>
        
        <!-- Repeat for each item -->
      </div>
      
      <div class="menu-category">
        <h2>Classici</h2>
        <!-- Menu items -->
      </div>
    </div>
    
    <!-- SPRITZ TAB -->
    <div class="menu-section" id="spritz">
      <h2>12 Tipi di Spritz</h2>
      <p class="intro">Sbizzarritevi!</p>
      
      <div class="spritz-grid">
        <!-- 3 columns on desktop -->
        <div class="menu-item">
          <h3>Spritz Aperol</h3>
          <span class="price">€[price]</span>
        </div>
        
        <!-- 11 more spritz varieties -->
      </div>
    </div>
    
    <!-- FOOD TAB -->
    <div class="menu-section" id="food">
      <div class="menu-category">
        <h2>Antipasti</h2>
        
        <div class="menu-item highlight">
          <div class="item-header">
            <h3 class="item-name">Tartare Speciale</h3>
            <span class="item-price">€[price]</span>
          </div>
          <p class="item-description">La nostra tartare di qualità indiscussa</p>
        </div>
        
        <div class="menu-item">
          <div class="item-header">
            <h3 class="item-name">Tagliere Misto</h3>
            <span class="item-price">€[price]</span>
          </div>
          <p class="item-description">Salumi e formaggi DOP selezionati</p>
        </div>
        
        <div class="menu-item">
          <div class="item-header">
            <h3 class="item-name">Hummus</h3>
            <span class="item-price">€[price]</span>
          </div>
          <p class="item-description">Con crudité e pane tostato</p>
        </div>
      </div>
      
      <div class="menu-category">
        <h2>Primi & Secondi</h2>
        <!-- More items -->
      </div>
    </div>
    
    <!-- WINE TAB -->
    <div class="menu-section" id="wine">
      <div class="menu-category">
        <h2>Vini Italiani</h2>
        <!-- Wine list -->
      </div>
      
      <div class="menu-category">
        <h2>Vini Francesi</h2>
        <!-- Wine list -->
      </div>
    </div>
  </div>
  
  <div class="menu-download">
    <button class="download-pdf">Scarica Menu PDF</button>
  </div>
</section>
```

---

### 5. GALLERIA

```html
<section id="gallery-page">
  <div class="gallery-header">
    <h1>GALLERIA</h1>
    <div class="separator">───── ✦ ─────</div>
  </div>
  
  <!-- Filter categories -->
  <div class="gallery-filters">
    <button class="filter active" data-filter="all">Tutti</button>
    <button class="filter" data-filter="locale">Il Locale</button>
    <button class="filter" data-filter="cocktails">Cocktails</button>
    <button class="filter" data-filter="eventi">Eventi</button>
    <button class="filter" data-filter="arte">Arte</button>
    <button class="filter" data-filter="gin">Gin del Marchese</button>
  </div>
  
  <!-- Masonry grid layout -->
  <div class="gallery-grid masonry">
    <div class="gallery-item" data-category="locale">
      <img src="[image-url]" alt="[description]" />
      <div class="item-overlay">
        <p class="caption">[Caption]</p>
      </div>
    </div>
    
    <!-- Repeat for each image -->
  </div>
  
  <!-- Lightbox modal for fullscreen image viewing -->
  <div class="lightbox" id="lightbox">
    <button class="close">&times;</button>
    <button class="prev">‹</button>
    <button class="next">›</button>
    <img src="" alt="" />
    <p class="lightbox-caption"></p>
  </div>
</section>
```

---

### 6. CONTATTI

```html
<section id="contact-page">
  <div class="contact-hero">
    <h1>CONTATTI</h1>
    <div class="separator">───── ✦ ─────</div>
    <p class="subtitle">
      Siamo in via degli Ombrellari, 25. In quel vicolo dove non passa 
      mai nessuno e per questo passano tutti. Chiamaci, scrivici, 
      o semplicemente passa. Alessandro sarà fuori ad aspettarti.
    </p>
  </div>
  
  <div class="contact-container">
    <div class="contact-info">
      <div class="info-block">
        <h2>INDIRIZZO</h2>
        <p>Via degli Ombrellari, 25<br>
           00193 Roma - Borgo Pio</p>
        <a href="[Google Maps Link]" class="directions-link">
          Come Arrivare →
        </a>
      </div>
      
      <div class="info-block">
        <h2>ORARI</h2>
        <p>Martedì - Domenica<br>
           15:00 - 02:00</p>
        <p><em>Lunedì chiuso</em></p>
      </div>
      
      <div class="info-block">
        <h2>TELEFONO</h2>
        <p><a href="tel:+390664760105">06 6476 0105</a></p>
        <p><a href="https://wa.me/393517139892">
          WhatsApp: 351 713 9892
        </a></p>
      </div>
      
      <div class="info-block">
        <h2>EMAIL</h2>
        <p><a href="mailto:info@bukowskisbar.com">
          info@bukowskisbar.com
        </a></p>
      </div>
      
      <div class="info-block">
        <h2>SOCIAL</h2>
        <div class="social-links">
          <a href="https://instagram.com/bukowskis_bar">Instagram</a>
          <a href="https://facebook.com/BukowskisBarRoma">Facebook</a>
        </div>
      </div>
    </div>
    
    <div class="contact-form">
      <h2>SCRIVICI</h2>
      <div class="separator">───── ✦ ─────</div>
      
      <form id="contact-form">
        <div class="form-group">
          <input type="text" name="name" placeholder="Nome" required />
        </div>
        
        <div class="form-group">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        
        <div class="form-group">
          <input type="tel" name="phone" placeholder="Telefono (opzionale)" />
        </div>
        
        <div class="form-group">
          <select name="subject">
            <option value="">Motivo del contatto</option>
            <option value="booking">Prenotazione</option>
            <option value="events">Eventi Privati</option>
            <option value="gin">Gin del Marchese</option>
            <option value="press">Stampa/Media</option>
            <option value="other">Altro</option>
          </select>
        </div>
        
        <div class="form-group">
          <textarea name="message" rows="6" 
            placeholder="Il tuo messaggio" required></textarea>
        </div>
        
        <div class="form-privacy">
          <label>
            <input type="checkbox" name="privacy" required />
            Accetto la <a href="/privacy">Privacy Policy</a>
          </label>
        </div>
        
        <button type="submit" class="submit-btn">Invia Messaggio</button>
      </form>
    </div>
  </div>
  
  <div class="contact-map">
    <!-- Large Google Maps embed with custom dark styling -->
    <iframe src="[Google Maps Embed URL]" 
      width="100%" height="500" frameborder="0" 
      style="border:0;" allowfullscreen="" 
      loading="lazy"></iframe>
  </div>
</section>
```

---

## FOOTER (Global)

```html
<footer id="site-footer">
  <div class="footer-content">
    <div class="footer-column brand">
      <h3>BUKOWSKI'S BAR</h3>
      <p>Galleria · Café · Bistrot</p>
      <p class="tagline">
        "Qui non servono fronzoli.<br>
        Solo storie vere e gin autentico."
      </p>
    </div>
    
    <div class="footer-column links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/il-locale">Il Locale</a></li>
        <li><a href="/gin">Il Nostro Gin</a></li>
        <li><a href="/news">News & Eventi</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </div>
    
    <div class="footer-column contact">
      <h4>Contatti</h4>
      <p>Via degli Ombrellari, 25<br>
         00193 Roma - Borgo Pio</p>
      <p>Tel: <a href="tel:+390664760105">06 6476 0105</a></p>
      <p>Mar-Dom: 15:00 - 02:00</p>
    </div>
    
    <div class="footer-column social">
      <h4>Seguici</h4>
      <div class="social-icons">
        <a href="https://instagram.com/bukowskis_bar" aria-label="Instagram">
          📷 Instagram
        </a>
        <a href="https://facebook.com/BukowskisBarRoma" aria-label="Facebook">
          📘 Facebook
        </a>
        <a href="https://wa.me/393517139892" aria-label="WhatsApp">
          💬 WhatsApp
        </a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <div class="separator">───── ✦ ─────</div>
    
    <div class="footer-legal">
      <p>&copy; 2024 Bukowski's Bar - Tutti i diritti riservati</p>
      <p>
        <a href="/privacy">Privacy Policy</a> | 
        <a href="/cookie">Cookie Policy</a> | 
        <a href="/termini">Termini e Condizioni</a>
      </p>
      <p class="credits">
        Design inspired by the ghosts of speakeasies past
      </p>
    </div>
  </div>
</footer>
```

---

## TECHNICAL REQUIREMENTS

### Platform: WordPress + Custom Theme

#### Why WordPress?
- Easy content management for Alessandro
- Drag & drop page builder (Elementor Pro)
- Robust plugin ecosystem
- SEO-friendly
- Cost-effective
- Large support community

#### Core Technology Stack
```
CMS: WordPress 6.x
Theme Base: GeneratePress Premium (lightweight, customizable)
Page Builder: Elementor Pro
Hosting: Kinsta or SiteGround (optimized for WordPress)
PHP: 8.1+
Database: MySQL 8.0+
```

#### Essential Plugins
```
Performance & Caching:
- WP Rocket (caching, minification, lazy load)
- Smush (image optimization)
- Autoptimize (code optimization)

SEO:
- Yoast SEO Premium
- Schema Pro (structured data)

Content Management:
- Advanced Custom Fields (ACF) Pro
- Custom Post Type UI

Forms:
- WPForms Pro (contact forms)
- Gravity Forms (for complex booking)

Media:
- WP Google Maps Pro (map customization)
- Smash Balloon Instagram Feed

E-commerce (for Gin sales):
- WooCommerce
- WooCommerce Stripe Payment Gateway

Multilingual (optional but recommended):
- WPML or Polylang

Security:
- Wordfence Security
- UpdraftPlus (backups)

Other:
- MonsterInsights (Google Analytics)
- Really Simple SSL
```

### Content Management System for Alessandro

#### WordPress Custom Post Types
```php
1. Eventi (Events)
   - Custom Fields:
     * Event Date
     * Event Time
     * Ticket Price
     * Category (dropdown)
     * Featured Image
     * Gallery (multiple images)
     * Video URL (YouTube/Vimeo)
     * Booking Link
     * Status (Upcoming/Ongoing/Past)

2. Menu Items
   - Custom Fields:
     * Item Name
     * Price
     * Description
     * Category (Cocktails/Food/Wine/Spritz)
     * Dietary Info (vegan/vegetarian/etc)
     * Available (yes/no)

3. Gallery
   - Custom Fields:
     * Image
     * Caption
     * Category (Locale/Cocktails/Events/Art/Gin)
     * Date
```

#### Elementor Templates for Easy Editing
```
Pre-built templates Alessandro can use:
1. Event Post Template (drag & drop blocks)
2. Menu Section Template
3. Gallery Grid Template
4. Hero Section variants
5. CTA Blocks
```

### Responsive Design Requirements

#### Breakpoints
```css
/* Mobile First Approach */
Mobile: 320px - 767px
Tablet: 768px - 1024px
Desktop: 1025px - 1440px
Large Desktop: 1441px+
```

#### Mobile-Specific Features
- Hamburger menu with smooth slide-in navigation
- Click-to-call buttons prominently displayed
- WhatsApp floating button (bottom right)
- Touch-friendly buttons (minimum 44px)
- Optimized images (WebP format)
- Lazy loading for all images
- Swipeable galleries
- Simplified forms

### Performance Requirements

#### Target Metrics
```
Google PageSpeed Insights:
- Mobile: 85+ score
- Desktop: 95+ score

Core Web Vitals:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

Other:
- Page Load Time: < 2s
- Total Page Size: < 2MB
- Requests: < 50
```

#### Optimization Techniques
- Critical CSS inline
- Deferred JavaScript loading
- WebP/AVIF image formats with fallbacks
- CDN for static assets
- Browser caching (1 year for static assets)
- GZIP/Brotli compression
- Database optimization
- Minification of CSS/JS

### SEO Requirements

#### On-Page SEO
```
1. Meta Tags:
   - Unique title tags (max 60 chars)
   - Meta descriptions (max 155 chars)
   - Open Graph tags (social sharing)
   - Twitter Card tags

2. Structured Data (Schema.org):
   - LocalBusiness schema
   - Restaurant schema
   - Event schema (for events page)
   - Product schema (for Gin)
   - Review schema

3. Content:
   - Semantic HTML5
   - Heading hierarchy (H1 > H2 > H3)
   - Alt text for all images
   - Internal linking strategy

4. URLs:
   - Clean permalinks
   - Italian slugs
   - Breadcrumbs
```

#### Local SEO Focus
```
Target Keywords:
- "cocktail bar Borgo Pio"
- "bar Roma Vaticano"
- "aperitivo Borgo Pio"
- "gin artigianale Roma"
- "bar letterario Roma"
- "galleria bar Roma"

Google My Business:
- Optimize listing
- Regular posts
- Photos weekly
- Review management
- Q&A monitoring
```

#### Technical SEO
```
- XML Sitemap generation
- Robots.txt optimization
- Canonical URLs
- 301 redirects (if migrating)
- HTTPS (SSL certificate)
- Mobile-first indexing ready
- Site speed optimization
```

### Accessibility (WCAG 2.1 AA)

```
Requirements:
- Color contrast ratio minimum 4.5:1
- Keyboard navigation support
- Focus indicators visible
- Skip navigation links
- ARIA labels where needed
- Alt text for all images
- Semantic HTML
- Responsive text sizing
- Form labels and error messages
- Video captions (if applicable)
```

### Browser Support

```
Modern Browsers (must work perfectly):
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Mobile Browsers:
- iOS Safari 14+
- Chrome Mobile
- Samsung Internet

Legacy Support:
- Graceful degradation for older browsers
- No support for IE11 (deprecated)
```

### Integrations

#### Required Integrations
```
1. Google Maps API
   - Custom styled map (dark theme)
   - Custom marker with logo
   - Directions integration

2. Instagram API
   - Display recent posts (6-9)
   - Auto-refresh daily
   - Fallback for API failure

3. Google Analytics 4
   - Event tracking
   - E-commerce tracking (for Gin sales)
   - Form submission tracking
   - Outbound link tracking

4. Facebook Pixel (optional)
   - Conversion tracking
   - Retargeting setup

5. Email Marketing
   - Mailchimp or Sendinblue
   - Newsletter signup form
   - Automated welcome series

6. Booking System Options:
   - TheFork widget integration
   - OR Simple contact form with email notification
   - OR Google Calendar integration
```

### Security Requirements

```
1. SSL Certificate (HTTPS)
2. Security Headers:
   - Content-Security-Policy
   - X-Frame-Options
   - X-Content-Type-Options
   - Strict-Transport-Security

3. WordPress Hardening:
   - Hide WordPress version
   - Disable file editing
   - Limit login attempts
   - Two-factor authentication (admin)
   - Regular security scans

4. Data Protection (GDPR):
   - Cookie consent banner
   - Privacy policy page
   - Data retention policy
   - Contact form privacy checkbox
   - Right to deletion mechanism
```

### Backup & Maintenance

```
Automated Backups:
- Daily database backups
- Weekly full site backups
- 30-day retention
- Off-site storage (cloud)

Maintenance Tasks:
- Weekly WordPress core updates
- Weekly plugin updates
- Monthly theme updates
- Monthly security scan
- Quarterly performance audit

Monitoring:
- Uptime monitoring (99.9% SLA)
- Broken link checker
- 404 error monitoring
- Performance monitoring
```

---

## CONTENT REQUIREMENTS

### Content to be Provided by Client (Alessandro)

#### Text Content
```
✓ About section detailed text
✓ Alessandro bio/photo
✓ Gin del Marchese complete description:
  - Origin story
  - Botanicals list with descriptions
  - Tasting notes
  - Production process details
  - Where to buy info
  - Pricing

✓ Menu (all sections):
  - Cocktails with descriptions
  - All 12 Spritz varieties
  - Food menu with prices
  - Wine list

✓ 5-10 past events for initial blog posts
✓ Any existing promotional copy/slogans
✓ House rules/policies if any
```

#### Visual Content Needed
```
Professional Photography Session Required:

VENUE (30 photos):
- Exterior (day/night)
- Interior wide shots
- Bar counter
- Seating areas
- Vintage furniture details
- Bookshelf/library
- Artwork on walls
- Lighting fixtures
- Texture shots (velvet, wood, etc.)

DRINKS (20 photos):
- Gin del Marchese bottle (all angles)
- Gin in glass with garnish
- 6-8 signature cocktails
- Spritz variations
- Bartender preparing drinks
- Bar tools and setup

FOOD (15 photos):
- Tartare special
- Charcuterie board
- Main dishes
- Food with drinks (styled)

GIN PRODUCTION (15 photos):
- Botanicals (individual + grouped)
- Bottle with botanicals
- Close-up of label
- Production process (if accessible)
- Alessandro with gin

ATMOSPHERE (10 photos):
- Customers enjoying (faces obscured/approved)
- Alessandro greeting guests
- Evening ambiance
- Details (candles, books, art)

TOTAL: ~90-100 professional photos
Budget: €600-800
Timeline: 1 full day shoot
```

#### Video Content (Optional but Recommended)
```
1. Venue atmosphere video (30-60s loop)
   - For homepage hero background
   - Cinematic, moody, low-light

2. Gin production video (60-90s)
   - For Gin page
   - Storytelling format
   - Can be simple phone video if authentic

Budget: €800-1500
Or: High-quality smartphone video acceptable
```

### Content Migration
```
From Instagram:
- Download archive of best posts
- Categorize by type
- Resize for web optimization

From Facebook:
- Export event descriptions
- Save high-performing posts
- Collect reviews/testimonials
```

---

## TIMELINE & DELIVERABLES

### Phase 1: Discovery & Design (2 weeks)
```
Week 1:
- Kickoff meeting with Alessandro
- Content requirements gathering
- Competitor analysis
- Site map finalization
- Mood board creation

Week 2:
- Wireframes (all pages)
- Style guide development
- Homepage mockup
- Gin page mockup
- Client review & feedback
```

### Phase 2: Development (3-4 weeks)
```
Week 3:
- WordPress installation & setup
- Theme customization
- Plugin configuration
- Homepage build
- Navigation setup

Week 4:
- Gin page development
- News/Events CMS setup
- Menu page build
- Gallery implementation

Week 5:
- Contact page + forms
- Footer & global elements
- Responsive optimization
- Cross-browser testing

Week 6:
- Bug fixes
- Performance optimization
- SEO implementation
- Content upload (if ready)
```

### Phase 3: Content & Media (1-2 weeks)
```
Week 7:
- Professional photo shoot (1 day)
- Photo editing & optimization
- Video editing (if applicable)
- Copywriting
- Content upload

Week 8:
- Final content review
- SEO optimization
- Meta tags completion
- Social media integration
```

### Phase 4: Testing & Training (1 week)
```
Week 9:
- Full site QA testing
- Performance testing
- Security audit
- Alessandro training session (3-4 hours)
- Documentation delivery
```

### Phase 5: Launch (1 week)
```
Week 10:
- Pre-launch checklist
- DNS configuration
- SSL certificate
- Google Analytics setup
- Go Live
- Post-launch monitoring (48h)
- Bug fixes (if any)
```

**Total Timeline: 10 weeks from contract signing**

### Post-Launch Support
```
Month 1: Daily monitoring
Month 2-3: Weekly check-ins
Month 4-12: Monthly maintenance

Included:
- 3 months of email/WhatsApp support
- Minor content updates (5 hours/month)
- Bug fixes
- Security updates
- Performance monitoring
```

---

## BUDGET ESTIMATE

### Initial Development
```
DESIGN & DEVELOPMENT:
Custom WordPress Theme           €2,000
Page Development (6 main pages)  €1,500
CMS Setup & Configuration        €500
Elementor Templates              €500
Responsive Optimization          €400
Integration (Maps, Instagram)    €300
Testing & QA                     €300
                          ---------------
Subtotal Development:            €5,500

CONTENT CREATION:
Professional Photography         €600-800
Video Production (optional)      €1,000-1,500
Copywriting (IT/EN)              €800
Editing & Optimization           €300
                          ---------------
Subtotal Content:                €2,700-3,400

TECHNICAL SETUP:
Domain (.com, 1 year)            €15
Premium Hosting (1 year)         €300
SSL Certificate                  €0 (included)
Premium Plugins (1 year)         €600
  - Elementor Pro                €59
  - ACF Pro                      €59
  - WP Rocket                    €59
  - WPForms Pro                  €99
  - Yoast SEO Premium            €99
  - WPML (if needed)             €99
  - Other plugins                €126
                          ---------------
Subtotal Technical:              €915

TRAINING & DOCUMENTATION:
Training Session (4 hours)       €400
Video Tutorials                  €200
User Manual                      €200
                          ---------------
Subtotal Training:               €800

PROJECT MANAGEMENT:              €500

═══════════════════════════════════════
TOTAL YEAR 1:                €10,415-11,115
═══════════════════════════════════════
```

### Annual Recurring Costs (Year 2+)
```
Hosting Renewal                  €300
Plugin Licenses Renewal          €600
Domain Renewal                   €15
SSL Renewal                      €0
Maintenance & Updates            €600
Support (optional)               €300-600
                          ---------------
TOTAL ANNUAL:                €1,815-2,415
```

### Optional Add-ons
```
E-commerce Setup (WooCommerce)   €800-1,200
Advanced Booking System          €500-800
Custom Instagram Integration     €300-500
Email Marketing Setup            €300
Additional Languages (EN)        €1,000-1,500
Google Ads Campaign Setup        €500
Social Media Management          €400/month
```

---

## SUCCESS METRICS & KPIS

### Website Performance
```
Traffic Goals (Month 3):
- 2,000+ monthly visits
- 500+ unique visitors
- 70% mobile traffic
- 30% returning visitors
- 2+ minutes avg. session

Engagement:
- <45% bounce rate
- 3+ pages per session
- 50+ social shares/month
- 10+ newsletter signups/month
```

### Conversion Goals
```
- 15% click on "Prenota"
- 20% click on phone/WhatsApp
- 5+ contact form submissions/month
- 30% visit Gin page
- 10+ gin inquiries/orders month
```

### SEO Goals (Month 6)
```
Google Rankings:
- "cocktail bar borgo pio" - Top 3
- "bar vaticano roma" - Top 5
- "gin artigianale roma" - Top 5
- "aperitivo borgo pio" - Top 3

Other:
- 50+ backlinks
- 10,000+ monthly impressions
- 4.5+ star Google rating
- 100+ Google reviews
```

### Social Media Integration
```
- 3,000+ Instagram followers
- 10% engagement rate
- 50+ shares per event post
- 40% traffic from social
```

---

## MAINTENANCE & UPDATES

### Monthly Maintenance Checklist
```
✓ WordPress core updates
✓ Plugin updates (test on staging first)
✓ Theme updates
✓ Security scan
✓ Backup verification
✓ Broken link check
✓ 404 error review
✓ Performance check
✓ Uptime monitoring review
✓ Google Analytics review
✓ SEO position tracking
```

### Quarterly Tasks
```
✓ Content audit
✓ Image optimization review
✓ Database optimization
✓ Full site backup download
✓ Security certificate review
✓ Conversion rate optimization
✓ A/B testing (if applicable)
```

### Annual Tasks
```
✓ Full site redesign assessment
✓ Photography refresh
✓ Content strategy review
✓ Competitor analysis
✓ Technology stack review
✓ Server/hosting evaluation
```

---

## TRAINING FOR ALESSANDRO

### Training Session Outline (4 hours)

#### Session 1: WordPress Basics (1 hour)
```
- Logging in/out
- Dashboard overview
- User roles and permissions
- Finding help resources
```

#### Session 2: Content Management (1.5 hours)
```
- Creating new Event post
- Using Elementor page builder
- Uploading images/videos
- Formatting text
- Adding galleries
- Publishing vs. Scheduling
- Editing/deleting content
```

#### Session 3: Site Updates (1 hour)
```
- Updating hours/contact info
- Changing homepage hero image
- Adding new menu items
- Managing gallery
- Updating Gin page content
```

#### Session 4: Troubleshooting & Support (0.5 hours)
```
- Common issues and fixes
- When to contact support
- Backup restoration basics
- Emergency contacts
```

### Documentation Provided
```
✓ Video tutorials (10-15 short videos)
✓ PDF user manual (30+ pages with screenshots)
✓ Quick reference card (1 page)
✓ FAQ document
✓ Support contact info
✓ 3 months email/WhatsApp support
```

---

## LEGAL & COMPLIANCE

### GDPR Compliance
```
Required Elements:
✓ Cookie consent banner
✓ Privacy policy page (Italian + English)
✓ Cookie policy page
✓ Terms & conditions
✓ Data processing agreement
✓ Contact form privacy checkbox
✓ Email opt-in (double opt-in)
✓ Right to deletion process
✓ Data retention policy
```

### Accessibility Statement
```
✓ WCAG 2.1 AA compliance
✓ Accessibility statement page
✓ Contact for accessibility issues
```

### Legal Pages Required
```
1. Privacy Policy (Privacy Policy)
2. Cookie Policy (Cookie Policy)
3. Terms and Conditions (Termini e Condizioni)
4. Legal Notice (Note Legali)
```

---

## LAUNCH CHECKLIST

### Pre-Launch (1 week before)
```
✓ All content uploaded and proofread
✓ All images optimized
✓ All links tested (internal & external)
✓ Forms tested and working
✓ Contact info verified (phone, email, address)
✓ Hours of operation correct
✓ Menu prices accurate
✓ SSL certificate installed
✓ 301 redirects configured (if applicable)
✓ Analytics installed and tracking
✓ Search Console configured
✓ Sitemap submitted
✓ Robots.txt configured
✓ Favicon installed
✓ Social media meta tags verified
✓ Mobile responsive tested on multiple devices
✓ Cross-browser testing completed
✓ Page speed > 85 on mobile
✓ Backup created
✓ Staging site reviewed and approved
```

### Launch Day
```
✓ DNS records updated
✓ Site goes live
✓ SSL verification (HTTPS working)
✓ Test all critical paths:
  - Homepage loads
  - Navigation works
  - Forms submit
  - Contact info clickable
  - Maps loads
  - Instagram feed displays
✓ Monitor for 404 errors
✓ Check Analytics tracking
✓ Verify Search Console
```

### Post-Launch (Week 1)
```
✓ Daily monitoring for issues
✓ Review Analytics data
✓ Check search engine indexing
✓ Monitor uptime
✓ Collect feedback from Alessandro
✓ Minor bug fixes
✓ Performance optimization if needed
```

### Post-Launch (Week 2-4)
```
✓ Weekly check-ins
✓ Review Analytics trends
✓ SEO performance monitoring
✓ User behavior analysis
✓ Content performance review
✓ Conversion tracking
✓ Social media integration check
```

---

## SUPPORT & COMMUNICATION

### Communication Channels
```
Primary: Email
Secondary: WhatsApp (urgent issues)
Emergency: Phone call
Project Management: Trello/Asana/Notion
File Sharing: Google Drive/Dropbox
```

### Response Times
```
Development Phase:
- Email: Within 24 hours
- WhatsApp: Within 4 hours
- Emergency: Within 2 hours

Post-Launch (3 months included):
- Email: Within 48 hours
- WhatsApp: Within 8 hours
- Emergency: Within 4 hours

Ongoing Maintenance (optional):
- Email: Within 72 hours
- Emergency: Within 24 hours
```

### Escalation Process
```
Level 1: Email support
Level 2: Video call/screen share
Level 3: Emergency phone support
Level 4: On-site visit (if needed, additional cost)
```

---

## FUTURE ENHANCEMENTS (Phase 2+)

### Potential Add-ons
```
1. E-commerce Expansion:
   - Full online shop for Gin
   - Merchandise sales
   - Gift certificates
   - Subscription box

2. Advanced Booking:
   - Table reservation system
   - Event ticket sales
   - Private event inquiry form
   - Automated confirmations

3. Member Area:
   - Loyalty program
   - Exclusive content
   - Early event access
   - Member discounts

4. Enhanced Content:
   - Blog/magazine section
   - Video interviews with artists
   - Cocktail recipe database
   - Behind-the-scenes content

5. Marketing Automation:
   - Email marketing sequences
   - Abandoned cart recovery
   - Birthday/anniversary emails
   - Event reminders

6. Mobile App (future):
   - Native iOS/Android app
   - Push notifications
   - Mobile ordering
   - Loyalty card
```

---

## FINAL NOTES FOR AI CODE GENERATOR

### Priority Order for Development
```
1. Homepage (most important - first impression)
2. Gin Page (key selling page)
3. News/Events (CMS functionality critical)
4. Contact Page (essential for business)
5. Menu Page
6. Gallery Page
7. About Page (Il Locale)
```

### Code Quality Requirements
```
✓ Clean, commented code
✓ Semantic HTML5
✓ CSS following BEM methodology
✓ JavaScript ES6+
✓ WordPress coding standards
✓ Accessibility best practices
✓ Performance optimization
✓ Security best practices
✓ Mobile-first approach
✓ Progressive enhancement
```

### Testing Requirements
```
✓ Cross-browser testing (Chrome, Firefox, Safari, Edge)
✓ Mobile device testing (iOS, Android)
✓ Tablet testing (iPad, Android tablets)
✓ Screen reader testing (NVDA, JAWS)
✓ Form validation testing
✓ Link checking
✓ Image optimization verification
✓ Page speed testing
✓ Security testing
```

### Documentation to Provide
```
✓ Code documentation (inline comments)
✓ Setup/installation guide
✓ Theme customization guide
✓ Plugin configuration guide
✓ Deployment checklist
✓ Maintenance procedures
✓ Troubleshooting guide
✓ User training materials
```

---

## CONTACT FOR QUESTIONS

If the AI code generator needs clarification on any aspect of this brief, prioritize the following hierarchy:

1. **Brand/Visual**: Follow Jerry Thomas Speakeasy aesthetic
2. **Functionality**: WordPress + Elementor for easy management
3. **Content**: Use provided copy examples and tone of voice
4. **Technical**: Performance and mobile experience are critical
5. **Business Goals**: Convert visitors to venue guests and gin buyers

**Primary Goal**: Create a sophisticated, dark-themed website that embodies the intimate literary atmosphere of Bukowski's Bar while being easy for Alessandro to manage and update independently.

---

## VERSION CONTROL

```
Document Version: 1.0
Last Updated: [Current Date]
Created By: [Your Name]
For: Bukowski's Bar, Rome
Client: Alessandro Mattei
Project Code: BUKOWSKIS-WEB-2024
```

---

**END OF PROJECT BRIEF**

This document serves as the complete specification for developing the Bukowski's Bar website. All design decisions, technical implementations, and content strategies should refer back to this brief to ensure alignment with the project vision and client needs.
