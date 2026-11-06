/**
 * Main Application Logic: Sanatan Origin of the Universe & Divine Pantheon
 * 
 * Rock-Solid 2D Architecture:
 * - Unified 2D Tree Viewport (Guides, links, and cards move together synchronously)
 * - Rock-solid, comfortable reading scale (NO jarring floating zoom in/out!)
 * - Natural vertical and horizontal 2D scrolling and panning
 * - Left-side Cosmic Tier Navigator rail for 1-click glide to any cosmic plane
 * - 4 Authentic Scriptural Traditions:
 *   1. "general": General Purana Tradition (Smarta / Universal Bhagavata Synthesis)
 *   2. "vishnu": Vishnu Purana Tradition (Lord Narayana as Supreme Root, Brahma from Navel Lotus, Rudra from Forehead)
 *   3. "shiva": Shiva Purana Tradition (Sadashiva & Ambika as Supreme Root, Vishnu from Left, Brahma from Right, 12 Jyotirlingas)
 *   4. "tattvas": Cosmic Srishti Krama (24 Tattvas, Tanmatras, Mahabhutas & 14 Lokas)
 * - 98 Exhaustive Divine Entities & Scriptural Lineages
 * - Detailed Scripture & Profile Inspector Drawer
 * - Tradition-specific Guided Cosmic Journeys (Deva Yatra, Vishnu Yatra, Shiva Yatra, Srishti Yatra)
 * - 136.1 Hz Cosmic Omkara Synthesizer
 */

class CosmicApp {
  constructor() {
    this.svg = document.getElementById("tree-svg");
    this.viewport = document.getElementById("viewport-container");
    this.viewportStage = document.getElementById("viewport-stage");
    this.tierGuidesGroup = document.getElementById("tier-guides-group");
    this.linksGroup = document.getElementById("links-group");
    this.nodesGroup = document.getElementById("nodes-group");
    this.particlesGroup = document.getElementById("particles-group");
    this.tierNavigator = document.getElementById("tier-navigator");
    this.isRendering = false;
    this.lastActiveTier = -1;
    this.tierNavDots = null;

    // Active Tradition: "general" (default), "vishnu", "shiva", "tattvas"
    this.tradition = "general";

    // Dynamic Zoom & Scale State (Initialized to optimal scale, supports full zoom in / out)
    this.scale = this.getOptimalScale();
    this.targetScale = this.scale;

    // Viewport Scroll Coordinates
    this.scrollX = window.innerWidth / 2;
    this.scrollY = 240;
    this.targetScrollX = window.innerWidth / 2;
    this.targetScrollY = 240;

    this.isDragging = false;
    this.justDragged = false;
    this.dragStart = { x: 0, y: 0 };
    this.selectedNodeId = null;
    this.activeFilter = "all";

    // Card & Layout Configuration: Uniform Majestic Format for EVERY Box (Matching Top Box)
    this.nodeWidth = 330;
    this.nodeHeight = 215;
    this.verticalSpacing = 270;
    this.horizontalGap = 42;

    // Computed tree positions
    this.layoutNodes = new Map();
    this.layoutLinks = [];

    // Collapsed nodes set (for clean hierarchical progressive disclosure)
    this.collapsedNodes = new Set();

    // Tradition-Specific Guided Tours
    this.generalTourSteps = [
      {
        nodeId: "general-parabrahman",
        title: "Stage I: Parabrahman (The Single Supreme Source)",
        desc: "All divinities originate from the singular, formless, infinite Supreme Consciousness (Parabrahman) accompanied by the primordial energy of Adi Parashakti. 'Ekam Sad Vipra Bahudha Vadanti' (Rigveda 1.164.46)."
      },
      {
        nodeId: "gen-vishnu",
        title: "Stage II: Lord Maha-Vishnu & Goddess Mahalakshmi",
        desc: "The Supreme Sustainer reclining upon Ananta Shesha in the Causal Ocean, accompanied by Goddess Mahalakshmi; the source of all Avataras, Garuda, and the Navel Lotus."
      },
      {
        nodeId: "gen-dashavatara",
        title: "Stage III: The 10 Cosmic Avatars (Dashavatara)",
        desc: "The divine descents of Lord Vishnu—Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Balarama, Krishna, Buddha, and Kalki—who manifest in every Yuga to re-establish Dharma and deliver devotees."
      },
      {
        nodeId: "gen-shiva",
        title: "Stage IV: Lord Shiva & Goddess Parvati (Mahadeva)",
        desc: "Lord of Yogis on Mount Kailasha; drinker of Halahala poison, conqueror of death (Mrityunjaya), and father of the beloved celestial family."
      },
      {
        nodeId: "gen-ganesha",
        title: "Stage V: Lord Ganesha & Lord Kartikeya",
        desc: "The divine sons: Ganesha, the elephant-headed remover of obstacles and lord of beginnings; and Kartikeya (Skanda), the valiant commander of the celestial armies."
      },
      {
        nodeId: "gen-brahma",
        title: "Stage VI: Lord Chaturmukha Brahma & Saraswati",
        desc: "Secondary creator born upon the lotus from Vishnu's navel; manifests the 4 Vedas with Goddess Saraswati and generates the mind-born sages and Prajapatis."
      },
      {
        nodeId: "gen-surya-adityas",
        title: "Stage VII: Surya Bhagavan & The Solar Dynasty",
        desc: "The directly visible Sun God (Vivasvan) born of Kashyapa; father of Yama Dharmaraja and Shani Deva, and progenitor of the great Solar Dynasty (Suryavamsha) of Ikshvaku, Harishchandra, Bhagiratha, and Sri Rama."
      },
      {
        nodeId: "gen-chandravamsha",
        title: "Stage VIII: Soma Deva & The Lunar Dynasty",
        desc: "The illustrious Lunar Dynasty (Chandravamsha) originating from Soma (the Moon), descending through Pururavas, Yayati, Emperor Bharata, King Kuru, Bhishma Pitamaha, the five Pandavas, and Emperor Parikshit."
      }
    ];

    this.vishnuTourSteps = [
      {
        nodeId: "vp-narayana",
        title: "Stage I: Lord Narayana (The Supreme Transcendental Root)",
        desc: "As declared in Vishnu Purana 1.1.31, Lord Narayana is transcendent to material nature. From Him the cosmic egg emanated, in Him all worlds rest, and He is both cause and effect."
      },
      {
        nodeId: "vp-dashavatara",
        title: "Stage II: The 10 Cosmic Avatars (Dashavatara)",
        desc: "Direct plenary descents of Lord Narayana celebrated across the Vishnu Purana—from Matsya, Kurma, and Varaha rescuing the Vedas and Earth, to Narasimha, Vamana, Parashurama, Rama, and Krishna."
      },
      {
        nodeId: "vp-svayambhuva-manu",
        title: "Stage III: Svayambhuva Manu & Cosmological Dynasties",
        desc: "From Brahma's creation in Amsas 1 & 2, Svayambhuva Manu fathers Priyavrata (who carved the seven oceans) and Uttanapada (father of Dhruva Maharaja and Emperor Prithu)."
      },
      {
        nodeId: "vp-chaturvyuha",
        title: "Stage IV: The Transcendental Chatur-Vyuha",
        desc: "The four cosmic emanations revealed in Pancharatra and Amsa 5: Vasudeva (supreme consciousness), Sankarshana (the living spirit), Pradyumna (intellect), and Aniruddha (ego)."
      },
      {
        nodeId: "vp-parashara-parampara",
        title: "Stage V: Sage Parashara & Guru-Parampara",
        desc: "Grandson of Sage Vashistha and composer of the Vishnu Purana, father of Maharshi Veda Vyasa (divider of the Vedas) and grandfather of Shukadeva Muni."
      },
      {
        nodeId: "vp-daitya-lineage",
        title: "Stage VI: The Daitya-Bhakta Dynasty (Prahlada & Mahabali)",
        desc: "The monumental narrative of pure devotion triumphing over demonic ego in Amsa 1: Hiranyakashipu's son Prahlada, Emperor Mahabali of Sutala, Banasura, and Princess Usha."
      },
      {
        nodeId: "vp-suryavamsha",
        title: "Stage VII: The Solar Dynasty (Suryavamsha of Amsa 4)",
        desc: "The majestic Ayodhya lineage descending from Ikshvaku, Mandhata, Harishchandra, Sagara, Bhagiratha, and Emperor Raghu to Lord Sri Ramachandra and Kusha."
      },
      {
        nodeId: "vp-chandravamsha",
        title: "Stage VIII: The Lunar Dynasty (Chandravamsha of Amsa 4)",
        desc: "The expansive Lunar Dynasty chronicled in Amsa 4: Pururavas, Yayati, the Yaduvamsha of Sri Krishna, and the Pauravavamsha of Emperor Bharata, Bhishma, and the Pandavas."
      }
    ];

    this.shivaTourSteps = [
      {
        nodeId: "sp-sadashiva",
        title: "Stage I: Paramashiva Sadashiva & Adi Parashakti Ambika",
        desc: "According to Shiva Purana (Vidyeshvara & Rudra Samhitas), Sadashiva is the unconditioned non-dual Supreme (Nishkala). For cosmic sport, He manifests with Ambika as Sakala Shiva."
      },
      {
        nodeId: "sp-jyotirlingas",
        title: "Stage II: The 12 Sacred Jyotirlingas (Pillars of Light)",
        desc: "The beginningless, endless column of radiant fire (Jyotirlinga) that settled Brahma and Vishnu's dispute. Piercing through earth, they form the 12 great sanctums across India."
      },
      {
        nodeId: "sp-vishnu-brahma",
        title: "Stage III: Lord Vishnu & Lord Brahma Emanated from Shiva",
        desc: "Shiva Purana 2.1.9 records: 'From My left side is born Lord Vishnu for universal sustenance; from My right side is born Lord Brahma for universal projection.'"
      },
      {
        nodeId: "sp-vishnu-avatars",
        title: "Stage IV: Vishnu's Avataras Blessed by Lord Shiva",
        desc: "How Vishnu received the invincible Sudarshana Chakra from Shiva; Lord Rama establishing the Rameshwaram Jyotirlinga, and Krishna receiving the Pashupatastra."
      },
      {
        nodeId: "sp-kailasha-family",
        title: "Stage V: The Mount Kailasha Holy Family",
        desc: "The transcendental abode of Shiva and Parvati, embodying supreme renunciation, divine marital harmony, and loving parenthood."
      },
      {
        nodeId: "sp-ganesha",
        title: "Stage VI: Lord Ganesha & Riddhi-Siddhi (Shubha & Labha)",
        desc: "Created by Mother Parvati, blessed by Shiva as Prathama Pujya (first-worshipped); accompanied by Riddhi (prosperity) and Siddhi (spiritual power)."
      },
      {
        nodeId: "sp-shaiva-dynasties",
        title: "Stage VII: The Sacred Dynasties & Shaiva Kings",
        desc: "Monarchs and sovereigns celebrated in the Shiva Purana—King Himavat, Prajapati Daksha, Solar Emperors (Bhagiratha, Mandhata, Harishchandra), historical rulers, and the Chandravamsha of Ashokasundari & Nahusha."
      },
      {
        nodeId: "sp-bhairava-rudras",
        title: "Stage VIII: Virabhadra, Kaala Bhairava & The 11 Rudras",
        desc: "The fierce manifestations born from Shiva's matted locks: Virabhadra who defended divine honor at Daksha's sacrifice, and Kaala Bhairava who guards sacred Kashi."
      }
    ];

    this.tattvasTourSteps = [
      {
        nodeId: "nirguna-brahman",
        title: "Stage I: Nirguna Parabrahman (The Unmanifest Void)",
        desc: "Before time, space, and causality existed, there was only Nirguna Parabrahman—the infinite, formless conscious reality described in the Rigveda's Nasadiya Sukta."
      },
      {
        nodeId: "adi-spandana",
        title: "Stage II: Adi Spandana & Saguna Brahman (Omkara)",
        desc: "The divine will manifests: 'May I become many'. The primordial sound vibration (Omkara / Nada Brahman) echoes as Maha-Vishnu breathes out causal universes."
      },
      {
        nodeId: "purusha-prakriti",
        title: "Stage III: Purusha & Mula-Prakriti",
        desc: "The eternal polarity awakens: Purusha (the silent conscious witness) and Mula-Prakriti (the material matrix containing Sattva, Rajas, and Tamas in dynamic tension)."
      },
      {
        nodeId: "mahat-tattva",
        title: "Stage IV: Mahat-Tattva & Ahankara",
        desc: "Universal Intelligence (Mahat) awakens, followed by Ahankara (cosmic ego) which branches into the 3 streams: Mind, Senses, and the 5 Elements."
      },
      {
        nodeId: "hiranyagarbha",
        title: "Stage V: Hiranyagarbha (The Golden Cosmic Egg)",
        desc: "The 24 elements coalesce into the luminous Golden Egg. Lord Garbhodakashayi Vishnu enters and reclines upon Ananta Shesha, blossoming the Navel Lotus."
      },
      {
        nodeId: "lord-brahma",
        title: "Stage VI: Chaturmukha Brahma (Secondary Creation)",
        desc: "Born upon the lotus, Brahma performs cosmic Tapas, receives the 4 Vedas, and manifests the Saptarishis, Kumaras, and the multidimensional architectures."
      },
      {
        nodeId: "cosmo-vaivasvata-manu",
        title: "Stage VII: Cosmic Royal Dynasties (Suryavamsha & Chandravamsha)",
        desc: "From Brahma and the Saptarishis emerge the cosmic royal lineages—Svayambhuva Manu, Priyavrata (7 oceans), Dhruva (Pole Star), and Vaivasvata Manu's Solar and Lunar dynasties governing Bhurloka."
      },
      {
        nodeId: "kala-chakra",
        title: "Stage VIII: Kala Chakra (Perpetual Cosmic Cycles)",
        desc: "Cyclic time unfolds across Satya, Treta, Dvapara, and Kali Yugas, culminating in Mahapralaya where all returns into the peaceful breath of the Supreme."
      }
    ];

    this.currentTourIndex = -1;

    this.init();
  }

  getOptimalScale() {
    if (window.innerWidth < 768) return 0.82;
    if (window.innerWidth < 1200) return 0.90;
    return 0.96;
  }

  /* ========================================================================
     Active Data & Index Map Getters
     ======================================================================== */
  get activeData() {
    switch (this.tradition) {
      case "vishnu":
        return VISHNU_PURANA_DATA;
      case "shiva":
        return SHIVA_PURANA_DATA;
      case "tattvas":
        return COSMOLOGY_DATA;
      case "general":
      default:
        return GENERAL_PURANA_DATA;
    }
  }

  get activeMap() {
    switch (this.tradition) {
      case "vishnu":
        return VISHNU_PURANA_MAP;
      case "shiva":
        return SHIVA_PURANA_MAP;
      case "tattvas":
        return COSMOLOGY_MAP;
      case "general":
      default:
        return GENERAL_PURANA_MAP;
    }
  }

  get apexId() {
    switch (this.tradition) {
      case "vishnu":
        return "vp-narayana";
      case "shiva":
        return "sp-sadashiva";
      case "tattvas":
        return "nirguna-brahman";
      case "general":
      default:
        return "general-parabrahman";
    }
  }

  get isGodTradition() {
    return this.tradition !== "tattvas";
  }

  get currentTourSteps() {
    switch (this.tradition) {
      case "vishnu":
        return this.vishnuTourSteps;
      case "shiva":
        return this.shivaTourSteps;
      case "tattvas":
        return this.tattvasTourSteps;
      case "general":
      default:
        return this.generalTourSteps;
    }
  }

  getApexScrollY(scale = this.targetScale || this.scale || 1) {
    const dock = document.getElementById("floating-filter-dock");
    let dockBottom = 118;
    if (dock) {
      const rect = dock.getBoundingClientRect();
      if (rect.bottom > 50) {
        dockBottom = rect.bottom;
      }
    }
    // Margin of 28px below dock + guideline & apex card top offset (half-height + guideline gap)
    const apexOffset = (this.nodeHeight / 2 + 12) * scale;
    return dockBottom + 28 + apexOffset;
  }

  init() {
    this.renderFilterPills();
    this.setupCameraControls();
    this.setupEventListeners();
    this.setupSearch();
    this.setupAudio();

    // On initial load or reload: ONLY show the top box of the category
    this.resetToApexOnly();

    // Start background pulse animation on links
    this.startNadiPulses();

    // Start 60fps smooth 2D rendering loop
    this.startRenderLoop();
  }

  /* ========================================================================
     Smart Progressive Hierarchy & Apex Origin Reset
     ======================================================================== */
  collapseAllBranches(node) {
    if (!node) return;
    if (node.children && node.children.length > 0) {
      this.collapsedNodes.add(node.id);
      node.children.forEach(child => this.collapseAllBranches(child));
    }
  }

  resetToApexOnly() {
    // 1. Collapse all nodes so ONLY the single top box is displayed
    this.collapsedNodes.clear();
    this.collapseAllBranches(this.activeData);

    // 2. Keep detail drawer closed on load, reload, or icon click
    this.closeDetailDrawer();
    this.closeTour();
    const searchDropdown = document.getElementById("search-results-dropdown");
    if (searchDropdown) searchDropdown.style.display = "none";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";

    // 3. Reset dock filter states to "All"
    this.activeFilter = "all";
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
    });

    // 4. Reset dock expand button
    const expandBtn = document.getElementById("dock-expand-toggle-btn");
    if (expandBtn) {
      expandBtn.innerHTML = "🌳";
      expandBtn.title = "Expand All Branches (🌳)";
    }

    // 5. Recompute layout and render tree (contains ONLY the top box)
    this.computeLayout();
    this.renderTree();

    // 6. Smoothly center the single top box in the screen viewport
    this.targetScale = this.getOptimalScale();
    this.scale = this.targetScale;
    this.targetScrollX = window.innerWidth / 2;
    this.targetScrollY = Math.max(this.getApexScrollY(this.targetScale), window.innerHeight * 0.40);
    this.scrollX = this.targetScrollX;
    this.scrollY = this.targetScrollY;
    this.clampScroll();

    // 7. Visually highlight apex node without opening the drawer
    const apex = this.apexId;
    this.selectNode(apex, false, false);
    this.requestRender();
  }

  collapseDeeperBranches(node, depth = 0) {
    if (depth >= 2 && node.children && node.children.length > 0) {
      this.collapsedNodes.add(node.id);
    }
    if (node.children) {
      node.children.forEach(child => this.collapseDeeperBranches(child, depth + 1));
    }
  }

  ensureNodeVisible(nodeId) {
    let curr = this.activeMap.get(nodeId);
    let changed = false;
    while (curr && curr.parent) {
      if (this.collapsedNodes.has(curr.parent)) {
        this.collapsedNodes.delete(curr.parent);
        changed = true;
      }
      curr = this.activeMap.get(curr.parent);
    }
    if (changed) {
      this.computeLayout();
      this.renderTree();
    }
  }

  /* ========================================================================
     Tradition Switching
     ======================================================================== */
  switchTradition(newTradition) {
    if (this.tradition === newTradition) {
      // Re-clicking current tradition resets to top box only
      this.resetToApexOnly();
      return;
    }
    this.tradition = newTradition;
    this.activeFilter = "all";

    // Update Header tab active state
    document.querySelectorAll(".tradition-tab").forEach(tab => {
      tab.classList.remove("active");
    });
    const activeTab = document.getElementById(`tradition-btn-${newTradition}`);
    if (activeTab) activeTab.classList.add("active");

    // Update tour button label
    const tourLabel = document.getElementById("tour-launch-label");
    if (tourLabel) {
      const tourTitles = {
        "general": "Deva Yatra",
        "vishnu": "Vishnu Yatra",
        "shiva": "Shiva Yatra",
        "tattvas": "Srishti Yatra"
      };
      tourLabel.textContent = tourTitles[newTradition] || "Guided Yatra";
    }

    // Update search placeholder
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      const placeholders = {
        "general": "Search Gods, avataras, weapons, shlokas...",
        "vishnu": "Search Narayana, Dashavatara, dynasties...",
        "shiva": "Search Sadashiva, Jyotirlingas, Bhairavas...",
        "tattvas": "Search tattvas, lokas, mahabhutas..."
      };
      searchInput.placeholder = placeholders[newTradition] || "Search divinity...";
      searchInput.value = "";
    }
    const searchDropdown = document.getElementById("search-results-dropdown");
    if (searchDropdown) searchDropdown.style.display = "none";

    // Close any active tour
    this.closeTour();

    // Render filter pills into floating dock
    this.renderFilterPills();

    // Always reset to ONLY the top box of the newly selected category!
    this.resetToApexOnly();
  }

  // Backward compatibility alias
  switchTreeMode(mode) {
    if (mode === "gods") this.switchTradition("general");
    else if (mode === "tattvas") this.switchTradition("tattvas");
    else this.switchTradition(mode);
  }

  /* ========================================================================
     Dynamic Floating Sub-Filter Dock Rendering
     ======================================================================== */
  renderFilterPills() {
    const container = document.getElementById("floating-filter-dock");
    if (!container) return;

    if (this.tradition === "general") {
      container.innerHTML = `
        <span class="filter-dock-label">📜 Quick Focus:</span>
        <button class="filter-btn active" data-filter="all" onclick="window.cosmicApp.filterView('all')">All Lineage</button>
        <button class="filter-btn" data-filter="vishnu" onclick="window.cosmicApp.filterView('vishnu')">🪷 Maha-Vishnu</button>
        <button class="filter-btn" data-filter="avatars" onclick="window.cosmicApp.filterView('avatars')">🏹 Dashavatara</button>
        <button class="filter-btn" data-filter="shiva" onclick="window.cosmicApp.filterView('shiva')">🔱 Lord Shiva</button>
        <button class="filter-btn" data-filter="brahma" onclick="window.cosmicApp.filterView('brahma')">🪷 Brahma & Sages</button>
        <button class="filter-btn" data-filter="surya" onclick="window.cosmicApp.filterView('surya')">☀️ Suryavamsha</button>
        <button class="filter-btn" data-filter="chandravamsha" onclick="window.cosmicApp.filterView('chandravamsha')">🌙 Chandravamsha</button>
      `;
    } else if (this.tradition === "vishnu") {
      container.innerHTML = `
        <span class="filter-dock-label">🪷 Quick Focus:</span>
        <button class="filter-btn active" data-filter="all" onclick="window.cosmicApp.filterView('all')">All Vaishnava</button>
        <button class="filter-btn" data-filter="avatars" onclick="window.cosmicApp.filterView('avatars')">🏹 Dashavatara</button>
        <button class="filter-btn" data-filter="chaturvyuha" onclick="window.cosmicApp.filterView('chaturvyuha')">☸️ Chaturvyuha</button>
        <button class="filter-btn" data-filter="manu" onclick="window.cosmicApp.filterView('manu')">📜 Svayambhuva Manu</button>
        <button class="filter-btn" data-filter="suryavamsha" onclick="window.cosmicApp.filterView('suryavamsha')">☀️ Suryavamsha</button>
        <button class="filter-btn" data-filter="chandravamsha" onclick="window.cosmicApp.filterView('chandravamsha')">🌙 Chandravamsha</button>
      `;
    } else if (this.tradition === "shiva") {
      container.innerHTML = `
        <span class="filter-dock-label">🔱 Quick Focus:</span>
        <button class="filter-btn active" data-filter="all" onclick="window.cosmicApp.filterView('all')">All Shaiva</button>
        <button class="filter-btn" data-filter="jyotirlingas" onclick="window.cosmicApp.filterView('jyotirlingas')">🪔 12 Jyotirlingas</button>
        <button class="filter-btn" data-filter="vishnu-brahma" onclick="window.cosmicApp.filterView('vishnu-brahma')">🪷 Vishnu & Brahma Origin</button>
        <button class="filter-btn" data-filter="kailasha" onclick="window.cosmicApp.filterView('kailasha')">🏔️ Kailasha Family</button>
        <button class="filter-btn" data-filter="dynasties" onclick="window.cosmicApp.filterView('dynasties')">👑 Shaiva Dynasties</button>
        <button class="filter-btn" data-filter="rudras-bhairava" onclick="window.cosmicApp.filterView('rudras-bhairava')">⚔️ Bhairavas & 11 Rudras</button>
      `;
    } else {
      container.innerHTML = `
        <span class="filter-dock-label">🌌 Quick Focus:</span>
        <button class="filter-btn active" data-filter="all" onclick="window.cosmicApp.filterView('all')">Universal Srishti</button>
        <button class="filter-btn" data-filter="tattvas" onclick="window.cosmicApp.filterView('tattvas')">⚡ Mahat & Ahankara</button>
        <button class="filter-btn" data-filter="elements" onclick="window.cosmicApp.filterView('elements')">🌍 Tanmatras & 5 Elements</button>
        <button class="filter-btn" data-filter="brahma" onclick="window.cosmicApp.filterView('brahma')">🪷 Secondary Creation</button>
        <button class="filter-btn" data-filter="dynasties" onclick="window.cosmicApp.filterView('dynasties')">👑 Cosmic Dynasties</button>
        <button class="filter-btn" data-filter="lokas" onclick="window.cosmicApp.filterView('lokas')">🪐 14 Lokas</button>
        <button class="filter-btn" data-filter="time" onclick="window.cosmicApp.filterView('time')">⏳ Kala Chakra</button>
      `;
    }
  }

  /* ========================================================================
     Tree Layout Calculation
     ======================================================================== */
  computeLayout() {
    this.layoutNodes.clear();
    this.layoutLinks = [];

    const rootData = this.activeData;
    const currentApexId = this.apexId;

    const calcSubtreeWidth = (node) => {
      const isCollapsed = this.collapsedNodes.has(node.id);
      const ownWidth = this.nodeWidth + this.horizontalGap;

      if (!node.children || node.children.length === 0 || isCollapsed) {
        node._subtreeWidth = ownWidth;
        return node._subtreeWidth;
      }
      let width = 0;
      node.children.forEach(child => {
        width += calcSubtreeWidth(child);
      });
      node._subtreeWidth = Math.max(width, ownWidth);
      return node._subtreeWidth;
    };

    calcSubtreeWidth(rootData);

    const positionNodes = (node, x, y) => {
      const w = this.nodeWidth;
      const h = this.nodeHeight;

      this.layoutNodes.set(node.id, {
        data: node,
        x: x,
        y: y,
        width: w,
        height: h
      });

      const isCollapsed = this.collapsedNodes.has(node.id);
      if (node.children && node.children.length > 0 && !isCollapsed) {
        let currentX = x - (node._subtreeWidth / 2);
        node.children.forEach(child => {
          const childCenterX = currentX + (child._subtreeWidth / 2);
          const childY = y + this.verticalSpacing;
          
          this.layoutLinks.push({
            sourceId: node.id,
            targetId: child.id,
            sourceX: x,
            sourceY: y + h / 2,
            targetX: childCenterX,
            targetY: childY - this.nodeHeight / 2
          });

          positionNodes(child, childCenterX, childY);
          currentX += child._subtreeWidth;
        });
      }
    };

    positionNodes(rootData, 0, 0);
  }

  /* ========================================================================
     SVG Tree Rendering with Cosmic Tier Guidelines
     ======================================================================== */
  renderTree() {
    const currentApexId = this.apexId;
    const isGod = this.isGodTradition;

    // 1. Render Tier Guidelines (visibly anchoring branches into cosmic levels)
    if (this.tierGuidesGroup) {
      let tierHtml = "";
      const yMap = new Map();
      this.layoutNodes.forEach(nodeItem => {
        const y = Math.round(nodeItem.y);
        if (!yMap.has(y)) yMap.set(y, []);
        yMap.get(y).push(nodeItem);
      });

      const sortedYs = Array.from(yMap.keys()).sort((a, b) => a - b);
      let minX = Infinity, maxX = -Infinity;
      this.layoutNodes.forEach(n => {
        if (n.x - n.width / 2 < minX) minX = n.x - n.width / 2;
        if (n.x + n.width / 2 > maxX) maxX = n.x + n.width / 2;
      });

      const tierLabels = [
        "✦ दिव्य मूलम् • Primordial Supreme Origin",
        "✦ आदि सृष्टि • Primary Manifestations & Trideva",
        "✦ देववंशावली • Celestial Offspring & Avataras",
        "✦ लोकपाल • Cosmic Guardians & Protectors",
        "✦ धर्म वंश • Earthly & Chiranjeevi Lineages"
      ];

      sortedYs.forEach((yVal, idx) => {
        const lineY = yVal - (yVal === 0 ? 115 : 95);
        const label = tierLabels[idx] || `✦ मण्डल ${idx + 1} • Realm Tier`;
        tierHtml += `
          <g class="tier-guide-group">
            <line x1="${minX - 60}" y1="${lineY}" x2="${maxX + 60}" y2="${lineY}" class="tier-guide-line" />
            <text x="${minX - 50}" y="${lineY - 6}" class="tier-guide-text">${label}</text>
          </g>
        `;
      });
      this.tierGuidesGroup.innerHTML = tierHtml;
    }

    // 2. Render Links (Nadis)
    let linksHtml = "";
    this.layoutLinks.forEach((link) => {
      const pathData = this.createCurvedPath(link.sourceX, link.sourceY, link.targetX, link.targetY);
      linksHtml += `
        <path id="link-${link.sourceId}-${link.targetId}" 
              class="tree-link" 
              d="${pathData}" 
              data-source="${link.sourceId}" 
              data-target="${link.targetId}"/>
      `;
    });
    this.linksGroup.innerHTML = linksHtml;

    // 3. Render Nodes (ForeignObjects for rich HTML styling - Identical to General Purana Top Box)
    let nodesHtml = "";
    this.layoutNodes.forEach((nodeItem) => {
      const { data, x, y, width, height } = nodeItem;
      const hasChildren = data.children && data.children.length > 0;
      const isCollapsed = this.collapsedNodes.has(data.id);

      // Determine parent display name matching the top box
      let parentDisplayName = "";
      if (data.parentName) {
        parentDisplayName = data.parentName.split('/')[0].split('(')[0].trim();
      } else if (data.parent) {
        const pNode = this.activeMap.get(data.parent);
        parentDisplayName = pNode ? pNode.name.split('/')[0].split('(')[0].trim() : data.parent;
      } else {
        parentDisplayName = "Anadi (Self-Existent)";
      }

      // Compile relation tags matching the top box format
      let relationChipsHtml = "";
      if (data.consort) {
        relationChipsHtml += `<span class="node-meta-chip" title="Consort: ${data.consort}">💍 ${data.consort.split('(')[0].split('/')[0].trim()}</span>`;
      }
      if (data.vahana) {
        relationChipsHtml += `<span class="node-meta-chip" title="Mount: ${data.vahana}">🐾 ${data.vahana.split('(')[0].split('/')[0].trim()}</span>`;
      }
      if (data.ayudha) {
        relationChipsHtml += `<span class="node-meta-chip" title="Ayudha: ${data.ayudha}">⚔️ ${data.ayudha.split('(')[0].split('/')[0].split(',')[0].trim()}</span>`;
      }
      if (!relationChipsHtml) {
        relationChipsHtml += `<span class="node-meta-chip" title="Sacred Canon">📜 ${data.tradition || 'Vedic Canon'}</span>`;
        relationChipsHtml += `<span class="node-meta-chip" title="Divine Aspect">✦ ${data.category || 'Eternal Principle'}</span>`;
      }

      nodesHtml += `
        <g id="node-group-${data.id}" transform="translate(${x - width / 2}, ${y - height / 2})">
          <foreignObject width="${width}" height="${height}" style="overflow: visible;">
            <div xmlns="http://www.w3.org/1999/xhtml" 
                 id="card-${data.id}"
                 class="node-card apex-origin ${this.selectedNodeId === data.id ? 'selected' : ''}" 
                 style="--node-color: ${data.color || 'var(--gold-primary)'}; --node-glow: ${data.glowColor || 'var(--gold-glow)'};"
                 onclick="window.cosmicApp.onNodeCardClick('${data.id}')">
              
              <div class="node-header">
                <div class="node-icon-badge">${data.icon || '🕉️'}</div>
                <div class="node-title-group">
                  <div class="node-title" title="${data.name}">${data.name}</div>
                  <div class="node-sanskrit">${data.sanskrit || ''}</div>
                </div>
              </div>

              <div class="node-body-content">
                <div class="node-meta-row">
                  <span class="node-category-tag">${data.category || data.tradition || 'Divinity'}</span>
                  <span class="node-parent-tag" title="Origin / Parent: ${data.parentName || parentDisplayName}">
                    ↑ ${parentDisplayName}
                  </span>
                </div>

                <div class="node-relation-tags">
                  ${relationChipsHtml}
                </div>

                <div class="node-summary" title="${data.summary || ''}">${data.summary || ''}</div>
              </div>

              <div class="node-footer">
                <div class="node-footer-left">
                  <span class="node-tier-label" title="${data.title || data.category}">${data.title ? data.title.split('&')[0].split('•')[0].trim() : data.category}</span>
                  <span class="node-click-hint" title="Click box for full explanation & layman guide">ℹ️ Info</span>
                </div>
                ${hasChildren ? `
                  <button class="node-expand-pill" data-node-id="${data.id}" onclick="event.stopPropagation(); window.cosmicApp.toggleCollapse('${data.id}')" title="${isCollapsed ? 'Expand child branches' : 'Collapse child branches'}">
                    <span>${data.children.length}</span> ${isCollapsed ? 'Child Gods ▸' : 'Child Gods ▾'}
                  </button>
                ` : `
                  <span class="node-terminal-pill">✦ Divine Manifestation</span>
                `}
              </div>
            </div>
          </foreignObject>
        </g>
      `;
    });
    this.nodesGroup.innerHTML = nodesHtml;
    this.requestRender();
  }

  createCurvedPath(x1, y1, x2, y2) {
    const deltaY = (y2 - y1) * 0.52;
    return `M ${x1} ${y1} C ${x1} ${y1 + deltaY}, ${x2} ${y2 - deltaY}, ${x2} ${y2}`;
  }

  toggleCollapse(nodeId) {
    if (this.collapsedNodes.has(nodeId)) {
      this.collapsedNodes.delete(nodeId);
    } else {
      this.collapsedNodes.add(nodeId);
    }
    this.computeLayout();
    this.renderTree();
    this.selectNode(nodeId, false, false);
    // Smoothly ensure the node and its immediate children stay visible
    this.scrollToNode(nodeId);
  }

  toggleExpandAll() {
    const hasAnyCollapsed = this.collapsedNodes.size > 0;
    
    if (hasAnyCollapsed) {
      // Expand all branches in the active tradition
      this.collapsedNodes.clear();
      const btn = document.getElementById("dock-expand-toggle-btn");
      if (btn) {
        btn.innerHTML = "📁";
        btn.title = "Collapse to Top Box Only (📁)";
      }
      this.computeLayout();
      this.renderTree();
      this.resetToApex();
    } else {
      // Collapse back to top box only!
      this.resetToApexOnly();
    }
  }

  /* ========================================================================
     Smooth 2D Viewport & Navigation Engine (Demand-Driven 60 FPS)
     ======================================================================== */
  startRenderLoop() {
    this.isRendering = false;
    this.requestRender();
  }

  requestRender() {
    if (this.isRendering) return;
    this.isRendering = true;
    requestAnimationFrame(() => this.renderFrame());
  }

  renderFrame() {
    // Direct, responsive 2D panning and zooming with smooth damping
    const dx = (this.targetScrollX - this.scrollX) * 0.22;
    const dy = (this.targetScrollY - this.scrollY) * 0.22;
    const ds = (this.targetScale - this.scale) * 0.22;

    const isMoving = Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05 || Math.abs(ds) > 0.0004 || this.isDragging;

    if (isMoving) {
      this.scrollX += dx;
      this.scrollY += dy;
      this.scale += ds;
      this.updateTransforms();
      this.updateActiveTierIndicator();
      requestAnimationFrame(() => this.renderFrame());
    } else {
      this.scrollX = this.targetScrollX;
      this.scrollY = this.targetScrollY;
      this.scale = this.targetScale;
      this.updateTransforms();
      this.updateActiveTierIndicator();
      this.isRendering = false; // Zero CPU/GPU idle spinning
    }
  }

  updateTransforms() {
    // Single unified 2D transformation: hardware accelerated on the unified stage
    const stageTransform = `translate(${this.scrollX}px, ${this.scrollY}px) scale(${this.scale})`;
    
    if (this.viewportStage) {
      this.viewportStage.style.transform = stageTransform;
    } else {
      if (this.tierGuidesGroup) this.tierGuidesGroup.style.transform = stageTransform;
      if (this.linksGroup) this.linksGroup.style.transform = stageTransform;
      if (this.particlesGroup) this.particlesGroup.style.transform = stageTransform;
      if (this.nodesGroup) this.nodesGroup.style.transform = stageTransform;
    }
  }

  clampScroll() {
    if (this.layoutNodes.size === 0) return;

    let minY = Infinity, maxY = -Infinity;
    let minX = Infinity, maxX = -Infinity;
    this.layoutNodes.forEach(n => {
      if (n.y < minY) minY = n.y;
      if (n.y > maxY) maxY = n.y;
      if (n.x < minX) minX = n.x;
      if (n.x > maxX) maxX = n.x;
    });

    const currentScale = this.targetScale || this.scale || 1;
    const apexTopScrollY = this.getApexScrollY(currentScale);

    // Allow user to pan downwards so apex can move down nicely (or up to view children)
    const maxScrollY = Math.max(apexTopScrollY + 200, window.innerHeight * 0.55);
    // Allow panning up so the deepest children (maxY) are comfortably visible above the bottom dock
    const minScrollY = Math.min(apexTopScrollY, window.innerHeight * 0.38 - (maxY * currentScale));

    this.targetScrollY = Math.max(minScrollY, Math.min(maxScrollY, this.targetScrollY));

    // Horizontal boundaries: allow panning to view full left and right family sub-branches
    const maxScrollX = (window.innerWidth / 2) - (minX * currentScale) + 260;
    const minScrollX = (window.innerWidth / 2) - (maxX * currentScale) - 260;
    
    if (minScrollX < maxScrollX) {
      this.targetScrollX = Math.max(minScrollX, Math.min(maxScrollX, this.targetScrollX));
    }
  }

  scrollToNode(nodeId, instant = false) {
    const nodeItem = this.layoutNodes.get(nodeId);
    if (!nodeItem) return;

    const currentScale = this.targetScale || this.scale || 1;
    const isApex = nodeId === this.apexId || nodeItem.y === 0;

    this.targetScrollX = (window.innerWidth / 2) - (nodeItem.x * currentScale);
    if (isApex) {
      this.targetScrollY = this.getApexScrollY(currentScale);
    } else {
      this.targetScrollY = (window.innerHeight * 0.40) - (nodeItem.y * currentScale);
    }
    this.clampScroll();

    if (instant) {
      this.scrollX = this.targetScrollX;
      this.scrollY = this.targetScrollY;
      this.scale = this.targetScale;
      this.updateTransforms();
    }
    this.requestRender();
  }

  scrollToTier(tierLevel) {
    if (tierLevel === 0) {
      this.targetScrollX = window.innerWidth / 2;
      this.targetScrollY = this.getApexScrollY(this.targetScale);
      this.clampScroll();
      this.requestRender();
      return;
    }

    let targetY = 0;
    let count = 0;
    this.layoutNodes.forEach(nodeItem => {
      const d = nodeItem.data.depth !== undefined ? nodeItem.data.depth : 0;
      if (d === tierLevel || (tierLevel >= 3 && d >= 3)) {
        targetY += nodeItem.y;
        count++;
      }
    });

    if (count > 0) {
      const avgY = targetY / count;
      const currentScale = this.targetScale || this.scale || 1;
      this.targetScrollY = (window.innerHeight * 0.38) - (avgY * currentScale);
      this.targetScrollX = window.innerWidth / 2;
      this.clampScroll();
      this.requestRender();
    }
  }

  updateActiveTierIndicator() {
    if (!this.tierNavigator) return;

    // Estimate current visible level based on scrollY
    const currentViewY = (window.innerHeight * 0.36 - this.scrollY) / this.scale;
    let activeTier = 0;

    if (currentViewY > 500) activeTier = 3;
    else if (currentViewY > 320) activeTier = 2;
    else if (currentViewY > 120) activeTier = 1;
    else activeTier = 0;

    if (this.lastActiveTier === activeTier) return; // Prevent repeated DOM queries
    this.lastActiveTier = activeTier;

    if (!this.tierNavDots) {
      this.tierNavDots = document.querySelectorAll(".tier-nav-dot");
    }
    this.tierNavDots.forEach(dot => {
      const dotTier = parseInt(dot.getAttribute("data-tier"), 10);
      dot.classList.toggle("active", dotTier === activeTier);
    });
  }

  /* ========================================================================
     Animated Nadi Pulses (Zero-Reflow Cubic Bezier Pool)
     ======================================================================== */
  startNadiPulses() {
    const poolSize = 3;
    const pulseDots = [];
    for (let i = 0; i < poolSize; i++) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("r", "3");
      dot.setAttribute("class", "tree-pulse-dot");
      dot.style.display = "none";
      this.particlesGroup.appendChild(dot);
      pulseDots.push({
        element: dot,
        active: false,
        link: null,
        progress: 0,
        speed: 0.02
      });
    }

    const cubicBezier = (t, p0, p1, p2, p3) => {
      const mt = 1 - t;
      const mt2 = mt * mt;
      const t2 = t * t;
      return {
        x: mt2 * mt * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t2 * t * p3.x,
        y: mt2 * mt * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t2 * t * p3.y
      };
    };

    const spawnPulse = () => {
      if (!this.layoutLinks || this.layoutLinks.length === 0) return;
      const available = pulseDots.find(p => !p.active);
      if (!available) return;

      const randomLink = this.layoutLinks[Math.floor(Math.random() * this.layoutLinks.length)];
      if (!randomLink) return;

      const deltaY = (randomLink.targetY - randomLink.sourceY) * 0.52;
      available.link = {
        p0: { x: randomLink.sourceX, y: randomLink.sourceY },
        p1: { x: randomLink.sourceX, y: randomLink.sourceY + deltaY },
        p2: { x: randomLink.targetX, y: randomLink.targetY - deltaY },
        p3: { x: randomLink.targetX, y: randomLink.targetY }
      };
      available.progress = 0;
      available.speed = 0.014 + Math.random() * 0.014;
      available.active = true;
      available.element.style.display = "";
    };

    const updatePulses = () => {
      pulseDots.forEach(p => {
        if (!p.active) return;
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.active = false;
          p.element.style.display = "none";
          return;
        }
        const pt = cubicBezier(p.progress, p.link.p0, p.link.p1, p.link.p2, p.link.p3);
        p.element.setAttribute("cx", pt.x);
        p.element.setAttribute("cy", pt.y);
      });
      requestAnimationFrame(updatePulses);
    };

    requestAnimationFrame(updatePulses);
    setInterval(spawnPulse, 500);
  }

  /* ========================================================================
     Smooth 2D Camera Controls, Pan & Dynamic Zoom (Wheel & Pinch)
     ======================================================================== */
  setupCameraControls() {
    // Mouse Dragging (Natural Panning)
    this.viewport.addEventListener("mousedown", (e) => {
      if (e.target.closest(".node-card") || e.target.closest(".cosmic-tier-navigator") || e.target.closest(".controls-dock") || e.target.closest(".floating-filter-dock")) return;
      this.isDragging = true;
      this.dragStart = { x: e.clientX - this.targetScrollX, y: e.clientY - this.targetScrollY };
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      this.targetScrollX = e.clientX - this.dragStart.x;
      this.targetScrollY = e.clientY - this.dragStart.y;
      this.clampScroll();
      this.requestRender();
    }, { passive: true });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
      this.requestRender();
    }, { passive: true });

    // Mouse Wheel: Zoom in and zoom out towards cursor (like initially!)
    this.viewport.addEventListener("wheel", (e) => {
      e.preventDefault();

      const zoomFactor = e.deltaY < 0 ? 1.10 : 0.90;
      const newScale = Math.max(0.25, Math.min(2.5, this.targetScale * zoomFactor));

      const rect = this.viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Zoom towards mouse cursor point
      this.targetScrollX = mouseX - (mouseX - this.targetScrollX) * (newScale / this.targetScale);
      this.targetScrollY = mouseY - (mouseY - this.targetScrollY) * (newScale / this.targetScale);
      this.targetScale = newScale;

      this.clampScroll();
      this.requestRender();
    }, { passive: false });

    // Touch Support for mobile & touchscreens (frictionless pan & two-finger pinch-to-zoom)
    let touchStartDist = 0;
    let touchStartScale = 1;
    let touchCenter = { x: 0, y: 0 };
    let touchOrigin = { x: 0, y: 0 };
    let hasMoved = false;
    let touchTargetPill = null;
    let touchTargetCard = null;

    this.viewport.addEventListener("touchstart", (e) => {
      // Do not intercept touches on fixed UI buttons, modals, or drawer
      if (e.target.closest(".controls-dock") ||
          e.target.closest(".floating-filter-dock") ||
          e.target.closest(".cosmic-tier-navigator") ||
          e.target.closest("#tour-overlay") ||
          e.target.closest("#detail-drawer") ||
          e.target.closest("#mobile-search-overlay")) {
        return;
      }

      if (e.touches.length === 1) {
        this.isDragging = true;
        touchStartDist = 0;
        hasMoved = false;
        touchOrigin = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        this.dragStart = { x: e.touches[0].clientX - this.targetScrollX, y: e.touches[0].clientY - this.targetScrollY };

        touchTargetPill = e.target.closest(".node-expand-pill");
        touchTargetCard = e.target.closest(".node-card");
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        hasMoved = true;
        this.justDragged = true;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        touchStartScale = this.targetScale;
        touchCenter = {
          x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
          y: (e.touches[0].clientY + e.touches[1].clientY) / 2
        };
      }
    }, { passive: true });

    this.viewport.addEventListener("touchmove", (e) => {
      if (this.isDragging && e.touches.length === 1) {
        const delta = Math.hypot(e.touches[0].clientX - touchOrigin.x, e.touches[0].clientY - touchOrigin.y);
        if (delta > 8) {
          hasMoved = true;
          this.justDragged = true;
        }
        if (hasMoved) {
          if (e.cancelable) e.preventDefault();
          this.targetScrollX = e.touches[0].clientX - this.dragStart.x;
          this.targetScrollY = e.touches[0].clientY - this.dragStart.y;
          this.clampScroll();
          this.requestRender();
        }
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        if (e.cancelable) e.preventDefault();
        hasMoved = true;
        this.justDragged = true;
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = dist / touchStartDist;
        const newScale = Math.max(0.25, Math.min(2.5, touchStartScale * factor));

        this.targetScrollX = touchCenter.x - (touchCenter.x - this.targetScrollX) * (newScale / this.targetScale);
        this.targetScrollY = touchCenter.y - (touchCenter.y - this.targetScrollY) * (newScale / this.targetScale);
        this.targetScale = newScale;
        this.clampScroll();
        this.requestRender();
      }
    }, { passive: false });

    this.viewport.addEventListener("touchend", () => {
      if (this.isDragging && !hasMoved) {
        // Pure tap without pan movement
        if (touchTargetPill) {
          const nodeId = touchTargetPill.getAttribute("data-node-id") ||
                         (touchTargetCard ? touchTargetCard.id.replace("card-", "") : null);
          if (nodeId) {
            this.toggleCollapse(nodeId);
          }
        } else if (touchTargetCard) {
          const nodeId = touchTargetCard.id.replace("card-", "");
          if (nodeId) {
            this.onNodeCardClick(nodeId);
          }
        }
      }

      this.isDragging = false;
      touchStartDist = 0;
      hasMoved = false;
      touchTargetPill = null;
      touchTargetCard = null;
      setTimeout(() => { this.justDragged = false; }, 220);
      this.requestRender();
    }, { passive: true });
  }

  /* ========================================================================
     Node Selection & Detailed Divine Profile Inspector
     ======================================================================== */
  onNodeCardClick(nodeId) {
    if (this.justDragged) return;
    // User explicitly clicked this box -> select and OPEN the information popup window!
    this.selectNode(nodeId, true, true);
  }

  selectNode(nodeId, panTo = true, openDrawer = false) {
    this.selectedNodeId = nodeId;
    const node = this.activeMap.get(nodeId);
    if (!node) return;

    // Ensure this node's branch is visible if previously collapsed
    this.ensureNodeVisible(nodeId);

    // Remove previous selection styling
    document.querySelectorAll(".node-card.selected").forEach(c => c.classList.remove("selected"));
    document.querySelectorAll(".tree-link.highlighted").forEach(l => l.classList.remove("highlighted"));

    // Add selected class to this card
    const cardEl = document.getElementById(`card-${nodeId}`);
    if (cardEl) cardEl.classList.add("selected");

    // Highlight lineage back to the apex
    let curr = node;
    const breadcrumbTrail = [curr];
    while (curr.parent) {
      const linkEl = document.getElementById(`link-${curr.parent}-${curr.id}`);
      if (linkEl) linkEl.classList.add("highlighted");
      curr = this.activeMap.get(curr.parent);
      if (curr) breadcrumbTrail.unshift(curr);
    }

    // Trigger visual cosmic ripple
    const nodeItem = this.layoutNodes.get(nodeId);
    if (nodeItem && window.cosmicBg) {
      const screenX = this.scrollX + nodeItem.x * this.scale;
      const screenY = this.scrollY + nodeItem.y * this.scale;
      window.cosmicBg.addRipple(screenX, screenY);
    }

    // Update bottom breadcrumbs
    this.updateBreadcrumbs(breadcrumbTrail);

    // ONLY populate and open detail drawer if explicitly requested (e.g. user clicked the box)
    if (openDrawer) {
      this.openDetailDrawer(node);
    }

    if (panTo) {
      this.scrollToNode(nodeId);
    }
  }

  updateBreadcrumbs(trail) {
    const container = document.getElementById("breadcrumb-container");
    if (!container) return;
    let html = "";
    trail.forEach((item, idx) => {
      const isLast = idx === trail.length - 1;
      html += `
        <span class="breadcrumb-item ${isLast ? 'active' : ''}" onclick="window.cosmicApp.selectNode('${item.id}', true, true)">
          ${item.name}
        </span>
      `;
      if (!isLast) {
        html += `<span class="breadcrumb-sep">➔</span>`;
      }
    });
    container.innerHTML = html;
  }

  /* ========================================================================
     Layman's Guide Generator (Clear, Accessible for Global & Non-Sanatan Readers)
     ======================================================================== */
  getLaymanGuide(node) {
    const id = node.id || "";
    const name = node.name || "";
    const category = node.category || "";
    const summary = node.summary || "";
    const details = node.details || "";

    let role = "";
    let analogy = "";
    let symbolism = "";

    if (id === "general-parabrahman" || id === "nirguna-brahman") {
      role = "<strong>The Infinite, Boundless Supreme Consciousness.</strong> In Sanatan Dharma, before time, space, matter, or gods existed, there was only one infinite, formless spiritual reality (Parabrahman). All deities—creators, preservers, protectors, and sages—are radiant expressions or specialized facets of this singular divine ocean.";
      analogy = "Think of Parabrahman as the unmanifest cosmic energy before the Big Bang, or the silent, boundless white canvas upon which the entire movie of the multiverse is projected.";
      symbolism = "Depicted without physical boundaries or human limitations; represented universally by the sacred vibration <strong>OM (A-U-M)</strong>, the primordial acoustic frequency of all existence.";
    } else if (id === "gen-vishnu" || id === "vp-narayana") {
      role = "<strong>The Supreme Preserver & Sustainer of Life.</strong> Vishnu is the caring, all-pervading divine principle that maintains cosmic balance, nurtures living beings, and preserves universal order (Dharma) across all dimensions.";
      analogy = "If the universe is an operating system, Vishnu is the active runtime engine and security system that prevents crashes, repairs errors, and keeps all living software running in harmony.";
      symbolism = "Reclines upon <em>Ananta Shesha</em> (the cosmic serpent representing infinite time and coiled potential) floating on the causal ocean. Holds the <strong>Discus (Sudarshana)</strong> symbolizing the wheel of time and truth that slices illusion; the <strong>Conch (Panchajanya)</strong> symbolizing the awakening sound of divine truth; the <strong>Lotus (Padma)</strong> representing spiritual purity untouched by worldly mud; and the <strong>Mace (Kaumodaki)</strong> representing supreme moral power.";
    } else if (id === "gen-shiva" || id === "sp-sadashiva") {
      role = "<strong>The Supreme Transformer & Master of Pure Consciousness.</strong> Shiva is not 'destruction' in an evil sense, but necessary recycling, renewal, and spiritual liberation. He dissolves outdated, rigid forms and illusions so fresh life, evolution, and higher awareness can emerge.";
      analogy = "Like autumn shedding dry leaves so spring can blossom, or deep restful sleep that resets the mind. Shiva represents the calm, unshakeable witness consciousness deep within every human soul.";
      symbolism = "Matted hair holds the <strong>Crescent Moon</strong> (mastery over the cycles of the mind and time); <strong>Third Eye</strong> on forehead (intuitive vision that incinerates ignorance); <strong>Snake around neck</strong> (fearlessness mastering death and toxic ego); <strong>Trident (Trishula)</strong> (harmony across past, present, and future, and the 3 qualities of nature); <strong>Nandi the Bull</strong> (power, righteousness, and virility calmed by pure devotion).";
    } else if (id === "gen-brahma" || id === "vp-brahma" || id === "lord-brahma") {
      role = "<strong>The Master Architect & Secondary Creator.</strong> Manifested upon the golden lotus from Vishnu's navel, Brahma engineers the physical universe—blueprints of galaxies, dimensions, biology, physical laws, and the four sacred Vedas (knowledge).";
      analogy = "Think of Brahma as the Chief Systems Architect or Lead Civil Engineer who receives the creative inspiration and drafts the physical forms, species, and planetary ecosystems.";
      symbolism = "Four heads looking in the 4 cardinal directions (omnipresent knowledge and 360-degree vision); white beard (timeless wisdom); rides <strong>Hamsa the Swan</strong> (divine discrimination—the mythical gift of separating milk from water, or eternal truth from passing illusion).";
    } else if (id === "gen-ganesha" || id === "sp-ganesha") {
      role = "<strong>The Beloved Remover of Obstacles & Lord of Wisdom.</strong> Revered as the patron of intellect, learning, and auspicious new beginnings. Traditionally, Ganesha is honored first before embarking on any new venture, journey, book, or enterprise.";
      analogy = "Like a universal GPS compass and master troubleshooter. Aligning with Ganesha's energy helps clear both inner mental anxiety and external roadblocks.";
      symbolism = "<strong>Elephant head</strong> represents immense intelligence, memory, and calm strength; <strong>large ears</strong> symbolize listening more than speaking; <strong>small mouth</strong> represents speaking thoughtfully; <strong>broken tusk</strong> symbolizes personal sacrifice for wisdom (used as a pen to transcribe the epic Mahabharata); <strong>mouse mount (Mooshika)</strong> represents restless worldly desires tamed and mastered by intellect.";
    } else if (id === "gen-kartikeya" || id === "sp-kartikeya") {
      role = "<strong>Commander-in-Chief of Celestial Forces & Deity of Courage.</strong> Also known as Skanda or Murugan, he represents spiritual discipline, fearlessness, and victory over inner demonic tendencies.";
      analogy = "The archetypal spiritual warrior who leads the inner battle against ego, lethargy, procrastination, and spiritual blindness.";
      symbolism = "Holds the <strong>Vel (Sacred Spear)</strong>, symbolizing razor-sharp intellect, deep penetration of truth, and spiritual focus; rides a <strong>Peacock</strong>, symbolizing the conquering and transcendence of vain pride.";
    } else if (id.includes("shakti") || id.includes("parvati") || id.includes("lakshmi") || id.includes("saraswati") || category.includes("Tridevi")) {
      role = "<strong>The Divine Feminine Energy (Adi Parashakti & Tridevi).</strong> In Sanatan philosophy, consciousness without energy is inactive (Shiva without Shakti cannot move). The Divine Mothers represent the dynamic, creative forces of wisdom, abundance, love, and nature.";
      analogy = "Consciousness is the computer hardware; Shakti is the electric power that brings it to life. Consciousness and Energy are two indivisible aspects of the single reality.";
      symbolism = "<strong>Saraswati</strong> holds the Veena lute (harmony of science and art); <strong>Lakshmi</strong> holds lotuses and showers gold (holistic spiritual fulfillment and material prosperity); <strong>Parvati / Durga</strong> holds sacred weapons (protective motherly strength fearlessly destroying negativity).";
    } else if (id.includes("avatar") || id.includes("rama") || id.includes("krishna") || id.includes("narasimha") || id.includes("varaha") || id.includes("matsya") || id.includes("kurma") || category.includes("Avatara")) {
      role = "<strong>A Divine Descent (Avatara).</strong> In Sanatan Dharma, 'Avatara' literally means 'one who descends'. Whenever moral balance (Dharma) on earth collapses under tyranny or darkness, divine consciousness takes physical form to restore righteousness and guide humanity.";
      analogy = "Like a compassionate teacher entering a confused classroom to restore order, or an essential operating system patch deployed to clean an infected system.";
      symbolism = "<strong>Sri Rama</strong> embodies the ideal human being of uncompromising duty, virtue, and compassion; <strong>Sri Krishna</strong> delivers the timeless philosophy of the Bhagavad Gita (selfless action and devotion); <strong>Narasimha</strong> shows the divine will appear anywhere—even bursting from a stone pillar—to protect innocent faith.";
    } else if (id.includes("surya") || id.includes("aditya")) {
      role = "<strong>The Sun God (Surya Narayana) & The 12 Adityas.</strong> Revered as the visible eye of God in the sky (Pratyaksha Devata), providing vital warmth, life-giving light, photosynthesis, and spiritual clarity (Gayatri Mantra) to all living creatures.";
      analogy = "The physical power plant and beating heart of our planetary system. Without the Sun, neither biological life nor conscious experience could exist on earth.";
      symbolism = "Rides a celestial chariot drawn by <strong>7 golden horses</strong>, representing the 7 colors of visible light, the 7 days of the week, and the 7 meters of classical Vedic poetry; guided by Aruna, the charioteer of dawn.";
    } else if (id.includes("rishi") || id.includes("sage") || id.includes("kashyapa") || id.includes("daksha") || id.includes("saptarishi") || category.toLowerCase().includes("sage")) {
      role = "<strong>The Primordial Sages & Custodians of Wisdom (Rishis & Prajapatis).</strong> Not gods, but highly evolved conscious beings (enlightened seers) who meditated upon the fundamental truths of the cosmos and transcribed the Vedas and moral sciences for humanity.";
      analogy = "Like pioneering scientists, philosophers, and spiritual masters whose deep inquiry discovered the laws of nature and codified them into perennial wisdom for civilization.";
      symbolism = "Simple ascetic robes, meditative posture, and sacred water pots (Kamandalu) represent worldly detachment, pure focus, and deep dedication to universal truth rather than passing material wealth.";
    } else if (id.includes("indra") || id.includes("varuna") || id.includes("agni") || id.includes("vayu") || category.toLowerCase().includes("deva") || category.toLowerCase().includes("lokapala")) {
      role = "<strong>Celestial Powers & Elemental Governors (Devas & Lokapalas).</strong> Celestial administrators governing the forces of nature—atmospheric storms and leadership (Indra), fire and metabolism (Agni), waters and oceans (Varuna), and life-breath (Vayu).";
      analogy = "Like executive ministers of a global government cabinet, each managing a specific infrastructure sector (energy grid, water supply, atmosphere, and environmental protection) to keep the world habitable.";
      symbolism = "<strong>Indra's Vajra (Thunderbolt)</strong> represents unstoppable spiritual willpower and the lightning flash of insight piercing mental clouds; <strong>Airavata (White Elephant)</strong> represents the majestic, life-giving monsoon clouds.";
    } else if (id.includes("garuda") || id.includes("shesha") || id.includes("naga")) {
      role = "<strong>Divine Celestial Guardians (Ananta Shesha & Lord Garuda).</strong> The eternal companions of the Supreme: Ananta Shesha represents foundational stability supporting universal structures, while Garuda represents swift spiritual elevation and Vedic melody.";
      analogy = "The cosmic equilibrium between gravitational resting balance (the supportive foundation) and soaring kinetic velocity (the eagle traversing infinite space).";
      symbolism = "Garuda's radiant golden wings symbolize the soaring verses of the Sama Veda carrying prayers to heaven; Shesha's thousand hoods represent the infinite starry dimensions held peacefully in divine protection.";
    } else if (id.includes("hanuman")) {
      role = "<strong>Lord Hanuman (The Chiranjeevi Rudra Avatara).</strong> The immortal embodiment of selfless service, humble devotion (Bhakti), supreme physical courage, and absolute mastery over mind and senses.";
      analogy = "The inspiring testament that pure love, selfless dedication, and humility unlock boundless, superhuman potential within any soul.";
      symbolism = "Monkey form represents the human mind—which is naturally restless and leaping—made completely steady, focused, and invincible through pure surrender to the Supreme (Rama). Holds the Gada (mace) of moral resolve.";
    } else if (id.includes("2026") || id.includes("mewar") || id.includes("wodeyar") || id.includes("jaisalmer") || id.includes("travancore") || id.includes("ahilyabai") || id.includes("chola") || id.includes("vijayanagara") || id.includes("pratap") || category.includes("Living")) {
      role = "<strong>Living Royal Houses & Sacred Custodians (to 2026 AD).</strong> Demonstrating the unbroken millennial continuity of Sanatan Dharma from cosmic epochs down to the 21st century. Rather than mythical abstractions lost to time, these lineages—from the Maharanas of Mewar in Udaipur (hereditary Diwans of Shri Eklingji) to the Wodeyars of Mysore (Chamundeshwari patrons), the Bhati Yaduvamsha of Jaisalmer, the Padmanabhadasas of Travancore, Queen Ahilyabai Holkar who rebuilt the 12 Jyotirlingas, and the Shankaracharya Amnaya Peethas—continue active temple custody, social welfare, and Vedic rites in 2026.";
      analogy = "An unbroken banyan tree whose living roots stretch from ancient Vedic rishis directly into the present soil of 2026, preserving sacred rituals, architectural wonders, and cultural memory across dozens of centuries.";
      symbolism = "Symbolized by the <strong>Eternal Solar & Lunar Standards</strong>, the sacred <strong>Sengol Scepter</strong> of state, and the ongoing daily Vedic worship at Kashi Vishwanath, Somnath, Mahakaleshwar, and Padmanabhaswamy sanctums.";
    } else if (id.includes("vamsha") || id.includes("king") || id.includes("emperor") || id.includes("bharata") || id.includes("ikshvaku") || id.includes("mandhata") || id.includes("raghu") || id.includes("kuru") || id.includes("pandav") || id.includes("abhimanyu") || id.includes("parikshit") || id.includes("dasharatha") || id.includes("kusha") || id.includes("atithi") || id.includes("manvantara") || id.includes("manu") || id.includes("himavat") || id.includes("daksha") || category.includes("Dynasty") || category.includes("Suryavamsha") || category.includes("Chandravamsha") || category.includes("Royalty") || category.includes("Kings") || category.includes("Manvantara")) {
      role = "<strong>Righteous Royal Dynasties & Guardians of Raja Dharma.</strong> In Sanatan Dharma, kingship and human civilization were divinely ordained duties (Raja Dharma) to protect the vulnerable, maintain ecological harmony, and foster ethical virtue. The Solar and Lunar dynasties connect transcendental spiritual realities with the living history, moral trials, and triumphs of humanity.";
      analogy = "Think of these monarchs as constitutional trustees who viewed their royal throne not as private property to exploit, but as a sacred public duty to serve the well-being of all living beings (Sarva Bhuta Hite Ratah).";
      symbolism = "Symbolized by the <strong>Royal Scepter (Danda)</strong> of righteous justice tempered with mercy, the <strong>Imperial Chariot</strong> traversing all ten directions to protect virtue, and the unbroken ancestral lineage carrying Vedic ideals across cosmic epochs.";
    } else if (id.includes("daitya") || id.includes("prahlada") || id.includes("mahabali") || id.includes("banasura") || category.includes("Daitya")) {
      role = "<strong>The Daitya Vaishnava Devotees (Mahabhaktas).</strong> In Sanatan Dharma, spiritual greatness is determined exclusively by character, consciousness, and devotion—never by race, caste, or birth. Despite being born into the ambitious Daitya race, figures like Prahlada and Mahabali transcended demonic tendencies and are glorified as the supreme embodiments of selfless love (Bhakti).";
      analogy = "The inspiring truth that divine grace is universally accessible to any soul anywhere—like a pristine lotus blooming untouched from the deepest mud.";
      symbolism = "Represented by unshakeable courage in the face of tyranny, and unconditional generosity offering even one's own head in humble surrender to Truth.";
    } else if (id === "sp-jyoti-somnath") {
      role = "<strong>1. Somnath — Healer of Mental Darkness & Restorer of Vitality.</strong> In the Shiva Purana (Kotirudra Samhita), the Moon God (Chandra) was cursed with consumptive decay by King Daksha for neglecting his 26 other wives in favor of Rohini. Plunged into total darkness, Chandra prayed at the Prabhas seashore. Lord Shiva restored his brilliance and placed the waxing crescent upon His own brow.";
      analogy = "Think of Somnath as the cosmic sanctuary of mental and emotional renewal. Just as the moon wanes into darkness yet waxes back into full light, no matter how exhausted, depleted, or broken one feels, connecting with the supreme source restores vitality and inner radiance.";
      symbolism = "The <strong>Crescent Moon (Chandra)</strong> resting on Shiva's matted locks signifies complete mastery over the emotional tides, psychological cycles, and mental anxieties of life.";
    } else if (id === "sp-jyoti-mallikarjuna") {
      role = "<strong>2. Mallikarjuna — The Haven of Reconciled Hearts.</strong> Situated atop Srisailam mountain. When Lord Kartikeya left Kailasha in sorrow feeling wronged in the divine race around the world, Shiva and Parvati descended as the fragrant Jasmine (Mallika) and the strong white tree (Arjuna) to stay beside their estranged son without suffocating him.";
      analogy = "Like loving parents who pitch a warm, comforting tent right down the road from a hurt child who needed space, patiently offering unconditional love and emotional safety until the family heals.";
      symbolism = "<strong>Mallika (Jasmine / Parvati)</strong> entwined around <strong>Arjuna (Sacred Tree / Shiva)</strong> symbolizes fragrant, tender devotion embracing immovable strength and patience.";
    } else if (id === "sp-jyoti-mahakal" || id === "sp-jyoti-mahakaleshwar") {
      role = "<strong>3. Mahakaleshwar — The Conqueror of Mortality, Fear & Time.</strong> Manifested in ancient Ujjain (Avanti) when the tyrannical demon Dushana attacked innocent meditating devotees. Lord Shiva erupted as the ferocious 'Maha-Kala' (Great Time) and incinerated the demon with a single roar of HUM.";
      analogy = "The ultimate psychological liberator. When people are gripped by primal terror—especially the fear of death, aging, or mortal danger—this energy reveals that physical time cannot destroy the eternal conscious soul.";
      symbolism = "The only Jyotirlinga that faces South (<strong>Dakshinamurti</strong>, confronting the realm of death/Yama), and the sacred <strong>Bhasma Aarti</strong> (consecration with fresh ash), reminding humanity that all material vanity burns to dust, leaving only pure, indestructible spirit.";
    } else if (id === "sp-jyoti-omkareshwar") {
      role = "<strong>4. Omkareshwar — The Cosmic Acoustic Blueprint (A-U-M).</strong> Situated on Mandhata island where the holy Narmada River naturally divides and carves the earth into the precise Sanskrit glyph for 'OM' (ॐ). Manifested to liberate the Vindhya mountains from pride and bless Emperor Mandhata.";
      analogy = "The carrier wave or foundational frequency of reality. Just as white light contains all the colors of the rainbow, the primordial frequency OM contains all languages, atoms, and musical vibrations in creation.";
      symbolism = "The island's natural geographic topography carved by the sacred Narmada forms the eternal glyph <strong>OM (ॐ)</strong>, representing the unity of the waking (A), dreaming (U), and deep sleep (M) states with the silent witness (Turiya).";
    } else if (id === "sp-jyoti-kedarnath") {
      role = "<strong>5. Kedarnath — The Summit Haven for Karmic Purification.</strong> Perched at 11,755 feet amidst Himalayan glaciers. After the catastrophic Kurukshetra war, the guilt-ridden Pandavas sought Shiva to expiate the trauma and moral weight of kin-slaying. Shiva tested their endurance before granting supreme redemption.";
      analogy = "The summit hospital for a burdened soul. When conscience is weighed down by deep trauma, remorse, or moral failures, making the arduous inner climb of sincere humility and surrender cleanses even the heaviest guilt.";
      symbolism = "The natural, irregular <strong>triangular hump of granite</strong> resembling the back of a divine bull diving into the earth, signifying that divine grace lies hidden within the tough ground of reality for those persistent enough to seek it.";
    } else if (id === "sp-jyoti-bhimashankar") {
      role = "<strong>6. Bhimashankar — Destroyer of Totalitarian Tyranny.</strong> Situated in the Sahyadri mountains at the source of the Bhima River. Manifested to annihilate the cruel demon Bhima (son of Kumbhakarna) who imprisoned pious King Kamrupeshwar for refusing to worship a mortal despot.";
      analogy = "The ultimate cosmic constitutional safeguard. When tyrannical bullies or abusive powers become so arrogant that they believe they are above all universal laws, divine intervention shatters their reign and frees the oppressed.";
      symbolism = "Shiva's intense divine exertion poured forth as sweat, giving birth to the life-giving <strong>Bhima River</strong>, symbolizing that divine justice actively nourishes and replenishes the earth.";
    } else if (id === "sp-jyoti-kashi" || id === "sp-jyoti-kashi-vishwanath") {
      role = "<strong>7. Kashi Vishwanath — The Epicenter of Universal Liberation (Moksha).</strong> The eternal city of Varanasi, held aloft on Shiva's Trident (Trishula) independent of the tectonic plates of the mortal world. Here, Shiva whispers the 'Taraka Mantra' into the ear of every departing soul, freeing them from the cycle of rebirth.";
      analogy = "The grand exit terminal of cosmic existence. In the journey through thousands of lifetimes, Kashi is the sacred portal where the revolving door of reincarnation stops, granting eternal peace to the traveler.";
      symbolism = "The <strong>Trident (Trishula)</strong> holding Kashi above the earth symbolizes an enlightened state of mind elevated above the three worldly traps: physical distress (Adhibhautika), mental turbulence (Adhyatmika), and unseen fate (Adhidaivika).";
    } else if (id === "sp-jyoti-trimbak" || id === "sp-jyoti-trimbakeshwar") {
      role = "<strong>8. Trimbakeshwar — The Trinity United & Source of River Godavari.</strong> Situated near Nashik where the sacred river Gautami (Godavari) descends. Revealed to Sage Gautama after he was falsely accused of cow-slaughter by jealous ascetics, completely exonerating the sage and ending a 24-year drought.";
      analogy = "The supreme court of moral vindication. When you are slandered, falsely accused, or misunderstood by the world, patience, truth, and faith trigger divine grace that cleanses your name and pours blessings on the entire community.";
      symbolism = "A unique cavity containing <strong>three natural lingams representing Brahma (Creation), Vishnu (Preservation), and Rudra (Dissolution)</strong> adorned with a gem-studded crown, demonstrating that all three cosmic functions emanate from one unified reality.";
    } else if (id === "sp-jyoti-vaidyanath") {
      role = "<strong>9. Vaidyanath — The Supreme Divine Physician (Vaidya).</strong> Located in Deoghar (Santhal Parganas). The demon king Ravana performed extreme penance, severing his own heads into sacrificial fire. Shiva appeared as the compassionate doctor, healing Ravana's wounds, rejoining his heads, and gifting the Jyotirlinga.";
      analogy = "The ultimate physician for both body and psyche. Even when self-destructive habits, destructive pride, or catastrophic choices have torn your life apart, sincere surrender allows divine healing to mend every severed piece.";
      symbolism = "Shiva in the form of <strong>Amritamaya Vaidya (Nectarine Healer)</strong>, proving that the Divine will tend even to a flawed, prideful seeker the instant they appeal with genuine devotion.";
    } else if (id === "sp-jyoti-nageshwar") {
      role = "<strong>10. Nageshwar — The Master of Serpents & Shield from All Toxins.</strong> Located in the Darukavana forest near the Gujarat coast. Manifested to protect the pious devotee Supriya from the demon Daruka and his sea monsters, imparting the sacred Pashupata weapon.";
      analogy = "The impenetrable security field against external venom. When surrounded by toxic work environments, malicious gossip, or corrosive relationships, this energy renders you entirely immune to emotional and spiritual poison.";
      symbolism = "Encircled by deadly hooded <strong>Cobras (Nagas)</strong> that rest placidly as divine ornaments, showing that when animal passions, anger, and deadly venom are surrendered to consciousness, they transform into protective powers.";
    } else if (id === "sp-jyoti-rameshwar" || id === "sp-jyoti-rameshwaram") {
      role = "<strong>11. Rameshwaram — The Bridge of Divine Harmony & Mutual Devotion.</strong> Consecrated by Lord Sri Rama (the 7th Avatara of Vishnu) on the southern shore before crossing the ocean to Lanka. Rama worshipped Shiva for victory, while Shiva proclaimed: 'Rama is My own heart'.";
      analogy = "The ultimate spiritual bridge between seeming opposites. Instead of religious factions arguing over who is greater (Vishnu or Shiva), here the two supreme archetypes bow to and honor one another with boundless love.";
      symbolism = "Crafted by Mother Sita's own hands out of <strong>coastal sea sand (Saikata Lingam)</strong>, proving that simple, pure love from humble soil holds vastly greater spiritual power than the most lavish monuments of gold.";
    } else if (id === "sp-jyoti-grishneshwar") {
      role = "<strong>12. Grishneshwar — The Triumph of Forgiving, Gentle Faith.</strong> Located near the Ellora caves. The saintly woman Ghushma made 101 earthen Shivalingas every day. When her jealous co-wife sister murdered Ghushma's son and threw him in the lake, Ghushma refused to retaliate and continued her worship; Shiva restored her boy to life.";
      analogy = "The quiet, unshakeable victory of gentle patience over cruel malice. When you refuse to poison your own heart with revenge or bitterness, divine grace resurrects your life and blesses even those who wronged you.";
      symbolism = "The <strong>101 Earthen Lingams (Parthiva Lingams)</strong> shaped daily from clay and dissolved in water, teaching that steady daily gratitude and ego-less rituals weave an indestructible safety net over one's life.";
    } else if (id === "sp-jyotirlingas" || id.includes("jyotirlinga")) {
      role = "<strong>The 12 Sacred Jyotirlingas — Infinite Columns of Cosmic Light.</strong> In the Shiva Purana (Vidyeshvara Samhita), when Brahma and Vishnu argued over cosmic supremacy, a colossal pillar of radiant, measureless fire (Stambha) pierced through all dimensions. The 12 Jyotirlingas are the eternal physical portals where this infinite light anchors into our planet.";
      analogy = "Like cosmic power substations or gravitational anchors of spiritual energy across the subcontinent, connecting the physical earth directly to boundless transcendent light.";
      symbolism = "The Lingam has neither a beginning root nor an ending peak, reminding humanity that the infinite creative consciousness of the cosmos can never be measured, conquered, or owned by finite ego.";
    } else if (id === "sp-panchabrahma" || id.startsWith("sp-sadyojata") || id.startsWith("sp-vamadeva") || id.startsWith("sp-aghora") || id.startsWith("sp-tatpurusha") || id.startsWith("sp-ishana")) {
      role = "<strong>Panchabrahma — The Five Cosmic Faces & Dynamic Functions of Reality.</strong> In Shaiva philosophy, the Supreme governs reality through 5 eternal cosmic actions (Pancha Kritya): Sadyojata (Creation), Vamadeva (Sustenance), Aghora (Dissolution & Re-absorption), Tatpurusha (Concealment of truth to allow free will), and Ishana (Divine Grace & Enlightenment).";
      analogy = "The full lifecycle architecture of any complex universe or software operating system: Initialization/Deployment, Runtime Maintenance, Garbage Collection/Recycling, Encryption/Hiding of backend complexity, and user Liberation/Enlightenment.";
      symbolism = "The five faces gaze toward the <strong>West (White/Earth), North (Red/Water), South (Dark/Fire), East (Yellow/Air), and Zenith/Sky (Crystal/Consciousness)</strong>, ensuring that not a single coordinate in existence is left unprotected.";
    } else if (id === "sp-ashtamurti" || id.includes("ashtamurti") || id.startsWith("sp-sharva") || id.startsWith("sp-bhava") || id.startsWith("sp-rudra-fire") || id.startsWith("sp-ugra") || id.startsWith("sp-bhima") || id.startsWith("sp-ishana-sun") || id.startsWith("sp-mahadeva-moon") || id.startsWith("sp-pashupati")) {
      role = "<strong>Ashtamurti — The Eightfold Cosmic Body of the Supreme.</strong> Shiva Purana reveals that the physical universe is not separate from the Divine; the cosmos is Shiva's tangible body. Comprising the 5 physical elements (Earth, Water, Fire, Air, Space), the 2 cosmic luminaries (Sun and Moon), and the conscious observing Soul (Pashupati/Yajamana).";
      analogy = "Ecological holistic pantheism. Just as your cells, blood, and thoughts form your single human body, the entire natural ecosystem, planetary orbits, and living souls form the visible living body of God.";
      symbolism = "Sacred reverence for ecology: polluting the earth or air is seen as harming the visible body of the Divine. Every living breath you draw is a communion with the cosmic form.";
    } else if (id === "sp-kailasha-family") {
      role = "<strong>The Holy Family of Mount Kailasha — Harmony of Opposites.</strong> The supreme archetype of divine family life, radical mutual respect, and unconditional coexistence. Living in austere simplicity amidst snowy peaks, demonstrating that real wealth is inner peace, not material hoarding.";
      analogy = "The impossible dinner table made peaceful: Shiva's serpent should devour Ganesha's mouse; Parvati's lion should hunt Shiva's bull; Kartikeya's peacock should strike Shiva's snakes. Yet on Kailasha, all natural predators live in serene harmony through divine love.";
      symbolism = "Demonstrates that spiritual wisdom does not seek to homogenize people or destroy differences; rather, it elevates consciousness so that completely opposing natures can thrive together in peace.";
    } else if (id === "sp-shubha-labha") {
      role = "<strong>Shubha & Labha — Auspiciousness & Righteous Prosperity.</strong> The sons of Lord Ganesha and Goddesses Riddhi (Intellectual Brilliance) and Siddhi (Spiritual Accomplishment).";
      analogy = "The golden rule of enterprise: 'Shubha' means ethical, good intentions, and 'Labha' means profit or benefit. In Sanatan philosophy, profit is celebrated only when born from ethical, auspicious goodness.";
      symbolism = "Inscribed on thresholds, accounting books, and store doors across India, reminding everyone that honest business rooted in virtue brings enduring happiness.";
    } else if (id === "sp-santoshi-mata") {
      role = "<strong>Santoshi Mata — The Goddess of Radiant Contentment & Gratitude.</strong> Born on Raksha Bandhan as the daughter of Lord Ganesha, responding to the wish for a loving sister for Shubha and Labha.";
      analogy = "The antidote to endless consumerist dissatisfaction and comparison. When a person cultivates inner satisfaction (Santosha), anxiety vanishes and life feels abundant.";
      symbolism = "Holds a bowl of sweet chickpeas and jaggery, representing simple, wholesome sweetness in everyday life, free from bitter envy.";
    } else if (id === "sp-ashokasundari" || id === "sp-nahusha-yayati") {
      role = "<strong>Goddess Ashokasundari & The Royal Lineage of Nahusha and Yayati.</strong> The daughter of Shiva and Parvati, created from the wish-fulfilling Kalpavriksha tree to dispel Mother Parvati's loneliness when Shiva was in deep meditation.";
      analogy = "The living embodiment of comfort and emotional solace, bridging the transcendental realm of Mount Kailasha with the mortal heroic dynasties of earth.";
      symbolism = "Her name means 'The Beautiful Destroyer of Grief' (A-shoka = without sorrow), symbolizing that divine grace enters family life to transform sorrow into radiant purpose.";
    } else if (id === "sp-ayyappa") {
      role = "<strong>Lord Ayyappa (Hariharaputra / Dharma Shasta).</strong> Born from the cosmic union of Lord Shiva and Lord Vishnu in His enchantress Mohini form to vanquish the demoness Mahishi who had a boon that only a son of Shiva and Vishnu could defeat her.";
      analogy = "The supreme unifier of spiritual paths. Breaking down sectarian walls between Shaivism (ascetic contemplation) and Vaishnavism (active loving preservation), calling all devotees to equal brotherhood.";
      symbolism = "The seated yogic posture with knees bound by the <strong>Yoga-Patta</strong> band symbolizes unwavering self-control, celibacy, equality (every pilgrim to Sabarimala is addressed equally as 'Swami'), and mastery over the senses.";
    } else if (id === "sp-manasa-devi" || id === "sp-astika") {
      role = "<strong>Goddess Manasa Devi & Sage Astika.</strong> Manasa is the mind-born serpent daughter of Lord Shiva and sister of Vasuki, who protects humanity from venom and infectious illnesses; her son Sage Astika famously halted King Janamejaya's vengeful Sarpa Satra (serpent sacrifice).";
      analogy = "The voice of restorative justice and restraint. When righteous rage threatens to wipe out an entire community or species in retaliatory revenge, this energy steps in with wisdom to stop the cycle of violence.";
      symbolism = "Holds live serpents without fear, symbolizing that when human consciousness masters its own toxic instincts, wild venomous nature becomes a protective ally.";
    } else if (id === "sp-nandi-pramatha" || id === "sp-bhringi" || id === "sp-chandeshwara") {
      role = "<strong>Nandi Deva & The Pramatha Ganas (Bhringi & Chandeshwara).</strong> The beloved celestial companions and gatekeepers of Kailasha. Nandi is the master of righteousness and the chief bull-vehicle of Shiva; Bhringi is the sage who learned to worship Shiva and Shakti as indivisible; Chandeshwara is the archetype of fiery, unwavering focus.";
      analogy = "The devoted inner circle and guardian stewards. They represent raw, unconventional seekers—the outcasts, eccentrics, and intense ascetics—welcomed and embraced unconditionally in Shiva's court.";
      symbolism = "<strong>Nandi</strong> sits facing the Shivalingam with single-pointed, relaxed alertness, teaching humanity that true meditation is not rigid strain, but calm, devoted, waiting presence.";
    } else if (id === "sp-bhairava-rudras" || id === "sp-kaala-bhairava" || id === "sp-ashta-bhairavas" || id.includes("bhairava")) {
      role = "<strong>Kaala Bhairava & The Fierce Guardians of Time.</strong> Born from Shiva's third eye to shatter the fifth head of Lord Brahma when Brahma succumbed to ego and falsehood. Bhairava guards sacred Kashi and frees seekers from the fear of mortality and negative influences.";
      analogy = "The cosmic immune response. When spiritual vanity, moral hypocrisy, or dangerous arrogance threaten the soul, gentle words will not suffice; the fierce truth intervenes to cut away the cancerous ego.";
      symbolism = "Accompanied by a loyal <strong>Black Dog</strong> (symbolizing vigilance, fierce loyalty, and the transcendence of superficial social taboos); carries the <strong>Khatvanga</strong> skull-staff reminding all that worldly status ends in dust.";
    } else if (id === "sp-virabhadra-bhadrakali" || id === "sp-sati-peethas") {
      role = "<strong>Virabhadra, Bhadrakali & The 51 Shakti Peethas.</strong> Emanated from Shiva's matted lock in grief and fury when Sati self-immolated at King Daksha's arrogant ritual. Virabhadra dismantled the sacrifice, destroyed the king's haughty pride, and restored moral balance.";
      analogy = "The thunderous collapse of abusive, self-righteous institutions. When powerful authorities mistreat the innocent and conduct religious ceremonies out of vanity and malice, universal justice brings their empire crashing down.";
      symbolism = "Carries blazing swords and tridents; the subsequent dispersion of Sati's sacred limbs consecrated the Indian subcontinent with <strong>51 Shakti Peethas</strong>, transforming deep grief into fertile sanctums of empowerment.";
    } else if (id === "sp-sharabha") {
      role = "<strong>Lord Sharabha (The Pacifier of Narasimha).</strong> When Lord Vishnu's fierce lion-man avatara Narasimha remained engulfed in terrifying, unstoppable cosmic fury after slaying Hiranyakashipu, Shiva manifested as the eight-legged winged creature Sharabha to embrace and soothe Narasimha back into peaceful cosmic balance.";
      analogy = "The supreme de-escalator. When even the righteous anger needed to defeat evil threatens to consume everything in its aftermath, a higher, cooler wisdom must intervene to pacify the warrior and restore gentle peace.";
      symbolism = "A winged mythical beast combining bird (soaring intellect) and lion (heroic strength), showing that divine wisdom transcends the wildest passions.";
    } else if (id === "sp-durvasa-pippalada" || id === "sp-ashwatthama-rudra") {
      role = "<strong>The Sages of Intense Tapasya (Durvasa, Pippalada & Ashwatthama).</strong> Sages born with the intense fiery energy of Lord Rudra to test the moral integrity and spiritual patience of gods, kings, and mortals.";
      analogy = "The rigorous stress-testers of life. Like a master inspector subjecting a bridge to extreme stress tests to verify whether its metal is genuine or brittle.";
      symbolism = "Durvasa's unpredictable boons and curses teach that spiritual power without emotional equanimity burns both the holder and the bystander.";
    } else if (id === "sp-vishnu-brahma" || id === "sp-vishnu-avatars" || id === "sp-brahma-creation") {
      role = "<strong>The Trinity Emanations (Vishnu & Brahma from Shiva's Cosmic Form).</strong> According to the Shiva Purana (Rudra Samhita 1.9), Lord Sadashiva emanates Vishnu from His left limb for cosmic sustenance, and Brahma from His right limb for cosmic architectural projection.";
      analogy = "The balanced three-legged stool of reality: Creation (right), Preservation (left), and Transformation (center). Without any one of the three, the cosmic balance collapses.";
      symbolism = "Lord Vishnu offers 1,000 blue lotuses to Shiva—and when one lotus goes missing, Vishnu offers His own lotus-eye without hesitation, receiving the invincible <strong>Sudarshana Chakra</strong> in recognition of supreme devotion.";
    } else if (id.includes("rudra")) {
      role = "<strong>The 11 Rudras & Cosmic Regeneration Forces.</strong> Emanating from the supreme consciousness to govern the fierce, purifying cycles of time, thunder, storm, and the dissolution of outdated forms.";
      analogy = "The controlled demolition and cleansing storms of nature, breaking down stale structures to make fertile soil for new growth.";
      symbolism = "Armed with the Pinaka bow and lightning trident, dissolving fear and guiding seekers beyond the threshold of mortality.";
    } else if (id.includes("tattva") || id.includes("mahat") || id.includes("ahankara") || id.includes("prakriti") || id.includes("purusha") || id.includes("bhutas") || id.includes("tanmatra")) {
      role = "<strong>A Fundamental Cosmic Building Block (Tattva).</strong> In Vedic metaphysics (Samkhya & Vedanta), creation is a systematic, scientific evolution descending from subtle consciousness down into tangible physical matter (elements, senses, and the material universe).";
      analogy = "Similar to physics evolving from pure quantum potential fields into subatomic particles, atoms, molecules, and solid matter, or a software development stack from abstract source code to pixels on a screen.";
      symbolism = "<strong>Purusha</strong> is the silent conscious witness; <strong>Prakriti</strong> is the material nature matrix of 3 Gunas (Clarity, Dynamism, Inertia); <strong>Mahat</strong> is cosmic intelligence; <strong>Ahankara</strong> is the principle of individual identity.";
    } else if (id.includes("loka") || id.includes("kala")) {
      role = "<strong>Multidimensional Realms & Cyclic Time (Lokas & Kala Chakra).</strong> Sanatan Dharma presents a vast multidimensional cosmos of 14 interconnected dimensional planes and perpetual, rhythmic cycles of time (Yugas, Kalpas, and Mahapralaya).";
      analogy = "Modern multidimensional physics and string theory combined with the cyclic cosmological model of expanding and contracting cosmic epochs.";
      symbolism = "<strong>Kala Chakra (The Wheel of Time)</strong> has no absolute beginning or end, cycling through golden, silver, bronze, and iron eras of human consciousness in perpetual cosmic evolution.";
    } else {
      role = `<strong>Divine Cosmic Manifestation:</strong> ${summary || details || name}. In the sacred genealogical tree of Sanatan Dharma, this entity fulfills a specialized role in governing universal laws, ancestral virtues, and spiritual evolution.`;
      analogy = "Think of this entity as an essential branch in the cosmic tree of life, connecting transcendental spiritual principles with earthly history, moral duty, and human consciousness.";
      symbolism = (node.consort ? `Accompanied by consort <strong>${node.consort}</strong> representing the active dynamic energy (Shakti). ` : "") +
                  (node.vahana ? `Associated with mount <strong>${node.vahana}</strong> symbolizing mastery over nature's forces. ` : "") +
                  (node.ayudha ? `Wields <strong>${node.ayudha}</strong> representing spiritual protection, wisdom, and moral authority.` : "Embodies divine grace, righteousness, and cosmic balance.");
    }

    return { role, analogy, symbolism };
  }

  openDetailDrawer(node) {
    const drawer = document.getElementById("detail-drawer");
    if (!drawer) return;

    const isGod = this.isGodTradition;

    // Header elements
    document.getElementById("drawer-category").textContent = node.category || node.tradition || "Divinity";
    document.getElementById("drawer-title").textContent = node.name;
    document.getElementById("drawer-sanskrit").textContent = node.sanskrit || "";

    // Populate Beginner & Global Layman's Guide
    const layman = this.getLaymanGuide(node);
    const roleEl = document.getElementById("drawer-layman-role");
    const analogyEl = document.getElementById("drawer-layman-analogy");
    const symbolismEl = document.getElementById("drawer-layman-symbolism");
    const symbolismWrap = document.getElementById("drawer-layman-symbolism-wrapper");

    if (roleEl) roleEl.innerHTML = layman.role;
    if (analogyEl) analogyEl.innerHTML = layman.analogy;
    if (symbolismEl && symbolismWrap) {
      if (layman.symbolism && layman.symbolism.trim().length > 0) {
        symbolismWrap.style.display = "flex";
        symbolismEl.innerHTML = layman.symbolism;
      } else {
        symbolismWrap.style.display = "none";
      }
    }

    // Divine Profile Grid (Parent, Consort, Mount, Weapons)
    const genealogySection = document.getElementById("drawer-genealogy-section");
    if (isGod) {
      genealogySection.style.display = "block";
      document.getElementById("drawer-parent-god-val").textContent = node.parentName || "Anadi (Beginningless Supreme)";
      document.getElementById("drawer-consort-val").textContent = node.consort || "Universal Shakti / Transcendent";
      document.getElementById("drawer-vahana-val").textContent = node.vahana || "Omnipresent (Beyond Mount)";
      document.getElementById("drawer-ayudha-val").textContent = node.ayudha || "Universal Powers (Sarva Shaktiman)";

      const parentBtnWrapper = document.getElementById("drawer-parent-btn-wrapper");
      if (node.parent) {
        parentBtnWrapper.innerHTML = `
          <button class="drawer-parent-jump-btn" onclick="window.cosmicApp.selectNode('${node.parent}', true, true)">
            ↑ View Parent God
          </button>
        `;
      } else {
        parentBtnWrapper.innerHTML = "";
      }
    } else {
      genealogySection.style.display = "none";
    }

    // Shloka card
    const shloka = node.shloka || {
      source: "Vedic Canon",
      devanagari: "ॐ पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते ।",
      transliteration: "Oṁ pūrṇam adaḥ pūrṇam idaṁ pūrṇāt pūrṇam udacyate |",
      meaning: "That is Whole; this is Whole; from Wholeness emerges Wholeness."
    };
    document.getElementById("drawer-shloka-source").textContent = shloka.source;
    document.getElementById("drawer-shloka-devanagari").textContent = shloka.devanagari;
    document.getElementById("drawer-shloka-translit").textContent = shloka.transliteration;
    document.getElementById("drawer-shloka-meaning").textContent = shloka.meaning;

    // Section headings
    document.getElementById("drawer-details-heading").textContent = isGod ? "Scriptural Exposition & Lore" : "Cosmological Exposition";
    document.getElementById("drawer-attributes-heading").textContent = isGod ? "Divine Signifiers & Powers" : "Cosmic Principles & Signifiers";
    document.getElementById("drawer-children-heading").textContent = isGod ? "Divine Children & Emanations (Downstream)" : "Emanations & Manifestations (Downstream)";

    // Details Commentary
    document.getElementById("drawer-details-text").innerHTML = node.details || node.summary || "";

    // Key Attributes List
    const attrList = document.getElementById("drawer-attributes-list");
    if (node.keyAttributes && node.keyAttributes.length > 0) {
      attrList.innerHTML = node.keyAttributes.map(attr => `<li class="attribute-item">${attr}</li>`).join("");
    } else {
      attrList.innerHTML = `<li class="attribute-item">${node.title || 'Divine Manifestation'}</li>`;
    }

    // Parent & Children links
    const parentContainer = document.getElementById("drawer-parent-container");
    if (node.parent) {
      const pNode = this.activeMap.get(node.parent);
      if (pNode) {
        parentContainer.innerHTML = `
          <div class="nav-link-card" onclick="window.cosmicApp.selectNode('${pNode.id}', true, true)">
            <div>
              <div class="nav-link-name">↑ ${pNode.name}</div>
              <div class="nav-link-sub">${pNode.sanskrit || ''} • ${pNode.category || ''}</div>
            </div>
            <span style="color: var(--gold-primary); font-size: 12px; font-weight: 600;">Parent Source ➔</span>
          </div>
        `;
      } else {
        parentContainer.innerHTML = `<div style="font-size: 12px; color: var(--gold-light);">✦ Parent: ${node.parentName || 'Root'}</div>`;
      }
    } else {
      parentContainer.innerHTML = `<div style="font-size: 12px; color: var(--gold-light);">✦ The Ultimate Root (Anadi - Without Origin)</div>`;
    }

    const childrenContainer = document.getElementById("drawer-children-container");
    if (node.children && node.children.length > 0) {
      childrenContainer.innerHTML = node.children.map(child => `
        <div class="nav-link-card" onclick="window.cosmicApp.selectNode('${child.id}', true, true)">
          <div>
            <div class="nav-link-name">${child.icon || '↓'} ${child.name}</div>
            <div class="nav-link-sub">${child.sanskrit || ''} • ${child.category || ''}</div>
          </div>
          <span style="font-size: 13px; color: var(--gold-primary)">➔</span>
        </div>
      `).join("");
    } else {
      childrenContainer.innerHTML = `<div style="font-size: 12px; color: var(--text-muted)">Terminal manifestation in this branch</div>`;
    }

    drawer.classList.add("open");
  }

  closeDetailDrawer() {
    const drawer = document.getElementById("detail-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  /* ========================================================================
     Universal Search System across Active Tradition (Desktop & Mobile)
     ======================================================================== */
  setupSearch() {
    const bindSearch = (inputId, resultsId) => {
      const input = document.getElementById(inputId);
      const resultsContainer = document.getElementById(resultsId);
      if (!input || !resultsContainer) return;

      input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          resultsContainer.style.display = "none";
          resultsContainer.innerHTML = "";
          return;
        }

        const results = [];
        this.activeMap.forEach(node => {
          const matchName = node.name && node.name.toLowerCase().includes(query);
          const matchSanskrit = node.sanskrit && node.sanskrit.toLowerCase().includes(query);
          const matchCategory = node.category && node.category.toLowerCase().includes(query);
          const matchSummary = node.summary && node.summary.toLowerCase().includes(query);
          const matchParent = node.parentName && node.parentName.toLowerCase().includes(query);
          const matchConsort = node.consort && node.consort.toLowerCase().includes(query);
          const matchVahana = node.vahana && node.vahana.toLowerCase().includes(query);
          const matchAyudha = node.ayudha && node.ayudha.toLowerCase().includes(query);
          const matchShloka = node.shloka && (
            (node.shloka.source && node.shloka.source.toLowerCase().includes(query)) ||
            (node.shloka.meaning && node.shloka.meaning.toLowerCase().includes(query)) ||
            (node.shloka.transliteration && node.shloka.transliteration.toLowerCase().includes(query))
          );

          if (matchName || matchSanskrit || matchCategory || matchSummary || matchParent || matchConsort || matchVahana || matchAyudha || matchShloka) {
            results.push(node);
          }
        });

        if (results.length === 0) {
          resultsContainer.innerHTML = `<div style="padding: 14px; font-size: 13px; color: var(--text-muted); text-align: center;">No divine entity found</div>`;
        } else {
          resultsContainer.innerHTML = results.slice(0, 20).map(node => `
            <div class="search-result-item" onclick="window.cosmicApp.selectSearchResult('${node.id}')">
              <div>
                <div class="search-result-title">${node.icon || '✦'} ${node.name}</div>
                <div class="search-result-sanskrit">${node.sanskrit || ''} ${node.parentName ? `• Child of ${node.parentName.split('/')[0].split('(')[0].trim()}` : ''}</div>
              </div>
              <span class="search-result-tier">${node.category || node.tradition}</span>
            </div>
          `).join("");
        }
        resultsContainer.style.display = "block";
      });
    };

    bindSearch("search-input", "search-results-dropdown");
    bindSearch("mobile-search-input", "mobile-search-results");

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        const d = document.getElementById("search-results-dropdown");
        if (d) d.style.display = "none";
      }
    });
  }

  toggleMobileSearch(forceState) {
    const overlay = document.getElementById("mobile-search-overlay");
    if (!overlay) return;
    const isOpen = forceState !== undefined ? forceState : !overlay.classList.contains("open");
    overlay.classList.toggle("open", isOpen);
    if (isOpen) {
      const input = document.getElementById("mobile-search-input");
      if (input) {
        input.value = "";
        setTimeout(() => input.focus(), 120);
      }
    } else {
      const results = document.getElementById("mobile-search-results");
      if (results) results.innerHTML = "";
    }
  }

  selectSearchResult(nodeId) {
    const dropdown = document.getElementById("search-results-dropdown");
    if (dropdown) dropdown.style.display = "none";
    this.toggleMobileSearch(false);
    this.selectNode(nodeId, true, true);
  }

  /* ========================================================================
     Audio Synth Controls (Cosmic Omkara 136.1Hz - On by Default on Reload)
     ======================================================================== */
  setupAudio() {
    const audioBtn = document.getElementById("audio-toggle-btn");
    if (!audioBtn) return;

    // Reset manually-muted flag on reload so sound defaults to ON
    this.userManuallyMuted = false;

    const updateBtnUI = (isOn) => {
      if (isOn) {
        audioBtn.classList.add("playing");
        const label = audioBtn.querySelector(".audio-label");
        if (label) label.textContent = "Cosmic OM: On";
      } else {
        audioBtn.classList.remove("playing");
        const label = audioBtn.querySelector(".audio-label");
        if (label) label.textContent = "Cosmic OM: Off";
      }
    };

    // By default on reload / load: Turn ON in UI and request audio start
    updateBtnUI(true);
    if (window.cosmicAudio) {
      window.cosmicAudio.start();
    }

    // Modern Autoplay Compliance:
    // Browser autoplay policy suspends AudioContext until an initial user gesture.
    // The very first time the user touches, clicks, drags, or interacts anywhere,
    // ensure the AudioContext resumes and triggers the Omkara synth with target volume!
    const unlockEvents = ["pointerdown", "touchstart", "touchend", "mousedown", "keydown", "click"];
    const onUserInteraction = () => {
      if (this.userManuallyMuted) {
        cleanupListeners();
        return;
      }
      if (window.cosmicAudio) {
        if (window.cosmicAudio.ctx && window.cosmicAudio.ctx.state === "suspended") {
          window.cosmicAudio.ctx.resume().then(() => {
            if (!this.userManuallyMuted && window.cosmicAudio) {
              window.cosmicAudio.start();
            }
          }).catch(() => {});
        } else {
          window.cosmicAudio.start();
        }
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      unlockEvents.forEach(evt => {
        window.removeEventListener(evt, onUserInteraction, true);
        document.removeEventListener(evt, onUserInteraction, true);
      });
    };

    unlockEvents.forEach(evt => {
      window.addEventListener(evt, onUserInteraction, { capture: true, once: true });
      document.addEventListener(evt, onUserInteraction, { capture: true, once: true });
    });

    // Manual click toggle on the button
    audioBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!window.cosmicAudio) return;

      if (window.cosmicAudio.isPlaying || window.cosmicAudio.desiredPlaying) {
        // User explicitly turned it OFF manually
        this.userManuallyMuted = true;
        window.cosmicAudio.stop();
        updateBtnUI(false);
      } else {
        // User explicitly turned it ON manually
        this.userManuallyMuted = false;
        window.cosmicAudio.start();
        updateBtnUI(true);
      }
    });
  }

  /* ========================================================================
     Floating Sub-Filter View Presets
     ======================================================================== */
  filterView(filterKey) {
    this.activeFilter = filterKey;
    document.querySelectorAll(".floating-filter-dock .filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-filter") === filterKey);
    });

    let targetNodeId = this.apexId;

    if (this.tradition === "general") {
      targetNodeId = {
        "all": "general-parabrahman",
        "vishnu": "gen-vishnu",
        "avatars": "gen-dashavatara",
        "shiva": "gen-shiva",
        "brahma": "gen-brahma",
        "surya": "gen-surya-adityas",
        "chandravamsha": "gen-chandravamsha"
      }[filterKey] || "general-parabrahman";
    } else if (this.tradition === "vishnu") {
      targetNodeId = {
        "all": "vp-narayana",
        "avatars": "vp-dashavatara",
        "chaturvyuha": "vp-chaturvyuha",
        "manu": "vp-svayambhuva-manu",
        "suryavamsha": "vp-suryavamsha",
        "chandravamsha": "vp-chandravamsha"
      }[filterKey] || "vp-narayana";
    } else if (this.tradition === "shiva") {
      targetNodeId = {
        "all": "sp-sadashiva",
        "jyotirlingas": "sp-jyotirlingas",
        "vishnu-brahma": "sp-vishnu-brahma",
        "kailasha": "sp-kailasha-family",
        "dynasties": "sp-shaiva-dynasties",
        "rudras-bhairava": "sp-bhairava-rudras"
      }[filterKey] || "sp-sadashiva";
    } else {
      targetNodeId = {
        "all": "nirguna-brahman",
        "tattvas": "mahat-tattva",
        "elements": "mahabhutas-gross",
        "brahma": "lord-brahma",
        "dynasties": "cosmo-vaivasvata-manu",
        "lokas": "fourteen-lokas",
        "time": "kala-chakra"
      }[filterKey] || "nirguna-brahman";
    }

    if (filterKey === "all") {
      this.resetToApex();
      this.selectNode(targetNodeId, false, false);
    } else {
      this.selectNode(targetNodeId, true, false);
    }
  }

  /* ========================================================================
     Guided Cosmic Journeys
     ======================================================================== */
  startGuidedTour() {
    this.currentTourIndex = 0;
    this.renderTourStep();
  }

  renderTourStep() {
    const overlay = document.getElementById("tour-overlay");
    if (!overlay) return;

    const steps = this.currentTourSteps;

    if (this.currentTourIndex < 0 || this.currentTourIndex >= steps.length) {
      overlay.style.display = "none";
      return;
    }

    const step = steps[this.currentTourIndex];
    document.getElementById("tour-step-badge").textContent = `Stage ${this.currentTourIndex + 1} of ${steps.length}`;
    document.getElementById("tour-title").textContent = step.title;
    document.getElementById("tour-desc").textContent = step.desc;

    // Update buttons
    const prevBtn = document.getElementById("tour-prev-btn");
    const nextBtn = document.getElementById("tour-next-btn");
    prevBtn.disabled = this.currentTourIndex === 0;
    prevBtn.style.opacity = this.currentTourIndex === 0 ? "0.4" : "1";
    nextBtn.textContent = this.currentTourIndex === steps.length - 1 ? "Complete Yatra ✦" : "Next Milestone ➔";

    overlay.style.display = "block";

    // Focus camera on step's target node with smooth 2D glide (without opening drawer over tour)
    this.selectNode(step.nodeId, true, false);
  }

  nextTourStep() {
    const steps = this.currentTourSteps;
    if (this.currentTourIndex < steps.length - 1) {
      this.currentTourIndex++;
      this.renderTourStep();
    } else {
      this.closeTour();
    }
  }

  prevTourStep() {
    if (this.currentTourIndex > 0) {
      this.currentTourIndex--;
      this.renderTourStep();
    }
  }

  closeTour() {
    this.currentTourIndex = -1;
    const overlay = document.getElementById("tour-overlay");
    if (overlay) overlay.style.display = "none";
  }

  /* ========================================================================
     Dock Controls (Smooth Zoom In/Out & Reset to Apex)
     ======================================================================== */
  zoomIn() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const newScale = Math.min(2.5, this.targetScale * 1.20);
    this.targetScrollX = cx - (cx - this.targetScrollX) * (newScale / this.targetScale);
    this.targetScrollY = cy - (cy - this.targetScrollY) * (newScale / this.targetScale);
    this.targetScale = newScale;
    this.clampScroll();
    this.requestRender();
  }

  zoomOut() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const newScale = Math.max(0.25, this.targetScale * 0.82);
    this.targetScrollX = cx - (cx - this.targetScrollX) * (newScale / this.targetScale);
    this.targetScrollY = cy - (cy - this.targetScrollY) * (newScale / this.targetScale);
    this.targetScale = newScale;
    this.clampScroll();
    this.requestRender();
  }

  fitTreeToViewport(animate = true) {
    if (this.layoutNodes.size === 0) {
      this.resetToApex();
      return;
    }

    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    this.layoutNodes.forEach(nodeItem => {
      if (nodeItem.x < minX) minX = nodeItem.x;
      if (nodeItem.x > maxX) maxX = nodeItem.x;
      if (nodeItem.y < minY) minY = nodeItem.y;
      if (nodeItem.y > maxY) maxY = nodeItem.y;
    });

    const halfW = this.nodeWidth / 2 + 30;
    const halfH = this.nodeHeight / 2 + 30;
    const treeW = (maxX - minX) + (halfW * 2);
    const treeH = (maxY - minY) + (halfH * 2);

    const dock = document.getElementById("floating-filter-dock");
    const topMargin = dock ? Math.max(120, dock.getBoundingClientRect().bottom + 15) : 130;
    const bottomMargin = 90;
    const availW = Math.max(240, window.innerWidth - 30);
    const availH = Math.max(240, window.innerHeight - topMargin - bottomMargin);

    const scaleX = availW / treeW;
    const scaleY = availH / treeH;
    const optimalScale = Math.max(0.18, Math.min(0.96, Math.min(scaleX, scaleY)));

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    this.targetScale = optimalScale;
    this.targetScrollX = (window.innerWidth / 2) - (centerX * optimalScale);
    this.targetScrollY = topMargin + (availH / 2) - (centerY * optimalScale);

    this.clampScroll();
    if (!animate) {
      this.scale = this.targetScale;
      this.scrollX = this.targetScrollX;
      this.scrollY = this.targetScrollY;
      this.updateTransforms();
    }
    this.requestRender();
  }

  resetToApex() {
    this.targetScale = this.getOptimalScale();
    this.targetScrollX = window.innerWidth / 2;
    this.targetScrollY = this.getApexScrollY(this.targetScale);
    this.clampScroll();
    this.requestRender();
  }

  setupEventListeners() {
    window.addEventListener("resize", () => {
      this.targetScale = this.getOptimalScale();
      this.clampScroll();
      this.requestRender();
    }, { passive: true });
  }
}

// Global initialization
window.addEventListener("DOMContentLoaded", () => {
  window.initCosmicCanvas("cosmic-canvas");
  window.cosmicApp = new CosmicApp();
});
