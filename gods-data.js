/**
 * Complete Divine Genealogies & Pantheon of Gods in Sanatan Dharma (Hinduism)
 * Divided into 3 Distinct Puranic Traditions + Cross-Tradition Indices:
 * 1. General Purana Tradition (Smarta / Universal Bhagavata Synthesis)
 * 2. Vishnu Purana Tradition (Vaishnava Cosmogony & Lineages - Narayana as Supreme Root)
 * 3. Shiva Purana Tradition (Shaiva Cosmogony & Lineages - Sadashiva as Supreme Root)
 * 
 * Exhaustive Lineages:
 * - Parabrahman & Adi Parashakti
 * - Trideva (Brahma, Vishnu, Shiva) & Tridevi (Saraswati, Lakshmi, Parvati)
 * - The 24 Avataras & Dashavatara (Rama, Krishna, Narasimha, Varaha, Vamana...)
 * - The Chatur-Vyuha (Vasudeva, Sankarshana, Pradyumna, Aniruddha)
 * - Mount Kailasha Family (Ganesha, Kartikeya, Ashokasundari, Ayyappa, Shubha-Labha)
 * - Fierce Shiva Emanations (11 Rudras, Virabhadra, Kaala Bhairava & Ashta Bhairavas)
 * - 12 Sacred Jyotirlingas, Pancha-Brahma, Ashta Murti
 * - Lord Brahma's Mind-Born Sons (Sanat Kumaras, Saptarishis, Narada, Dharma Deva, Prajapatis)
 * - Vashistha Lineage (Parashara, Veda Vyasa, Shukadeva)
 * - Sage Kashyapa & The Dakshayani Mothers:
 *   - Mother Aditi -> 12 Adityas (Indra, Surya, Varuna, Mitra, Aryaman, Vamana...)
 *   - Lord Surya -> Yama Dharmaraja, Shani Deva, Ashvins, Yamuna, Suryavamsha
 *   - Suryavamsha -> Ikshvaku, Mandhata, Harishchandra, Sagara, Bhagiratha, Raghu, Sri Rama
 *   - Chandravamsha -> Chandra, Budha, Pururavas, Yayati, Yaduvamsha, Sri Krishna, Pandavas
 *   - Mother Diti -> Daityas (Hiranyakashipu, Bhaktaraj Prahlada, King Bali)
 *   - Mother Vinata -> Garuda & Aruna (Jatayu, Sampati)
 *   - Mother Kadru -> Nagas (Ananta Shesha, Vasuki, Takshaka, Kaliya)
 *   - Mother Surabhi -> Kamadhenu & Sacred Bovines
 * - Dharma Deva & Ashta Vasus (Agni, Vayu -> Hanuman, Bhishma, Nara-Narayana)
 */

/* ==========================================================================
   1. GENERAL PURANA TRADITION (Universal Bhagavata / Smarta Synthesis)
   ========================================================================== */
/* ==========================================================================
   1. GENERAL PURANA TRADITION (Universal Bhagavata / Smarta Synthesis)
   Exhaustive Multi-Tier Lineages from Rigveda, Itihasas & Mahapuranas
   Reaching up to 15 Levels Deep: Every Generation Canonical & Complete
   ========================================================================== */
const GENERAL_PURANA_DATA = {
  id: "general-parabrahman",
  name: "Parabrahman (Supreme Absolute)",
  sanskrit: "परब्रह्मन् (सर्वदेवमय ईश्वर)",
  title: "The Causeless Supreme Source of All Divinities",
  category: "Supreme Source",
  tradition: "General Purana",
  parent: null,
  parentName: "Anadi (Self-Existent, Timeless)",
  consort: "Adi Parashakti (Primordial Cosmic Energy)",
  vahana: "Transcendental (Beyond Space & Time)",
  ayudha: "Sarva Shaktiman (All Cosmic Powers)",
  color: "#FFD700",
  glowColor: "rgba(255, 215, 0, 0.8)",
  icon: "🕉️",
  summary: "The singular, infinite Supreme Consciousness from which Trideva, Tridevi, Devas, and worlds originate in divine equilibrium.",
  shloka: {
    devanagari: "एकं सद् विप्रा बहुधा वदन्त्यग्निं यमं मातरिश्वानमाहुः ।",
    transliteration: "Ekaṁ sad viprā bahudhā vadanty agniṁ yamaṁ mātariśvānam āhuḥ |",
    source: "Rigveda 1.164.46",
    meaning: "Truth is One; the wise call It by various names—such as Agni, Yama, and Matarishvan."
  },
  details: `
    In the comprehensive Puranic synthesis, the multitude of Gods (*Devas*) are radiant expressions of the one Supreme Reality (**Parabrahman**).
    To create, sustain, and regenerate the universe, the Supreme manifests as the **Trideva** (Brahma, Vishnu, Shiva) and **Tridevi** (Saraswati, Lakshmi, Parvati), whose branches cascade into solar, lunar, elemental, and avataric lineages.
  `,
  keyAttributes: [
    "Ekam Sat: The Single Ultimate Source",
    "Harmonious balance of Brahma, Vishnu, and Shiva",
    "Fountainhead of all celestial genealogies",
    "Sustained by eternal Dharma and Rta"
  ],
  children: [
    /* ======================================================================
       BRANCH 1: LORD VISHNU & THE VAISHNAVA LINEAGES
       ====================================================================== */
    {
      id: "gen-vishnu",
      name: "Lord Maha-Vishnu (Narayana)",
      sanskrit: "भगवान् महाविष्णु (नारायण)",
      title: "Supreme Preserver & Sustainer of the Cosmos",
      category: "Trideva",
      tradition: "General Purana",
      parent: "general-parabrahman",
      parentName: "Parabrahman",
      consort: "Goddess Mahalakshmi (Sridevi, Bhudevi, Niladevi)",
      vahana: "Garuda (King of Celestial Avians)",
      ayudha: "Sudarshana Chakra, Kaumodaki Gada, Panchajanya Conch, Padma",
      color: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.8)",
      icon: "🪷",
      summary: "Rests in Yoga-nidra upon Ananta Shesha on the Causal Ocean; descends into creation whenever Dharma declines.",
      shloka: {
        devanagari: "शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् । लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥",
        transliteration: "Śāntākāraṁ bhujaga-śayanaṁ padmanābhaṁ sureśaṁ viśvādhāraṁ gagana-sadṛśaṁ megha-varṇam |",
        source: "Vishnu Smriti",
        meaning: "Of tranquil form, reclining upon the serpent, from whose navel sprouts the lotus of creation, Lord of Gods, foundation of the universe, dispeller of worldly fear."
      },
      details: `
        Lord Vishnu embodies pure Sattva—the sustaining and nurturing principle of the universe. From His lotus-navel blooms Lord Brahma, who architects the physical worlds.
        Across cosmic epochs (*Yugas*), Vishnu manifests in primary and secondary descents (*Avataras*) to protect the righteous and restore cosmic balance.
      `,
      keyAttributes: [
        "Protector of Dharma across all dimensions",
        "Source of the 10 Mahavataras and 24 Lila Avataras",
        "Master of Maya and Infinite Compassion"
      ],
      children: [
        {
          id: "gen-dashavatara",
          name: "The 10 Mahavataras (Dashavatara)",
          sanskrit: "दशावतार (विष्णोः दश मुख्यावताराः)",
          title: "The Ten Primary Divine Descents Restoring Dharma",
          category: "Avatara Order",
          tradition: "General Purana",
          parent: "gen-vishnu",
          parentName: "Lord Maha-Vishnu",
          consort: "Lakshmi Avataras (Dharani, Sita, Rukmini)",
          vahana: "Garuda / Divine Chariot",
          ayudha: "Sudarshana Chakra, Sharnga Bow, Nandaka Sword",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.8)",
          icon: "🏹",
          summary: "The celebrated 10 descents of Vishnu spanning aquatic, amphibian, mammalian, humanoid, and sovereign phases.",
          shloka: {
            devanagari: "मत्स्यः कूर्मो वराहश्च नरसिंहोऽथ वामनः । रामो रामश्च रामश्च कृष्णः कल्किरेव च ॥",
            transliteration: "Matsyaḥ kūrmo varāhaś ca narasiṁho'tha vāmanaḥ | Rāmo rāmaś ca rāmaś ca kṛṣṇaḥ kalkir eva ca ||",
            source: "Varaha Purana",
            meaning: "Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Balarama, Krishna, and Kalki."
          },
          details: `
            The Dashavatara order outlines both cosmic defense and spiritual evolution: from simple marine biology (*Matsya*) to amphibious resilience (*Kurma*), terrestrial strength (*Varaha*), feral-human transition (*Narasimha*), intellectual subtlety (*Vamana*), ascetic righteousness (*Parashurama*), moral kingship (*Rama*), agricultural abundance (*Balarama*), transcendental wisdom (*Krishna*), and apocalyptic renewal (*Kalki*).
          `,
          keyAttributes: [
            "Restoration of cosmic equilibrium",
            "Archetypes of moral and evolutionary progression",
            "Universal devotion across all Hindu traditions"
          ],
          children: [
            {
              id: "gen-avatar-matsya",
              name: "1. Matsya Avatara (Cosmic Fish)",
              sanskrit: "मत्स्यावतार (सत्यव्रत-वेद-रक्षक)",
              title: "The Horned Fish Rescuing the Vedas & King Satyavrata",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Lakshmi",
              vahana: "Primal Ocean Current",
              ayudha: "Sudarshana Chakra, Veda-Shastra",
              color: "#0284C7",
              glowColor: "rgba(2, 132, 199, 0.8)",
              icon: "🐟",
              summary: "Guided King Satyavrata's ark through the cosmic deluge and slew Hayagriva to recover the Vedas.",
              shloka: {
                devanagari: "प्रलयपयोधिजले धृतवानसि वेदम् । विहितवहित्रचरित्रमखेदम् । केशव धृतमीनशरीर जय जगदीश हरे ॥",
                transliteration: "Pralaya-payodhi-jale dhṛtavān asi vedam | Vihita-vahitra-caritram akhedam | Keśava dhṛta-mīna-śarīra jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 1)",
                meaning: "O Keshava! In the waters of dissolution You held aloft the Vedas, acting as a sturdy ship for the virtuous. Glory to You, Lord of the Universe in the form of a fish!"
              },
              details: `
                In the deluge ending the Caksusa Manvantara, Vishnu assumed the form of a gigantic golden-horned horned fish.
                He tethered King Satyavrata's boat (containing medicinal herbs, seeds, and the Saptarishis) to His horn using the serpent Vasuki, delivering the seed of creation into the next epoch.
              `,
              keyAttributes: ["Deluge savior", "Veda protector", "Predecessor of Vaivasvata Manu"],
              children: []
            },
            {
              id: "gen-avatar-kurma",
              name: "2. Kurma Avatara (Cosmic Tortoise)",
              sanskrit: "कूर्मावतार (मन्दराचल-धारक)",
              title: "The Immovable Pivot of Samudra Manthana",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Lakshmi",
              vahana: "Ocean Bed",
              ayudha: "Adamantine Shell",
              color: "#0D9488",
              glowColor: "rgba(13, 148, 136, 0.8)",
              icon: "🐢",
              summary: "Supported Mount Mandara upon His broad back during the churning of the milk ocean, allowing Amrita to emerge.",
              shloka: {
                devanagari: "क्षितिरिह विपुलतरे तिष्ठति तव पृष्ठे । धरणिधरणकिणचक्रगरिष्ठे । केशव धृतकच्छपरूप जय जगदीश हरे ॥",
                transliteration: "Kṣitir iha vipulatare tiṣṭhati tava pṛṣṭhe | Dharaṇi-dhāraṇa-kiṇa-cakra-gariṣṭhe | Keśava dhṛta-kacchapa-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 2)",
                meaning: "O Keshava! Upon Your expansive shell rests the colossal pivot of the earth, bearing marks of glory. Victory to You in tortoise form!"
              },
              details: `
                When Devas and Asuras churned the Ocean of Milk (*Kshirasagara*) for the nectar of immortality (*Amrita*), Mount Mandara sank into the seabed.
                Vishnu descended as a colossal tortoise of 100,000 yojanas, supporting the mountain upon His adamantine carapace and scratching His back pleasantly against the churning pivot.
              `,
              keyAttributes: ["Steadfast foundation", "Chiranjivi support", "Emergence of Lakshmi & Amrita"],
              children: []
            },
            {
              id: "gen-avatar-varaha",
              name: "3. Varaha Avatara (Cosmic Boar)",
              sanskrit: "वराहावतार (यज्ञवराह / भू-उद्धारक)",
              title: "Rescuer of Mother Earth from the Nether Depths",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Bhumi Devi (Prithvi)",
              vahana: "Cosmic Radiance",
              ayudha: "Tusks of Dharma, Sudarshana Chakra, Gada",
              color: "#B45309",
              glowColor: "rgba(180, 83, 9, 0.8)",
              icon: "🐗",
              summary: "Slew demon Hiranyaksha and lifted submerged Bhumi Devi upon His tusks from the cosmic ocean depths.",
              shloka: {
                devanagari: "वसति दशनशिखरे धरणी तव लग्ना । शशिनि कलङ्ककलेव निमग्ना । केशव धृतशूकररूप जय जगदीश हरे ॥",
                transliteration: "Vasati daśana-śikhare dharaṇī tava lagnā | Śaśini kalaṅka-kaleva nimagnā | Keśava dhṛta-śūkara-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 3)",
                meaning: "O Keshava! The Earth rests gracefully upon the tip of Your tusks like the gentle dark spot resting upon the moon. Victory to You in boar form!"
              },
              details: `
                When the tyrant Hiranyaksha dragged Earth into the cosmic abyss of the Garbhodaka Ocean, Vishnu emerged as the glorious Boar (*Yajna-Varaha*).
                He defeated Hiranyaksha in single combat and tenderly hoisted Mother Earth back to her planetary orbit.
              `,
              keyAttributes: ["Protector of Bhumi", "Personification of Vedic Yajna", "Slayer of Hiranyaksha"],
              children: [
                {
                  id: "gen-bhumi-naraka",
                  name: "Bhumi Devi & King Naraka",
                  sanskrit: "भूमिदेवी एवं भौमासुर नरक",
                  title: "Earth Goddess & Her Son Naraka of Pragjyotisha",
                  category: "Dynastic Branch",
                  tradition: "General Purana",
                  parent: "gen-avatar-varaha",
                  parentName: "Varaha Avatara",
                  consort: "Varaha Avatara / Kamakhya",
                  vahana: "Elephant Supratika",
                  ayudha: "Vaishnavastra",
                  color: "#15803D",
                  glowColor: "rgba(21, 128, 61, 0.8)",
                  icon: "🌍",
                  summary: "Mother Earth, delivered by Varaha, bore Naraka who founded Pragjyotisha (Assam).",
                  shloka: {
                    devanagari: "समुद्रवसने देवि पर्वतस्तनमण्डले । विष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे ॥",
                    transliteration: "Samudra-vasane devi parvata-stana-maṇḍale | Viṣṇu-patni namas tubhyaṁ pāda-sparśaṁ kṣamasva me ||",
                    source: "Prataḥ Smarana Stotram",
                    meaning: "O Mother Earth, robed in oceans and crowned by mountain ranges, divine consort of Vishnu, forgive me for touching you with my feet."
                  },
                  details: `
                    From Varaha's divine embrace of Bhumi Devi was born Bhaumasura (Naraka). Though originally pious and crowned at Pragjyotishpura, he later fell under demonic pride until liberated by Sri Krishna and Satyabhama.
                  `,
                  keyAttributes: ["Pragjyotisha dynasty", "Mother Earth lineage", "Bhauma heritage"],
                  children: [
                    {
                      id: "gen-bhagadatta",
                      name: "King Bhagadatta",
                      sanskrit: "राजा भगदत्तः (प्राग्ज्योतिषाधिपतिः)",
                      title: "Mighty Charioteer & Elephant Commander of Pragjyotisha",
                      category: "Kshatriya King",
                      tradition: "General Purana",
                      parent: "gen-bhumi-naraka",
                      parentName: "Bhumi Devi & King Naraka",
                      consort: "Pragjyotisha Queen",
                      vahana: "Supratika (Mighty War Elephant)",
                      ayudha: "Vaishnavastra, Iron Ankus",
                      color: "#A16207",
                      glowColor: "rgba(161, 98, 7, 0.8)",
                      icon: "🐘",
                      summary: "Son of Naraka, renowned warrior who fought heroically on his elephant Supratika in the Kurukshetra War.",
                      shloka: {
                        devanagari: "भगदत्तो महेष्वासः कुञ्जरेण महाहवे ।",
                        transliteration: "Bhagadatto maheṣvāsaḥ kuñjareṇa mahāhave |",
                        source: "Mahabharata (Drona Parva)",
                        meaning: "Bhagadatta, the illustrious archer, battled fiercely upon his royal war elephant in the supreme conflict."
                      },
                      details: `
                        Bhagadatta inherited the invincible *Vaishnavastra* gifted by Vishnu to his father. During the 12th day of the Kurukshetra war, he hurled the weapon at Arjuna, but Sri Krishna stood up and absorbed the weapon onto His chest, transforming it into a fragrant flower garland.
                      `,
                      keyAttributes: ["Master of elephant warfare", "Wielder of Vaishnavastra", "Hero of Pragjyotisha"],
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "gen-avatar-narasimha",
              name: "4. Narasimha Avatara (Man-Lion)",
              sanskrit: "नरसिंहावतार (प्रह्लाद-वरद)",
              title: "The Pillar-Born Destroyer of Tyranny & Terror",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Goddess Chenchu Lakshmi",
              vahana: "Omnipresent Radiance",
              ayudha: "Adamantine Claws, Sudarshana Chakra",
              color: "#DC2626",
              glowColor: "rgba(220, 38, 38, 0.85)",
              icon: "🦁",
              summary: "Erupted from a stone pillar at twilight to slay Hiranyakashipu and protect young Prahlada.",
              shloka: {
                devanagari: "तव करकमलवरे नखमद्भुतशृङ्गम् । दलितहिरण्यकशिपुतनुभृङ्गम् । केशव धृतनरहरिरूप जय जगदीश हरे ॥",
                transliteration: "Tava kara-kamala-vare nakham adbhuta-śṛṅgam | Dalita-hiraṇyakaśipu-tanu-bhṛṅgam | Keśava dhṛta-narahari-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 4)",
                meaning: "O Keshava! With the wonderful claws on Your lotus hands You tore apart the wasp-like body of Hiranyakashipu. Victory to You in half-man, half-lion form!"
              },
              details: `
                Hiranyakashipu had secured a boon making him immune to death by man or beast, indoors or outdoors, day or night, on land or in air, with any weapon.
                To honor Brahma's boon and validate Prahlada's faith, Vishnu burst from a pillar at twilight as half-man half-lion, placed the tyrant on His lap at the threshold, and eliminated him with claws.
              `,
              keyAttributes: ["Protector of devotion", "Pillar-born manifestation", "Boon transcender"],
              children: []
            },
            {
              id: "gen-avatar-vamana",
              name: "5. Vamana Avatara (Dwarf Brahmana)",
              sanskrit: "वामनावतार (त्रिविक्रम / बलि-मोक्षद)",
              title: "The Supreme Measurer of the Three Worlds",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Lakshmi",
              vahana: "Walking Staff & Umbrella",
              ayudha: "Kamandalu, Danda, Chatra, Sudarshana",
              color: "#EAB308",
              glowColor: "rgba(234, 179, 8, 0.8)",
              icon: "☂️",
              summary: "Appeared as a small ascetic to ask King Bali for three paces of land, expanding as Trivikrama to span the cosmos.",
              shloka: {
                devanagari: "छलयसि विक्रमणे बलिमद्भुतवामन । पदनखनीरजनितजनपावन । केशव धृतवामनरूप जय जगदीश हरे ॥",
                transliteration: "Chalayasi vikramaṇe balim adbhuta-vāmana | Pada-nakha-nīra-janita-jana-pāvana | Keśava dhṛta-vāmana-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 5)",
                meaning: "O Keshava! In the form of the wondrous dwarf You deceived Bali through Your cosmic strides, purifying all beings with the sacred Ganga flowing from Your toe. Glory to You!"
              },
              details: `
                Born to Sage Kashyapa and Aditi, Vamana approached the sacrificial arena of Emperor Mahabali.
                When granted three paces of land, He expanded into Trivikrama: one stride covered the earth, the second covered the heavens, and Bali humbly offered his own head for the third. Pleased, Vishnu crowned Bali ruler of Sutala loka.
              `,
              keyAttributes: ["Trivikrama cosmic form", "Elevation of Mahabali", "Birth of Ganga from His foot"],
              children: []
            },
            {
              id: "gen-avatar-parashurama",
              name: "6. Parashurama Avatara (Warrior Sage)",
              sanskrit: "परशुरामावतार (भार्गव / क्षत्रिय-मर्दन)",
              title: "The Axe-Wielding Ascetic & Protector of Moral Law",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Dharani",
              vahana: "Ascetic Steps",
              ayudha: "Parashu (Divine Axe), Dhanus",
              color: "#EF4444",
              glowColor: "rgba(239, 68, 68, 0.8)",
              icon: "🪓",
              summary: "Fifth son of Sage Jamadagni and Renuka; eradicated corrupt despotic kings 21 times to restore ethical governance.",
              shloka: {
                devanagari: "क्षत्रियरुधिरमये जगदपगतपापम् । स्नपयसि पयसि शमितभवतापम् । केशव धृतभृगुपतिरूप जय जगदीश हरे ॥",
                transliteration: "Kṣatriya-rudhira-maye jagad-apagata-pāpam | Snapayasi payasi śamita-bhava-tāpam | Keśava dhṛta-bhṛgupati-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 6)",
                meaning: "O Keshava! In the form of the lord of Bhrigus, You cleansed the world of arrogant tyranny, cooling the fever of earthly suffering. Victory to You!"
              },
              details: `
                When the tyrant Kartavirya Arjuna stole the sacred cow Kamadhenu and slew Sage Jamadagni, Parashurama took up his divine battle-axe gifted by Lord Shiva.
                He rid the earth of corrupt warrior despots 21 times, donated all conquered land to Sage Kashyapa, and reclaimed the coastal land of Parashurama Kshetra (Kerala/Konkan).
              `,
              keyAttributes: ["Chiranjivi (Immortal)", "Guru to Bhishma, Drona & Karna", "Retreat at Mount Mahendra"],
              children: []
            },
            {
              id: "gen-avatar-rama",
              name: "7. Sri Rama (Maryada Purushottama)",
              sanskrit: "श्रीरामचन्द्र (मर्यादा पुरुषोत्तम)",
              title: "The Supreme Exemplar of Righteousness & King of Ayodhya",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Goddess Sita Devi (Janaki / Lakshmi)",
              vahana: "Royal Chariot of Ayodhya",
              ayudha: "Kodanda Bow, Arrow of Infallible Truth",
              color: "#3B82F6",
              glowColor: "rgba(59, 130, 246, 0.85)",
              icon: "🏹",
              summary: "Eldest son of King Dasharatha; vanquished the ten-headed Ravana, establishing the golden era of Ramarajya.",
              shloka: {
                devanagari: "रामो राजमणिः सदा विजयते रामं रमेशं भजे रामेणाभिहता निशाचरचमू रामाय तस्मै नमः । रामान्नास्ति परो परायणपरं रामस्य दासोऽस्म्यहं रामे चित्तलयः सदा भवतु मे भो राम मामुद्धर ॥",
                transliteration: "Rāmo rāja-maṇiḥ sadā vijayate rāmaṁ rameśaṁ bhaje | Rāmeṇābhihatā niśācara-camū rāmāya tasmai namaḥ ||",
                source: "Rama Raksha Stotram",
                meaning: "Rama, the jewel among kings, is ever victorious; I worship Rama, Lord of Lakshmi. By Rama the hordes of demons were shattered; to that Rama I offer salutations."
              },
              details: `
                Sri Rama is the supreme embodiment of *Dharma* in action: the dutiful son, loving brother, devoted husband, and selfless monarch.
                Across 14 years of forest exile, He befriended the Vanaras, built the bridge across the southern ocean, vanquished Ravana, and inaugurated *Ramarajya*—an era where righteousness, prosperity, and peace flourished universally.
              `,
              keyAttributes: [
                "Eka-Patni Vrata (Absolute fidelity)",
                "Eka-Bana (Unswerving word & arrow)",
                "Ramarajya (Golden age of justice)"
              ],
              children: [
                {
                  id: "gen-kusha",
                  name: "King Kusha (Ruler of Dakshina Kosala)",
                  sanskrit: "राजा कुशः (कुशावतीपतिः)",
                  title: "Elder Twin Son of Sri Rama & Master Archer",
                  category: "Suryavamsha King",
                  tradition: "General Purana",
                  parent: "gen-avatar-rama",
                  parentName: "Sri Rama",
                  consort: "Kumudvati (Naga Princess)",
                  vahana: "Golden Chariot",
                  ayudha: "Kodanda Bow & Arrows",
                  color: "#60A5FA",
                  glowColor: "rgba(96, 165, 250, 0.8)",
                  icon: "👑",
                  summary: "Twin brother of Lava, raised by Sage Valmiki; established Kushavati and continued the Solar line.",
                  shloka: {
                    devanagari: "कुशस्य चाभवत् पुत्रः कुमुद्वत्यां समाहितः । अतिथिश्च महातेजा रघुवंशप्रवर्धनः ॥",
                    transliteration: "Kuśasya cābhavat putraḥ kumudvatyāṁ samāhitaḥ | Atithiś ca mahātejā raghuvaṁśa-pravardhanaḥ ||",
                    source: "Raghuvamsha (Canto 17)",
                    meaning: "Unto Kusha and the virtuous Kumudvati was born Atithi of immense glory, who expanded the illustrious lineage of Raghu."
                  },
                  details: `
                    Kusha recited the entire Ramayana with his twin Lava at Rama's Ashvamedha Yajna.
                    After Rama's ascension to Vaikuntha, Kusha inherited Southern Kosala and founded Kushavati, marrying Princess Kumudvati, sister of the Naga King Kumuda.
                  `,
                  keyAttributes: ["Master of the Ramayana recitation", "Ruler of Kushavati", "Father of King Atithi"],
                  children: [
                    {
                      id: "gen-atithi",
                      name: "King Atithi & Later Raghuvamsha",
                      sanskrit: "राजा अतिथिः एवं परवर्ति-रघुवंशः",
                      title: "Righteous Sovereign of Ayodhya & Scholar King",
                      category: "Suryavamsha King",
                      tradition: "General Purana",
                      parent: "gen-kusha",
                      parentName: "King Kusha",
                      consort: "Solar Queen",
                      vahana: "Royal Chariot",
                      ayudha: "Dhanus & Royal Scepter",
                      color: "#93C5FD",
                      glowColor: "rgba(147, 197, 253, 0.8)",
                      icon: "🏛️",
                      summary: "Son of Kusha who continued the royal line through Nishadha, Nala, Nabhas, and Pundarika down to Brihadbala.",
                      shloka: {
                        devanagari: "अतिथेरभवन् पुत्रा निषधस्तस्य चात्मजः । नलश्च नभसश्चैव पुण्डरीको महायशाः ॥",
                        transliteration: "Atither abhavan putrā niṣadhas tasya cātmajaḥ | Nalaś ca nabhasaś caiva puṇḍarīko mahāyaśāḥ ||",
                        source: "Vishnu Purana 4.4",
                        meaning: "From Atithi sprang Nishadha, from him Nala, then Nabhas, and the illustrious Pundarika."
                      },
                      details: `
                        King Atithi was tutored in the science of governance by royal sages, re-unifying the kingdom of Ayodhya and upholding the spotless reputation of the House of Raghu.
                        His descendants led the Solar Dynasty through the Dvapara era down to King Brihadbala who fought in the Kurukshetra War.
                      `,
                      keyAttributes: ["Scholar sovereign", "Continuator of Ayodhya kingship", "Ancestor of Kurukshetra solar kings"],
                      children: [
                        {
                          id: "gen-nishadha-hiranyanabha",
                          name: "King Nishadha, Nala & King Hiranyanabha",
                          sanskrit: "राजा निषध, नल एवं महर्षि हिरण्यनाभ",
                          title: "Sovereigns of Ayodhya & Master of Yoga from Sage Jaimini",
                          category: "Suryavamsha King",
                          tradition: "General Purana",
                          parent: "gen-atithi",
                          parentName: "King Atithi",
                          consort: "Solar Royal Queens",
                          vahana: "Royal Solar Chariot",
                          ayudha: "Yoga Danda & Royal Bow",
                          color: "#60A5FA",
                          glowColor: "rgba(96, 165, 250, 0.8)",
                          icon: "🧘",
                          summary: "Descendants of Kusha and Atithi. King Hiranyanabha learned the transcendental science of Yoga from Rishi Jaimini and taught Sage Yajnavalkya.",
                          shloka: {
                            devanagari: "हिरण्यनाभः कौशल्यो जैमिनिप्रशिष्यो य एनं याज्ञवल्क्योऽधीतवान् योगम् ॥",
                            transliteration: "Hiraṇyanābhaḥ kauśalyo jaimini-praśiṣyo ya enaṁ yājñavalkyo'dhītavān yogam ||",
                            source: "Vishnu Purana 4.4.106 & Bhagavata 9.12.4",
                            meaning: "The glorious King Hiranyanabha of Kosala, disciple of Sage Jaimini, instructed Sage Yajnavalkya in the profound science of spiritual Yoga."
                          },
                          details: `
                            The Raghuvamsha continued unbroken through Atithi -> Nishadha -> Nala -> Nabhas -> Pundarika -> Kshemadhanva -> Devanika -> Ahinagu -> Paripatra -> Dala -> Chhala -> Uktha -> Vajranabha -> Shankhana -> Dhridhashva -> Vishvasaha -> Hiranyanabha.
                            King Hiranyanabha was celebrated as a Rajarshi (royal sage), uniting temporal imperial rule with profound mastery of Adhyatma Yoga.
                          `,
                          keyAttributes: ["Instructed Sage Yajnavalkya in Yoga", "Disciple of Sage Jaimini", "Preserved the sacred Solar bloodline of Ayodhya"],
                          children: [
                            {
                              id: "gen-maru-prashusruta",
                              name: "King Maru of Kalapa & King Prashusruta",
                              sanskrit: "राजा मरु (कलापग्राम योगी) एवं प्रशुश्रुत",
                              title: "Immortal Yogic Guardian of the Solar Seed & King of Kosala",
                              category: "Suryavamsha King",
                              tradition: "General Purana",
                              parent: "gen-nishadha-hiranyanabha",
                              parentName: "King Hiranyanabha",
                              consort: "Princess of Videha",
                              vahana: "Yogic Vimana",
                              ayudha: "Immortal Prana & Tapas Danda",
                              color: "#38BDF8",
                              glowColor: "rgba(56, 189, 248, 0.85)",
                              icon: "🏔️",
                              summary: "King Maru entered the Himalayan hermitage of Kalapa-grama through yogic Tapas to preserve the Solar Dynasty seed, to be re-manifested in the next Satya Yuga.",
                              shloka: {
                                devanagari: "मरुः कलापग्रामस्थो योगाभ्यासबलेन च । सूर्यवंशं समाश्रित्य पुनर्वंशं करिष्यति ॥",
                                transliteration: "Maruḥ kalāpa-grāma-stho yogābhyāsa-balena ca | Sūrya-vaṁśaṁ samāśritya punar vaṁśaṁ kariṣyati ||",
                                source: "Bhagavata Purana 9.12.6 & Vishnu Purana 4.4.108",
                                meaning: "King Maru, residing in the hidden Himalayan retreat of Kalapa by the power of Yoga, will re-establish the Solar Dynasty at the close of Kali Yuga."
                              },
                              details: `
                                Following Hiranyanabha came Pushya, Dhruvasandhi, Sudarshana, Agnivarna, Shighra, and Maru.
                                While Maru retired into perpetual meditation in the Himalayas, his brother Prashusruta continued the ruling lineage in Ayodhya leading down to the Mahabharata era.
                              `,
                              keyAttributes: ["Immortal yogic monarch in Kalapa-grama", "Prophesied to restart Suryavamsha in Satya Yuga", "Brother Prashusruta maintained the temporal throne of Ayodhya"],
                              children: [
                                {
                                  id: "gen-brihadbala",
                                  name: "King Brihadbala of Kosala (Mahabharata Era)",
                                  sanskrit: "महाराज बृहद्बल (कौसलेन्द्र / महाभारत वीर)",
                                  title: "Last Pre-Mahabharata Sovereign of Ayodhya • Champion of the Solar Line",
                                  category: "Suryavamsha King",
                                  tradition: "General Purana",
                                  parent: "gen-maru-prashusruta",
                                  parentName: "King Maru & Prashusruta",
                                  consort: "Queen of Kosala",
                                  vahana: "Golden Sun Chariot",
                                  ayudha: "Solar Bow & Golden Arrows",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.85)",
                                  icon: "🏹",
                                  summary: "Direct descendant of Sri Rama and Kusha; ruled the Kosala empire from Ayodhya during the Kurukshetra war; fought heroically and was slain by Abhimanyu.",
                                  shloka: {
                                    devanagari: "बृहद्बलस्तु कौसल्यो रथेनादित्यवर्चसा । पाण्डवानां महानीकं युयुधे सूर्यवंशजः ॥",
                                    transliteration: "Bṛhadbalas tu kauśalyo rathenāditya-varcasā | Pāṇḍavānāṁ mahānīkaṁ yuyudhe sūrya-vaṁśajaḥ ||",
                                    source: "Mahabharata (Drona Parva) & Vishnu Purana 4.4.112",
                                    meaning: "The valiant King Brihadbala of Kosala, radiant like the sun, fought the vast Pandava host with peerless chivalry, upholding the honor of the Solar Dynasty."
                                  },
                                  details: `
                                    Descent: Prashusruta -> Sandhi -> Amarshana -> Mahasvan -> Vishvabhavan -> Prasenajit -> Takshaka -> Brihadbala.
                                    Brihadbala led the formidable Kosala army in the Mahabharata war, serving as one of the key Maharathis in Drona's Chakravyuha formation.
                                  `,
                                  keyAttributes: ["Supreme ruler of Kosala at the close of Dvapara Yuga", "Fought in the Kurukshetra War", "Direct ancestor of the post-war kings of Ayodhya"],
                                  children: [
                                    {
                                      id: "gen-post-mahabharata-kosala",
                                      name: "The Post-Mahabharata Kings of Kosala",
                                      sanskrit: "महाभारतोत्तर कौशल नरपतयः (बृहद्रथ ते संजय)",
                                      title: "Sovereigns of the Solar Dynasty in the Early Kali Yuga (Vishnu Purana 4.22)",
                                      category: "Suryavamsha King",
                                      tradition: "General Purana",
                                      parent: "gen-brihadbala",
                                      parentName: "King Brihadbala",
                                      consort: "Solar Royal Queens",
                                      vahana: "Royal Chariot",
                                      ayudha: "Dharma Scepter & Solar Standard",
                                      color: "#EAB308",
                                      glowColor: "rgba(234, 179, 8, 0.8)",
                                      icon: "👑",
                                      summary: "Brihadbala's son Brihadratha continued the dynasty through 25 generations of righteous monarchs chronicled in Vishnu Purana 4.22 and Bhagavata 9.12.",
                                      shloka: {
                                        devanagari: "बृहद्बलस्य पुत्रोऽभूद् बृहद्रथ इति स्मृतः । तस्यापि वत्सव्यूहस्तु ततो राजा प्रतिव्योमः ॥",
                                        transliteration: "Bṛhadbalasya putro'bhūd bṛhadratha iti smṛtaḥ | Tasyāpi vatsavyūhas tu tato rājā prativyomaḥ ||",
                                        source: "Vishnu Purana 4.22.1 & Bhagavata 9.12.9",
                                        meaning: "Brihadbala's son was Brihadratha; from him was born Vatsavyuha, and from him King Prativyoma, continuing the solar kings of Ayodhya in Kali Yuga."
                                      },
                                      details: `
                                        The unbroken succession recorded in the Puranas: Brihadratha -> Urukriya -> Vatsavyuha -> Prativyoma -> Divakara -> Sahadeva -> Brihadashva -> Bhanuratha -> Pratitashva -> Supratika -> Marudeva -> Sunakshatra -> Kinnarashva -> Antariksha -> Suparna -> Amitrajit -> Dharmin -> Kritanjaya -> Rananjaya -> Sanjayaka.
                                        They preserved the Vedic sacrifices and royal temples of Ayodhya throughout the opening millennia of the Kali Yuga.
                                      `,
                                      keyAttributes: ["25 generations of post-war Ayodhya kings", "Recorded in detail in Vishnu Purana Book 4 Chapter 22", "Preserved the sacred Solar lineage of Sri Rama"],
                                      children: [
                                        {
                                          id: "gen-shakya-suddhodana",
                                          name: "King Shakya & King Suddhodana of Kapilavastu",
                                          sanskrit: "राजा शाक्य, शुद्धोदन एवं सिद्धार्थ (गौतम बुद्ध)",
                                          title: "Rulers of the Solar Shakya Clan • Ancestors of Gautama Buddha",
                                          category: "Suryavamsha King",
                                          tradition: "General Purana",
                                          parent: "gen-post-mahabharata-kosala",
                                          parentName: "Post-Mahabharata Kosala Kings",
                                          consort: "Queen Mayadevi & Prajapati Gautami",
                                          vahana: "Royal Chariot of Kapilavastu",
                                          ayudha: "Dharma Chakra & Royal Staff",
                                          color: "#CA8A04",
                                          glowColor: "rgba(202, 138, 4, 0.8)",
                                          icon: "🪷",
                                          summary: "Descent from Sanjayaka -> Shakya -> Suddhodana. The Shakya clan of the Solar Dynasty ruled Kapilavastu; Suddhodana's son Prince Siddhartha became Gautama Buddha.",
                                          shloka: {
                                            devanagari: "सञ्जयात् शाक्यस्तस्मात् शुद्धोदनस्ततो सिद्धार्थः । राहुलस्तस्य पुत्रोऽभूत् प्रसेनजित् ततः परम् ॥",
                                            transliteration: "Sañjayāt śākyas tasmāt śuddhodanas tato siddhārthaḥ | Rāhulas tasya putro'bhūt prasenajit tataḥ param ||",
                                            source: "Vishnu Purana 4.22.12 & Bhagavata 9.12.14",
                                            meaning: "From Sanjaya came Shakya, from him Suddhodana, and from him Siddhartha (Buddha); his son was Rahula, and after him came King Prasenajit of Kosala."
                                          },
                                          details: `
                                            The Puranas explicitly document the connection between the ancient Ikshvaku dynasty of Sri Rama and the Shakya royal house.
                                            Prince Siddhartha renounced his royal inheritance to seek universal liberation, becoming the teacher of Ahimsa and compassion, while his son Rahula and nephew Prasenajit ruled the empire.
                                          `,
                                          keyAttributes: ["Solar Dynasty roots of the Shakya republic", "King Suddhodana ruled from Kapilavastu", "Canonical bridge between Vedic monarchy and classical history"],
                                          children: [
                                            {
                                              id: "gen-prasenajit-sumitra",
                                              name: "King Prasenajit & King Sumitra (Last Puranic Ikshvaku)",
                                              sanskrit: "राजा प्रसेनजित् एवं राजा सुमित्र (सूर्यवंश अन्तिम नरेश)",
                                              title: "Emperors of Kosala • The Culmination of the Puranic Solar Line",
                                              category: "Suryavamsha King",
                                              tradition: "General Purana",
                                              parent: "gen-shakya-suddhodana",
                                              parentName: "King Shakya & Suddhodana",
                                              consort: "Queen Mallika of Kosala",
                                              vahana: "Imperial Kosala Chariot",
                                              ayudha: "Dharma Scepter & Royal Crown",
                                              color: "#EAB308",
                                              glowColor: "rgba(234, 179, 8, 0.85)",
                                              icon: "👑",
                                              summary: "King Prasenajit was the great patron of Dharma in Shravasti; the Puranas conclude the classical Ikshvaku king-list with King Sumitra, after whom the dynasty branched into the classical regional kingdoms.",
                                              shloka: {
                                                devanagari: "सुमित्रं प्राप्य राजानं संस्थां प्राप्स्यति वै कलौ । इक्ष्वाकूणामयं वंशः सुमित्रान्तो भविष्यति ॥",
                                                transliteration: "Sumitraṁ prāpya rājānaṁ saṁsthāṁ prāpsyati vai kalau | Ikṣvākūṇām ayaṁ vaṁśaḥ sumitrānto bhaviṣyati ||",
                                                source: "Vishnu Purana 4.22.14 & Bhagavata 9.12.16",
                                                meaning: "Reaching King Sumitra in the Kali Yuga, the classical Ikshvaku dynasty reaches its conclusion; thus the ancient lineage is designated as ending with Sumitra."
                                              },
                                              details: `
                                                King Prasenajit ruled the united realm of Kosala from Shravasti, renowned for his discourses on moral justice and patron of all spiritual seekers.
                                                The line continued through Ksudraka, Ranaka, Suratha, and King Sumitra.
                                                Following Sumitra, the royal princes established the celebrated Suryavamshi dynasties across Rajasthan, Malwa, and northern India.
                                              `,
                                              keyAttributes: ["King Prasenajit ruled from Shravasti", "King Sumitra celebrated as the last canonical Ikshvaku sovereign", "Fountainhead of the medieval Solar Rajput houses"],
                                              children: [
                                                {
                                                  id: "gen-later-solar-kings",
                                                  name: "Classical Suryavamshi Monarchs to 500 AD (Yashodharman)",
                                                  sanskrit: "उत्तर सूर्यवंशीय सम्राजः (यशोधर्मन् एवं वर्धनाः • ५०० ईस्वी)",
                                                  title: "Emperors of Malwa & Thanesar • Defeaters of the Hunas (c. 500–528 AD)",
                                                  category: "Suryavamsha King",
                                                  tradition: "General Purana",
                                                  parent: "gen-prasenajit-sumitra",
                                                  parentName: "King Prasenajit & King Sumitra",
                                                  consort: "Empresses of Malwa",
                                                  vahana: "Imperial War Chariot",
                                                  ayudha: "Victory Pillar of Sondani & Solar Sword",
                                                  color: "#FACC15",
                                                  glowColor: "rgba(250, 204, 21, 0.9)",
                                                  icon: "🏛️",
                                                  summary: "Preserving the solar legacy down to c. 500 AD. King Yashodharman of Malwa (Sondani inscription, 528 AD) shattered the invading Hunas, and King Pushyabhuti founded the Vardhana dynasty of Thanesar.",
                                                  shloka: {
                                                    devanagari: "येनाज्ञा न प्रणीता नृपतिभिरखिलैः सादरं धार्यमाणा यस्योदग्रं न नम्रं शिर इह विहितं शूलपाणिं विहाय ॥",
                                                    transliteration: "Yenājñā na praṇītā nṛpatibhir akhilaiḥ sādaraṁ dhāryamāṇā yasyodagraṁ na namraṁ śira iha vihitaṁ śūla-pāṇiṁ vihāya ||",
                                                    source: "Sondani Pillar Inscription of Yashodharman (528 AD)",
                                                    meaning: "Whose imperial command was honored by all sovereigns of the earth, and whose proud head never bowed before anyone in the three worlds—except before Lord Shiva who wields the Trident!"
                                                  },
                                                  details: `
                                                    By 500 AD, the ancient Solar lineage manifested through heroic defenders of Sanatan civilization:
                                                    King Yashodharman of Malwa crushed the brutal Huna invader Mihirakula, erecting the colossal victory pillars at Sondani.
                                                    Concurrently, King Pushyabhuti laid the foundations of the Vardhana dynasty at Thanesar, which culminated in Emperor Harshavardhana.
                                                  `,
                                                  keyAttributes: ["Brought the Solar lineage to c. 500–528 AD", "Defeated the fierce Huna invaders at the Battle of Sondani", "Re-established classical Vedic temple culture across northern India"],
                                                  children: [
                {
                  id: "gen-gurjara-pratihara-bappa",
                  name: "Imperial Gurjara-Pratiharas & Bappa Rawal (c. 728-1000 AD)",
                  sanskrit: "प्रतिहार साम्राज्य एवं बप्पा रावल (गुहिल वंश संस्थापक)",
                  title: "Defenders of Aryavarta & Founders of Chittorgarh Sovereign Dynasty (c. 728-1000 AD)",
                  category: "Suryavamsha Kings",
                  tradition: "General Purana",
                  parent: "gen-later-solar-kings",
                  parentName: "Classical Suryavamshi Monarchs to 500 AD (Yashodharman)",
                  consort: "Queens of Vallabhi & Mewar",
                  vahana: "War Steed & Rajput Royal Chariot",
                  ayudha: "Khanda Sword & Eklingji Bhala",
                  color: "#FACC15",
                  glowColor: "rgba(250, 204, 21, 0.9)",
                  icon: "🛡️",
                  summary: "Continuing the solar line from Lava through Vijayasena of Vallabhi. In c. 728 AD, Bappa Rawal was blessed by Sage Harit Rishi at Eklingji, received the sovereign state of Mewar, and repelled the Caliphate invasions. The Gurjara-Pratiharas preserved northern India as descendants of Lakshmana (Lakshmana-vamsha).",
                  shloka: {
                    devanagari: "हंसो हि बप्प-नामाभून् मुक्ता-मणिरिव क्षितौ । हारीत-मुनि-प्रसादेन प्राप राज्यमकण्टकम् ॥",
                    transliteration: "Hamso hi bappa-namabhun mukta-manir iva kshitau | Harita-muni-prasadena prapa rajyam akantakam ||",
                    source: "Eklingji Inscription of Mewar (c. 971 AD) & Gwalior Prashasti",
                    meaning: "Like a spotless crest jewel upon the earth was Bappa Rawal; by the divine grace and blessings of Sage Harit Rishi at Eklingji, he attained an unshakeable and sovereign kingdom that defended the eternal Dharma."
                  },
                  details: `
                    The genealogy of the Solar Dynasty (Suryavamsha) in western India directly bridges the epic age with medieval epigraphy:
                    - **Descent from Lava:** The Guhila-Sisodia royal house traces patrilineal descent directly to Sri Rama's son Lava through Guhaditya and King Vijayasena of Vallabhi.
                    - **Bappa Rawal (r. 728–753 AD):** Consecrated by Sage Harit Rishi at the shrine of Shri Eklingji (Lord Shiva) in Kailashpuri near Udaipur. Bappa captured the impregnable Chittorgarh fort, struck coinage bearing the Trident and Kamadhenu, and led the confederacy that shattered the early Umayyad incursions into Rajputana.
                    - **Gurjara-Pratihara Imperial Line:** The Gwalior Prashasti of Emperor Mihira Bhoja (836–885 AD) records the imperial Pratihara dynasty as *Saumitri-vamsha* (descended from Lakshmana, the faithful guardian and brother of Rama), who held the gates of Aryavarta for three centuries.
                  `,
                  keyAttributes: ["Carried the Solar Dynasty from 500 AD into the medieval era", "Consecrated by Sage Harit Rishi as Diwan of Eklingji", "Repelled early invasions and founded the sovereign seat of Chittorgarh"],
                  children: [
                    {
                      id: "gen-ranas-kumbha-sanga",
                      name: "Maharana Kumbha & Maharana Sanga of Mewar (c. 1433-1528 AD)",
                      sanskrit: "महाराणा कुम्भा एवं राणा सांगा (सिसोदिया सूर्यवंश)",
                      title: "Polymath Sovereign, Architect of Vijay Stambha & Head of the Rajput Confederacy",
                      category: "Suryavamsha Kings",
                      tradition: "General Purana",
                      parent: "gen-gurjara-pratihara-bappa",
                      parentName: "Imperial Gurjara-Pratiharas & Bappa Rawal (c. 728-1000 AD)",
                      consort: "Queens of Mewar (including Kumbhaldevi & Ratnaprabha)",
                      vahana: "Imperial War Horse",
                      ayudha: "Khanda Sword & Vijay Stambha Standard",
                      color: "#FACC15",
                      glowColor: "rgba(250, 204, 21, 0.95)",
                      icon: "🏰",
                      summary: "Rana Kumbha (r. 1433-1468) authored the Sangitaraja, constructed 32 of Mewar's 84 forts including Kumbhalgarh and the colossal Vijay Stambha (dedicated to Lord Vishnu). His grandson Maharana Sangram Singh I (Rana Sanga, r. 1508-1528) united 108 Rajput kings under the historic Solar banner.",
                      shloka: {
                        devanagari: "कुम्भकर्ण-महीपालो जयस्तम्भं चकार यः । विष्णु-भक्ति-रतो विद्वान् सर्व-शास्त्र-विशारदः ॥",
                        transliteration: "Kumbhakarna-mahipalo jaya-stambhah cakara yah | Vishnu-bhakti-rato vidvan sarva-sastra-visaradah ||",
                        source: "Kumbhalgarh Stone Inscription (1460 AD)",
                        meaning: "Maharana Kumbhakarna, emperor of Mewar, erected the sacred Vijay Stambha in Chittor; a devoted servant of Lord Vishnu, deeply versed in all sacred arts, Vedas, and architectural sciences."
                      },
                      details: `
                        The Sisodia branch of the Suryavamsha reached an artistic and martial zenith in the 15th and early 16th centuries:
                        - **Maharana Kumbha:** Undefeated in 56 military engagements, he was a renowned Vedic scholar, musician (*Sangitaraja*), and patron of architecture who commissioned the marble Ranakpur Jain temple and built the colossal 9-storey Vijay Stambha (Kirti Stambha) adorned with hundreds of stone-sculpted Puranic deities.
                        - **Rana Sanga:** The legendary warrior who bore eighty wounds from battle, lost an eye and an arm in defense of the realm, and united the entirety of Rajasthan and central India under the sacred Suryavamshi banner before the Battle of Khanwa (1527 AD).
                      `,
                      keyAttributes: ["Built the Vijay Stambha dedicated to Lord Vishnu", "Authored monumental treatises on Sanskrit literature and music", "United 108 royal houses under the historic Hindu confederacy"],
                      children: [
                        {
                          id: "gen-maharana-pratap",
                          name: "Maharana Pratap Singh & Rana Amar Singh I (1572-1620 AD)",
                          sanskrit: "प्रातःस्मरणीय महाराणा प्रताप सिंह एवं अमर सिंह प्रथम",
                          title: "Unbroken Symbol of Dharma & Independence – Battle of Haldighati (1576 AD)",
                          category: "Suryavamsha Kings",
                          tradition: "General Purana",
                          parent: "gen-ranas-kumbha-sanga",
                          parentName: "Maharana Kumbha & Maharana Sanga of Mewar (c. 1433-1528 AD)",
                          consort: "Maharani Ajabde Punwar & Queens of Mewar",
                          vahana: "The Incomparable War Stallion Chetak",
                          ayudha: "Double Khanda & 25-Kilogram Mewari Bhala (Spear)",
                          color: "#FACC15",
                          glowColor: "rgba(250, 204, 21, 1.0)",
                          icon: "⚔️",
                          summary: "The celebrated 16th-century avatar of Kshatriya chivalry. Reigned 1572-1597 AD. Refused to surrender sovereign dignity, fought the heroic Battle of Haldighati (1576 AD) astride Chetak, and reclaimed almost the entirety of Mewar from Chavand. Succeeded by Maharana Amar Singh I and Maharana Raj Singh I.",
                          shloka: {
                            devanagari: "प्रताप-रुद्रो रण-रङ्ग-भीमः स्व-धर्म-रक्षा-कृत-निश्चयोऽभूत् । चेतक-वाजी-सहितो जिगाय न ननाम कदापि शत्रु-पुरतः ॥",
                            transliteration: "Pratapa-rudro rana-ranga-bhimah sva-dharma-raksha-krita-niscayo'bhut | Cetaka-vaji-sahito jigaya na nanama kadapi shatru-puratah ||",
                            source: "Rajaprasasti Mahakavya (Rajsamand Inscription, Canto 4)",
                            meaning: "Fierce as Lord Rudra on the battlefield, Maharana Pratap was resolutely dedicated to the defense of Sva-Dharma; charging upon his faithful stallion Chetak, his head never bowed before any imperial conqueror."
                          },
                          details: `
                            Maharana Pratap Singh stands as the immortal pillar of the Suryavamsha line:
                            - **Haldighati (June 18, 1576):** Against overwhelming imperial odds, Pratap stood firm in the pass of Haldighati. His faithful war horse Chetak leapt onto an armored elephant to deliver Pratap's spear thrust, immortalized in Rajasthani folklore.
                            - **Forest Exile & Grass Roti Legend:** For over a decade, Pratap and his family lived in the Aravalli hills, eating grass bread (*Ghas ki Roti*) rather than bending his knee. Supported by the Bhil tribesmen and the boundless treasury donated by his minister Bhama Shah, he reconquered 32 out of 36 garrisons.
                            - **Maharana Raj Singh I (1652–1680 AD):** Great-grandson of Pratap, he constructed the monumental marble Rajsamand Lake and famously offered sanctuary to the sacred deities of Lord Krishna (Shri Srinathji and Dwarkadheesh) when temples were being destroyed in the north, establishing Nathdwara in Mewar.
                          `,
                          keyAttributes: ["Fought the Battle of Haldighati (1576 AD) for civilizational freedom", "Never surrendered sovereignty or royal solar insignia", "Patronized the safety of Shri Srinathji at Nathdwara"],
                          children: [
                            {
                              id: "gen-mewar-modern-2026",
                              name: "The Modern Suryavamshi House of Mewar to 2026 (Udaipur)",
                              sanskrit: "आधुनिक मेवाड़ सूर्यवंश (उदयपुर – २०२६ ईस्वी पर्यन्त)",
                              title: "Living Custodians & Diwans of Shri Eklingji Mahadeva – 1400-Year Unbroken Lineage",
                              category: "Living Solar Dynasty",
                              tradition: "General Purana",
                              parent: "gen-maharana-pratap",
                              parentName: "Maharana Pratap Singh & Rana Amar Singh I (1572-1620 AD)",
                              consort: "Maharanis of the House of Mewar",
                              vahana: "Royal Sun Standard (Surya Dhvaja)",
                              ayudha: "Sacred Ancestral Mewari Talwar & Surya Emblem",
                              color: "#FACC15",
                              glowColor: "rgba(250, 204, 21, 1.0)",
                              icon: "☀️",
                              summary: "Through Maharana Fateh Singh (1884-1930) and Maharana Bhagwat Singh (1955-1984), down to living representatives Maharana Arvind Singh Mewar and Lakshyaraj Singh Mewar in 2026. The world's longest continuously documented royal lineage, preserving the historic motto: 'जो दृढ़ राखे धर्म, ताहि राखे करतार'.",
                              shloka: {
                                devanagari: "जो दृढ़ राखे धर्म को, ताहि राखे करतार । सूर्य-वंशोऽयमक्षय्यो वर्तते जगतीतले ॥",
                                transliteration: "Jo dridha rakhe dharma ko, tahi rakhe karatar | Surya-vamsho'yam akshayyo vartate jagati-tale ||",
                                source: "State Motto & Royal Seal of Mewar (Udaipur)",
                                meaning: "He who steadfastly upholds Dharma is preserved and safeguarded by the Supreme Creator! This eternal Solar Dynasty continues unbroken upon this earth down to the modern era."
                              },
                              details: `
                                The Mewar royal family in Udaipur represents an unbroken chain of living tradition down to 2026:
                                - **Maharana Fateh Singh (1884–1930):** Revered for his moral rectitude; he famously refused to attend the British imperial Delhi Durbar of 1903 and 1911 as a subject, upholding the dignity of Bappa Rawal and Maharana Pratap.
                                - **Maharana Bhagwat Singh (1955–1984):** Established the Maharana of Mewar Charitable Foundation (MMCF), transforming the City Palace of Udaipur into a world-class living museum, Vedic library, and charitable trust for dharmic education and medicine.
                                - **Living Continuity in 2026:** Arvind Singh Mewar and Lakshyaraj Singh Mewar actively continue the ancestral Vedic rituals as the hereditary *Diwan* (custodian) of the Shri Eklingji Mahadeva Temple, maintaining daily pujas, Navaratri darbars, and social welfare programs in Rajasthan.
                              `,
                              keyAttributes: ["Direct living patrilineal lineage from Sri Rama and Lava to 2026", "Hereditary Diwan of Shri Eklingji Mahadeva Temple", "Royal emblem: 'Jo Dridh Rakhe Dharma, Tahi Rakhe Kartar'"],
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "gen-kachhwaha-jaipur-2026",
                  name: "Kachhwaha Suryavamsha of Amber & Jaipur to 2026",
                  sanskrit: "कछवाहा सूर्यवंश (आमेर एवं जयपुर – २०२६ ईस्वी पर्यन्त)",
                  title: "Descendants of Kusha – Builders of Jaipur, Jantar Mantar & Govind Dev Ji Custodians",
                  category: "Living Solar Dynasty",
                  tradition: "General Purana",
                  parent: "gen-later-solar-kings",
                  parentName: "Classical Suryavamshi Monarchs to 500 AD (Yashodharman)",
                  consort: "Empresses & Maharanis of Amber and Jaipur (including Maharani Gayatri Devi)",
                  vahana: "Panchranga Flag (Five-Colored Solar Banner)",
                  ayudha: "Khanda Sword & Samrat Yantra Sundial",
                  color: "#FACC15",
                  glowColor: "rgba(250, 204, 21, 0.95)",
                  icon: "👑",
                  summary: "Tracing patrilineal descent from Kusha (elder twin of Lava). Raja Man Singh I built the Govind Dev Ji temple in Vrindavan; Maharaja Sawai Jai Singh II founded Jaipur in 1727 AD and constructed the world-renowned Jantar Mantar observatories. Represented in 2026 by titular Maharaja Padmanabh Singh of Jaipur.",
                  shloka: {
                    devanagari: "यतो धर्मस्ततो जयः । कुश-वंश-समुद्भूताः कछवाहा महीक्षितः ॥",
                    transliteration: "Yato dharmas tato jayah | Kusha-vamsa-samudbhutah kachavaha mahikshitah ||",
                    source: "State Motto & Epigraphic Genealogy of Jaipur",
                    meaning: "Where there is Dharma, there is Victory! The illustrious Kachwaha monarchs, born of the lineage of Kusha, uphold the cosmic order and protect the sacred realm."
                  },
                  details: `
                    The Kachhwaha dynasty of Amber and Jaipur constitutes the second great surviving branch of the Suryavamsha:
                    - **Descent from Kusha:** Detailed in the genealogies (*Kurmavamsa*) and Ain-i-Akbari, the Kachhwaha kings are direct descendants of Rama's son Kusha who migrated from Gwalior and Narwar to Dhundhar (Amber).
                    - **Raja Man Singh I (1550–1614 AD):** A consummate statesman and commander who built the seven-storey red sandstone temple of Shri Govind Dev Ji in Vrindavan and fortified Amber Palace.
                    - **Maharaja Sawai Jai Singh II (1688–1743 AD):** One of the greatest astronomer-kings in world history; he calculated astronomical tables (*Zij-i Muhammad Shahi*), founded the planned geometric city of Jaipur according to Shilpa Shastra, performed the Ashvamedha Yajna, and brought the sacred idol of Govind Dev Ji to the City Palace of Jaipur.
                    - **Living Heritage in 2026:** Titular Maharaja Padmanabh Singh of Jaipur preserves the living custody of the City Palace, Jaigarh, and the worship of Govind Dev Ji, carrying forward the Kushavaha solar heritage in modern India.
                  `,
                  keyAttributes: ["Direct patrilineal descent from Kusha (son of Sri Rama)", "Constructed the planned capital of Jaipur and Jantar Mantar", "Hereditary guardians of the Shri Govind Dev Ji Temple"],
                  children: []
                }
              ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]

                    }
                  ]
                },
                {
                  id: "gen-lava",
                  name: "King Lava (Ruler of Uttara Kosala)",
                  sanskrit: "राजा लवः (श्रावस्तीपतिः)",
                  title: "Younger Twin Son of Sri Rama & Founder of Lavapuri",
                  category: "Suryavamsha King",
                  tradition: "General Purana",
                  parent: "gen-avatar-rama",
                  parentName: "Sri Rama",
                  consort: "Solar Princess",
                  vahana: "War Chariot",
                  ayudha: "Dhanus & Quiver",
                  color: "#38BDF8",
                  glowColor: "rgba(56, 189, 248, 0.8)",
                  icon: "🏰",
                  summary: "Twin son of Sri Rama, crowned king of Northern Kosala with his capital at Shravasti; founded Lavapuri (modern Lahore).",
                  shloka: {
                    devanagari: "श्रावस्तीति पुरी रम्या लवस्य च महात्मनः ।",
                    transliteration: "Śrāvastīti purī ramyā lavasya ca mahātmanaḥ |",
                    source: "Ramayana (Uttara Kanda 108.5)",
                    meaning: "The delightful city of Shravasti was established for the high-souled Lava."
                  },
                  details: `
                    Lava mastered all divine weapons (*Astras*) under Sage Valmiki's tutelage in the Tamasa river hermitage.
                    As king of Uttara Kosala, his reign from Shravasti was marked by justice, learning, and defense of Vedic culture.
                  `,
                  keyAttributes: ["King of Shravasti", "Founder of Lavapuri", "Valmiki's disciple"],
                  children: []
                }
              ]
            },
            {
              id: "gen-avatar-balarama",
              name: "8. Lord Balarama (Haladhara)",
              sanskrit: "भगवान् बलराम (हलायुध / शेषावतार)",
              title: "Avatar of Ananta Shesha & Master of Strength",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Princess Revati",
              vahana: "Airavata-Class War Elephant",
              ayudha: "Hala (Ploughshare), Musala (Pestle)",
              color: "#64748B",
              glowColor: "rgba(100, 116, 139, 0.8)",
              icon: "🌾",
              summary: "Seventh child of Devaki transferred to Rohini's womb; elder brother of Krishna and eternal companion.",
              shloka: {
                devanagari: "वहसि वपुषि विशदे वसनं जलदाभम् । हलहतिभीतिमिलितयमुनाभम् । केशव धृतहलधररूप जय जगदीश हरे ॥",
                transliteration: "Vahasi vapuṣi viśade vasanaṁ jaladābham | Hala-hati-bhīti-milita-yamunābham | Keśava dhṛta-haladhara-rūpa jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 8)",
                meaning: "O Keshava! Upon Your fair white form You wear garments dark as storm clouds, resembling the Yamuna river frightened by Your plough. Glory to You in plough-wielding form!"
              },
              details: `
                Lord Balarama represents primal spiritual strength (*Bala*). He diverted the course of the Yamuna River with His divine plough (*Hala*), mentored both Bhima and Duryodhana in the art of mace warfare (*Gada-yuddha*), and maintained impartiality during the Mahabharata war by embarking on a sacred pilgrimage (*Tirtha-yatra*).
              `,
              keyAttributes: ["Shesha incarnation", "Master of mace-fighting", "Symbol of agriculture & strength"],
              children: [
                {
                  id: "gen-balarama-sons",
                  name: "Nishatha & Ulmuka",
                  sanskrit: "निशठ एवं उल्मुख",
                  title: "Princes of Dvaraka & Sons of Balarama and Revati",
                  category: "Yadava Dynasty",
                  tradition: "General Purana",
                  parent: "gen-avatar-balarama",
                  parentName: "Lord Balarama",
                  consort: "Yadava Princesses",
                  vahana: "War Chariot",
                  ayudha: "Mace & Bow",
                  color: "#94A3B8",
                  glowColor: "rgba(148, 163, 184, 0.8)",
                  icon: "🛡️",
                  summary: "Heroic sons of Balarama who fought valiantly in the defense of Dvaraka against Salva and Rukmi.",
                  shloka: {
                    devanagari: "बलदेवस्य रेवत्यां निशठोल्मुखकावुभौ ।",
                    transliteration: "Baladevasya revatyāṁ niśaṭholmukakāv ubhau |",
                    source: "Bhagavata Purana 9.24.66",
                    meaning: "Unto Baladeva through Revati were born both Nishatha and Ulmuka."
                  },
                  details: `
                    The princes Nishatha and Ulmuka were noted warriors of the Vrishni federation, guarding Dvaraka during Krishna's strategic campaigns across Aryavarta.
                  `,
                  keyAttributes: ["Vrishni heroes", "Defenders of Dvaraka", "Revati's children"],
                  children: []
                }
              ]
            },
            {
              id: "gen-avatar-krishna",
              name: "9. Sri Krishna (Purna Purushottama)",
              sanskrit: "श्रीकृष्ण (पूर्ण पुरुषोत्तम / जगद्गुरु)",
              title: "The Supreme Purna Avatara & Speaker of the Bhagavad Gita",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Ashtabharya (Rukmini, Satyabhama, Jambavati, Kalindi, Mitravinda, Nagnajiti, Bhadra, Lakshmana) & Radha",
              vahana: "Garuda / Golden Chariot",
              ayudha: "Sudarshana Chakra, Kaumodaki Gada, Murali Flute",
              color: "#8B5CF6",
              glowColor: "rgba(139, 92, 246, 0.9)",
              icon: "🪈",
              summary: "Eighth son of Vasudeva and Devaki; delivered the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra.",
              shloka: {
                devanagari: "कृष्णाय वासुदेवाय हरये परमात्मने । प्रणतक्लेशनाशाय गोविन्दाय नमो नमः ॥",
                transliteration: "Kṛṣṇāya vāsudevāya haraye paramātmane | Praṇata-kleśa-nāśāya govindāya namo namaḥ ||",
                source: "Bhagavata Purana 10.73.16",
                meaning: "Salutations again and again unto Krishna, the son of Vasudeva, the Supreme Soul who removes all distress of surrendered souls, Govinda!"
              },
              details: `
                Sri Krishna is revered as the *Purna Avatara*—the complete, unattenuated manifestation of Divinity on earth.
                From His childhood in Gokula destroying demons (Putana, Kamsa) to establishing Dvaraka, serving as Arjuna's charioteer, delivering the timeless Gita, and uniting Aryavarta, He demonstrated that transcendental bliss and selfless duty are one.
              `,
              keyAttributes: [
                "Speaker of Srimad Bhagavad Gita",
                "Jagadguru (Universal Teacher)",
                "Purna Avatara (Complete Divinity)"
              ],
              children: [
                {
                  id: "gen-pradyumna",
                  name: "Lord Pradyumna (Emanation of Kamadeva)",
                  sanskrit: "प्रद्युम्न (कामकला / श्रीकृष्णपुत्र)",
                  title: "Crown Prince of Dvaraka & S人格 of Transcendental Beauty",
                  category: "Yadava Dynasty",
                  tradition: "General Purana",
                  parent: "gen-avatar-krishna",
                  parentName: "Sri Krishna",
                  consort: "Princess Mayavati & Princess Rukmavti",
                  vahana: "Makara Chariot",
                  ayudha: "Pushpa-Bana (Floral Arrows of Desire), Sharnga Bow",
                  color: "#EC4899",
                  glowColor: "rgba(236, 72, 153, 0.8)",
                  icon: "🏹",
                  summary: "Firstborn son of Sri Krishna and Queen Rukmini; reincarnation of Kamadeva, the god of love.",
                  shloka: {
                    devanagari: "प्रद्युम्नो रुक्मिणीपुत्रः साम्बश्च जाम्बवतीसुतः ।",
                    transliteration: "Pradyumno rukmiṇī-putraḥ sāmbaś ca jāmbavatī-sutaḥ |",
                    source: "Bhagavata Purana 10.61.8",
                    meaning: "Pradyumna was the son of Rukmini, and Samba was the son of Jambavati."
                  },
                  details: `
                    When Kamadeva was incinerated by Shiva's third eye, Shiva prophesied he would be born as Krishna's eldest son.
                    Abducted as an infant by the demon Sambara and thrown into the sea, Pradyumna was raised by Mayavati (incarnation of Rati), grew to defeat Sambara, and returned triumphantly to Dvaraka.
                  `,
                  keyAttributes: ["Reincarnation of Kamadeva", "Hero of Dvaraka", "Third member of Chaturvyuha"],
                  children: [
                    {
                      id: "gen-aniruddha",
                      name: "Prince Aniruddha (The Invincible)",
                      sanskrit: "अनिरुद्ध (अप्रतिरथ / उषापति)",
                      title: "The Unopposed Hero & Husband of Princess Usha",
                      category: "Yadava Dynasty",
                      tradition: "General Purana",
                      parent: "gen-pradyumna",
                      parentName: "Lord Pradyumna",
                      consort: "Princess Usha (Daughter of Banasura)",
                      vahana: "Golden Chariot",
                      ayudha: "Chakra, Sword & Shield",
                      color: "#F43F5E",
                      glowColor: "rgba(244, 63, 94, 0.8)",
                      icon: "⚔️",
                      summary: "Son of Pradyumna and Rukmavati; married Usha, leading to the divine confrontation at Sonitapura between Krishna and Shiva.",
                      shloka: {
                        devanagari: "अनिरुद्धो बभौ तत्र मेघेष्विव दिवाकरः ।",
                        transliteration: "Aniruddho babhau tatra megheṣv iva divākaraḥ |",
                        source: "Bhagavata Purana 10.62.33",
                        meaning: "Aniruddha shone resplendent amidst the ranks of enemy troops like the sun piercing through monsoon clouds."
                      },
                      details: `
                        Princess Usha saw Aniruddha in a dream and had her companion Chitralekha bring him to Sonitapura.
                        When Banasura imprisoned him with serpent ropes, Sri Krishna and Balarama marched with the Yadava army, culminating in Shiva granting peace and Banasura blessing the union.
                      `,
                      keyAttributes: ["Fourth member of Chaturvyuha", "Husband of Usha", "Hero of Sonitapura"],
                      children: [
                        {
                          id: "gen-vajranabha",
                          name: "King Vajranabha (Sole Heir of Dvaraka)",
                          sanskrit: "राजा वज्रनाभ (मथुराधिपति / यदुवंश-रक्षक)",
                          title: "Great-Grandson of Sri Krishna & Consecrator of Vraja",
                          category: "Yadava Dynasty",
                          tradition: "General Purana",
                          parent: "gen-aniruddha",
                          parentName: "Prince Aniruddha",
                          consort: "Yadava Queen",
                          vahana: "Imperial Chariot",
                          ayudha: "Vajra-Scepter & Royal Bow",
                          color: "#F59E0B",
                          glowColor: "rgba(245, 158, 11, 0.8)",
                          icon: "👑",
                          summary: "Great-grandson of Sri Krishna; crowned king of Mathura by Arjuna and consecrated the sacred deities of Vraja.",
                          shloka: {
                            devanagari: "अनिरुद्धस्य च सुतो वज्रो नाम महायशाः । मथुरायां कृतो राजा पाण्डवैर्दीर्घदर्शिभिः ॥",
                            transliteration: "Aniruddhasya ca suto vajro nāma mahāyaśāḥ | Mathurāyāṁ kṛto rājā pāṇḍavair dīrgha-darśibhiḥ ||",
                            source: "Vishnu Purana 5.38.34",
                            meaning: "The glorious son of Aniruddha named Vajra was established as King of Mathura by the far-sighted Pandavas."
                          },
                          details: `
                            Vajranabha was the sole surviving dynastic prince of Krishna's direct line following the mausala-lila at Prabhasa.
                            Arjuna crowned him king at Mathura. Guided by Sage Shandilya, Vajranabha excavated the sacred sites of Vrindavan, Govardhan, and Barsana, carving the eternal deities of Govindadeva, Gopinatha, and Madana-Mohana.
                          `,
                          keyAttributes: [
                            "Sole surviving Yadava dynastic heir",
                            "Consecrated deities of Mathura & Vrindavan",
                            "Bridge between Dvapara and Kaliyuga"
                          ],
                          children: [
                        {
                          id: "gen-pratibahu-subahu",
                          name: "Kings Pratibahu & Subahu of Mathura",
                          sanskrit: "राजा प्रतिबाहु एवं सुबाहु (शूरसेन नरेश)",
                          title: "Great-Grandsons of Sri Krishna • Consecrators of the Sacred Shrines of Braj",
                          category: "Yaduvamsha Kings",
                          tradition: "General Purana",
                          parent: "gen-vajranabha",
                          parentName: "King Vajranabha",
                          consort: "Princesses of the Solar Dynasty",
                          vahana: "Royal Chariot of Mathura",
                          ayudha: "Dharma Standard & Golden Discus",
                          color: "#818CF8",
                          glowColor: "rgba(129, 140, 248, 0.8)",
                          icon: "🪷",
                          summary: "Sons of King Vajranabha; ruled Mathura and Shurasena, consecrated the eternal Krishna temples of Braj (Govardhan, Keshavadeva, Harideva) preserving the sacred memory of Sri Krishna into the historic era.",
                          shloka: {
                            devanagari: "वज्रस्य पुत्रः प्रतिबाहुस्तस्माच्च सुबाहुर्नृपः । शूरसेनेषु राज्यं तु चक्रतुः कृष्णकीर्तिनौ ॥",
                            transliteration: "Vajrasya putraḥ pratibāhus tasmāc ca subāhur nṛpaḥ | Śūraseneṣu rājyaṁ tu cakratuḥ kṛṣṇa-kīrtinau ||",
                            source: "Vishnu Purana 4.15 & Harivamsha",
                            meaning: "King Vajra's son was Pratibahu, and from him was born Subahu; both ruled the realm of Shurasena, singing the eternal glories of Lord Sri Krishna."
                          },
                          details: `
                            Installed by the Pandavas in the ancestral capital of Mathura after the disappearance of the Yadu heroes, Vajranabha and his sons Pratibahu and Subahu identified the sacred spots of Sri Krishna's Lilas.
                            They carved the iconic deities of Govardhanadhari, Keshavadeva, and Baladeva, establishing the sacred pilgrimage circuit of Braj Mandala.
                          `,
                          keyAttributes: ["Heirs of the Yaduvamsha after the Kurukshetra era", "Consecrated the primary temples of Braj Mandala", "Carried the divine Krishna heritage into recorded history"],
                          children: []
                        }
                      ]

                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "gen-avatar-buddha",
              name: "10A. Sugata Buddha (Teacher of Compassion)",
              sanskrit: "बुद्धावतार (सुगत / अहिंसा-प्रवर्तक)",
              title: "The Silent Teacher of Universal Non-Violence (Ahimsa)",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Yashodhara",
              vahana: "Walking Meditation",
              ayudha: "Dharma Chakra, Patra (Begging Bowl)",
              color: "#F97316",
              glowColor: "rgba(249, 115, 22, 0.8)",
              icon: "☸️",
              summary: "Descended to preach Ahimsa (non-violence) and end sacrificial cruelty during the descent into Kaliyuga.",
              shloka: {
                devanagari: "निन्दसि यज्ञविधेरहह श्रुतिजातं सदयहृदय दर्शितपशुघातम् । केशव धृतबुद्धशरीर जय जगदीश हरे ॥",
                transliteration: "Nindasi yajña-vidher ahaha śruti-jātaṁ sadaya-hṛdaya darśita-paśu-ghātam | Keśava dhṛta-buddha-śarīra jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 9)",
                meaning: "O Keshava! With a heart overflowing with compassion, You condemned animal slaughter in mechanical rituals. Glory to You, Lord of the Universe in Buddha form!"
              },
              details: `
                In Puranic tradition, Buddha manifests to redirect humanity away from empty, cruel animal sacrifices back toward inner self-discipline, compassion (*Karuna*), and absolute non-injury (*Ahimsa*).
              `,
              keyAttributes: ["Master of Ahimsa", "Compassion for all sentient life", "Enlightenment beneath Bodhi tree"],
              children: []
            },
            {
              id: "gen-avatar-kalki",
              name: "10B. Kalki Avatara (The Cosmic Purifier)",
              sanskrit: "कल्कि अवतार (कलि-कल्मष-नाशन)",
              title: "The Future White Steed Warrior Ushering in the Satya Yuga",
              category: "Mahavatara",
              tradition: "General Purana",
              parent: "gen-dashavatara",
              parentName: "The 10 Mahavataras",
              consort: "Padma & Rama",
              vahana: "Devadatta (The Flying White Stallion)",
              ayudha: "Ratnamala Blazing Sword",
              color: "#E2E8F0",
              glowColor: "rgba(226, 232, 240, 0.9)",
              icon: "🐎",
              summary: "Future tenth avatara who will appear at the conclusion of Kaliyuga in Shambhala village to restore Satya Yuga.",
              shloka: {
                devanagari: "म्लेच्छनिवहनिधने कलयसि करवालम् । धूमकेतुमिव किमपि करालम् । केशव धृतकल्किशरीर जय जगदीश हरे ॥",
                transliteration: "Mleccha-nivaha-nidhane kalayasi karavālam | Dhūmaketum iva kim api karālam | Keśava dhṛta-kalki-śarīra jaya jagadīśa hare ||",
                source: "Gita Govinda (Dashavatara Stotram 10)",
                meaning: "O Keshava! For the annihilation of wicked tyrants You brandish a sword fierce as a flaming comet. Victory to You in Kalki form!"
              },
              details: `
                Born to the pious brahmana Vishnuyashas in Shambhala, Kalki will be trained by the immortal Parashurama.
                Mounted on the celestial winged white steed Devadatta, He will eliminate the pervasive moral degradation of Kaliyuga, inaugurating the golden age (*Krita / Satya Yuga*).
              `,
              keyAttributes: ["Inaugurator of Satya Yuga", "Wielder of blazing sword", "Student of Chiranjivi Parashurama"],
              children: []
            }
          ]
        },
        {
          id: "gen-shesha-garuda",
          name: "Ananta Shesha & Garuda (Divine Companions)",
          sanskrit: "अनन्त शेष एवं वैनतेय गरुड",
          title: "The Cosmic Bed & Divine Charioteer of Maha-Vishnu",
          category: "Celestial Companions",
          tradition: "General Purana",
          parent: "gen-vishnu",
          parentName: "Lord Maha-Vishnu",
          consort: "Naga & Suparna Maidens",
          vahana: "Cosmic Ocean & Celestial Sky",
          ayudha: "Thousand Hoods of Dharma, Amrita Vessel",
          color: "#10B981",
          glowColor: "rgba(16, 185, 129, 0.8)",
          icon: "🦅",
          summary: "The prime cosmic serpent holding planetary spheres upon His crests, and the golden eagle soaring through space.",
          shloka: {
            devanagari: "अनन्तं वासुकिं शेषं पद्मनाभं च कम्बलम् । शङ्खपालं धृतराष्ट्रं तक्षकं कालियं तथा ॥",
            transliteration: "Anantaṁ vāsukiṁ śeṣaṁ padmanābhaṁ ca kambalam | Śaṅkhapālaṁ dhṛtarāṣṭraṁ takṣakaṁ kāliyaṁ tathā ||",
            source: "Naga Stotram",
            meaning: "I meditate upon Ananta, Vasuki, Shesha, Padmanabha, Kambala, Shankhapala, Dhritarashtra, Takshaka, and Kaliya."
          },
          details: `
            Ananta Shesha symbolizes the infinite coiled potential of primordial time and space supporting all universes upon His hoods.
            Garuda, son of Sage Kashyapa and Vinata, represents the soaring speed of the Vedic mantras carrying prayers directly to the Supreme.
          `,
          keyAttributes: ["Support of planetary spheres", "Vahana of Vishnu", "Masters of earth and sky"],
          children: [
            {
              id: "gen-vasuki-nagas",
              name: "King Vasuki & The Sacred Nagas",
              sanskrit: "नागराज वासुकि एवं तक्षक",
              title: "Sovereign of the Netherworld & Cosmic Churning Rope",
              category: "Naga Dynasty",
              tradition: "General Purana",
              parent: "gen-shesha-garuda",
              parentName: "Ananta Shesha & Garuda",
              consort: "Shatashirsha",
              vahana: "Subterranean Waters",
              ayudha: "Naga-Pasha, Gem of Immortality",
              color: "#059669",
              glowColor: "rgba(5, 150, 105, 0.8)",
              icon: "🐍",
              summary: "Served as the churning rope around Mount Mandara during Samudra Manthana; rests as an ornament around Shiva's neck.",
              shloka: {
                devanagari: "मन्थानं मन्दरं कृत्वा नेत्रं कृत्वा तु वासुकिम् ।",
                transliteration: "Manthānaṁ mandaraṁ kṛtvā netraṁ kṛtvā tu vāsukim |",
                source: "Mahabharata (Adi Parva 18.13)",
                meaning: "Making Mount Mandara the churning rod and King Vasuki the churning cord, they churned the ocean."
              },
              details: `
                Vasuki willingly withstood intense friction as both Devas and Asuras pulled him back and forth during the cosmic churning.
                His sister Manasa Devi cures poison, and his brother Takshaka rules the serpent realm of Khandavaprastha.
              `,
              keyAttributes: ["Samudra Manthana hero", "Adornment of Lord Shiva", "Brother of Goddess Manasa"],
              children: [
                {
                  id: "gen-uloopi-iravan",
                  name: "Princess Uloopi & Warrior Iravan",
                  sanskrit: "नागकन्या उलूपी एवं वीर इरावान्",
                  title: "Naga Princess of the Ganga & Her Heroic Son",
                  category: "Naga Dynasty",
                  tradition: "General Purana",
                  parent: "gen-vasuki-nagas",
                  parentName: "King Vasuki & The Sacred Nagas",
                  consort: "Pandava Arjuna",
                  vahana: "Naga Chariot",
                  ayudha: "Nagamani (Life-restoring Gem), Spear",
                  color: "#34D399",
                  glowColor: "rgba(52, 211, 153, 0.8)",
                  icon: "💎",
                  summary: "Daughter of Naga King Kauravya; married Arjuna and revived him with the magical Nagamani after Babhruvahana's duel.",
                  shloka: {
                    devanagari: "उलूप्यास्तस्य भार्यायाः संभूतोऽर्जुननन्दनः । इरावान्नाम विक्रमवान् सर्वशस्त्रविशारदः ॥",
                    transliteration: "Ulūpyās tasya bhāryāyāḥ saṁbhūto'rjuna-nandanaḥ | Irāvān nāma vikramavān sarva-śastra-viśāradaḥ ||",
                    source: "Mahabharata (Bhishma Parva 90.5)",
                    meaning: "From Arjuna's wife Uloopi was born his heroic son named Iravan, valorous and proficient in all weaponry."
                  },
                  details: `
                    Uloopi initiated Arjuna into underwater combat and later used the life-restoring celestial gem (*Nagamani*) to bring him back to life when slain by Babhruvahana.
                    Her son Iravan fought heroically on the 8th day of Kurukshetra, worshipped as Koothandavar in Tamil Nadu.
                  `,
                  keyAttributes: ["Keeper of the Nagamani", "Hero mother of Iravan", "Protector of Arjuna"],
                  children: []
                }
              ]
            },
            {
              id: "gen-aruna-jatayu",
              name: "Aruna, Jatayu & Sampati",
              sanskrit: "अरुण, जटायु एवं संपाति",
              title: "The Celestial Charioteer of the Sun & Heroic Avians",
              category: "Celestial Avians",
              tradition: "General Purana",
              parent: "gen-shesha-garuda",
              parentName: "Ananta Shesha & Garuda",
              consort: "Shyeni",
              vahana: "Solar Sky",
              ayudha: "Razor Beak & Mighty Talons",
              color: "#F97316",
              glowColor: "rgba(249, 115, 22, 0.8)",
              icon: "🪶",
              summary: "Aruna drives the chariot of Surya; his noble sons Jatayu and Sampati aided Sri Rama during Sita's abduction.",
              shloka: {
                devanagari: "जटायुर्महावीर्यो रावणं प्रतिवारयत् । सीताया मोक्षणार्थाय युयुधे परमौजसा ॥",
                transliteration: "Jaṭāyur mahāvīryo rāvaṇaṁ prativārayat | Sītāyā mokṣaṇārthāya yuyudhe paramaujasā ||",
                source: "Ramayana (Aranya Kanda)",
                meaning: "The valiant Jatayu blocked Ravana's path, battling with supreme valor to liberate Sita."
              },
              details: `
                Aruna is the charioteer of the dawn, guiding the seven solar horses.
                His son Jatayu fought heroically against Ravana's flying Pushpaka Vimana to save Sita, holding onto life until he could inform Rama of her direction, receiving moksha from Rama's own hands.
                Jatayu's elder brother Sampati used his telescopic vision to spot Sita across the 100-yojana ocean in Lanka.
              `,
              keyAttributes: ["Supreme sacrifice for Rama", "Solar dawn heralds", "Liberated by Rama personally"],
              children: []
            }
          ]
        }
      ]
    },
    /* ======================================================================
       BRANCH 2: LORD SHIVA & THE SHAIVA LINEAGES
       ====================================================================== */
    {
      id: "gen-shiva",
      name: "Lord Shiva (Mahadeva / Shankara)",
      sanskrit: "भगवान् शिव (महादेव / शङ्कर)",
      title: "Supreme Lord of Yogis & Master of Pure Consciousness",
      category: "Trideva",
      tradition: "General Purana",
      parent: "general-parabrahman",
      parentName: "Parabrahman",
      consort: "Goddess Parvati (Uma / Mahakali / Annapurna)",
      vahana: "Nandi (The Sacred Bull)",
      ayudha: "Trishula, Damaru, Pinaka Bow, Agni, Crescent Moon",
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.85)",
      icon: "🔱",
      summary: "The benevolent transformer residing in timeless meditation on Mount Kailasha; patron of ascetics, arts, and liberation.",
      shloka: {
        devanagari: "कर्पूरगौरं करुणावतारं संसारसारं भुजगेन्द्रहारम् । सदावसन्तं हृदयारविन्दे भवं भवानीसहितं नमामि ॥",
        transliteration: "Karpūra-gauraṁ karuṇāvatāraṁ saṁsāra-sāraṁ bhujagendra-hāram | Sadā vasantaṁ hṛdayāravinde bhavaṁ bhavānī-sahitaṁ namāmi ||",
        source: "Yajurveda / Bhavani Ashtakam",
        meaning: "White as camphor, the embodiment of compassion, essence of worldly existence, garlanded with the king of serpents; I bow to Shiva accompanied by Bhavani, ever dwelling in the lotus of the heart."
      },
      details: `
        Lord Shiva is the eternal witness consciousness (*Shuddha Chaitanya*). Unlike destructive wrath, His dissolution (*Laya*) is compassionate renewal—clearing away decaying ignorance so vibrant life and enlightenment can blossom.
        He drinks the deadly poison *Halahala* to protect creation, earning the name *Nilakantha*.
      `,
      keyAttributes: [
        "Master of Yoga and Meditation (Yogeshvara)",
        "Lord of Sacred Cosmic Dance (Nataraja)",
        "Nilakantha: Compassionate savior of the universe"
      ],
      children: [
        {
          id: "gen-parvati",
          name: "Goddess Parvati (Uma / Haimavati)",
          sanskrit: "भगवती पार्वती (उमा / हैमवती / जगन्माता)",
          title: "Divine Mother of the Universe & Dynamic Cosmic Energy",
          category: "Tridevi",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Lord Shiva (Mahadeva)",
          vahana: "Dawon (Lion / Royal Tiger)",
          ayudha: "Trishula, Khadga, Lotus, Abhaya Mudra",
          color: "#F43F5E",
          glowColor: "rgba(244, 63, 94, 0.85)",
          icon: "🌺",
          summary: "Daughter of Himavan; performed supreme tapas to win Shiva's heart, uniting ascetic consciousness with maternal power.",
          shloka: {
            devanagari: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥",
            transliteration: "Sarva-maṅgala-māṅgalye śive sarvārtha-sādhike | Śaraṇye tryambake gauri nārāyaṇi namo'stu te ||",
            source: "Devi Mahatmyam (Chandi Patha)",
            meaning: "O Auspicious One of all auspiciousness, fulfilling all desires, the refuge, the three-eyed Gauri, Narayani, salutations unto You!"
          },
          details: `
            Parvati is the rebirth of Sati, demonstrating unswerving love through thousands of years of penance amidst the snows of the Himalayas.
            She manifests as Durga to destroy Mahishasura, as Kali to vanquish Raktabija, and as Annapurna to nourish every living creature in Kashi.
          `,
          keyAttributes: ["Supreme Mother (Jaganmata)", "Conqueror of Mahishasura as Durga", "Provider of cosmic nourishment as Annapurna"],
          children: []
        },
        {
          id: "gen-ganesha",
          name: "Lord Ganesha (Vighnaharta / Ganapati)",
          sanskrit: "भगवान् गणेश (विघ्नहर्ता / गणाधिप)",
          title: "Beloved Remover of Obstacles & Master of Intellect",
          category: "Kailasha Family",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Goddesses Riddhi (Brilliance) & Siddhi (Attainment)",
          vahana: "Mooshika (The Humble Mouse)",
          ayudha: "Parashu (Axe), Pasha (Noose), Ankusha (Goad), Modaka",
          color: "#EA580C",
          glowColor: "rgba(234, 88, 12, 0.85)",
          icon: "🐘",
          summary: "Revered as the First-Worshipped deity (*Prathama Pujya*) whose blessing is invoked at the commencement of all endeavors.",
          shloka: {
            devanagari: "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
            transliteration: "Vakratuṇḍa mahākāya sūrya-koṭi-samaprabha | Nirvighnaṁ kuru me deva sarva-kāryeṣu sarvadā ||",
            source: "Ganesha Purana",
            meaning: "O curved-trunked Lord of colossal form, radiant as millions of suns! Make all my ventures free of impediments, always and everywhere."
          },
          details: `
            Created by Parvati from turmeric paste and consecrated by Shiva with the head of an elephant, Ganesha embodies supreme intellect (*Buddhi*).
            He broke his own tusk to serve as an unbroken stylus to transcribe the grand epic Mahabharata dictated by Sage Veda Vyasa.
          `,
          keyAttributes: [
            "Prathama Pujya: Honored first before all endeavors",
            "Scribe of the Mahabharata with his broken tusk",
            "Master of Ganas (Universal forces of nature)"
          ],
          children: [
            {
              id: "gen-shubha-labha",
              name: "Shubha, Labha & Amoda-Pramoda",
              sanskrit: "शुभ, लाभ, आमोद एवं प्रमोद",
              title: "Sons of Ganesha: Personifications of Auspiciousness & Wealth",
              category: "Ganesha Family",
              tradition: "General Purana",
              parent: "gen-ganesha",
              parentName: "Lord Ganesha",
              consort: "Tushti & Pushti",
              vahana: "Celestial Chariot",
              ayudha: "Swastika & Kalasha",
              color: "#FB923C",
              glowColor: "rgba(251, 146, 60, 0.8)",
              icon: "卐",
              summary: "Shubha (Auspiciousness) and Labha (Prosperity) born of Riddhi and Siddhi; Amoda and Pramoda are divine joyous attendants.",
              shloka: {
                devanagari: "ऋद्धिसिद्धिसमायुक्तं शुभलाभसमन्वितम् । गणाधिपं नमस्कृत्य सर्वसिद्धिं लभेत सः ॥",
                transliteration: "Ṛddhi-siddhi-samāyuktaṁ śubha-lābha-samanvitam | Gaṇādhipaṁ namaskṛtya sarva-siddhiṁ labheta saḥ ||",
                source: "Ganesha Stava",
                meaning: "Accompanied by Riddhi and Siddhi, endowed with Shubha and Labha, bowing to the Lord of Ganas one attains all fulfillment."
              },
              details: `
                In business and spiritual ethics, 'Shubha' signifies righteous, pure intent, while 'Labha' signifies divine profit.
                Sanatan ethics dictates that genuine prosperity is enduring only when paired with auspicious ethical conduct.
              `,
              keyAttributes: ["Inscribed on business thresholds", "Harmony of ethics and wealth", "Sons of Riddhi & Siddhi"],
              children: []
            },
            {
              id: "gen-santoshi-mata",
              name: "Goddess Santoshi Mata",
              sanskrit: "सन्तोषी माता (तृप्ति-प्रदायिनी)",
              title: "Goddess of Radiant Contentment & Peace",
              category: "Ganesha Family",
              tradition: "General Purana",
              parent: "gen-ganesha",
              parentName: "Lord Ganesha",
              consort: "Self-Existent / Pure Devotion",
              vahana: "Golden Lotus",
              ayudha: "Sword of Truth, Golden Bowl of Jaggery & Roasted Gram",
              color: "#F472B6",
              glowColor: "rgba(244, 114, 182, 0.8)",
              icon: "🥣",
              summary: "Daughter of Lord Ganesha; dispels anxiety and blesses devotees with blissful contentment (*Santosha*).",
              shloka: {
                devanagari: "सन्तोषी माता जय सन्तोषी माता । अपने सेवक जन को सुख सम्पत्ति दाता ॥",
                transliteration: "Santoṣī mātā jaya santoṣī mātā | Apane sevaka jana ko sukha sampatti dātā ||",
                source: "Santoshi Mata Aarti",
                meaning: "Hail Mother Santoshi! Bestower of happiness and virtuous abundance upon Your humble servants."
              },
              details: `
                Born on Raksha Bandhan to provide a loving sister for Shubha and Labha, Santoshi Mata teaches that contentment (*Santosha*) is the highest wealth of the human soul.
              `,
              keyAttributes: ["Dispeller of jealousy and discontent", "Vrata of Friday jaggery offerings", "Daughter of Ganesha"],
              children: []
            }
          ]
        },
        {
          id: "gen-kartikeya",
          name: "Lord Kartikeya (Skanda / Murugan)",
          sanskrit: "भगवान् कार्तिकेय (स्कन्द / मुरुगन्)",
          title: "Supreme Commander-in-Chief of the Celestial Army",
          category: "Kailasha Family",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Goddesses Devasena (Divine Army) & Valli (Earthly Grace)",
          vahana: "Paravani (Peacock conqering serpentine pride)",
          ayudha: "Vel (Sacred Divine Spear of Wisdom), Shakti Bow",
          color: "#E11D48",
          glowColor: "rgba(225, 29, 72, 0.85)",
          icon: "🦚",
          summary: "Emanated from Shiva's six sparks of fire, nurtured by the six Krittikas; vanquished demon Surapadman.",
          shloka: {
            devanagari: "षण्मुखं पार्वतीपुत्रं क्रौञ्चशैलविमर्दनम् । कार्तिकेयं महाबाहुं प्रणतोऽस्मि महाबलम् ॥",
            transliteration: "Ṣaṇmukhaṁ pārvatī-putraṁ krauñca-śaila-vimardanam | Kārtikeyaṁ mahābāhuṁ praṇato'smi mahābalam ||",
            source: "Skanda Purana",
            meaning: "To the six-faced son of Parvati, who shattered the Krauncha mountain, the mighty-armed and heroic Kartikeya, I bow in reverence."
          },
          details: `
            Lord Kartikeya represents the piercing intellect of spiritual wisdom that vanquishes ignorance.
            His *Vel* (spear) represents deep, sharp, and broad wisdom. Surapadman was transformed by Kartikeya's compassion into his divine peacock vahana and cock flag.
          `,
          keyAttributes: [
            "Devasenapati: Commander of celestial forces",
            "Subrahmanya: Supreme knower of Brahman",
            "Teacher of the sacred Pranava OM to Shiva"
          ],
          children: [
            {
              id: "gen-devasena-valli",
              name: "Goddesses Devasena & Valli",
              sanskrit: "देवसेना एवं वल्ली",
              title: "Consorts of Skanda: Celestial Army & Earthly Devotion",
              category: "Kailasha Family",
              tradition: "General Purana",
              parent: "gen-kartikeya",
              parentName: "Lord Kartikeya",
              consort: "Lord Kartikeya (Murugan)",
              vahana: "Peacock & Royal Chariot",
              ayudha: "Lotus & Sugarcane Bow",
              color: "#FDA4AF",
              glowColor: "rgba(253, 164, 175, 0.8)",
              icon: "🪷",
              summary: "Devasena represents divine action (*Kriya Shakti*), while Valli represents passionate devotional love (*Iccha Shakti*).",
              shloka: {
                devanagari: "देवसेनापते तुभ्यं वल्लीकान्त नमस्तुभ्यम् ।",
                transliteration: "Devasenāpate tubhyaṁ vallīkānta namas tubhyam |",
                source: "Subrahmanya Bhujangam",
                meaning: "Salutations to You, Lord of Devasena and beloved consort of Valli."
              },
              details: `
                Devasena was the daughter of King Indra, presented after the celestial victory over Taraka.
                Valli was raised by tribal chieftain Nambi in the forests, showing that the Divine embraces both regal nobility and humble forest seekers.
              `,
              keyAttributes: ["Iccha Shakti & Kriya Shakti", "Celestial & earthly synthesis", "Protectors of devotees"],
              children: []
            }
          ]
        },
        {
          id: "gen-ashokasundari",
          name: "Goddess Ashokasundari",
          sanskrit: "देवी अशोकसुन्दरी (दुःख-विनाशिनी)",
          title: "Daughter of Kailasha & Dispeller of Mother Parvati's Grief",
          category: "Kailasha Family",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "King Nahusha (Sovereign of Earth and Heaven)",
          vahana: "Swan Chariot",
          ayudha: "Kalpavriksha Branch & Lotus",
          color: "#A855F7",
          glowColor: "rgba(168, 85, 247, 0.8)",
          icon: "🌳",
          summary: "Created from the wish-fulfilling Kalpavriksha tree to soothe Parvati's loneliness; mother of Emperor Yayati.",
          shloka: {
            devanagari: "अशोकेति समाख्याता सुन्दरी रूपसम्पदा । पार्वत्या नन्दिनी साक्षात् कल्पवृक्षसमुद्भवा ॥",
            transliteration: "Aśoketi samākhyātā sundarī rūpa-sampadā | Pārvatyā nandinī sākṣāt kalpa-vṛkṣa-samudbhavā ||",
            source: "Padma Purana (Bhumi Khanda 102)",
            meaning: "She is celebrated as Ashokasundari, magnificent in divine beauty, the daughter of Parvati manifested from the wish-fulfilling tree."
          },
          details: `
            Her name means 'The Beautiful Destroyer of Grief' (*A-shoka* = without sorrow).
            She was prophesied to wed the heroic Prince Nahusha of the Lunar Dynasty, bridging the divine court of Kailasha with the mortal monarchs of Bharatavarsha.
          `,
          keyAttributes: ["Wish-fulfilling tree origin", "Consort of King Nahusha", "Mother of Emperor Yayati"],
          children: [
            {
              id: "gen-nahusha-yayati",
              name: "King Nahusha & Emperor Yayati",
              sanskrit: "राजा नहुष एवं चक्रवर्ती ययाति",
              title: "Monarch of Heaven & Ancestor of Yadavas and Kurus",
              category: "Lunar Royalty",
              tradition: "General Purana",
              parent: "gen-ashokasundari",
              parentName: "Goddess Ashokasundari",
              consort: "Ashokasundari / Devayani & Sharmishtha",
              vahana: "Imperial Golden Chariot",
              ayudha: "Royal Scepter & Chakravartin Bow",
              color: "#C084FC",
              glowColor: "rgba(192, 132, 252, 0.8)",
              icon: "👑",
              summary: "Son of Ayu, wed Ashokasundari; his son Yayati's five sons founded the Yadavas, Pauravas, and major Aryavarta kingdoms.",
              shloka: {
                devanagari: "ययातेः पञ्च पुत्राश्च बभूवुर्देवसंनिभाः । यदुश्च पुरुश्चैव वंशद्वयप्रवर्तकौ ॥",
                transliteration: "Yayāteḥ pañca putrāś ca babhūvur deva-saṁnibhāḥ | Yaduś ca puruś caiva vaṁśa-dvaya-pravartakau ||",
                source: "Mahabharata (Adi Parva 75.31)",
                meaning: "Yayati had five sons radiant as gods; among them Yadu and Puru founded the two celebrated royal lineages."
              },
              details: `
                Nahusha was elevated to the throne of Indra during Indra's penance.
                His son Yayati became a universal Chakravartin. Through Queen Devayani (daughter of Shukracharya) he begot Yadu (ancestor of Krishna), and through Sharmishtha he begot Puru (ancestor of Bharata and the Pandavas).
              `,
              keyAttributes: ["Fountainhead of Yaduvamsha & Pauravavamsha", "Son of Ashokasundari", "Ruler of Aryavarta"],
              children: [
                {
                  id: "gen-pallava-kadamba",
                  name: "The Pallavas of Kanchi & Kadambas of Banavasi (to 500 AD)",
                  sanskrit: "पल्लव एवं कदम्ब साम्राज्य (कांची एवं बनवासी • ५०० ईस्वी)",
                  title: "Sovereigns of Dakshinapatha • Pioneers of Rock-Cut Dravidian Architecture",
                  category: "Dakshinapatha Dynasties",
                  tradition: "General Purana",
                  parent: "gen-nahusha-yayati",
                  parentName: "King Nahusha & Emperor Yayati",
                  consort: "Queens of Kanchipuram and Banavasi",
                  vahana: "Royal Bull (Vrishabha) & Golden Chariot",
                  ayudha: "Trishula Standard & Kadamba Royal Staff",
                  color: "#A855F7",
                  glowColor: "rgba(168, 85, 247, 0.85)",
                  icon: "🏛️",
                  summary: "Descending through the southern dynasties to c. 500 AD. King Mayurasharma founded the Kadamba dynasty of Banavasi; the early Pallavas of Kanchi consecrated rock-cut monolithic sanctuaries across Tamil Nadu.",
                  shloka: {
                    devanagari: "कांचीपुरवराधीशः पल्लवानां कुलोद्भवः । धर्मप्रतिष्ठां कृत्वा तु पालयामास मेदिनीम् ॥",
                    transliteration: "Kāñcī-pura-varādhīśaḥ pallavānāṁ kulodbhavaḥ | Dharma-pratiṣṭhāṁ kṛtvā tu pālayāmāsa medinīm ||",
                    source: "Talagunda & Kanchi Inscriptions (c. 450–500 AD)",
                    meaning: "The sovereign lord of the glorious city of Kanchi, born of the noble Pallava line, establishing righteousness, protected the earth with wisdom and valor."
                  },
                  details: `
                    By 500 AD, South Indian civilization flourished under the early Pallavas of Kanchi (Simhavarman, Skandavarman) and the Kadambas of Banavasi (founded by the scholar-warrior Mayurasharma, 345–365 AD).
                    They patronized Vedic learning, created early rock-cut shrines, and established Kanchipuram as one of the seven sacred Mokshapuri cities of Sanatan Dharma.
                  `,
                  keyAttributes: ["Brought the southern royal genealogies to 500 AD", "Rulers of Kanchipuram, one of the 7 Mokshapuris", "Pioneered early Dravidian rock-cut and structural temples"],
                  children: [
                {
                  id: "gen-imperial-cholas",
                  name: "The Imperial Chola Dynasty (c. 850-1279 AD)",
                  sanskrit: "बृहदीश्वर निर्माता चोल साम्राज्य (राजराज एवं राजेन्द्र चोल)",
                  title: "Masters of the Bay of Bengal, Builders of Brihadisvara & Patrons of Nataraja",
                  category: "Southern Dynasties",
                  tradition: "General Purana",
                  parent: "gen-pallava-kadamba",
                  parentName: "The Pallavas of Kanchi & Kadambas of Banavasi (to 500 AD)",
                  consort: "Empresses Lokamahadevi, Vanavan Mahadevi, Kundavai",
                  vahana: "Imperial War Galley & Tiger Standard (Puli Kodi)",
                  ayudha: "Chola Vel & Bronze Icon of Nataraja",
                  color: "#8B5CF6",
                  glowColor: "rgba(139, 92, 246, 0.85)",
                  icon: "🔱",
                  summary: "Under Emperor Rajaraja Chola I (r. 985-1014) and Rajendra Chola I (r. 1014-1044), the Cholas constructed the colossal Brihadisvara Temple (Peruvudaiyar Kovil) at Thanjavur and Gangaikonda Cholapuram. Masters of maritime trade across Southeast Asia, casting the world-famous sacred bronze icons of Shiva Nataraja.",
                  shloka: {
                    devanagari: "राजराजेन चोलेन तञ्जापुर-महा-पुरे । कारितः शङ्करावासो बृहदीश्वर-संज्ञितः ॥",
                    transliteration: "Rajarajena colena thanjapura-maha-pure | Karitah shankaravaso brihadisvara-samjnitah ||",
                    source: "Thanjavur Brihadisvara Temple Granite Inscriptions (1010 AD)",
                    meaning: "By Emperor Rajaraja Chola, in the great imperial city of Thanjavur, was erected the monumental stone abode of Lord Shiva, eternally venerated as Brihadisvara."
                  },
                  details: `
                    The Imperial Cholas brought Dravidian temple architecture and Vedic ritual arts to their zenith:
                    - **Brihadisvara Temple:** Consecrated in 1010 AD, its 216-foot granite vimana is crowned with an 80-ton single-stone octagonal shikhara. Built without mortar, it has withstood earthquakes for over a millennium.
                    - **Rajaraja and Rajendra:** Rajendra Chola led maritime expeditions across Sri Lanka, the Maldives, Srivijaya (Sumatra/Java), and Kedah, making the Bay of Bengal the 'Chola Lake' while bringing sacred water from the Ganges to consecrated Gangaikonda Cholapuram.
                    - **Nataraja Bronzes:** The Cholas perfected the lost-wax (*cire-perdue*) casting of Shiva Nataraja, creating the cosmic symbol of Ananda Tandava celebrated worldwide.
                  `,
                  keyAttributes: ["Built the monumental Brihadisvara Temple of Thanjavur (1010 AD)", "Created the golden standard for bronze sacred iconography", "United peninsular India and Southeast Asia under Vedic temple governance"],
                  children: [
                    {
                      id: "gen-vijayanagara-empire",
                      name: "Vijayanagara Empire (c. 1336-1646 AD)",
                      sanskrit: "विजयनगर साम्राज्य (हम्पी एवं विरूपाक्ष संरक्षक)",
                      title: "Guardians of South Indian Sanatan Dharma, Virupaksha, Tirupati & Srisailam",
                      category: "Southern Dynasties",
                      tradition: "General Purana",
                      parent: "gen-imperial-cholas",
                      parentName: "The Imperial Chola Dynasty (c. 850-1279 AD)",
                      consort: "Empresses Tirumala Devi & Chinnadevi",
                      vahana: "Varaha Standard (Boar Emblem) & Imperial White Steed",
                      ayudha: "Khanda Sword & Gopuram Shikhara",
                      color: "#8B5CF6",
                      glowColor: "rgba(139, 92, 246, 0.9)",
                      icon: "🏛️",
                      summary: "Founded in 1336 AD by Harihara I and Bukka Raya I with the guidance of Jagadguru Vidyaranya of Sringeri Peetha. Under Emperor Krishnadevaraya (r. 1509-1529), Vijayanagara became the shield of Southern India, rebuilding the colossal gopurams of Hampi Virupaksha, Tirupati Venkateshwara, Srisailam, and Madurai Meenakshi.",
                      shloka: {
                        devanagari: "विद्यारण्य-कृपा-पात्रो विजये नगरोत्तमे । कृष्णदेव-महीपालो धर्मं ररक्ष सर्वथा ॥",
                        transliteration: "Vidyaranya-kripa-patro vijaye nagarottame | Krishnadeva-mahipalo dharmam raraksha sarvatha ||",
                        source: "Amuktamalyada of Sri Krishnadevaraya & Hampi Prashasti",
                        meaning: "Blessed by the grace of Jagadguru Vidyaranya, in the supreme city of Vijayanagara, Emperor Krishnadevaraya safeguarded Sanatan Dharma in its entirety."
                      },
                      details: `
                        The Vijayanagara Empire served as the invincible rampart of Hindu civilization in the South:
                        - **Divine Inception:** Guided by Jagadguru Vidyaranya (the 12th Shankaracharya of Sringeri), the brothers Harihara and Bukka established the empire at Hampi on the banks of the Tungabhadra, dedicating their realm to Lord Virupaksha.
                        - **Krishnadevaraya:** Author of the Telugu classic *Amuktamalyada*, he was an ardent devotee of Lord Venkateshwara of Tirupati (donating gold-plated vimanas and diamond jewels) and constructed the majestic Raja-gopurams across South India.
                        - **Cosmic Heritage:** Preserved Vedic recitations, Carnatic music, Sanskrit commentaries by Sayana, and the temple architectural canons that survive today.
                      `,
                      keyAttributes: ["Founded with the blessings of Sringeri Jagadguru Vidyaranya", "Built the magnificent Raya Gopurams across South India", "Patronized Tirupati Venkateshwara, Hampi Virupaksha, and Srisailam"],
                      children: [
                        {
                          id: "gen-travancore-living-2026",
                          name: "The Travancore Royal House to 2026",
                          sanskrit: "त्रावणकोर पद्मनाभदास राजवंश (केरल – २०२६ ईस्वी पर्यन्त)",
                          title: "Keepers of Sree Padmanabhaswamy Temple & Living Chera-Kulasekhara Lineage to 2026",
                          category: "Living Royal Lineage",
                          tradition: "General Purana",
                          parent: "gen-vijayanagara-empire",
                          parentName: "Vijayanagara Empire (c. 1336-1646 AD)",
                          consort: "Maharanis of Travancore (including Maharani Aswathi Thirunal Gowri Lakshmi Bayi)",
                          vahana: "Conch Standard (Valampuri Shankha)",
                          ayudha: "Ottakkal Mandapam Golden Staff & Anantha Shayana Bow",
                          color: "#8B5CF6",
                          glowColor: "rgba(139, 92, 246, 1.0)",
                          icon: "🐚",
                          summary: "Tracing descent from the ancient Cheras and Kulasekhara Alwar. In 1750 AD, Anizham Thirunal Marthanda Varma performed Thrippadidanam, surrendering the entire state of Travancore to Lord Padmanabha as his eternal servant (Padmanabhadasa). Preserved unbroken to 2026 by Sree Moolam Thirunal Rama Varma.",
                          shloka: {
                            devanagari: "श्री-पद्मनाभ-चरणौ शरणं प्रपद्ये दासोऽहमस्य जगदीश्वर-शाश्वतस्य । राज्यं समर्प्य विधिना प्रणतोऽस्मि नित्यम् ॥",
                            transliteration: "Sri-padmanabha-charanau sharanam prapadye daso'ham asya jagadisvara-sasvatasya | Rajyam samarpya vidhina pranato'smi nityam ||",
                            source: "Thrippadidanam Inscription of Travancore (1750 AD)",
                            meaning: "At the lotus feet of Lord Sree Padmanabha I take eternal refuge; I am the humble servant of the Supreme Lord of the Cosmos, having surrendered the entirety of my kingdom to Him in perpetuity."
                          },
                          details: `
                            The royal house of Travancore represents an unbroken living tradition of divine trusteeship (*Dharmakarta*):
                            - **Thrippadidanam (1750 AD):** Maharaja Marthanda Varma laid his royal sword (*Udaival*) upon the steps of the sanctum of Sree Padmanabhaswamy in Thiruvananthapuram, declaring that the monarchs would rule only as *Padmanabhadasas* (servants of the Lord).
                            - **Swathi Thirunal Rama Varma (1813–1846):** A legendary composer of Carnatic and Hindustani classical music who composed over 400 kirtis dedicated to Lord Padmanabha.
                            - **Supreme Court of India Ruling & 2026 Status:** The Supreme Court of India in 2020 affirmed the hereditary shebaitship of the Travancore royal family. In 2026, Titular Maharaja Sree Moolam Thirunal Rama Varma serves as the trustee and custodian of the sacred sanctum, performing dawn rituals in traditional attire.
                          `,
                          keyAttributes: ["Surrendered state sovereignty to Lord Padmanabha in 1750 AD (Thrippadidanam)", "Hereditary Padmanabhadasas confirmed by the Supreme Court of India", "Unbroken living Chera-Kulasekhara royal tradition to 2026"],
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
                }
              ]

            }
          ]
        },
        {
          id: "gen-ayyappa",
          name: "Lord Ayyappa (Hariharaputra / Dharma Shasta)",
          sanskrit: "भगवान् अय्यप्प (हरिहरपुत्र / धर्मशास्ता)",
          title: "Sovereign of Sabarimala & Unifier of Shaiva and Vaishnava Paths",
          category: "Divine Synthesis",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Naishtika Brahmachari (Eternal Celibate)",
          vahana: "Pulivahana (The Royal Tigress)",
          ayudha: "Golden Bow, Arrow, Chin-Mudra",
          color: "#0284C7",
          glowColor: "rgba(2, 132, 199, 0.85)",
          icon: "🐅",
          summary: "Born of the divine union of Shiva and Mohini (Vishnu) to slay demoness Mahishi; upholder of universal brotherhood.",
          shloka: {
            devanagari: "लोकवीरं महापूज्यं सर्वलक्षारक्षकरं विभुम् । पार्वतीहृदयानन्दं शास्तारं प्रणमाम्यहम् ॥",
            transliteration: "Loka-vīraṁ mahā-pūjyaṁ sarva-rakṣā-karaṁ vibhum | Pārvatī-hṛdayānandaṁ śāstāraṁ praṇamāmy aham ||",
            source: "Shasta Stotram",
            meaning: "To the heroic protector of worlds, universally worshipped, bestower of absolute protection, joy of Parvati's heart, Lord Shasta, I bow."
          },
          details: `
            Lord Ayyappa embodies the synthesis of Shaivism and Vaishnavism.
            At Sabarimala, pilgrims observe 41 days of austere penance (*Mandala Vrata*) and transcend all caste, linguistic, and socio-economic distinctions, addressing each other as 'Swami'.
          `,
          keyAttributes: ["Slayer of Mahishi", "Master of yogic meditation with Yogapatta", "Embodiment of egalitarian devotion"],
          children: []
        },
        {
          id: "gen-manasa",
          name: "Goddess Manasa Devi",
          sanskrit: "देवी मनसा (विषहरा / नागभगिनी)",
          title: "Serpent Goddess of Healing & Deliverer from Toxins",
          category: "Kailasha Family",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Sage Jaratkaru",
          vahana: "Hamsa (Swan) / Serpent",
          ayudha: "Lotus, Live Serpent, Pitcher of Nectar",
          color: "#059669",
          glowColor: "rgba(5, 150, 105, 0.8)",
          icon: "🐍",
          summary: "Mind-born daughter of Shiva and sister of Vasuki; protects humanity from venom and infectious afflictions.",
          shloka: {
            devanagari: "जरत्कारुर्जगद्गौरी मनसा सिद्धयोगिनी । वैष्णवी नागभगिनी शैवी नागेश्वरात्मजा ॥",
            transliteration: "Jaratkārur jagad-gaurī manasā siddha-yoginī | Vaiṣṇavī nāga-bhaginī śaivī nāgeśvarātmajā ||",
            source: "Brahma Vaivarta Purana (Prakriti Khanda 46)",
            meaning: "Jaratkaru, Jagadgauri, Manasa, accomplished yogini, Vaishnavi, sister of the serpents, Shaivi, daughter of Shiva."
          },
          details: `
            Goddess Manasa's grace brings fertility and complete immunity from snakebite and toxic ailments.
            Her union with Sage Jaratkaru brought forth the illustrious Sage Astika.
          `,
          keyAttributes: ["Curer of snake venom", "Siddha Yogini", "Sister of Vasuki"],
          children: [
            {
              id: "gen-astika",
              name: "Sage Astika (Protector of Serpents)",
              sanskrit: "महर्षि आस्तीक (सर्पयज्ञ-निवारक)",
              title: "The Compassionate Sage Who Halted the Sarpa Satra",
              category: "Vedic Sage",
              tradition: "General Purana",
              parent: "gen-manasa",
              parentName: "Goddess Manasa Devi",
              consort: "Ascetic Hermitess",
              vahana: "Ascetic Walking Staff",
              ayudha: "Kamandalu & Sacred Kusha Grass",
              color: "#34D399",
              glowColor: "rgba(52, 211, 153, 0.8)",
              icon: "🧘",
              summary: "Son of Sage Jaratkaru and Manasa; intervened with Vedic eloquence at King Janamejaya's sacrificial arena, saving Takshaka.",
              shloka: {
                devanagari: "आस्तीकस्य वचः श्रुत्वा राजा सर्पसत्रमपाकरोत् ।",
                transliteration: "Āstīkasya vacaḥ śrutvā rājā sarpa-satram apākarot |",
                source: "Mahabharata (Adi Parva 56.20)",
                meaning: "Hearing the wise, profound words of Sage Astika, King Janamejaya brought the serpent sacrifice to an end."
              },
              details: `
                King Janamejaya had launched the *Sarpa Satra* to exterminate all serpents to avenge his father Parikshit's death by Takshaka.
                Astika arrived at the sacrificial fire and delighted the king with profound Vedic hymns and philosophical wisdom, requesting as his solitary boon the cessation of the massacre, saving the race of serpents.
              `,
              keyAttributes: ["Savior of the serpent race", "Halted King Janamejaya's vengeance", "Celebrated on Naga Panchami"],
              children: []
            }
          ]
        },
        {
          id: "gen-nandi",
          name: "Lord Nandi & The Pramatha Ganas",
          sanskrit: "नन्दिकेश्वर एवं प्रमथगणाः",
          title: "Chief of Shiva's Divine Retinue & Master of Dharma",
          category: "Kailasha Family",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Suyasha",
          vahana: "Cosmic Devotion",
          ayudha: "Golden Staff, Trishula, Battle-Axe",
          color: "#E2E8F0",
          glowColor: "rgba(226, 232, 240, 0.85)",
          icon: "🐂",
          summary: "Son of Sage Shilada; chief commander of Kailasha and the foremost teacher of devotion and music.",
          shloka: {
            devanagari: "नन्दिकेश महाभाग शिवध्यानपरायण । वरदो भव मे देव सर्वकामप्रसाधक ॥",
            transliteration: "Nandikeśa mahābhāga śiva-dhyāna-parāyaṇa | Varado bhava me deva sarva-kāma-prasādhaka ||",
            source: "Shiva Purana",
            meaning: "O noble Nandikeshwara, ever absorbed in meditation upon Shiva! Be the bestower of boons and granter of all righteous desires."
          },
          details: `
            Nandi represents unshakeable patient alertness (*Dhyana*). He sits facing the Shivalingam in perpetual contemplation.
            He is also the great master of music who played the mridangam during Shiva's cosmic Tandava dance.
          `,
          keyAttributes: ["Master of Shiva's retinue", "Gatekeeper of Kailasha", "Teacher of Sage Sanatkumara"],
          children: [
            {
              id: "gen-bhringi-chandeshwara",
              name: "Sage Bhringi & Chandeshwara Nayanar",
              sanskrit: "ऋषि भृङ्गी एवं चण्डेश्वर नयनार",
              title: "Foremost Ascetic Devotees of Mount Kailasha",
              category: "Shaiva Sages",
              tradition: "General Purana",
              parent: "gen-nandi",
              parentName: "Lord Nandi & The Pramatha Ganas",
              consort: "Ascetic Celibacy",
              vahana: "Three-Legged Walking Form",
              ayudha: "Staff of Tapasya, Shiva Axe",
              color: "#94A3B8",
              glowColor: "rgba(148, 163, 184, 0.8)",
              icon: "📿",
              summary: "Bhringi attained the three-legged form through single-pointed focus; Chandeshwara was crowned guardian of all temple offerings.",
              shloka: {
                devanagari: "भृङ्गिणे च नमस्तुभ्यं चण्डेशाय महात्मने ।",
                transliteration: "Bhṛṅgiṇe ca namas tubhyaṁ caṇḍeśāya mahātmane |",
                source: "Shaiva Agamas",
                meaning: "Salutations unto Sage Bhringi and unto the high-souled Chandeshwara."
              },
              details: `
                Bhringi wished only to circumambulate Shiva alone, prompting Shiva and Parvati to merge as *Ardhanarishvara*. When Bhringi became a beetle to drill through the center, Parvati smiled and blessed his extraordinary devotion.
                Chandeshwara defended his clay Shivalingam with absolute devotion and was crowned manager of all Shiva's belongings (*Nirmalya*).
              `,
              keyAttributes: ["Ardhanarishvara witnesses", "Single-pointed devotion", "Guardians of temple sanctity"],
              children: []
            }
          ]
        },
        {
          id: "gen-ekadasha-rudras",
          name: "The 11 Rudras (Ekadasha Rudra)",
          sanskrit: "एकादश रुद्राः (कपाली, पिङ्गल, भीम, विरुपाक्ष प्रभृतयः)",
          title: "The Eleven Fierce Cosmic Storm Powers of Dissolution",
          category: "Rudra Emanations",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Rudranis",
          vahana: "Raging Storm Clouds",
          ayudha: "Pinaka Bow, Lightning Arrows, Trishula",
          color: "#F87171",
          glowColor: "rgba(248, 113, 113, 0.85)",
          icon: "⚡",
          summary: "Emanated from Shiva's wrath to protect creation and dismantle moral degeneration: Kapali, Pingala, Bhima, Virupaksha, Vilohita, Shastra, Ajapada, Ahirbudhnya, Sambhu, Chanda, and Bhava.",
          shloka: {
            devanagari: "कपाली पिङ्गलो भीमो विरुपाक्षो विलोहितः । शास्ताऽजपादश्चैव तथाऽहिर्बुध्न्यसंज्ञकः । शम्भुश्चण्डश्च भवश्च रुद्रा एकादश स्मृताः ॥",
            transliteration: "Kapālī piṅgalo bhīmo virūpākṣo vilohitaḥ | Śāstājapādaś caiva tathāhirbudhnya-saṁjñakaḥ | Śambhuś caṇḍaś ca bhavaś ca rudrā ekādaśa smṛtāḥ ||",
            source: "Matsya Purana 171.39",
            meaning: "Kapali, Pingala, Bhima, Virupaksha, Vilohita, Shastra, Ajapada, Ahirbudhnya, Sambhu, Chanda, and Bhava are remembered as the Eleven Rudras."
          },
          details: `
            The Ekadasha Rudras govern atmospheric turbulence, thunder, cosmic metabolism, and the destruction of demonic pride.
            Lord Hanuman is celebrated across scriptures as the auspicious 11th Rudra Avatara, embodying infinite physical and spiritual strength dedicated to Sri Rama.
          `,
          keyAttributes: [
            "Governors of vital cosmic energies",
            "Slayers of cosmic arrogance",
            "Hanuman is the 11th Rudra Avatara"
          ],
          children: []
        },
        {
          id: "gen-bhairavas",
          name: "Ashta Bhairavas & Kaala Bhairava",
          sanskrit: "अष्टभैरवाः एवं कालभैरव",
          title: "The Fierce Protectors of Kashi & Masters of Time",
          category: "Bhairava Order",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Bhairavis",
          vahana: "Black Dog (Shvana)",
          ayudha: "Kapala (Skull-cup), Trishula, Khatvanga, Sword",
          color: "#475569",
          glowColor: "rgba(71, 85, 105, 0.9)",
          icon: "🗡️",
          summary: "Emanated from Shiva's third eye to shatter ego; Kaala Bhairava is the Kotwal (celestial guardian) of Kashi.",
          shloka: {
            devanagari: "देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् । नारदादियोगिवृन्दवन्दितं दिगम्बरं काशिकापुराधिनाथकालभैरवं भजे ॥",
            transliteration: "Deva-rāja-sevyamāna-pāvanāṅghri-paṅkajaṁ vyāla-yajña-sūtram indu-śekharaṁ kṛpākaram | Kāśikā-purādhinātha-kāla-bhairavaṁ bhaje ||",
            source: "Kaala Bhairava Ashtakam (Adi Shankara)",
            meaning: "Whose holy lotus feet are served by the King of Devas, who wears a serpent as sacred thread, with the crescent moon on His brow, Lord of Kashi, Kaala Bhairava I worship!"
          },
          details: `
            The Ashta Bhairavas comprise Asitanga, Ruru, Chanda, Krodha, Unmatta, Kapala, Bhishana, and Samhara.
            They guard the 8 directions and purge seekers of fear, negative psychic influences, and spiritual hypocrisy.
          `,
          keyAttributes: ["Kotwal of sacred Varanasi", "Conqueror of fear and mortality", "Dispeller of spiritual ego"],
          children: []
        },
        {
          id: "gen-virabhadra",
          name: "Lord Virabhadra & Goddess Bhadrakali",
          sanskrit: "भगवान् वीरभद्र एवं भद्रकाली",
          title: "The Fierce Avatara of Shiva's Wrath & Slayers of Daksha's Pride",
          category: "Fierce Emanation",
          tradition: "General Purana",
          parent: "gen-shiva",
          parentName: "Lord Shiva",
          consort: "Goddess Bhadrakali",
          vahana: "Thousand War Chariots",
          ayudha: "Sword of Righteous Retribution, Spear, Bow",
          color: "#B91C1C",
          glowColor: "rgba(185, 28, 28, 0.9)",
          icon: "⚔️",
          summary: "Emanated from Shiva's matted lock when Goddess Sati self-immolated at King Daksha's arrogant yajna.",
          shloka: {
            devanagari: "वीरभद्रो महातेजा रुद्रक्रोधात्समुत्थितः । दक्षयज्ञप्रमथनो लोकसंरक्षणक्षमः ॥",
            transliteration: "Vīrabhadro mahātejā rudra-krodhāt samutthitaḥ | Dakṣa-yajña-pramathano loka-saṁrakṣaṇa-kṣamaḥ ||",
            source: "Vayu Purana 30.120",
            meaning: "Virabhadra of immense brilliance arose from Rudra's wrath, the destroyer of Daksha's sacrifice, capable of protecting all worlds."
          },
          details: `
            Virabhadra marched with millions of Pramatha Ganas to Kankhal, extinguished Daksha's sacrificial fire, decapitated Daksha's arrogant head, and replaced it with a goat's head when Shiva's compassion was invoked, teaching that pride leads to folly.
          `,
          keyAttributes: ["Destroyer of corrupt rituals", "Slayer of Daksha's pride", "Protector of true Dharma"],
          children: []
        }
      ]
    },
    /* ======================================================================
       BRANCH 3: LORD BRAHMA & THE SAGE / PRAJAPATI LINEAGES
       ====================================================================== */
    {
      id: "gen-brahma",
      name: "Lord Brahma (Prajapati / Hiranyagarbha)",
      sanskrit: "भगवान् ब्रह्मा (प्रजापति / हिरण्यगर्भ)",
      title: "Master Architect of the Cosmos & Source of the Vedas",
      category: "Trideva",
      tradition: "General Purana",
      parent: "general-parabrahman",
      parentName: "Parabrahman",
      consort: "Goddess Saraswati (Vak / Gayatri / Savitri)",
      vahana: "Hamsa (The Sacred Swan of Divine Discrimination)",
      ayudha: "Vedas (Sacred Knowledge), Akshamala (Rosary), Kamandalu, Sruk",
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.85)",
      icon: "🪷",
      summary: "Born from the golden lotus sprouting from Vishnu's navel; creates the physical universe, species, and planetary ecosystems.",
      shloka: {
        devanagari: "ब्रह्माणं च चतुर्वक्त्रं कमलासनसंस्थितम् । वेदशास्त्रार्थतत्त्वज्ञं जगद्धातारमव्ययम् ॥",
        transliteration: "Brahmāṇaṁ ca catur-vaktraṁ kamalāsana-saṁsthitam | Veda-śāstrārtha-tattvajñaṁ jagad-dhātāram avyayam ||",
        source: "Brahma Purana",
        meaning: "To Brahma, the four-faced one seated upon the lotus, knower of the inner truth of the Vedas and Shastras, the eternal creator of the universe, I bow."
      },
      details: `
        Lord Brahma represents Rajas—the dynamic, constructive principle of existence.
        From His four minds emanated the four Vedas, the sciences (*Vedangas*), the Kumaras, and the mind-born Saptarishis who populated the physical and spiritual realms.
      `,
      keyAttributes: [
        "Four heads representing the 4 Vedas & cardinal directions",
        "Master of cosmological engineering",
        "Swan mount symbolizing supreme intellectual discrimination"
      ],
      children: [
        {
          id: "gen-saraswati",
          name: "Goddess Saraswati (Vak Devi)",
          sanskrit: "भगवती सरस्वती (वाग्देवी / शारदा)",
          title: "Supreme Goddess of Wisdom, Music, Arts & Science",
          category: "Tridevi",
          tradition: "General Purana",
          parent: "gen-brahma",
          parentName: "Lord Brahma",
          consort: "Lord Brahma (Creator)",
          vahana: "Hamsa (Swan) & Mayura (Peacock)",
          ayudha: "Veena (Harmony), Veda-Grantha (Wisdom), Akshamala, Chin-Mudra",
          color: "#F8FAFC",
          glowColor: "rgba(248, 250, 252, 0.9)",
          icon: "🪕",
          summary: "Emanated from Brahma's mouth as pure speech, melody, and spiritual illumination; patron of scholars and seekers.",
          shloka: {
            devanagari: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना । या ब्रह्माच्युतशङ्करप्रभृतिभिर्देवैः सदा वन्दिता सा मां पातु सरस्वती भगवती निःशेषजाड्यापहा ॥",
            transliteration: "Yā k開発-endu-tuṣāra-hāra-dhavalā yā śubhra-vastrāvṛtā yā vīṇā-vara-daṇḍa-maṇḍita-karā yā śveta-padmāsanā |",
            source: "Saraswati Vandana",
            meaning: "White as the kunda flower, the moon, and snow garland, robed in immaculate white, holding the sublime veena, seated on a white lotus, adored by Brahma, Vishnu, and Shiva; may Mother Saraswati dispel all ignorance."
          },
          details: `
            Goddess Saraswati embodies pure knowledge (*Vidya*). Her white swan represents discerning truth from illusion; her Veena represents tuning the mind to cosmic harmony.
          `,
          keyAttributes: ["Embodiment of Vak (Cosmic Speech)", "Patron of arts, literature & music", "Dispeller of mental darkness"],
          children: []
        },
        {
          id: "gen-kumaras",
          name: "The Four Sanat Kumaras",
          sanskrit: "चतुःसन (सनक, सनन्दन, सनातन, सनत्कुमार)",
          title: "The Eternal Ascetic Youths & Renowned Masters of Advaita",
          category: "Mind-Born Ascetics",
          tradition: "General Purana",
          parent: "gen-brahma",
          parentName: "Lord Brahma",
          consort: "Naishtika Brahmacharya (Pure Renunciation)",
          vahana: "Solar Rays",
          ayudha: "Jnana-Mudra & Vedic Verses",
          color: "#FBBF24",
          glowColor: "rgba(251, 191, 36, 0.85)",
          icon: "🧘",
          summary: "First mind-born sons of Brahma; refused to procreate, choosing to remain perpetual five-year-old enlightened ascetics.",
          shloka: {
            devanagari: "सनकं च सनन्दं च सनातनमथात्मजम् । सनत्कुमारं च मुनिं निष्क्रियानूर्ध्वरेतसः ॥",
            transliteration: "Sanakaṁ ca sanandaṁ ca sanātanam athātmajam | Sanatkumāraṁ ca muniṁ niṣkriyān ūrdhvaretasaḥ ||",
            source: "Bhagavata Purana 3.12.4",
            meaning: "Brahma created Sanaka, Sanandana, Sanatana, and Sanatkumara—sages entirely unattached to worldly action, established in eternal celibacy."
          },
          details: `
            The Four Kumaras wander all dimensions unclothed by worldly vanity, singing the glories of Narayana.
            They famously visited Vaikuntha where the gatekeepers Jaya and Vijaya blocked them, leading to the curse that initiated the three cosmic descents of Hiranyaksha, Ravana, and Shishupala.
          `,
          keyAttributes: ["Masters of pure Brahmacharya", "Initiators of the Sanatkumara Sampradaya", "Teachers of Narada in the Chandogya Upanishad"],
          children: []
        },
        {
          id: "gen-narada",
          name: "Devarshi Narada",
          sanskrit: "देवर्षि नारद (भक्ति-सूत्रकार / त्रिलोक-सञ्चारी)",
          title: "Celestial Messenger, Musician of the Gods & Master of Bhakti",
          category: "Celestial Sages",
          tradition: "General Purana",
          parent: "gen-brahma",
          parentName: "Lord Brahma",
          consort: "Transcendent Celibacy",
          vahana: "Mind-Travel Across Dimensions (Manovega)",
          ayudha: "Mahathi Veena, Kartalas (Cymbals)",
          color: "#FDE047",
          glowColor: "rgba(253, 224, 71, 0.85)",
          icon: "🪕",
          summary: "Son of Brahma who travels freely across all realms chanting 'Narayana! Narayana!', catalyzing divine events.",
          shloka: {
            devanagari: "अहो देवर्षिर्धन्योऽयं यत्कीर्तिं शार्ङ्गधन्वनः । गायन्माद्यन्निदं तन्त्र्या रमयत्यातुरं जगत् ॥",
            transliteration: "Aho devarṣir dhanyo'yaṁ yat-kīrtiṁ śārṅgadhanvanaḥ | Gāyan mādyann idaṁ tantryā ramayaty āturaṁ jagat ||",
            source: "Bhagavata Purana 1.6.38",
            meaning: "O blessed is Devarshi Narada, who singing with his lute the glories of Vishnu, enraptured in divine love, enchants and heals the distressed world!"
          },
          details: `
            Devarshi Narada is the author of the *Narada Bhakti Sutras*.
            He inspired Valmiki to compose the Ramayana, urged Veda Vyasa to author the Srimad Bhagavatam, initiated young Prahlada and Dhruva, and serves as the catalyst for universal spiritual evolution.
          `,
          keyAttributes: ["Author of Narada Bhakti Sutras", "Guide of Valmiki, Vyasa, Prahlada & Dhruva", "Master of Mahathi Veena"],
          children: []
        },
        {
          id: "gen-svayambhuva-manu",
          name: "Svayambhuva Manu & Shatarupa",
          sanskrit: "स्वायम्भुव मनु एवं शतरूपा",
          title: "The First Progenitors of Humanity & Codifiers of Dharma",
          category: "Manus",
          tradition: "General Purana",
          parent: "gen-brahma",
          parentName: "Lord Brahma",
          consort: "Queen Shatarupa (The First Woman)",
          vahana: "Royal Chariot of Jambudvipa",
          ayudha: "Dharma Scepter & Manusmriti Code",
          color: "#D97706",
          glowColor: "rgba(217, 119, 6, 0.8)",
          icon: "📜",
          summary: "Manifested from Brahma's two halves; established human social order, family life, and righteous governance on earth.",
          shloka: {
            devanagari: "स्वायम्भुवाय मनवे नमः सत्त्वस्वरूपिणे । प्रजानां पतये तुभ्यं धर्ममार्गोपदेशिने ॥",
            transliteration: "Svāyambhuvāya manave namaḥ sattva-svarūpiṇe | Prajānāṁ pataye tubhyaṁ dharma-mārgopadeśine ||",
            source: "Matsya Purana",
            meaning: "Salutations to Svayambhuva Manu, embodiment of purity, lord of living beings, instructor in the sacred path of Dharma."
          },
          details: `
            Svayambhuva Manu and Shatarupa had two illustrious sons, Priyavrata and Uttanapada, and three daughters: Akuti, Devahuti (mother of Kapila Muni), and Prasuti (mother of Sati).
            Their lineages established both the supreme royal dynasties and the great sage traditions of the earth.
          `,
          keyAttributes: ["First Manu of the current Kalpa", "Father of Priyavrata and Uttanapada", "Pioneer of civil society and ethics"],
          children: [
            {
              id: "gen-priyavrata-branch",
              name: "King Priyavrata & Emperor Bharata",
              sanskrit: "राजा प्रियव्रत एवं चक्रवर्ती भरत (जडभरत)",
              title: "Carver of the Seven Oceans & Progenitor of Bharatavarsha",
              category: "Solar Dynasty of Priyavrata",
              tradition: "General Purana",
              parent: "gen-svayambhuva-manu",
              parentName: "Svayambhuva Manu & Shatarupa",
              consort: "Barhishmati",
              vahana: "Solar Chariot",
              ayudha: "Chakravartin Wheel & Royal Staff",
              color: "#CA8A04",
              glowColor: "rgba(202, 138, 4, 0.8)",
              icon: "🌏",
              summary: "Priyavrata rode his fiery chariot behind the sun, carving the seven continents and oceans; his descendant Bharata gave our nation its sacred name.",
              shloka: {
                devanagari: "उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम् । वर्षं तद् भारतं नाम भारती यत्र सन्ततिः ॥",
                transliteration: "Uttaraṁ yat samudrasya himādreś caiva dakṣiṇam | Varṣaṁ tad bhārataṁ nāma bhāratī yatra santatiḥ ||",
                source: "Vishnu Purana 2.3.1",
                meaning: "The land that lies north of the ocean and south of the snowy Himalayas is called Bharatavarsha, and there dwell the descendants of Bharata."
              },
              details: `
                The lineage descended from Priyavrata -> Agnidhra -> Nabhi -> Rishabhadeva (Sage-Avatara of Vishnu) -> Emperor Bharata.
                Bharata renounced his universal empire to meditate in Salagrama Kshetra, reincarnated as a deer due to passing attachment, and was finally liberated as the enlightened Sage Jada Bharata.
              `,
              keyAttributes: ["Origin of the name 'Bharatavarsha'", "Rishabhadeva lineage", "Jada Bharata's Advaita discourse to Rahugana"],
              children: []
            },
            {
              id: "gen-uttanapada-dhruva",
              name: "King Uttanapada & Dhruva Maharaja",
              sanskrit: "राजा उत्तानपाद एवं भक्त ध्रुव",
              title: "The Five-Year-Old Ascetic Crowned as the Eternal Pole Star",
              category: "Paramabhaktas",
              tradition: "General Purana",
              parent: "gen-svayambhuva-manu",
              parentName: "Svayambhuva Manu & Shatarupa",
              consort: "Brahmi & Ila",
              vahana: "Dhruva Mandala (The Celestial Pivot)",
              ayudha: "Unswerving Devotion (Achala Bhakti)",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.85)",
              icon: "⭐",
              summary: "Hurt by stepmother Suruchi's harsh words, 5-year-old Dhruva meditated in Madhuvana, winning Vishnu's boon of the unshakeable Pole Star.",
              shloka: {
                devanagari: "ध्रुवं ध्रुवेण मनसा ध्रुवाय ध्रुवकर्मिणे । ध्रुवं पदमवाप्नोति ध्रुवलोके महीयते ॥",
                transliteration: "Dhruvaṁ dhruveṇa manasā dhruvāya dhruva-karmiṇe | Dhruvaṁ padam avāpnoti dhruva-loke mahīyate ||",
                source: "Bhagavata Purana 4.12",
                meaning: "With an unshakeable mind dedicated to the eternal Lord, Dhruva attained the eternal abode and is glorified in the celestial realm of Dhruvaloka."
              },
              details: `
                Guided by Sage Narada with the 12-syllable mantra *Om Namo Bhagavate Vasudevaya*, Dhruva stood on one leg without food or water until Vishnu appeared before him.
                His dynasty produced King Vena and Emperor Prithu, the first consecrated monarch who milked the Earth for humanity.
              `,
              keyAttributes: ["Eternal Pole Star (Dhruvaloka)", "Prithu Maharaja's ancestor", "Archetype of childhood resolve"],
              children: [
                {
                  id: "gen-emperor-prithu",
                  name: "Emperor Prithu & The Ten Prachetas",
                  sanskrit: "चक्रवर्ती पृथु एवं प्रचेतसः",
                  title: "First Consecrated King Who Milked the Earth (Prithvi)",
                  category: "Chakravartin Kings",
                  tradition: "General Purana",
                  parent: "gen-uttanapada-dhruva",
                  parentName: "King Uttanapada & Dhruva Maharaja",
                  consort: "Queen Archi (Incarnation of Lakshmi)",
                  vahana: "Imperial Golden Chariot",
                  ayudha: "Ajagava Bow, Golden Arrows of Governance",
                  color: "#16A34A",
                  glowColor: "rgba(22, 163, 74, 0.8)",
                  icon: "🌾",
                  summary: "Churned from the arms of dead King Vena by sages; pursued Mother Earth as a cow, milking her for grains and medicine for all humanity.",
                  shloka: {
                    devanagari: "दोधाम सर्वसस्यानि प्रजानां जीवनार्थिनः । पृथोश्च पृथिवी जाता विख्याता सचराचरे ॥",
                    transliteration: "Dodhāma sarva-sasyāni prajānāṁ jīvanārthinaḥ | Pṛthoś ca pṛthivī jātā vikhyātā sacarācare ||",
                    source: "Vishnu Purana 1.13.93",
                    meaning: "He milked all life-giving vegetation to nourish his people; from Prithu, the Earth came to be renowned throughout creation as 'Prithvi'."
                  },
                  details: `
                    Emperor Prithu leveled mountains, founded agriculture, planned villages and cities, and performed 99 horse sacrifices.
                    His lineage descended through Antardhana and Havirdhana down to the Ten Prachetas, who meditated underwater for 10,000 years under Lord Shiva's instruction (*Rudra Gita*).
                  `,
                  keyAttributes: ["Origin of the name 'Prithvi' for Earth", "First consecrated monarch (Adiraja)", "Master of agricultural engineering"],
                  children: []
                }
              ]
            },
            {
              id: "gen-devahuti-kapila",
              name: "Devahuti & Sage Kapila Muni",
              sanskrit: "देवहूति एवं साङ्ख्याचार्य कपिल मुनि",
              title: "Avatara of Vishnu & Founder of Samkhya Philosophy",
              category: "Philosophical Avatara",
              tradition: "General Purana",
              parent: "gen-svayambhuva-manu",
              parentName: "Svayambhuva Manu & Shatarupa",
              consort: "Sage Kardama (Husband of Devahuti)",
              vahana: "Ashrama of Siddhapada",
              ayudha: "Viveka (Discrimination of Purusha and Prakriti)",
              color: "#9333EA",
              glowColor: "rgba(147, 51, 234, 0.8)",
              icon: "🕉️",
              summary: "Son of Kardama Muni and Devahuti; delivered the profound philosophy of Samkhya (the 24 Tattvas) to his mother.",
              shloka: {
                devanagari: "कपिलस्तत्त्वसंख्याता भगवानात्ममायया । जातः स्वयम्भुवो पौत्रः कर्दमस्यात्मसंभवः ॥",
                transliteration: "Kapilas tattva-saṁkhyātā bhagavān ātma-māyayā | Jātaḥ svayambhuvo pautraḥ kardamasyātma-saṁbhavaḥ ||",
                source: "Bhagavata Purana 3.24.19",
                meaning: "Kapila, the enumerator of fundamental cosmic principles (Tattvas), was born by His own divine power as the son of Kardama and grandson of Svayambhuva Manu."
              },
              details: `
                In the Third Canto of the Bhagavata Purana, Kapila expounds the separation of pure consciousness (*Purusha*) from the dynamic material matrix (*Prakriti*), providing the foundational framework for Vedic metaphysics.
              `,
              keyAttributes: ["Founder of Samkhya philosophy", "Enumerated the 24 Tattvas", "Spiritual teacher to Mother Devahuti"],
              children: []
            }
          ]
        },
        {
          id: "gen-saptarishis",
          name: "The Saptarishis & Lineages",
          sanskrit: "सप्तर्षयः (वसिष्ठ, भृगु, अत्रि, पुलस्त्य, अङ्गिरा, पुलह, क्रतु, मरीचि)",
          title: "The Mind-Born Seers of Creation & Custodians of Vedic Wisdom",
          category: "Rishi Order",
          tradition: "General Purana",
          parent: "gen-brahma",
          parentName: "Lord Brahma",
          consort: "The Saptarishi Patnis (Arundhati, Khyati, Anasuya, etc.)",
          vahana: "Ursa Major Constellation (Saptarishi Mandala)",
          ayudha: "Kamandalu, Kusha Grass, Vedic Mantras",
          color: "#EAB308",
          glowColor: "rgba(234, 179, 8, 0.85)",
          icon: "✨",
          summary: "The primeval seers who transcribed the eternal hymns of the Vedas, guiding solar, lunar, and priestly lineages across the ages.",
          shloka: {
            devanagari: "कश्यपोऽत्रिर्भरद्वाजो विश्वामित्रोऽथ गौतमः । जमदग्निर्वसिष्ठश्च सप्तानां ऋषयो दिवि ॥",
            transliteration: "Kaśyapo'trir bharadvājo viśvāmitro'tha gautamaḥ | Jamadagnir vasiṣṭhaś ca saptānāṁ ṛṣayo divi ||",
            source: "Brihadaranyaka Upanishad 2.2.4",
            meaning: "Kashyapa, Atri, Bharadvaja, Vishvamitra, Gautama, Jamadagni, and Vashistha are the seven celestial seers shining in heaven."
          },
          details: `
            The Saptarishis are the cognitive pillars of cosmic administration. Each Manvantara has its specialized council of seven seers.
            Through their tapas, the cosmic laws (*Dharma*) and spiritual techniques (*Upasanas*) are maintained without decay.
          `,
          keyAttributes: [
            "Transcribers of the Rigveda, Samaveda, Yajurveda, Atharvaveda",
            "Founders of the Vedic Gotras",
            "Guiding constellations circling the Pole Star"
          ],
          children: [
            {
              id: "gen-vashistha-lineage",
              name: "Sage Vashistha to Vyasa & Shuka",
              sanskrit: "महर्षि वसिष्ठ - पराशर - व्यास - शुक परम्परा",
              title: "The Supreme Royal Preceptors & Compilers of Sacred Scriptures",
              category: "Guru Parampara",
              tradition: "General Purana",
              parent: "gen-saptarishis",
              parentName: "The Saptarishis & Lineages",
              consort: "Mother Arundhati (Exemplar of Fidelity)",
              vahana: "Kamadhenu (Nandini Cow)",
              ayudha: "Brahma-Danda (Staff of Spiritual Power)",
              color: "#FACC15",
              glowColor: "rgba(250, 204, 21, 0.85)",
              icon: "📿",
              summary: "Sage Vashistha -> Shakti Muni -> Sage Parashara (Author of Vishnu Purana) -> Maharshi Veda Vyasa (Compiler of Vedas) -> Shukadeva Muni.",
              shloka: {
                devanagari: "व्यासं वसिष्ठनप्तारं शक्तेः पौत्रमकल्मषम् । पराशरात्मजं वन्दे शुकतातं तपोनिधिम् ॥",
                transliteration: "Vyāsaṁ vasiṣṭha-naptāraṁ śakteḥ pautram akalmaṣam | Parāśarātmajaṁ vande śuka-tātaṁ tapo-nidhim ||",
                source: "Vishnu Sahasranama Dhyanam",
                meaning: "I bow to Sage Vyasa, great-grandson of Vashistha, grandson of Shakti, sinless son of Parashara, and illustrious father of Shukadeva, an ocean of penance."
              },
              details: `
                This is the foremost lineage of Vedic wisdom:
                1. **Vashistha**: Guru of the Solar Kings, owner of Kamadhenu, teacher of the Yoga Vashistha to Sri Rama.
                2. **Parashara**: Author of the Vishnu Purana and Brihat Parashara Hora Shastra (foundational astrology).
                3. **Veda Vyasa**: Krishna Dvaipayana, who divided the single Veda into four (Rig, Sama, Yajur, Atharva), compiled the 18 Mahapuranas, and authored the Mahabharata.
                4. **Shukadeva Muni**: Born enlightened, narrated the Srimad Bhagavata Purana to Emperor Parikshit on the banks of the Ganga.
              `,
              keyAttributes: [
                "Authors of the Mahabharata & 18 Puranas",
                "Spiritual guides to the Solar Dynasty",
                "Narrators of the Srimad Bhagavatam"
              ],
              children: []
            },
            {
              id: "gen-bhrigu-lineage",
              name: "Sage Bhrigu, Shukracharya & Shaunaka",
              sanskrit: "महर्षि भृगु - शुक्राचार्य - च्यवन - शौनक",
              title: "Master of Astrological Horoscopes, Sanjivani Vidya & Forest Rishis",
              category: "Bhargava Order",
              tradition: "General Purana",
              parent: "gen-saptarishis",
              parentName: "The Saptarishis & Lineages",
              consort: "Khyati & Puloma",
              vahana: "Ascetic Steps",
              ayudha: "Bhrigu Samhita Scroll, Sanjivani Mantra",
              color: "#F97316",
              glowColor: "rgba(249, 115, 22, 0.8)",
              icon: "📜",
              summary: "Bhrigu tested the Trimurti; his son Shukracharya mastered Sanjivani Vidya to revive the dead; his descendant Shaunaka headed 88,000 Naimisharanya sages.",
              shloka: {
                devanagari: "नमस्ते भृगुनाथाय सर्वविद्याप्रवर्तिने ।",
                transliteration: "Namaste bhṛgu-nāthāya sarva-vidyā-pravartine |",
                source: "Bhrigu Stuti",
                meaning: "Salutations to Lord Bhrigu, the propagator of all sacred sciences."
              },
              details: `
                From Bhrigu descended:
                • **Shukracharya**: Preceptor of Asuras, guru of ethics (*Shukra Niti*), and father of Queen Devayani (wife of Yayati).
                • **Chyavana Muni**: Regained youth through the Ashvins and created the rejuvenating herbal formula *Chyawanprash*.
                • **Shaunaka Rishi**: The great preceptor who hosted Suta Goswami at Naimisharanya forest, where all 18 Puranas were recited.
              `,
              keyAttributes: ["Master of Sanjivani Vidya", "Bhrigu Samhita astrology", "Leader of Naimisharanya rishis"],
              children: []
            },
            {
              id: "gen-atri-dattatreya",
              name: "Sage Atri, Anasuya & Lord Dattatreya",
              sanskrit: "महर्षि अत्रि, सती अनसूया एवं दत्तात्रेय",
              title: "The Trimurti Combined Avatara & The Embodiment of Universal Guru",
              category: "Trimurti Avatara",
              tradition: "General Purana",
              parent: "gen-saptarishis",
              parentName: "The Saptarishis & Lineages",
              consort: "Mother Anasuya (Supreme Chastity)",
              vahana: "Four Dogs (The 4 Vedas) & Kamadhenu",
              ayudha: "Trishula, Damaru, Sudarshana Chakra, Shankha, Kamandalu",
              color: "#EC4899",
              glowColor: "rgba(236, 72, 153, 0.85)",
              icon: "🧘",
              summary: "Mother Anasuya's chastity transformed Brahma, Vishnu, and Shiva into infants, who then merged as the three-headed Lord Dattatreya.",
              shloka: {
                devanagari: "दत्तात्रेयं महात्मानं वरदं भक्तवत्सलम् । प्रपन्नार्तिहरं वन्दे स्मर्तृगामी सनोऽवतु ॥",
                transliteration: "Dattātreyaṁ mahātmānaṁ varadaṁ bhakta-vatsalam | Prapannārti-haraṁ vande smartṛ-gāmī sano'vatu ||",
                source: "Dattatreya Stotram",
                meaning: "To the great-souled Dattatreya, bestower of boons, lover of devotees, dispeller of distress of the surrendered, who appears the moment He is remembered, I bow!"
              },
              details: `
                From Atri and Anasuya were born three sons: Soma (manifestation of Brahma, who founded the Lunar Dynasty), Durvasa (manifestation of Shiva's fiery tapas), and Dattatreya (manifestation of Vishnu).
                Dattatreya discovered 24 natural gurus (including the earth, water, fire, wind, honeybee, and spider) and initiated King Yadu and Parashurama.
              `,
              keyAttributes: [
                "Synthesis of Brahma, Vishnu, and Shiva",
                "Teacher of 24 gurus in nature",
                "Smartrugami: Appears the moment He is remembered"
              ],
              children: []
            },
            {
              id: "gen-pulastya-kubera",
              name: "Sage Pulastya, Vishrava & Lord Kubera",
              sanskrit: "महर्षि पुलस्त्य, विश्रवा एवं कुबेर",
              title: "Progenitors of Yakshas, Northern Lokapala & Cosmic Banker",
              category: "Lokapalas",
              tradition: "General Purana",
              parent: "gen-saptarishis",
              parentName: "The Saptarishis & Lineages",
              consort: "Goddess Bhadra (Riddhi)",
              vahana: "Pushpaka Vimana & Nara (Human-borne Palanquin)",
              ayudha: "Gada (Mace), Purnaghata (Pot of Jewels), Nakula (Mongoose)",
              color: "#FBBF24",
              glowColor: "rgba(251, 191, 36, 0.85)",
              icon: "💰",
              summary: "Pulastya -> Vishrava -> Kubera, the treasurer of heaven and close friend of Lord Shiva ruling Alakapuri.",
              shloka: {
                devanagari: "ॐ यक्षाय कुबेराय वैश्रवणाय धनधान्याधिपतये । धनधान्यसमृद्धिं मे देहि दापय स्वाहा ॥",
                transliteration: "Oṁ yakṣāya kuberāya vaiśravaṇāya dhana-dhānyādhipataye | Dhana-dhānya-samṛddhiṁ me dehi dāpaya svāhā ||",
                source: "Kubera Mantra",
                meaning: "OM, to Yaksha King Kubera, son of Vishrava, lord of wealth and grains, grant me abundance of wealth and prosperity!"
              },
              details: `
                Kubera performed severe penance at Mount Kailasha. Shiva was delighted by his devotion, made him King of Yakshas, guardian of the North (*Lokapala*), and treasurer of all cosmic wealth.
                His half-brothers were Ravana, Kumbhakarna, and Vibhishana, born to Vishrava through the Rakshasi Kaikesi.
              `,
              keyAttributes: ["Treasurer of Devas & Lord of Alakapuri", "Guardian of the Northern direction", "Owner of the Nine Nidhis (Navanidhi)"],
              children: []
            },
            {
              id: "gen-angiras-lineage",
              name: "Sage Angiras, Brihaspati & Drona",
              sanskrit: "महर्षि अङ्गिरा, बृहस्पति, भरद्वाज एवं द्रोणाचार्य",
              title: "Preceptors of the Gods, Masters of Dhanurveda & Royal Gurus",
              category: "Preceptor Lineage",
              tradition: "General Purana",
              parent: "gen-saptarishis",
              parentName: "The Saptarishis & Lineages",
              consort: "Tara & Kripi",
              vahana: "Celestial Chariot",
              ayudha: "Brahma-Tejas, Brahmashira Astra, Dhanurveda",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.8)",
              icon: "🏹",
              summary: "Angiras -> Brihaspati (Devaguru) -> Bharadvaja -> Dronacharya (Guru of Pandavas & Kauravas) -> Ashwatthama (Chiranjeevi).",
              shloka: {
                devanagari: "गुरवे सर्वलोकानां भिषजे भवरोगिणाम् । निधये सर्वविद्यानां दक्षिणामूर्तये नमः ॥",
                transliteration: "Gurave sarva-lokānāṁ bhiṣaje bhava-rogiṇām | Nidhaye sarva-vidyānāṁ dakṣiṇāmūrtaye namaḥ ||",
                source: "Guru Vandana",
                meaning: "To the Teacher of all worlds, the physician for worldly distress, reservoir of all sciences, salutations!"
              },
              details: `
                Brihaspati governs intellect, astronomy, and Vedic rituals for the Devas.
                His nephew/son Sage Bharadvaja compiled major Vedic hymns and medical Ayurveda. Bharadvaja's son Drona was born in a clay pitcher (*Drona*), mastered all celestial weapons from Parashurama, and tutored the Pandavas and Kauravas.
              `,
              keyAttributes: ["Preceptors of kings and gods", "Masters of Vedic military science (Dhanurveda)", "Drona & Ashwatthama heritage"],
              children: []
            }
          ]
        }
      ]
    },
    /* ======================================================================
       BRANCH 4: SAGE KASHYAPA & THE CELESTIAL MOTHERS (ALL CREATED BEINGS)
       ====================================================================== */
    {
      id: "gen-kashyapa",
      name: "Sage Kashyapa & The Cosmic Mothers",
      sanskrit: "महर्षि कश्यप एवं देवमाता अदिति, दिति प्रभृतयः",
      title: "Universal Father of Gods, Asuras, Nagas, Avians & Mortals",
      category: "Universal Progenitor",
      tradition: "General Purana",
      parent: "general-parabrahman",
      parentName: "Parabrahman",
      consort: "Daughters of Daksha (Aditi, Diti, Danu, Vinata, Kadru, Muni, Surabhi, etc.)",
      vahana: "Solar Hermitage",
      ayudha: "Kamandalu, Kusha Grass, Progenitive Mantras",
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.85)",
      icon: "☀️",
      summary: "Son of Sage Marichi; married 13 daughters of Daksha Prajapati, becoming the universal progenitor of all biological and celestial species.",
      shloka: {
        devanagari: "मरीचेः कश्यपः जज्ञे दक्षपुत्रीरतोषयत् । यतो देवास्तथा दैत्या नागाश्च खचरा नराः ॥",
        transliteration: "Marīceḥ kaśyapaḥ jajñe dakṣa-putrīr atoṣayat | Yato devās tathā daityā nāgāś ca khacarā narāḥ ||",
        source: "Matsya Purana 6.1",
        meaning: "From Marichi sprang Kashyapa, who wed the daughters of Daksha; from him originated Devas, Daityas, Nagas, avians, and mortals."
      },
      details: `
        Sage Kashyapa is the biological and spiritual root connecting the celestial realms to earthly dynasties.
        Through **Aditi** he begot the 12 Adityas (including Indra, Surya, and Vamana); through **Diti** the Daityas (Hiranyakashipu, Prahlada); through **Danu** the Danavas; through **Vinata** Garuda and Aruna; and through **Kadru** the sacred Nagas.
      `,
      keyAttributes: [
        "Father of all celestial and terrestrial races",
        "Husband of the 13 daughters of Daksha",
        "Architect of planetary populations"
      ],
      children: [
        {
          id: "gen-surya-adityas",
          name: "Surya Bhagavan & The 12 Adityas",
          sanskrit: "सूर्य भगवान् (विवस्वान्) एवं द्वादशादित्याः",
          title: "The Visible Eye of the Universe & Golden Solar Deity",
          category: "Aditya",
          tradition: "General Purana",
          parent: "gen-kashyapa",
          parentName: "Sage Kashyapa & The Cosmic Mothers",
          consort: "Goddess Saranyu (Sanjna) & Goddess Chhaya",
          vahana: "Seven-Horse Golden Chariot driven by Aruna",
          ayudha: "Padma (Lotus), Sudarshana Chariot-Wheel, Solar Radiance",
          color: "#F97316",
          glowColor: "rgba(249, 115, 22, 0.9)",
          icon: "☀️",
          summary: "Eldest son of Aditi; provider of light, photosynthesis, time, and spiritual illumination (Gayatri Mantra).",
          shloka: {
            devanagari: "नमस्ते सूर्यदेवाय जगच्चक्षुषे नमः । जगत्प्रसवकर्त्रे च पालनप्रलयकारिणे ॥",
            transliteration: "Namaste sūrya-devāya jagac-cakṣuṣe namaḥ | Jagat-prasava-kartre ca pālana-pralaya-kāriṇe ||",
            source: "Aditya Hridaya Stotram",
            meaning: "Salutations to Surya Deva, the cosmic eye of the universe, source of creation, sustainer and transformer of all beings."
          },
          details: `
            Surya rides across the sky in a chariot drawn by seven green horses representing the seven solar rays and meters of Vedic prosody (*Gayatri, Ushnik, Anushtubh, Brihati, Pankti, Trishtubh, Jagati*).
            He fathered Yama, Yamuna, the Ashvins, Shani, and Vaivasvata Manu—fountainhead of the Solar Dynasty.
          `,
          keyAttributes: [
            "Pratyaksha Devata (Directly visible divinity)",
            "Teacher of the Shukla Yajurveda to Yajnavalkya",
            "Fountainhead of the Suryavamsha"
          ],
          children: [
            {
              id: "gen-yama-dharmaraja",
              name: "Yama Dharmaraja & Yamuna Devi",
              sanskrit: "यम धर्मराज एवं यमुना देवी (कालिन्दी)",
              title: "Lord of Cosmic Justice & The Sacred River of Devotion",
              category: "Solar Lineage",
              tradition: "General Purana",
              parent: "gen-surya-adityas",
              parentName: "Surya Bhagavan & The 12 Adityas",
              consort: "Shyamala & Dhumorna",
              vahana: "Mahisha (Black Water Buffalo)",
              ayudha: "Danda (Rod of Absolute Justice), Pasha (Noose of Truth)",
              color: "#334155",
              glowColor: "rgba(51, 65, 85, 0.85)",
              icon: "⚖️",
              summary: "Twin children of Surya and Saranyu; Yama dispenses unbending justice, while Yamuna flows with sweet grace.",
              shloka: {
                devanagari: "धर्मराज नमस्तुभ्यं नमस्ते यमदण्डिने । सर्वप्राणहृते तुभ्यं नमः पाशधराय च ॥",
                transliteration: "Dharma-rāja namas tubhyaṁ namaste yama-daṇḍine | Sarva-prāṇa-hṛte tubhyaṁ namaḥ pāśa-dharāya ca ||",
                source: "Yama Suktam",
                meaning: "Salutations to Dharmaraja, wielder of the rod of justice, who collects life-breath according to karma, wielder of the cosmic noose."
              },
              details: `
                Yama is not cruel, but the dispassionate upholder of universal moral balance (*Rta* and *Karma*).
                He instructed the young boy Nachiketa in the profound mystery of the immortal soul in the *Katha Upanishad*.
                His twin sister Yamuna descended to earth, consecrated by Sri Krishna's childhood pastimes in Vrindavan.
              `,
              keyAttributes: ["Teacher of the Katha Upanishad", "Lord of Pitris and Moral Balance", "Yamuna's fraternal grace (Bhai Dooj)"],
              children: []
            },
            {
              id: "gen-shani-ashvins",
              name: "Shani Deva & The Ashvini Kumaras",
              sanskrit: "शनिदेव एवं अश्विनीकुमारौ",
              title: "Lord of Karmic Discipline & Celestial Physicians of Devas",
              category: "Solar Lineage",
              tradition: "General Purana",
              parent: "gen-surya-adityas",
              parentName: "Surya Bhagavan & The 12 Adityas",
              consort: "Manda & Dhamini / Jyoti",
              vahana: "Giddha (Vulture) & Celestial Horses",
              ayudha: "Iron Bow, Staff of Retribution, Healing Herbs",
              color: "#1E293B",
              glowColor: "rgba(30, 41, 59, 0.9)",
              icon: "🪐",
              summary: "Shani delivers the rigorous fruits of karma; the twin Ashvins (Nasatya & Dasra) master the science of Ayurveda.",
              shloka: {
                devanagari: "नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् । छायामार्तण्डसम्भूतं तं नमामि शनैश्चरम् ॥",
                transliteration: "Nīlāñjana-samābhāsaṁ ravi-putraṁ yamāgrajam | Chāyā-mārtaṇḍa-sambhūtaṁ taṁ namāmi śanaiścaram ||",
                source: "Navagraha Stotram",
                meaning: "Dark as blue antimony, son of the Sun, brother of Yama, born of Chhaya and Martanda, to that slow-moving Saturn I bow."
              },
              details: `
                Shani enforces karmic humility through trials that burn away arrogance (*Sade Sati*).
                The Ashvins, born from Surya and Saranyu in equine forms, perform miraculous medical feats, including rejuvenating Sage Chyavana and fathering Nakula and Sahadeva with Queen Madri.
              `,
              keyAttributes: ["Greatest judge of personal karma", "Masters of Vedic medicine (Ayurveda)", "Fathers of Nakula and Sahadeva"],
              children: []
            },
            {
              id: "gen-vaivasvata-manu",
              name: "Vaivasvata Manu (Current Manu)",
              sanskrit: "वैवस्वत मनु (श्राद्धदेव / सप्तम मनु)",
              title: "Sovereign of the Current Cosmic Epoch & Founder of Royal Dynasties",
              category: "Manus",
              tradition: "General Purana",
              parent: "gen-surya-adityas",
              parentName: "Surya Bhagavan & The 12 Adityas",
              consort: "Queen Shraddha",
              vahana: "Sacred Ark of the Deluge",
              ayudha: "Dharma Scepter & Solar Standard",
              color: "#D97706",
              glowColor: "rgba(217, 119, 6, 0.85)",
              icon: "👑",
              summary: "Saved from the cosmic deluge by Matsya Avatara; his sons and daughters gave birth to the Suryavamsha and Chandravamsha.",
              shloka: {
                devanagari: "विवस्वतः सुतो धीमान् मनुर्वैवस्वतोऽभवत् । तस्य पुत्राश्च पौत्राश्च पालयन्ति महीमिमाम् ॥",
                transliteration: "Vivasvataḥ suto dhīmān manur vaivasvato'bhavat | Tasya putrāś ca pautrāś ca pālayanti mahīm imām ||",
                source: "Harivamsha 1.9.1",
                meaning: "From Vivasvan was born the wise Vaivasvata Manu; his sons and grandsons rule and protect this earth."
              },
              details: `
                Vaivasvata Manu is the seventh and reigning Manu of our cosmic epoch (*Vaivasvata Manvantara*).
                From his eldest son **Ikshvaku** arose the Solar Dynasty (ruling from Ayodhya). From his daughter **Ila** (through union with Budha, son of Chandra) arose the Lunar Dynasty (ruling from Pratishthana and Hastinapura).
              `,
              keyAttributes: [
                "Reigning sovereign of our current cosmic era",
                "Root of both Solar and Lunar dynasties",
                "Satyavrata of the Matsya Deluge"
              ],
              children: [
                /* ----------------------------------------------------------
                   THE COMPLETE SURYAVAMSHA (SOLAR DYNASTY)
                   ---------------------------------------------------------- */
                {
                  id: "gen-ikshvaku",
                  name: "King Ikshvaku (Founder of Ayodhya Dynasty)",
                  sanskrit: "राजा इक्ष्वाकु (अयोध्या-संस्थापक / सूर्यवंश-मूल)",
                  title: "First Monarch of Ayodhya & Pioneer of Raja Dharma",
                  category: "Suryavamsha",
                  tradition: "General Purana",
                  parent: "gen-vaivasvata-manu",
                  parentName: "Vaivasvata Manu",
                  consort: "Queen Indumati (Suryavamsha Queen)",
                  vahana: "Solar Imperial Chariot",
                  ayudha: "Kodanda Bow & Royal Scepter",
                  color: "#EA580C",
                  glowColor: "rgba(234, 88, 12, 0.85)",
                  icon: "🏛️",
                  summary: "Eldest son of Vaivasvata Manu; founded the capital of Ayodhya and established royal governance according to Vedic Dharma.",
                  shloka: {
                    devanagari: "इक्ष्वाकुर्वंशकर्ता च अयोध्याया महीपतिः ।",
                    transliteration: "Ikṣvākur vaṁśa-kartā ca ayodhyāyā mahīpatiḥ |",
                    source: "Valmiki Ramayana (Bala Kanda)",
                    meaning: "Ikshvaku was the illustrious founder of the royal line and sovereign of Ayodhya."
                  },
                  details: `
                    King Ikshvaku received spiritual instruction directly from his father Manu, who had heard it from Surya, preserving the science of selfless action (*Yoga*) recorded in Bhagavad Gita 4.1.
                    His hundreds of sons governed regions across Aryavarta, with his eldest Vikukshi continuing the lineage at Ayodhya.
                  `,
                  keyAttributes: ["Founder of Ayodhya", "Recipient of Solar Yoga", "Father of Vikukshi"],
                  children: [
                    {
                      id: "gen-mandhata",
                      name: "Emperor Mandhata (Universal Chakravartin)",
                      sanskrit: "चक्रवर्ती मान्धाता (त्रैलोक्य-विजेता)",
                      title: "The Universal Sovereign Born from His Father's Womb",
                      category: "Suryavamsha",
                      tradition: "General Purana",
                      parent: "gen-ikshvaku",
                      parentName: "King Ikshvaku",
                      consort: "Queen Bindumati (Chaitrarathi)",
                      vahana: "Imperial Golden Chariot",
                      ayudha: "Indra's Celestial Bow & Invincible Quiver",
                      color: "#F59E0B",
                      glowColor: "rgba(245, 158, 11, 0.85)",
                      icon: "👑",
                      summary: "Descended via Vikukshi -> Kakutstha -> Yuvanashva; born miraculously from Yuvanashva after he drank consecrated yajna water; nursed by Indra's thumb ('Mam Dhasa').",
                      shloka: {
                        devanagari: "यावत् सूर्य उदेति स्म यावच्च प्रतितिष्ठति । सर्वं तन्मान्धातृक्षेत्रं यदहैव प्रकीर्त्यते ॥",
                        transliteration: "Yāvat sūrya udeti sma yāvac ca pratitiṣṭhati | Sarvaṁ tan māndhātṛ-kṣetraṁ yad ahaiva prakīrtyate ||",
                        source: "Vishnu Purana 4.2.65",
                        meaning: "From where the sun rises in the east to where it sets in the west, all that vast domain was the sovereign realm of Emperor Mandhata."
                      },
                      details: `
                        When Yuvanashva accidentally drank consecrated water meant for his queen, he became pregnant with Mandhata.
                        When the infant cried for milk, King Indra offered his thumb containing divine nectar, declaring 'Mam Dhasa' (He shall suckle me), naming the child Mandhata.
                        Mandhata conquered the three worlds through righteousness and performed 100 horse sacrifices.
                      `,
                      keyAttributes: ["Universal Chakravartin", "Nursed by Indra's thumb", "Father of Purukutsa"],
                      children: [
                        {
                          id: "gen-harishchandra",
                          name: "King Harishchandra (The Embodiment of Truth)",
                          sanskrit: "सत्यवादी राजा हरिश्चन्द्र",
                          title: "Monarch Who Sacrificed Everything for Absolute Truth (Satya)",
                          category: "Suryavamsha",
                          tradition: "General Purana",
                          parent: "gen-mandhata",
                          parentName: "Emperor Mandhata",
                          consort: "Queen Taramati",
                          vahana: "Ascetic Steps / Cremation Grounds of Kashi",
                          ayudha: "Staff of Unshakeable Truth (Satya-Nishtha)",
                          color: "#CA8A04",
                          glowColor: "rgba(202, 138, 4, 0.85)",
                          icon: "⚖️",
                          summary: "Descended via Purukutsa -> Trasadasyu -> Trishanku; tested severely by Sage Vishvamitra, surrendering his kingdom, wife, and son for his vow of truth.",
                          shloka: {
                            devanagari: "चन्द्रस्तारे नभो गच्छेद् द्यौः पतेद् धरणीतले । न च सत्यं परित्यज्येद् हरिश्चन्द्रो महीपतिः ॥",
                            transliteration: "Candras tāre nabho gacched dyauḥ pated dharaṇī-tale | Na ca satyaṁ parityajyed hariścandro mahīpatiḥ ||",
                            source: "Markandeya Purana",
                            meaning: "The moon and stars may fall from the firmament, the sky may crash onto the earth, but King Harishchandra will never abandon Truth."
                          },
                          details: `
                            Harishchandra gave his entire kingdom as *Dakshina* to Vishvamitra, worked as an assistant at the cremation grounds of Varanasi, and refused to compromise truth even when his own wife brought their deceased son Rohita for burial without the required tax.
                            The Gods descended, restored his kingdom and son, and elevated him directly to heaven.
                          `,
                          keyAttributes: ["Satyavadi: Personification of absolute truth", "Tested by Vishvamitra at Kashi", "Elevated to heaven with his citizens"],
                          children: [
                            {
                              id: "gen-sagara",
                              name: "King Sagara (Ocean Excavator)",
                              sanskrit: "राजा सगर (समुद्र-खनक / अश्वमेध-याजी)",
                              title: "Sovereign Whose 60,000 Sons Excavated the Sagara (Oceans)",
                              category: "Suryavamsha",
                              tradition: "General Purana",
                              parent: "gen-harishchandra",
                              parentName: "King Harishchandra",
                              consort: "Queen Keshini & Queen Sumati",
                              vahana: "Imperial Chariot",
                              ayudha: "Agneyastra & Royal Standard",
                              color: "#B45309",
                              glowColor: "rgba(180, 83, 9, 0.8)",
                              icon: "🌊",
                              summary: "Descended via Rohita -> Harita -> Bahu; destroyed hostile barbarian tribes and performed an Ashvamedha whose stolen horse led to the digging of the oceans.",
                              shloka: {
                                devanagari: "सगरेण समुत्खातः सागरः परिकीर्तितः ।",
                                transliteration: "Sagareṇa samutkhātaḥ sāgaraḥ parikīrtitaḥ |",
                                source: "Valmiki Ramayana (Bala Kanda 38.2)",
                                meaning: "Excavated by the sons of King Sagara, the ocean came to be known as 'Sagara'."
                              },
                              details: `
                                When Indra stole Sagara's sacrificial horse and hid it near Sage Kapila's underground hermitage, Sagara's 60,000 sons dug up the earth searching for it, creating the oceans (*Sagara*).
                                Mistaking the meditating Kapila for the thief, they attacked him and were incinerated by the sage's fiery glance, awaiting redemption by holy Ganga.
                              `,
                              keyAttributes: ["Gave his name to the ocean (Sagara)", "Conqueror of Haihayas and Yavanas", "Ancestor of Bhagiratha"],
                              children: [
                                {
                                  id: "gen-bhagiratha",
                                  name: "King Bhagiratha (Bringer of Sacred Ganga)",
                          sanskrit: "राजा भगीरथ (गङ्गावतरण-कारक)",
                          title: "The Monarch Whose Supreme Tapas Brought Ganga to Earth",
                          category: "Suryavamsha",
                          tradition: "General Purana",
                          parent: "gen-sagara",
                          parentName: "King Sagara",
                          consort: "Queen of Ayodhya",
                          vahana: "Divine Golden Chariot guiding Ganga",
                          ayudha: "Shankha (Conch of Divine Call), Ascetic Staff",
                          color: "#06B6D4",
                          glowColor: "rgba(6, 182, 212, 0.85)",
                          icon: "🌊",
                          summary: "Descended via Asamanja -> Anshuman -> Dilipa I; performed thousand-year tapas to bring celestial Ganga to liberate the 60,000 sons of Sagara.",
                          shloka: {
                            devanagari: "गङ्गा गङ्गेति यो ब्रूयाद् योजनानां शतैरपि । मुच्यते सर्वपापेभ्यो विष्णुलोकं स गच्छति ॥",
                            transliteration: "Gaṅgā gaṅgeti yo brūyād yojanānāṁ śatair api | Mucyate sarva-pāpebhyo viṣṇu-lokaṁ sa gacchati ||",
                            source: "Skanda Purana",
                            meaning: "Whoever utters 'Ganga, Ganga' even from a distance of hundreds of yojanas is liberated from all sins and attains the abode of Vishnu."
                          },
                          details: `
                            Bhagiratha performed rigorous tapas to Brahma to release Ganga, and to Shiva to catch her thunderous descent in His matted locks (*Jata*).
                            Shiva softened her torrent into gentle streams, and Bhagiratha blew his conch, driving his chariot across northern India with Ganga following behind, washing over the ashes of his ancestors and granting them moksha.
                          `,
                          keyAttributes: ["Bhagiratha Prayatna (Insuperable human effort)", "Bringer of Ganga to earth", "Liberator of 60,000 ancestors"],
                          children: [
                            {
                              id: "gen-ambarisha",
                              name: "King Ambarisha (Protected by Sudarshana)",
                              sanskrit: "भक्तराज अम्बरीष (सुदर्शन-रक्षित)",
                              title: "The Supreme Vaishnava King Immune to Sage Durvasa's Curse",
                              category: "Suryavamsha",
                              tradition: "General Purana",
                              parent: "gen-bhagiratha",
                              parentName: "King Bhagiratha",
                              consort: "Queen of Ayodhya",
                              vahana: "Royal Chariot",
                              ayudha: "Protected by Lord Vishnu's Sudarshana Chakra",
                              color: "#38BDF8",
                              glowColor: "rgba(56, 189, 248, 0.85)",
                              icon: "☸️",
                              summary: "Descended via Sruta -> Nabhaga; observed the Ekadashi vrata with such pure devotion that Vishnu stationed the blazing Sudarshana Chakra to protect his realm.",
                              shloka: {
                                devanagari: "अहं भक्तपराधीनो ह्यस्वतन्त्र इव द्विज । साधुभिर्ग्रस्तहृदयो भक्तैर्भक्तजनप्रियः ॥",
                                transliteration: "Ahaṁ bhakta-parādhīno hy asvatantra iva dvija | Sādhubhir grasta-hṛdayo bhaktair bhakta-jana-priyaḥ ||",
                                source: "Bhagavata Purana 9.4.63",
                                meaning: "Lord Vishnu said to Durvasa: 'I am completely under the control of My pure devotees, as if having no independence; My heart is captured by saintly souls who love Me.'"
                              },
                              details: `
                                When Sage Durvasa created a fiery demon to slay King Ambarisha over a minor ritual technicality on Dvadashi morning, the king stood motionless in prayer.
                                The Sudarshana Chakra incinerated the demon and chased Durvasa across all three worlds, teaching that genuine devotion commands the absolute protection of the Almighty.
                              `,
                              keyAttributes: ["Beloved of Lord Vishnu", "Protected by Sudarshana Chakra", "Master of Ekadashi Vrata"],
                              children: [
                                {
                                  id: "gen-raghu",
                                  name: "Emperor Raghu (Hero of Raghuvamsha)",
                                  sanskrit: "सम्राट् रघु (रघुवंश-प्रवर्तक)",
                                  title: "The Illustrious World-Conqueror Who Donated His Entire Empire",
                                  category: "Suryavamsha",
                                  tradition: "General Purana",
                                  parent: "gen-ambarisha",
                                  parentName: "King Ambarisha",
                                  consort: "Solar Empress",
                                  vahana: "Invincible War Chariot",
                                  ayudha: "Celestial Bow & Arrow, Visvajit Charity Staff",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.9)",
                                  icon: "🏛️",
                                  summary: "Descended via Dilipa II (Khatvanga); conquered the four quarters of the earth (Digvijaya) and donated all his wealth in the Visvajit Yajna, drinking from earthen pots.",
                                  shloka: {
                                    devanagari: "स विश्वजितमाजह्रे सर्वमेधमिव क्षिती । दानं ददौ ब्राह्मणेभ्यो मृत्पात्रशेषोऽभवत् ॥",
                                    transliteration: "Sa viśvajitam ājahre sarva-medham iva kṣitī | Dānaṁ dadau brāhmaṇebhyo mṛt-pātra-śeṣo'bhavat ||",
                                    source: "Kalidasa's Raghuvamsha (Canto 4)",
                                    meaning: "He performed the Visvajit sacrifice, giving away all earthly wealth to learned brahmanas until only earthen pots remained for himself."
                                  },
                                  details: `
                                    Raghu was so renowned for valor, integrity, and radical generosity that the entire Solar Dynasty came to be proudly called **Raghuvamsha** (the House of Raghu).
                                    When Kautsa, disciple of Sage Varatantu, requested 140 million gold coins for his guru, Raghu prepared to conquer Kubera, prompting Kubera to shower gold coins like rain over Ayodhya's royal treasury.
                                  `,
                                  keyAttributes: ["Fountainhead of the title 'Raghuvamsha'", "Hero of Kalidasa's epic poem", "Father of King Aja"],
                                  children: [
                                    {
                                      id: "gen-aja-dasharatha",
                                      name: "King Aja & King Dasharatha",
                                      sanskrit: "राजा अज एवं चक्रवर्ती दशरथ",
                                      title: "Monarchs of Ayodhya & Royal Line of Sri Rama",
                                      category: "Suryavamsha",
                                      tradition: "General Purana",
                                      parent: "gen-raghu",
                                      parentName: "Emperor Raghu",
                                      consort: "Queen Indumati & Queens Kausalya, Kaikeyi, Sumitra",
                                      vahana: "Ten-Directional War Chariot (Dasha-ratha)",
                                      ayudha: "Shabda-Bhedi Arrows & Royal Scepter",
                                      color: "#E11D48",
                                      glowColor: "rgba(225, 29, 72, 0.85)",
                                      icon: "👑",
                                      summary: "Aja won Indumati at her Svayamvara; their son Dasharatha could drive his chariot in all ten directions, performing the Putrakameshti Yajna that brought Sri Rama to earth.",
                                      shloka: {
                                        devanagari: "दशरथो नाम राजा बभूव गुणवान् शुचिः । पुत्रार्थं चक्रे यत्नं स यज्वभिः सह संगम्य ॥",
                                        transliteration: "Daśaratho nāma rājā babhūva guṇavān śuciḥ | Putrārthaṁ cakre yatnaṁ sa yajvabhiḥ saha saṁgamya ||",
                                        source: "Valmiki Ramayana (Bala Kanda 8.1)",
                                        meaning: "There was a king named Dasharatha, endowed with all virtues, pure and righteous, who performed sacred sacrifices with revered sages for the sake of obtaining sons."
                                      },
                                      details: `
                                        Dasharatha's mastery of archery included the rare *Shabda-Bhedi* technique (shooting unseen targets purely by sound).
                                        Under Sage Rishyashringa's guidance, Dasharatha conducted the Putrakameshti Yajna, where Lord Vishnu appeared from the sacrificial fire as a divine being holding sweet payasam, leading to the birth of Rama, Bharata, Lakshmana, and Shatrughna.
                                      `,
                                      keyAttributes: [
                                        "Father of Sri Rama, Bharata, Lakshmana & Shatrughna",
                                        "Master of 10-directional chariot warfare",
                                        "Performed the Putrakameshti Yajna"
                                      ],
                                      children: []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
    /* ------------------------------------------------------------------
       THE COMPLETE CHANDRAVAMSHA (LUNAR DYNASTY)
       ------------------------------------------------------------------ */
    {
          id: "gen-chandravamsha",
          name: "Soma Deva & The Chandravamsha",
          sanskrit: "सोमदेव (चन्द्र) एवं चन्द्रवंश",
          title: "The Nectarine Moon God & Fountainhead of Yadavas and Kurus",
          category: "Chandravamsha",
          tradition: "General Purana",
          parent: "gen-kashyapa",
          parentName: "Sage Kashyapa & The Cosmic Mothers",
          consort: "The 27 Nakshatras (Rohini, etc.) & Tara",
          vahana: "Three-Wheeled Celestial Chariot drawn by 10 white horses",
          ayudha: "Amrita Kalasha (Vessel of Nectar), Gada",
          color: "#E2E8F0",
          glowColor: "rgba(226, 232, 240, 0.9)",
          icon: "🌙",
          summary: "Born from Sage Atri and Anasuya; his union with Tara produced Budha, who married Ila (Manu's daughter), founding the Lunar Dynasty.",
          shloka: {
            devanagari: "दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम् । नमामि शशिनं सोमं शम्भोर्मुकुटभूषणम् ॥",
            transliteration: "Dadhi-śaṅkha-tuṣārābhaṁ kṣīrodārṇava-sambhavam | Namāmi śaśinaṁ somaṁ śambhor mukuṭa-bhūṣaṇam ||",
            source: "Navagraha Stotram",
            meaning: "White as yogurt, conch-shell, and snow, born from the Ocean of Milk, I bow to the moon, Soma, the radiant crest-ornament of Lord Shiva."
          },
          details: `
            Chandra governs the mind (*Manas*), nocturnal healing plants, and emotional vitality.
            From his son **Budha** (Mercury) and **Ila** (daughter of Vaivasvata Manu) sprang King Pururavas, establishing the magnificent Lunar Dynasty (*Chandravamsha*).
          `,
          keyAttributes: [
            "Governor of the mind and emotions (Chandrama Manaso Jatah)",
            "Lord of medicinal herbs (Oshadhisha)",
            "Fountainhead of the Lunar Dynasty"
          ],
          children: [
            {
              id: "gen-pururavas-yayati",
              name: "Pururavas, Nahusha & Emperor Yayati",
              sanskrit: "पुरूरवा, नहुष एवं सम्राट् ययाति",
              title: "The Founders of the Yadava and Paurava Lineages",
              category: "Chandravamsha",
              tradition: "General Purana",
              parent: "gen-chandravamsha",
              parentName: "Soma Deva & The Chandravamsha",
              consort: "Urvashi / Ashokasundari / Devayani & Sharmishtha",
              vahana: "Golden Chariot",
              ayudha: "Chakravartin Bow & Scepter",
              color: "#A855F7",
              glowColor: "rgba(168, 85, 247, 0.85)",
              icon: "👑",
              summary: "Pururavas wed Apsara Urvashi -> Ayu -> Nahusha -> Yayati, whose sons Yadu and Puru formed the two greatest dynasties of Indian history.",
              shloka: {
                devanagari: "यदोस्तु यादवा जाताः पूरोः पौरववंशजाः ।",
                transliteration: "Yados tu yādavā jātāḥ pūroḥ paurava-vaṁśajāḥ |",
                source: "Mahabharata (Adi Parva 95.1)",
                meaning: "From Yadu sprang the Yadavas, and from Puru sprang the celebrated line of the Pauravas."
              },
              details: `
                When Yayati was prematurely cursed with old age by Sage Shukracharya, his youngest son Puru willingly exchanged his youth for his father's senility.
                Gratified, Yayati bequeathed the central empire of Aryavarta to Puru and the surrounding kingdoms to Yadu, Turvasu, Druhyu, and Anu.
              `,
              keyAttributes: [
                "Pururavas & Urvashi romance",
                "Yayati's exchange of youth with Puru",
                "Division of Aryavarta among five sons"
              ],
              children: [
                {
                  id: "gen-paurava-bharata",
                  name: "King Dushyanta & Emperor Bharata",
                  sanskrit: "राजा दुष्यन्त एवं चक्रवर्ती भरत (शकुन्तला-पुत्र)",
                  title: "Sovereign Whose Valorous Childhood Unified Aryavarta",
                  category: "Pauravavamsha",
                  tradition: "General Purana",
                  parent: "gen-pururavas-yayati",
                  parentName: "Pururavas, Nahusha & Emperor Yayati",
                  consort: "Queen Shakuntala & Sunanda",
                  vahana: "Royal White Stallion & Lion Mount",
                  ayudha: "Sarvadamana Bow & Chakravartin Shield",
                  color: "#3B82F6",
                  glowColor: "rgba(59, 130, 246, 0.85)",
                  icon: "🦁",
                  summary: "Son of King Dushyanta and Shakuntala; as a child in Sage Kanva's ashram, he playfully counted the teeth of wild lions, earning the name Sarvadamana.",
                  shloka: {
                    devanagari: "शकुन्तलायां दुष्यन्ताद् भरतः संबभूव ह । यस्य लोकेषु नाम्नैव ख्यातं भारतमुत्तमम् ॥",
                    transliteration: "Śakuntalāyāṁ duṣyantād bharataḥ saṁbabhūva ha | Yasya lokeṣu nāmnaiva khyātaṁ bhāratam uttamam ||",
                    source: "Mahabharata (Adi Parva 74.131)",
                    meaning: "Unto Shakuntala through Dushyanta was born Bharata, through whose glorious name our supreme nation became celebrated as 'Bharatavarsha'."
                  },
                  details: `
                    Bharata unified the subcontinent under one royal canopy (*Ekarat*).
                    Demonstrating sublime impartiality, he bypassed his own biological sons when he deemed them unqualified for statecraft, adopting Sage Bharadvaja's son Manyu to continue the royal dynasty.
                  `,
                  keyAttributes: ["Sarvadamana: Tamer of wild lions", "Universal sovereign of Bharatavarsha", "Exemplar of merit-based royal succession"],
                  children: [
                    {
                      id: "gen-kuru-shantanu",
                      name: "King Kuru & King Shantanu",
                      sanskrit: "राजा कुरु एवं राजा शान्तनु",
                      title: "Founders of Kurukshetra & The House of Hastinapura",
                      category: "Kuruvamsha",
                      tradition: "General Purana",
                      parent: "gen-paurava-bharata",
                      parentName: "King Dushyanta & Emperor Bharata",
                      consort: "Ganga & Satyavati",
                      vahana: "Golden Chariot of Hastinapura",
                      ayudha: "Royal Bow & Scepter of Kuru",
                      color: "#6366F1",
                      glowColor: "rgba(99, 102, 241, 0.85)",
                      icon: "🏰",
                      summary: "Descended via Hasti (founder of Hastinapura) -> Kuru (consecrated Kurukshetra) -> Pratipa -> Shantanu, father of Bhishma Pitamaha.",
                      shloka: {
                        devanagari: "कुरुणा यत् कृष्टं क्षेत्रं कुरुक्षेत्रं तदुच्यते ।",
                        transliteration: "Kuruṇā yat kṛṣṭaṁ kṣetraṁ kurukṣetraṁ tad ucyate |",
                        source: "Mahabharata (Shalya Parva)",
                        meaning: "The field cultivated with virtues and penance by King Kuru came to be known as 'Kurukshetra'."
                      },
                      details: `
                        King Kuru tilled the sacred soil of Kurukshetra with gold, receiving a boon from Indra that anyone who leaves their body in battle or penance here ascends to heaven.
                        His descendant King Shantanu married the celestial river goddess Ganga, who bore Devavrata (Bhishma), and later Satyavati, who bore Chitrangada and Vichitravirya.
                      `,
                      keyAttributes: ["Consecration of Kurukshetra", "Founding of Hastinapura by Hasti", "Father of Bhishma Pitamaha"],
                      children: [
                        {
                          id: "gen-bhishma-pitamaha",
                          name: "Bhishma Pitamaha (Ganga-putra Devavrata)",
                          sanskrit: "भीष्म पितामह (गङ्गापुत्र देवव्रत / इच्छा-मृत्यु)",
                          title: "The Grand Patriarch of the Kurus & Master of the Bed of Arrows",
                          category: "Kuruvamsha",
                          tradition: "General Purana",
                          parent: "gen-kuru-shantanu",
                          parentName: "King Kuru & King Shantanu",
                          consort: "Naishtika Brahmacharya (Vow of Celibacy)",
                          vahana: "Silver War Chariot with White Stallions",
                          ayudha: "Prasvapana Astra, Golden Bow of Parashurama",
                          color: "#94A3B8",
                          glowColor: "rgba(148, 163, 184, 0.9)",
                          icon: "🏹",
                          summary: "Eighth son of Shantanu and Ganga; took the terrible vow of lifelong celibacy (*Bhishma Pratigya*) and received the boon of death at will (*Iccha-Mrityu*).",
                          shloka: {
                            devanagari: "भीष्मः शान्तनवो वीरः सत्यसन्धो जितेन्द्रियः । आजन्मब्रह्मचारी च सर्वशस्त्रभृतां वरः ॥",
                            transliteration: "Bhīṣmaḥ śāntanavo vīraḥ satya-sandho jitendriyaḥ | Ājanma-brahmacārī ca sarva-śastra-bhṛtāṁ varaḥ ||",
                            source: "Mahabharata (Adi Parva)",
                            meaning: "Bhishma, heroic son of Shantanu, true to his word, master of his senses, lifelong celibate, and foremost among all wielders of weapons."
                          },
                          details: `
                            Taught statecraft by Brihaspati, scriptures by Shukra, and weapons by Parashurama, Bhishma commanded the Kaurava armies for the first 10 days of the Kurukshetra War.
                            Lying on a bed of arrows (*Shara-shayya*) awaiting the auspicious northward journey of the sun (*Uttarayana*), he delivered the monumental *Shanti Parva* and the *Vishnu Sahasranama* to Yudhishthira.
                          `,
                          keyAttributes: [
                            "Speaker of the Vishnu Sahasranama",
                            "Iccha-Mrityu (Control over mortal departure)",
                            "Supreme moral authority of the Mahabharata"
                          ],
                          children: []
                        },
                        {
                          id: "gen-pandavas-branch",
                          name: "King Pandu & The 5 Pandavas",
                          sanskrit: "राजा पाण्डु एवं पञ्च पाण्डवाः",
                          title: "The Righteous Sons Born of Celestial Devas",
                          category: "Kuruvamsha",
                          tradition: "General Purana",
                          parent: "gen-kuru-shantanu",
                          parentName: "King Kuru & King Shantanu",
                          consort: "Queen Kunti & Queen Madri / Draupadi",
                          vahana: "Divine Chariot of Indraprastha",
                          ayudha: "Gandiva Bow, Vrikodara Mace, Vijaya Bow",
                          color: "#3B82F6",
                          glowColor: "rgba(59, 130, 246, 0.85)",
                          icon: "🛡️",
                          summary: "Yudhishthira (Dharma), Bhima (Vayu), Arjuna (Indra), Nakula & Sahadeva (Ashvins); guided by Sri Krishna to victory over Adharma.",
                          shloka: {
                            devanagari: "यतो धर्मस्ततो जयः ।",
                            transliteration: "Yato dharmas tato jayaḥ |",
                            source: "Mahabharata",
                            meaning: "Where there is righteousness (Dharma), there alone is victory."
                          },
                          details: `
                            The Pandavas endured poisoning, palace fire (*Lakshagraha*), exile, and humiliation, yet never abandoned Dharma or their faith in Sri Krishna.
                            Their victory at Kurukshetra cleansed Aryavarta of tyrannical pride and re-established ethical governance.
                          `,
                          keyAttributes: ["Embodiments of Dharma, Strength, Valor & Wisdom", "Disciples of Sri Krishna", "Founders of Indraprastha"],
                          children: [
                            {
                              id: "gen-abhimanyu",
                              name: "Abhimanyu (Hero of the Chakravyuha)",
                              sanskrit: "वीर अभिमन्यु (चक्रव्यूह-भेत्ता)",
                              title: "The Peerless 16-Year-Old Warrior of Kurukshetra",
                              category: "Kuruvamsha",
                              tradition: "General Purana",
                              parent: "gen-pandavas-branch",
                              parentName: "King Pandu & The 5 Pandavas",
                              consort: "Princess Uttara (Daughter of Virata)",
                              vahana: "Golden Peacock War Chariot",
                              ayudha: "Raushana Bow, Chariot Wheel as Shield",
                              color: "#F43F5E",
                              glowColor: "rgba(244, 63, 94, 0.85)",
                              icon: "⚔️",
                              summary: "Son of Arjuna and Subhadra; mastered the entry to the impenetrable Chakravyuha while still in his mother's womb.",
                              shloka: {
                                devanagari: "अभिमन्युर्महावीर्यः सौभद्रः शत्रुतापनः । चक्रव्यूहं प्रविश्याशु रथाङ्गेन युयुधे ॥",
                                transliteration: "Abhimanyur mahāvīryaḥ saubhadraḥ śatru-tāpanaḥ | Cakra-vyūhaṁ praviśyāśu rathāṅgena yuyudhe ||",
                                source: "Mahabharata (Drona Parva)",
                                meaning: "Abhimanyu of immense heroism, son of Subhadra, scorcher of foes, penetrated the Chakravyuha and fought heroically wielding a chariot wheel."
                              },
                              details: `
                                On the 13th day of the Kurukshetra War, Abhimanyu breached Drona's Chakravyuha single-handedly, routing veteran Maharathis until overwhelmed unlawfully by six warriors attacking simultaneously.
                                His sacrifice galvanized the Pandavas to final victory, and his unborn son Parikshit preserved the entire Kuru line.
                              `,
                              keyAttributes: ["Hero of the 13th day of Kurukshetra", "Breached Drona's Chakravyuha", "Father of Emperor Parikshit"],
                              children: [
                                {
                                  id: "gen-parikshit",
                                  name: "Emperor Parikshit",
                                  sanskrit: "सम्राट् परीक्षित् (भागवत-श्रोता)",
                                  title: "The Ideal Sovereign Who Listened to the Srimad Bhagavatam",
                                  category: "Kuruvamsha",
                                  tradition: "General Purana",
                                  parent: "gen-abhimanyu",
                                  parentName: "Abhimanyu",
                                  consort: "Queen Iravati",
                                  vahana: "Imperial Elephant of Hastinapura",
                                  ayudha: "Imperial Scepter & Surrendered Soul",
                                  color: "#10B981",
                                  glowColor: "rgba(16, 185, 129, 0.85)",
                                  icon: "📖",
                                  summary: "Rescued in Uttara's womb by Sri Krishna's Sudarshana Chakra; cursed by Shringi to die in seven days, he fasted on the Ganga hearing the Bhagavatam from Shukadeva.",
                                  shloka: {
                                    devanagari: "तत्रोपविष्टं परमोदारशीलं शुको वसिष्ठस्य च नप्तारम् । भागवतं पुराणमाख्यातं मुनीन्द्रवृन्दैरभिपूजितं च ॥",
                                    transliteration: "Tatropaviṣṭaṁ paramodāra-śīlaṁ śuko vasiṣṭhasya ca naptāram | Bhāgavataṁ purāṇam ākhyātaṁ munīndra-vṛndair abhipūjitam ||",
                                    source: "Bhagavata Purana 1.19",
                                    meaning: "To the supremely noble Parikshit seated upon kusha grass by the Ganga, Shukadeva recited the Bhagavata Purana, adored by the foremost of sages."
                                  },
                                  details: `
                                    Parikshit was named 'Parikshit' (the examiner) because from birth his eyes searched every face seeking the divine being (Krishna) who had protected him in the womb.
                                    Faced with death by the snake Takshaka within seven days, he renounced his empire without fear and attained ultimate liberation (*Moksha*) through pure hearing (*Shravanam*).
                                  `,
                                  keyAttributes: ["Preserved in the womb by Sri Krishna", "Recipient of the Srimad Bhagavatam", "Archetype of fearlessness facing mortality"],
                                  children: [
                                    {
                                      id: "gen-janamejaya",
                                      name: "King Janamejaya",
                                      sanskrit: "राजा जनमेजय (सर्पसत्र-याजी)",
                                      title: "The Sovereign Who Heard the First Recitation of the Mahabharata",
                                      category: "Kuruvamsha",
                                      tradition: "General Purana",
                                      parent: "gen-parikshit",
                                      parentName: "Emperor Parikshit",
                                      consort: "Queen Vapushtama",
                                      vahana: "Sacrificial Chariot",
                                      ayudha: "Sacrificial Flame & Bow",
                                      color: "#F59E0B",
                                      glowColor: "rgba(245, 158, 11, 0.8)",
                                      icon: "📜",
                                      summary: "Son of Parikshit; launched the Sarpa Satra to avenge his father, where Sage Vaishampayana recited the complete Mahabharata.",
                                      shloka: {
                                        devanagari: "जनमेजयस्य राजर्षेः सर्पसत्रे महात्मनः । समीपे व्यासशिष्येण भारतं संप्रकीर्तितम् ॥",
                                        transliteration: "Janamejayasya rājarṣeḥ sarpa-satre mahātmanaḥ | Samīpe vyāsa-śiṣyeṇa bhārataṁ samprakīrtitam ||",
                                        source: "Mahabharata (Adi Parva 1.9)",
                                        meaning: "At the great Sarpa Satra of the royal sage Janamejaya, the epic Mahabharata was recited in full by Vyasa's direct disciple Vaishampayana."
                                      },
                                      details: `
                                        Janamejaya's sacrificial assembly at Takshashila was the historic arena where the entire 100,000 verses of the Mahabharata were first unveiled to humanity.
                                        He ended the sacrifice at the gentle request of Sage Astika, inaugurating an era of peaceful reconciliation between humans and the reptilian races.
                                      `,
                                      keyAttributes: [
                                        "Heard the first full recitation of the Mahabharata",
                                        "Performed the Sarpa Satra at Takshashila",
                                        "Continued the Kuru dynasty through King Shatanika"
                                      ],
                                      children: [
                                        {
                                          id: "gen-nichakshu-kausambi",
                                          name: "King Nichakshu & The Kausambi Transfer",
                                          sanskrit: "राजा निचक्षु (कौशाम्बी राजधानी प्रवर्तक)",
                                          title: "Great-Grandson of Janamejaya • Sovereign of the Vatsa Kingdom",
                                          category: "Kuruvamsha",
                                          tradition: "General Purana",
                                          parent: "gen-janamejaya",
                                          parentName: "King Janamejaya",
                                          consort: "Queen of the Pauravas",
                                          vahana: "Royal River Barge & Chariot",
                                          ayudha: "Dharma Scepter & Imperial Seal",
                                          color: "#EAB308",
                                          glowColor: "rgba(234, 179, 8, 0.8)",
                                          icon: "🏛️",
                                          summary: "When ancient Hastinapura was inundated by a catastrophic flood of the sacred Ganga, King Nichakshu safely transferred the imperial Paurava capital to Kausambi.",
                                          shloka: {
                                            devanagari: "गङ्गापहृते तस्मिन् नगरे नागसाह्वये । निचक्षुर्वत्सभूमौ तु कौशाम्ब्यां न्यवसन् नृपः ॥",
                                            transliteration: "Gaṅgāpahṛte tasmin nagare nāgasāhvaye | Nicakṣur vatsa-bhūmau tu kauśāmbyāṁ nyavasan nṛpaḥ ||",
                                            source: "Matsya Purana 50.78 & Vishnu Purana 4.21.1",
                                            meaning: "When the city of Hastinapura (Nagasahvaya) was washed away by the roaring waters of Ganga, King Nichakshu established his capital in the fertile land of Vatsa at Kausambi."
                                          },
                                          details: `
                                            Janamejaya's son Shatanika was succeeded by Ashvamedhadatta, from whom was born Adhisimakrishna, and from him King Nichakshu.
                                            The move from Hastinapura to Kausambi (near Prayagraj) marked the geographic and political pivot of the Lunar Dynasty from the upper Doab to the middle Gangetic plains.
                                          `,
                                          keyAttributes: ["Transferred capital from Hastinapura to Kausambi", "Preserved the sacred Paurava crown after the Ganga flood", "Pivotal link in Puranic archaeology and history"],
                                          children: [
                                            {
                                              id: "gen-king-udayana",
                                              name: "King Udayana of Vatsa & King Kshemaka",
                                              sanskrit: "राजा उदयन एवं राजा क्षेमक (कुरुवंश पर्यवसान)",
                                              title: "Romantic Hero of Sanskrit Drama • Last Direct Kings of the Pauravas",
                                              category: "Kuruvamsha",
                                              tradition: "General Purana",
                                              parent: "gen-nichakshu-kausambi",
                                              parentName: "King Nichakshu",
                                              consort: "Queen Vasavadatta (Princess of Avanti) & Padmavati",
                                              vahana: "Ghoshayati Lute & Celestial Elephant",
                                              ayudha: "Veena (Ghoshayati) & Royal Bow",
                                              color: "#CA8A04",
                                              glowColor: "rgba(202, 138, 4, 0.8)",
                                              icon: "🎵",
                                              summary: "Celebrated hero of Bhasa's Svapnavasavadatta and Kalidasa's Meghaduta; contemporary of Buddha. The Puranas record King Kshemaka as the final monarch of the direct Paurava line.",
                                              shloka: {
                                                devanagari: "क्षेमकं प्राप्य राजानं संस्थां प्राप्स्यति वै कलौ । पौरवाणां मया ख्यातो वंशोऽयं भरतर्षभ ॥",
                                                transliteration: "Kṣemakaṁ prāpya rājānaṁ saṁsthāṁ prāpsyati vai kalau | Pauravāṇāṁ mayā khyāto vaṁśo'yaṁ bharatarṣabha ||",
                                                source: "Vishnu Purana 4.21.18 & Matsya Purana 273.11",
                                                meaning: "Reaching King Kshemaka in the Kali Yuga, the classical dynasty of the Pauravas reaches its conclusion; thus has the sacred line of Bharata been glorified."
                                              },
                                              details: `
                                                King Udayana was renowned for his mastery of the musical Veena, which could enchant wild elephants, and his legendary love for Princess Vasavadatta of Ujjain.
                                                Following Udayana came Vahinara, Dandapani, Niramitra, and King Kshemaka, after which the imperial center shifted decisively to Magadha.
                                              `,
                                              keyAttributes: ["Immortalized in classical Sanskrit literature (Bhasa, Kalidasa)", "Ruler of Kausambi contemporary with Buddha", "King Kshemaka closes the direct Paurava list in the Puranas"],
                                              children: [
                                                {
                                                  id: "gen-magadha-haryanka-nanda",
                                                  name: "The Magadha Dynasties (Haryanka, Shishunaga & Nandas)",
                                                  sanskrit: "मगध साम्राज्य (हर्यङ्क, शैशुनाग एवं महापद्म नन्द)",
                                                  title: "Imperial Unifiers of Aryavarta • Overlords of Pataliputra",
                                                  category: "Magadha Empires",
                                                  tradition: "General Purana",
                                                  parent: "gen-king-udayana",
                                                  parentName: "King Udayana & Kshemaka",
                                                  consort: "Empresses of Magadha",
                                                  vahana: "Chaturangabala (Chariot, Elephant, Cavalry, Infantry)",
                                                  ayudha: "Imperial Scepter & Wheel of Ekachhatra Rule",
                                                  color: "#F59E0B",
                                                  glowColor: "rgba(245, 158, 11, 0.85)",
                                                  icon: "👑",
                                                  summary: "King Bimbisara and Ajatashatru built the mighty fortress of Pataliputra; Emperor Mahapadma Nanda unified northern India under a single sovereign umbrella (Ekachhatra).",
                                                  shloka: {
                                                    devanagari: "महापद्मपतिः कश्चित् नन्दः क्षत्रविनाशकृत् । ततो नृपा भविष्यन्ति शूद्रप्रायास्त्वधर्मिणः ॥",
                                                    transliteration: "Mahāpadma-patiḥ kaścit nandaḥ kṣatra-vināśa-kṛt | Tato nṛpā bhaviṣyanti śūdra-prāyās tv adharmiṇaḥ ||",
                                                    source: "Vishnu Purana 4.24.20 & Bhagavata 12.1.8",
                                                    meaning: "A powerful emperor named Mahapadma Nanda shall arise, the vanquisher of all rival Kshatriyas, ruling as the sole monarch with an army of countless legions."
                                                  },
                                                  details: `
                                                    As prophesied in Vishnu Purana 4.23–24 and Bhagavata 12.1, the political soul of India converged on Magadha.
                                                    King Udayin established Pataliputra (modern Patna) at the confluence of the Son and Ganga rivers, which became the imperial capital of India for nearly a millennium.
                                                  `,
                                                  keyAttributes: ["Unified northern India under Ekachhatra sovereignty", "Established the grand imperial capital of Pataliputra", "Commanded the formidable fourfold army (Chaturangabala)"],
                                                  children: [
                                                    {
                                                      id: "gen-maurya-empire",
                                                      name: "The Maurya Empire (Chandragupta, Chanakya & Ashoka)",
                                                      sanskrit: "मौर्य साम्राज्य (चन्द्रगुप्त, चाणक्य एवं चक्रवर्ती अशोक)",
                                                      title: "First Pan-Indian Empire • Devanampriya Priyadarsin (c. 322–185 BCE)",
                                                      category: "Maurya Empire",
                                                      tradition: "General Purana",
                                                      parent: "gen-magadha-haryanka-nanda",
                                                      parentName: "The Magadha Dynasties",
                                                      consort: "Empress Durdhara & Empress Asandhimitra",
                                                      vahana: "Imperial War Chariot",
                                                      ayudha: "Dharma Stambha (Ashoka Pillars) & Imperial Sword",
                                                      color: "#38BDF8",
                                                      glowColor: "rgba(56, 189, 248, 0.9)",
                                                      icon: "🦁",
                                                      summary: "Founded by Emperor Chandragupta Maurya under the guidance of Acharya Chanakya; Emperor Ashoka the Great erected the Lion Capital and rock edicts across the subcontinent.",
                                                      shloka: {
                                                    devanagari: "तान् नन्दान् कौटिल्यो ब्राह्मणः समुद्धरिष्यति । भुक्त्वा महीं वर्षशतं तेभ्यो मौर्या गमिष्यति ॥",
                                                    transliteration: "Tān nandān kauṭilyo brāhmaṇaḥ samuddhariṣyati | Bhuktvā mahīṁ varṣa-śataṁ tebhyo mauryā gamiṣyati ||",
                                                    source: "Vishnu Purana 4.24.26 & Bhagavata 12.1.11",
                                                    meaning: "A brilliant Brahmana named Kautilya (Chanakya) will uproot the nine Nandas; upon their fall, the earth shall pass into the hands of the noble Mauryas for over a century."
                                                      },
                                                      details: `
                                                        Guided by Chanakya's *Arthashastra*, Chandragupta Maurya expelled Greek garrisons and unified India from Afghanistan to the Bay of Bengal.
                                                        His grandson, Emperor Ashoka the Great, inscribed moral law (Dharma) upon rock faces and colossal monolithic stone pillars. His four-lion capital stands today as the sacred national emblem of India.
                                                      `,
                                                      keyAttributes: ["Guided by Acharya Chanakya (Kautilya)", "Created the first pan-Indian subcontinent empire", "Ashoka's Lion Capital and rock-cut Dharma edicts"],
                                                      children: [
                                                        {
                                                          id: "gen-shunga-kanva",
                                                          name: "The Shunga & Kanva Empires (Pushyamitra Shunga)",
                                                          sanskrit: "शुङ्ग एवं कण्व साम्राज्य (सम्राट् पुष्यमित्र शुङ्ग)",
                                                          title: "Revivers of the Vedic Ashvamedha Yajna • Patrons of Sage Patanjali",
                                                          category: "Shunga-Kanva Empires",
                                                          tradition: "General Purana",
                                                          parent: "gen-maurya-empire",
                                                          parentName: "The Maurya Empire",
                                                          consort: "Empress of Vidisha",
                                                          vahana: "Vedic Ashvamedha Steed",
                                                          ayudha: "Sacrificial Yupa & Golden Bow",
                                                          color: "#CA8A04",
                                                          glowColor: "rgba(202, 138, 4, 0.8)",
                                                          icon: "🐎",
                                                          summary: "General Pushyamitra Shunga established the Shunga dynasty at Pataliputra and Vidisha, performed two grand Ashvamedha sacrifices, and patronized the Great Grammarian Sage Patanjali.",
                                                          shloka: {
                                                            devanagari: "पुष्यमित्रस्तु सेनानीरुद्धृत्य बृहद्रथम् । कारयिष्यति राज्यं वै शतमेकं च वर्षतः ॥",
                                                            transliteration: "Puṣyamitras tu senānīr uddhṛtya bṛhadratham | Kārayiṣyati rājyaṁ vai śatam ekaṁ ca varṣataḥ ||",
                                                            source: "Vishnu Purana 4.24.34 & Bhagavata 12.1.16",
                                                            meaning: "The commander-in-chief Pushyamitra, overthrowing Brihadratha, will establish the Shunga sovereignty, ruling with valor and reviving Vedic rituals."
                                                          },
                                                          details: `
                                                            Pushyamitra Shunga repelled the Greco-Bactrian invasions of northern India.
                                                            His court in Pataliputra and Vidisha witnessed the composition of Sage Patanjali's *Mahabhasya*.
                                                            His son Agnimitra was immortalized in Kalidasa's *Malavikagnimitram*. The dynasty built the magnificent sculpted stone toranas (gateways) of Sanchi Stupa.
                                                          `,
                                                          keyAttributes: ["Performed two grand Vedic Ashvamedha Yajnas", "Patronized Sage Patanjali, author of the Mahabhasya", "Erected the sculpted stone gateways at Sanchi and Bharhut"],
                                                          children: [
                                                            {
                                                              id: "gen-satavahana-dynasty",
                                                              name: "The Andhra Satavahana Empire (Gautamiputra Satakarni)",
                                                              sanskrit: "सातवाहन साम्राज्य (गौतमीपुत्र सातकर्णि • दक्षिणापथपति)",
                                                              title: "Lords of the Deccan (Dakshinapatha) • Restorers of the Vedic Social Order",
                                                              category: "Satavahana Empire",
                                                              tradition: "General Purana",
                                                              parent: "gen-shunga-kanva",
                                                              parentName: "Shunga & Kanva Empires",
                                                              consort: "Gautami Balashri & Queen Nayanika",
                                                              vahana: "Sea-Going Merchant Ships & War Elephants",
                                                              ayudha: "Dharma Scepter & Trishula Standard",
                                                              color: "#10B981",
                                                              glowColor: "rgba(16, 185, 129, 0.85)",
                                                              icon: "⚓",
                                                              summary: "Great monarchs of Maharashtra and Andhra (Pratishthana / Paithan). Gautamiputra Satakarni shattered Western Kshatrapa incursions, revived Vedic sacrifices, and fostered maritime trade.",
                                                              shloka: {
                                                                devanagari: "आन्ध्रा भोक्ष्यन्ति वसुधां शतं त्रीणि च पञ्च च । सिमुकस्तत्र राजा वै प्रथमं संभविष्यति ॥",
                                                                transliteration: "Āndhrā bhokṣyanti vasudhāṁ śataṁ trīṇi ca pañca ca | Simukas tatra rājā vai prathamaṁ sambhaviṣyati ||",
                                                                source: "Vishnu Purana 4.24.47 & Matsya Purana 273.1",
                                                                meaning: "The Andhra (Satavahana) kings shall rule the earth for over four centuries; King Simuka will be the first among these illustrious southern sovereigns."
                                                              },
                                                              details: `
                                                                The Satavahanas (known as the Andhras in the Puranas) unified the Deccan plateau between the Arabian Sea and the Bay of Bengal.
                                                                Gautamiputra Satakarni proudly bore his mother's name (*Metronymic*), declared himself the 'Sole Protector of Truth' (*Eka-Brahmana*), and commissioned the rock-cut monasteries of Nashik and Karle.
                                                              `,
                                                              keyAttributes: ["Lords of the Deccan (Dakshinapathapati)", "Gautamiputra Satakarni crushed foreign Scythian (Shaka) invasions", "Pioneered maritime trade and Buddhist/Vedic rock-cut architecture"],
                                                              children: [
                                                                {
                                                                  id: "gen-gupta-empire",
                                                                  name: "The Imperial Gupta Dynasty (c. 320–550 AD • Golden Age)",
                                                                  sanskrit: "गुप्त साम्राज्य (सुवर्णयुग • चन्द्रगुप्त, समुद्रगुप्त, विक्रमादित्य)",
                                                                  title: "Maharajadhirajas of Aryavarta • The Golden Age of Classical Sanatan Dharma",
                                                                  category: "Gupta Empire",
                                                                  tradition: "General Purana",
                                                                  parent: "gen-satavahana-dynasty",
                                                                  parentName: "The Satavahana Empire",
                                                                  consort: "Empress Kumaradevi, Dattadevi, Dhruvadevi",
                                                                  vahana: "Garuda Standard (Garudadhvaja)",
                                                                  ayudha: "Ashvamedha Parakrama Bow, Veena & Iron Pillar of Delhi",
                                                                  color: "#FACC15",
                                                                  glowColor: "rgba(250, 204, 21, 0.95)",
                                                                  icon: "👑",
                                                                  summary: "Predicted in Vishnu Purana 4.24.63. Chandragupta I, Samudragupta, and Chandragupta II Vikramaditya patronized Mahakavi Kalidasa, Varahamihira, Nalanda University, and built an empire of sublime art, literature, and science.",
                                                                  shloka: {
                                                                    devanagari: "अनुगङ्गां प्रयागं च साकेतं मगधांस्तथा । एतान् जनपदान् सर्वान् भोक्ष्यन्ते गुप्तवंशजाः ॥",
                                                                    transliteration: "Anugaṅgāṁ prayāgaṁ ca sāketaṁ magadhāṁs tathā | Etān janapadān sarvān bhokṣyante gupta-vaṁśajāḥ ||",
                                                                    source: "Vishnu Purana 4.24.63 & Bhagavata 12.1.37",
                                                                    meaning: "Along the sacred course of the Ganga, Prayaga, Saketa (Ayodhya), and Magadha—all these sovereign realms shall be ruled by the glorious monarchs of the Gupta Dynasty!"
                                                                  },
                                                                  details: `
                                                                    The **Gupta Empire (c. 320–550 AD)** represents the pinnacle of ancient Indian civilization (*The Golden Age*):
                                                                    - **Chandragupta I** (319–335 AD): Founded the Gupta Era, married Licchavi Princess Kumaradevi.
                                                                    - **Samudragupta** (335–375 AD): The *Parakramanka*, undefeated in 100 battles (Prayaga Prashasti by Harishena), performed the Vedic Ashvamedha, and played the Veena on his gold coins.
                                                                    - **Chandragupta II Vikramaditya** (375–415 AD): Conquered the Western Kshatrapas; court adorned by the **Navaratnas** (Nine Gems), including **Mahakavi Kalidasa**, astronomer **Varahamihira**, and physician **Dhanvantari**; erected the rustless Iron Pillar of Delhi.
                                                                    - **Kumaragupta I** (415–455 AD): Founded the world's greatest international center of higher learning—**Nalanda Mahavihara University**.
                                                                    - **Skandagupta Vikramaditya** (455–467 AD): Vanquished the invading Hunas, preserving Sanatan Dharma and classical sciences when the Roman Empire collapsed.
                                                                    - Their lineage brought classical Hindu art, temple architecture, and mathematical genius (Aryabhata, 499 AD) to their absolute zenith by **500 AD**.
                                                                  `,
                                                                  keyAttributes: [
                                                                    "Golden Age of Sanskrit literature, science, and temple art",
                                                                    "Founded Nalanda University and erected the rustless Iron Pillar",
                                                                    "Defeated the fierce Huna invasions, safeguarding Dharma through 500 AD"
                                                                  ],
                                                                  children: [
                {
                  id: "gen-rashtrakuta-chandela",
                  name: "Imperial Rashtrakutas & Chandela Dynasty (c. 750-1200 AD)",
                  sanskrit: "राष्ट्रकूट एवं चन्देल राजवंश (खजुराहो मन्दिर निर्माता)",
                  title: "Carvers of Ellora Kailasa & Khajuraho Kandariya Mahadeva – Protectors of the Lunar Line",
                  category: "Chandravamsha Kings",
                  tradition: "General Purana",
                  parent: "gen-gupta-empire",
                  parentName: "The Imperial Gupta Dynasty (c. 320-550 AD – Golden Age)",
                  consort: "Queens of Manyakheta & Mahoba",
                  vahana: "Imperial War Chariot & Garuda Standard",
                  ayudha: "Khanda Sword & Khajuraho Architectural Shila",
                  color: "#FACC15",
                  glowColor: "rgba(250, 204, 21, 0.9)",
                  icon: "🏛️",
                  summary: "Continuing the Chandravamsha through the medieval renaissance: King Krishna I of the Rashtrakutas carved the monolithic Kailasa Temple at Ellora; the Chandelas of Jejakabhukti (claiming birth from Chandra) erected the world-renowned temple city of Khajuraho (Kandariya Mahadeva).",
                  shloka: {
                    devanagari: "चन्द्रवंश-समुद्भूताश्चन्देला भुवि विश्रुताः । खजूरा-वाहक-स्थाने शिव-धामानि चक्रिरे ॥",
                    transliteration: "Candra-vamsa-samudbhutas candela bhuvi visrutah | Khajura-vahaka-sthane shiva-dhamani cakrire ||",
                    source: "Khajuraho Stone Inscription of King Dhanga (954 AD)",
                    meaning: "Born of the illustrious Lunar Dynasty (Chandravamsha), renowned across the earth were the Chandelas, who erected celestial abodes of Lord Shiva in the sacred city of Khajuraho."
                  },
                  details: `
                    The Lunar Dynasty preserved spiritual and temporal authority across central and western India:
                    - **Rashtrakutas (c. 753–982 AD):** King Krishna I carved the world-famous monolithic Kailasa temple (Cave 16) at Ellora out of a single basalt cliffside, replicating Mount Kailasa on earth.
                    - **Chandela Dynasty of Jejakabhukti:** Inscriptions at Khajuraho trace the dynasty back to Sage Hemraj and the Moon God Chandra. Kings Yashovarman, Dhanga, and Vidyadhara built 85 magnificent temples of stone, dedicated to Shiva (Kandariya Mahadeva) and Vishnu (Lakshmana Temple), while successfully defending the northern fortress of Kalinjar against Mahmud of Ghazni.
                  `,
                  keyAttributes: ["Continued the Chandravamsha lineage after the Guptas", "Carved the monolithic Kailasa Temple of Ellora", "Constructed the celestial Khajuraho temple complex"],
                  children: [
                    {
                      id: "gen-tomara-bhati",
                      name: "Tomaras of Delhi & Yaduvamshi Bhatis of Jaisalmer (c. 1000-1500 AD)",
                      sanskrit: "तोमर राजवंश एवं भाटी यदुवंश (दिल्ली एवं जैसलमेर संस्थापक)",
                      title: "Descendants of Arjuna & Vajranabha – Founders of Lal Kot (Delhi) & Sonar Qila",
                      category: "Chandravamsha Kings",
                      tradition: "General Purana",
                      parent: "gen-rashtrakuta-chandela",
                      parentName: "Imperial Rashtrakutas & Chandela Dynasty (c. 750-1200 AD)",
                      consort: "Queens of Dhillika (Delhi) & Lodhurva",
                      vahana: "War Chariot & Desert Camels (Saurashtra Horse)",
                      ayudha: "Tomara Bow & Jaisalmer Golden Lance",
                      color: "#FACC15",
                      glowColor: "rgba(250, 204, 21, 0.95)",
                      icon: "🚩",
                      summary: "King Anangpal Tomar I & II founded Dhillika (Delhi) and built Lal Kot, tracing direct descent from Parikshit and the Pandavas. In 1156 AD, Maharawal Jaisal Singh founded the desert citadel of Jaisalmer (Sonar Qila), tracing unbroken patrilineal descent from Lord Krishna and his grandson Vajranabha.",
                      shloka: {
                        devanagari: "यदु-वंश-प्रसूतेन जैसलेन महीभृता । स्वर्ण-शैले कृतं दुर्गं भाटी-कुल-विभूषणम् ॥",
                        transliteration: "Yadu-vamsa-prasutena jaisalena mahibhrita | Svarna-shaile kritah durgah bhati-kula-vibhushanam ||",
                        source: "Jaisalmer Inscription of Trikuta Hill (1156 AD)",
                        meaning: "By King Jaisal, born of the sacred Yadu Dynasty, was erected this Golden Fortress upon the Trikuta Hill, the crowning jewel of the illustrious Bhati clan."
                      },
                      details: `
                        The Tomara and Bhati royal houses represent the two principal branches of the Pandava and Yaduvamsha lines:
                        - **Tomara Dynasty of Delhi:** Established the Iron Pillar of Delhi at Yoginipura (Mehrauli) and built Lal Kot (1060 AD). Royal genealogical records (*Vamshavalis*) track their descent from King Kshemaka and Emperor Arjuna.
                        - **Bhati Yaduvamshis of Jaisalmer:** Directly descended from Krishna's grandson Vajranabha, who was installed at Mathura after the Dvapara Yuga. The Bhatis defended the western frontiers of Rajasthan through the sands of the Thar desert, establishing Jaisalmer as an unassailable bastion of Sanatan culture.
                      `,
                      keyAttributes: ["Traces descent from the Pandavas and Sri Krishna's grandson Vajranabha", "Founded the historic city of Delhi (Lal Kot)", "Erected the world-renowned Golden Fort of Jaisalmer (1156 AD)"],
                      children: [
                        {
                          id: "gen-wodeyar-mysore-2026",
                          name: "The Mysore Yaduvamsha Wodeyar Dynasty to 2026",
                          sanskrit: "मैसूर यदुवंश (वडियार राजवंश – २०२६ ईस्वी पर्यन्त)",
                          title: "Sovereigns of Karnataka, Patrons of Chamundeshwari & Living Yaduvamsha to 2026",
                          category: "Living Lunar Dynasty",
                          tradition: "General Purana",
                          parent: "gen-tomara-bhati",
                          parentName: "Tomaras of Delhi & Yaduvamshi Bhatis of Jaisalmer (c. 1000-1500 AD)",
                          consort: "Maharanis of Mysore (including Maharani Trishikha Kumari Devi)",
                          vahana: "Gandaberunda Royal Standard (Two-Headed Cosmic Bird)",
                          ayudha: "Khanda Sword & Chamundeshwari Trident",
                          color: "#FACC15",
                          glowColor: "rgba(250, 204, 21, 1.0)",
                          icon: "🦚",
                          summary: "Founded in 1399 AD by Yaduraya, tracing direct Yaduvamsha roots from Dwarka. Patrons of Chamundeshwari Devi, builders of modern Mysore under Rajarshi Nalvadi Krishnaraja Wadiyar IV. Represented in 2026 by titular Maharaja Yaduveer Krishnadatta Chamaraja Wadiyar.",
                          shloka: {
                            devanagari: "न हि धर्मात् परो लोके धर्मो रक्षति रक्षितः । चामुण्डेशी-कृपा-पात्रा वडियारा जयन्ति ते ॥",
                            transliteration: "Na hi dharmat paro loke dharmo rakshati rakshitah | Camushdesi-kripa-patra vashiyara jayanti te ||",
                            source: "Motto of the Royal House of Mysore & Sritattvanidhi",
                            meaning: "There is nothing superior to Dharma in this world; Dharma protects those who protect it. Blessed by the grace of Goddess Chamundeshwari, the glorious Wodeyars prevail."
                          },
                          details: `
                            The Wodeyar dynasty of Mysore carries the Yaduvamsha into living 21st-century reality:
                            - **Yaduvamsha Origin:** Royal charters and historical texts (*Kanthirava Narasaraja Vijayam*) recount that Yaduraya and Krishnaraya arrived from Dwarka in Kathiawar to Mysore in 1399 AD, establishing the Yaduvamsha sovereign state under the patronage of Goddess Chamundeshwari.
                            - **Rajarshi Krishnaraja Wadiyar IV (1884–1940):** Hailed by Mahatma Gandhi as a 'Rajarshi' (Philosopher-King); he founded IISc Bangalore with Jamsetji Tata, Mysore University, Krishna Raja Sagara Dam, and made Mysore an exemplary model of public welfare.
                            - **Living Continuity in 2026:** Titular Maharaja Yaduveer Krishnadatta Chamaraja Wadiyar, elected Member of Parliament and spiritual head of the dynasty, oversees the world-famous 400-year-old Mysore Dasara festival, upholding the unbroken lunar tradition in 2026.
                          `,
                          keyAttributes: ["Direct living Yaduvamsha royal house preserving Dwarka roots to 2026", "Hereditary patron of the Goddess Chamundeshwari Temple", "Presides over the world-renowned historic Mysore Dasara celebrations"],
                          children: []
                        },
                        {
                          id: "gen-jaisalmer-living-2026",
                          name: "Living Yaduvamsha House of Jaisalmer to 2026",
                          sanskrit: "जैसलमेर भाटी यदुवंश (स्वर्ण दुर्ग – २०२६ ईस्वी पर्यन्त)",
                          title: "44th Maharawal of Sonar Qila – Custodians of Shri Laxminath Ji Temple",
                          category: "Living Lunar Dynasty",
                          tradition: "General Purana",
                          parent: "gen-tomara-bhati",
                          parentName: "Tomaras of Delhi & Yaduvamshi Bhatis of Jaisalmer (c. 1000-1500 AD)",
                          consort: "Maharanis of Jaisalmer",
                          vahana: "Swarna Dhvaja (Golden Standard of the Desert)",
                          ayudha: "Bhati Talwar & Silver Chhatra of Laxminath Ji",
                          color: "#FACC15",
                          glowColor: "rgba(250, 204, 21, 0.95)",
                          icon: "🏰",
                          summary: "Represented in 2026 by Maharawal Chaitanya Raj Singh (44th head of the Bhati Yaduvamsha clan). Hereditary custodians of the living Sonar Qila, the ancient Jain library of palm-leaf manuscripts (Gyan Bhandar), and the historic temple of Shri Laxminath Ji.",
                          shloka: {
                            devanagari: "उत्तर-भड़-किंवाड़-भाटी जैसलमेर-पतिः सदा । कृष्ण-वंश-प्रदीपोऽयं भासते धरणी-तले ॥",
                            transliteration: "Uttara-bhad-kinvad-bhati jaisalmera-patih sada | Krishna-vamsa-pradipo'yam bhasate dharani-tale ||",
                            source: "Historic Title of the Maharawals of Jaisalmer",
                            meaning: "The invincible western and northern gateway shield of Hindustan is the Bhati Sovereign of Jaisalmer; like a radiant lamp of Lord Krishna's Yaduvamsha, he illuminates the earth down to the modern era."
                          },
                          details: `
                            The Bhati royal family of Jaisalmer is celebrated throughout Indian history as *Uttara-Bhad-Kiwad* (the northern gatekeeper of India):
                            - **Unbroken Yaduvamsha:** The living Maharawals are direct descendants of Lord Krishna's son Pradyumna and grandson Vajranabha.
                            - **Living Fortress:** Jaisalmer Fort is one of the few living forts in the world, where thousands of residents continue ancient traditions inside the ramparts.
                            - **Living Representative in 2026:** Maharawal Chaitanya Raj Singh actively leads local community development, desert heritage preservation, and the worship of Lord Krishna as Laxminath Ji in 2026.
                          `,
                          keyAttributes: ["44th unbroken generational head of the Bhati Yaduvamsha to 2026", "Hereditary guardian of the living UNESCO World Heritage Sonar Qila", "Historical honorific: 'Uttara-Bhad-Kiwad' (Shield of the North)"],
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
                                                                }
                                                              ]
                                                            }
                                                          ]
                                                        }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      ]

                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        /* ------------------------------------------------------------------
           THE DAITYA DYNASTY (DITI'S DESCENDANTS & SUPREME BHAKTAS)
           ------------------------------------------------------------------ */
        {
          id: "gen-daitya-lineage",
          name: "The Daitya Dynasty (Prahlada & Mahabali)",
          sanskrit: "दैत्यवंश (हिरण्यकशिपु - प्रह्लाद - विरोचन - बलि - बाणासुर)",
          title: "The Mighty Kings of Netherworld Realms & Devoted Vaishnavas",
          category: "Daitya Lineage",
          tradition: "General Purana",
          parent: "gen-kashyapa",
          parentName: "Sage Kashyapa & The Cosmic Mothers",
          consort: "Kayadhu, Kotara, Vindhyavali",
          vahana: "Celestial Asura Chariot",
          ayudha: "Iron Mace & Cosmic Golden Crown",
          color: "#991B1B",
          glowColor: "rgba(153, 27, 27, 0.85)",
          icon: "🏰",
          summary: "Born of Kashyapa and Diti; while Hiranyakashipu fell to pride, his descendants Prahlada and Mahabali became celebrated Vaishnava saints.",
          shloka: {
            devanagari: "प्रह्लादजनको यद्वद् विरोचनपिता तथा । बलेश्च प्रपितामहो भक्तश्रेष्ठः स कीर्तितः ॥",
            transliteration: "Prahlāda-janako yadvad virocana-pitā tathā | Baleś ca prapitāmaho bhakta-śreṣṭhaḥ sa kīrtitaḥ ||",
            source: "Bhagavata Purana",
            meaning: "Father of Virochana and great-grandfather of Bali, Prahlada is celebrated as the foremost among all divine devotees."
          },
          details: `
            The Daitya dynasty illustrates that spiritual greatness depends on character, not birth:
            • **Hiranyakashipu**: Tyrant slain by Narasimha.
            • **Prahlada**: Learned devotion in Narada's hermitage while in his mother's womb; protected from poison, fire, and falling cliffs.
            • **Virochana**: Righteous king who gave away his own life in charity to Indra.
            • **Mahabali**: Emperor of the three worlds whose humility earned him Sutala loka with Vishnu as his personal gatekeeper.
            • **Banasura**: Thousand-armed Shaiva devotee whose daughter Usha wed Krishna's grandson Aniruddha.
          `,
          keyAttributes: [
            "Prahlada: Foremost Mahabhagavata",
            "Mahabali: Honored globally during Onam festival",
            "Synthesis of Shaiva & Vaishnava traditions through Usha and Aniruddha"
          ],
          children: [
            {
              id: "gen-prahlada-maharaja",
              name: "Prahlada Maharaja",
              sanskrit: "परमभागवत प्रह्लाद महाराज",
              title: "The Child Saint for Whom Narasimha Manifested",
              category: "Mahabhagavatas",
              tradition: "General Purana",
              parent: "gen-daitya-lineage",
              parentName: "The Daitya Dynasty",
              consort: "Queen Kotara",
              vahana: "Throne of Sutala",
              ayudha: "Harinaam (The Holy Name of Narayana)",
              color: "#DC2626",
              glowColor: "rgba(220, 38, 38, 0.85)",
              icon: "🪷",
              summary: "Son of Hiranyakashipu; initiated by Narada Muni in the womb; proved that God is everywhere, even in a stone pillar.",
              shloka: {
                devanagari: "श्रवणं कीर्तनं विष्णोः स्मरणं पादसेवनम् । अर्चनं वन्दनं दास्यं सख्यमात्मनिवेदनम् ॥",
                transliteration: "Śravaṇaṁ kīrtanaṁ viṣṇoḥ smaraṇaṁ pāda-sevanam | Arcanaṁ vandanaṁ dāsyaṁ sakhyam ātma-nivedanam ||",
                source: "Bhagavata Purana 7.5.23",
                meaning: "Hearing, chanting, remembering Vishnu, serving His feet, worshipping, offering prayers, servitude, divine friendship, and complete self-surrender—these are the nine limbs of devotion."
              },
              details: `
                Prahlada formulated the celebrated *Nava-vidha Bhakti* (ninefold devotional paths).
                Unmoved by his father's deadly tortures, he declared that Narayana permeates every atom of existence, prompting Narasimha to burst from the palace pillar.
              `,
              keyAttributes: ["Author of Navavidha Bhakti", "Protected by Narasimha Avatara", "Ruler of the Daityas"],
              children: [
                {
                  id: "gen-mahabali-emperor",
                  name: "Emperor Mahabali (Lord of Sutala)",
                  sanskrit: "दानवीर बलि चक्रवर्ती (सुतलाधिपति)",
                  title: "The Universal Donor Crowned Ruler of the Sutala Netherworld",
                  category: "Chakravartin / Bhakta",
                  tradition: "General Purana",
                  parent: "gen-prahlada-maharaja",
                  parentName: "Prahlada Maharaja",
                  consort: "Queen Vindhyavali",
                  vahana: "Golden Netherworld Chariot",
                  ayudha: "Golden Water Pitcher of Charity (Dāna-Kalasha)",
                  color: "#B45309",
                  glowColor: "rgba(180, 83, 9, 0.85)",
                  icon: "👑",
                  summary: "Grandson of Prahlada; conquered heaven with righteous charity and offered his own head for Vamana's third pace.",
                  shloka: {
                    devanagari: "पदत्रयं ययाचे मां बलिस्तमन्वमोदत । सर्वस्वं हरता तुभ्यं शिरो दत्त्वा महीयते ॥",
                    transliteration: "Pada-trayaṁ yayāce māṁ balis tam anvamodata | Sarvasvaṁ haratā tubhyaṁ śiro dattvā mahīyate ||",
                    source: "Bhagavata Purana 8.22",
                    meaning: "I asked for three paces of land, and Bali consented with joy; when his everything was taken, he offered his own head and attained supreme glory."
                  },
                  details: `
                    When Guru Shukracharya warned Bali that the dwarf boy was Vishnu in disguise, Bali replied that to give charity directly to the Lord of the Universe was the crowning honor of his existence.
                    Vishnu was so moved by Bali's humility that He granted him the lush realm of Sutala loka and promised to stand as his personal palace guardian until the Savarni Manvantara, when Bali will ascend as King of Heaven (Indra).
                  `,
                  keyAttributes: [
                    "Celebrated annually during the harvest festival of Onam",
                    "Future King of Heaven in Savarni Manvantara",
                    "Vishnu stands as his eternal gatekeeper"
                  ],
                  children: [
                    {
                      id: "gen-banasura-usha",
                      name: "Banasura & Princess Usha",
                      sanskrit: "बाणासुर एवं राजकुमारी उषा",
                      title: "Thousand-Armed Shaiva King & The Princess of Sonitapura",
                      category: "Daitya Lineage",
                      tradition: "General Purana",
                      parent: "gen-mahabali-emperor",
                      parentName: "Emperor Mahabali",
                      consort: "Prince Aniruddha (Husband of Usha)",
                      vahana: "War Chariot / Peacock Palanquin",
                      ayudha: "Thousand Bows & Swords (Banasura) / Vina of Love (Usha)",
                      color: "#EC4899",
                      glowColor: "rgba(236, 72, 153, 0.8)",
                      icon: "🌺",
                      summary: "Eldest son of Mahabali; great devotee of Lord Shiva; his daughter Usha fell in love with Sri Krishna's grandson Aniruddha, uniting Shaiva and Vaishnava lineages.",
                      shloka: {
                        devanagari: "बाणस्य बाहुसाहस्रं चक्रेण भगवान् हरिः । चकर्त लीलयैवाग्रे शिवस्य च शृण्वतः ॥",
                        transliteration: "Bāṇasya bāhu-sāhasraṁ cakreṇa bhagavān hariḥ | Cakarta līlayaivāgre śivasya ca śṛṇvataḥ ||",
                        source: "Bhagavata Purana 10.63.32",
                        meaning: "With His divine Sudarshana Chakra, Lord Hari playfully severed the thousand arms of Banasura, sparing four arms at Lord Shiva's gentle request."
                      },
                      details: `
                        Banasura worshipped Shiva with his thousand arms playing musical instruments during the Tandava dance.
                        When Usha secretly wed Aniruddha, Banasura imprisoned him, leading to the battle of Sonitapura where Shiva defended Banasura and Krishna defended the Yadavas.
                        Shiva intervened with philosophical praise, Krishna spared Banasura's life, and Usha and Aniruddha returned happily to Dvaraka.
                      `,
                      keyAttributes: [
                        "Daughter Usha wed Krishna's grandson Aniruddha",
                        "Synthesis of Shaiva and Vaishnava dynasties",
                        "Sovereign of Sonitapura (Assam)"
                      ],
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        /* ------------------------------------------------------------------
           THE ASHTA VASUS & ELEMENTAL FORCES
           ------------------------------------------------------------------ */
        {
          id: "gen-ashta-vasus",
          name: "The Ashta Vasus & Elemental Devas",
          sanskrit: "अष्टवसवः एवं दिक्पालाः (वायु, अग्नि, वरुण, धर्म)",
          title: "The Eight Cosmic Material Elements & Guardians of Directions",
          category: "Vasus & Lokapalas",
          tradition: "General Purana",
          parent: "gen-kashyapa",
          parentName: "Sage Kashyapa & The Cosmic Mothers",
          consort: "Vasu Patnis (Svaha, etc.)",
          vahana: "Cosmic Winds & Waters",
          ayudha: "Bow of Light, Flaming Torch, Water Noose",
          color: "#0284C7",
          glowColor: "rgba(2, 132, 199, 0.85)",
          icon: "🌬️",
          summary: "Dhara (Earth), Anala (Agni), Anila (Vayu), Apa (Water), Pratyusha (Dawn), Prabhasa (Light), Soma (Moon), and Dhruva (Pole Star).",
          shloka: {
            devanagari: "धरो ध्रुवश्च सोमश्च अहश्चैवानिलोऽनलः । प्रत्यूषश्च प्रभासश्च वसवोऽष्टाविति स्मृताः ॥",
            transliteration: "Dharo dhruvaś ca somaś ca ahaś caivānilo'nalaḥ | Pratyūṣaś ca prabhāsaś ca vasavo'ṣṭāv iti smṛtāḥ ||",
            source: "Vishnu Purana 1.15.110",
            meaning: "Dhara, Dhruva, Soma, Aha, Anila (Wind), Anala (Fire), Pratyusha, and Prabhasa are celebrated as the Eight Vasus."
          },
          details: `
            The Ashta Vasus govern the physical elements and energy cycles supporting biological life.
            • **Anila (Vayu)**: Father of Lord Hanuman and Bhimasena.
            • **Prabhasa**: Cursed by Sage Vashistha for stealing Kamadhenu, incarnated as the noble **Bhishma Pitamaha** on earth.
            • **Anala (Agni)**: The cosmic conveyor of sacrificial offerings (*Havyavahana*).
          `,
          keyAttributes: [
            "Eight material building blocks of the physical universe",
            "Anila manifested as Hanuman and Bhima",
            "Prabhasa incarnated as Bhishma Pitamaha"
          ],
          children: []
        }
      ]
    }
  ]
};

/* ==========================================================================
   2. VISHNU PURANA TRADITION (Sage Parashara's Canonical Vaishnava Cosmogony)
   Comprehensive, Authentic Six-Amsa Genealogy from the Vishnu Mahapurana
   ========================================================================== */
const VISHNU_PURANA_DATA = {
  id: "vp-narayana",
  name: "Lord Maha-Vishnu (Paramatman / Narayana)",
  sanskrit: "भगवान् महाविष्णु (परमात्मा नारायण)",
  title: "The Supreme Cause of All Causes & Fountainhead of the Universe",
  category: "Supreme Root (Vishnu Purana)",
  tradition: "Vishnu Purana",
  parent: null,
  parentName: "Purushottama (Transcendent, Self-Existent)",
  consort: "Goddess Mahalakshmi (Eternal Consort & Sri-Shakti)",
  vahana: "Garuda (The King of Avians)",
  ayudha: "Sudarshana Chakra, Kaumodaki Gada, Panchajanya Conch, Padma",
  color: "#06B6D4",
  glowColor: "rgba(6, 182, 212, 0.85)",
  icon: "🪷",
  summary: "In the Vishnu Purana, Narayana alone existed before creation; He is both the efficient and material cause of all reality.",
  shloka: {
    devanagari: "विष्णोः सकाशादुद्भूतं जगत्तत्रैव च स्थितम् । स्थितिसंयमकर्ताऽसौ जगतोऽस्य जगच्च सः ॥",
    transliteration: "Viṣṇoḥ sakāśād udbhūtaṁ jagat tatraiva ca sthitam | Sthiti-saṁyama-kartā'sau jagato'sya jagac ca saḥ ||",
    source: "Vishnu Purana 1.1.31",
    meaning: "From Vishnu this entire universe emanated; in Him it rests, and by Him it is sustained and dissolved. He is both the cause and the universe itself."
  },
  details: `
    The **Vishnu Purana** (*Parashara Smriti*) is the celebrated dialogue between Sage Parashara and his disciple Maitreya across six Books (*Amsas*).
    It establishes Lord Narayana as the singular ultimate reality (*Vasudeva*), from whose lotus-navel Brahma architects the cosmic egg, and from whose wrath Rudra dissolves cosmic illusion.
  `,
  keyAttributes: [
    "Paramatman: The Supreme Indwelling Consciousness",
    "Revealed to Maitreya across Six Canonical Amsas",
    "Source of the Chaturvyuha and all Avataras"
  ],
  children: [
    /* ----------------------------------------------------------------------
       BRANCH 1: GODDESS MAHALAKSHMI & ASHTA LAKSHMI (AMSA 1)
       ---------------------------------------------------------------------- */
    {
      id: "vp-lakshmi-parivara",
      name: "Goddess Mahalakshmi (Sri)",
      sanskrit: "भगवती महालक्ष्मी (श्री / विष्णुपत्नी)",
      title: "The Eternal Dynamic Energy & Goddess of Cosmic Abundance",
      category: "Divine Consort",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Lord Maha-Vishnu",
      vahana: "Uluka (Divine Owl) & Gaja (Sacred White Elephant)",
      ayudha: "Golden Lotus, Varada Mudra, Abhaya Mudra, Amrita Kumbha",
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.9)",
      icon: "🪷",
      summary: "Emerged from the Ocean of Milk during Samudra Manthana, choosing Vishnu's chest as Her eternal residence.",
      shloka: {
        devanagari: "नित्यैवैषा जगन्माता विष्णोः श्रीरनपायिनी । यथा सर्वगतो विष्णुस्तथैवेयं द्विजोत्तम ॥",
        transliteration: "Nityaivaiṣā jagan-mātā viṣṇoḥ śrīr anapāyinī | Yathā sarvagato viṣṇus tathaiveyaṁ dvijottama ||",
        source: "Vishnu Purana 1.8.17",
        meaning: "She is eternal, the Mother of the Universe, the inseparable glory (Sri) of Vishnu. Just as Vishnu is all-pervading, so also is She, O best of the twice-born!"
      },
      details: `
        Book 1 of the Vishnu Purana details the churn of the milk ocean (*Samudra Manthana*).
        When Lakshmi emerged adorned with celestial garlands, the oceans presented Her with lotus blossoms, the Dik-Gajas bathed Her with golden ewers, and She placed the fragrant Vanamala garland upon Vishnu's neck.
      `,
      keyAttributes: [
        "Inseparable from Vishnu like speech and meaning",
        "Emerged from the Ocean of Milk (Kshirasagara)",
        "Dwelling in the Srivatsa mark on Vishnu's chest"
      ],
      children: [
        {
          id: "vp-ashta-lakshmi",
          name: "The Ashta Lakshmi (Eightfold Abundance)",
          sanskrit: "अष्टलक्ष्मी (आदि, धान्य, धैर्य, गज, सन्तान, विजय, विद्या, धन)",
          title: "The Eight Cosmic Powers of Holistic Prosperity",
          category: "Lakshmi Manifestations",
          tradition: "Vishnu Purana",
          parent: "vp-lakshmi-parivara",
          parentName: "Goddess Mahalakshmi",
          consort: "Lord Maha-Vishnu",
          vahana: "Eight Celestial Elephants",
          ayudha: "Golden Lotuses, Sugarcane Bow, Chakra, Shankha",
          color: "#FBBF24",
          glowColor: "rgba(251, 191, 36, 0.85)",
          icon: "👑",
          summary: "Adi (Primordial), Dhanya (Food), Dhairya (Courage), Gaja (Royalty), Santana (Progeny), Vijaya (Victory), Vidya (Wisdom), and Dhana (Wealth).",
          shloka: {
            devanagari: "सुमनसवन्दित सुन्दरी माधवी चन्द्रसहोदरी हेममये । मुनिगणमण्डित मोक्षप्रदायिनी मञ्जुलभाषिणी वेदनुते ॥",
            transliteration: "Sumanasa-vandita sundarī mādhavī candra-sahodarī hemamaye | Muni-gaṇa-maṇḍita mokṣa-pradāyinī mañjula-bhāṣiṇī vedanute ||",
            source: "Ashta Lakshmi Stotram",
            meaning: "Worshipped by the virtuous, enchanting consort of Madhava, sister of the moon, golden one, adored by assemblies of sages, bestower of liberation, praised by the Vedas!"
          },
          details: `
            In Vaishnava philosophy, prosperity is not merely paper currency, but eightfold holistic health: spiritual origin (*Adi*), agricultural nourishment (*Dhanya*), emotional resilience (*Dhairya*), royal dignity (*Gaja*), family continuity (*Santana*), moral triumph (*Vijaya*), sacred knowledge (*Vidya*), and material balance (*Dhana*).
          `,
          keyAttributes: ["Eight dimensions of divine prosperity", "Bestower of both Bhoga and Moksha", "Adorned by the Dig-Gajas"],
          children: []
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 2: CHATURVYUHA & VAIKUNTHA EMANATIONS (AMSA 5)
       ---------------------------------------------------------------------- */
    {
      id: "vp-chaturvyuha",
      name: "The Transcendental Chatur-Vyuha",
      sanskrit: "चतुर्व्यूह (वासुदेव, सङ्कर्षण, प्रद्युम्न, अनिरुद्ध)",
      title: "The Four Cosmic Levels of Divine Emanation & Consciousness",
      category: "Vaikuntha Emanations",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Shanti, Sri, Saraswati, Rati",
      vahana: "Garuda",
      ayudha: "Chakra, Gada, Shankha, Padma",
      color: "#818CF8",
      glowColor: "rgba(129, 140, 248, 0.85)",
      icon: "☸️",
      summary: "Vasudeva (Paramatman), Sankarshana (Jiva/Shesha), Pradyumna (Manas/Kamadeva), and Aniruddha (Ahankara).",
      shloka: {
        devanagari: "वासुदेवः सङ्कर्षणः प्रद्युम्नोऽनिरुद्धश्चेति चतुर्व्यूहात्मको भगवान् ।",
        transliteration: "Vāsudevaḥ saṅkarṣaṇaḥ pradyumno'niruddhaś ceti catur-vyūhātmako bhagavān |",
        source: "Pancharatra & Vishnu Purana",
        meaning: "The Supreme Lord expands in four transcendental emanations: Vasudeva, Sankarshana, Pradyumna, and Aniruddha."
      },
      details: `
        The Chaturvyuha doctrine governs both metaphysical cosmic architecture and the historical manifestation of the Vrishni heroes at Dvaraka.
        Vasudeva represents pure consciousness (*Chitta*), Sankarshana represents the living spirit (*Jiva*), Pradyumna represents cosmic intellect (*Buddhi*), and Aniruddha represents self-awareness (*Ahankara*).
      `,
      keyAttributes: [
        "Four pillars of Pancharatra and Vishnu Purana metaphysics",
        "Archetypes of cosmic psychology and spiritual faculties",
        "Manifested historically in Dvaraka through Sri Krishna's family"
      ],
      children: [
        {
          id: "vp-vasudeva-vyuha",
          name: "Lord Vasudeva (The Omnipresent Absolute)",
          sanskrit: "भगवान् वासुदेव (सर्वव्यापी परब्रह्मन्)",
          title: "First Member of the Chaturvyuha & Presiding Deity of Chitta",
          category: "Chaturvyuha",
          tradition: "Vishnu Purana",
          parent: "vp-chaturvyuha",
          parentName: "The Transcendental Chatur-Vyuha",
          consort: "Goddess Shanti Devi",
          vahana: "Garuda",
          ayudha: "Sudarshana Chakra & Kaumodaki Gada",
          color: "#6366F1",
          glowColor: "rgba(99, 102, 241, 0.85)",
          icon: "✨",
          summary: "The fountainhead of the Vyuha expansions representing unconditioned consciousness (*Shuddha Sattva*).",
          shloka: {
            devanagari: "सर्वत्रासौ समस्तं च वसत्यत्रेति वै यतः । ततः स वासुदेवेति विद्वद्भिः परिपठ्यते ॥",
            transliteration: "Sarvatrāsau samastaṁ ca vasaty atreti vai yataḥ | Tataḥ sa vāsudeveti vidvadbhiḥ paripaṭhyate ||",
            source: "Vishnu Purana 1.2.12",
            meaning: "Because He abides in all things and all things abide in Him, He is celebrated by the wise as Vasudeva."
          },
          details: `
            Lord Vasudeva possesses all six divine attributes in full: knowledge (*Jnana*), sovereignty (*Aishvarya*), strength (*Shakti*), vigor (*Bala*), radiance (*Tejas*), and virility (*Virya*).
          `,
          keyAttributes: ["Presiding deity of Chitta (Pure Consciousness)", "Source of Sankarshana", "Endowed with all six divine opulences"],
          children: [
            {
              id: "vp-sankarshana-vyuha",
              name: "Lord Sankarshana (Ananta Shesha)",
              sanskrit: "भगवान् सङ्कर्षण (अनन्त शेष / जीवाधिपति)",
              title: "Second Member of Chaturvyuha & Lord of the Living Spirit",
              category: "Chaturvyuha",
              tradition: "Vishnu Purana",
              parent: "vp-vasudeva-vyuha",
              parentName: "Lord Vasudeva",
              consort: "Goddess Sri Devi",
              vahana: "Cosmic Ocean",
              ayudha: "Hala (Plough), Musala (Pestle), Thousand Hoods",
              color: "#94A3B8",
              glowColor: "rgba(148, 163, 184, 0.85)",
              icon: "🐍",
              summary: "Emanates from Vasudeva; presides over the individual soul (*Jiva*) and carries out cosmic dissolution (*Samhara*).",
              shloka: {
                devanagari: "यस्यान्तर्गतमशेषं जगदिदं शेते महाम्भसि । सङ्कर्षणाय देवाय नमस्तस्मै महात्मने ॥",
                transliteration: "Yasyāntargatam aśeṣaṁ jagad idaṁ śete mahāmbhasi | Saṅkarṣaṇāya devāya namas tasmai mahātmane ||",
                source: "Vishnu Purana",
                meaning: "Within whom this entire universe rests upon the cosmic waters, to that great soul Lord Sankarshana I bow."
              },
              details: `
                Sankarshana manifests as Ananta Shesha holding planetary globes on His hoods, and incarnates in Dvapara Yuga as Lord Balarama.
              `,
              keyAttributes: ["Presiding deity of the Jiva", "Master of Jnana and Bala", "Emanates Pradyumna"],
              children: [
                {
                  id: "vp-pradyumna-vyuha",
                  name: "Lord Pradyumna (Cosmic Intellect)",
                  sanskrit: "भगवान् प्रद्युम्न (बुद्ध्याधिपति / कामकला)",
                  title: "Third Member of Chaturvyuha & Sovereign of Cosmic Mind",
                  category: "Chaturvyuha",
                  tradition: "Vishnu Purana",
                  parent: "vp-sankarshana-vyuha",
                  parentName: "Lord Sankarshana",
                  consort: "Goddess Saraswati (Mayavati)",
                  vahana: "Makara Chariot",
                  ayudha: "Sharnga Bow & Floral Arrows",
                  color: "#EC4899",
                  glowColor: "rgba(236, 72, 153, 0.85)",
                  icon: "🏹",
                  summary: "Emanates from Sankarshana; presides over universal intellect (*Buddhi*) and descended as Sri Krishna's son with Rukmini.",
                  shloka: {
                    devanagari: "प्रद्युम्नः सर्वभूतानां बुद्धिरूपेण संस्थितः ।",
                    transliteration: "Pradyumnaḥ sarva-bhūtānāṁ buddhi-rūpeṇa saṁsthitaḥ |",
                    source: "Pancharatra Agama",
                    meaning: "Lord Pradyumna resides within all living beings as the faculty of cosmic intellect (Buddhi)."
                  },
                  details: `
                    Pradyumna rules over the creative passion of life. Slew Sambara and fathered Aniruddha.
                  `,
                  keyAttributes: ["Presiding deity of Buddhi", "Master of Aishvarya and Virya", "Emanates Aniruddha"],
                  children: [
                    {
                      id: "vp-aniruddha-vyuha",
                      name: "Lord Aniruddha (Cosmic Ego & Life Sustainer)",
                      sanskrit: "भगवान् अनिरुद्ध (अहङ्काराधिपति / उषापति)",
                      title: "Fourth Member of Chaturvyuha & Ruler of Self-Awareness",
                      category: "Chaturvyuha",
                      tradition: "Vishnu Purana",
                      parent: "vp-pradyumna-vyuha",
                      parentName: "Lord Pradyumna",
                      consort: "Goddess Rati (Princess Usha)",
                      vahana: "Golden Chariot",
                      ayudha: "Chakra, Sword & Shield",
                      color: "#F43F5E",
                      glowColor: "rgba(244, 63, 94, 0.85)",
                      icon: "⚔️",
                      summary: "Emanates from Pradyumna; presides over self-awareness (*Ahankara*); father of King Vajranabha of Mathura.",
                      shloka: {
                        devanagari: "अनिरुद्धो महातेजा अहङ्कारप्रवर्तकः ।",
                        transliteration: "Aniruddho mahātejā ahaṅkāra-pravartakaḥ |",
                        source: "Pancharatra Agama",
                        meaning: "The illustrious Aniruddha is the prime mover and governor of cosmic self-awareness (Ahankara)."
                      },
                      details: `
                        Aniruddha preserves the world and protects devotees from illusion. His marriage to Usha, daughter of Banasura, unified the Shaiva and Vaishnava royal families.
                      `,
                      keyAttributes: ["Presiding deity of Ahankara", "Master of Shakti and Tejas", "Father of King Vajranabha"],
                      children: [
                        {
                          id: "vp-vajranabha-heir",
                          name: "King Vajranabha of Mathura",
                          sanskrit: "राजा वज्रनाभ (मथुराधिपति / यदुवंश-रक्षक)",
                          title: "Sole Dynastic Heir of Dvaraka & Consecrator of Vraja",
                          category: "Yadava Royalty",
                          tradition: "Vishnu Purana",
                          parent: "vp-aniruddha-vyuha",
                          parentName: "Lord Aniruddha",
                          consort: "Yadava Queen",
                          vahana: "Imperial Golden Chariot",
                          ayudha: "Vajra Scepter & Royal Bow",
                          color: "#F59E0B",
                          glowColor: "rgba(245, 158, 11, 0.8)",
                          icon: "👑",
                          summary: "Great-grandson of Sri Krishna; crowned at Mathura by the Pandavas; sculpted the eternal deities of Govindadeva, Gopinatha, and Madana-Mohana.",
                          shloka: {
                            devanagari: "मथुरायां कृतो राजा वज्रो नाम महायशाः ।",
                            transliteration: "Mathurāyāṁ kṛto rājā vajro nāma mahāyaśāḥ |",
                            source: "Vishnu Purana 5.38.34",
                            meaning: "The glorious prince named Vajra was installed as King at Mathura."
                          },
                          details: `
                            King Vajranabha consecrated the holy land of Vraja Mandala. Guided by Sage Shandilya, he carved deities matching the living physical beauty of Sri Krishna.
                          `,
                          keyAttributes: ["Consecrator of Vraja Dham", "Bridge between Dvapara and Kaliyuga", "Last direct sovereign of Krishna's line"],
                          children: [
            {
              id: "vp-pratibahu-subahu",
              name: "Kings Pratibahu & Subahu of Mathura",
              sanskrit: "राजा प्रतिबाहु एवं सुबाहु (विष्णुपुराण ४.१५)",
              title: "Heirs of the Yaduvamsha • Preservers of Krishna's Sacred Sites in Braj",
              category: "Vaikuntha Emanations",
              tradition: "Vishnu Purana",
              parent: "vp-vajranabha-heir",
              parentName: "King Vajranabha of Mathura",
              consort: "Princesses of Kosala",
              vahana: "Royal Chariot",
              ayudha: "Vaidharbha Bow & Discus",
              color: "#818CF8",
              glowColor: "rgba(129, 140, 248, 0.8)",
              icon: "🪷",
              summary: "Recorded in Vishnu Purana 4.15 and Harivamsha: Installed in Mathura, Pratibahu and Subahu continued the royal Vrishni line, consecrating the pilgrimage shrines of Mathura and Govardhan.",
              shloka: {
                devanagari: "प्रतिबाहुस्ततो राजा सुबाहुस्तस्य चात्मजः । एते यदुप्रवीरास्तु पालयन्ति स्म शूरसेन् ॥",
                transliteration: "Pratibāhus tato rājā subāhus tasya cātmajaḥ | Ete yadu-pravīrās tu pālayanti sma śūrasen ||",
                source: "Vishnu Purana 4.15 & Harivamsha",
                meaning: "Then came King Pratibahu and his noble son Subahu; these foremost heroes of Yadu protected the realm of Shurasena with righteousness."
              },
              details: `
                Through Pratibahu and Subahu, the living presence of the Yaduvamsha remained anchored in sacred Mathura across the historical eras.
              `,
              keyAttributes: ["Continued the Yaduvamsha in Mathura", "Consecrated the eternal shrines of Braj Mandala", "Recorded in Book 4 Chapter 15 of Vishnu Purana"],
              children: []
            }
          ]

                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 3: SVAYAMBHUVA MANU & COSMOLOGICAL DYNASTIES (AMSAS 1 & 2)
       ---------------------------------------------------------------------- */
    {
      id: "vp-svayambhuva-manu",
      name: "Svayambhuva Manu & Shatarupa",
      sanskrit: "स्वायम्भुव मनु एवं शतरूपा",
      title: "The First Progenitors of Humanity Detailed in Books 1 and 2",
      category: "Cosmological Dynasties",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Queen Shatarupa",
      vahana: "Royal Solar Chariot",
      ayudha: "Dharma Scepter & Manusmriti",
      color: "#D97706",
      glowColor: "rgba(217, 119, 6, 0.85)",
      icon: "📜",
      summary: "First son of Brahma; his two sons Uttanapada (father of Dhruva and ancestor of Prithu) and Priyavrata (ancestor of Bharata) established earthly civilization.",
      shloka: {
        devanagari: "स्वायम्भुवस्य पुत्रावुभौ धर्मविशारदौ । उत्तानपादः प्रथमः प्रियव्रतस्तथापरः ॥",
        transliteration: "Svāyambhuvasya putrāv ubhau dharma-viśāradau | Uttānapādaḥ prathamaḥ priyavratas tathāparaḥ ||",
        source: "Vishnu Purana 1.7.18",
        meaning: "Svayambhuva Manu had two sons highly proficient in righteousness: Uttanapada the elder, and Priyavrata the other."
      },
      details: `
        The first two books of the Vishnu Purana present the comprehensive cosmography of our universe through the lives of Manu's descendants:
        the steadfast child Dhruva who attained the eternal Pole Star, King Prithu who gave the earth its name *Prithvi*, and King Bharata who gave our subcontinent its sacred name *Bharatavarsha*.
      `,
      keyAttributes: [
        "Fountainhead of the two premier royal lines",
        "Detailed in Amsas 1 and 2 of Vishnu Purana",
        "Chronicles of Dhruva, Prithu, and Jada Bharata"
      ],
      children: [
        /* --- UTTANAPADA & DHRUVA SUB-BRANCH --- */
        {
          id: "vp-uttanapada-lineage",
          name: "King Uttanapada (Father of Dhruva)",
          sanskrit: "राजा उत्तानपाद",
          title: "Elder Son of Svayambhuva Manu & King of Madhuvana",
          category: "Royal Dynasty",
          tradition: "Vishnu Purana",
          parent: "vp-svayambhuva-manu",
          parentName: "Svayambhuva Manu & Shatarupa",
          consort: "Suniti & Suruchi",
          vahana: "Imperial Chariot",
          ayudha: "Royal Scepter",
          color: "#0284C7",
          glowColor: "rgba(2, 132, 199, 0.8)",
          icon: "🏛️",
          summary: "Father of Dhruva and Uttama; his favoritism of Suruchi prompted young Dhruva to seek the supreme shelter of Lord Vishnu.",
          shloka: {
            devanagari: "उत्तानपादतनयो ध्रुवः परमधार्मिकः ।",
            transliteration: "Uttānapāda-tanayo dhruvaḥ parama-dhārmikaḥ |",
            source: "Vishnu Purana 1.11.1",
            meaning: "The son of King Uttanapada was Dhruva, supremely righteous and steadfast."
          },
          details: `
            When Suruchi forbade young Dhruva from sitting on his father's lap, King Uttanapada sat silent in remorse.
            Suniti counseled her heartbroken child that only Lord Vishnu could grant a seat beyond all worldly thrones.
          `,
          keyAttributes: ["Father of Dhruva Maharaja", "Ruler of Brahmavarta", "Repentant monarch blessed by Dhruva's glory"],
          children: [
            {
              id: "vp-dhruva-maharaja",
              name: "Dhruva Maharaja (The Pole Star)",
              sanskrit: "ध्रुव महाराज (ध्रुवलोक-पति)",
              title: "The Child Devotee Who Attained the Eternal Celestial Pivot",
              category: "Paramabhaktas",
              tradition: "Vishnu Purana",
              parent: "vp-uttanapada-lineage",
              parentName: "King Uttanapada",
              consort: "Brahmi & Ila",
              vahana: "Dhruva Mandala",
              ayudha: "Unswerving Devotion (Achala Bhakti)",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.85)",
              icon: "⭐",
              summary: "Meditated in Madhuvana at age five; Lord Vishnu granted him the unshakeable Pole Star (*Dhruvaloka*) around which all constellations revolve.",
              shloka: {
                devanagari: "ध्रुवं त्वां सर्वभूतानां स्थापयिष्यामि शाश्वतम् । ग्रहाणां तारकाणां च मण्डलेषु च संस्थितम् ॥",
                transliteration: "Dhruvaṁ tvāṁ sarva-bhūtānāṁ sthāpayiṣyāmi śāśvatam | Grahāṇāṁ tārakāṇāṁ ca maṇḍaleṣu ca saṁsthitam ||",
                source: "Vishnu Purana 1.12.92",
                meaning: "Lord Vishnu said to Dhruva: 'I establish you as the eternal pivot for all beings, positioned above all planetary orbits and stellar constellations.'"
              },
              details: `
                Vishnu Purana 1.11-12 describes Dhruva's rigorous tapas.
                Vishnu touched young Dhruva's cheek with His conch shell, unlocking spontaneous Sanskrit hymns of profound Advaita and Bhakti wisdom.
              `,
              keyAttributes: ["Eternal sovereign of the Pole Star", "Touched by Vishnu's Panchajanya conch", "Father of Vatsara and Shishti"],
              children: [
                {
                  id: "vp-prithu-emperor",
                  name: "Emperor Prithu (Adiraja)",
                  sanskrit: "चक्रवर्ती पृथु (आदिराजा / पृथिवी-दोहक)",
                  title: "First Consecrated Monarch Who Milked the Earth for Humanity",
                  category: "Chakravartin Kings",
                  tradition: "Vishnu Purana",
                  parent: "vp-dhruva-maharaja",
                  parentName: "Dhruva Maharaja",
                  consort: "Queen Archi (Lakshmi Avatara)",
                  vahana: "Imperial Golden Chariot",
                  ayudha: "Ajagava Bow, Golden Arrows of Governance",
                  color: "#16A34A",
                  glowColor: "rgba(22, 163, 74, 0.85)",
                  icon: "🌾",
                  summary: "Descended via Vatsara -> Chaksusa -> Anga -> Vena; churned from Vena's arm; leveled mountains and milked Mother Earth (Prithvi) to feed civilization.",
                  shloka: {
                    devanagari: "दोधाम सर्वसस्यानि प्रजानां जीवनार्थिनः । पृथोश्च पृथिवी जाता विख्याता सचराचरे ॥",
                    transliteration: "Dodhāma sarva-sasyāni prajānāṁ jīvanārthinaḥ | Pṛthoś ca pṛthivī jātā vikhyātā sacarācare ||",
                    source: "Vishnu Purana 1.13.93",
                    meaning: "He milked all life-giving vegetation to nourish his people; from Prithu, the Earth came to be renowned throughout creation as 'Prithvi'."
                  },
                  details: `
                    Chapters 13-14 of Book 1 describe Prithu's coronation: the oceans offered jewels, the mountains made roads, trees offered nectar, and he performed 99 horse sacrifices, establishing the archetype of righteous kingship.
                  `,
                  keyAttributes: ["Origin of the name 'Prithvi'", "First anointed king (Adiraja)", "Milked Mother Earth in cow form"],
                  children: [
                    {
                      id: "vp-ten-prachetas",
                      name: "The Ten Prachetas & Daksha",
                      sanskrit: "दश प्रचेतसः एवं दक्ष प्रजापति",
                      title: "The Underwater Ascetics Who Chanted the Rudra-Gita",
                      category: "Prajapatis",
                      tradition: "Vishnu Purana",
                      parent: "vp-prithu-emperor",
                      parentName: "Emperor Prithu",
                      consort: "Marisha (Daughter of Trees)",
                      vahana: "Ocean Currents",
                      ayudha: "Rudra-Gita Hymns & Kamandalu",
                      color: "#14B8A6",
                      glowColor: "rgba(20, 184, 166, 0.8)",
                      icon: "🌊",
                      summary: "Descended from Prithu -> Antardhana -> Havirdhana; meditated underwater for 10,000 years under Shiva's instruction; begot Daksha Prajapati.",
                      shloka: {
                        devanagari: "प्रचेतसो दश सुताः समुद्रादुपसङ्गम्य । समेत्य मारिषां कन्यां लेभिरे दक्षमात्मजम् ॥",
                        transliteration: "Pracetaso daśa sutāḥ samudrād upasaṅgamya | Sametya māriṣāṁ kanyāṁ lebhire dakṣam ātmajam ||",
                        source: "Vishnu Purana 1.15.74",
                        meaning: "The ten Prachetas, emerging from the ocean, wed the maiden Marisha and begot the illustrious son Daksha."
                      },
                      details: `
                        Lord Shiva taught them the sacred *Rudra Gita* in praise of Vishnu. Re-emerging, their son Daksha married Asikni and fathered 60 daughters whose children populated the cosmos.
                      `,
                      keyAttributes: ["Recited the Rudra Gita for 10,000 years", "Husbands of Marisha", "Fathers of Daksha Prajapati"],
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        /* --- PRIYAVRATA & BHARATA SUB-BRANCH --- */
        {
          id: "vp-priyavrata-lineage",
          name: "King Priyavrata (Carver of Oceans)",
          sanskrit: "राजा प्रियव्रत (सप्तद्वीप-प्रवर्तक)",
          title: "Younger Son of Svayambhuva Manu & Ruler of the Seven Continents",
          category: "Cosmic Sovereigns",
          tradition: "Vishnu Purana",
          parent: "vp-svayambhuva-manu",
          parentName: "Svayambhuva Manu & Shatarupa",
          consort: "Queen Barhishmati",
          vahana: "Fiery Solar Chariot",
          ayudha: "Chakravartin Wheel",
          color: "#EAB308",
          glowColor: "rgba(234, 179, 8, 0.8)",
          icon: "🌏",
          summary: "Rode behind the sun to eliminate night, his chariot wheels carving the seven oceans and seven island continents (Dvipas).",
          shloka: {
            devanagari: "प्रियव्रतरथोत्खातैः खातैरेतेऽभवन् नृप । समुद्राः सप्त सप्तैव यतो द्वीपा भवन्नमी ॥",
            transliteration: "Priyavrata-rathotkhātaiḥ khātair ete'bhavan nṛpa | Samudrāḥ sapta saptaiva yato dvīpā bhavann amī ||",
            source: "Vishnu Purana 2.1.12",
            meaning: "From the ruts dug by the wheels of Priyavrata's chariot arose the seven great oceans, which divided the earth into seven continents."
          },
          details: `
            Book 2 of the Vishnu Purana details the geography of Jambudvipa, Plakshadvipa, Shalmaladvipa, Kushadvipa, Krounchadvipa, Shakadvipa, and Pushkaradvipa, all charted by Priyavrata's sons.
          `,
          keyAttributes: ["Carved the seven oceans with his chariot", "Architect of global dvipa geography", "Father of Agnidhra"],
          children: [
            {
              id: "vp-rishabha-bharata",
              name: "Rishabhadeva & Emperor Bharata (Jada Bharata)",
              sanskrit: "ऋषभदेव एवं चक्रवर्ती भरत (जडभरत)",
              title: "Sage-Avatara of Vishnu & Sovereign of Bharatavarsha",
              category: "Cosmic Sovereigns",
              tradition: "Vishnu Purana",
              parent: "vp-priyavrata-lineage",
              parentName: "King Priyavrata",
              consort: "Merudevi & Panchajani",
              vahana: "Ascetic Steps",
              ayudha: "Staff of Renunciation (Tridanda)",
              color: "#CA8A04",
              glowColor: "rgba(202, 138, 4, 0.85)",
              icon: "👑",
              summary: "Priyavrata -> Agnidhra -> Nabhi -> Rishabhadeva -> Emperor Bharata, whose holy name gave our subcontinent the title 'Bharatavarsha'.",
              shloka: {
                devanagari: "उत्तरं यत्समुद्रस्य हिमाद्रेश्चैव दक्षिणम् । वर्षं तद् भारतं नाम भारती यत्र सन्ततिः ॥",
                transliteration: "Uttaraṁ yat samudrasya himādreś caiva dakṣiṇam | Varṣaṁ tad bhārataṁ nāma bhāratī yatra santatiḥ ||",
                source: "Vishnu Purana 2.3.1",
                meaning: "The land that lies north of the ocean and south of the snowy Himalayas is called Bharatavarsha, and there dwell the descendants of Bharata."
              },
              details: `
                In Book 2, Chapters 13-16, Parashara narrates the celebrated story of King Bharata renouncing his throne, falling into temporary attachment to a deer, and finally taking birth as Jada Bharata to deliver the sublime non-dual discourse to King Rahugana.
              `,
              keyAttributes: [
                "Gave our subcontinent the name 'Bharatavarsha'",
                "Rishabhadeva avatara lineage",
                "Jada Bharata's Advaita teachings to Rahugana"
              ],
              children: []
            }
          ]
        },
        /* --- DEVAHUTI & KAPILA SUB-BRANCH --- */
        {
          id: "vp-devahuti-kapila",
          name: "Devahuti & Sage Kapila Muni",
          sanskrit: "देवहूति एवं साङ्ख्याचार्य कपिल मुनि",
          title: "Avatara of Vishnu & Enumerator of the 24 Tattvas",
          category: "Philosophical Avatara",
          tradition: "Vishnu Purana",
          parent: "vp-svayambhuva-manu",
          parentName: "Svayambhuva Manu & Shatarupa",
          consort: "Sage Kardama (Husband of Devahuti)",
          vahana: "Siddhapada Ashrama",
          ayudha: "Viveka (Discrimination of Purusha & Prakriti)",
          color: "#9333EA",
          glowColor: "rgba(147, 51, 234, 0.8)",
          icon: "🕉️",
          summary: "Daughter of Manu married Kardama; their son Kapila taught the Samkhya system detailing the 24 cosmic principles.",
          shloka: {
            devanagari: "कपिलो वासुदेवांशः साङ्ख्यशास्त्रप्रवर्तकः ।",
            transliteration: "Kapilo vāsudevāṁśaḥ sāṅkhya-śāstra-pravartakaḥ |",
            source: "Vishnu Purana",
            meaning: "Sage Kapila, an incarnation of Lord Vasudeva, is the venerable propagator of the Samkhya philosophy."
          },
          details: `
            Kapila's Samkhya provides the philosophical vocabulary for the entire Vishnu Purana: the interaction of unmanifest nature (*Pradhana/Prakriti*) with pure spirit (*Purusha*) under the will of Vishnu.
          `,
          keyAttributes: ["Founder of Samkhya philosophy", "Son of Devahuti and Kardama", "Incarnation of Lord Vasudeva"],
          children: []
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 4: PARASHARA GURU-PARAMPARA (AMSAS 1 & 3)
       ---------------------------------------------------------------------- */
    {
      id: "vp-parashara-parampara",
      name: "Sage Parashara Guru-Parampara",
      sanskrit: "महर्षि पराशर - वेदव्यास - शुकदेव परम्परा",
      title: "The Authors, Compilers & Narrators of the Puranic Canon",
      category: "Guru Parampara",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Arundhati, Satyavati, Pinvata",
      vahana: "Sacrificial Hermitage of Kurukshetra",
      ayudha: "Veda Grantha, Kamandalu, Akshamala",
      color: "#FACC15",
      glowColor: "rgba(250, 204, 21, 0.9)",
      icon: "📿",
      summary: "Sage Vashistha -> Shakti Muni -> Sage Parashara (Author of Vishnu Purana) -> Maharshi Veda Vyasa (Compiler of Vedas) -> Shukadeva Muni.",
      shloka: {
        devanagari: "यस्य प्रसादादहमेतदद्य वदामि विष्णोः परमार्थरूपम् । पराशरः स मुनिपुङ्गवो मे प्रसन्नचेता वरदो बभूव ॥",
        transliteration: "Yasya prasādād aham etad adya vadāmi viṣṇoḥ paramārtha-rūpam | Parāśaraḥ sa muni-puṅgavo me prasanna-cetā varado babhūva ||",
        source: "Vishnu Purana 1.1.22",
        meaning: "By whose divine grace I speak today on the supreme transcendent form of Vishnu, that crest-jewel of sages, Parashara, was pleased in heart and granted this knowledge."
      },
      details: `
        Parashara was performing a Rakshasa-destruction sacrifice to avenge his father Shakti when his grandfather Vashistha stopped him, teaching forgiveness.
        Pleased by his restraint, Sage Pulastya and Lord Brahma blessed Parashara with direct, infallible knowledge of all cosmological truths, enabling him to narrate the Vishnu Purana.
      `,
      keyAttributes: [
        "Speaker of the authoritative Vishnu Purana",
        "Blessed by Vashistha, Pulastya, and Brahma",
        "Father of Maharshi Veda Vyasa"
      ],
      children: [
        {
          id: "vp-veda-vyasa",
          name: "Maharshi Veda Vyasa",
          sanskrit: "महर्षि वेदव्यास (कृष्ण द्वैपायन)",
          title: "Compiler of the Four Vedas, 18 Puranas & The Mahabharata",
          category: "Guru Parampara",
          tradition: "Vishnu Purana",
          parent: "vp-parashara-parampara",
          parentName: "Sage Parashara Guru-Parampara",
          consort: "Ascetic Tapasya",
          vahana: "Badarikashrama Hermitage",
          ayudha: "Veda Grantha & Brahma-Sutras",
          color: "#EAB308",
          glowColor: "rgba(234, 179, 8, 0.85)",
          icon: "📖",
          summary: "Son of Parashara and Satyavati; divided the single Veda into Rig, Sama, Yajur, and Atharva in Book 3.",
          shloka: {
            devanagari: "विव्यास वेदान् यस्मात् स वेदव्यास इति स्मृतः ।",
            transliteration: "Vivyāsa vedān yasmāt sa veda-vyāsa iti smṛtaḥ |",
            source: "Vishnu Purana 3.3.21",
            meaning: "Because he divided the single Veda into four branches, he is celebrated throughout eternity as 'Veda Vyasa'."
          },
          details: `
            Book 3 of the Vishnu Purana explains the division of the Vedas in every Dvapara Yuga.
            Vyasa entrusted the Rigveda to Paila, the Yajurveda to Vaishampayana, the Samaveda to Jaimini, the Atharvaveda to Sumantu, and the Puranas to Romaharshana.
          `,
          keyAttributes: ["Divided the Vedas into four branches", "Author of the Mahabharata & Brahma Sutras", "Teacher of Suta and Vaishampayana"],
          children: [
            {
              id: "vp-shukadeva-muni",
              name: "Shukadeva Muni",
              sanskrit: "शुकदेव मुनि (परमहंस / भागवत-प्रवक्ता)",
              title: "The Illumined Paramahamsa & Speaker of the Srimad Bhagavatam",
              category: "Paramahamsa Sages",
              tradition: "Vishnu Purana",
              parent: "vp-veda-vyasa",
              parentName: "Maharshi Veda Vyasa",
              consort: "Pure Renunciation (Brahmavit)",
              vahana: "Banks of the Sacred Ganga",
              ayudha: "Shravana-Mudra & Bhagavata Grantha",
              color: "#FDE047",
              glowColor: "rgba(253, 224, 71, 0.9)",
              icon: "🦜",
              summary: "Son of Veda Vyasa; born fully enlightened; recited the Srimad Bhagavatam to Emperor Parikshit on the banks of the Ganga.",
              shloka: {
                devanagari: "यं प्रव्रजन्तमनुपेतमपेतकृत्यं द्वैपायनो विरहकातर आजुहाव । पुत्रेति तन्मयतया तरवोऽभिनेदुस्तं सर्वभूतहृदयं मुनिमानतोऽस्मि ॥",
                transliteration: "Yaṁ pravrajantam anupetam apeta-kṛtyaṁ dvaipāyano viraha-kātara ājuhāva | Putreti tan-mayatayā taravo'bhinedus taṁ sarva-bhūta-hṛdayaṁ munim ānato'smi ||",
                source: "Bhagavata Purana 1.2.2",
                meaning: "To that sage who left home alone without sacred thread ceremony, for whom even the trees answered when his father cried 'O my son!', who dwells in the hearts of all living beings, to Shukadeva I bow."
              },
              details: `
                Shukadeva was unattached to any material condition, seeing Lord Narayana everywhere.
                He sat with Emperor Parikshit for seven days without water or sleep, delivering the final perfection of hearing (*Shravanam*).
              `,
              keyAttributes: ["Born an enlightened Jivanmukta", "Speaker of the Srimad Bhagavatam", "Liberator of Emperor Parikshit"],
              children: []
            }
          ]
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 5: DAITYA BHAKTA LINEAGE (AMSA 1)
       ---------------------------------------------------------------------- */
    {
      id: "vp-daitya-lineage",
      name: "The Daitya-Bhakta Dynasty",
      sanskrit: "दैत्य-भक्त वंश (हिरण्यकशिपु - प्रह्लाद - विरोचन - बलि - बाणासुर)",
      title: "The Illustrious Devotees of Book 1 of the Vishnu Purana",
      category: "Daitya Lineage",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Diti, Kayadhu, Kotara, Vindhyavali",
      vahana: "Sutala Golden Chariot",
      ayudha: "Harinaam (Holy Name of Vishnu)",
      color: "#DC2626",
      glowColor: "rgba(220, 38, 38, 0.85)",
      icon: "🏰",
      summary: "Detailed in Chapters 17-20 of Book 1: Prahlada's unshakeable devotion survived poison, weapons, serpents, and elephants, earning Vishnu's eternal protection.",
      shloka: {
        devanagari: "सर्वगत्वात् स एवाहं मत्तश्च सर्वमेव तत् । मयि सर्वमिदं प्रोतं मय्यवस्थापितं जगत् ॥",
        transliteration: "Sarvagatvāt sa evāhaṁ mattaś ca sarvam eva tat | Mayi sarvam idaṁ protaṁ mayy avasthāpitaṁ jagat ||",
        source: "Vishnu Purana 1.19.85",
        meaning: "Prahlada prayed: 'Because He is all-pervading, He is verily I; from Him everything springs; in Me this entire universe is strung, and in Me the cosmos is established.'"
      },
      details: `
        The Vishnu Purana's narration of Prahlada emphasizes non-dual devotional realization: Prahlada meditated with such profound focus that he felt his own self to be one with Lord Vishnu.
        Fire could not burn him, swords broke upon his skin, ocean depths could not drown him, and deadly venom transformed into nectar.
      `,
      keyAttributes: [
        "Unshakeable faith under Hiranyakashipu's tortures",
        "Realization of Vishnu's omnipresence in all atoms",
        "Father of Virochana and ancestor of Mahabali"
      ],
      children: [
        {
          id: "vp-prahlada-maharaja",
          name: "Prahlada Maharaja",
          sanskrit: "परमभागवत प्रह्लाद महाराज",
          title: "The Child Saint for Whom Narasimha Manifested",
          category: "Paramabhaktas",
          tradition: "Vishnu Purana",
          parent: "vp-daitya-lineage",
          parentName: "The Daitya-Bhakta Dynasty",
          consort: "Kotara",
          vahana: "Throne of Sutala",
          ayudha: "Harinaam (Holy Name of Vishnu)",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.85)",
          icon: "🪷",
          summary: "Son of Hiranyakashipu; instructed his demonic classmates in the eternal science of Bhagavata Dharma while their father was away.",
          shloka: {
            devanagari: "कोमारे आचरेत् प्राज्ञो धर्मान् भागवतानिह । दुर्लभं मानुषं जन्म तदप्यध्रुवमर्थदम् ॥",
            transliteration: "Kaumāra ācaret prājño dharmān bhāgavatān iha | Durlabhaṁ mānuṣaṁ janma tad apy adhruvam arthadam ||",
            source: "Bhagavata Purana 7.6.1 & Vishnu Purana 1.17",
            meaning: "One who is intelligent should cultivate devotional service to Lord Vishnu right from childhood; for human birth is rare, temporary, and uniquely valuable."
          },
          details: `
            Prahlada's instructions to his schoolmates in Vishnu Purana 1.17 form a masterclass in detached wisdom: sensory pleasures come unasked through karma, but spiritual devotion must be cultivated intentionally.
          `,
          keyAttributes: ["Teacher of Bhagavata Dharma in childhood", "Survived all tortures of Hiranyakashipu", "Protected by Lord Narasimha"],
          children: [
            {
              id: "vp-mahabali-emperor",
              name: "Emperor Mahabali (Lord of Sutala)",
              sanskrit: "दानवीर बलि चक्रवर्ती (सुतलाधिपति)",
              title: "The Universal Donor Crowned Ruler of the Sutala Netherworld",
              category: "Chakravartin / Bhakta",
              tradition: "Vishnu Purana",
              parent: "vp-prahlada-maharaja",
              parentName: "Prahlada Maharaja",
              consort: "Queen Vindhyavali",
              vahana: "Golden Netherworld Chariot",
              ayudha: "Golden Water Pitcher of Charity (Dana-Kalasha)",
              color: "#B45309",
              glowColor: "rgba(180, 83, 9, 0.85)",
              icon: "👑",
              summary: "Grandson of Prahlada; conquered heaven with righteous charity and offered his own head for Vamana's third pace.",
              shloka: {
                devanagari: "पदत्रयं ययाचे मां बलिस्तमन्वमोदत । सर्वस्वं हरता तुभ्यं शिरो दत्त्वा महीयते ॥",
                transliteration: "Pada-trayaṁ yayāce māṁ balis tam anvamodata | Sarvasvaṁ haratā tubhyaṁ śiro dattvā mahīyate ||",
                source: "Bhagavata Purana 8.22",
                meaning: "I asked for three paces of land, and Bali consented with joy; when his everything was taken, he offered his own head and attained supreme glory."
              },
              details: `
                When Guru Shukracharya warned Bali that the dwarf boy was Vishnu in disguise, Bali replied that to give charity directly to the Lord of the Universe was the crowning honor of his existence.
                Vishnu granted him the lush realm of Sutala loka and promised to stand as his personal palace guardian until the Savarni Manvantara.
              `,
              keyAttributes: [
                "Celebrated annually during the harvest festival of Onam",
                "Future King of Heaven in Savarni Manvantara",
                "Vishnu stands as his eternal gatekeeper"
              ],
              children: [
                {
                  id: "vp-banasura-king",
                  name: "Banasura of Sonitapura",
                  sanskrit: "बाणासुर (शोणितपुराधिपति)",
                  title: "Thousand-Armed Shaiva King & Eldest Son of Bali",
                  category: "Daitya Lineage",
                  tradition: "Vishnu Purana",
                  parent: "vp-mahabali-emperor",
                  parentName: "Emperor Mahabali",
                  consort: "Kandala",
                  vahana: "War Chariot",
                  ayudha: "Thousand Bows & Swords",
                  color: "#991B1B",
                  glowColor: "rgba(153, 27, 27, 0.8)",
                  icon: "🏰",
                  summary: "Eldest son of Mahabali; great devotee of Lord Shiva; ruled Sonitapura; father of Princess Usha.",
                  shloka: {
                    devanagari: "बाणस्य बाहुसाहस्रं चक्रेण भगवान् हरिः । चकर्त लीलयैवाग्रे शिवस्य च शृण्वतः ॥",
                    transliteration: "Bāṇasya bāhu-sāhasraṁ cakreṇa bhagavān hariḥ | Cakarta līlayaivāgre śivasya ca śṛṇvataḥ ||",
                    source: "Bhagavata Purana 10.63.32",
                    meaning: "With His divine Sudarshana Chakra, Lord Hari playfully severed the thousand arms of Banasura, sparing four arms at Lord Shiva's gentle request."
                  },
                  details: `
                    Banasura worshipped Shiva with his thousand arms playing musical instruments during the Tandava dance.
                    When Usha secretly wed Aniruddha, Banasura imprisoned him, leading to the battle of Sonitapura where Krishna spared his life at Shiva's request.
                  `,
                  keyAttributes: ["Thousand-armed Shaiva devotee", "Father of Princess Usha", "Reconciled with Sri Krishna"],
                  children: [
                    {
                      id: "vp-princess-usha",
                      name: "Princess Usha (Consort of Aniruddha)",
                      sanskrit: "राजकुमारी उषा (अनिरुद्ध-पत्नी)",
                      title: "The Maiden of Sonitapura Uniting Shaiva and Vaishnava Royal Houses",
                      category: "Daitya Princess",
                      tradition: "Vishnu Purana",
                      parent: "vp-banasura-king",
                      parentName: "Banasura of Sonitapura",
                      consort: "Prince Aniruddha of Dvaraka",
                      vahana: "Peacock Palanquin",
                      ayudha: "Vina of Love & Chitralekha's Canvases",
                      color: "#EC4899",
                      glowColor: "rgba(236, 72, 153, 0.85)",
                      icon: "🌺",
                      summary: "Daughter of Banasura; saw Aniruddha in a dream and had Chitralekha bring him from Dvaraka, leading to their celebrated union.",
                      shloka: {
                        devanagari: "उषा च बाणतनया स्वप्ने दृष्ट्वाऽनिरुद्धकम् । कामबाणप्रपन्नाङ्गी चक्रे तं हृदयेशितम् ॥",
                        transliteration: "Uṣā ca bāṇa-tanayā svapne dṛṣṭvā'niruddhakam | Kāma-bāṇa-prapannāṅgī cakre taṁ hṛdayeśitam ||",
                        source: "Vishnu Purana 5.32.14",
                        meaning: "Princess Usha, daughter of Banasura, having beheld Aniruddha in a dream, made him the eternal master of her heart."
                      },
                      details: `
                        Usha learned the Lasya dance form from Goddess Parvati and brought it to Dvaraka and Saurashtra, from where it spread to the women of India.
                        Her son Vajranabha preserved the sacred memory of Sri Krishna.
                      `,
                      keyAttributes: ["Master of Lasya classical dance", "Wife of Prince Aniruddha", "Mother of King Vajranabha"],
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 6: THE COMPLETE SURYAVAMSHA (BOOK 4 OF VISHNU PURANA)
       ---------------------------------------------------------------------- */
    {
      id: "vp-suryavamsha",
      name: "The Solar Dynasty (Suryavamsha of Amsa 4)",
      sanskrit: "सूर्यवंश (इक्ष्वाकु - मान्धाता - सगर - भगीरथ - रघु - राम)",
      title: "The Regal Line of Ayodhya Detailed in Book 4 of Vishnu Purana",
      category: "Suryavamsha",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Solar Queens of Ayodhya",
      vahana: "Solar Imperial Chariot",
      ayudha: "Kodanda Bow & Solar Scepter",
      color: "#EA580C",
      glowColor: "rgba(234, 88, 12, 0.85)",
      icon: "☀️",
      summary: "Sage Parashara details the unbroken solar descent from Vivasvan and Ikshvaku down through Mandhata, Sagara, Bhagiratha, Raghu, Dasharatha, and Sri Rama.",
      shloka: {
        devanagari: "इक्ष्वाकुप्रभवा वंशा विष्णोर्भक्तिपरायणाः । पालयन्ति महीं कृत्स्नां धर्मेण महता नृपाः ॥",
        transliteration: "Ikṣvāku-prabhavā vaṁśā viṣṇor bhakti-parāyaṇāḥ | Pālayanti mahīṁ kṛtsnāṁ dharmeṇa mahatā nṛpāḥ ||",
        source: "Vishnu Purana 4.2.1",
        meaning: "The kings born in the line of Ikshvaku, deeply devoted to Lord Vishnu, protected the entire earth through supreme righteousness (Dharma)."
      },
      details: `
        Book 4 of the Vishnu Purana presents the most meticulous dynastic chronologies in ancient Indian historiography (*Vamshanucharita*).
        It traces the solar kings who established moral standards for human governance: Ikshvaku, Kakutstha, Mandhata, Trishanku, Harishchandra, Sagara, Bhagiratha, Ambarisha, Dilipa, Raghu, Aja, Dasharatha, and Sri Rama.
      `,
      keyAttributes: [
        "Primary dynastic record of Book 4 of Vishnu Purana",
        "Chronicle of kings devoted to Vishnu and Dharma",
        "Unbroken lineage leading to Sri Rama and Kusha"
      ],
      children: [
        {
          id: "vp-ikshvaku",
          name: "King Ikshvaku of Ayodhya",
          sanskrit: "राजा इक्ष्वाकु (अयोध्या-संस्थापक)",
          title: "First King of Ayodhya & Elder Son of Vaivasvata Manu",
          category: "Suryavamsha",
          tradition: "Vishnu Purana",
          parent: "vp-suryavamsha",
          parentName: "The Solar Dynasty",
          consort: "Solar Queen",
          vahana: "Imperial Solar Chariot",
          ayudha: "Kodanda Bow & Royal Scepter",
          color: "#EA580C",
          glowColor: "rgba(234, 88, 12, 0.85)",
          icon: "🏛️",
          summary: "Eldest son of Vaivasvata Manu; founded the capital of Ayodhya and established royal governance according to Vedic Dharma.",
          shloka: {
            devanagari: "इक्ष्वाकुर्वंशकर्ता च अयोध्याया महीपतिः ।",
            transliteration: "Ikṣvākur vaṁśa-kartā ca ayodhyāyā mahīpatiḥ |",
            source: "Vishnu Purana 4.2.3",
            meaning: "Ikshvaku was the illustrious founder of the royal line and sovereign of Ayodhya."
          },
          details: `
            King Ikshvaku received spiritual instruction directly from his father Manu, who had heard it from Surya.
            His eldest son Vikukshi continued the lineage at Ayodhya.
          `,
          keyAttributes: ["Founder of Ayodhya", "Recipient of Solar Yoga", "Father of Vikukshi"],
          children: [
            {
              id: "vp-mandhata",
              name: "Emperor Mandhata (Universal Chakravartin)",
              sanskrit: "चक्रवर्ती मान्धाता (त्रैलोक्य-विजेता)",
              title: "The Universal Sovereign Born from Yuvanashva",
              category: "Suryavamsha",
              tradition: "Vishnu Purana",
              parent: "vp-ikshvaku",
              parentName: "King Ikshvaku of Ayodhya",
              consort: "Queen Bindumati",
              vahana: "Imperial Golden Chariot",
              ayudha: "Indra's Celestial Bow",
              color: "#F59E0B",
              glowColor: "rgba(245, 158, 11, 0.85)",
              icon: "👑",
              summary: "Descended via Vikukshi -> Kakutstha -> Yuvanashva; nursed by Indra's thumb ('Mam Dhasa'); his domain stretched from sunrise to sunset.",
              shloka: {
                devanagari: "यावत् सूर्य उदेति स्म यावच्च प्रतितिष्ठति । सर्वं तन्मान्धातृक्षेत्रं यदहैव प्रकीर्त्यते ॥",
                transliteration: "Yāvat sūrya udeti sma yāvac ca pratitiṣṭhati | Sarvaṁ tan māndhātṛ-kṣetraṁ yad ahaiva prakīrtyate ||",
                source: "Vishnu Purana 4.2.65",
                meaning: "From where the sun rises in the east to where it sets in the west, all that vast domain was the sovereign realm of Emperor Mandhata."
              },
              details: `
                Mandhata conquered the three worlds through righteousness and performed 100 horse sacrifices.
                His son Purukutsa wed the river goddess Narmada to aid the Nagas.
              `,
              keyAttributes: ["Universal Chakravartin", "Nursed by Indra's thumb", "Father of Purukutsa and Muchukunda"],
              children: [
                {
                  id: "vp-harishchandra",
                  name: "King Harishchandra (The Embodiment of Truth)",
                  sanskrit: "सत्यवादी राजा हरिश्चन्द्र",
                  title: "Monarch Who Sacrificed Everything for Absolute Truth (Satya)",
                  category: "Suryavamsha",
                  tradition: "Vishnu Purana",
                  parent: "vp-mandhata",
                  parentName: "Emperor Mandhata",
                  consort: "Queen Taramati",
                  vahana: "Ascetic Steps",
                  ayudha: "Staff of Unshakeable Truth",
                  color: "#CA8A04",
                  glowColor: "rgba(202, 138, 4, 0.85)",
                  icon: "⚖️",
                  summary: "Descended via Purukutsa -> Trasadasyu -> Trishanku; surrendered kingdom, wife, and son for his vow of truth at Varanasi.",
                  shloka: {
                    devanagari: "चन्द्रस्तारे नभो गच्छेद् द्यौः पतेद् धरणीतले । न च सत्यं परित्यज्येद् हरिश्चन्द्रो महीपतिः ॥",
                    transliteration: "Candras tāre nabho gacched dyauḥ pated dharaṇī-tale | Na ca satyaṁ parityajyed hariścandro mahīpatiḥ ||",
                    source: "Markandeya & Vishnu Purana",
                    meaning: "The moon and stars may fall from the firmament, but King Harishchandra will never abandon Truth."
                  },
                  details: `
                    Harishchandra gave his entire kingdom as Dakshina, worked at Kashi's cremation ground, and refused to compromise truth even in grief, earning direct elevation to heaven.
                  `,
                  keyAttributes: ["Satyavadi: Personification of absolute truth", "Tested by Vishvamitra at Kashi", "Elevated to heaven with his people"],
                  children: [
                    {
                      id: "vp-sagara",
                      name: "King Sagara (Ocean Excavator)",
                      sanskrit: "राजा सगर (समुद्र-खनक)",
                      title: "Sovereign Whose 60,000 Sons Excavated the Oceans (Sagara)",
                      category: "Suryavamsha",
                      tradition: "Vishnu Purana",
                      parent: "vp-harishchandra",
                      parentName: "King Harishchandra",
                      consort: "Keshini & Sumati",
                      vahana: "Imperial Chariot",
                      ayudha: "Agneyastra & Royal Standard",
                      color: "#B45309",
                      glowColor: "rgba(180, 83, 9, 0.8)",
                      icon: "🌊",
                      summary: "Descended via Rohita -> Harita -> Bahu; destroyed hostile barbarian tribes; his 60,000 sons excavated the oceans.",
                      shloka: {
                        devanagari: "सगरेण समुत्खातः सागरः परिकीर्तितः ।",
                        transliteration: "Sagareṇa samutkhātaḥ sāgaraḥ parikīrtitaḥ |",
                        source: "Vishnu Purana 4.4.2",
                        meaning: "Excavated by the sons of King Sagara, the ocean came to be known as 'Sagara'."
                      },
                      details: `
                        When Indra stole Sagara's sacrificial horse, his sons dug up the earth searching for it, creating the oceans, until incinerated by Kapila Muni's gaze.
                      `,
                      keyAttributes: ["Gave his name to the ocean", "Conqueror of Haihayas and Yavanas", "Ancestor of Bhagiratha"],
                      children: [
                        {
                          id: "vp-bhagiratha",
                          name: "King Bhagiratha (Bringer of Sacred Ganga)",
                          sanskrit: "राजा भगीरथ (गङ्गावतरण-कारक)",
                          title: "The Monarch Whose Supreme Tapas Brought Ganga to Earth",
                          category: "Suryavamsha",
                          tradition: "Vishnu Purana",
                          parent: "vp-sagara",
                          parentName: "King Sagara",
                          consort: "Queen of Ayodhya",
                          vahana: "Golden Chariot guiding Ganga",
                          ayudha: "Shankha of Divine Call",
                          color: "#06B6D4",
                          glowColor: "rgba(6, 182, 212, 0.85)",
                          icon: "🌊",
                          summary: "Descended via Asamanja -> Anshuman -> Dilipa I; performed thousand-year tapas to bring Ganga to liberate his ancestors.",
                          shloka: {
                            devanagari: "गङ्गा गङ्गेति यो ब्रूयाद् योजनानां शतैरपि । मुच्यते सर्वपापेभ्यो विष्णुलोकं स गच्छति ॥",
                            transliteration: "Gaṅgā gaṅgeti yo brūyād yojanānāṁ śatair api | Mucyate sarva-pāpebhyo viṣṇu-lokaṁ sa gacchati ||",
                            source: "Skanda & Vishnu Purana",
                            meaning: "Whoever utters 'Ganga, Ganga' even from hundreds of leagues away is purified of all sins and reaches Vishnu's realm."
                          },
                          details: `
                            Bhagiratha prayed to Brahma to release Ganga, and to Shiva to catch her thunderous descent in His matted hair, guiding her to the ashes of his ancestors.
                          `,
                          keyAttributes: ["Bhagiratha Prayatna: Supreme dedication", "Brought Ganga to earth", "Liberator of 60,000 ancestors"],
                          children: [
                            {
                              id: "vp-ambarisha-king",
                              name: "King Ambarisha (Protected by Sudarshana)",
                              sanskrit: "भक्तराज अम्बरीष (सुदर्शन-रक्षित)",
                              title: "The Supreme Vaishnava King of Book 4 Chapter 4",
                              category: "Suryavamsha",
                              tradition: "Vishnu Purana",
                              parent: "vp-bhagiratha",
                              parentName: "King Bhagiratha",
                              consort: "Queen of Ayodhya",
                              vahana: "Royal Chariot",
                              ayudha: "Sudarshana Chakra of Lord Vishnu",
                              color: "#38BDF8",
                              glowColor: "rgba(56, 189, 248, 0.85)",
                              icon: "☸️",
                              summary: "Descended via Sruta -> Nabhaga; observed the Ekadashi vrata with such pure devotion that Vishnu stationed Sudarshana to protect him.",
                              shloka: {
                                devanagari: "अहं भक्तपराधीनो ह्यस्वतन्त्र इव द्विज । साधुभिर्ग्रस्तहृदयो भक्तैर्भक्तजनप्रियः ॥",
                                transliteration: "Ahaṁ bhakta-parādhīno hy asvatantra iva dvija | Sādhubhir grasta-hṛdayo bhaktair bhakta-jana-priyaḥ ||",
                                source: "Bhagavata Purana 9.4.63 & Vishnu Purana 4.4",
                                meaning: "Lord Vishnu said to Durvasa: 'I am completely under the control of My pure devotees, as if having no independence.'"
                              },
                              details: `
                                When Durvasa created a fiery demon against him, Ambarisha stood motionless; the Sudarshana Chakra incinerated the demon and pursued Durvasa across the universe.
                              `,
                              keyAttributes: ["Beloved of Lord Vishnu", "Protected by Sudarshana Chakra", "Master of Ekadashi Vrata"],
                              children: [
                                {
                                  id: "vp-raghu-emperor",
                                  name: "Emperor Raghu (Hero of Raghuvamsha)",
                                  sanskrit: "सम्राट् रघु (रघुवंश-प्रवर्तक)",
                                  title: "The World-Conqueror Who Donated His Entire Empire",
                                  category: "Suryavamsha",
                                  tradition: "Vishnu Purana",
                                  parent: "vp-ambarisha-king",
                                  parentName: "King Ambarisha",
                                  consort: "Solar Empress",
                                  vahana: "Invincible War Chariot",
                                  ayudha: "Celestial Bow & Visvajit Staff",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.9)",
                                  icon: "🏛️",
                                  summary: "Descended via Dilipa II (Khatvanga); conquered the earth and gave all wealth away in the Visvajit Yajna, drinking from earthen pots.",
                                  shloka: {
                                    devanagari: "स विश्वजितमाजह्रे सर्वमेधमिव क्षिती । दानं ददौ ब्राह्मणेभ्यो मृत्पात्रशेषोऽभवत् ॥",
                                    transliteration: "Sa viśvajitam ājahre sarva-medham iva kṣitī | Dānaṁ dadau brāhmaṇebhyo mṛt-pātra-śeṣo'bhavat ||",
                                    source: "Vishnu Purana 4.4.88",
                                    meaning: "He performed the Visvajit sacrifice, giving away all earthly wealth to learned brahmanas until only earthen pots remained for himself."
                                  },
                                  details: `
                                    Raghu was so renowned for valor, integrity, and radical charity that the entire Solar Dynasty came to be proudly called **Raghuvamsha**.
                                  `,
                                  keyAttributes: ["Fountainhead of the title 'Raghuvamsha'", "Hero of Kalidasa's epic poem", "Father of King Aja"],
                                  children: [
                                    {
                                      id: "vp-dasharatha-king",
                                      name: "King Dasharatha of Ayodhya",
                                      sanskrit: "चक्रवर्ती दशरथ",
                                      title: "Ten-Directional Charioteer & Father of Sri Rama",
                                      category: "Suryavamsha",
                                      tradition: "Vishnu Purana",
                                      parent: "vp-raghu-emperor",
                                      parentName: "Emperor Raghu",
                                      consort: "Queens Kausalya, Kaikeyi, Sumitra",
                                      vahana: "Ten-Directional War Chariot",
                                      ayudha: "Shabda-Bhedi Arrows",
                                      color: "#E11D48",
                                      glowColor: "rgba(225, 29, 72, 0.85)",
                                      icon: "👑",
                                      summary: "Son of Aja; could drive his chariot in all ten directions; performed the Putrakameshti Yajna that brought Sri Rama to earth.",
                                      shloka: {
                                        devanagari: "दशरथो नाम राजा बभूव गुणवान् शुचिः । पुत्रार्थं चक्रे यत्नं स यज्वभिः सह संगम्य ॥",
                                        transliteration: "Daśaratho nāma rājā babhūva guṇavān śuciḥ | Putrārthaṁ cakre yatnaṁ sa yajvabhiḥ saha saṁgamya ||",
                                        source: "Vishnu Purana 4.4.95",
                                        meaning: "There was a king named Dasharatha, endowed with all virtues, who performed sacred sacrifices for the sake of obtaining sons."
                                      },
                                      details: `
                                        Under Sage Rishyashringa's guidance, Dasharatha conducted the Putrakameshti sacrifice, where Lord Vishnu manifested sweet payasam from the sacred flame.
                                      `,
                                      keyAttributes: ["Father of Sri Rama, Bharata, Lakshmana & Shatrughna", "Master of Shabda-bhedi archery", "Performed the Putrakameshti Yajna"],
                                      children: [
                                        {
                                          id: "vp-sri-rama",
                                          name: "Sri Rama (Maryada Purushottama)",
                          sanskrit: "श्रीरामचन्द्र (मर्यादा पुरुषोत्तम)",
                          title: "The Supreme Seventh Avatara of Vishnu & King of Ayodhya",
                          category: "Mahavatara",
                          tradition: "Vishnu Purana",
                          parent: "vp-dasharatha-king",
                          parentName: "King Dasharatha of Ayodhya",
                          consort: "Goddess Sita Devi (Janaki / Lakshmi)",
                          vahana: "Royal Chariot of Ayodhya",
                          ayudha: "Kodanda Bow & Arrow of Infallible Truth",
                          color: "#3B82F6",
                          glowColor: "rgba(59, 130, 246, 0.9)",
                          icon: "🏹",
                          summary: "Eldest son of Dasharatha; vanquished Ravana, established Ramarajya, and continues the Solar line through Kusha.",
                          shloka: {
                            devanagari: "रामो रावणहन्ता च धर्मसंस्थापनो नृपः । कुशश्चातिथिसंज्ञश्च पालयन्ति महीमिमाम् ॥",
                            transliteration: "Rāmo rāvaṇa-hantā ca dharma-saṁsthāpano nṛpaḥ | Kuśaś cātithi-saṁjñaś ca pālayanti mahīm imām ||",
                            source: "Vishnu Purana 4.4.102",
                            meaning: "Rama, slayer of Ravana and establisher of Dharma, whose sons Kusha and Atithi protected this sacred earth."
                          },
                          details: `
                            Vishnu Purana 4.4 outlines Sri Rama's life: His 14-year exile, the alliance with Sugriva, the building of the Setubandha bridge, and the inauguration of Ramarajya.
                          `,
                          keyAttributes: ["Maryada Purushottama: Ideal human being", "Slayer of Ravana", "Father of Kusha and Lava"],
                          children: [
                            {
                              id: "vp-kusha-king",
                              name: "King Kusha (Ruler of Kushavati)",
                              sanskrit: "राजा कुशः (कुशावतीपतिः)",
                              title: "Elder Twin Son of Sri Rama & Master Archer",
                              category: "Suryavamsha",
                              tradition: "Vishnu Purana",
                              parent: "vp-sri-rama",
                              parentName: "Sri Rama",
                              consort: "Kumudvati (Naga Princess)",
                              vahana: "Golden Chariot",
                              ayudha: "Kodanda Bow",
                              color: "#60A5FA",
                              glowColor: "rgba(96, 165, 250, 0.8)",
                              icon: "👑",
                              summary: "Elder twin son of Sri Rama; raised by Sage Valmiki; inherited Southern Kosala and continued the Solar line.",
                              shloka: {
                                devanagari: "कुशस्य चाभवत् पुत्रः कुमुद्वत्यां समाहितः । अतिथिश्च महातेजा रघुवंशप्रवर्धनः ॥",
                                transliteration: "Kuśasya cābhavat putraḥ kumudvatyāṁ samāhitaḥ | Atithiś ca mahātejā raghuvaṁśa-pravardhanaḥ ||",
                                source: "Vishnu Purana 4.4.105",
                                meaning: "Unto Kusha and the virtuous Kumudvati was born Atithi of immense glory, who expanded the illustrious lineage of Raghu."
                              },
                              details: `
                                Kusha married Naga princess Kumudvati and ruled from Kushavati, fathering King Atithi.
                              `,
                              keyAttributes: ["Ruler of Kushavati", "Father of King Atithi", "Hero of the Ramayana recitation"],
                              children: [
                                {
                                  id: "vp-atithi-solar",
                                  name: "King Atithi & Later Solar Kings",
                                  sanskrit: "राजा अतिथिः एवं परवर्ति-सूर्यवंश",
                                  title: "Righteous Sovereign of Ayodhya Leading to Brihadbala",
                                  category: "Suryavamsha",
                                  tradition: "Vishnu Purana",
                                  parent: "vp-kusha-king",
                                  parentName: "King Kusha",
                                  consort: "Solar Queen",
                                  vahana: "Royal Chariot",
                                  ayudha: "Royal Scepter & Bow",
                                  color: "#93C5FD",
                                  glowColor: "rgba(147, 197, 253, 0.8)",
                                  icon: "🏛️",
                                  summary: "Son of Kusha; his line continued through Nishadha, Nala, Nabhas, Pundarika down to Brihadbala in the Kurukshetra War.",
                                  shloka: {
                                    devanagari: "अतिथेरभवन् पुत्रा निषधस्तस्य चात्मजः । नलश्च नभसश्चैव पुण्डरीको महायशाः ॥",
                                    transliteration: "Atither abhavan putrā niṣadhas tasya cātmajaḥ | Nalaś ca nabhasaś caiva puṇḍarīko mahāyaśāḥ ||",
                                    source: "Vishnu Purana 4.4.108",
                                    meaning: "From Atithi sprang Nishadha, from him Nala, then Nabhas, and the illustrious Pundarika."
                                  },
                                  details: `
                                    Vishnu Purana 4.4 traces the final kings of the Solar Dynasty: King Brihadbala was slain by Abhimanyu in the Kurukshetra War, and the dynasty continued to King Sumitra.
                                  `,
                                  keyAttributes: ["Continuator of Ayodhya kingship", "Ancestor of King Brihadbala", "Recorded in Book 4 of Vishnu Purana"],
                                  children: [
                        {
                          id: "vp-hiranyanabha-maru",
                          name: "Kings Hiranyanabha & Maru of Kalapa",
                          sanskrit: "राजा हिरण्यनाभ एवं योगी मरु (विष्णुपुराण ४.४)",
                          title: "Yoga Masters & Preservers of the Solar Seed in Kalapa-Grama",
                          category: "Solar Dynasty (Amsa 4)",
                          tradition: "Vishnu Purana",
                          parent: "vp-atithi-solar",
                          parentName: "King Atithi & Later Solar Kings",
                          consort: "Princesses of Kosala",
                          vahana: "Yogic Solar Chariot",
                          ayudha: "Yoga Scepter & Bow",
                          color: "#60A5FA",
                          glowColor: "rgba(96, 165, 250, 0.8)",
                          icon: "🧘",
                          summary: "Vishnu Purana 4.4.106 chronicles Hiranyanabha learning Yoga from Sage Jaimini. His descendant King Maru entered Kalapa-grama to re-establish the Solar line in Satya Yuga.",
                          shloka: {
                            devanagari: "हिरण्यनाभात् पुष्यः । तस्मात् ध्रुवसन्धिः । ततः सुदर्शनः । तस्मादग्निवर्णः । ततः शीघ्रः । तस्मात् मरुर्योऽसौ योगसिद्धः कलापग्रामे तिष्ठति ॥",
                            transliteration: "Hiraṇyanābhāt puṣyaḥ | Tasmāt dhruvasandhiḥ | Tataḥ sudarśanaḥ | Tasmād agnivarṇaḥ | Tataḥ śīghraḥ | Tasmāt marur yo'sau yoga-siddhaḥ kalāpa-grāme tiṣṭhati ||",
                            source: "Vishnu Purana 4.4.107",
                            meaning: "From Hiranyanabha came Pushya, then Dhruvasandhi, Sudarshana, Agnivarna, Shighra, and Maru, who, perfected in Yoga, resides in Kalapa-grama to restart the dynasty."
                          },
                          details: `
                            Book 4 Chapter 4 of the Vishnu Purana meticulously traces the descent after Kusha: Atithi -> Nishadha -> Nala -> Nabhas -> Pundarika -> Kshemadhanva -> Devanika -> Ahinagu -> Paripatra -> Dala -> Chhala -> Uktha -> Vajranabha -> Shankhana -> Dhridhashva -> Vishvasaha -> Hiranyanabha.
                          `,
                          keyAttributes: ["Recorded in Vishnu Purana 4.4", "Hiranyanabha instructed Sage Yajnavalkya in Yoga", "Maru preserves the lineage seed in Kalapa"],
                          children: [
                            {
                              id: "vp-brihadbala-kosala",
                              name: "King Brihadbala of Ayodhya (Vishnu Purana 4.4)",
                              sanskrit: "महाराज बृहद्बल (द्वापरान्त सूर्यवंश नरेश)",
                              title: "Last Sovereign of Ayodhya before the Great War",
                              category: "Solar Dynasty (Amsa 4)",
                              tradition: "Vishnu Purana",
                              parent: "vp-hiranyanabha-maru",
                              parentName: "Kings Hiranyanabha & Maru",
                              consort: "Queen of Kosala",
                              vahana: "Golden Solar Chariot",
                              ayudha: "Solar Bow & Golden Arrows",
                              color: "#F59E0B",
                              glowColor: "rgba(245, 158, 11, 0.85)",
                              icon: "🏹",
                              summary: "Vishnu Purana 4.4.112 records: 'Maru's son was Prashusruta, from him Sandhi, Amarshana, Mahasvan, Vishvabhavan, Prasenajit, Takshaka, and Brihadbala, slain by Abhimanyu.'",
                              shloka: {
                                devanagari: "ततोऽमर्षणस्तस्मान्महस्वान् ततश्च विश्वभावात् प्रसेनजित् ततस्तक्षकस्ततो बृहद्बलो यः साम्प्रतं भारते युद्धेऽभिमन्युना निहतः ॥",
                                transliteration: "Tato'marṣaṇas tasmān mahasvān tataś ca viśvabhāvāt prasenajit tatas takṣakas tato bṛhadbalo yaḥ sāmprataṁ bhārate yuddhe'bhimanyunā nihataḥ ||",
                                source: "Vishnu Purana 4.4.112",
                                meaning: "Then came Amarshana, Mahasvan, Vishvabhavan, Prasenajit, Takshaka, and from him Brihadbala, who was slain in the Bharata war by Abhimanyu."
                              },
                              details: `
                                Sage Parashara speaks in the present tense to Maitreya regarding the Mahabharata war: Brihadbala was the ruler of Ayodhya who took the field with his vast armies.
                              `,
                              keyAttributes: ["Sovereign of Kosala at the close of Dvapara Yuga", "Named explicitly in Vishnu Purana 4.4.112", "Fountainhead of the post-war kings of Ayodhya"],
                              children: [
                                {
                                  id: "vp-divakara-sahadeva",
                                  name: "Post-Mahabharata Kosala Kings (Vishnu Purana 4.22)",
                                  sanskrit: "महाभारतोत्तर इक्ष्वाकु वंशावली (बृहद्रथ ते रञ्जय)",
                                  title: "28 Generations of Solar Kings Chronicled by Sage Parashara",
                                  category: "Solar Dynasty (Amsa 4)",
                                  tradition: "Vishnu Purana",
                                  parent: "vp-brihadbala-kosala",
                                  parentName: "King Brihadbala",
                                  consort: "Solar Royal Queens",
                                  vahana: "Royal Chariot",
                                  ayudha: "Dharma Scepter & Solar Wheel",
                                  color: "#EAB308",
                                  glowColor: "rgba(234, 179, 8, 0.8)",
                                  icon: "👑",
                                  summary: "Vishnu Purana Book 4 Chapter 22 records the future kings born in Brihadbala's line: Brihadratha, Urukriya, Vatsavyuha, Prativyoma, Divakara, down to Rananjaya.",
                                  shloka: {
                                    devanagari: "अतः परं भवितव्यानहं भूपतीन् वक्ष्ये । बृहद्बलस्य पुत्रो बृहद्रथः । तस्याप्युरुक्रियः । ततो वत्सव्यूहः । ततः प्रतिव्योमः ॥",
                                    transliteration: "Ataḥ paraṁ bhavitavyān ahaṁ bhūpatīn vakṣye | Bṛhadbalasya putro bṛhadrathaḥ | Tasyāpy urukriyaḥ | Tato vatsavyūhaḥ | Tataḥ prativyomaḥ ||",
                                    source: "Vishnu Purana 4.22.1-4",
                                    meaning: "Sage Parashara said: 'Now listen as I declare the kings of the future: Brihadbala's son will be Brihadratha, from him Urukriya, then Vatsavyuha, and then Prativyoma.'"
                                  },
                                  details: `
                                    Chapter 22 of Book 4 is dedicated entirely to the post-Mahabharata Solar Dynasty: Brihadratha -> Urukriya -> Vatsavyuha -> Prativyoma -> Divakara -> Sahadeva -> Brihadashva -> Bhanuratha -> Pratitashva -> Supratika -> Marudeva -> Sunakshatra -> Kinnarashva -> Antariksha -> Suparna -> Amitrajit -> Dharmin -> Kritanjaya -> Rananjaya -> Sanjayaka.
                                  `,
                                  keyAttributes: ["Dedicated prophecy in Vishnu Purana 4.22", "Unbroken continuation of Sri Rama's dynasty", "Ruled from the historic city of Ayodhya in Kali Yuga"],
                                  children: [
                                    {
                                      id: "vp-shakya-suddhodana",
                                      name: "King Shakya & King Suddhodana (Vishnu Purana 4.22)",
                                      sanskrit: "राजा शाक्य एवं शुद्धोदन (कपिलवस्तु नरेश)",
                                      title: "The Shakya Branch of the Solar Dynasty • Ancestors of Buddha",
                                      category: "Solar Dynasty (Amsa 4)",
                                      tradition: "Vishnu Purana",
                                      parent: "vp-divakara-sahadeva",
                                      parentName: "Post-Mahabharata Kosala Kings",
                                      consort: "Queen Mayadevi",
                                      vahana: "Royal Chariot",
                                      ayudha: "Dharma Scepter",
                                      color: "#CA8A04",
                                      glowColor: "rgba(202, 138, 4, 0.8)",
                                      icon: "🪷",
                                      summary: "Vishnu Purana 4.22.12 records: 'From Sanjaya shall be born Shakya; his son will be Suddhodana; from him Siddhartha; and his son shall be Rahula.'",
                                      shloka: {
                                        devanagari: "सञ्जयात् शाक्यः । तस्मात् शुद्धोदनः । ततः सिद्धार्थः । ततो राहुलः । ततः प्रसेनजित् ॥",
                                        transliteration: "Sañjayāt śākyaḥ | Tasmāt śuddhodanaḥ | Tataḥ siddhārthaḥ | Tato rāhulaḥ | Tataḥ prasenajit ||",
                                        source: "Vishnu Purana 4.22.12",
                                        meaning: "From Sanjaya shall come Shakya; from him Suddhodana; from him Siddhartha (Buddha); from him Rahula; and after him King Prasenajit."
                                      },
                                      details: `
                                        The canonical authority of the Vishnu Purana links the Shakya royal dynasty directly as a branch of the ancient Ikshvakus.
                                      `,
                                      keyAttributes: ["Explicitly enumerated in Vishnu Purana 4.22.12", "Chronicles Suddhodana and Siddhartha (Buddha)", "Father of Prince Rahula and uncle of Prasenajit"],
                                      children: [
                                        {
                                          id: "vp-prasenajit-sumitra",
                                          name: "King Prasenajit & King Sumitra (Last Puranic Ikshvaku)",
                                          sanskrit: "राजा प्रसेनजित् एवं राजा सुमित्र (विष्णुपुराण ४.२२.१४)",
                                          title: "Final Sovereign of the Canonical Ikshvaku Dynasty in Kali Yuga",
                                          category: "Solar Dynasty (Amsa 4)",
                                          tradition: "Vishnu Purana",
                                          parent: "vp-shakya-suddhodana",
                                          parentName: "King Shakya & Suddhodana",
                                          consort: "Queen of Kosala",
                                          vahana: "Imperial Kosala Chariot",
                                          ayudha: "Solar Crown & Scepter",
                                          color: "#EAB308",
                                          glowColor: "rgba(234, 179, 8, 0.85)",
                                          icon: "👑",
                                          summary: "Vishnu Purana 4.22.14 declares King Sumitra to be the final named sovereign of the Ikshvaku dynasty, after whom the dynasty blended into regional kingdoms.",
                                          shloka: {
                                            devanagari: "इत्येते इक्ष्वाकुवंश्या भूभुजो निगदिताः । सुमित्रं प्राप्य राजानं संस्थां प्राप्स्यति वै कलौ ॥",
                                            transliteration: "Ity ete ikṣvāku-vaṁśyā bhūbhujo nigaditāḥ | Sumitraṁ prāpya rājānaṁ saṁsthāṁ prāpsyati vai kalau ||",
                                            source: "Vishnu Purana 4.22.14",
                                            meaning: "Thus are declared the kings of the Ikshvaku line; reaching King Sumitra, the classical dynasty reaches its conclusion in the Kali Yuga."
                                          },
                                          details: `
                                            Following Rahula came Prasenajit, Ksudraka, Ranaka, Suratha, and King Sumitra.
                                            Sage Parashara concludes: 'With Sumitra, the ancient Ikshvaku line shall attain its completion, and from their scions shall spring the great regional monarchs.'
                                          `,
                                          keyAttributes: ["Concluding verse of Vishnu Purana Book 4 Chapter 22", "Last named canonical Ikshvaku monarch", "Bridge to the classical solar dynasties through 500 AD"],
                                          children: [
                                            {
                                              id: "vp-classical-solar-500ad",
                                              name: "Classical Solar Monarchs to 500 AD (Vardhanas & Malwa)",
                                              sanskrit: "उत्तर सूर्यवंशीय सम्राजः (५०० ईस्वी पर्यन्तम्)",
                                              title: "Rulers of Malwa & Thanesar • Defenders of Vedic Culture to c. 500 AD",
                                              category: "Solar Dynasty (Amsa 4)",
                                              tradition: "Vishnu Purana",
                                              parent: "vp-prasenajit-sumitra",
                                              parentName: "King Prasenajit & King Sumitra",
                                              consort: "Empresses of Malwa",
                                              vahana: "Imperial War Chariot",
                                              ayudha: "Solar Standard & Victory Scepter",
                                              color: "#FACC15",
                                              glowColor: "rgba(250, 204, 21, 0.9)",
                                              icon: "🏛️",
                                              summary: "Continuation of the solar royal line through 500 AD: King Yashodharman of Malwa and the Pushyabhuti ancestors of Thanesar who protected Sanatan civilization from barbarian destruction.",
                                              shloka: {
                                                devanagari: "धर्मसंरक्षणार्थाय सूर्यवंश्या नराधिपाः । म्लेच्छान् विद्राव्य मेदिन्यां स्थापयन्ति कृतं युगम् ॥",
                                                transliteration: "Dharma-saṁrakṣaṇārthāya sūrya-vaṁśyā narādhipāḥ | Mlecchān vidrāvya medinyāṁ sthāpayanti kṛtaṁ yugam ||",
                                                source: "Classical Inscriptions & Puranic Eulogies",
                                                meaning: "For the preservation of Dharma, the solar monarchs, routing the barbarian invaders from the sacred earth, re-established the virtue of the golden age."
                                              },
                                              details: `
                                                Reaching 500 AD, the solar scions ruled from central and northern India, repelling the white Huna incursions and establishing magnificent stone temples dedicated to Lord Vishnu and Lord Shiva.
                                              `,
                                              keyAttributes: ["Brought the Vishnu Purana solar lineage to 500 AD", "Defended Aryavarta against foreign Huna invasions", "Endowed the great temple sanctuaries of classical India"],
                                              children: [
                {
                  id: "vp-mewar-sisodia-solar",
                  name: "The Sisodia Suryavamsha of Mewar (c. 728-1600 AD)",
                  sanskrit: "मेवाड़ सिसोदिया सूर्यवंश (बप्पा रावल से महाराणा प्रताप)",
                  title: "Lineal Heirs of Ikshvaku, Rama and Lava – Defenders of the Vedic Solar Throne",
                  category: "Suryavamsha Kings",
                  tradition: "Vishnu Purana",
                  parent: "vp-classical-solar-500ad",
                  parentName: "Classical Solar Monarchs to 500 AD (Vardhanas & Malwa)",
                  consort: "Maharanis of Chittorgarh & Udaipur",
                  vahana: "Solar War Steed & Imperial Chariot",
                  ayudha: "Ancestral Khanda & Eklingji Bow",
                  color: "#FACC15",
                  glowColor: "rgba(250, 204, 21, 0.9)",
                  icon: "☀️",
                  summary: "Continuing the direct patrilineal lineage of the Vishnu Purana's Surya-vamsha through Sri Rama's son Lava: Bappa Rawal (728 AD) founded Chittor; Maharana Kumbha built the 9-storey Vijay Stambha dedicated to Lord Vishnu; Maharana Sanga and Maharana Pratap upheld dharma against all odds.",
                  shloka: {
                    devanagari: "इक्ष्वाकु-वंश-सम्भूतः श्री-राम-कुल-दीपकः । बप्प-रावल-प्रभृतयो गुहिला भुवि विश्रुताः ॥",
                    transliteration: "Ikshvaku-vamsa-sambhutah Sri-rama-kula-dipakah | Bappa-ravala-prabhritayo guhila bhuvi visrutah ||",
                    source: "Chittorgarh Inscriptions & Mewar Vamshavali",
                    meaning: "Born in the exalted lineage of Ikshvaku, shining as lamps of Sri Rama's dynasty, Bappa Rawal and the noble Guhila-Sisodia monarchs became renowned throughout the earth."
                  },
                  details: `
                    The Vishnu Purana concludes its dynastic account with the future kings (Book 4, Ch 21-24), prophesying the enduring nature of the Solar line:
                    - **Genealogical Transmission:** From Lava's line at Shravasti through the Maitrakas of Vallabhi to Bappa Rawal at Chittor, the Sisodia dynasty maintains the purest recorded Solar descent in India.
                    - **Vaishnava Patronage:** While reigning as Diwans of Eklingji (Shiva), the Maharanas dedicated their greatest monuments to Vishnu: Maharana Kumbha built the Vijay Stambha (Kirti Stambha) in 1448 AD as a monumental temple tower to Vishnu's avataras, and Maharana Kumbha personally authored the *Rasikapriya*, a celebrated commentary on Jayadeva's *Gita Govinda*.
                  `,
                  keyAttributes: ["Direct continuation of the Vishnu Purana's Suryavamsha", "Built the Vijay Stambha dedicated to Lord Vishnu at Chittor", "Unbroken Kshatriya commitment to Dharma through medieval history"],
                  children: [
                    {
                      id: "vp-mewar-living-2026",
                      name: "Modern Suryavamshi House of Mewar to 2026",
                      sanskrit: "आधुनिक मेवाड़ सूर्यवंश (उदयपुर – २०२६ ईस्वी पर्यन्त)",
                      title: "Maharana Arvind Singh & Lakshyaraj Singh Mewar – Living 1400-Year Solar Lineage in 2026",
                      category: "Living Solar Dynasty",
                      tradition: "Vishnu Purana",
                      parent: "vp-mewar-sisodia-solar",
                      parentName: "The Sisodia Suryavamsha of Mewar (c. 728-1600 AD)",
                      consort: "Maharanis of Udaipur",
                      vahana: "Surya Dhvaja (Golden Sun Standard)",
                      ayudha: "Sacred Mewari Talwar & Royal Surya Shield",
                      color: "#FACC15",
                      glowColor: "rgba(250, 204, 21, 1.0)",
                      icon: "👑",
                      summary: "Through Maharana Raj Singh (who provided refuge to the deity of Lord Srinathji at Nathdwara, 1672 AD), Maharana Fateh Singh, and Maharana Bhagwat Singh, down to living custodians Maharana Arvind Singh Mewar and Lakshyaraj Singh Mewar in 2026, preserving the solar lineage unbroken.",
                      shloka: {
                        devanagari: "जो दृढ़ राखे धर्म को, ताहि राखे करतार । सूर्य-वंशोऽयमक्षय्यो वर्तते जगतीतले ॥",
                        transliteration: "Jo dridha rakhe dharma ko, tahi rakhe karatar | Surya-vamsho'yam akshayyo vartate jagati-tale ||",
                        source: "Royal Seal of Mewar & Eklingji Charter",
                        meaning: "He who holds steadfastly to Dharma is preserved and safeguarded by the Supreme Creator! This eternal Solar Dynasty continues unbroken upon this earth down to 2026."
                      },
                      details: `
                        The House of Mewar in 2026 is recognized worldwide as the longest unbroken royal dynasty in recorded history:
                        - **Sanctuary of Srinathji (1672 AD):** When the 600-year-old sacred Govardhan deity of Lord Krishna (Shri Srinathji) was moved to protect it from Mughal desecration, Maharana Raj Singh I offered his entire army and kingdom, enshrining the Lord at Nathdwara, Rajasthan.
                        - **Charbhuja Ji Temple:** The Maharanas serve as the hereditary patron of the ancient four-armed Vishnu temple (Charbhuja Ji) at Garhbor, built in 1444 AD.
                        - **Living Heirs in 2026:** Arvind Singh Mewar and Lakshyaraj Singh Mewar manage the living heritage, Vedic research, and religious institutions of Mewar, demonstrating the unbroken truth of Puranic prophecy.
                      `,
                      keyAttributes: ["World's longest living unbroken royal dynasty down to 2026", "Patrons and protectors of Shri Srinathji of Nathdwara", "Living adherence to Vedic solar lineage and royal duties"],
                      children: []
                    },
                    {
                      id: "vp-kachhwaha-jaipur-solar-2026",
                      name: "Kachhwaha Suryavamsha of Jaipur to 2026",
                      sanskrit: "जयपुर कछवाहा सूर्यवंश (कुश वंशज – २०२६ ईस्वी पर्यन्त)",
                      title: "Kushavaha Lineage – Sawai Jai Singh II to Titular Maharaja Padmanabh Singh in 2026",
                      category: "Living Solar Dynasty",
                      tradition: "Vishnu Purana",
                      parent: "vp-mewar-living-2026",
                      parentName: "Modern Suryavamshi House of Mewar to 2026",
                      consort: "Maharanis of Amber & Jaipur",
                      vahana: "Panchranga Flag & Imperial Chariot",
                      ayudha: "Khanda Sword & Govind Dev Ji Standard",
                      color: "#FACC15",
                      glowColor: "rgba(250, 204, 21, 0.95)",
                      icon: "🏛️",
                      summary: "Tracing descent from Sri Rama's son Kusha. Built the monumental Govind Dev Ji temple in Vrindavan and Jaipur; founded Jaipur under astronomical principles; represented in 2026 by titular Maharaja Padmanabh Singh of Jaipur.",
                      shloka: {
                        devanagari: "कुश-वंश-प्रदीपेन जयसिंहेन धीमता । गोविन्द-देव-सेवार्थं पुरी जयपुरिका कृता ॥",
                        transliteration: "Kusha-vamsa-pradipena jayasimhena dhimata | Govinda-deva-sevartham puri jayapurika krita ||",
                        source: "Jaipur Foundation Epigraph (1727 AD)",
                        meaning: "By the wise Sawai Jai Singh, luminary of Kusha's lineage, was founded the city of Jaipur solely for the sacred service and worship of Lord Govinda Deva (Krishna)."
                      },
                      details: `
                        The Kachhwaha line of Jaipur preserves the Kusha branch of the Solar Dynasty:
                        - **Sri Govind Dev Ji:** The sacred idol carved by Vajranabha (Krishna's great-grandson) was enshrined at Vrindavan by Raja Man Singh and later moved to the central courtyard of the City Palace of Jaipur by Sawai Jai Singh II, where the King served as the deity's *Diwan*.
                        - **Living Continuity in 2026:** Titular Maharaja Padmanabh Singh of Jaipur maintains the temple trusts and royal solar traditions in 2026.
                      `,
                      keyAttributes: ["Direct descent from Kusha (son of Sri Rama)", "Enshrined Lord Govind Dev Ji at Jaipur City Palace", "Living titular royal lineage active in 2026"],
                      children: []
                    }
                  ]
                }
              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]

                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
      ]
    }
  ]
}
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 7: THE COMPLETE CHANDRAVAMSHA (BOOK 4 OF VISHNU PURANA)
       ---------------------------------------------------------------------- */
    {
      id: "vp-chandravamsha",
      name: "The Lunar Dynasty (Chandravamsha of Amsa 4)",
      sanskrit: "चन्द्रवंश (पुरूरवा - ययाति - यदु - कुरु - पाण्डव)",
      title: "The Illustrious Royal Line of Yadavas & Kurus Detailed in Book 4",
      category: "Chandravamsha",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Lunar Queens of Aryavarta",
      vahana: "Silver Lunar Chariot",
      ayudha: "Chandra-Khadga & Imperial Scepter",
      color: "#8B5CF6",
      glowColor: "rgba(139, 92, 246, 0.85)",
      icon: "🌙",
      summary: "Descended from Atri -> Soma -> Budha -> Pururavas -> Nahusha -> Yayati, splitting into the celebrated Yaduvamsha (Krishna) and Pauravavamsha (Pandavas).",
      shloka: {
        devanagari: "सोमाद् बभूव बुधस्तस्मात् पुरूरवा नृपोऽभवत् । तस्य वंशे समायाता यादवाः कुरवस्तथा ॥",
        transliteration: "Somād babhūva budhas tasmāt purūravā nṛpo'bhavat | Tasya vaṁśe samāyātā yādavāḥ kuravas tathā ||",
        source: "Vishnu Purana 4.6.1",
        meaning: "From Soma sprang Budha, from him King Pururavas was born; in his lineage arose the illustrious Yadavas and Kurus."
      },
      details: `
        Book 4, Chapters 6-24 of the Vishnu Purana provide the canonical genealogical tables of the Lunar Dynasty.
        King Yayati divided his empire among his five sons, giving rise to:
        • **Yaduvamsha**: The line of Yadu, where Sri Krishna manifested in His Purna Avatara.
        • **Pauravavamsha**: The line of Puru, where Emperor Bharata, King Kuru, Bhishma, and the Pandavas manifested.
      `,
      keyAttributes: [
        "Chronicle of both Yadavas and Pandavas",
        "Detailed in Book 4 of Vishnu Purana",
        "Setting for Sri Krishna's pastimes and the Mahabharata"
      ],
      children: [
        {
          id: "vp-pururavas-yayati",
          name: "King Pururavas to Emperor Yayati",
          sanskrit: "पुरूरवा - आयु - नहुष - सम्राट् ययाति",
          title: "The Universal Chakravartins of the Early Lunar Line",
          category: "Chandravamsha",
          tradition: "Vishnu Purana",
          parent: "vp-chandravamsha",
          parentName: "The Lunar Dynasty",
          consort: "Urvashi, Ashokasundari, Devayani & Sharmishtha",
          vahana: "Golden Lunar Chariot",
          ayudha: "Chakravartin Scepter",
          color: "#A855F7",
          glowColor: "rgba(168, 85, 247, 0.85)",
          icon: "👑",
          summary: "Pururavas wed Urvashi -> Ayu -> Nahusha -> Yayati, whose sons Yadu and Puru formed the two greatest dynasties of Indian history.",
          shloka: {
            devanagari: "यदोस्तु यादवा जाताः पूरोः पौरववंशजाः ।",
            transliteration: "Yados tu yādavā jātāḥ pūroḥ paurava-vaṁśajāḥ |",
            source: "Vishnu Purana 4.10.1",
            meaning: "From Yadu sprang the Yadavas, and from Puru sprang the celebrated line of the Pauravas."
          },
          details: `
            Vishnu Purana 4.10 describes Yayati exchanging his old age for the youth of his son Puru, and subsequently dividing Aryavarta among his sons.
          `,
          keyAttributes: ["Fathers of Yadu and Puru", "Romance of Pururavas and Urvashi", "Yayati's wisdom on worldly desire"],
          children: [
            /* --- YADUVAMSHA SUB-BRANCH --- */
            {
              id: "vp-yadu-dynasty",
              name: "The Yaduvamsha (Yadu to Sri Krishna)",
              sanskrit: "यादववंश (यदु - वृष्णि - शूर - वसुदेव - श्रीकृष्ण)",
              title: "The Royal Dynasty Blessed by Sri Krishna's Appearance",
              category: "Yaduvamsha",
              tradition: "Vishnu Purana",
              parent: "vp-pururavas-yayati",
              parentName: "King Pururavas to Emperor Yayati",
              consort: "Yadava Queens",
              vahana: "Garuda / Royal Chariot",
              ayudha: "Sudarshana Chakra & Murali Flute",
              color: "#9333EA",
              glowColor: "rgba(147, 51, 234, 0.85)",
              icon: "🪈",
              summary: "Descent from King Yadu through Kroshtu, Vrishni, Sura, and Vasudeva to Sri Krishna, Balarama, and Pradyumna.",
              shloka: {
                devanagari: "यदोर्वंशं नरः श्रुत्वा सर्वपापैः प्रमुच्यते । यत्रावतीर्णं परमानन्दरूपं स्वयं हरिः ॥",
                transliteration: "Yador vaṁśaṁ naraḥ śrutvā sarva-pāpaiḥ pramucyate | Yatrāvatīrṇaṁ paramānanda-rūpaṁ svayaṁ hariḥ ||",
                source: "Vishnu Purana 4.11.1",
                meaning: "Hearing the holy lineage of Yadu, one is liberated from all sins, for therein manifested Lord Hari Himself in His supreme form of transcendent bliss."
              },
              details: `
                Vishnu Purana 4.11-15 meticulously outlines the Vrishni branches. King Sura fathered Vasudeva (father of Krishna) and Kunti (mother of Pandavas).
              `,
              keyAttributes: ["Lineage of Sri Krishna", "Detailed in Books 4 and 5", "Vrishni heroes and Dvaraka federation"],
              children: [
                {
                  id: "vp-krishna-purna",
                  name: "Sri Krishna (Purna Purushottama)",
                  sanskrit: "श्रीकृष्ण (पूर्ण पुरुषोत्तम / जगद्गुरु)",
                  title: "Supreme Purna Avatara & Central Focus of Book 5",
                  category: "Mahavatara",
                  tradition: "Vishnu Purana",
                  parent: "vp-yadu-dynasty",
                  parentName: "The Yaduvamsha",
                  consort: "Ashtabharya (Rukmini, Satyabhama, etc.) & Radha",
                  vahana: "Garuda",
                  ayudha: "Sudarshana Chakra & Murali Flute",
                  color: "#8B5CF6",
                  glowColor: "rgba(139, 92, 246, 0.9)",
                  icon: "🪈",
                  summary: "Son of Vasudeva and Devaki; lifted Govardhana Hill, defeated Kamsa, delivered the Gita, and guided Aryavarta.",
                  shloka: {
                    devanagari: "कृष्णाय वासुदेवाय हरये परमात्मने । प्रणतक्लेशनाशाय गोविन्दाय नमो नमः ॥",
                    transliteration: "Kṛṣṇāya vāsudevāya haraye paramātmane | Praṇata-kleśa-nāśāya govindāya namo namaḥ ||",
                    source: "Vishnu Purana 5.1",
                    meaning: "Unto Krishna, the son of Vasudeva, the Supreme Soul who removes distress, Govinda, I bow again and again."
                  },
                  details: `
                    The entire Fifth Book of the Vishnu Purana (38 chapters) is dedicated to Sri Krishna's pastimes from His birth in Mathura to His ascension from Prabhasa.
                  `,
                  keyAttributes: ["Central divinity of Book 5", "Speaker of the Bhagavad Gita", "Purna Avatara of Vishnu"],
                  children: []
                }
              ]
            },
            /* --- PAURAVAVAMSHA SUB-BRANCH --- */
            {
              id: "vp-puru-dynasty",
              name: "The Pauravavamsha (Bharata, Kuru & Pandavas)",
              sanskrit: "पौरववंश (पुरु - भरत - कुरु - भीष्म - पाण्डव - परीक्षित्)",
              title: "The Imperial Line of Hastinapura Detailed in Book 4 Chapter 19",
              category: "Pauravavamsha",
              tradition: "Vishnu Purana",
              parent: "vp-pururavas-yayati",
              parentName: "King Pururavas to Emperor Yayati",
              consort: "Kuru Empresses",
              vahana: "Imperial War Chariot",
              ayudha: "Gandiva Bow, Vrikodara Mace, Royal Scepter",
              color: "#2563EB",
              glowColor: "rgba(37, 99, 235, 0.85)",
              icon: "🏰",
              summary: "Descent from Puru -> Dushyanta -> Emperor Bharata -> Hasti -> King Kuru -> Shantanu -> Bhishma, Pandu -> 5 Pandavas -> Abhimanyu -> Parikshit -> Janamejaya.",
              shloka: {
                devanagari: "पूरोर्वंशो महापुण्यः सर्वराजर्षिसंवृतः । यत्र पाण्डुसुता वीरा बभूवुर्धर्मतत्पराः ॥",
                transliteration: "Pūror vaṁśo mahā-puṇyaḥ sarva-rājarṣi-saṁvṛtaḥ | Yatra pāṇḍu-sutā vīrā babhūvur dharma-tatparāḥ ||",
                source: "Vishnu Purana 4.19.1",
                meaning: "The line of Puru is exceedingly sacred, filled with royal sages, wherein were born the heroic sons of Pandu dedicated to righteousness."
              },
              details: `
                Vishnu Purana 4.19-21 traces the Pauravas: Hasti founded Hastinapura; Kuru consecrated Kurukshetra; Shantanu fathered Bhishma; Pandu's sons won the great war; and Parikshit ruled the earth, succeeded by Janamejaya.
              `,
              keyAttributes: [
                "Founders of Hastinapura and Kurukshetra",
                "Heroes of the Mahabharata War",
                "Parikshit and Janamejaya royal succession"
              ],
              children: [
                {
                  id: "vp-bhishma-pandavas",
                  name: "Bhishma Pitamaha & The 5 Pandavas",
                  sanskrit: "भीष्म पितामह एवं पञ्च पाण्डवाः",
                  title: "Grand Patriarch of Kurus & Righteous Sons of Pandu",
                  category: "Pauravavamsha",
                  tradition: "Vishnu Purana",
                  parent: "vp-puru-dynasty",
                  parentName: "The Pauravavamsha",
                  consort: "Draupadi & Subhadra",
                  vahana: "War Chariot of Indraprastha",
                  ayudha: "Gandiva Bow, Bed of Arrows",
                  color: "#3B82F6",
                  glowColor: "rgba(59, 130, 246, 0.85)",
                  icon: "🛡️",
                  summary: "Bhishma delivered the Vishnu Sahasranama; the 5 Pandavas were guided by Sri Krishna to triumph over Adharma at Kurukshetra.",
                  shloka: {
                    devanagari: "यतो धर्मस्ततो जयः ।",
                    transliteration: "Yato dharmas tato jayaḥ |",
                    source: "Mahabharata & Vishnu Purana",
                    meaning: "Where there is righteousness (Dharma), there alone is victory."
                  },
                  details: `
                    Bhishma's discourses in Shanti Parva and the Pandavas' adherence to Krishna's counsel form the ethical foundation of Vaishnava Raja Dharma.
                  `,
                  keyAttributes: ["Speakers of the Vishnu Sahasranama", "Guided by Sri Krishna", "Triumph of Dharma at Kurukshetra"],
                  children: [
                    {
                      id: "vp-abhimanyu-parikshit",
                      name: "Abhimanyu to Emperor Parikshit & Janamejaya",
                      sanskrit: "वीर अभिमन्यु, सम्राट् परीक्षित् एवं जनमेजय",
                      title: "The Preservers of the Kuru Dynasty into Kaliyuga",
                      category: "Pauravavamsha",
                      tradition: "Vishnu Purana",
                      parent: "vp-bhishma-pandavas",
                      parentName: "Bhishma Pitamaha & The 5 Pandavas",
                      consort: "Princess Uttara & Queen Iravati",
                      vahana: "Imperial Golden Chariot",
                      ayudha: "Imperial Scepter & Surrendered Soul",
                      color: "#10B981",
                      glowColor: "rgba(16, 185, 129, 0.85)",
                      icon: "📖",
                      summary: "Abhimanyu fell heroically in the Chakravyuha; his son Parikshit heard the Bhagavatam from Shukadeva; Janamejaya heard the Mahabharata.",
                      shloka: {
                        devanagari: "परीक्षित् पालयन् पृथ्वीं धर्मेण महता नृपः । जनमेजयं सुतं प्राप्य विष्णुलोकं जगाम सः ॥",
                        transliteration: "Parīkṣit pālayan pṛthvīṁ dharmeṇa mahatā nṛpaḥ | Janamejayaṁ sutaṁ prāpya viṣṇu-lokaṁ jagāma saḥ ||",
                        source: "Vishnu Purana 4.21.1",
                        meaning: "King Parikshit protected the earth with great righteousness; having obtained Janamejaya as his son, he attained the holy abode of Vishnu."
                      },
                      details: `
                        Parikshit's son Janamejaya continued the line through Shatanika, Ashvamedhadatta, and down to Kshemaka, the final king of the Lunar line in Kaliyuga.
                      `,
                      keyAttributes: [
                        "Abhimanyu's heroism in Chakravyuha",
                        "Parikshit's hearing of sacred scriptures",
                        "Janamejaya's hosting of the Mahabharata recitation"
                      ],
                      children: [
                        {
                          id: "vp-janamejaya-nichakshu",
                          name: "King Janamejaya to King Nichakshu (Vishnu Purana 4.21)",
                          sanskrit: "राजा जनमेजय ते राजा निचक्षु (विष्णुपुराण ४.२१)",
                          title: "Sovereigns of Hastinapura & Founders of Kausambi Capital",
                          category: "Lunar Dynasty (Amsa 4)",
                          tradition: "Vishnu Purana",
                          parent: "vp-abhimanyu-parikshit",
                          parentName: "Abhimanyu to Emperor Parikshit & Janamejaya",
                          consort: "Paurava Queens",
                          vahana: "Imperial River Barge & Chariot",
                          ayudha: "Dharma Scepter",
                          color: "#EAB308",
                          glowColor: "rgba(234, 179, 8, 0.8)",
                          icon: "🏛️",
                          summary: "Vishnu Purana 4.21 records Janamejaya's son Shatanika, his son Ashvamedhadatta, Adhisimakrishna, and King Nichakshu who moved the capital to Kausambi.",
                          shloka: {
                            devanagari: "अतः परं भवितव्यानहं भूपतीन् कीर्तयिष्यामि । परीक्षितः पुत्रो जनमेजयः । ततः शतानीकः । तस्मादश्वमेधदत्तः । ततोऽधिसीमकृष्णः । तस्मान्निचक्षुः ॥",
                            transliteration: "Ataḥ paraṁ bhavitavyān ahaṁ bhūpatīn kīrtayiṣyāmi | Parīkṣitaḥ putro janamejayaḥ | Tataḥ śatānīkaḥ | Tasmād aśvamedhadattaḥ | Tato'dhisīmakṛṣṇaḥ | Tasmān nicakṣuḥ ||",
                            source: "Vishnu Purana 4.21.1",
                            meaning: "Sage Parashara said: 'I shall now declare the future kings: Parikshit's son will be Janamejaya; from him Shatanika, then Ashvamedhadatta, then Adhisimakrishna, and from him King Nichakshu.'"
                          },
                          details: `
                            Vishnu Purana 4.21 records that during King Nichakshu's reign, when Hastinapura was inundated by the holy Ganga, the capital was transferred to Kausambi in the Vatsa territory.
                          `,
                          keyAttributes: ["First verse of Vishnu Purana Book 4 Chapter 21", "Shift from Hastinapura to Kausambi", "Unbroken continuity of the Pandava throne"],
                          children: [
                            {
                              id: "vp-king-udayana-vatsa",
                              name: "King Udayana of Kausambi & King Kshemaka",
                              sanskrit: "राजा उदयन एवं राजा क्षेमक (विष्णुपुराण ४.२१.१८)",
                              title: "Monarchs of Kausambi • Final Sovereign of the Direct Paurava Line",
                              category: "Lunar Dynasty (Amsa 4)",
                              tradition: "Vishnu Purana",
                              parent: "vp-janamejaya-nichakshu",
                              parentName: "King Janamejaya to King Nichakshu",
                              consort: "Queen Vasavadatta & Padmavati",
                              vahana: "Ghoshayati Veena & Elephant",
                              ayudha: "Seven-Stringed Lute & Bow",
                              color: "#CA8A04",
                              glowColor: "rgba(202, 138, 4, 0.8)",
                              icon: "🎵",
                              summary: "Vishnu Purana 4.21.18 designates King Kshemaka as the final crowned king of the classical Paurava line, after whom the imperial center transitioned to Magadha.",
                              shloka: {
                                devanagari: "इत्येष पौरवो वंशः क्षेमकान्तो मयोदितः । यं श्रुत्वा पातकैर्मुक्तः परं निर्वाणमृच्छति ॥",
                                transliteration: "Ity eṣa pauravo vaṁśaḥ kṣemakānto mayoditaḥ | Yaṁ śrutvā pātakair muktaḥ paraṁ nirvāṇam ṛcchati ||",
                                source: "Vishnu Purana 4.21.18",
                                meaning: "Thus have I declared the sacred Paurava lineage concluding with King Kshemaka, hearing which a soul is freed from all sins and attains supreme liberation."
                              },
                              details: `
                                Following Nichakshu came Ushna, Chitraratha, Shuchiratha, Vrishniman, Sushena, Sunitha, Rucha, Nrichakshu, Sukhabala, Pariplava, Sunaya, Medhavin, Nripajjaya, Duru, Timi, Brihadratha, Sudasa, Shatanika, Udayana, Vahinara, Dandapani, Niramitra, and King Kshemaka.
                              `,
                              keyAttributes: ["Chronicles the romantic king Udayana of Vatsa", "King Kshemaka completes the Paurava line in Vishnu Purana", "Liberating virtue of hearing the genealogy"],
                              children: [
                                {
                                  id: "vp-magadha-brihadratha-nanda",
                                  name: "The Magadha Dynasties (Vishnu Purana 4.23–24)",
                                  sanskrit: "मगध राजवंश (प्रद्योत, शैशुनाग एवं नन्द • विष्णुपुराण)",
                                  title: "Imperial Succession of Magadha Prophesied by Sage Parashara",
                                  category: "Magadha Empires (Amsa 4)",
                                  tradition: "Vishnu Purana",
                                  parent: "vp-king-udayana-vatsa",
                                  parentName: "King Udayana & Kshemaka",
                                  consort: "Empresses of Pataliputra",
                                  vahana: "Imperial War Chariot",
                                  ayudha: "Wheel of Universal Sovereignty",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.85)",
                                  icon: "👑",
                                  summary: "Vishnu Purana 4.23–24 details the rise of Magadha: the Brihadrathas, the 5 Pradyotas (138 years), the Shishunagas (Bimbisara, Ajatashatru), and Emperor Mahapadma Nanda.",
                                  shloka: {
                                    devanagari: "अतः परं बार्हद्रथानां वंशमहं कीर्तयिष्यामि । सहदेवस्य पुत्रः सोमापिः । ततः श्रुतश्रवाः । ततोऽयुतायुः ॥",
                                    transliteration: "Ataḥ paraṁ bārhadrathānāṁ vaṁśam ahaṁ kīrtayiṣyāmi | Sahadevasya putraḥ somāpiḥ | Tataḥ śrutaśravāḥ | Tato'yutāyuḥ ||",
                                    source: "Vishnu Purana 4.23.1-2",
                                    meaning: "Sage Parashara said: 'I shall now glorify the imperial Magadha dynasty of Brihadratha: Sahadeva's son Somapi, then Shrutashrava, then Ayutayu...'"
                                  },
                                  details: `
                                    The Vishnu Purana explicitly provides the chronological king lists and regnal durations for each imperial house of Magadha.
                                    Following the Brihadrathas came the Pradyotas, followed by Shishunaga, Kakavarna, Kshemadharman, Bimbisara, Ajatashatru, and Udayin who founded Pataliputra, culminating in Mahapadma Nanda.
                                  `,
                                  keyAttributes: ["Detailed chronological prophecy in Vishnu Purana 4.23-24", "Regnal spans recorded for each imperial house", "Convergence of imperial power at Pataliputra"],
                                  children: [
                                    {
                                      id: "vp-maurya-dynasty",
                                      name: "The Maurya Dynasty (Vishnu Purana 4.24.28)",
                                      sanskrit: "मौर्य साम्राज्य (चन्द्रगुप्त एवं चाणक्य • विष्णुपुराण)",
                                      title: "Universal Imperial Dynasty Founded by Kautilya Chanakya",
                                      category: "Maurya Empire (Amsa 4)",
                                      tradition: "Vishnu Purana",
                                      parent: "vp-magadha-brihadratha-nanda",
                                      parentName: "The Magadha Dynasties",
                                      consort: "Empresses of the Mauryas",
                                      vahana: "Imperial War Chariot",
                                      ayudha: "Dharma Scepter & Chanakya Niti Code",
                                      color: "#38BDF8",
                                      glowColor: "rgba(56, 189, 248, 0.9)",
                                      icon: "🦁",
                                      summary: "Vishnu Purana 4.24.28 records: 'Chanakya shall anoint Chandragupta as sovereign. His son will be Bindusara, from him Ashoka, Sujasha, Dasharatha, Samprati, Shalishuka, Devavarman, Shatadhanvan, and Brihadratha.'",
                                      shloka: {
                                        devanagari: "चन्द्रगुप्तं कौटिल्यो विप्रः प्रतिष्ठापयिष्यति । तस्यापि बिन्दुसारः पुत्रो भविष्यति । तस्याप्यशोकवर्धनः ॥",
                                        transliteration: "Candraguptaṁ kauṭilyo vipraḥ pratiṣṭhāpayiṣyati | Tasyāpi bindusāraḥ putro bhaviṣyati | Tasyāpy aśokavardhanaḥ ||",
                                        source: "Vishnu Purana 4.24.28-30",
                                        meaning: "The Brahmana Kautilya shall install Chandragupta on the imperial throne; his son will be Bindusara, and his son will be the mighty Ashokavardhana."
                                      },
                                      details: `
                                        Book 4 Chapter 24 Verses 26–32 detail the entire 137-year reign of the ten Maurya emperors, culminating in Emperor Ashoka the Great.
                                      `,
                                      keyAttributes: ["Explicitly names Kautilya Chanakya and Chandragupta", "Names Ashokavardhana (Emperor Ashoka)", "Exact 137-year duration recorded in Vishnu Purana 4.24.32"],
                                      children: [
                                        {
                                          id: "vp-shunga-kanva-andhra",
                                          name: "Shunga, Kanva & Andhra Dynasties (Vishnu Purana 4.24)",
                                          sanskrit: "शुङ्ग, कण्व एवं आन्ध्र साम्राज्य (विष्णुपुराण ४.२४)",
                                          title: "Vedic Restoration & Lords of Dakshinapatha (Satavahanas)",
                                          category: "Shunga & Andhra Dynasties",
                                          tradition: "Vishnu Purana",
                                          parent: "vp-maurya-dynasty",
                                          parentName: "The Maurya Dynasty",
                                          consort: "Empresses of Vidisha and Pratishthana",
                                          vahana: "Ashvamedha Steed & Southern Fleet",
                                          ayudha: "Vedic Yupa & Trident Standard",
                                          color: "#10B981",
                                          glowColor: "rgba(16, 185, 129, 0.85)",
                                          icon: "⚓",
                                          summary: "Vishnu Purana 4.24.34-53 traces Pushyamitra Shunga (112 years for 10 Shungas), the 4 Kanva kings (45 years), and the 30 Andhra/Satavahana kings (456 years of Deccan rule).",
                                          shloka: {
                                            devanagari: "पुष्यमित्रः सेनानीः स्वामिनं हत्वा राज्यं करिष्यति । शुङ्गा दश वर्षशतं द्वादश भोक्ष्यन्ति । ततः काण्वायनस्ततः सुशर्मा ॥",
                                            transliteration: "Puṣyamitraḥ senānīḥ svāminaṁ hatvā rājyaṁ kariṣyati | Śuṅgā daśa varṣa-śataṁ dvādaśa bhokṣyanti | Tataḥ kāṇvāyanas tataḥ suśarmā ||",
                                            source: "Vishnu Purana 4.24.34-39",
                                            meaning: "The commander Pushyamitra will establish the Shunga dynasty; ten Shungas shall rule for 112 years, followed by the Kanvas, ending with Susharman."
                                          },
                                          details: `
                                            The text details the rise of the Andhra Satavahanas under King Simuka, recording their 456-year sovereignty across the Deccan and their maritime prosperity.
                                          `,
                                          keyAttributes: ["Chronicles the 10 Shungas and 4 Kanvas", "Detailed history of the 30 Andhra Satavahana monarchs", "Revived grand Vedic Ashvamedha rituals"],
                                          children: [
                                            {
                                              id: "vp-gupta-empire-golden-age",
                                              name: "The Imperial Gupta Dynasty (Vishnu Purana 4.24.63 • to 500 AD)",
                                              sanskrit: "गुप्त साम्राज्य (सुवर्णयुग • विष्णुपुराण ४.२४.६३)",
                                              title: "Rulers of Prayaga, Saketa & Magadha • Golden Age of Sanatan Dharma",
                                              category: "Gupta Empire (Amsa 4)",
                                              tradition: "Vishnu Purana",
                                              parent: "vp-shunga-kanva-andhra",
                                              parentName: "Shunga, Kanva & Andhra Dynasties",
                                              consort: "Empress Kumaradevi, Dattadevi, Dhruvadevi",
                                              vahana: "Garudadhvaja (Garuda Standard)",
                                              ayudha: "Ashvamedha Parakrama Sword & Golden Discus",
                                              color: "#FACC15",
                                              glowColor: "rgba(250, 204, 21, 0.95)",
                                              icon: "👑",
                                              summary: "Directly prophesied in Vishnu Purana 4.24.63. Chandragupta I, Samudragupta, and Vikramaditya brought ancient India to its zenith of Vaishnava devotion, Sanskrit literature, and Nalanda University through 500 AD.",
                                              shloka: {
                                                devanagari: "अनुगङ्गां प्रयागं च साकेतं मगधांस्तथा । एतान् जनपदान् सर्वान् भोक्ष्यन्ते गुप्तवंशजाः ॥",
                                                transliteration: "Anugaṅgāṁ prayāgaṁ ca sāketaṁ magadhāṁs tathā | Etān janapadān sarvān bhokṣyante gupta-vaṁśajāḥ ||",
                                                source: "Vishnu Purana 4.24.63",
                                                meaning: "Along the course of the holy Ganga, Prayaga, Saketa (Ayodhya), and Magadha—all these sacred realms shall be ruled by the monarchs of the Gupta Dynasty!"
                                              },
                                              details: `
                                                Verse 63 of Book 4 Chapter 24 stands as one of the most famous geographical and historical prophecies in ancient world literature.
                                                The Gupta emperors bore the title *Parama Bhagavata* (Supreme Devotees of Vishnu), struck gold coins with the Garudadhvaja standard, performed the Ashvamedha Yajna, founded Nalanda University, and protected Dharma through **c. 500 AD** under Skandagupta and Narasimhagupta Baladitya.
                                              `,
                                              keyAttributes: ["Exact canonical prophecy in Vishnu Purana 4.24.63", "Gupta sovereigns styled as 'Parama Bhagavata' (Devotees of Vishnu)", "Culmination of classical Indian culture, sciences, and art through 500 AD"],
                                              children: [
                {
                  id: "vp-yaduvamsha-bhati-jaisalmer",
                  name: "Yaduvamshi Bhati Dynasty of Jaisalmer to 2026",
                  sanskrit: "जैसलमेर भाटी यदुवंश (वज्रनाभ वंशज – ११५६ से २०२६ ईस्वी)",
                  title: "Continuous Descent from Sri Krishna & Vajranabha – Sovereign Protectors of the Thar",
                  category: "Living Lunar Dynasty",
                  tradition: "Vishnu Purana",
                  parent: "vp-gupta-empire-golden-age",
                  parentName: "The Imperial Gupta Dynasty (Vishnu Purana 4.24.63 – to 500 AD)",
                  consort: "Maharanis of Jaisalmer",
                  vahana: "Swarna Rath & Desert Camels",
                  ayudha: "Bhati Khanda & Silver Chhatra of Laxminath Ji",
                  color: "#FACC15",
                  glowColor: "rgba(250, 204, 21, 0.95)",
                  icon: "🏰",
                  summary: "Direct continuation of the Yaduvamsha detailed in Vishnu Purana Book 4. Tracing unbroken patrilineal descent from Lord Krishna's grandson Vajranabha. Maharawal Jaisal Singh built Sonar Qila in 1156 AD; represented in 2026 by 44th Maharawal Chaitanya Raj Singh.",
                  shloka: {
                    devanagari: "यदु-वंशो न नश्येत कदाचिदपि भूतले । कृष्णस्य कृपया नित्यं भाटी-रूपेण तिष्ठति ॥",
                    transliteration: "Yadu-vamsho na nashyeta kadacid api bhu-tale | Krishnasya kripaya nityam bhati-rupena tishthati ||",
                    source: "Jaisalmer Vamshavali & Trikuta Prashasti",
                    meaning: "The sacred Yadu Dynasty can never perish from this earth; by the eternal grace of Lord Krishna, it endures perpetually in the form of the glorious Bhati lineage of Jaisalmer."
                  },
                  details: `
                    The Vishnu Purana devotes major sections to the genealogies of Yadu and the pastimes of Krishna (Book 4 & 5):
                    - **Vajranabha to Modern Era:** After the Dvapara Yuga, Arjuna crowned Krishna's grandson Vajranabha as king of Mathura and Indraprastha. The lineage moved westward into the Punjab and Rajasthan, establishing the Bhati clan.
                    - **Maharawal Jaisal (1156 AD):** Founded Jaisalmer upon the advice of a hermit who revealed Lord Krishna's ancient prophecy that a descendant of the Yaduvamsha would build a capital upon Trikuta Hill.
                    - **Active in 2026:** Maharawal Chaitanya Raj Singh of Jaisalmer preserves this millennial heritage, serving as the head of the dynasty in 2026.
                  `,
                  keyAttributes: ["Continuous patrilineal descent from Lord Krishna and Vajranabha", "Fulfilled Krishna's prophecy on Trikuta Hill (Jaisalmer Fort, 1156 AD)", "Preserved living Yaduvamsha royal house into 2026"],
                  children: [
                    {
                      id: "vp-wodeyar-yaduvamsha-2026",
                      name: "Mysore Yaduvamsha Wodeyar Dynasty to 2026",
                      sanskrit: "मैसूर यदुवंश वडियार (द्वारका परंपरा – २०२६ ईस्वी पर्यन्त)",
                      title: "Patrons of Cheluvanarayana Swamy of Melkote & Sri Ranganatha Swamy – Living Yaduvamsha",
                      category: "Living Lunar Dynasty",
                      tradition: "Vishnu Purana",
                      parent: "vp-yaduvamsha-bhati-jaisalmer",
                      parentName: "Yaduvamshi Bhati Dynasty of Jaisalmer to 2026",
                      consort: "Maharanis of Mysore",
                      vahana: "Gandaberunda Royal Crest",
                      ayudha: "Khanda Sword & Mysore Dasara Royal Bow",
                      color: "#FACC15",
                      glowColor: "rgba(250, 204, 21, 1.0)",
                      icon: "🦚",
                      summary: "Founded in 1399 AD by Yaduraya, claiming direct Yaduvamsha lineage migrating from Dwarka. Supreme patrons of Sri Ranganathaswamy (Srirangapatna) and Cheluvanarayana Swamy (Melkote). Represented in 2026 by titular Maharaja Yaduveer Krishnadatta Chamaraja Wadiyar.",
                      shloka: {
                        devanagari: "द्वारकायाः समागत्य यदु-रायो महीपतिः । श्री-रङ्ग-भक्ति-सम्पन्नो वंशं चक्रे सनातनम् ॥",
                        transliteration: "Dvarakayah samagatya yadu-rayo mahipatih | Sri-ranga-bhakti-sampanno vamsam cakre sanatanam ||",
                        source: "Mysore Palace Royal Chronicle & Sritattvanidhi",
                        meaning: "Arriving from sacred Dwarka, King Yaduraya, endowed with supreme devotion to Lord Sri Ranganatha, established an eternal dynasty of the Yaduvamsha in the South."
                      },
                      details: `
                        The Wodeyars of Mysore are one of the most distinguished surviving Vaishnava royal families:
                        - **Vairamudi Festival:** The royal family personally presents the sacred diamond crown (*Vairamudi*) to Lord Cheluvanarayana Swamy at Melkote each year, a tradition dating back centuries.
                        - **Rajarshi Tradition:** Nalvadi Krishnaraja Wadiyar IV transformed Mysore into a modern economic powerhouse while funding Sanskrit gurukulas and temple conservations.
                        - **Living in 2026:** Yaduveer Wadiyar upholds the sacred Dasara rituals and temple traditions in 2026.
                      `,
                      keyAttributes: ["Yaduvamsha branch migrating from Dwarka to Karnataka in 1399 AD", "Hereditary patrons of Melkote and Srirangapatna Vaishnava sanctums", "Living titular royal head active in 2026"],
                      children: [
                        {
                          id: "vp-travancore-padmanabhadasa-2026",
                          name: "The Travancore Padmanabhadasas to 2026",
                          sanskrit: "त्रावणकोर पद्मनाभदास राजवंश (अनंतशयनम् – २०२६ ईस्वी पर्यन्त)",
                          title: "Perpetual Servants of Lord Padmanabha – Custodians of the Anantha Shayana Sanctum",
                          category: "Living Royal Lineage",
                          tradition: "Vishnu Purana",
                          parent: "vp-wodeyar-yaduvamsha-2026",
                          parentName: "Mysore Yaduvamsha Wodeyar Dynasty to 2026",
                          consort: "Maharanis of Travancore",
                          vahana: "Conch Standard (Valampuri Shankha)",
                          ayudha: "Royal Sword of Thrippadidanam & Tulabharam Scales",
                          color: "#FACC15",
                          glowColor: "rgba(250, 204, 21, 1.0)",
                          icon: "🐚",
                          summary: "Descendants of the Chera monarchs and Kulasekhara Alwar. In 1750 AD, Maharaja Marthanda Varma dedicated the entire kingdom to Lord Padmanabha, ruling only as his servant (Padmanabhadasa). Custodians of the world's most sacred and wealthy temple vault, led in 2026 by Sree Moolam Thirunal Rama Varma.",
                          shloka: {
                            devanagari: "अनन्त-शयने शान्ते पद्मनाभे परात्मनि । समर्पयामि राज्यं मे दासोऽहं तव शाश्वतः ॥",
                            transliteration: "Ananta-shayane sante padmanabhe paratmani | Samarpayami Rajyam me daso'ham tava sasvatah ||",
                            source: "Sree Padmanabhaswamy Temple Epigraph (1750 AD)",
                            meaning: "Unto Lord Padmanabha, the Supreme Soul resting serenely upon the serpent Ananta, I surrender my entire kingdom; I remain Your humble and eternal servant forever."
                          },
                          details: `
                            The Travancore royal house is the epitome of Vaishnava devotion and sovereign surrender:
                            - **Thrippadidanam Charter:** On January 3, 1750, Maharaja Marthanda Varma surrendered his kingdom and royal sword to Lord Padmanabha, instituting the title *Sree Padmanabhadasa*.
                            - **Sacred Vaults:** The underground chambers (Kallaras) preserve centuries of consecrated offerings, making it the richest sacred treasury in the world.
                            - **Supreme Court of India Ruling:** In 2020, the Supreme Court affirmed the hereditary rights of the Travancore family as *Shebait* (trustee). Sree Moolam Thirunal Rama Varma actively discharges these duties daily in 2026.
                          `,
                          keyAttributes: ["Dedicated sovereignty to Lord Padmanabha (1750 AD)", "Hereditary Shebait affirmed by the Supreme Court of India", "Unbroken living Vaishnava royal trusteeship active in 2026"],
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]

                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 8: THE 10 COSMIC AVATARS OF VISHNU (DASHAVATARA)
       ---------------------------------------------------------------------- */
    {
      id: "vp-dashavatara",
      name: "The 10 Cosmic Avatars (Dashavatara of Vishnu Purana)",
      sanskrit: "दशावतार (विष्णोः दश मुख्यावताराः)",
      title: "The Ten Primary Descents Restoring Universal Balance across Yugas",
      category: "Mahavataras",
      tradition: "Vishnu Purana",
      parent: "vp-narayana",
      parentName: "Lord Maha-Vishnu",
      consort: "Lakshmi Descents",
      vahana: "Garuda / Divine Chariot",
      ayudha: "Sudarshana Chakra, Sharnga Bow, Nandaka Sword",
      color: "#0284C7",
      glowColor: "rgba(2, 132, 199, 0.85)",
      icon: "🏹",
      summary: "Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Sri Rama, Balarama, Sri Krishna, and Kalki.",
      shloka: {
        devanagari: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत । अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम् । धर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥",
        transliteration: "Yadā yadā hi dharmasya glānir bhavati bhārata |\nParitrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām | Dharma-saṁsthāpanārthāya sambhavāmi yuge yuge ||",
        source: "Bhagavad Gita 4.7-8 & Vishnu Purana",
        meaning: "Whenever there is a decline in righteousness and rise of unrighteousness, I manifest Myself. For the protection of the good, destruction of the wicked, and re-establishment of Dharma, I appear millenium after millenium."
      },
      details: `
        Across the six books of the Vishnu Purana, Sage Parashara describes the theological reality of divine incarnation:
        Vishnu's descents are expressions of His sovereign compassion (*Karuna*) to maintain cosmic order (*Rta*) and grant spiritual shelter to humanity.
      `,
      keyAttributes: [
        "Infallible descents for the restoration of Dharma",
        "Chronological unfolding of spiritual consciousness",
        "Synthesized in Books 1, 4, and 5 of the Vishnu Purana"
      ],
      children: [
        {
          id: "vp-matsya-kurma-varaha",
          name: "Cosmic Protectors (Matsya, Kurma, Varaha)",
          sanskrit: "मत्स्य, कूर्म एवं वराह अवतार",
          title: "The Primordial Aquatic & Terrestrial Saviors",
          category: "Mahavatara",
          tradition: "Vishnu Purana",
          parent: "vp-dashavatara",
          parentName: "The 10 Cosmic Avatars",
          consort: "Lakshmi & Bhumi Devi",
          vahana: "Cosmic Ocean & Shell",
          ayudha: "Horns of Dharma, Carapace, Tusks",
          color: "#0D9488",
          glowColor: "rgba(13, 148, 136, 0.8)",
          icon: "🐟",
          summary: "Matsya saved the Vedas in the deluge; Kurma supported Mount Mandara during Samudra Manthana; Varaha lifted Earth from the cosmic abyss.",
          shloka: {
            devanagari: "जलचररूपधरो भगवान् पृथिवीं समुद्धरन् । मन्दरधारको वेदपालकश्च जयत्यसौ ॥",
            transliteration: "Jalacara-rūpa-dharo bhagavān pṛthivīṁ samuddharan | Mandara-dhārako veda-pālakaś ca jayaty asau ||",
            source: "Vishnu Purana Stotra",
            meaning: "Assuming aquatic and terrestrial forms, upholding the earth, bearing Mount Mandara, and protecting the Vedas, all glory to Him!"
          },
          details: `
            Books 1 and 4 recount how Matsya saved King Satyavrata; Kurma served as the immovable pivot of Samudra Manthana; and Varaha slew Hiranyaksha and restored the planetary orbit of Bhumi Devi.
          `,
          keyAttributes: ["Protectors against cosmic deluges and demons", "Foundations of physical creation", "Direct manifestations of divine intervention"],
          children: []
        },
        {
          id: "vp-narasimha-vamana",
          name: "Protectors of Devotion (Narasimha & Vamana)",
          sanskrit: "नरसिंह एवं वामन अवतार",
          title: "The Pillar-Born Slayer of Tyranny & The Cosmic Measurer",
          category: "Mahavatara",
          tradition: "Vishnu Purana",
          parent: "vp-dashavatara",
          parentName: "The 10 Cosmic Avatars",
          consort: "Chenchu Lakshmi & Lakshmi",
          vahana: "Omnipresent Radiance",
          ayudha: "Adamantine Claws, Kamandalu, Three Paces",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.85)",
          icon: "🦁",
          summary: "Narasimha burst from a pillar to protect young Prahlada; Vamana expanded as Trivikrama to span the universe in three paces, elevating Bali.",
          shloka: {
            devanagari: "नरसिंहोऽथ वामनो बलेर्मर्दनकारकः । प्रह्लादवरदो देवः सर्वलोकैकवन्दितः ॥",
            transliteration: "Narasiṁho'tha vāmano baler mardana-kārakaḥ | Prahlāda-varado devaḥ sarva-lokaika-vanditaḥ ||",
            source: "Vishnu Purana",
            meaning: "Narasimha and Vamana, subduer of Bali's pride, granter of boons to Prahlada, worshipped across all worlds."
          },
          details: `
            These two descents prove that the Divine will transcend all physical laws to protect innocent faith and reward genuine humility.
          `,
          keyAttributes: ["Protection of Prahlada and Bali", "Burst from the stone pillar", "Trivikrama cosmic form spanning all realms"],
          children: []
        },
        {
          id: "vp-parashurama-rama-kalki",
          name: "Warrior, King & Future Purifier (Parashurama, Rama, Kalki)",
          sanskrit: "परशुराम, श्रीराम एवं कल्कि अवतार",
          title: "The Moral Exemplars, Kings & Future Restorer of Satya Yuga",
          category: "Mahavatara",
          tradition: "Vishnu Purana",
          parent: "vp-dashavatara",
          parentName: "The 10 Cosmic Avatars",
          consort: "Dharani, Sita Devi, Padma",
          vahana: "Royal Chariot, Devadatta (White Horse)",
          ayudha: "Parashu (Axe), Kodanda Bow, Ratnamala Blazing Sword",
          color: "#3B82F6",
          glowColor: "rgba(59, 130, 246, 0.85)",
          icon: "🐎",
          summary: "Parashurama cleansed the earth of despots; Rama demonstrated ideal virtue; Kalki will manifest at Kaliyuga's end to renew creation.",
          shloka: {
            devanagari: "रामो रामश्च कृष्णश्च कल्किश्च कलिनाशनः । एते नारायणांशाश्च पूर्णरूपाः प्रकीर्तिताः ॥",
            transliteration: "Rāmo rāmaś ca kṛṣṇaś ca kalkiś ca kali-nāśanaḥ | Ete nārāyaṇāṁśāś ca pūrṇa-rūpāḥ prakīrtitāḥ ||",
            source: "Vishnu Purana 4.4",
            meaning: "Parashurama, Sri Rama, Sri Krishna, and Kalki the destroyer of Kaliyuga's darkness—these manifestations of Narayana are glorified as complete in power."
          },
          details: `
            In Book 6, Parashara prophesies the descent of Kalki in the village of Shambhala, riding the white steed Devadatta with a blazing sword to destroy evil and usher in the golden age of Satya Yuga.
          `,
          keyAttributes: [
            "Parashurama: Immortal master of weapons",
            "Sri Rama: King of Dharma and Maryada",
            "Kalki: Future inaugurator of Satya Yuga"
          ],
          children: []
        }
      ]
    }
  ]
};

/* ==========================================================================
   3. SHIVA PURANA TRADITION (Shaiva Cosmogony - Sadashiva as Supreme Root)
   Comprehensive, Authentic Scriptural Genealogy from the 7 Samhitas
   ========================================================================== */
const SHIVA_PURANA_DATA = {
  id: "sp-sadashiva",
  name: "Lord Paramashiva (Sadashiva / Sarveshvara)",
  sanskrit: "भगवान् परमशिव (सदाशिव / सर्वेश्वर)",
  title: "The Supreme Non-Dual Reality & Fountainhead of Existence",
  category: "Supreme Root (Shiva Purana)",
  tradition: "Shiva Purana",
  parent: null,
  parentName: "Nishkala Shiva (Self-Existent, Transcendent)",
  consort: "Adi Parashakti (Goddess Ambika / Shivaa)",
  vahana: "Nandi (The Sacred Bull)",
  ayudha: "Trishula, Damaru, Pinaka Bow, Agni, Crescent Moon",
  color: "#38BDF8",
  glowColor: "rgba(56, 189, 248, 0.85)",
  icon: "🔱",
  summary: "In the Shiva Purana, Sadashiva and Ambika emanate Vishnu from Shiva's left side and Brahma from His right side, revealing the infinite Jyotirlinga.",
  shloka: {
    devanagari: "शिवः परमकल्याणः सर्वज्ञः सर्वगोऽव्ययः । स एव भगवान् शम्भुः सृष्टिस्थित्यन्तकारणम् ॥\nवामाङ्गादसृजद् विष्णुं दक्षिणाङ्गाच्च मां प्रभुः । हृदयेन तथा रुद्रं सर्वेश्वरसदाशिवः ॥",
    transliteration: "Śivaḥ parama-kalyāṇaḥ sarvajñaḥ sarvago'vyayaḥ | Sa eva bhagavān śambhuḥ sṛṣṭi-sthity-anta-kāraṇam ||\nVāmāṅgād asṛjad viṣṇuṁ dakṣiṇāṅgāc ca māṁ prabhuḥ | Hṛdayena tathā rudraṁ sarveśvara-sadāśivaḥ ||",
    source: "Shiva Purana (Vāyavīya Saṁhitā & Rudra Saṁhitā 1.9)",
    meaning: "Lord Shiva is all-auspicious, omniscient, omnipresent, and immutable; He is the sole cause of creation, preservation, and dissolution. From His left limb the Lord created Vishnu, from His right limb He created me (Brahma), and from His heart manifested Rudra."
  },
  details: `
    The **Shiva Purana** (*Vidyeshvara Samhita* & *Rudra Samhita*) reveals that Lord Sadashiva is the unconditioned Supreme (*Nishkala Shiva*). For the sake of divine sport (*Lila*), He manifests as **Sakala Shiva** along with **Adi Parashakti Ambika**.
    <br><br>
    To govern the cosmos:
    • From His left side He created **Lord Vishnu**, granting Him the *Sudarshana Chakra* to protect the worlds.
    • From His right side He created **Lord Brahma**, commanding Him to project forms.
    • To resolve their dispute over supremacy, Shiva manifested as the beginningless, endless pillar of cosmic fire: the **Jyotirlinga**.
    • In creation, Shiva then descends as **Rudra** from between Brahma's eyebrows, and as the beloved Lord of Mount Kailasha with **Parvati**.
  `,
  keyAttributes: [
    "Supreme Creator of both Vishnu and Brahma in Shiva Purana",
    "Origin of the Infinite Pillar of Fire (Jyotirlinga)",
    "Father of Ganesha, Kartikeya, Ashokasundari, and Ayyappa",
    "Manifestor of the 12 Sacred Jyotirlingas across Bharatavarsha"
  ],
  children: [
    /* ======================================================================
       BRANCH 1: THE 12 SACRED JYOTIRLINGAS (Complete Individual Origins)
       Kotirudra Samhita Chapters 1 to 42
       ====================================================================== */
    {
      id: "sp-jyotirlingas",
      name: "The 12 Sacred Jyotirlingas",
      sanskrit: "द्वादश ज्योतिर्लिङ्गानि (कोटिरुद्रसंहिता)",
      title: "The Infinite Pillars of Radiant Cosmic Light & Salvation",
      category: "Divine Jyotirlinga Pillars",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva",
      consort: "Parashakti (The Eternal Adharashila)",
      vahana: "Infinite Space & Cosmic Prana",
      ayudha: "Infinite Tejas (Blaze of Eternal Light)",
      color: "#FACC15",
      glowColor: "rgba(250, 204, 21, 0.85)",
      icon: "🪔",
      summary: "The 12 self-manifested (Svayambhu) pillars of fire where Sadashiva pierced through the earth across sacred Bharatavarsha, granting immediate liberation.",
      shloka: {
        devanagari: "सौराष्ट्रे सोमनाथं च श्रीशैले मल्लिकार्जुनम् । उज्जयिन्यां महाकालमोङ्कारममलेश्वरम् ॥\nपरल्यां वैद्यनाथं च डाकिन्यां भीमशङ्करम् । सेतुबन्धे तु रामेशं नागेशं दारुकावने ॥\nवाराणस्यां तु विश्वेशं त्र्यम्बकं गौतमीतटे । हिमालये तु केदारं घुश्मेशं च शिवालये ॥",
        transliteration: "Saurāṣṭre somanāthaṁ ca śrī-śaile mallikārjunam | Ujjayinyāṁ mahākālam oṅkāram amaleśvaram ||\nParalyāṁ vaidyanāthaṁ ca ḍākinyāṁ bhīmaśaṅkaram | Setubandhe tu rāmeśaṁ nāgeśaṁ dārukāvane ||\nVārāṇasyāṁ tu viśveśaṁ tryambakaṁ gautamī-taṭe | Himālaye tu kedāraṁ ghuśmeśaṁ ca śivālaye ||",
        source: "Shiva Purana (Kotirudra Samhita 1.21-24)",
        meaning: "Somnath in Saurashtra, Mallikarjuna on Srisailam, Mahakal in Ujjain, Omkareshwar on the Narmada, Vaidyanath in Parali/Deoghar, Bhimashankar in Dakini, Rameshwaram at Setubandha, Nageshwar in Darukavana, Vishwanath in Varanasi, Trimbakeshwar at the Godavari, Kedarnath in the Himalayas, and Ghushmeshwar at Shivalaya."
      },
      details: `According to the *Kotirudra Samhita* of Shiva Purana, reciting the names and origins of these 12 Jyotirlingas upon waking purifies all accumulated karmas and bestows the fruit of all pilgrimages and spiritual realization.`,
      keyAttributes: [
        "12 Self-manifested Svayambhu pillars of cosmic fire",
        "Sacred geography uniting North, South, East, and West of India",
        "Confer immediate freedom from the cycle of rebirth"
      ],
      children: [
        {
          id: "sp-jyoti-somnath",
          name: "1. Lord Somnath (The Adya Jyotirlinga)",
          sanskrit: "श्री सोमनाथ ज्योतिर्लिङ्ग (प्रभास पाटन, सौराष्ट्र, गुजरात)",
          title: "The First Pillar • Liberator of Chandra (The Moon)",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Chandrabhaga / Gauri",
          vahana: "Prabhas Sea & The Crescent Moon",
          ayudha: "Amrita Kalasha & Chandra-Mauli",
          color: "#FACC15",
          glowColor: "rgba(250, 204, 21, 0.85)",
          icon: "🌙",
          summary: "Origin: Chandra was cursed with consumption by King Daksha for favoring Rohini; he bathed at Triveni Sangam and worshipped Shiva for six months. Shiva restored his luster and placed him on His locks.",
          shloka: {
            devanagari: "चन्द्रस्य रक्षणार्थाय स्वयं शम्भुः सदाशिवः । सोमनाथेति विख्यातो ज्योतिर्लिङ्गोऽभवत्तदा ॥",
            transliteration: "Candrasya rakṣaṇārthāya svayaṁ śambhuḥ sadāśivaḥ | Somanātheti vikhyāto jyotirliṅgo'bhavat tadā ||",
            source: "Shiva Purana (Kotirudra Samhita 14.41)",
            meaning: "To protect the Moon-God Chandra, Lord Sadashiva Sambhu Himself manifested as the luminous Jyotirlinga celebrated throughout all worlds as Somnath."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            King Daksha married his 27 daughters (the Nakshatras) to Chandra (the Moon God). When Chandra showed exclusive affection to Rohini, the other sisters complained to Daksha, who cursed Chandra to suffer from consumption (*Kshaya Roga*), causing him to lose his life-giving rays.<br>
            The cosmos fell into distress without cooling moonlight. On Brahma's advice, Chandra went to the holy **Prabhas Kshetra** at the confluence of Hiran, Kapila, and Saraswati rivers. Chandra performed severe Tapasya, chanting the Maha Mrityunjaya Mantra.<br>
            Lord Shiva appeared in effulgent glory and granted Chandra the blessing that in the dark fortnight (*Krishna Paksha*) he would wane, and in the bright fortnight (*Shukla Paksha*) he would wax to full brilliance, establishing cosmic equilibrium. Shiva then took permanent residence as **Somnath** ("Lord of the Moon").
          `,
          keyAttributes: ["First of the 12 Jyotirlingas (Adya)", "Prabhas Patan on the Arabian Sea", "Origin of Shukla & Krishna Pakshas", "Sanctified by Brahma and Chandra"],
          children: []
        },
        {
          id: "sp-jyoti-mallikarjuna",
          name: "2. Lord Mallikarjuna (Srisailam)",
          sanskrit: "श्री मल्लिकार्जुन ज्योतिर्लिङ्ग (श्रीशैल पर्वत, आन्ध्र प्रदेश)",
          title: "Kailasha of the South • Re-unification with Kartikeya",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Bhramaramba Devi (Shakti Peetha)",
          vahana: "Krishna River & Srisailam Range",
          ayudha: "Jasmine-Garlanded Trishula",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.85)",
          icon: "🏔️",
          summary: "Origin: When Kartikeya secluded himself on Mount Krouncha after Ganesha's marriage, grieving Shiva and Parvati visited him; Shiva manifested as Arjuna and Parvati as Mallika (jasmine) to dwell near their son.",
          shloka: {
            devanagari: "मल्लिका पार्वती ज्ञेया चार्जुनः शंकरः स्मृतः । तयोः सन्निधानात्तत् मल्लिकार्जुनमुच्यते ॥",
            transliteration: "Mallikā pārvatī jñeyā cārjunaḥ śaṅkaraḥ smṛtaḥ | Tayoḥ sannidhānāt tat mallikārjunam ucyate ||",
            source: "Shiva Purana (Kotirudra Samhita 15.65)",
            meaning: "Mallika is understood as Goddess Parvati, and Arjuna is known as Lord Shankara; by their perpetual divine union at Srisailam, the holy lingam is named Mallikarjuna."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            When Shiva and Parvati decided to marry their sons, they decreed that whoever circumambulated the earth first would marry first. Kartikeya dashed on his peacock, but Ganesha reverently circumambulated his parents, declaring them the entire universe, and was wedded to Riddhi and Siddhi.<br>
            Returning and feeling deceived, Kartikeya renounced Kailasha and retreated south to **Mount Krouncha**. Heartbroken, Mother Parvati asked Shiva to follow. To watch over Kartikeya without disturbing his vow of solitude, Shiva manifested as **Arjuna** (pure white radiance) and Parvati manifested as **Mallika** (jasmine flowers).<br>
            On every Amavasya, Shiva visits Kartikeya, and on every Pournami, Parvati visits. Srisailam is also sacred as one of the 18 Maha Shakti Peethas of **Bhramaramba Devi**.
          `,
          keyAttributes: ["Kailasha of South India", "Co-located with Bhramaramba Shakti Peetha", "Origin of Shiva as Arjuna and Parvati as Mallika", "Srisailam on the Krishna River"],
          children: []
        },
        {
          id: "sp-jyoti-mahakaleshwar",
          name: "3. Lord Mahakaleshwar (Ujjayini)",
          sanskrit: "श्री महाकालेश्वर ज्योतिर्लिङ्ग (उज्जयिनी / अवन्तिका, मध्य प्रदेश)",
          title: "Sovereign of Eternity • Destroyer of Demon Dushana",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Mahakali / Avantika",
          vahana: "Shipra River & Cosmic Kala (Time)",
          ayudha: "Khatvanga & Flaming Trishula",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.85)",
          icon: "⏳",
          summary: "Origin: When demon Dushana attacked sacred Avanti and attempted to kill the pious Brahmin Chandrasena during Shiva puja, Shiva broke through the earth as Mahakala and incinerated the demon with a single roar.",
          shloka: {
            devanagari: "हुंकारेणैव तं भस्म दूषणं च चकार ह । महाकालोऽभवच्छम्भुः सर्वसत्त्वहिते रतः ॥",
            transliteration: "Huṅkāreṇaiva taṁ bhasma dūṣaṇaṁ ca cakāra ha | Mahākālo'bhavac chambhuḥ sarva-sattva-hite rataḥ ||",
            source: "Shiva Purana (Kotirudra Samhita 16.36)",
            meaning: "With a single thunderous roar of 'Hum!', Lord Shiva reduced the demon Dushana to ashes, and manifested as Mahakala for the protection of all righteous beings."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            In ancient **Avanti (Ujjain)**, a saintly Brahmin named Chandrasena and his four sons were steadfast devotees of Shiva. The demon Dushana, blessed with invincibility by Brahma, invaded Ujjain with a massive demon horde to destroy Vedic sacrifices.<br>
            Surrounding the Brahmins as they meditated on the Shiva Linga, Dushana raised his sword to kill them. At that very instant, the earth split open and Lord Shiva erupted as **Mahakala**—the personification of all-consuming Time.<br>
            With a single thunderous sound of *'HUM'*, Dushana and his demonic army were instantly incinerated into ash (*Bhasma*). At the prayer of the devotees, Shiva agreed to dwell eternally in Ujjain as the unique **Dakshinabhimukhi** (south-facing) Jyotirlinga, ensuring that no devotee of Mahakaleshwar will ever fear premature death (*Akaala Mrityu*).
          `,
          keyAttributes: ["Only South-facing (Dakshinabhimukhi) Jyotirlinga", "Master of Death and Time (Kala)", "Bhasma Aarti with sacred ash", "Avanti / Ujjain on River Shipra"],
          children: []
        },
        {
          id: "sp-jyoti-omkareshwar",
          name: "4. Lord Omkareshwar & Mamleshwar",
          sanskrit: "श्री ॐकारेश्वर एवं ममलेश्वर (मान्धाता द्वीप, नर्मदा, मध्य प्रदेश)",
          title: "The Primordial Pranava • Divider of the Sacred Lingam",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Annapurna & Narmada Devi",
          vahana: "Narmada River & Sacred Meru",
          ayudha: "Pranava Omkara Sound-Body",
          color: "#F97316",
          glowColor: "rgba(249, 115, 22, 0.85)",
          icon: "🕉️",
          summary: "Origin: When Vindhya Mountain prayed to surpass Meru, Shiva manifested on the sacred island naturally shaped like the Omkara (ॐ) and divided Himself into two: Omkareshwar and Mamleshwar, blessing King Mandhata.",
          shloka: {
            devanagari: "एकीभूतं पुनर्लिङ्गमोंकारेश्वरसंज्ञकम् । द्विधा जातं स्वरूपेण पार्थिवेन पृथक् पृथक् ॥",
            transliteration: "Ekī-bhūtaṁ punar liṅgam oṅkāreśvara-saṁjñakam | Dvidhā jātaṁ sva-rūpeṇa pārthivena pṛthak pṛthak ||",
            source: "Shiva Purana (Kotirudra Samhita 18.43)",
            meaning: "The one original luminous lingam known as Omkareshwar manifested in two divine forms: one as Omkareshwar on Mandhata island, and the other as Mamleshwar on the holy bank of the Narmada."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            Sage Narada once visited **Vindhya Mountain** and casually remarked that Mount Meru was superior because it was honoured by the gods. Vindhya felt sorrowful and undertook severe penance on the banks of the sacred Narmada, fashioning an earthen Parthiva Linga and meditating for six months.<br>
            Lord Shiva appeared in transcendental form to grant Vindhya wisdom and spiritual elevation. At the heartfelt request of Vindhya and the Devas, Shiva divided the divine Linga into two parts: **Omkareshwar** (situated on the island of Mandhata, naturally contoured in the geographical shape of the sacred Devanagari ॐ syllable) and **Mamleshwar / Amareshwar** (on the southern mainland bank of Narmada).<br>
            Pilgrims complete their sacred worship only after visiting both unified temples.
          `,
          keyAttributes: ["Island shaped naturally as the Omkara (ॐ)", "Dual unified Jyotirlinga shrines", "Blessed Vindhya Mountain and King Mandhata", "Sacred Narmada River Parikrama"],
          children: []
        },
        {
          id: "sp-jyoti-kedarnath",
          name: "5. Lord Kedarnath (Himalayas)",
          sanskrit: "श्री केदारनाथ ज्योतिर्लिङ्ग (रुद्रप्रयाग, गढ़वाल हिमालय, उत्तराखण्ड)",
          title: "The Himalayan Apex • Anchor of Nara-Narayana & Pandavas",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Kedar-Gauri",
          vahana: "The Celestial Bull & Mandakini River",
          ayudha: "Hump of Divine Bull & Trishula",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.9)",
          icon: "❄️",
          summary: "Origin: Sages Nara and Narayana worshipped a clay linga for centuries at Badrikashrama; later, the Pandavas sought redemption here for war sins where Shiva tested them as a bull whose hump anchored at Kedar.",
          shloka: {
            devanagari: "नरनारायणौ तौ तु तपस्तप्त्वा सुदारुणम् । प्रार्थयामासतुः शम्भुं सर्वलोकहितैषिणौ ॥",
            transliteration: "Nara-nārāyaṇau tau tu tapas taptvā sudāruṇam | Prārthayāmāsatuḥ śambhuṁ sarva-loka-hitaiṣiṇau ||",
            source: "Shiva Purana (Kotirudra Samhita 19.16)",
            meaning: "The twin sages Nara and Narayana performed austere penance, praying to Lord Sambhu for the supreme spiritual welfare of all living beings in the world."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            In the remote high Himalayas at **Badrikashrama / Kedar**, the twin divine sages **Nara and Narayana** (emanations of Lord Vishnu) fashioned an earthen Linga and engaged in thousands of years of Tapasya. Pleased by their selfless devotion, Shiva appeared and granted their wish to dwell permanently in the eternal snows as **Kedarnath**.<br>
            Ages later, after the Mahabharata war, the **Pandavas** sought Shiva to atone for the sins of slaying their kin. Shiva tested their resolve by fleeing in the form of a celestial bull (*Mahisha*). When Bhima recognized Him and attempted to hold the bull, Shiva dived into the earth; His hump remained at Kedarnath, while the arms appeared at Tungnath, face at Rudranath, hair at Kalpeshwar, and navel at Madhyamaheshwar, creating the sacred **Panch Kedar**.
          `,
          keyAttributes: ["Highest of the 12 Jyotirlingas (3,583m)", "Source of the sacred Mandakini River", "Sanctified by Nara-Narayana and the Pandavas", "Panch Kedar central pilgrimage"],
          children: []
        },
        {
          id: "sp-jyoti-bhimashankar",
          name: "6. Lord Bhimashankar (Dakini)",
          sanskrit: "श्री भीमाशङ्कर ज्योतिर्लिङ्ग (डाकिनी वन, भीमा नदी, महाराष्ट्र)",
          title: "Slayer of Demon Bhima • Protector of Saintly Devotees",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Kamalaja Devi",
          vahana: "Bhima River & Sahyadri Rainforests",
          ayudha: "Pinaka Bow & Blazing Trishula",
          color: "#10B981",
          glowColor: "rgba(16, 185, 129, 0.85)",
          icon: "⚡",
          summary: "Origin: Demon Bhima (son of Kumbhakarna) conquered the three worlds and imprisoned King Kamrupeshwar; when he swung his sword to shatter the King's Shiva Linga, Shiva burst forth and incinerated the demon.",
          shloka: {
            devanagari: "लिङ्गात्प्रादुर्वभूवाशु पिनाकी शूलधृक् हरः । जघान तं क्षणाद् भीमं लोकत्राणाय शङ्करः ॥",
            transliteration: "Liṅgāt prādur-babhūvāśu pinākī śūla-dhṛk haraḥ | Jaghāna taṁ kṣaṇād bhīmaṁ loka-trāṇāya śaṅkaraḥ ||",
            source: "Shiva Purana (Kotirudra Samhita 20.35)",
            meaning: "From the sacred Lingam, Lord Hara instantly burst forth wielding the Pinaka bow and trident, destroying the demon Bhima in an instant for the deliverance of all worlds."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            The demon **Bhima**, born to Kumbhakarna and the demoness Karkati in the dense **Dakini forest**, learned that Rama had slain his father. Filled with rage, he performed severe penance to Brahma, received boons of formidable strength, conquered the heavens, and dethroned Indra.<br>
            Bhima then invaded the kingdom of Kamarupa, imprisoning the pious Shiva-devotee King **Kamrupeshwar**. In the dungeon, the King sculpted an earthen Shiva Linga and absorbed himself in the Panchakshari Mantra. When Bhima raised his sword to strike down the King and smash the Linga, Lord Shiva burst out of the Linga with a blinding flash of cosmic light.<br>
            With His Pinaka bow and Trishula, Shiva incinerated Bhima into ashes. The sweat of Shiva during this fierce cosmic duel flowed down the Sahyadri mountains as the sacred **Bhima River**.
          `,
          keyAttributes: ["Source of the holy Bhima River", "Dakini region in the Sahyadri Western Ghats", "Demon Bhima slain to protect Kamrupeshwar", "Dense sacred biodiversity grove"],
          children: []
        },
        {
          id: "sp-jyoti-kashi-vishwanath",
          name: "7. Lord Kashi Vishwanath (Varanasi)",
          sanskrit: "श्री काशी विश्वनाथ ज्योतिर्लिङ्ग (आनन्दवन, वाराणसी, उत्तर प्रदेश)",
          title: "Lord of the Universe • Giver of Taraka Mantra & Moksha",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Annapurna & Vishalakshi",
          vahana: "Holy Ganga River & Trishula Tip",
          ayudha: "Taraka Mantra & Trishula",
          color: "#FACC15",
          glowColor: "rgba(250, 204, 21, 0.9)",
          icon: "🔱",
          summary: "Origin: The primordial Anandavana created before time; during cosmic dissolution (Mahapralaya), Shiva holds Kashi aloft on the tip of His trident. The infinite column of fire pierced here, granting instant liberation.",
          shloka: {
            devanagari: "वाराणसी पुरे रम्ये विश्वेशोऽहं प्रतिष्ठितः । मुक्तिदोऽहं नराणां च जन्तूनां च विशेषतः ॥",
            transliteration: "Vārāṇasī-pure ramye viśveśo'haṁ pratiṣṭhitaḥ | Mukti-do'haṁ narāṇāṁ ca jantūnāṁ ca viśeṣataḥ ||",
            source: "Shiva Purana (Kotirudra Samhita 22.38)",
            meaning: "In the delightful sacred city of Varanasi, I dwell eternally as Vishveshwara; I bestow absolute liberation (Mukti) unto all humans and every living creature departing their bodies here."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            Before the manifestation of the cosmos, Lord Sadashiva and Goddess Ambika created **Anandavana** (the Forest of Bliss) as their permanent spiritual playground. Here, Shiva manifested Vishnu and Brahma to carry out creation and preservation.<br>
            When Brahma and Vishnu disputed who was supreme, the **primordial Jyotirlinga**—the infinite, unmeasurable column of blazing fire—erupted through the heart of Kashi. Neither Brahma flying upwards as a swan nor Vishnu digging downwards as a boar could find its end.<br>
            Shiva declared that Kashi never touches the earth: during **Mahapralaya**, when the universe drowns in cosmic deluge, Shiva holds Kashi aloft safely upon the tip of His **Trishula**. Dying in Kashi guarantees liberation, as Shiva Himself whispers the liberating **Taraka Mantra** (*Rama Nama*) into the ear of departing souls.
          `,
          keyAttributes: ["Center of the Primordial Pillar of Fire", "Held aloft on Shiva's Trishula in Mahapralaya", "Bestowal of Taraka Mantra for instant Moksha", "Sacred Ganga Ghats of Varanasi"],
          children: []
        },
        {
          id: "sp-jyoti-trimbakeshwar",
          name: "8. Lord Trimbakeshwar (Brahmagiri)",
          sanskrit: "श्री त्र्यम्बकेश्वर ज्योतिर्लिङ्ग (ब्रह्मगिरि पर्वत, नासिक, महाराष्ट्र)",
          title: "The Three-Faced Supreme • Source of the Holy Godavari",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Kolambika & Gautami Ganga",
          vahana: "Brahmagiri Hills & Godavari River",
          ayudha: "Three Faces (Brahma, Vishnu, Rudra)",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.85)",
          icon: "🌊",
          summary: "Origin: Sage Gautama performed penance after being falsely accused of cow-killing by jealous sages; Shiva appeared, released Ganga as the Godavari River to wash away all sin, and remained as the unique three-faced lingam.",
          shloka: {
            devanagari: "गौतमी तत्र पुण्या च त्र्यम्बकश्च सदाशिवः । दृश्यते सर्वपापघ्नो भुक्तिमुक्तिप्रदायकः ॥",
            transliteration: "Gautamī tatra puṇyā ca tryambakaś ca sadāśivaḥ | Dṛśyate sarva-pāpaghno bhukti-mukti-pradāyakaḥ ||",
            source: "Shiva Purana (Kotirudra Samhita 27.28)",
            meaning: "There flows the holy river Gautami (Godavari), and there abides Lord Tryambaka Sadashiva, destroying all sins and bestowing both worldly fulfillment and eternal liberation."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            During a catastrophic 24-year drought on earth, **Sage Gautama** engaged in severe Tapasya at Mount Brahmagiri. Pleased, Varuna granted him an inexhaustible grain store that fed all sages, humans, and animals.<br>
            Jealous of Gautama's glory, ungrateful sages magically fashioned an illusionary cow that wandered into Gautama's barley patch; when Gautama gently touched it with a blade of grass to guide it away, it fell dead. To atone for the apparent sin of *Go-hatya*, Gautama performed intense penance to Shiva.<br>
            Pleased, Shiva revealed the plot, absolved Gautama, and released the holy **Ganga** from His matted locks down Mount Brahmagiri, creating the sacred **Godavari River** (also called Gautami). Shiva consented to dwell there as **Trimbakeshwar**, whose unique hollow lingam enshrines three thumb-sized murtis of the **Trimurti: Brahma, Vishnu, and Rudra**.
          `,
          keyAttributes: ["Unique three-faced Lingam (Brahma, Vishnu, Rudra)", "Origin of the sacred Godavari River", "Absolution of Sage Gautama", "Brahmagiri mountain in Nashik"],
          children: []
        },
        {
          id: "sp-jyoti-vaidyanath",
          name: "9. Lord Vaidyanath (Baidyanath Dham)",
          sanskrit: "श्री वैद्यनाथ ज्योतिर्लिङ्ग (देवघर, झारखण्ड / परळी, महाराष्ट्र)",
          title: "The Divine Physician • The Kamana Lingam of Ravana",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Jaya Durga / Parvati",
          vahana: "Vaidyanath Dham & Deoghar Hills",
          ayudha: "Kamana Lingam of Infinite Boons",
          color: "#10B981",
          glowColor: "rgba(16, 185, 129, 0.85)",
          icon: "🌿",
          summary: "Origin: Ravana severed nine of his heads as sacrificial offerings to Shiva; Shiva manifested as the supreme divine doctor (Vaidya), healed his wounds, restored his ten heads, and granted the Kamana Lingam.",
          shloka: {
            devanagari: "वैद्यनाथेन वै नाम्ना ख्यातो लोकेषु शंकरः । तद्दर्शनान्महापापी मुच्यते सर्वकिल्बिषैः ॥",
            transliteration: "Vaidyanāthena vai nāmnā khyāto lokeṣu śaṅkaraḥ | Tad-darśanān mahā-pāpī mucyate sarva-kilbiṣaiḥ ||",
            source: "Shiva Purana (Kotirudra Samhita 28.32)",
            meaning: "Lord Shankara is celebrated in all worlds as Vaidyanath (the Divine Healer); by mere darshana of this Lingam, even the gravest sinners are liberated from all sins and diseases."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            **Ravana**, the King of Lanka, desired to take Lord Shiva to his capital so that Lanka would be invincible. In the Himalayas, Ravana performed severe Tapasya, digging a fire pit and offering his heads one by one to Shiva.<br>
            When Ravana was about to sever his tenth and final head, Lord Shiva caught his hand, pleased by his supreme austerity. Like an expert physician (*Vaidya*), Shiva reattached all severed heads, healed his wounds, and granted him the **Kamana Lingam** (wish-fulfilling Linga).<br>
            Shiva warned Ravana: *"If you place this Lingam on the ground anywhere on your way, it will take root there permanently."* Terrified of Ravana's growing power, the Devas sent Varuna (causing Ravana intense bladder pressure) and Ganesha disguised as a cowherd boy. Ravana handed the Linga to the boy, who placed it on the ground at **Deoghar**, where it became permanently anchored.
          `,
          keyAttributes: ["Supreme Healer of physical and spiritual ailments", "The Kamana Lingam carried by Ravana", "Sanctified by Ganesha and Varuna", "Deoghar Dham pilgrimage center"],
          children: []
        },
        {
          id: "sp-jyoti-nageshwar",
          name: "10. Lord Nageshwar (Darukavana)",
          sanskrit: "श्री नागेश्वर ज्योतिर्लिङ्ग (दारुकावन, द्वारका के समीप, गुजरात)",
          title: "Lord of Serpents & Antidote to Poison • Savior of Supriya",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Nageshwari Devi",
          vahana: "The Celestial Serpent Vasuki",
          ayudha: "Pashupatastra & Nagabharana",
          color: "#8B5CF6",
          glowColor: "rgba(139, 92, 246, 0.85)",
          icon: "🐍",
          summary: "Origin: The demoness Daruka and demon Daruka captured and imprisoned merchant Supriya and other devotees in the sea; Supriya chanted the Shiva mantra; Shiva burst forth, gave the Pashupatastra, and slew the demons.",
          shloka: {
            devanagari: "सुप्रियस्य च रक्षार्थं नागेशोऽभूत् सदाशिवः । पाशुपतास्त्रदानेन तान्दैत्यान् संजघान ह ॥",
            transliteration: "Supriyasya ca rakṣārthaṁ nāgeśo'bhūt sadāśivaḥ | Pāśupatāstra-dānena tān daityān sañjaghāna ha ||",
            source: "Shiva Purana (Kotirudra Samhita 30.40)",
            meaning: "To protect His faithful devotee Supriya, Sadashiva manifested as Nageshwara, and by bestowing the divine Pashupatastra weapon, destroyed the terrifying demons."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            In the ancient coastal forest of **Darukavana**, the demoness Daruka received a boon from Goddess Parvati that granted her command over the forest. Daruka and her demon husband terrorized righteous people, capturing ships and imprisoning travelers in an underwater fortress.<br>
            Among the captives was a righteous merchant named **Supriya**, who taught all prisoners how to make Parthiva Shiva Lingas and chant *'Om Namah Shivaya'*. Infuriated, the demon Daruka ran with a weapon to slaughter Supriya.<br>
            Supriya closed his eyes and called upon Shiva. Instantly, Lord Shiva manifested through a brilliant pillar of light from the center of the earth, wearing sacred serpents as ornaments. Shiva bestowed the **Pashupatastra** upon Supriya, who destroyed the demons. Shiva declared He would dwell here as **Nageshwara**, ensuring that anyone who worships Him is freed from physical and mental poisons (*Visha*).
          `,
          keyAttributes: ["Supreme protection against poisons and fears", "Deliverance of merchant-devotee Supriya", "Darukavana near Dwarka", "First Lingam in the world according to some traditions"],
          children: []
        },
        {
          id: "sp-jyoti-rameshwaram",
          name: "11. Lord Rameshwaram (Setubandha)",
          sanskrit: "श्री रामेश्वरम् ज्योतिर्लिङ्ग (सेतुबन्ध, रामनाथपुरम, तमिलनाडु)",
          title: "The Lord of Rama • Consecrated for Victory over Ravana",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Parvathavardhini",
          vahana: "Southern Ocean & The Rama Setu",
          ayudha: "Kodanda Bow & Sacred Sand Lingam",
          color: "#06B6D4",
          glowColor: "rgba(6, 182, 212, 0.9)",
          icon: "🏹",
          summary: "Origin: Before constructing the bridge to Lanka to rescue Sita, Lord Sri Rama fashioned a sand lingam on the seashore and prayed to Shiva for victory; Shiva appeared, blessed Him, and resided as Rameshwaram.",
          shloka: {
            devanagari: "रामेश्वरं महालिङ्गं स्वयं रामेण संस्थितम् । तस्य दर्शनमात्रेण ब्रह्महत्या व्यपोहति ॥",
            transliteration: "Rāmeśvaraṁ mahā-liṅgaṁ svayaṁ rāmeṇa saṁsthitam | Tasya darśana-mātreṇa brahma-hatyā vyapohati ||",
            source: "Shiva Purana (Kotirudra Samhita 31.45)",
            meaning: "The great Rameshwaram Lingam was personally consecrated by Lord Sri Rama; by mere darshana of this sacred Jyotirlinga, even the gravest sin is entirely washed away."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            When **Lord Sri Rama**, accompanied by Lakshmana, Sugriva, and the Vanara army, reached the seashore at Setubandha to rescue Mother Sita from Ravana, Rama felt thirsty and asked for water. When water was brought, Rama paused and declared: *"How can I drink water without first worshipping my Lord Shiva?"*<br>
            With his own hands, Rama molded a Linga of ocean sand (*Sikata Linga*) and performed elaborate Vedic puja, offering sincere prayers and seeking blessings to vanquish the demonic forces of Adharma.<br>
            Pleased by Rama's matchless devotion, Lord Shiva appeared with Parvati, granted the blessing of victory, and declared: *"Rama is My very heart, and I am the heart of Rama."* At Rama's earnest prayer, Shiva consented to remain enshrined permanently as **Rameshwaram** ("The Lord of Rama" or "He whose Lord is Rama").
          `,
          keyAttributes: ["Consecrated personally by Lord Sri Rama", "Gateway to the sacred Rama Setu bridge", "Unites Shaiva and Vaishnava devotion", "Absolves all karmic afflictions"],
          children: []
        },
        {
          id: "sp-jyoti-grishneshwar",
          name: "12. Lord Grishneshwar (Ghushmeshwar)",
          sanskrit: "श्री घृष्णेश्वर / घुश्मेश्वर ज्योतिर्लिङ्ग (वेरूल / एलोरा, महाराष्ट्र)",
          title: "Resurrector of the Devotee's Son • The Final Jyotirlinga",
          category: "Sacred Jyotirlinga",
          tradition: "Shiva Purana",
          parent: "sp-jyotirlingas",
          parentName: "The 12 Sacred Jyotirlingas",
          consort: "Goddess Kusumeshwari / Grishneshwari",
          vahana: "Shivalaya Sarovar & Ellora Caves",
          ayudha: "Kamandalu of Divine Nectar",
          color: "#EC4899",
          glowColor: "rgba(236, 72, 153, 0.85)",
          icon: "🪷",
          summary: "Origin: The saintly woman Ghushma made 101 earthen lingas daily; her jealous sister murdered Ghushma's son. Ghushma continued her prayers unperturbed; Shiva resurrected her son and remained as Ghushmeshwar.",
          shloka: {
            devanagari: "घुष्माया भक्तितुष्टेन शंभुना लोककारिणा । तत्रैव स्थापितं लिङ्गं घुश्मेशं पापनाशनम् ॥",
            transliteration: "Ghuṣmāyā bhakti-tuṣṭena śambhunā loka-kāriṇā | Tatraiva sthāpitaṁ liṅgaṁ ghuśmeśaṁ pāpa-nāśanam ||",
            source: "Shiva Purana (Kotirudra Samhita 33.37)",
            meaning: "Pleased with the supreme, unshakeable devotion of Ghushma, Lord Sambhu, the benefactor of all worlds, established the holy Lingam there named Ghushmeshwar, the destroyer of all sins."
          },
          details: `
            **Scriptural Origin from Kotirudra Samhita:**<br>
            A devout Brahmin named Sudharma lived near Mount Devagiri with his wife Sudeha. Unable to bear children, Sudeha insisted that Sudharma marry her younger sister **Ghushma**. Ghushma was an ardent devotee of Shiva: every single day, she lovingly sculpted **101 Parthiva Shiva Lingas**, worshipped them, and immersed them in the local pond.<br>
            By Shiva's grace, Ghushma gave birth to a handsome son. Overcome by bitter jealousy, Sudeha secretly murdered the boy in his sleep and threw his body into the pond where Ghushma immersed her lingas.<br>
            The next morning, when Ghushma was told of her son's murder, she did not wail or curse; she calmly said: *"Shiva gave him, and Shiva may take him. My worship will not stop."* After completing her daily immersion, her son walked out of the pond alive and radiant! Lord Shiva appeared in person, ready to incinerate Sudeha with His third eye, but compassionate Ghushma begged Shiva to forgive her sister. Pleased beyond measure, Shiva remained forever as **Ghushmeshwar / Grishneshwar**.
          `,
          keyAttributes: ["Final of the 12 sacred Jyotirlingas", "Supreme testament to unshakeable devotion", "Adjacent to the famous Ellora Kailasa Cave temple", "Miraculous resurrection of the faithful devotee's child"],
          children: []
        }
      ]
    },

    /* ======================================================================
       BRANCH 2: THE MOUNT KAILASHA HOLY FAMILY (Full Divine Lineage)
       Kumara Khanda & Parvati Khanda
       ====================================================================== */
    {
      id: "sp-kailasha-family",
      name: "The Mount Kailasha Holy Family",
      sanskrit: "कैलाश परिवार (गणेश, कार्तिकेय, अशोकसुन्दरी, अय्यप्प, नन्दि)",
      title: "The Transcendental Abode of Universal Parenthood & Asceticism",
      category: "Kailasha Parivara",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva",
      consort: "Goddess Parvati (Universal Mother / Jagadamba)",
      vahana: "Nandi & Simha (The Lion)",
      ayudha: "Trishula, Lotus & Wish-Fulfilling Boons",
      color: "#EC4899",
      glowColor: "rgba(236, 72, 153, 0.85)",
      icon: "🏔️",
      summary: "Mount Kailasha is the spiritual capital of creation where Shiva and Parvati embody universal parenthood, ascetic renunciation, and familial grace.",
      shloka: {
        devanagari: "वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये । जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥",
        transliteration: "Vāg-arthāv iva sampṛktau vāg-artha-pratipattaye | Jagataḥ pitarau vande pārvatī-parameśvarau ||",
        source: "Raghuvamsham 1.1 (Kalidasa) & Shiva Purana",
        meaning: "Inseparable as speech and meaning, united for the comprehension of truth, I bow to Parvati and Parameshvara, the parents of the universe."
      },
      details: `The *Rudra Samhita* (Parvati and Kumara Khandas) of Shiva Purana chronicles the cosmic wedding of Shiva and Parvati, the manifestations of Ganesha, Kartikeya, Ashokasundari, and Ayyappa, and the eternal assembly of Ganas on Mount Kailasha.`,
      keyAttributes: ["Universal Parents (Jagataḥ Pitarau)", "Mount Kailasha Abode", "Harmonious union of fire and ice, stillness and dance"],
      children: [
        {
          id: "sp-ganesha",
          name: "Lord Ganesha (Vighnaharta / Ganapati)",
          sanskrit: "भगवान् गणेश (विघ्नहर्ता / प्रथमपूज्य)",
          title: "Chief of the Ganas • Lord of Wisdom & Auspicious Beginnings",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Mother Parvati & Lord Shiva",
          consort: "Riddhi Devi (Intellect) & Siddhi Devi (Power)",
          vahana: "Mushaka (The Divine Mouse)",
          ayudha: "Parashu (Axe), Pasha (Noose), Ankusha (Goad), Modaka",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.85)",
          icon: "🐘",
          summary: "Created by Mother Parvati from turmeric paste and given life; after an elephant head was bestowed by Shiva, He blessed Ganesha as Prathama Pujya (first-worshipped in all rites).",
          shloka: {
            devanagari: "त्वं मूलधारस्थितोऽसि नित्यं त्वं शक्तित्रयात्मकः । त्वां योगिनो ध्यायन्ति नित्यम् ॥",
            transliteration: "Tvaṁ mūlādhāra-sthito'si nityaṁ tvaṁ śakti-trayātmakaḥ | Tvāṁ yogino dhyāyanti nityam ||",
            source: "Ganapati Atharvashirsha & Shiva Purana",
            meaning: "You dwell perpetually in the Muladhara chakra; You embody the three divine shaktis; yogis meditate on You continuously."
          },
          details: `The Shiva Purana Kumara Khanda chronicles the creation of Ganesha by Parvati to guard her inner sanctum. Shiva appointed him as the supreme commander of all Ganas and ruler of obstacles (*Vighnaharta*).`,
          keyAttributes: ["Prathama Pujya in all Vedic rites", "Lord of Muladhara Chakra", "Master of intellect and wisdom"],
          children: [
            {
              id: "sp-shubha-labha",
              name: "Shubha, Labha & Santoshi Mata",
              sanskrit: "शुभ, लाभ एवं सन्तोषी माता (गणेश सन्तति)",
              title: "Auspiciousness, Prosperity & Contentment",
              category: "Ganesha Lineage",
              tradition: "Shiva Purana",
              parent: "sp-ganesha",
              parentName: "Lord Ganesha & Riddhi-Siddhi",
              consort: "Divine Virtues",
              vahana: "Mushaka & Golden Lotus",
              ayudha: "Swastika, Modaka & Kalasha",
              color: "#F59E0B",
              glowColor: "rgba(245, 158, 11, 0.8)",
              icon: "卐",
              summary: "Shubha (born of Riddhi) personifies moral auspiciousness; Labha (born of Siddhi) personifies spiritual and material gain; Santoshi Mata represents joy and contentment.",
              shloka: {
                devanagari: "शुभं करोति कल्याणमारोग्यं धनसम्पदाम् ।",
                transliteration: "Śubhaṁ karoti kalyāṇam ārogyaṁ dhana-sampadām |",
                source: "Traditional Mangala Shloka",
                meaning: "Auspiciousness brings welfare, glowing health, and righteous prosperity."
              },
              details: `In Hindu homes, Shubha and Labha are inscribed alongside the holy Swastika to welcome auspicious divine grace.`,
              keyAttributes: ["Personifications of Good Fortune", "Descendants of Ganesha and Riddhi-Siddhi", "Keepers of household prosperity"],
              children: []
            }
          ]
        },
        {
          id: "sp-kartikeya",
          name: "Lord Kartikeya (Skanda / Murugan)",
          sanskrit: "भगवान् कार्तिकेय (स्कन्द / मुरुगन् / सुब्रह्मण्य)",
          title: "Devasenapati • Conqueror of Tarakasura & Master of Wisdom",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Lord Shiva's Fire-Sparks -> Fostered by 6 Krittikas",
          consort: "Devasena (Celestial Power) & Valli (Earthly Bhakti)",
          vahana: "Mayura (The Peacock Paravani)",
          ayudha: "Vel (Spear of Piercing Wisdom)",
          color: "#F97316",
          glowColor: "rgba(249, 115, 22, 0.85)",
          icon: "🦚",
          summary: "Born from Shiva's six sparks of cosmic fire in the Saravana reed forest; commander of heaven's armies; slew Tarakasura and taught the meaning of Omkara to Shiva Himself.",
          shloka: {
            devanagari: "तारकासुरहन्तारं शक्तिहस्तं षडाननम् । मयूरवाहनं वन्दे गुहं ज्ञानान्वितं प्रभुम् ॥",
            transliteration: "Tārakāsura-hantāraṁ śakti-hastaṁ ṣaḍ-ānanam | Mayūra-vāhanaṁ vande guhaṁ jñānānvitaṁ prabhum ||",
            source: "Shiva Purana (Kumara Khanda)",
            meaning: "I bow to Guha (Kartikeya), the six-faced Lord, slayer of Tarakasura, who holds the divine spear in His hand and rides the magnificent peacock."
          },
          details: `The entire Kumara Khanda celebrates Skanda's manifestation. He embodies supreme Brahmavidya and ascetic discipline, widely worshipped across India as Murugan and Subramanya.`,
          keyAttributes: ["Supreme Commander of Celestial Armies", "Six Divine Faces (Shanmukha)", "Teacher of the Pranava ॐ to Shiva"],
          children: [
            {
              id: "sp-devasena-valli",
              name: "Goddess Devasena & Goddess Valli",
              sanskrit: "देवी देवसेना एवं देवी वल्ली (कार्तिकेय शक्ति)",
              title: "Cosmic Authority & Intimate Earthly Devotion",
              category: "Skanda Shaktis",
              tradition: "Shiva Purana",
              parent: "sp-kartikeya",
              parentName: "Lord Kartikeya (Skanda)",
              consort: "Lord Murugan",
              vahana: "White Elephant Airavata & Deer",
              ayudha: "Vel & Blue Lotus",
              color: "#EC4899",
              glowColor: "rgba(236, 72, 153, 0.75)",
              icon: "🪷",
              summary: "Devasena (daughter of Indra) represents Iccha/Kriya Shakti (moral and celestial duty); Valli (daughter of the hunter chieftain) represents spontaneous, loving Bhakti.",
              shloka: {
                devanagari: "देवसेनापते तुभ्यं नमः शक्तिधराय च । वल्लीकान्ताय देवाय षण्मुखाय नमो नमः ॥",
                transliteration: "Devasenāpate tubhyaṁ namaḥ śakti-dharāya ca | Vallī-kāntāya devāya ṣaṇ-mukhāya namo namaḥ ||",
                source: "Skanda Stotram",
                meaning: "Salutations to the Lord of Devasena, the wielder of the divine Shakti spear, the beloved of Valli, the six-faced Lord."
              },
              details: `Their marriage unites the celestial Vedic order (*Devasena*) with indigenous, heartfelt surrender (*Valli*).`,
              keyAttributes: ["Harmonious union of Duty and Love", "Dual Shaktis of Lord Subramanya", "Revered across South India"],
              children: []
            }
          ]
        },
        {
          id: "sp-ashokasundari",
          name: "Goddess Ashokasundari (Daughter of Kailasha)",
          sanskrit: "देवी अशोकसुन्दरी (कल्पवृक्ष समुद्भूता)",
          title: "Wish-Fulfilling Daughter of Parvati • Mother of Emperor Yayati",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Goddess Parvati & Lord Shiva",
          consort: "King Nahusha (Sovereign of the Lunar Dynasty)",
          vahana: "Celestial Chariot",
          ayudha: "Kalpavriksha Twig & Lotus",
          color: "#FB923C",
          glowColor: "rgba(251, 146, 60, 0.8)",
          icon: "🌸",
          summary: "Manifested by Mother Parvati from the wish-fulfilling Kalpavriksha tree to dispel her loneliness; married to King Nahusha of the Lunar Dynasty, giving birth to Emperor Yayati.",
          shloka: {
            devanagari: "शोकनाशकरी यस्मादशोकेति च सा स्मृता । पार्वतीतनया धन्या सर्वकामफलप्रदा ॥",
            transliteration: "Śoka-nāśakarī yasmād aśoketi ca sā smṛtā | Pārvatī-tanayā dhanyā sarva-kāma-phala-pradā ||",
            source: "Padma Purana & Shiva Purana",
            meaning: "Because she removed all grief (Shoka), she is named Ashokasundari; the blessed daughter of Parvati who bestows all righteous desires."
          },
          details: `When Parvati felt lonely while Shiva was immersed in deep samadhi, she requested the Kalpavriksha tree for a daughter. The girl was born with matchless beauty, named Ashokasundari. She was destined to marry King Nahusha, temporarily elevated as King of Heaven.`,
          keyAttributes: ["Born of the Kalpavriksha tree", "Remover of Parvati's grief", "Ancestress of both Yadavas and Pauravas"],
          children: [
            {
              id: "sp-yayati-lineage",
              name: "Emperor Yayati & Royal Dynasties",
              sanskrit: "चक्रवर्ती ययाति (यदु एवं पुरु वंशजनक)",
              title: "Son of Ashokasundari • Progenitor of Yadu & Puru Lineages",
              category: "Lunar Dynasty Progenitor",
              tradition: "Shiva Purana",
              parent: "sp-ashokasundari",
              parentName: "Goddess Ashokasundari & King Nahusha",
              consort: "Devayani (daughter of Shukracharya) & Sharmishtha",
              vahana: "Imperial War Chariot",
              ayudha: "Dhanush & Royal Scepter",
              color: "#FACC15",
              glowColor: "rgba(250, 204, 21, 0.75)",
              icon: "👑",
              summary: "Through Emperor Yayati, the divine bloodline of Kailasha branched into the Yadavas (which produced Lord Sri Krishna) and the Pauravas (which produced the Pandavas).",
              shloka: {
                devanagari: "ययातेः पञ्च पुत्राश्च यदुप्रभृतयो नृपाः । येषां वंशे समुद्भूता हरयो धरणीधराः ॥",
                transliteration: "Yayāteḥ pañca putrāś ca yadu-prabhṛtayo nṛpāḥ | Yeṣāṁ vaṁśe samudbhūtā harayo dharaṇī-dharāḥ ||",
                source: "Puranic Genealogies & Shiva Purana",
                meaning: "Yayati had five noble sons headed by Yadu, in whose dynastic branches descended Lord Krishna and the righteous emperors."
              },
              details: `Connecting Shiva's family directly into the earthly history of the Mahabharata.`,
              keyAttributes: ["Fountainhead of Yadu & Puru Dynasties", "Grandson of Shiva-Parvati through Ashokasundari", "Direct ancestor of Sri Krishna and the Pandavas"],
              children: [
                {
                  id: "sp-paurava-bharata",
                  name: "King Dushyanta & Emperor Bharata",
                  sanskrit: "राजा दुष्यन्त एवं चक्रवर्ती भरत",
                  title: "Sovereigns of Hastinapura & Progenitors of Bharatavarsha",
                  category: "Lunar Dynasty of Kailasha",
                  tradition: "Shiva Purana",
                  parent: "sp-yayati-lineage",
                  parentName: "Emperor Yayati",
                  consort: "Shakuntala (daughter of Sage Vishvamitra & Menaka)",
                  vahana: "Chakravartin Chariot",
                  ayudha: "Imperial Scepter & Bow",
                  color: "#EAB308",
                  glowColor: "rgba(234, 179, 8, 0.8)",
                  icon: "👑",
                  summary: "Descendants of Puru and Ashokasundari; Emperor Bharata conquered all directions, performing 100 Ashvamedha sacrifices under Shiva's cosmic protection.",
                  shloka: {
                    devanagari: "शकुन्तलायां दुष्यन्ताद् भरतोऽभून्महामतिः । यस्य लोके प्रथितया कीर्त्या भारतमुच्यते ॥",
                    transliteration: "Śakuntalāyāṁ duṣyantād bharato'bhūn mahā-matiḥ | Yasya loke prathitayā kīrtyā bhāratam ucyate ||",
                    source: "Mahabharata & Shiva Purana",
                    meaning: "From Dushyanta and Shakuntala was born the high-souled Bharata, by whose glorious fame in all worlds this earth is celebrated as Bharatavarsha."
                  },
                  details: `
                    Emperor Bharata represents the highest ideal of righteous kingship. Born in Sage Kanva's hermitage, he played with lion cubs as child Sarvadamana.
                    His dynastic line ruled from Hastinapura, upholding the sacred laws of Dharma across the entire subcontinent.
                  `,
                  keyAttributes: ["Namesake of Bharatavarsha", "Son of Dushyanta & Shakuntala", "Performer of 100 Ashvamedha Yajnas"],
                  children: [
                    {
                      id: "sp-kuru-shantanu",
                      name: "King Kuru & King Shantanu",
                      sanskrit: "राजा कुरु एवं राजा शान्तनु",
                      title: "Founders of Kurukshetra & Sovereign of Hastinapura",
                      category: "Lunar Dynasty of Kailasha",
                      tradition: "Shiva Purana",
                      parent: "sp-paurava-bharata",
                      parentName: "Emperor Bharata",
                      consort: "Ganga Devi & Satyavati",
                      vahana: "Royal Chariot",
                      ayudha: "Dharma Staff & Royal Crown",
                      color: "#CA8A04",
                      glowColor: "rgba(202, 138, 4, 0.8)",
                      icon: "🏛️",
                      summary: "King Kuru sanctified Kurukshetra through penance; King Shantanu married the celestial river goddess Ganga Devi, fathering the invincible Devavrata (Bhishma).",
                      shloka: {
                        devanagari: "कुरुणा यत्कृतं क्षेत्रं कुरुक्षेत्रं तदुच्यते । यत्र धर्मेण वर्तन्ते मानवाः पुण्यकर्मिणः ॥",
                        transliteration: "Kuruṇā yat kṛtaṁ kṣetraṁ kurukṣetraṁ tad ucyate | Yatra dharmeṇa vartante mānavāḥ puṇya-karmiṇaḥ ||",
                        source: "Mahabharata",
                        meaning: "The sacred field ploughed by King Kuru with austerities is known as Kurukshetra, where righteous people dwell in truth and merit."
                      },
                      details: `
                        King Kuru ploughed the earth with eight virtues (truth, austerity, forgiveness, compassion, charity, purity, yoga, and restraint).
                        Centuries later, King Shantanu ruled Hastinapura, uniting the royal lunar line with the celestial waters of Ganga Devi.
                      `,
                      keyAttributes: ["Sanctified Kurukshetra as Dharmakshetra", "King Shantanu wedded Ganga Devi", "Ancestors of the Kauravas and Pandavas"],
                      children: [
                        {
                          id: "sp-bhishma-pandavas",
                          name: "Bhishma Pitamaha & The Five Pandavas",
                          sanskrit: "भीष्म पितामह एवं पञ्च पाण्डवाः (केदारनाथ प्रतिष्ठापक)",
                          title: "Supreme Shaiva Warriors & Consecrators of Kedarnath Jyotirlinga",
                          category: "Lunar Dynasty of Kailasha",
                          tradition: "Shiva Purana",
                          parent: "sp-kuru-shantanu",
                          parentName: "King Shantanu",
                          consort: "Draupadi & Subhadra",
                          vahana: "Nandighosha Chariot",
                          ayudha: "Gandiva Bow, Pashupatastra & Kaumodaki",
                          color: "#38BDF8",
                          glowColor: "rgba(56, 189, 248, 0.85)",
                          icon: "🏹",
                          summary: "Arjuna obtained the invincible Pashupatastra directly from Lord Shiva; following the Kurukshetra war, the Pandavas built the sacred Kedarnath temple to worship Shiva.",
                          shloka: {
                            devanagari: "दृष्ट्वा तु भगवान् शम्भुः पाण्डवान् भक्तवत्सलः । महिषरूपमास्थाय विवेश वसुधातले ॥",
                            transliteration: "Dṛṣṭvā tu bhagavān śambhuḥ pāṇḍavān bhakta-vatsalaḥ | Mahiṣa-rūpam āsthāya viveśa vasudhā-tale ||",
                            source: "Shiva Purana (Kotirudra Samhita 19.8)",
                            meaning: "Seeing the sincere Pandavas pursuing Him with intense longing, Lord Shiva, lover of His devotees, assumed the form of a celestial bull and entered the earth at Kedarnath."
                          },
                          details: `
                            In the Shiva Purana (Kotirudra Samhita), Arjuna pleased Lord Shiva in the guise of a Kirata (hunter) and received the ultimate celestial missile—the **Pashupatastra**.
                            After the great war, seeking atonement for the destruction of their kin, the Pandavas traveled to the snowy Himalayas.
                            Lord Shiva tested their resolve by diving into the earth as a divine bull; the hump remained at **Kedarnath**, while the four arms appeared at Tunganath, face at Rudranath, hair at Kalpeshwar, and navel at Madhyamaheshwar (Pancha Kedar).
                          `,
                          keyAttributes: ["Arjuna received the Pashupatastra from Shiva", "Consecrators of the Himalayan Kedarnath temple", "Pancha Kedar pilgrimage origins in Kotirudra Samhita"],
                          children: [
                            {
                              id: "sp-abhimanyu-parikshit",
                              name: "Abhimanyu to Emperor Parikshit & Janamejaya",
                              sanskrit: "अभिमन्यु, चक्रवर्ती परीक्षित् एवं जनमेजय",
                              title: "Royal Heirs of the Lunar Dynasty & Protectors of Dharma",
                              category: "Lunar Dynasty of Kailasha",
                              tradition: "Shiva Purana",
                              parent: "sp-bhishma-pandavas",
                              parentName: "The Five Pandavas",
                              consort: "Uttara (daughter of King Virata) & Madravati",
                              vahana: "Imperial War Chariot",
                              ayudha: "Dharma Scepter & Brahmashira Defense",
                              color: "#60A5FA",
                              glowColor: "rgba(96, 165, 250, 0.8)",
                              icon: "🛡️",
                              summary: "Abhimanyu breached the Chakravyuha; his son Parikshit ruled as universal emperor until hearing the Bhagavata; his grandson Janamejaya heard the Mahabharata.",
                              shloka: {
                                devanagari: "परीक्षिन्नाम राजर्षिः सर्वधर्मविदां वरः । पालयन् पृथिवीं सर्वां धर्मेण समवर्तत ॥",
                                transliteration: "Parīkṣin nāma rājarṣiḥ sarva-dharma-vidāṁ varaḥ | Pālayan pṛthivīṁ sarvāṁ dharmeṇa samavartata ||",
                                source: "Mahabharata & Shiva Purana",
                                meaning: "The royal sage named Parikshit, best among all knowers of Dharma, ruled the entire earth with righteous justice and sacred truth."
                              },
                              details: `
                                The unbroken continuation of the lunar dynasty descending from Kailasha's daughter Ashokasundari.
                                Emperor Parikshit was saved in Uttara's womb by Lord Krishna's divine disc and was initiated into transcendental knowledge by Sage Shukadeva on the banks of the Ganga.
                              `,
                              keyAttributes: ["Continuation of Kailasha's lunar bloodline", "Parikshit listened to the 18,000 verses of Bhagavata", "Janamejaya performed the Sarpa Satra"],
                              children: [
                        {
                          id: "sp-janamejaya-nichakshu",
                          name: "King Janamejaya to King Nichakshu",
                          sanskrit: "राजा जनमेजय ते राजा निचक्षु (कौशाम्बी प्रवर्तक)",
                          title: "Sovereigns of Hastinapura & Transfer to Kausambi",
                          category: "Lunar Dynasty of Kailasha",
                          tradition: "Shiva Purana",
                          parent: "sp-abhimanyu-parikshit",
                          parentName: "Abhimanyu to Emperor Parikshit & Janamejaya",
                          consort: "Paurava Queens",
                          vahana: "Royal River Barge & Chariot",
                          ayudha: "Dharma Scepter",
                          color: "#EAB308",
                          glowColor: "rgba(234, 179, 8, 0.8)",
                          icon: "🏛️",
                          summary: "Great-grandson of Arjuna; when Hastinapura was inundated by Ganga, King Nichakshu moved the Paurava throne to Kausambi, continuing the Kailasha lunar bloodline.",
                          shloka: {
                            devanagari: "गङ्गाप्लुते नगरे तस्मिन् हस्तिनापुरसंज्ञिते । वत्सभूमौ सुसम्पन्नां कौशाम्बीं न्यविशन्नृपाः ॥",
                            transliteration: "Gaṅgāplute nagare tasmin hastināpura-saṁjñite | Vatsa-bhūmau susampannāṁ kauśāmbīṁ nyaviśan nṛpāḥ ||",
                            source: "Puranic Genealogies",
                            meaning: "When the city designated as Hastinapura was flooded by Ganga, the monarchs established the prosperous capital of Kausambi in the land of Vatsa."
                          },
                          details: `
                            Connecting the Kailasha daughter Ashokasundari's lunar descendants into the middle Gangetic kingdoms of Vatsa and Magadha.
                          `,
                          keyAttributes: ["Capital transferred from Hastinapura to Kausambi", "Continued the Kailasha lunar bloodline", "Pivotal transition into the classical era"],
                          children: [
                            {
                              id: "sp-udayana-kausambi",
                              name: "King Udayana of Vatsa (Shaiva Patron)",
                              sanskrit: "राजा उदयन (कौशाम्बी नरेश / शैव संरक्षक)",
                              title: "Romantic Hero of Sanskrit Drama • Worshipper of Shiva",
                              category: "Lunar Dynasty of Kailasha",
                              tradition: "Shiva Purana",
                              parent: "sp-janamejaya-nichakshu",
                              parentName: "King Janamejaya to King Nichakshu",
                              consort: "Queen Vasavadatta of Ujjayini",
                              vahana: "Ghoshayati Lute & Royal Elephant",
                              ayudha: "Seven-Stringed Lute & Bow",
                              color: "#CA8A04",
                              glowColor: "rgba(202, 138, 4, 0.8)",
                              icon: "🎵",
                              summary: "Celebrated sovereign of Kausambi; allied with the Shaiva kings of Ujjayini; hero of Bhasa's Svapnavasavadatta and Kalidasa's Meghaduta.",
                              shloka: {
                                devanagari: "प्रद्योतस्य सुतां हृत्वा उदयनो वीणाविशारदः । कौशाम्ब्यां राज्यमकरोच्छिवभक्तिसमन्वितः ॥",
                                transliteration: "Pradyotasya sutāṁ hṛtvā udayano vīṇā-viśāradaḥ | Kauśāmbyāṁ rājyam akaroc chiva-bhakti-samanvitaḥ ||",
                                source: "Kathasaritsagara & Puranic Lore",
                                meaning: "Winning Princess Vasavadatta, daughter of King Pradyota, Udayana, master of the divine Veena, ruled Kausambi endowed with deep devotion to Lord Shiva."
                              },
                              details: `
                                King Udayana's reign connected Kausambi and Ujjayini (the city of Mahakaleshwar Jyotirlinga).
                                His court preserved the classical arts, temple consecrations, and Shaiva Agamic worship.
                              `,
                              keyAttributes: ["Allied Kausambi with the Shaiva kingdom of Ujjain", "Master of the musical Veena", "Celebrated by Bhasa and Kalidasa"],
                              children: [
                                {
                                  id: "sp-magadha-shaiva-kings",
                                  name: "The Imperial Magadha Dynasties (to Mauryas)",
                                  sanskrit: "मगध साम्राज्य (हर्यङ्क, नन्द एवं मौर्य)",
                                  title: "Imperial Overlords of Pataliputra & Ujjain",
                                  category: "Magadha Empires",
                                  tradition: "Shiva Purana",
                                  parent: "sp-udayana-kausambi",
                                  parentName: "King Udayana of Vatsa",
                                  consort: "Empresses of Pataliputra",
                                  vahana: "Imperial War Chariot",
                                  ayudha: "Imperial Scepter & Trident",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.85)",
                                  icon: "👑",
                                  summary: "Shift of universal sovereignty to Pataliputra: Bimbisara, Ajatashatru, Mahapadma Nanda, and the Maurya emperors who protected the sacred pilgrimage paths across northern India.",
                                  shloka: {
                                    devanagari: "पाटलिपुत्रनगरे सम्राजः पृथिवीपतेः । धर्मतीर्थानि सर्वाणि ररक्षुः शिवपूजकाः ॥",
                                    transliteration: "Pāṭaliputra-nagare samrājaḥ pṛthivī-pateḥ | Dharma-tīrthāni sarvāṇi rarakṣuḥ śiva-pūjakāḥ ||",
                                    source: "Puranic Chronicles",
                                    meaning: "In the imperial city of Pataliputra, the emperors of the earth, worshippers of Shiva, protected all sacred pilgrimage sanctums throughout the realm."
                                  },
                                  details: `
                                    Imperial administration secured the Shaiva pilgrimage circuits of Kashi, Ujjain, Kedarnath, and Baidyanath, providing royal endowments for monastic centers.
                                  `,
                                  keyAttributes: ["Imperial seat of power at Pataliputra", "Protected the Pan-Indian Shaiva pilgrimage network", "Fostered urban infrastructure and safety of holy tirthas"],
                                  children: [
                                    {
                                      id: "sp-shunga-satavahana",
                                      name: "Shunga & Satavahana Dynasties (Vedic & Shaiva Revival)",
                                      sanskrit: "शुङ्ग एवं सातवाहन साम्राज्य (वैदिक एवं शैव पुनरुद्धार)",
                                      title: "Restorers of Ancient Temples across Aryavarta & Dakshinapatha",
                                      category: "Shunga & Satavahana",
                                      tradition: "Shiva Purana",
                                      parent: "sp-magadha-shaiva-kings",
                                      parentName: "The Imperial Magadha Dynasties",
                                      consort: "Queens of Vidisha and Paithan",
                                      vahana: "Ashvamedha Steed & Southern Fleet",
                                      ayudha: "Sacrificial Yupa & Trishula",
                                      color: "#10B981",
                                      glowColor: "rgba(16, 185, 129, 0.85)",
                                      icon: "🔱",
                                      summary: "Pushyamitra Shunga and Gautamiputra Satakarni revived Vedic rituals, endowed Shaiva rock-cut temples in the Western Ghats (Gudimallam, Elephanta origins, Karle), and checked foreign incursions.",
                                      shloka: {
                                        devanagari: "दक्षिणापथपतयः सातवाहना महौजसः । लिङ्गार्चनं प्रतिष्ठाप्य चक्रुः पृथ्वीं निरामयाम् ॥",
                                        transliteration: "Dakṣiṇāpatha-patayaḥ sātavāhanā mahaujasaḥ | Liṅgārcanaṁ pratiṣṭhāpya cakruḥ pṛthvīṁ nirāmayām ||",
                                        source: "Inscriptional Chronicles",
                                        meaning: "The mighty Satavahana lords of the Deccan, consecrating the sacred worship of the Shiva Linga, protected the earth from disease and invasion."
                                      },
                                      details: `
                                        Under the Satavahanas and Shungas, early stone and rock-cut Shaiva temples proliferated, including the ancient Gudimallam Lingam in Andhra and the cave temples of Maharashtra.
                                      `,
                                      keyAttributes: ["Endowed the earliest surviving sculpted Shiva Lingas (Gudimallam)", "Re-established Vedic and Agamic worship", "Unified the central Deccan with the Gangetic plain"],
                                      children: [
                                        {
                                          id: "sp-gupta-shaiva-golden-age",
                                          name: "The Imperial Guptas & Vikramaditya (to 500 AD)",
                                          sanskrit: "गुप्त साम्राज्य एवं विक्रमादित्य (महाकालेश्वर भक्त • ५०० ईस्वी)",
                                          title: "Golden Age of Sanskrit & Shaiva Arts • Kalidasa's Meghaduta & Kumarasambhavam",
                                          category: "Gupta Empire",
                                          tradition: "Shiva Purana",
                                          parent: "sp-shunga-satavahana",
                                          parentName: "Shunga & Satavahana Dynasties",
                                          consort: "Empresses of Ujjayini and Pataliputra",
                                          vahana: "Garuda Standard & Imperial Chariot",
                                          ayudha: "Mahakal Trishula & Chandrahasa Sword",
                                          color: "#FACC15",
                                          glowColor: "rgba(250, 204, 21, 0.95)",
                                          icon: "👑",
                                          summary: "Reaching c. 500 AD. Emperor Chandragupta II Vikramaditya ruled from Ujjain, worshipping Mahakaleshwar. His court gem Mahakavi Kalidasa composed Kumarasambhavam (the birth of Kartikeya) and Meghaduta.",
                                          shloka: {
                                            devanagari: "अप्यन्यस्मिन् जलधर महाकालमासाद्य काले स्थातव्यं ते नयनविषयं यावदभ्येति भानुः । कुर्वन् सन्ध्याबलिपटहतां शूलिनः श्लाघनीयाम् ॥",
                                            transliteration: "Apy anyasmin jaladhara mahākālam āsādya kāle sthātavyaṁ te nayana-viṣayaṁ yāvad abhyeti bhānuḥ | Kurvan sandhyā-bali-paṭahatāṁ śūlinaḥ ślāghanīyām ||",
                                            source: "Kalidasa's Meghaduta (Purvamegha 34)",
                                            meaning: "O Cloud! Reaching the sacred shrine of Lord Mahakaleshwar in Ujjain at twilight, linger there to serve with your deep thunder as the evening ceremonial drum for the Lord who holds the Trident!"
                                          },
                                          details: `
                                            The Gupta period (c. 320–550 AD) saw the golden renaissance of Shaiva literature and structural temple architecture:
                                            - **Chandragupta II Vikramaditya** made Ujjain his second capital, deeply devoted to Mahakaleshwar Jyotirlinga.
                                            - **Mahakavi Kalidasa** wrote *Kumarasambhavam* (the glorious canonical narrative of Shiva, Parvati, and Kartikeya found in Shiva Purana) and *Raghuvamsham*.
                                            - The earliest carved stone Hindu structural temples—such as the **Bhumara Shiva Temple**, **Nachna Kuthara Parvati Temple**, and the **Udayagiri Caves**—were constructed during this golden epoch down to 500 AD.
                                          `,
                                          keyAttributes: ["Golden Age of Shaiva literature through Mahakavi Kalidasa", "Dedicated the earliest stone structural Shiva temples (Bhumara, Nachna)", "Deeply anchored in Mahakaleshwar Jyotirlinga of Ujjain through 500 AD"],
                                          children: [
                {
                  id: "sp-imperial-cholas",
                  name: "Imperial Chola Shaiva Dynasty (c. 850-1279 AD)",
                  sanskrit: "बृहदीश्वर निर्माता राजराज एवं राजेन्द्र चोल",
                  title: "Architects of the Great Living Chola Temples & Universal Cosmic Nataraja Worship",
                  category: "Historical Shaiva Kings",
                  tradition: "Shiva Purana",
                  parent: "sp-gupta-shaiva-golden-age",
                  parentName: "The Imperial Guptas & Vikramaditya (to 500 AD)",
                  consort: "Empresses Lokamahadevi & Kundavai",
                  vahana: "Sacred Nandi Bull & Imperial Tiger Standard",
                  ayudha: "Shiva Trishula & Chola Sengol (Scepter of Righteousness)",
                  color: "#8B5CF6",
                  glowColor: "rgba(139, 92, 246, 0.9)",
                  icon: "🔱",
                  summary: "Emperors Rajaraja Chola I (r. 985-1014) and Rajendra Chola I (r. 1014-1044) elevated Shaiva Agama temple culture to unparalleled heights. Erected the granite wonder Brihadisvara Temple (Peruvudaiyar Kovil) at Thanjavur and Gangaikonda Cholapuram, and codified the sacred bronze casting of Shiva Nataraja.",
                  shloka: {
                    devanagari: "नमः शिवाय शान्ताय राजराजेन धीमता । स्थापितो दक्षिणामूर्तिर् बृहदीश्वर-सन्निधौ ॥",
                    transliteration: "Namah shivaya santaya rajarajena dhimata | Sthapito dakshinamurtir brihadisvara-sannidhau ||",
                    source: "Brihadisvara Temple Epigraphs of Thanjavur (1010 AD)",
                    meaning: "Salutations to Shiva, the Embodiment of Supreme Peace! By the wise Emperor Rajaraja, Lord Dakshinamurti and Brihadisvara were consecrated in this grand granite sanctum."
                  },
                  details: `
                    The Imperial Cholas transformed South India and the Indian Ocean rim into an empire of Shaiva devotion:
                    - **Brihadisvara at Thanjavur:** Completed in 1010 AD, its 66-meter high vimana is crowned by a colossal monolithic dome weighing 80 tons. The walls bear thousands of lines of inscriptions documenting temple grants, dancers, and Vedic reciters.
                    - **Sengol Tradition:** The Cholas instituted the sacred *Sengol* (golden scepter surmounted by the Nandi bull, blessed by the Shaiva Adheenam pontiffs), signifying that the king reigns under the spiritual authority of Lord Shiva.
                    - **Gangaikonda Cholapuram:** Rajendra Chola built a mirror capital to commemorate bringing holy Ganga water from the Himalayas to consecrate the temple tank Chola-Ganga.
                  `,
                  keyAttributes: ["Built the colossal Brihadisvara Temple of Thanjavur (1010 AD)", "Instituted the sacred Shaiva Sengol scepter of righteous rule", "Commissioned the iconic bronze sculptures of Shiva Nataraja"],
                  children: [
                    {
                      id: "sp-vijayanagara-shaiva",
                      name: "Vijayanagara Empire (c. 1336-1646 AD)",
                      sanskrit: "विजयनगर साम्राज्य (हम्पी विरूपाक्ष एवं श्रीशैलम संरक्षक)",
                      title: "Erected Under Sringeri Vidyaranya's Blessings – Krishnadevaraya's Majestic Gopurams",
                      category: "Historical Shaiva Kings",
                      tradition: "Shiva Purana",
                      parent: "sp-imperial-cholas",
                      parentName: "Imperial Chola Shaiva Dynasty (c. 850-1279 AD)",
                      consort: "Empresses Tirumala Devi & Chinnadevi",
                      vahana: "Varaha Standard & Nandi Banner",
                      ayudha: "Khanda Sword & Virupaksha Trishula",
                      color: "#8B5CF6",
                      glowColor: "rgba(139, 92, 246, 0.95)",
                      icon: "🏛️",
                      summary: "Founded under the blessings of Jagadguru Vidyaranya of Sringeri Peetha. Harihara, Bukka, and Emperor Krishnadevaraya dedicated the empire to Lord Virupaksha (Shiva) of Hampi. Restored and built majestic gopurams at the Jyotirlinga of Srisailam Mallikarjuna, Lepakshi, Kalahasti, and Chidambaram.",
                      shloka: {
                        devanagari: "श्री-विरूपाक्ष-देवेन रक्षितं भुवि मण्डलम् । विद्यारण्य-यतीन्द्रस्य तपसा विजयान्वितम् ॥",
                        transliteration: "Sri-virupaksha-devena rakshitah bhuvi mahalam | Vidyarashya-yatindrasya tapasa vijayanvitam ||",
                        source: "Hampi Virupaksha Temple Copper Plate (1378 AD)",
                        meaning: "Protected upon earth by Lord Sri Virupaksha, and crowned with victory through the ascetic spiritual power of Jagadguru Vidyaranya, this empire defends the eternal Sanatan Dharma."
                      },
                      details: `
                        The Vijayanagara Empire was conceived as a sacred dharmic trust dedicated to Lord Shiva Virupaksha:
                        - **Virupaksha Inscription:** All royal edicts were signed in Kannada with the holy name *"Sri Virupaksha"* rather than the king's personal name, acknowledging Lord Shiva as the real Emperor.
                        - **Mallikarjuna Jyotirlinga at Srisailam:** Krishnadevaraya personally visited Srisailam in 1515 AD after his conquests, constructing the grand southern gopuram, stone mandapas, and granting villages for the perpetual worship of Lord Mallikarjuna and Goddess Bhramaramba.
                        - **Architectural Glory:** Built the monumental Lepakshi Veerabhadra temple and the hundred-pillar halls across South India.
                      `,
                      keyAttributes: ["Signed all imperial edicts in the name of Lord Shiva ('Sri Virupaksha')", "Rebuilt the southern gopuram of Srisailam Mallikarjuna Jyotirlinga", "Founded under the spiritual guidance of Sringeri Shankaracharya Vidyaranya"],
                      children: [
                        {
                          id: "sp-maratha-swarajya-shivaji",
                          name: "Chhatrapati Shivaji Maharaj & Hindavi Swarajya (1630-1680 AD)",
                          sanskrit: "छत्रपति शिवाजी महाराज एवं हिन्दवी स्वराज्य (श्रीशैल संरक्षक)",
                          title: "Champion of Dharma, Devotee of Bhavani & Restorer of Jyotirlinga Shrines",
                          category: "Historical Shaiva Kings",
                          tradition: "Shiva Purana",
                          parent: "sp-vijayanagara-shaiva",
                          parentName: "Vijayanagara Empire (c. 1336-1646 AD)",
                          consort: "Maharani Saibai, Soyarabai, Putalabai",
                          vahana: "Bhagwa Dhvaja (Saffron Flag of Shiva & Bhavani)",
                          ayudha: "Bhavani Talwar, Trishula & Wagh Nakh",
                          color: "#F97316",
                          glowColor: "rgba(249, 115, 22, 0.95)",
                          icon: "🚩",
                          summary: "Chhatrapati Shivaji Maharaj established 'Hindavi Swarajya' (Self-rule of the Righteous) as a sacred duty dedicated to Lord Shiva and Goddess Tulja Bhavani. Built naval sea forts (Sindhudurg, Vijaydurg) housing consecrated Shiva lingams, and personally renovated the Jyotirlinga of Srisailam in 1677 AD.",
                          shloka: {
                            devanagari: "प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता । शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते ॥",
                            transliteration: "Pratipat-candra-lekheva vardhishnur visva-vandita | Saha-sunoh shivasyaisa mudra bhadraya rajate ||",
                            source: "Royal Sanskrit Seal (Rajamudra) of Chhatrapati Shivaji Maharaj",
                            meaning: "Growing ever like the crescent moon of the first lunar day, and revered by the entire cosmos, this sacred royal seal of Shivaji, son of Shahaji, shines resplendent for the supreme welfare of all!"
                          },
                          details: `
                            Chhatrapati Shivaji Maharaj revived Hindu sovereignty through profound Shaiva-Shakta devotion:
                            - **Srisailam Jyotirlinga (1677 AD):** En route to his southern expedition (Dakshin Digvijaya), Shivaji spent ten days in deep meditation at the Srisailam Mallikarjuna Jyotirlinga, building bathing ghats, a massive stone pavilion (*Shivaji Gopuram*), and endowing the temple.
                            - **Fort Sanctums:** Every Maratha hill fort and naval stronghold was anchored by a sanctum to Mahadeva.
                            - **Spiritual Mentorship:** Guided by Samarth Ramdas and Sant Tukaram, Shivaji declared: *"हे राज्य व्हावे, हे तो श्रींची इच्छा"* ('That this kingdom be established is the will of the Divine').
                          `,
                          keyAttributes: ["Founded Hindavi Swarajya dedicated to Lord Shiva and Bhavani", "Renovated the Jyotirlinga of Srisailam Mallikarjuna (1677 AD)", "Consecrated Shiva sanctums across Maratha hill and sea forts"],
                          children: [
                            {
                              id: "sp-punyashlok-ahilyabai",
                              name: "Punyashlok Rajmata Ahilyabai Holkar (1725-1795 AD)",
                              sanskrit: "पुण्यश्लोक राजमाता अहिल्याबाई होळकर (द्वादश ज्योतिर्लिंग पुनरुद्धारक)",
                              title: "Supreme Restorer of India's Desecrated Jyotirlingas & Sacred Teerthas",
                              category: "Historical Shaiva Restorers",
                              tradition: "Shiva Purana",
                              parent: "sp-maratha-swarajya-shivaji",
                              parentName: "Chhatrapati Shivaji Maharaj & Hindavi Swarajya (1630-1680 AD)",
                              consort: "Khanderao Holkar (Prince of Malwa)",
                              vahana: "Royal White Palanquin & Holkar Saffron Banner",
                              ayudha: "Shiva Linga Held in Hands (Shiva-Arpana Sovereign)",
                              color: "#F97316",
                              glowColor: "rgba(249, 115, 22, 1.0)",
                              icon: "🕉️",
                              summary: "The legendary queen of Malwa who ruled from Maheshwar on the sacred Narmada. Following medieval destruction, Ahilyabai personally funded and reconstructed the sacred Jyotirlingas: rebuilt Kashi Vishwanath in 1780 AD, Somnath, Mahakaleshwar at Ujjain, Grishneshwar, and Trimbakeshwar ghats, uniting Bharatavarsha through stone.",
                              shloka: {
                                devanagari: "काशी-विश्वेश-धाम्नश्च सोमनाथ-महेशयोः । उद्धारं कृतवती साक्षाद् अहल्या शिव-रूपिणी ॥",
                                transliteration: "Kashi-vishvesha-dhamnas ca somanatha-maheshayoh | Uddharam kritavati sakshad ahalya siva-rupishi ||",
                                source: "Maheshwar Inscription & Holkar Dynasty Chronicles",
                                meaning: "Of the supreme abodes of Lord Kashi Vishwanath and Lord Somnath Mahadeva, she performed the sacred resurrection; Rajmata Ahilyabai, verily the living embodiment of Shiva's grace upon earth."
                              },
                              details: `
                                Rani Ahilyabai Holkar's reconstruction of the Jyotirlingas represents the greatest act of religious restoration in Indian history:
                                - **Rebuilding Kashi Vishwanath (1780 AD):** After Aurangzeb demolished the ancient sanctum in 1669, Ahilyabai constructed the present golden sanctum of Shri Kashi Vishwanath, which stood as the heart of Varanasi for over two centuries.
                                - **Rebuilding Somnath:** Built the magnificent Ahilyabai Somnath Temple adjacent to the ruined site in Prabhas Patan, allowing devotees to worship the First Jyotirlinga safely.
                                - **Mahakaleshwar & Grishneshwar:** Reconstructed the subterranean sanctum of Mahakaleshwar at Ujjain, rebuilt the entire 12th Jyotirlinga of Grishneshwar near Ellora, and built the famous Manikarnika Ghat, Dashashwamedha Ghat, and Kedarnath winter shrines.
                                - **Rule as Shiva-Arpana:** She governed without pomp, signing all official state documents as *"Shri Shankara"* and holding a Shiva Linga in her palms during royal darbars.
                              `,
                              keyAttributes: ["Rebuilt Kashi Vishwanath Temple in 1780 AD after Mughal desecration", "Reconstructed Somnath, Mahakaleshwar, Grishneshwar, and Trimbakeshwar", "Ruled as a saint-queen signing all state edicts as 'Shri Shankara'"],
                              children: [
                                {
                                  id: "sp-modern-jyotirlinga-trusts-2026",
                                  name: "Modern Jyotirlinga Trusts & Dham Corridors to 2026",
                                  sanskrit: "आधुनिक द्वादश ज्योतिर्लिंग न्यास एवं संस्थान (२०२६ ईस्वी पर्यन्त)",
                                  title: "Shri Kashi Vishwanath Dham, Somnath Trust, Mahakal Lok & Kedarnath Samiti in 2026",
                                  category: "Living Shaiva Institutions",
                                  tradition: "Shiva Purana",
                                  parent: "sp-punyashlok-ahilyabai",
                                  parentName: "Punyashlok Rajmata Ahilyabai Holkar (1725-1795 AD)",
                                  consort: "Living Vedic Archakas, Pujaris & Dharmic Trusts",
                                  vahana: "All-India Pilgrim Network & Heli-Dham Services",
                                  ayudha: "Shiva Trishula & Vedic Agamic Ritual Vessels",
                                  color: "#8B5CF6",
                                  glowColor: "rgba(139, 92, 246, 1.0)",
                                  icon: "✨",
                                  summary: "In 2026, the 12 Jyotirlingas are conserved and celebrated through massive national restorations: the Shri Kashi Vishwanath Dham Corridor (reconnecting Ganga to Vishwanath), Shri Mahakal Lok at Ujjain, Shree Somnath Trust (chaired by the Prime Minister), and Shri Badrinath-Kedarnath Mandir Samiti (BKTC).",
                                  shloka: {
                                    devanagari: "सौराष्ट्र-प्रभृतीनि द्वादश-शिव-धामानि भुवि विराजन्ते । अद्यापि संप्रवर्तन्ते वैदिक-विधिना नित्य-मङ्गलाः ॥",
                                    transliteration: "Saurashtra-prabhritini dvadasa-shiva-dhamani bhuvi virajante | Adyapi sampravartante vaidika-vidhina nitya-mangalah ||",
                                    source: "Sanatan Mahotsava Inscription (2021-2026)",
                                    meaning: "From Saurashtra to the Himalayas, the Twelve Sacred Abodes of Shiva shine resplendent upon this earth; even today in 2026, they resound with auspicious Vedic chants, unbroken rituals, and millions of devout pilgrims."
                                  },
                                  details: `
                                    In the 21st century and actively continuing in 2026, the Jyotirlinga heritage has undergone a grand renaissance:
                                    - **Shri Kashi Vishwanath Dham (2021–2026):** Reconnected the sacred Ganga at Lalita Ghat directly to the sanctum sanctorum over 50,000 square meters, allowing over 100,000 pilgrims daily to perform Ganga-Jal abhisheka.
                                    - **Shri Mahakal Lok Corridor, Ujjain:** Inaugurated with 108 grand sculpted pillars depicting Shiva Tandava, Shivapuranic lore, and astronomical alignments along Rudrasagar Lake.
                                    - **Shree Somnath Trust:** Governed as an autonomous public trust safeguarding the eternal first Jyotirlinga facing the Arabian Sea.
                                    - **Kedarnath Reconstruction:** Post-2013 flood resilience project restored Adi Shankaracharya's Samadhi, pilgrim corridors, and winter worship at Ukhimath Omkareshwar.
                                  `,
                                  keyAttributes: ["Kashi Vishwanath Dham Corridor connecting the Ganga to Mahadeva", "Shri Mahakal Lok Corridor revitalizing Ujjain's astronomical Shaiva heritage", "Millions of pilgrims practicing unbroken Vedic Shivaradhana in 2026"],
                                  children: []
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]

                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  id: "sp-yadu-dynasty",
                  name: "King Yadu & The Yaduvamsha",
                  sanskrit: "राजा यदु एवं यदुवंश",
                  title: "Progenitors of the Yadava Clan & Ancestors of Lord Krishna",
                  category: "Lunar Dynasty of Kailasha",
                  tradition: "Shiva Purana",
                  parent: "sp-yayati-lineage",
                  parentName: "Emperor Yayati",
                  consort: "Princess of the Nagas",
                  vahana: "Royal Chariot",
                  ayudha: "Dharma Wheel & Mace",
                  color: "#F59E0B",
                  glowColor: "rgba(245, 158, 11, 0.8)",
                  icon: "🦚",
                  summary: "First son of Yayati and Devayani; preferred renunciation and righteousness, founding the glorious Yaduvamsha that gave birth to Lord Sri Krishna.",
                  shloka: {
                    devanagari: "यदोर्वंशं नरः श्रुत्वा सर्वपापैः प्रमुच्यते । यत्रावतीर्णो भगवान् परः नारायणः प्रभुः ॥",
                    transliteration: "Yador vaṁśaṁ naraḥ śrutvā sarva-pāpaiḥ pramucyate | Yatrāvatīrṇo bhagavān paraḥ nārāyaṇaḥ prabhuḥ ||",
                    source: "Vishnu Purana & Shiva Purana",
                    meaning: "Hearing the holy lineage of King Yadu frees a human being from all sins, for in that dynasty descended the Supreme Lord Narayana Himself as Krishna."
                  },
                  details: `
                    When Yayati asked his sons to exchange their youth for his old age, Yadu respectfully declined out of spiritual discrimination.
                    Yayati blessed Yadu that his descendants would be monarchs of renown, culminating in the descent of Sri Krishna and Balarama.
                  `,
                  keyAttributes: ["Fountainhead of the Yadava race", "Grandson of Ashokasundari & Nahusha", "Dynasty of Vasudeva, Balarama, and Sri Krishna"],
                  children: [
                    {
                      id: "sp-krishna-shiva-bhakti",
                      name: "Sri Krishna's Shaiva Diksha (Upamanyu Hermitage)",
                      sanskrit: "श्रीकृष्णस्य शिवदीक्षा (उपमन्यु आश्रम)",
                      title: "Lord Krishna's Penance to Lord Shiva for the Birth of Samba",
                      category: "Lunar Dynasty of Kailasha",
                      tradition: "Shiva Purana",
                      parent: "sp-yadu-dynasty",
                      parentName: "King Yadu",
                      consort: "Rukmini, Satyabhama & Jambavati",
                      vahana: "Garuda",
                      ayudha: "Sudarshana Chakra & Pashupatastra",
                      color: "#818CF8",
                      glowColor: "rgba(129, 140, 248, 0.85)",
                      icon: "🕉️",
                      summary: "In Shiva Purana (Kotirudra & Vayu Samhitas), Sri Krishna took Shaiva Diksha from Sage Upamanyu and meditated on Mount Kailasha to obtain divine boons.",
                      shloka: {
                        devanagari: "उपमन्युमुखाच्छ्रुत्वा शैवं पाशुपतं व्रतम् । कृष्णश्चकार नियतः शङ्करस्य प्रतोषणम् ॥",
                        transliteration: "Upamanyu-mukhāc chrutvā śaivaṁ pāśupataṁ vratam | Kṛṣṇaś cakāra niyataḥ śaṅkarasya pratoṣaṇam ||",
                        source: "Shiva Purana (Kotirudra Samhita 34.12)",
                        meaning: "Receiving the sacred Pashupata vow from the lips of Sage Upamanyu, Lord Krishna observed strict penance and fully propitiated Lord Shankara."
                      },
                      details: `
                        The Shiva Purana and Mahabharata (Anushasana Parva) record that Sri Krishna traveled to the ashram of Sage Upamanyu in the Himalayas.
                        Initiated into the Shiva Mantra and Pashupata vow, Krishna smeared his body with holy Bhasma, stood on one toe for years, and worshipped Sadashiva.
                        Lord Shiva and Mother Parvati appeared in transcendental glory, granting Krishna invincible sons (including Samba), mastery of divine weapons, and eternal Hari-Hara unity.
                      `,
                      keyAttributes: ["Initiated into Pashupata vow by Sage Upamanyu", "Lord Shiva granted boons to Sri Krishna", "Embodiment of eternal Hari-Hara non-difference"],
                      children: []
                    }
                  ]
                }
              ]
            }

          ]
        },
        {
          id: "sp-ayyappa",
          name: "Lord Ayyappa (Hariharaputra / Dharma Shasta)",
          sanskrit: "भगवान् अय्यप्प (हरिहरपुत्र / धर्मशास्ता, शबरिमल)",
          title: "Born of Shiva & Mohini-Vishnu • Sovereign of Sabarimala",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Lord Shiva & Lord Vishnu (as Mohini)",
          consort: "Naisthika Brahmachari (Goddess Malikapurathamma)",
          vahana: "Puli (The Tigress)",
          ayudha: "Bow and Arrow & Chin-Mudra",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.8)",
          icon: "🐯",
          summary: "Emanated from the divine union of Shiva and Mohini (Vishnu's enchantress avatara); vanquished demoness Mahishi; revered as the unifier of Shaivism and Vaishnavism at Sabarimala.",
          shloka: {
            devanagari: "भूतनाथ सदानन्द सर्वभूतदयापर । रक्ष रक्ष महाबाहो शास्त्रे तुभ्यं नमो नमः ॥",
            transliteration: "Bhūtanātha sadānanda sarva-bhūta-dayāpara | Rakṣa rakṣa mahābāho śāstre tubhyaṁ namo namaḥ ||",
            source: "Shasta Stotram",
            meaning: "O Lord of living beings, ever-blissful, compassionate to all creatures, protect us, O mighty-armed Dharma Shasta; salutations unto You."
          },
          details: `The Shiva Purana describes how Shiva was enchanted by Vishnu's Mohini form after the Samudra Manthana; their divine energy merged to manifest Dharma Shasta, the invincible protector.`,
          keyAttributes: ["Hariharaputra: Unified son of Shiva and Vishnu", "Lord of Sabarimala in Kerala", "Slayer of demoness Mahishi"],
          children: []
        },
        {
          id: "sp-manasa-devi",
          name: "Goddess Manasa Devi (Goddess of Serpents)",
          sanskrit: "देवी मनसा (शिव-मानसपुत्री / विषहरी)",
          title: "Sovereign of the Serpent Realms • Healer of All Poisons",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Lord Shiva's Mind-Born Grace & Sister of Vasuki",
          consort: "Sage Jaratkaru",
          vahana: "The Celestial Swan (Hamsa) & Lotus",
          ayudha: "Nagabharana & Amrita Kumbha",
          color: "#10B981",
          glowColor: "rgba(16, 185, 129, 0.8)",
          icon: "🐍",
          summary: "Mind-born daughter of Shiva's grace; master of serpent lore and herbal healing; married to Sage Jaratkaru; mother of Sage Astika who stopped the Sarpa Satra snake sacrifice.",
          shloka: {
            devanagari: "जरत्कारुप्रिया शान्ता मनसा विषहारिणी । नागमाता भगवती सर्वसिद्धिप्रदायिनी ॥",
            transliteration: "Jaratkāru-priyā śāntā manasā viṣa-hāriṇī | Nāga-mātā bhagavatī sarva-siddhi-pradāyinī ||",
            source: "Manasa Devi Stotram",
            meaning: "Beloved of Jaratkaru, peaceful, the remover of all poisons, Mother of the Nagas, the divine goddess who bestows all spiritual achievements."
          },
          details: `Celebrated widely in the Puranas as the compassionate daughter of Shiva who cures all forms of physical and mental poisons (*Visha*).`,
          keyAttributes: ["Controller of all serpent poisons", "Mother of Sage Astika", "Mind-born daughter of Mahadeva"],
          children: [
            {
              id: "sp-astika-sage",
              name: "Sage Astika (Protector of the Nagas)",
              sanskrit: "महर्षि आस्तीक (सर्पयज्ञ निवारक)",
              title: "Grandson of Shiva • Savior of the Serpent Race",
              category: "Vedic Sages",
              tradition: "Shiva Purana",
              parent: "sp-manasa-devi",
              parentName: "Goddess Manasa Devi & Sage Jaratkaru",
              consort: "Ascetic Life",
              vahana: "Sacred Kusha Grass",
              ayudha: "Vedic Truth & Tapasya",
              color: "#FACC15",
              glowColor: "rgba(250, 204, 21, 0.75)",
              icon: "🪶",
              summary: "Through deep Vedic eloquence and moral virtue, Sage Astika pleased King Janamejaya and convinced him to halt the Sarpa Satra, saving Takshaka and the serpent species.",
              shloka: {
                devanagari: "आस्तीकस्य वचः श्रुत्वा राजा यज्ञमथात्यजत् ।",
                transliteration: "Āstīkasya vacaḥ śrutvā rājā yajñam athātyajat |",
                source: "Mahabharata & Puranic Lore",
                meaning: "Hearing the sublime, righteous words of Sage Astika, the King Janamejaya stopped the great serpent sacrifice."
              },
              details: `Honored every year on Naga Panchami by devotees reciting Astika's name for protection.`,
              keyAttributes: ["Savior of the Naga race", "Son of Manasa Devi and grandson of Shiva", "Master of Vedic diplomacy and peace"],
              children: []
            }
          ]
        },
        {
          id: "sp-nandi-ganas",
          name: "Lord Nandi & The Kailasha Pramatha Ganas",
          sanskrit: "नन्दीश्वर (शिलादपुत्र) एवं प्रमथगणाः",
          title: "Supreme Gatekeeper of Kailasha • Commander of Shiva's Hosts",
          category: "Kailasha Family",
          tradition: "Shiva Purana",
          parent: "sp-kailasha-family",
          parentName: "Born to Sage Shilada through Shiva's Grace",
          consort: "Suyasha Devi",
          vahana: "The Celestial Bull",
          ayudha: "Golden Staff & Golden Horns",
          color: "#E2E8F0",
          glowColor: "rgba(226, 232, 240, 0.8)",
          icon: "🐂",
          summary: "Born to Sage Shilada after severe penance; granted immortality by Shiva and appointed chief of all Shiva Ganas; embodiment of Dharma, patience, and unblinking devotion.",
          shloka: {
            devanagari: "नन्दिकेश्वराय नमस्तुभ्यं साम्बपादपरायण । कैलासाचलनाथाय सर्वलोकैकसाक्षिणे ॥",
            transliteration: "Nandikeśvarāya namas tubhyaṁ sāmba-pāda-parāyaṇa | Kailāsācala-nāthāya sarva-lokaika-sākṣiṇe ||",
            source: "Shiva Purana (Rudra Samhita)",
            meaning: "Salutations to Nandikeshvara, wholly devoted to the lotus feet of Samba Shiva, guardian of Mount Kailasha, witness of all worlds."
          },
          details: `The Shiva Purana devotes multiple chapters to Shilada's penance and the coronation of Nandi as the supreme guardian of Shiva's inner court. Whispering one's prayers into Nandi's ear carries them directly to Shiva.`,
          keyAttributes: ["Embodiment of Dharma and unwavering Bhakti", "Commander of all Pramatha Ganas", "Gatekeeper of Kailasha"],
          children: [
            {
              id: "sp-bhringi-chandeshwara",
              name: "Sage Bhringi & Chandeshwara Nayanar",
              sanskrit: "ऋषि भृङ्गी एवं चण्डेश्वर (अनन्य शिवभक्त)",
              title: "The Three-Legged Ascetic & Guardian of Shiva's Nirmalya",
              category: "Kailasha Ganas",
              tradition: "Shiva Purana",
              parent: "sp-nandi-ganas",
              parentName: "Lord Nandi (Commander of Ganas)",
              consort: "Selfless Devotion",
              vahana: "Ascetic Staff",
              ayudha: "Third Leg of Shiva & Battle Axe",
              color: "#94A3B8",
              glowColor: "rgba(148, 163, 184, 0.75)",
              icon: "🪓",
              summary: "Bhringi's exclusive devotion to Shiva led Parvati to test him; Shiva blessed him with a third leg to dance. Chandeshwara was appointed by Shiva as the master of all temple offerings.",
              shloka: {
                devanagari: "चण्डेशाय नमस्तुभ्यं शिवभक्तिपरायण ।",
                transliteration: "Caṇḍeśāya namas tubhyaṁ śiva-bhakti-parāyaṇa |",
                source: "Agamic Invocation",
                meaning: "Salutations to Chandeshwara, foremost in devotion to Lord Shiva."
              },
              details: `In all Shiva temples, worship is traditionally concluded by seeking permission from Chandeshwara.`,
              keyAttributes: ["Exemplars of unconditional devotion", "Bhringi's mystical 3-legged dance", "Chandeshwara's guardianship of temple prasad"],
              children: []
            }
          ]
        }
      ]
    },

    /* ======================================================================
       BRANCH 3: SACRED AVATARAS & FIERCE EMANATIONS OF SHIVA
       Shatarudra Samhita Chapters 1 to 42
       ====================================================================== */
    {
      id: "sp-bhairava-rudras",
      name: "The Sacred Avataras & Fierce Emanations",
      sanskrit: "शिवस्य अवताराः एवं रौद्र स्वरूपाः (शतरुद्रसंहिता)",
      title: "Protectors of Truth, Dissolution Forces & Heroic Avataras",
      category: "Shiva Avataras",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva",
      consort: "Goddess Bhadrakali, Bhairavis & Yoginis",
      vahana: "Black Dog, War Chariot & Lion",
      ayudha: "Khadga, Trishula, Khatvanga, Kapala",
      color: "#991B1B",
      glowColor: "rgba(153, 27, 27, 0.85)",
      icon: "⚔️",
      summary: "In the Shatarudra Samhita, Shiva manifests as Primal Rudra, the 11 Rudras, Virabhadra, Kaala Bhairava, Sharabha, Hanuman, and ascetic sages to uphold cosmic Dharma.",
      shloka: {
        devanagari: "नमस्ते रुद्र मन्यव उतो त इषवे नमः । बाहुभ्यामुत ते नमः ॥",
        transliteration: "Namaste rudra manyava uto ta iṣave namaḥ | Bāhubhyām uta te namaḥ ||",
        source: "Yajurveda (Sri Rudram 1.1) & Shiva Purana",
        meaning: "Salutations to Your wrath, O Lord Rudra, and salutations to Your arrow; salutations unto both of Your mighty arms."
      },
      details: `The *Shatarudra Samhita* outlines the 19 primary avataras of Shiva, revealing that whenever arrogance or cosmic imbalance threatens creation, Shiva descends in fierce or ascetic manifestations.`,
      keyAttributes: ["19 Canonical Avataras of Shiva", "Destroyers of spiritual ego and demonic tyrants", "Guardians of sacred boundaries and righteousness"],
      children: [
        {
          id: "sp-primal-rudra",
          name: "Primal Rudra (Nilalohita)",
          sanskrit: "नीललोहित रुद्र (ब्रह्म-ललाटोद्भव)",
          title: "The First Manifested Roarer • Origin of the 11 Rudras",
          category: "Primal Rudra",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Sadashiva",
          consort: "Rudrani Devi",
          vahana: "Cosmic Storms",
          ayudha: "Pinaka Bow & Lightning Arrows",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.85)",
          icon: "⚡",
          summary: "Emerged from Brahma's forehead in blazing red and blue hues when the Kumaras refused to procreate; divided Himself into male and female (Ardhanarishvara) to catalyze cosmic reproduction.",
          shloka: {
            devanagari: "ललाटात् ब्रह्मणः पूर्वं प्रादुरासीत् त्रिलोचनः । नीललोहितनामा च सर्वलोकभयंकरः ॥",
            transliteration: "Lalāṭāt brahmaṇaḥ pūrvaṁ prādurāsīt trilocanaḥ | Nīlalohita-nāmā ca sarva-loka-bhayaṅkaraḥ ||",
            source: "Shiva Purana (Rudra Samhita 1.15)",
            meaning: "From Brahma's forehead arose the Three-Eyed Lord named Nilalohita (blue-throated and red-hued), dispelling all stagnation in creation."
          },
          details: `When Brahma was unable to manifest biological propagation, he meditated deeply. Shiva burst forth from between his eyebrows crying loudly (*Ruda*), hence named Rudra. Shiva revealed the Ardhanarishvara form to teach Brahma gender differentiation.`,
          keyAttributes: ["Emerged from Brahma's eyebrows", "Blue and red dual manifestation (Nilalohita)", "Revealer of the Ardhanarishvara form"],
          children: [
            {
              id: "sp-eleven-rudras",
              name: "The 11 Rudras (Ekadasha Rudra)",
              sanskrit: "एकादश रुद्राः (कपाली, पिङ्गल, भीम, विरूपाक्ष...)",
              title: "The Eleven Cosmic Destroyers & Planetary Guardians",
              category: "Ekadasha Rudra",
              tradition: "Shiva Purana",
              parent: "sp-primal-rudra",
              parentName: "Primal Rudra (Nilalohita)",
              consort: "Eleven Rudranis (Dhi, Vritti, Ushana...)",
              vahana: "Atmospheric Winds",
              ayudha: "Tridents & Firebolts",
              color: "#F97316",
              glowColor: "rgba(249, 115, 22, 0.8)",
              icon: "🌪️",
              summary: "Kapali, Pingala, Bhima, Virupaksha, Vilohita, Shastra, Ajapada, Ahirbudhnya, Shambhu, Chanda, and Bhava; cosmic forces that govern storms, vital breaths (Pranas), and universal dissolution.",
              shloka: {
                devanagari: "एकादशैते कथिता रुद्रा त्रिभुवनेश्वराः ।",
                transliteration: "Ekādaśaite kathitā rudrā tribhuvaneśvarāḥ |",
                source: "Shiva Purana (Shatarudra Samhita 18.25)",
                meaning: "These eleven Rudras are celebrated as sovereign lords of the three worlds."
              },
              details: `The 11 Rudras protect the ten directions and the upward zenith. They also correspond to the ten sensory and motor organs plus the mind within the human body.`,
              keyAttributes: ["11 Manifestations of Rudra", "Correspond to the 10 Pranas and the Mind", "Guardians of cosmic transitions"],
              children: []
            }
          ]
        },
        {
          id: "sp-virabhadra",
          name: "Lord Virabhadra & Goddess Bhadrakali",
          sanskrit: "भगवान् वीरभद्र एवं भद्रकाली (दक्षयज्ञ विनाशी)",
          title: "Born from Shiva's Matted Locks • Destroyers of Spiritual Pride",
          category: "Fierce Manifestation",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Shiva's Furious Matted Lock",
          consort: "Goddess Bhadrakali",
          vahana: "War Chariot drawn by 1,000 Horses",
          ayudha: "Great Khadga (Sword), Trishula, Pattisha",
          color: "#991B1B",
          glowColor: "rgba(153, 27, 27, 0.9)",
          icon: "⚔️",
          summary: "Born when Shiva struck the ground with His matted hair upon Sati's self-immolation; completely dismantled Daksha's arrogant Yajna, decapitated Daksha, and restored cosmic honor.",
          shloka: {
            devanagari: "जटां समुत्पाट्य सरोषमुग्रधीः शम्भुश्चकार प्रहतामथ क्षितौ । तस्मात् समुत्पन्न इवाग्निकल्पो वीरेश्वरो भीमवपुः प्रचण्डः ॥",
            transliteration: "Jaṭāṁ samutpāṭya saroṣam ugradhīḥ śambhuś cakāra prahatām atha kṣitau | Tasmāt samutpanna ivāgni-kalpo vīreśvaro bhīma-vapuḥ pracaṇḍaḥ ||",
            source: "Shiva Purana (Rudra Samhita 2.32)",
            meaning: "Plucking a matted lock in terrifying fury, Sambhu hurled it against the ground; from it erupted Virabhadra, blazing like the cosmic fire, gigantic and invincible."
          },
          details: `The Sati Khanda chronicles how Daksha excluded Shiva from his grand Vedic sacrifice. Sati attended uninvited and immolated herself in yogic fire when her father insulted Shiva. In overwhelming sorrow and wrath, Shiva created Virabhadra and Bhadrakali, who punished Daksha's pride.`,
          keyAttributes: ["Born of Shiva's fiery locks", "Dismantler of Daksha's arrogant Yajna", "Accompanied by Goddess Bhadrakali"],
          children: [
            {
              id: "sp-sati-shaktipeethas",
              name: "Goddess Sati & The 51 Shakti Peethas",
              sanskrit: "देवी सती एवं ५१ शक्तिपीठाः (दक्षयज्ञ पुनरुद्धार)",
              title: "Sacred Relics of the Divine Mother • Daksha's Goat Head",
              category: "Shakti Peethas",
              tradition: "Shiva Purana",
              parent: "sp-virabhadra",
              parentName: "Lord Virabhadra & Lord Shiva",
              consort: "Lord Shiva (as 51 Bhairavas)",
              vahana: "Sacred Earth of Bharatavarsha",
              ayudha: "Yogic Fire & Divine Grace",
              color: "#EC4899",
              glowColor: "rgba(236, 72, 153, 0.85)",
              icon: "🔥",
              summary: "Shiva resurrected repentant Daksha with a goat's head; carrying Sati's body in grief during His Tandava, Vishnu severed it with His Sudarshana Chakra, sanctifying 51 sacred Shakti Peethas across India.",
              shloka: {
                devanagari: "दक्षकन्या सती नाम या भूता प्राग्महोत्सवे । सा भूत्वा शैलतनया पार्वतीति पुनर्वृता ॥",
                transliteration: "Daksha-kanyā satī nāma yā bhūtā prāg-mahotsave | Sā bhūtvā śaila-tanayā pārvatīti punar vṛtā ||",
                source: "Shiva Purana (Sati Khanda)",
                meaning: "Sati, daughter of Daksha, having sacrificed her body in yogic fire, reincarnated as Parvati, daughter of the Himalayas, to reunite with Shiva forever."
              },
              details: `Wherever Sati's limbs fell, a holy Shakti Peetha manifested (Kamakhya, Kalighat, Vaishno Devi, etc.), each guarded perpetually by a manifestation of Bhairava.`,
              keyAttributes: ["51 Sacred Shakti Peethas of India", "Daksha restored with a goat head", "Promise of Sati's rebirth as Parvati"],
              children: []
            }
          ]
        },
        {
          id: "sp-kaala-bhairava",
          name: "Lord Kaala Bhairava (Kotwal of Kashi)",
          sanskrit: "भगवान् कालभैरव (अष्टभैरव नायक / काशी क्षेत्राधिपति)",
          title: "Supreme Master of Time • Severer of Brahma's Fifth Head",
          category: "Bhairava Manifestation",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Sadashiva",
          consort: "Bhairavi Devi",
          vahana: "Shvana (The Sacred Black Dog)",
          ayudha: "Kapala (Skull Cup), Trishula, Damaru",
          color: "#991B1B",
          glowColor: "rgba(153, 27, 27, 0.9)",
          icon: "🐕",
          summary: "Manifested from Shiva's finger-nail to sever Brahma's fifth proud head; purified of Brahma-hatya dosha at Kapalamochana Teertha in Kashi, appointed eternal police chief (Kotwal) of Varanasi.",
          shloka: {
            devanagari: "धर्मसेतुपालकं त्वधर्ममार्गनाशनं कर्मपाशमोचकं सुशर्मदायकं विभुम् । काशीपुराधिनाथ कालभैरवं भजे ॥",
            transliteration: "Dharma-setu-pālakaṁ tv adharma-mārga-nāśanaṁ karma-pāśa-mocakaṁ suśarma-dāyakaṁ vibhum | Kāśī-purādhinātha kāla-bhairavaṁ bhaje ||",
            source: "Kalabhairava Ashtakam (Adi Shankaracharya)",
            meaning: "Guardian of the bridge of Dharma, destroyer of unrighteousness, loosener of karmic shackles, dispenser of supreme welfare—I worship Kalabhairava, Lord of Kashi."
          },
          details: `The Shatarudra Samhita describes how Brahma's fifth head uttered arrogant words claiming supremacy over Shiva. Shiva produced Bhairava, who severed the head with his fingernail. To expiate the skull that stuck to his hand, Bhairava wandered the earth until he reached Kashi, where the skull fell at Kapalamochana Teertha.`,
          keyAttributes: ["Master of Time (Kala) and Karma", "Sovereign Protector (Kotwal) of Varanasi", "Accompanied by the sacred dog mount"],
          children: [
            {
              id: "sp-ashta-bhairavas",
              name: "The 8 Bhairavas (Ashta Bhairava)",
              sanskrit: "अष्टभैरवाः (असिताङ्ग, रुरु, चण्ड, क्रोध, उन्मत्त...)",
              title: "Guardians of the Eight Directions & Cosmic Gateways",
              category: "Ashta Bhairava",
              tradition: "Shiva Purana",
              parent: "sp-kaala-bhairava",
              parentName: "Lord Kaala Bhairava",
              consort: "Ashta Matrikas (Brahmani, Maheshwari...)",
              vahana: "Eight Vahanas (Swan, Ox, Peacock, Eagle, Horse, Lion, Elephant, Dog)",
              ayudha: "Eight Sacred Weapons",
              color: "#B91C1C",
              glowColor: "rgba(185, 28, 28, 0.8)",
              icon: "🛡️",
              summary: "Asitanga, Ruru, Chanda, Krodha, Unmatta, Kapala, Bhishana, and Samhara Bhairava; paired with the 8 Matrika goddesses to guard the directional perimeter of the universe and sacred Kashi.",
              shloka: {
                devanagari: "असिताङ्गो रुरुश्चण्डः क्रोधश्चोन्मत्तसंज्ञकः । कपाली भीषणश्चैव संहारश्चाष्ट भैरवाः ॥",
                transliteration: "Asitāṅgo ruruś caṇḍaḥ krodhaś conmatta-saṁjñakaḥ | Kapālī bhīṣaṇaś caiva saṁhāraś cāṣṭa bhairavāḥ ||",
                source: "Rudrayamala Tantra & Shiva Purana",
                meaning: "Asitanga, Ruru, Chanda, Krodha, Unmatta, Kapali, Bhishana, and Samhara—these are the eight supreme Bhairavas."
              },
              details: `Each Bhairava presides over a specific direction, controlling elemental and astrological forces to protect seekers from negative energies.`,
              keyAttributes: ["Eight Directional Protectors", "Paired with the Ashta Matrikas", "Anchors of the sacred geometry of Kashi"],
              children: []
            }
          ]
        },
        {
          id: "sp-hanuman-rudra",
          name: "Lord Hanuman (The 11th Rudra Avatara)",
          sanskrit: "भगवान् हनुमान् (एकादश रुद्र अवतार)",
          title: "Supreme Servant of Rama • Chiranjeevi Embodiment of Bhakti",
          category: "Rudra Avatara",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Shiva's Divine Energy (Carried by Vayu)",
          consort: "Naisthika Brahmachari",
          vahana: "Pranic Aerial Flight",
          ayudha: "Gada (Golden Mace) & Dronagiri Mountain",
          color: "#EA580C",
          glowColor: "rgba(234, 88, 12, 0.85)",
          icon: "🚩",
          summary: "In Shiva Purana Shatarudra Samhita Chapter 20, Shiva manifested His divine energy to assist Lord Vishnu's Rama avatara; carried by Vayu into Mother Anjana, born as the immortal hero Hanuman.",
          shloka: {
            devanagari: "शम्भोः सुतेजसा जातो हनूमान् कपिसत्तमः । रामकार्यार्थसिद्धयर्थं सर्वशत्रुविनाशनः ॥",
            transliteration: "Śambhoḥ su-tejasā jāto hanūmān kapi-sattamaḥ | Rāma-kāryārtha-siddhy-arthaṁ sarva-śatru-vināśanaḥ ||",
            source: "Shiva Purana (Shatarudra Samhita 20.31)",
            meaning: "From the supreme effulgent energy of Sambhu (Shiva) was born Hanuman, foremost among heroes, to ensure the fulfillment of Lord Rama's mission and destroy all demonic enemies."
          },
          details: `The Shiva Purana explicitly reveals that Lord Shiva manifested as Hanuman because as Shiva, He could not directly become Rama's servant; as Hanuman, He enjoyed the supreme bliss of humble service (*Dasyabhava*).`,
          keyAttributes: ["Direct 11th Rudra Avatara of Shiva", "Immortal Chiranjeevi", "Supreme master of grammar, yoga, and devotion"],
          children: []
        },
        {
          id: "sp-sharabha-avatara",
          name: "Lord Sharabha Avatara (Cosmic Pacifier)",
          sanskrit: "भगवान् शरभेश्वर (नरसिंह शान्ति कारक)",
          title: "Eight-Legged Avian-Lion • Harmonizer of Narasimha's Fury",
          category: "Shiva Avatara",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Sadashiva",
          consort: "Pratyangira Devi & Shulini Durga (Wings)",
          vahana: "Cosmic Sky",
          ayudha: "Golden Beak, Diamond Talons, Eight Legs",
          color: "#6366F1",
          glowColor: "rgba(99, 102, 241, 0.85)",
          icon: "🦅",
          summary: "When Lord Narasimha's wrath after slaying Hiranyakashipu threatened to incinerate the cosmos, Shiva assumed the Sharabha form (half-bird, half-lion with 8 legs) to embrace and pacify Narasimha.",
          shloka: {
            devanagari: "शरभाख्यं समास्थाय रूपं परममद्भुतम् । शान्तं चकार नृहरिं सर्वलोकाभयङ्करम् ॥",
            transliteration: "Śarabhākhyaṁ samāsthāya rūpaṁ paramam adbhutam | Śāntaṁ cakāra nṛhariṁ sarva-lokābhayaṅkaram ||",
            source: "Shiva Purana (Shatarudra Samhita 12.45)",
            meaning: "Assuming the wondrous, supreme form of Sharabha, Lord Shiva pacified Narasimha, dispelling all fear from the three worlds."
          },
          details: `Sharabha's two wings were Goddess Durga and Goddess Kali. When Sharabha wrapped his wings around Narasimha, Vishnu realized Shiva's grace, praised Him, and both deities merged into peaceful cosmic equilibrium.`,
          keyAttributes: ["Eight-legged winged lion-bird manifestation", "Pacified Narasimha's celestial fury", "Demonstrates unity of Vishnu and Shiva"],
          children: []
        },
        {
          id: "sp-shiva-rishis",
          name: "Durvasa, Pippalada & Ashwatthama",
          sanskrit: "दुर्वासा, पिप्पलाद एवं अश्वत्थामा (शिव-अंशावताराः)",
          title: "Ascetic Sages & The Warrior Chiranjeevi of Shiva",
          category: "Shiva Avatara Sages",
          tradition: "Shiva Purana",
          parent: "sp-bhairava-rudras",
          parentName: "Lord Sadashiva",
          consort: "Ascetic Tapasya",
          vahana: "Hermitage Forests & Battlefields",
          ayudha: "Kamandalu, Brahmastra & Tapasya Fire",
          color: "#D97706",
          glowColor: "rgba(217, 119, 6, 0.8)",
          icon: "📜",
          summary: "Durvasa (born to Atri and Anasuya) personifies Shiva's uncompromising ascetic discipline; Pippalada (son of Dadhichi) defeated Shani's afflictions; Ashwatthama embodies Shiva's warrior prowess.",
          shloka: {
            devanagari: "अत्रेः सुतो मुनिर्विप्र दुर्वासाः शङ्करात्मकः । सर्वलोकहिते युक्तः सत्यव्रतपरायणः ॥",
            transliteration: "Atreḥ suto munir vipra durvāsāḥ śaṅkarātmakaḥ | Sarva-loka-hite yuktaḥ satya-vrata-parāyaṇaḥ ||",
            source: "Shiva Purana (Shatarudra Samhita 19.12)",
            meaning: "Durvasa, the great sage born to Sage Atri, was an incarnation of Shankara, ever devoted to universal truth and ascetic fire."
          },
          details: `The Shatarudra Samhita chronicles these sages as practical manifestations of Shiva's fiery will operating in human history.`,
          keyAttributes: ["Durvasa: The sage of divine boons and tests", "Pippalada: Destroyer of planetary misery", "Ashwatthama: Immortal Chiranjeevi of the Mahabharata"],
          children: []
        }
      ]
    },

    /* ======================================================================
       BRANCH 4: LORD VISHNU & LORD BRAHMA (Emanated from Shiva)
       Vidyeshvara Samhita & Rudra Samhita Srishti Khanda
       ====================================================================== */
    {
      id: "sp-vishnu-brahma",
      name: "Lord Vishnu & Lord Brahma",
      sanskrit: "भगवान् विष्णु एवं ब्रह्मा (शिवाङ्गोद्भव)",
      title: "Preserver & Creator Emanated from Shiva's Left and Right Sides",
      category: "Cosmic Manifestations",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva (Left & Right Limbs)",
      consort: "Goddess Mahalakshmi & Goddess Saraswati",
      vahana: "Garuda & Hamsa (The Sacred Swan)",
      ayudha: "Sudarshana Chakra (Gifted by Shiva) & 4 Vedas",
      color: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.85)",
      icon: "🪷",
      summary: "In Shiva Purana Rudra Samhita, Sadashiva creates Vishnu from His left side for universal sustenance and Brahma from His right side for cosmic projection, establishing the cosmic order.",
      shloka: {
        devanagari: "मम वामाङ्गजः साक्षात् विष्णुरेष महामतिः । रक्षार्थं सर्वलोकानां स्थापितोऽसौ मया प्रभुः ॥",
        transliteration: "Mama vāmāṅgajaḥ sākṣāt viṣṇur eṣa mahāmatiḥ | Rakṣārthaṁ sarva-lokānāṁ sthāpito'sau mayā prabhuḥ ||",
        source: "Shiva Purana 2.1.9",
        meaning: "From My left side is born Lord Vishnu, endowed with supreme intellect, established by Me for the protection of all worlds."
      },
      details: `The Shiva Purana highlights the non-difference between Vishnu and Shiva as two aspects of the one divine essence: Shiva is the heart of Vishnu, and Vishnu is the heart of Shiva (*Śivasya hṛdayaṁ viṣṇuḥ*).`,
      keyAttributes: ["Vishnu born of Shiva's left side", "Brahma born of Shiva's right side", "Harmonious division of cosmic governance"],
      children: [
        {
          id: "sp-sudarshana-gift",
          name: "Lord Maha-Vishnu & Sudarshana Chakra",
          sanskrit: "भगवान् विष्णु एवं सुदर्शन चक्र प्राप्ति",
          title: "The Thousand-Lotus Worship • Gift of the Invincible Discus",
          category: "Vaishnava Branch in Shiva Purana",
          tradition: "Shiva Purana",
          parent: "sp-vishnu-brahma",
          parentName: "Lord Vishnu (Left Side of Shiva)",
          consort: "Goddess Mahalakshmi",
          vahana: "Garuda (King of Birds)",
          ayudha: "Sudarshana Chakra (gifted by Shiva), Kaumodaki, Shankha",
          color: "#06B6D4",
          glowColor: "rgba(6, 182, 212, 0.85)",
          icon: "☸️",
          summary: "To defeat the Daityas, Vishnu worshipped Shiva with 1,000 blue lotuses; when one lotus was missing, Vishnu offered His own lotus-eye. Pleased, Shiva bestowed the invincible Sudarshana Chakra.",
          shloka: {
            devanagari: "नेत्रपद्मं समुद्धृत्य पूजयामास शंकरम् । तुष्टेन शंकरात्तस्मै सुदर्शनमथार्पितम् ॥",
            transliteration: "Netra-padmaṁ samuddhṛtya pūjayāmāsa śaṅkaram | Tuṣṭena śaṅkarāt tasmai sudarśanam athārpitam ||",
            source: "Shiva Purana (Kotirudra Samhita 34.25)",
            meaning: "Plucking out His own lotus-like eye, Vishnu completed the thousandth offering to Shankara; deeply pleased, Shankara granted Him the invincible Sudarshana Chakra."
          },
          details: `The Shiva Purana and Mahabharata record that the Sudarshana Chakra, fashioned from the radiant essence of Shiva's cosmic light, was bestowed upon Vishnu for the eternal preservation of Dharma.`,
          keyAttributes: ["Vishnu offers His own eye as lotus", "Bestowal of the Sudarshana Chakra", "Vishnu named 'Kamalanetra' and 'Padmanabha'"],
          children: [
            {
              id: "sp-vishnu-avatars",
              name: "Vishnu's Avataras Honoring Shiva",
              sanskrit: "विष्णोः अवताराः एवं शिवाराधना (राम, कृष्ण, परशुराम)",
              title: "Rama at Rameshwaram • Krishna Receiving Pashupatastra",
              category: "Avataric Shiva Worship",
              tradition: "Shiva Purana",
              parent: "sp-sudarshana-gift",
              parentName: "Lord Maha-Vishnu",
              consort: "Sita Devi, Rukmini Devi, Dharani",
              vahana: "Garuda",
              ayudha: "Sharanga Bow & Pashupatastra",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.8)",
              icon: "🏹",
              summary: "Lord Sri Rama consecrated the Rameshwaram Jyotirlinga; Lord Krishna performed severe penance at Sage Upamanyu's ashram to receive the Pashupatastra and sons; Parashurama received his axe from Shiva.",
              shloka: {
                devanagari: "शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः । यथान्तरं न पश्यामि तथा मे स्वस्तिरायुषि ॥",
                transliteration: "Śivasya hṛdayaṁ viṣṇur viṣṇoś ca hṛdayaṁ śivaḥ | Yathāntaraṁ na paśyāmi tathā me svastir āyuṣi ||",
                source: "Skanda Purana & Shiva Purana",
                meaning: "Shiva is the heart of Vishnu, and Vishnu is the heart of Shiva; just as I perceive no difference between them, may I attain supreme auspiciousness."
              },
              details: `In the Mahabharata Anushasana Parva and Shiva Purana, Krishna narrates how He worshipped Shiva at Upamanyu's hermitage to obtain divine boons.`,
              keyAttributes: ["Rama consecrating Rameshwaram", "Krishna obtaining boons and Pashupatastra", "Parashurama receiving the Parashu weapon"],
              children: []
            }
          ]
        },
        {
          id: "sp-tripurantaka",
          name: "Lord Tripurantaka & Brahma Charioteer",
          sanskrit: "भगवान् त्रिपुरान्तक (ब्रह्मा सारथि, पृथिवी रथ)",
          title: "Annihilation of the Three Flying Citadels (Tripura)",
          category: "Cosmic War for Dharma",
          tradition: "Shiva Purana",
          parent: "sp-vishnu-brahma",
          parentName: "Lord Brahma & Lord Vishnu (Right & Left Limbs)",
          consort: "Cosmic Shakti",
          vahana: "The Earth as Chariot (Prithvi Ratha)",
          ayudha: "Pinaka Bow, Meru Mountain, Vishnu as Arrow",
          color: "#F59E0B",
          glowColor: "rgba(245, 158, 11, 0.85)",
          icon: "🏹",
          summary: "When the demon brothers Tarakaksha, Kamalaksha, and Vidyunmali terrorized creation with three floating cities of gold, silver, and iron, Shiva unified all divinities to destroy them with a single arrow.",
          shloka: {
            devanagari: "रथो धरित्री ब्रह्मा च सारथिर्धनुरागतः । मेरुर्विष्णुः शरश्चाभूत् त्रिपुरं दग्धवान् हरः ॥",
            transliteration: "Ratho dharitrī brahmā ca sārathir dhanur āgataḥ | Merur viṣṇuḥ śaraś cābhūt tripuraṁ dagdhavān haraḥ ||",
            source: "Shiva Purana (Yuddha Khanda 10.42)",
            meaning: "Earth became the chariot, Brahma the charioteer, Mount Meru the bow, and Vishnu the arrow; with these, Lord Hara burned the three flying cities in an instant."
          },
          details: `The Yuddha Khanda of Shiva Purana chronicles how Brahma served as Shiva's charioteer, demonstrating that all cosmic deities are limbs of the one Supreme Maheshwara.`,
          keyAttributes: ["Destruction of the 3 demon citadels of Tripura", "Earth was the chariot and Brahma was the charioteer", "Celebrated as Tripurantaka and Dev-Diwali"],
          children: []
        }
      ]
    },

    /* ======================================================================
       BRANCH 5: PANCHA-BRAHMA (The Five Transcendental Faces of Shiva)
       Vayaviya Samhita & Pancha Brahma Upanishad
       ====================================================================== */
    {
      id: "sp-panchabrahma",
      name: "Pancha-Brahma (Five Faces of Shiva)",
      sanskrit: "पञ्चब्रह्म (सद्योजात, वामदेव, अघोर, तत्पुरुष, ईशान)",
      title: "The Five Transcendental Aspects Governing the 5 Cosmic Functions",
      category: "Pancha-Brahma",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva",
      consort: "Pancha Shaktis (Iccha, Jnana, Kriya, Adi, Para)",
      vahana: "Cosmic Prana",
      ayudha: "Trishula, Damaru & Akshamala",
      color: "#FACC15",
      glowColor: "rgba(250, 204, 21, 0.85)",
      icon: "✨",
      summary: "Ishana (Ether / Grace), Tatpurusha (Air / Concealment), Aghora (Fire / Dissolution), Vamadeva (Water / Preservation), and Sadyojata (Earth / Creation) govern the five cosmic functions.",
      shloka: {
        devanagari: "ईशानः सर्वविद्यानामीश्वरः सर्वभूतानां ब्रह्माधिपतिर्ब्रह्मणोऽधिपतिर्ब्रह्मा शिवो मे अस्तु सदाशिवोम् ॥",
        transliteration: "Īśānaḥ sarva-vidyānām īśvaraḥ sarva-bhūtānāṁ brahmādhipatir brahmaṇo'dhipatir brahmā śivo me astu sadāśivom ||",
        source: "Taittiriya Aranyaka 10.47 & Shiva Purana",
        meaning: "Ishana is the Lord of all sciences, ruler of all beings, supreme sovereign of Brahma; may that auspicious Sadashiva bless me with grace."
      },
      details: `The *Pancha-Kritya* (Five Cosmic Actions) expounded in the Shiva Purana: Srishti (Creation), Sthiti (Preservation), Samhara (Dissolution), Tirobhava (Veiling of ignorance), and Anugraha (Spiritual liberation).`,
      keyAttributes: ["Five Faces facing North, South, East, West, and Zenith", "Govern the Five Cosmic Elements and Functions", "Foundation of Shaiva Agamic worship"],
      children: [
        {
          id: "sp-pb-sadyojata",
          name: "Sadyojata (West Face • Earth / Creation)",
          sanskrit: "सद्योजात (पश्चिम मुख • पृथ्वी / सृष्टि)",
          title: "The Creative Face • Pure White Radiance & Iccha Shakti",
          category: "Pancha-Brahma Face",
          tradition: "Shiva Purana",
          parent: "sp-panchabrahma",
          parentName: "Pancha-Brahma",
          consort: "Iccha Shakti (Will-Power)",
          vahana: "Earth (Prithvi Tattva)",
          ayudha: "Kamandalu & Sacred Mudra",
          color: "#E2E8F0",
          glowColor: "rgba(226, 232, 240, 0.8)",
          icon: "🌱",
          summary: "Facing West, pure white like the moon; represents the elemental Earth and the cosmic act of Srishti (manifesting physical forms and biology).",
          shloka: {
            devanagari: "सद्योजातं प्रपद्यामि सद्योजाताय वै नमो नमः । भवे भवे नातिभवे भवस्व मां भवोद्भावाय नमः ॥",
            transliteration: "Sadyojātaṁ prapadyāmi sadyojātāya vai namo namaḥ |",
            source: "Mahanarayana Upanishad 17.1",
            meaning: "I take refuge in Sadyojata; salutations to Sadyojata. In every birth, lead me beyond rebirth; salutations to the source of all existence."
          },
          details: `Associated with Brahma's creative agency, the physical sense of smell (Gandha), and the awakening of consciousness in matter.`,
          keyAttributes: ["West Face of Shiva", "Earth Element (Prithvi)", "Cosmic Function: Srishti (Creation)"],
          children: []
        },
        {
          id: "sp-pb-vamadeva",
          name: "Vamadeva (North Face • Water / Preservation)",
          sanskrit: "वामदेव (उत्तर मुख • जल / स्थिति)",
          title: "The Sustaining Face • Red-Gold Luster & Jnana Shakti",
          category: "Pancha-Brahma Face",
          tradition: "Shiva Purana",
          parent: "sp-panchabrahma",
          parentName: "Pancha-Brahma",
          consort: "Jnana Shakti (Wisdom / Nourishment)",
          vahana: "Water (Apah Tattva)",
          ayudha: "Rosary & Water Pot",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.8)",
          icon: "💧",
          summary: "Facing North, auspicious red-gold luster; represents the elemental Water and the cosmic act of Sthiti (protecting, nurturing, and maintaining life).",
          shloka: {
            devanagari: "वामदेवाय नमो ज्येष्ठाय नमः श्रेष्ठाय नमो रुद्राय नमः कालाय नमः ।",
            transliteration: "Vāmadevāya namo jyeṣṭhāya namaḥ śreṣṭhāya namo rudrāya namaḥ kālāya namaḥ |",
            source: "Mahanarayana Upanishad 18.1",
            meaning: "Salutations to Vamadeva (the lovely and auspicious lord), salutations to the eldest, salutations to the best, to Rudra, to Kala."
          },
          details: `Associated with Vishnu's sustaining energy, the sense of taste (Rasa), and maintaining internal physiological harmony.`,
          keyAttributes: ["North Face of Shiva", "Water Element (Apah)", "Cosmic Function: Sthiti (Preservation)"],
          children: []
        },
        {
          id: "sp-pb-aghora",
          name: "Aghora (South Face • Fire / Dissolution)",
          sanskrit: "अघोर (दक्षिण मुख • अग्नि / संहार)",
          title: "The Dissolving Face • Blue-Black Radiance & Kriya Shakti",
          category: "Pancha-Brahma Face",
          tradition: "Shiva Purana",
          parent: "sp-panchabrahma",
          parentName: "Pancha-Brahma",
          consort: "Kriya Shakti (Action & Purification)",
          vahana: "Fire (Tejas Tattva)",
          ayudha: "Trishula & Khatvanga",
          color: "#38BDF8",
          glowColor: "rgba(56, 189, 248, 0.8)",
          icon: "🔥",
          summary: "Facing South, deep blue/black like midnight; represents elemental Fire and the cosmic act of Samhara (dissolving illusions, ego, and corrupt forms).",
          shloka: {
            devanagari: "अघोरेभ्योऽथ घोरेभ्यो घोरघोरतरेभ्यः । सर्वेभ्यः सर्वशर्वेभ्यो नमस्ते अस्तु रुद्ररूपेभ्यः ॥",
            transliteration: "Aghorebhyo'tha ghorebhyo ghora-ghoratarebhyaḥ | Sarvebhyaḥ sarva-śarvebhyo namas te astu rudra-rūpebhyaḥ ||",
            source: "Mahanarayana Upanishad 19.1",
            meaning: "To the gentle, to the terrifying, to the terrible and more terrible, to all forms of Rudra, salutations unto You."
          },
          details: `'Aghora' literally means 'non-terrifying'—the dissolution of matter is gentle to those who surrender their ego, returning them to spiritual purity.`,
          keyAttributes: ["South Face of Shiva", "Fire Element (Tejas)", "Cosmic Function: Samhara (Dissolution)"],
          children: []
        },
        {
          id: "sp-pb-tatpurusha",
          name: "Tatpurusha (East Face • Air / Concealment)",
          sanskrit: "तत्पुरुष (पूर्व मुख • वायु / तिरोभाव)",
          title: "The Veiling Face • Golden Radiance & Adi Shakti",
          category: "Pancha-Brahma Face",
          tradition: "Shiva Purana",
          parent: "sp-panchabrahma",
          parentName: "Pancha-Brahma",
          consort: "Adi Shakti (Primordial Energy)",
          vahana: "Air (Vayu Tattva)",
          ayudha: "Akshamala & Gesture of Protection",
          color: "#FACC15",
          glowColor: "rgba(250, 204, 21, 0.8)",
          icon: "🌬️",
          summary: "Facing East, radiant golden like the morning sun; represents elemental Air and the cosmic act of Tirobhava (veiling divine reality to allow souls to experience and evolve).",
          shloka: {
            devanagari: "तत्पुरुषाय विद्महे महादेवाय धीमहि । तन्नो रुद्रः प्रचोदयात् ॥",
            transliteration: "Tat-puruṣāya vidmahe mahādevāya dhīmahi | Tanno rudraḥ pracodayāt ||",
            source: "Rudra Gayatri (Mahanarayana Upanishad 21.1)",
            meaning: "May we know that Supreme Being (Tatpurusha), may we meditate on Mahadeva; may that Rudra inspire our spiritual intellect."
          },
          details: `Associated with the cosmic breath (Prana), the sense of touch (Sparsha), and the mystery of individual existence under Maya.`,
          keyAttributes: ["East Face of Shiva", "Air Element (Vayu)", "Cosmic Function: Tirobhava (Veiling)"],
          children: []
        },
        {
          id: "sp-pb-ishana",
          name: "Ishana (Zenith / Upward Face • Grace / Anugraha)",
          sanskrit: "ईशान (ऊर्ध्व मुख • आकाश / अनुग्रह)",
          title: "The Liberating Face • Crystal Radiance & Para Shakti",
          category: "Pancha-Brahma Face",
          tradition: "Shiva Purana",
          parent: "sp-panchabrahma",
          parentName: "Pancha-Brahma",
          consort: "Para Shakti (Supreme Grace)",
          vahana: "Ether / Space (Akasha Tattva)",
          ayudha: "Crescent Moon & Abhaya Mudra",
          color: "#A855F7",
          glowColor: "rgba(168, 85, 247, 0.85)",
          icon: "🌌",
          summary: "Facing Zenith / Upward, crystalline pure and all-pervading; represents Space/Ether and the supreme cosmic act of Anugraha (divine grace, enlightenment, and Moksha).",
          shloka: {
            devanagari: "ईशानः सर्वविद्यानामीश्वरः सर्वभूतानाम् ।",
            transliteration: "Īśānaḥ sarva-vidyānām īśvaraḥ sarva-bhūtānām |",
            source: "Mahanarayana Upanishad 21.1",
            meaning: "Ishana is the supreme master of all spiritual knowledge, the sovereign ruler of all living souls."
          },
          details: `The crown of Shiva's five faces, directing the soul upwards through the Sushumna Nadi into Sahasrara chakra to achieve final union with Parabrahman.`,
          keyAttributes: ["Upward / Sky Face of Shiva", "Ether Element (Akasha)", "Cosmic Function: Anugraha (Grace & Moksha)"],
          children: []
        }
      ]
    },

    /* ======================================================================
       BRANCH 6: ASHTA MURTI (The Eight Cosmic Embodiments of Shiva)
       Vayaviya Samhita Chapters 1 to 4
       ====================================================================== */
    {
      id: "sp-ashtamurti",
      name: "Ashta Murti (Eight Embodiments of Shiva)",
      sanskrit: "अष्टमूर्ति (शर्व, भव, रुद्र, उग्र, भीम, पशुपति, ईशान, महादेव)",
      title: "The Eight Cosmic Bodies Constituting the Physical Multiverse",
      category: "Cosmic Embodiments",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Sadashiva",
      consort: "Eight Shaktis (Vikeshi, Uma, Suvarchala, Shivaa, Dikas, Svaha, Suvarna, Rohini)",
      vahana: "The Cosmos Itself",
      ayudha: "Eightfold Universal Energy",
      color: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.85)",
      icon: "🌍",
      summary: "Shiva embodied as Earth (Sharva), Water (Bhava), Fire (Rudra), Air (Ugra), Space (Bhima), Soul (Pashupati), Sun (Ishana), and Moon (Mahadeva).",
      shloka: {
        devanagari: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च । अष्टमूर्तिधरो देवः सर्वव्यापी महेश्वरः ॥",
        transliteration: "Bhūmir āpo'nalo vāyuḥ khaṁ mano buddhir eva ca | Aṣṭa-mūrti-dharo devaḥ sarva-vyāpī maheśvaraḥ ||",
        source: "Shiva Purana (Vāyavīya Saṁhitā 2.3)",
        meaning: "Earth, water, fire, air, space, mind, intellect, and the conscious soul—the Eight-Formed Lord is the omnipresent Maheshwara sustaining the cosmos."
      },
      details: `Expounded in the *Vayaviya Samhita* of Shiva Purana and celebrated in Kalidasa's *Abhijnana Shakuntalam* invocation. The universe is not separate from Shiva: it is His visible eightfold physical body (*Pratyaksha Murti*).`,
      keyAttributes: ["The Five Gross Elements (Pancha Mahabhutas)", "The Two Cosmic Luminaries (Sun & Moon)", "The Conscious Soul (Yajamana / Kshetrajna)"],
      children: [
        {
          id: "sp-am-five-elements",
          name: "The Five Elements (Sharva, Bhava, Rudra, Ugra, Bhima)",
          sanskrit: "पञ्चभूतात्मक मूर्तयः (पृथ्वी, जल, अग्नि, वायु, आकाश)",
          title: "Earth, Water, Fire, Air & Space as the Physical Flesh of Shiva",
          category: "Ashta Murti",
          tradition: "Shiva Purana",
          parent: "sp-ashtamurti",
          parentName: "Ashta Murti",
          consort: "Vikeshi, Uma, Suvarchala, Shivaa, Dikas",
          vahana: "The Elemental Multiverse",
          ayudha: "Pancha Bhutas",
          color: "#10B981",
          glowColor: "rgba(16, 185, 129, 0.8)",
          icon: "🌍",
          summary: "Sharva supports all bodies as solid Earth; Bhava flows as living Water; Rudra warms as vital Fire; Ugra breathes as atmospheric Air; Bhima provides dimensional Space.",
          shloka: {
            devanagari: "शर्वः क्षितिपतिः ख्यातो भवो वारिपतिः स्मृतः । रुद्रो वह्निपतिश्चैव उग्रो वायुपतिर्महान् ॥",
            transliteration: "Śarvaḥ kṣiti-patiḥ khyāto bhavo vāri-patiḥ smṛtaḥ | Rudro vahni-patiś caiva ugro vāyu-patir mahān ||",
            source: "Shiva Purana (Vayaviya Samhita)",
            meaning: "Sharva is celebrated as the Lord of Earth, Bhava is known as the Lord of Waters, Rudra is Lord of Fire, and Ugra is the mighty Lord of Wind."
          },
          details: `Every physical atom, drop of moisture, spark of metabolism, breath of respiration, and spatial field is a direct pulsation of Shiva's elemental Murtis.`,
          keyAttributes: ["Earth (Sharva), Water (Bhava), Fire (Rudra)", "Air (Ugra), Space (Bhima)", "Sustains physical biology across all worlds"],
          children: []
        },
        {
          id: "sp-am-luminaries",
          name: "The Sun & Moon (Ishana & Mahadeva)",
          sanskrit: "सूर्याचन्द्रमसौ (ईशान एवं महादेव मूर्ति)",
          title: "The Cosmic Eyes Regulating Light, Time & Life-Rhythms",
          category: "Ashta Murti",
          tradition: "Shiva Purana",
          parent: "sp-ashtamurti",
          parentName: "Ashta Murti",
          consort: "Suvarna (Sun) & Rohini (Moon)",
          vahana: "The Solar & Lunar Chariots",
          ayudha: "Light Rays & Somarasa Nectar",
          color: "#FACC15",
          glowColor: "rgba(250, 204, 21, 0.8)",
          icon: "☀️",
          summary: "Ishana illuminates as the physical Sun (Pratyaksha Devata), providing vital energy and photosynthesis; Mahadeva soothes as the Moon, nourishing plants with Soma nectar.",
          shloka: {
            devanagari: "दीक्षितां तनुमास्थाय यजमानस्वरूपिणीम् । सूर्याचन्द्रमसौ चैव जगन्निर्माय तिष्ठति ॥",
            transliteration: "Dīkṣitāṁ tanum āsthāya yajamāna-svarūpiṇīm | Sūryā-candramasau caiva jagan nirmāya tiṣṭhati ||",
            source: "Shiva Purana",
            meaning: "Assuming the forms of the Sun and Moon, and the initiated conscious soul, the Lord sustains the vast created universe."
          },
          details: `The two cosmic regulators of day and night, seasons, harvests, human vision, and sleep cycles.`,
          keyAttributes: ["The Sun (Ishana) gives life-force and vision", "The Moon (Mahadeva) gives mental peace and plant nectar", "The two luminous eyes of the Supreme Lord"],
          children: []
        },
        {
          id: "sp-am-pashupati",
          name: "Pashupati (The Living Conscious Soul)",
          sanskrit: "पशुपति मूर्ति (यजमान / जीवात्मा साक्षी)",
          title: "The Conscious Witness Dwelling Within Every Living Soul",
          category: "Ashta Murti",
          tradition: "Shiva Purana",
          parent: "sp-ashtamurti",
          parentName: "Ashta Murti",
          consort: "Goddess Svaha (Inner Spiritual Consecration)",
          vahana: "The Human Heart (Hridaya Akasha)",
          ayudha: "Pashahartri (Cutter of Karmic Nooses)",
          color: "#8B5CF6",
          glowColor: "rgba(139, 92, 246, 0.8)",
          icon: "👁️",
          summary: "The 8th Murti is Pashupati: Shiva dwelling as the conscious observer (Yajamana / Kshetrajna) inside all living creatures (Pashus), liberating them from worldly bonds (Pasha).",
          shloka: {
            devanagari: "पशूनां पतये नित्यं नमः पाशविमोचक ।",
            transliteration: "Paśūnāṁ pataye nityaṁ namaḥ pāśa-vimocaka |",
            source: "Shiva Purana (Vayaviya Samhita)",
            meaning: "Salutations perpetually to Pashupati, the Lord of all living souls, the merciful liberator of karmic bonds."
          },
          details: `Sanatan Dharma teaches that living beings are called 'Pashu' because they are tethered by the noose (*Pasha*) of ignorance, ego, and attachment. When the soul surrenders to Pashupati, He cuts the noose and grants liberation.`,
          keyAttributes: ["Inner Conscious Soul (Yajamana)", "Cuts the three ropes: Avidya, Karma, Maya", "Converts the bound soul (Pashu) into Shiva"],
          children: []
        }
      ]
    },
    /* ----------------------------------------------------------------------
       BRANCH 7: THE SACRED DYNASTIES & SHAIVA KINGS OF SHIVA PURANA
       ---------------------------------------------------------------------- */
    {
      id: "sp-shaiva-dynasties",
      name: "The Sacred Dynasties & Shaiva Kings",
      sanskrit: "शिवपुराणीय राजवंश एवं परमभक्ताः",
      title: "Royal, Himalayan, Solar, Historical & Daitya Dynasties Glorified in Shiva Purana",
      category: "Shaiva Royal Dynasties",
      tradition: "Shiva Purana",
      parent: "sp-sadashiva",
      parentName: "Lord Paramashiva",
      consort: "Universal Rajas & Tamas Sovereignty",
      vahana: "Imperial Golden Chariots & Airavata",
      ayudha: "Shiva Kavacha, Pashupatastra & Royal Scepters",
      color: "#F59E0B",
      glowColor: "rgba(245, 158, 11, 0.85)",
      icon: "👑",
      summary: "Across the Shiva Purana (Rudra, Kotirudra & Uma Samhitas), glorious royal dynasties—Himalayan, Solar, Lunar, and Daitya—attained immortality through unwavering Shiva-Bhakti.",
      shloka: {
        devanagari: "राजानो मुनयो देवा दैत्याश्चापि महौजसः । शिवप्रसादात् सम्प्राप्ताः साम्राज्यं पदमुत्तमम् ॥",
        transliteration: "Rājāno munayo devā daityāś cāpi mahaujasaḥ | Śiva-prasādāt samprāptāḥ sāmrājyaṁ padam uttamam ||",
        source: "Shiva Purana (Kotirudra Samhita 1.14)",
        meaning: "Monarchs, sages, demigods, and even mighty Daitya sovereigns obtained universal suzerainty and supreme liberation solely through the benign grace of Lord Shiva."
      },
      details: `
        The Shiva Purana is not merely an ascetic manual—it is the royal history of cosmic dynasties that ruled the earth under Shiva's sovereignty.
        From **King Himavat** (father-in-law of Shiva) and **Prajapati Daksha**, to the great Solar emperors (**Bhagiratha**, **Mandhata**, **Harishchandra**), historical monarchs (**Chandrasena** of Ujjain, **Bhadrayu** of Dasharna), and even reformed Daitya sovereigns (**Banasura**, **Ravana**), Shiva's unconditional grace protected the righteous and disciplined the haughty.
      `,
      keyAttributes: [
        "Unifies Himalayan, Solar, Lunar, and Asura lineages",
        "Records historical kings delivered by the 12 Jyotirlingas",
        "Celebrates the transformative power of Shiva-Bhakti across all castes and species"
      ],
      children: [
        /* --- 7.1 HIMALAYAN ROYAL DYNASTY --- */
        {
          id: "sp-himavat-dynasty",
          name: "King Himavat & Queen Menā (The Mountain Royalty)",
          sanskrit: "पर्वतराज हिमवान् एवं महारानी मेना",
          title: "Sovereign of the Snow-Capped Himalayas • In-Laws of Lord Shiva",
          category: "Himalayan Dynasty",
          tradition: "Shiva Purana",
          parent: "sp-shaiva-dynasties",
          parentName: "The Sacred Dynasties & Shaiva Kings",
          consort: "Queen Menā (daughter of Svadhā & Prajapati)",
          vahana: "Snow Lion & Golden Peak Chariot",
          ayudha: "Mountain Scepter & Gem-Studded Bow",
          color: "#06B6D4",
          glowColor: "rgba(6, 182, 212, 0.85)",
          icon: "🏔️",
          summary: "Monarch of the world's highest mountains; father of Goddess Parvati (Uma), Ganga Devi, and Prince Maināka, celebrated in the Parvati Khanda of Shiva Purana.",
          shloka: {
            devanagari: "अस्त्युत्तरस्यां दिशि देवतात्मा हिमालयो नाम नगाधिराजः । पूर्वापरौ तोयनिधी वगाह्य स्थितः पृथिव्या इव मानदण्डः ॥",
            transliteration: "Asty uttarasyāṁ diśi devatātmā himālayo nāma nagādhirājaḥ | Pūrvāparau toya-nidhī vagāhya sthitaḥ pṛthivyā iva māna-daṇḍaḥ ||",
            source: "Kalidasa's Kumarasambhavam & Shiva Purana",
            meaning: "In the northern direction reigns the divine-souled king of mountains, the Himalaya, spanning the eastern and western oceans like the cosmic measuring rod of the earth."
          },
          details: `
            In Shiva Purana (*Rudra Samhita - Parvati Khanda*), King Himavat and Queen Menā performed immense penances to invite the Supreme Goddess Adi Parashakti to be born as their daughter.
            Parvati performed thousands of years of Tapas in the snows, ultimately leading to the grand cosmic wedding at Himavat's capital in Okhimath / Triyuginarayan, where Brahma was the priest and Vishnu gave away the bride.
          `,
          keyAttributes: ["King of the holy Himalayan range", "Father of Parvati, Ganga, and Maināka", "Site of the eternal wedding at Triyuginarayan"],
          children: [
            {
              id: "sp-mainaka-ganga",
              name: "Prince Maināka & Goddess Ganga Devi",
              sanskrit: "राजकुमार मैनाक एवं देवनदी गङ्गा",
              title: "Golden-Winged Mountain Prince & Celestial River Held in Shiva's Locks",
              category: "Himalayan Dynasty",
              tradition: "Shiva Purana",
              parent: "sp-himavat-dynasty",
              parentName: "King Himavat & Queen Menā",
              consort: "Shantanu (for Ganga) & Celestial Nymphs",
              vahana: "Makara (Crocodile) for Ganga; Golden Wings for Maināka",
              ayudha: "Kamandalu, Lotus & Golden Peaks",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.85)",
              icon: "🌊",
              summary: "Maināka retained his golden wings and sheltered Hanuman; Ganga descended from heaven and was gently bound in Shiva's matted locks (Gangadhara) before flowing to purify the earth.",
              shloka: {
                devanagari: "गङ्गाधराय गिरिशाय नमो नमस्ते जटाकलापधवलाय नमो नमस्ते । पादाम्बुजप्रणतसर्वसुरासुराय गौरीविलासरसिताय नमो नमस्ते ॥",
                transliteration: "Gaṅgādharāya giriśāya namo namaste jaṭā-kalāpa-dhavalāya namo namaste | Pādāmbuja-praṇata-sarva-surāsurāya gaurī-vilāsa-rasitāya namo namaste ||",
                source: "Shiva Stotram",
                meaning: "Salutations to the bearer of Ganga, Lord of the mountains! Salutations to Him whose matted locks are purified by white celestial waters, before whose lotus feet all gods and demons bow!"
              },
              details: `
                Ganga is the elder sister of Goddess Parvati. When Emperor Bhagiratha brought her down from heaven, her torrential flow threatened to shatter the globe.
                Lord Shiva expanded His matted locks (Jatā) and absorbed the entire celestial river, releasing her in seven gentle streams (Bhagirathi, Alaknanda, Mandakini, etc.).
                Prince Maināka was the brother of Parvati, hidden under the southern ocean, who later rose to offer resting shelter to Lord Hanuman during his leap to Lanka.
              `,
              keyAttributes: ["Elder sister and brother of Goddess Parvati", "Ganga purified the 60,000 sons of Sagara", "Maināka sheltered Hanuman in Ramayana Sundara Kanda"],
              children: []
            }
          ]
        },

        /* --- 7.2 DAKSHA PRAJAPATI DYNASTY --- */
        {
          id: "sp-daksha-dynasty",
          name: "Prajapati Daksha & Queen Prasuti",
          sanskrit: "प्रजापति दक्ष एवं महारानी प्रसूति",
          title: "Ruler of Kankhal • Father of Goddess Sati & The 27 Lunar Mansions",
          category: "Prajapati Dynasty",
          tradition: "Shiva Purana",
          parent: "sp-shaiva-dynasties",
          parentName: "The Sacred Dynasties & Shaiva Kings",
          consort: "Queen Prasuti (daughter of Svayambhuva Manu)",
          vahana: "White Steed of Kankhal",
          ayudha: "Sacrificial Scepter & Goat Head (Ajamukha)",
          color: "#FB923C",
          glowColor: "rgba(251, 146, 60, 0.8)",
          icon: "🔥",
          summary: "Son of Brahma; his daughter Sati wedded Shiva. When Daksha insulted Shiva at the Kankhal sacrifice, Virabhadra dismantled the sacrifice, giving Daksha a goat-head to teach humility.",
          shloka: {
            devanagari: "दक्षस्य तु शिरश्छित्त्वा प्रहसन्निव वीरहा । दक्षिणाग्नावथाक्षिप्य दक्षयज्ञं व्यनाशयत् ॥",
            transliteration: "Dakṣasya tu śiraś chittvā prahasann iva vīra-hā | Dakṣiṇāgnāv athākṣipya dakṣa-yajñaṁ vyanāśayat ||",
            source: "Shiva Purana (Sati Khanda 37.15)",
            meaning: "Severing Daksha's arrogant head as if in playful ease, Virabhadra cast it into the sacrificial fire and utterly dismantled the haughty sacrifice."
          },
          details: `
            In Shiva Purana (*Rudra Samhita - Sati Khanda*), Daksha's dynasty connects the Prajapati line to both Shiva and Chandra (the Moon).
            Daksha had 27 daughters married to Chandra (the 27 Nakshatras). When Chandra showed favoritism to Rohini, Daksha cursed him with consumption (Kshaya Roga).
            Chandra meditated upon Shiva at Prabhasa Kshetra; Shiva cured him by placing the crescent moon upon His own brow, manifesting the first **Somnath Jyotirlinga**.
          `,
          keyAttributes: ["Ruler of the historic Kankhal sacrifice", "Father of Goddess Sati (origin of 51 Shakti Peethas)", "Father of Rohini and the 27 Nakshatras"],
          children: []
        },

        /* --- 7.3 SHAIVA SOLAR KINGS (SURYAVAMSHA) --- */
        {
          id: "sp-shaiva-suryavamsha",
          name: "The Solar Kings of Shiva Purana (Suryavamsha)",
          sanskrit: "शिवपुराणोक्ताः सूर्यवंशीय नरपतयः",
          title: "Bhagiratha, Mandhata & Harishchandra • Emperors Delivered by Shiva's Grace",
          category: "Shaiva Royal Dynasties",
          tradition: "Shiva Purana",
          parent: "sp-shaiva-dynasties",
          parentName: "The Sacred Dynasties & Shaiva Kings",
          consort: "Solar Empresses of Ayodhya",
          vahana: "Solar Golden Chariot",
          ayudha: "Dharma Bow, Tapas Staff & Royal Crown",
          color: "#EAB308",
          glowColor: "rgba(234, 179, 8, 0.85)",
          icon: "☀️",
          summary: "The greatest emperors of Ayodhya's Solar Dynasty achieved their cosmic feats—bringing Ganga, manifesting Omkareshwar, and upholding eternal truth—through intense Shiva-Bhakti.",
          shloka: {
            devanagari: "सूर्यवंशे समुद्भूताः शम्भुभक्तिपरायणाः । सगरस्य सुतान् सर्वान् भगीरथस्ततार ह ॥",
            transliteration: "Sūrya-vaṁśe samudbhūtāḥ śambhu-bhakti-parāyaṇāḥ | Sagarasya sutān sarvān bhagīrathas tatāra ha ||",
            source: "Shiva Purana (Kotirudra Samhita 27.2)",
            meaning: "Born in the Solar Dynasty and deeply devoted to Lord Shambhu, Emperor Bhagiratha delivered all sixty thousand sons of King Sagara through Shiva's grace."
          },
          details: `
            The Shiva Purana highlights how the iconic accomplishments of the Suryavamsha monarchs were anchored in Shaiva devotion:
            - **Bhagiratha's** Tapas compelled Shiva to become Gangadhara.
            - **Mandhata's** austerities on the Narmada brought forth Omkareshwar.
            - **Harishchandra's** uncompromising devotion to truth was tested and sanctified by Shiva at the cremation grounds of Kashi.
          `,
          keyAttributes: ["Fountainhead of the Ayodhya emperors", "Manifestors of Ganga and Omkareshwar Jyotirlinga", "Pillars of Satya and Tapas in Puranic history"],
          children: [
            {
              id: "sp-king-bhagiratha",
              name: "King Bhagiratha (Bringer of Sacred Ganga)",
              sanskrit: "महाराज भगीरथ (गङ्गावतरण प्रणेता)",
              title: "Monarch of Ayodhya • Champion of Impossible Perseverance (Bhagiratha Prayatna)",
              category: "Shaiva Royal Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-suryavamsha",
              parentName: "The Solar Kings of Shiva Purana",
              consort: "Empress of Kosala",
              vahana: "Royal Solar Chariot",
              ayudha: "Kamandalu, Conch & Tapas Scepter",
              color: "#38BDF8",
              glowColor: "rgba(56, 189, 248, 0.85)",
              icon: "🌊",
              summary: "Great-grandson of Sagara; stood on one toe at Mount Kailasha for a thousand years, convincing Shiva to cushion Ganga's cataclysmic descent.",
              shloka: {
                devanagari: "भगीरथेन संस्तुतो महादेवः पिनाकधृक् । जटाजूटे दधाराथ गङ्गां गगनवेगतः ॥",
                transliteration: "Bhagīrathena saṁstuto mahā-devaḥ pināka-dhṛk | Jaṭā-jūṭe dadhārātha gaṅgāṁ gagana-vegataḥ ||",
                source: "Shiva Purana (Uma Samhita 39.18)",
                meaning: "Praised by the arduous austerities of Bhagiratha, Mahadeva who wields the Pinaka bow received the torrential Ganga into His matted hair as she plunged from heaven."
              },
              details: `
                Bhagiratha's devotion is immortalized in Indian civilization as the proverb *Bhagiratha Prayatna* (superhuman persistence).
                Seeing that mother earth would crack under Ganga's celestial weight, Bhagiratha prayed to Lord Shiva at Mount Kailasha.
                Shiva expanded His matted locks, caught the entire raging river without letting a drop spill destructively, and released her in peaceful, life-giving streams.
              `,
              keyAttributes: ["Redeemed the ashes of his 60,000 ancestors", "Lord Shiva became Gangadhara for him", "Guiding father of the sacred river (Bhagirathi)"],
              children: []
            },
            {
              id: "sp-emperor-mandhata",
              name: "Emperor Mandhata (Omkareshwar Manifestor)",
              sanskrit: "चक्रवर्ती मान्धाता (ओंकारेश्वर प्रतिष्ठापक)",
              title: "Universal Chakravartin of the Solar Dynasty • Manifestor of the 4th Jyotirlinga",
              category: "Shaiva Royal Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-suryavamsha",
              parentName: "The Solar Kings of Shiva Purana",
              consort: "Bindumati (daughter of King Shashabindu)",
              vahana: "Chakravartin Chariot of Jambudvipa",
              ayudha: "Chakra Missile, Bow & Royal Umbrella",
              color: "#F59E0B",
              glowColor: "rgba(245, 158, 11, 0.8)",
              icon: "🪔",
              summary: "Son of Yuvanashva; conquered the earth from where the sun rises to where it sets. His austerities on the island of Mandhata on the Narmada manifested Omkareshwar Jyotirlinga.",
              shloka: {
                devanagari: "यावत् सूर्य उदेति स्म यावच्च प्रतितिष्ठति । सर्वं तद् यौवनाश्वस्य मान्धातुः क्षेत्रमुच्यते ॥",
                transliteration: "Yāvat sūrya udeti sma yāvac ca pratitiṣṭhati | Sarvaṁ tad yauvanāśvasya māndhātuḥ kṣetram ucyate ||",
                source: "Vishnu Purana 4.2.65 & Shiva Purana",
                meaning: "From where the sun rises in the east to where it sets in the west, that entire realm was the righteous domain of Mandhata, son of Yuvanashva."
              },
              details: `
                In Shiva Purana (*Kotirudra Samhita 18*), Emperor Mandhata was the greatest emperor of the early Solar Dynasty.
                Seeking the ultimate spiritual liberation beyond earthly sovereignty, he traveled to the sacred island on the Narmada River shaped like the sacred syllable ॐ (AUM).
                Performing severe austerities, Lord Shiva appeared and manifested as the twin Jyotirlingas: **Omkareshwar** (Lord of Omkara) and **Mamleshwar** (Amaleshwar / Lord of the Pure).
              `,
              keyAttributes: ["Conquered all seven continents in a single day", "Established Omkareshwar Jyotirlinga on the Narmada", "The sacred island is named 'Mandhata Island' to this day"],
              children: []
            },
            {
              id: "sp-king-harishchandra",
              name: "King Harishchandra (The Kashi Truth-Emperor)",
              sanskrit: "सत्यवादी राजा हरिश्चन्द्र (मणिकर्णिका मोक्षदाता)",
              title: "Monarch of Ayodhya • The Paragon of Truth Consecrated at Kashi Vishwanath",
              category: "Shaiva Royal Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-suryavamsha",
              parentName: "The Solar Kings of Shiva Purana",
              consort: "Queen Taramati & Prince Rohitashva",
              vahana: "Royal Chariot",
              ayudha: "Staff of Uncompromising Truth (Satya Danda)",
              color: "#CA8A04",
              glowColor: "rgba(202, 138, 4, 0.8)",
              icon: "⚖️",
              summary: "Sold his kingdom, queen, son, and himself at the Manikarnika cremation ground in Varanasi to uphold truth; Lord Shiva appeared to grant him and his citizens eternal liberation.",
              shloka: {
                devanagari: "चन्द्रस्तरेन्मही व्योम्नि तारा मण्डलमम्बरे । न हि सत्यं त्यजेद्राजा हरिश्चन्द्रो महायशाः ॥",
                transliteration: "Candras taren mahī vyomni tārā maṇḍalam ambare | Na hi satyaṁ tyajed rājā hariścandro mahā-yaśāḥ ||",
                source: "Markandeya Purana & Shiva Purana",
                meaning: "The moon may fall, the earth may dissolve in sky, the stars may wander from heaven, but the illustrious King Harishchandra will never abandon the truth!"
              },
              details: `
                In the Shiva Purana (Kashi Mahatmya / Kotirudra Samhita), King Harishchandra's trials in Kashi form one of the most poignant testaments to spiritual truth.
                Tested by Sage Vishvamitra, he served as an assistant to the cremation attendant at the Manikarnika Ghat of sacred Varanasi.
                When his wife arrived with their dead child Rohitashva, Harishchandra refused to perform the cremation without the customary fee, upholding his duty.
                Lord Shiva, accompanied by all the Devas and Sages, halted the scene, brought Rohitashva back to life, and led Harishchandra, Taramati, and his entire kingdom directly to Shiva-Loka.
              `,
              keyAttributes: ["Paragon of Satya (Truth) in Indian civilization", "Tested at Manikarnika Ghat of Kashi Vishwanath", "Granted Shiva-Sayujya Mukti along with his citizens"],
              children: [
                {
                  id: "sp-brihadbala-yashodharman",
                  name: "From Brihadbala to King Yashodharman (to 528 AD)",
                  sanskrit: "बृहद्बल ते सम्राट् यशोधर्मन् (मालव शैवेश्वर • ५२८ ईस्वी)",
                  title: "Defenders of Aryavarta • Consecrator of the Sondani Shiva Victory Pillars",
                  category: "Shaiva Royal Dynasties",
                  tradition: "Shiva Purana",
                  parent: "sp-king-harishchandra",
                  parentName: "King Harishchandra",
                  consort: "Empresses of Malwa",
                  vahana: "Imperial War Chariot",
                  ayudha: "Sondani Victory Pillar & Pinaka Bow",
                  color: "#F59E0B",
                  glowColor: "rgba(245, 158, 11, 0.9)",
                  icon: "🏛️",
                  summary: "Continuing the Shaiva Solar kings down to 500–528 AD: King Yashodharman of Malwa shattered the brutal Huna invasion, bowing his head only to Lord Shiva who holds the Trident.",
                  shloka: {
                    devanagari: "स्थाणोरन्यत्र येन प्रणतिकृपणतां प्रापितं नोत्तमाङ्गं यस्यालक्तकाङ्काञ्छिरसि मणिरुचः पादयोर्न्यञ्चयन्ति ॥",
                    transliteration: "Sthāṇor anyatra yena praṇati-kṛpaṇatāṁ prāpitaṁ nottamāṅgaṁ yasyālaktakāṅkāñ chirasi maṇi-rucaḥ pādayor nyañcayanti ||",
                    source: "Sondani Pillar Inscription (528 AD)",
                    meaning: "Before none in the three worlds did his exalted head ever bow in submission—except before Sthanu (Lord Shiva)! Even the tyrant Mihirakula touched his jeweled head to Yashodharman's feet in defeat."
                  },
                  details: `
                    The Sondani Pillar of Victory (528 AD) near Mandsaur stands as one of the most sublime testaments of Shaiva royal power in ancient India.
                    King Yashodharman liberated northern India from the cruelty of the Hunas, inscribing on stone that his victory was achieved solely through devotion to Pinakapani (Lord Shiva).
                  `,
                  keyAttributes: ["Brought the Shaiva Solar line down to 528 AD", "Vanquished the tyrannical Huna horde", "Dedicated his universal victory solely to Lord Shiva (Sthanu)"],
                  children: [
                {
                  id: "sp-mewar-eklingji-custodians-2026",
                  name: "Maharanis & Maharanas of Mewar as Diwans of Eklingji to 2026",
                  sanskrit: "मेवाड़ के महाराणा (श्री एकलिंगजी के दीवान – २०२६ ईस्वी पर्यन्त)",
                  title: "From Bappa Rawal to Arvind & Lakshyaraj Singh Mewar – 1300 Years of Shaiva Trusteeship",
                  category: "Historical Shaiva Monarchs",
                  tradition: "Shiva Purana",
                  parent: "sp-brihadbala-yashodharman",
                  parentName: "From Brihadbala to King Yashodharman (to 528 AD)",
                  consort: "Maharanis of Mewar",
                  vahana: "Eklingji Dhvaja & Royal Solar Chariot",
                  ayudha: "Sacred Mewari Talwar & Bilva Patra",
                  color: "#F59E0B",
                  glowColor: "rgba(245, 158, 11, 0.95)",
                  icon: "🕉️",
                  summary: "Continuing the Shaiva royal lineages from Yashodharman directly into the modern era: The Maharanas of Mewar rule strictly as 'Diwan' (prime ministers) on behalf of Lord Eklingji (Shiva). An unbroken 1300-year Shaiva trusteeship preserved down to 2026 by Arvind Singh Mewar and Lakshyaraj Singh Mewar.",
                  shloka: {
                    devanagari: "श्री-एकलिङ्ग-प्रसादेन राज्यं कुर्वन्ति मेदिनीम् । दीवान-भावमापन्ना मेदपाट-महीश्वराः ॥",
                    transliteration: "Sri-ekalinga-prasadena Rajyam kurvanti medinim | Divana-bhavam apanna medapata-mahisvarah ||",
                    source: "Eklingji Mahatmya & Mewar Royal Sanad",
                    meaning: "Solely through the divine grace and blessings of Lord Shri Eklingji do the kings of Medapata (Mewar) protect this earth, having humbly assumed the sacred role of Diwan (servant-trustee) rather than king."
                  },
                  details: `
                    The Shiva Purana celebrates those monarchs who surrender temporal ego to Shiva's supreme sovereignty:
                    - **Consecration by Harit Rishi (728 AD):** Bappa Rawal was initiated into the Pashupata Shaiva order by Sage Harit Rishi at the Eklingji shrine. The saint bestowed the kingdom upon Bappa on the strict vow that the rulers would never call themselves king, but only *Diwan of Shri Eklingji*.
                    - **Living Ritual in 2026:** Even today in 2026, when the Maharana of Mewar enters the sanctum of Eklingji in Kailashpuri, he removes his royal insignia, wears simple pitambari, and fans the Lord with the chamara like a humble pujari.
                  `,
                  keyAttributes: ["Ruled for 1300 years as Diwan (trustee) of Lord Shiva Eklingji", "Consecrated by Sage Harit Rishi in 728 AD", "Living Shaiva royal lineage active in Udaipur in 2026"],
                  children: []
                }
              ]
                }
              ]

            }
          ]
        },

        /* --- 7.4 HISTORICAL SHAIVA MONARCHS --- */
        {
          id: "sp-shaiva-monarchs",
          name: "Historical Shaiva Kings (Chandrasena & Bhadrayu)",
          sanskrit: "शिवभक्त ऐतिहासिक नृपतयः (चन्द्रसेन एवं भद्रायु)",
          title: "Sovereigns of Ujjain & Dasharna • Delivered by Mahakaleshwar & Shiva Kavacha",
          category: "Historical Shaiva Kings",
          tradition: "Shiva Purana",
          parent: "sp-shaiva-dynasties",
          parentName: "The Sacred Dynasties & Shaiva Kings",
          consort: "Empresses of Ujjayini and Dasharna",
          vahana: "Royal War Chariot & Armored War Elephants",
          ayudha: "Shiva Kavacha, Mahakal Trishula & Astra",
          color: "#A855F7",
          glowColor: "rgba(168, 85, 247, 0.8)",
          icon: "🛡️",
          summary: "Historical kings documented in Kotirudra and Uma Samhitas who protected their empires from barbarian invasions through the indestructible armor of Shiva Kavacha and Mahakaleshwar.",
          shloka: {
            devanagari: "शिवकवचप्रभावेण भद्रायुरभवत् प्रभुः । निर्जिताः शात्रवाः सर्वे प्राप्ता राज्यं निरामयम् ॥",
            transliteration: "Śiva-kavaca-prabhāveṇa bhadrāyur abhavat prabhuḥ | Nirjitāḥ śātravāḥ sarve prāptā rājyaṁ nirāmayam ||",
            source: "Shiva Purana (Uma Samhita 25.40)",
            meaning: "By the invincible power of the Shiva Kavacha, Prince Bhadrayu became an unconquerable sovereign, vanquished all hostile armies, and regained a disease-free, prosperous empire."
          },
          details: `
            The Shiva Purana records multiple historical kingdoms whose survival was linked to sacred Shaiva sanctums:
            - **King Chandrasena of Ujjain** (*Kotirudra Samhita 16-17*): A staunch worshipper of Mahakaleshwar Jyotirlinga. When allied rival kings invaded Ujjain, a poor shepherd boy named Shrikara made a stone linga in devotion. Lord Shiva appeared from the linga, pacified the armies, and blessed the shepherd boy whose descendant became Nanda Maharaja (foster father of Sri Krishna).
            - **Prince Bhadrayu** (*Uma Samhita 23-26*): Son of King Vajrabahu of Dasharna. Exiled as a baby with his pious mother Suniti, he was adopted by a merchant and initiated into the sacred **Shiva Kavacha** and gifted a divine conch and sword by Sage Rishabhadeva. With the Shiva Kavacha, he defeated the invading Magadha armies single-handedly and reclaimed his father's throne.
          `,
          keyAttributes: ["King Chandrasena was saved by Mahakaleshwar in Ujjain", "Prince Bhadrayu wielded the miraculous Shiva Kavacha", "Shrikara's lineage linked Ujjain directly to Nanda Maharaja"],
          children: [
            {
              id: "sp-king-chandrasena",
              name: "King Chandrasena of Ujjain (Mahakaleshwar Deliverance)",
              sanskrit: "उज्जयिनीपति राजा चन्द्रसेन (महाकालेश्वर भक्त)",
              title: "Monarch of Avanti • Defender of Mahakaleshwar Jyotirlinga",
              category: "Historical Shaiva Kings",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-monarchs",
              parentName: "Historical Shaiva Kings",
              consort: "Queen of Avanti",
              vahana: "Royal Avanti War Chariot",
              ayudha: "Mahakala Battle Standard & Dharma Sword",
              color: "#EC4899",
              glowColor: "rgba(236, 72, 153, 0.8)",
              icon: "🪔",
              summary: "Ruler of sacred Ujjayini; surrounded by barbarian kings seeking to destroy Mahakaleshwar. His worship, joined by young shepherd Shrikara, prompted Shiva's personal intervention.",
              shloka: {
                devanagari: "महाकालं समाराध्य चन्द्रसेनो नराधिपः । शत्रुसैन्यं विद्राव्य चक्रे राज्यमकण्टकम् ॥",
                transliteration: "Mahākālaṁ samārādhya candraseno narādhipaḥ | Śatru-sainyaṁ vidrāvya cakre rājyam akaṇṭakam ||",
                source: "Shiva Purana (Kotirudra Samhita 16.32)",
                meaning: "Worshipping Lord Mahakala with steadfast faith, King Chandrasena dispersed the enemy legions and established his kingdom free of thorns."
              },
              details: `
                King Chandrasena's narrative in the Shiva Purana illustrates that devotion transcends social rank.
                When allied kings Ripudamana and Singhaditya laid siege to Ujjain, young shepherd Shrikara worshipped a common stone as Shiva.
                The pleased Lord transformed the shepherd's dwelling into a diamond palace and granted King Chandrasena victory, declaring that Shrikara's descendant in the eighth generation would be King Nanda, the father of Lord Sri Krishna.
              `,
              keyAttributes: ["Protector of the sacred City of Ujjain (Avanti)", "Lord Mahakaleshwar defended his city from invasion", "Prophesied the birth of King Nanda of Gokula"],
              children: []
            },
            {
              id: "sp-prince-bhadrayu",
              name: "Prince Bhadrayu & King Vajrabahu (Shiva Kavacha Sovereign)",
              sanskrit: "राजकुमार भद्रायु एवं राजा वज्रबाहु (दशार्णेश)",
              title: "Prince of Dasharna • Hero of the Divine Shiva Armor (Shiva Kavacha)",
              category: "Historical Shaiva Kings",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-monarchs",
              parentName: "Historical Shaiva Kings",
              consort: "Princess Kirtimalini (daughter of King Chitraratha)",
              vahana: "White Battle Steed & Royal War Chariot",
              ayudha: "Shiva Kavacha (Indestructible Armor) & Chandrahāsa Sword",
              color: "#8B5CF6",
              glowColor: "rgba(139, 92, 246, 0.8)",
              icon: "🛡️",
              summary: "Exiled as an infant, Prince Bhadrayu received the sacred Shiva Kavacha from Sage Rishabhadeva. Invulnerable to weapons, he vanquished barbarian hosts and restored righteous rule to Dasharna.",
              shloka: {
                devanagari: "ऋषभ उवाच—शृणु पुत्र परं गुह्यं शिवस्य कवचं शुभम् । येन त्वं सर्वशत्रूणां विजेष्यसि रणे बली ॥",
                transliteration: "Ṛṣabha uvāca—Śṛṇu putra paraṁ guhyaṁ śivasya kavacaṁ śubham | Yena tvaṁ sarva-śatrūṇāṁ vijeṣyasi raṇe balī ||",
                source: "Shiva Purana (Uma Samhita 25.1)",
                meaning: "Sage Rishabhadeva said: 'Listen, O son, to the supreme, auspicious secret of the Shiva Kavacha (Armor of Shiva), by which you, full of strength, shall vanquish all enemies on the battlefield!'"
              },
              details: `
                The Shiva Kavacha is one of the most revered protective hymns in the entire Puranic literature, originating in the *Uma Samhita* of Shiva Purana.
                With this armor, Prince Bhadrayu defeated the armies of King Hemaratha, rescued King Chitraratha of Vidarbha, married Princess Kirtimalini, and reunited his parents on the throne of Dasharna.
              `,
              keyAttributes: ["Master of the canonical Shiva Kavacha hymn", "Single-handedly liberated Dasharna and Vidarbha", "Taught that righteousness and Shiva-Bhakti overcome all misfortune"],
              children: []
            },
            {
              id: "sp-pallava-kadamba-shaiva",
              name: "The Pallavas of Kanchi & Kadambas of Banavasi (to 500 AD)",
              sanskrit: "पल्लव एवं कदम्ब शैव साम्राज्य (कांची एवं बनवासी • ५०० ईस्वी)",
              title: "Early Dravidian Shaiva Dynasties • Carvers of Linga Sanctums (c. 300–500 AD)",
              category: "Historical Shaiva Kings",
              tradition: "Shiva Purana",
              parent: "sp-shaiva-monarchs",
              parentName: "Historical Shaiva Kings",
              consort: "Queens of Kanchipuram and Banavasi",
              vahana: "Sacred Nandi Bull & War Chariot",
              ayudha: "Khatvanga & Shiva Trishula Standard",
              color: "#8B5CF6",
              glowColor: "rgba(139, 92, 246, 0.85)",
              icon: "🛕",
              summary: "Southern dynasties carrying Shaiva kingship to c. 500 AD: The early Pallavas made Kanchipuram a jewel of Shaivism; King Mayurasharma founded the Kadambas, dedicating his realm to Lord Madhukeshwara Shiva.",
              shloka: {
                devanagari: "काञ्चीपुरे महापुण्ये शङ्करस्यार्चनापराः । पल्लवाः पृथिवीं कृत्स्नां पालयन्ति स्म धर्मतः ॥",
                transliteration: "Kāñcī-pure mahā-puṇye śaṅkarasyārcanā-parāḥ | Pallavāḥ pṛthivīṁ kṛtsnāṁ pālayanti sma dharmataḥ ||",
                source: "Early Pallava Inscriptions (c. 450 AD)",
                meaning: "In the sacred city of Kanchipuram, dedicated to the sublime worship of Lord Shankara, the noble Pallavas ruled the entire earth with righteous justice."
              },
              details: `
                By 500 AD, South India was transformed into a landscape of stone-carved Shaiva devotion:
                - King Mayurasharma (345–365 AD) established the Kadamba kingdom of Banavasi, worshipping Lord Shiva Madhukeshwara.
                - The early Pallavas of Kanchi constructed the foundations for the monolithic rock-cut cave temples and structural shrines across Tamil Nadu.
              `,
              keyAttributes: ["Brought Shaiva kingship in the South to 500 AD", "Consecrated Lord Madhukeshwara at Banavasi", "Transformed Kanchipuram into the Shaiva capital of the South"],
              children: [
                {
                  id: "sp-shaiva-adheenams-2026",
                  name: "Tamil Shaiva Adheenams & Chidambaram Dikshitars to 2026",
                  sanskrit: "तमिल शैव अधीनम् एवं चिदम्बरम् दीक्षिताः (२०२६ ईस्वी पर्यन्त)",
                  title: "Keepers of the 12 Tirumurais, Sengol Tradition & Chidambaram Nataraja Sanctum",
                  category: "Historical Shaiva Monarchs",
                  tradition: "Shiva Purana",
                  parent: "sp-pallava-kadamba-shaiva",
                  parentName: "The Pallavas of Kanchi & Kadambas of Banavasi (to 500 AD)",
                  consort: "Living Shaiva Pontiffs & Tillai Dikshitars",
                  vahana: "Sacred Nandi Standard & Golden Temple Chariots",
                  ayudha: "Sacred Sengol & Shiva Agamic Arghya Patra",
                  color: "#8B5CF6",
                  glowColor: "rgba(139, 92, 246, 1.0)",
                  icon: "🪷",
                  summary: "Continuing the southern Shaiva agamic lineages to 2026: The ancient Shaiva Adheenams of Tamil Nadu (Thiruvaduthurai, Dharmapuram, Madurai, Thiruppanandal) and the hereditary Tillai Vazh Anththanar (Dikshitars of Chidambaram) safeguard thousands of stone temples, Vedic recitations, and the sacred Sengol scepter of state.",
                  shloka: {
                    devanagari: "शैव-सिद्धान्त-मार्गेण पूजयन्ति महेश्वरम् । अद्यापि पालयन्त्येते परम्परां सनातनीम् ॥",
                    transliteration: "Shaiva-siddhanta-margena pujayanti maheshvaram | Adyapi palayanty ete paramparam sanatanim ||",
                    source: "Shaiva Agamic Epigraphs of Tamil Nadu",
                    meaning: "According to the sacred path of Shaiva Siddhanta, they continuously worship Lord Maheshwara; even today in 2026, they protect and preserve the eternal Sanatan tradition unbroken."
                  },
                  details: `
                    The southern Shaiva institutions preserve an unbroken living liturgical tradition:
                    - **The 27 Shaiva Adheenams:** Monastic mathams established centuries ago (such as Thiruvaduthurai, founded by Namasivaya Murthigal in the 14th century, and Madurai Adheenam dating back over 1,500 years to Sambandar) govern temple lands, publish canonical *Tirumurai* hymns, and administer daily Vedic and Agamic rites.
                    - **The Sengol Scepter:** Presented by the pontiffs of Thiruvaduthurai Adheenam to the first Prime Minister of India at midnight in August 1947, and ceremonially installed in the new Parliament of India in May 2023 by the Adheenam heads, symbolizing righteous governance under divine law.
                    - **Chidambaram Dikshitars:** The hereditary community of 300+ Vedic priests serving Lord Nataraja inside the cosmic Kanaka Sabha of the Chidambaram temple continuously in 2026.
                  `,
                  keyAttributes: ["Guardians of the 12 Shaiva Tirumurais and Agamas to 2026", "Presented the sacred Sengol installed in the Parliament of India", "Unbroken hereditary Vedic puja at Chidambaram Nataraja Temple"],
                  children: []
                }
              ]
            }

          ]
        },

        /* --- 7.5 DAITYA & RAKSHASA SHAIVA DYNASTIES --- */
        {
          id: "sp-daitya-shaiva-lineage",
          name: "The Daitya & Rakshasa Shaiva Dynasties",
          sanskrit: "दैत्य एवं राक्षस शिवभक्त परम्परा",
          title: "Tarakasura, Banasura & Ravana • Mighty Asura Sovereigns Dedicated to Shiva",
          category: "Daitya Shaiva Dynasties",
          tradition: "Shiva Purana",
          parent: "sp-shaiva-dynasties",
          parentName: "The Sacred Dynasties & Shaiva Kings",
          consort: "Daitya and Rakshasi Empresses",
          vahana: "Giant War Chariots & Vimanas",
          ayudha: "Trishula, Chandrahasa Sword & 1000 Arms",
          color: "#EF4444",
          glowColor: "rgba(239, 68, 68, 0.8)",
          icon: "🔱",
          summary: "In the Shiva Purana, even demonic sovereigns achieved unmatched cosmic power through rigorous Shaiva penance; when their pride overreached, Shiva corrected or elevated them.",
          shloka: {
            devanagari: "भक्तानां वशगो नित्यं शङ्करो भक्तवत्सलः । सुरान् वा यदि वा दैत्यान् समभावेन पश्यति ॥",
            transliteration: "Bhaktānāṁ vaśago nityaṁ śaṅkaro bhakta-vatsalaḥ | Surān vā yadi vā daityān sama-bhāvena paśyati ||",
            source: "Shiva Purana (Yuddha Khanda 12.5)",
            meaning: "Lord Shankara, affectionate to His devotees, is ever guided by true devotion. He looks upon Devas and Daityas with an equal, impartial eye."
          },
          details: `
            A unique hallmark of Shaiva philosophy is that Lord Shiva judges only the purity and depth of penance (*Tapas*), not species, dynasty, or birth.
            - **Tarakasura & The Tripurasura Kings**: Builders of the 3 floating cities who worshipped Shiva until destroyed by Shiva's single arrow as Tripurantaka.
            - **Banasura**: Surnamed Mahakala, who played the mridangam with 1,000 arms for Shiva's cosmic dance and became Shiva's principal Gana.
            - **Ravana of Lanka**: Composed the *Shiva Tandava Stotram*, offered his heads into the sacrificial fire, and received the divine sword Chandrahasa and the sacred Atmalinga.
          `,
          keyAttributes: ["Lord Shiva's impartiality toward Devas and Daityas", "Origin of the Shiva Tandava Stotram and Tripurantaka", "Banasura elevated to the rank of chief Pramatha Gana"],
          children: [
            {
              id: "sp-tarakasura-tripura",
              name: "Tarakasura & The Three Tripura Kings",
              sanskrit: "तारकासुर एवं त्रिपुरेश्वर त्रय (तारकाक्ष, कमलाक्ष, विद्युन्माली)",
              title: "Rulers of the Three Floating Celestial Cities • Vanquished by Tripurantaka Shiva",
              category: "Daitya Shaiva Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-daitya-shaiva-lineage",
              parentName: "The Daitya & Rakshasa Shaiva Dynasties",
              consort: "Daitya Princesses",
              vahana: "Three Floating Flying Metropolises (Gold, Silver, Iron)",
              ayudha: "Asura Missiles & Golden Meru Bow",
              color: "#DC2626",
              glowColor: "rgba(220, 38, 38, 0.85)",
              icon: "🏰",
              summary: "Tarakaksha, Kamalaksha, and Vidyunmali built three floating cities across heaven, sky, and earth. When they strayed from Dharma, Lord Shiva destroyed all three with a single arrow.",
              shloka: {
                devanagari: "एकेनैव हि बाणेन ददाह त्रिपुरं हरः । देवानां भयनाशाय धर्मसंस्थापनाय च ॥",
                transliteration: "Ekenaiva hi bāṇena dadāha tripuraṁ haraḥ | Devānāṁ bhaya-nāśāya dharma-saṁsthāpanāya ca ||",
                source: "Shiva Purana (Yuddha Khanda 10.35)",
                meaning: "With a single cosmic arrow, Lord Hara incinerated the three fortresses of Tripura to destroy the dread of the gods and re-establish universal righteousness."
              },
              details: `
                In Shiva Purana (*Rudra Samhita - Yuddha Khanda*), the destruction of Tripura required the unified cosmos:
                Mother Earth became the chariot, Sun and Moon the wheels, Brahma the charioteer, Mount Meru the bow, Vasuki the bowstring, and Lord Vishnu the cosmic arrow.
                Waiting for the rare moment when all three rotating cities aligned in a straight line (Abhijit Nakshatra), Shiva released the arrow, incinerating Tripura in an instant.
              `,
              keyAttributes: ["Rulers of Gold, Silver, and Iron floating cities", "Staunch Shiva devotees until led astray by Mayamoha", "Incinerated by Lord Shiva as Tripurantaka"],
              children: []
            },
            {
              id: "sp-banasura-mahakala",
              name: "King Banasura of Sonitapura (Shiva's Gana Mahakala)",
              sanskrit: "बाणासुर (शोणितपुराधिप / शिवगण महाकाल)",
              title: "Thousand-Armed Son of Mahabali • Master Mridangam Player for Shiva's Tandava",
              category: "Daitya Shaiva Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-daitya-shaiva-lineage",
              parentName: "The Daitya & Rakshasa Shaiva Dynasties",
              consort: "Queen Kandala & Princess Usha",
              vahana: "War Chariot of Sonitapura",
              ayudha: "1000 Celestial Weapons & Sacred Mridangam",
              color: "#B91C1C",
              glowColor: "rgba(185, 28, 28, 0.85)",
              icon: "🥁",
              summary: "Son of Emperor Mahabali; accompanied Shiva's Tandava with 1,000 arms on the mridangam. Protected by Shiva in battle against Sri Krishna, he was made chief commander of the Ganas (Mahakala).",
              shloka: {
                devanagari: "सहस्रबाहुर्बाणस्तु वाद्यं चक्रे पिनाकिनः । ताण्डवे नृत्यमाने च शम्भौ भक्त्या समन्विताः ॥",
                transliteration: "Sahasra-bāhur bāṇas tu vādyaṁ cakre pinākinaḥ | Tāṇḍave nṛtyamāne ca śambhau bhaktyā samanvitaḥ ||",
                source: "Shiva Purana & Bhagavata Purana",
                meaning: "With his one thousand arms, Banasura played rhythmic accompaniment with supreme devotion for the Pinaka-bearing Lord Shambhu during His cosmic Tandava dance."
              },
              details: `
                In Shiva Purana (*Rudra Samhita - Yuddha Khanda*), Banasura was so dear to Shiva that the Lord Himself guarded the gates of Sonitapura.
                When Banasura's daughter Princess Usha fell in love with Krishna's grandson Aniruddha and imprisoned him, a monumental war ensued between Shiva and Krishna.
                Krishna cut off Banasura's 1,000 arms down to four, leaving him unharmed at Shiva's plea. Shiva then elevated Banasura to eternal immortality as the celestial commander Mahakala.
              `,
              keyAttributes: ["Son of Mahabali and great-grandson of Prahlada", "Played 1000 drums for Shiva's Nataraja Tandava", "Elevated to chief Pramatha Gana (Mahakala) alongside Nandi"],
              children: []
            },
            {
              id: "sp-ravana-lanka",
              name: "King Ravana & Prince Indrajit (Lanka Rakshasa Dynasty)",
              sanskrit: "लङ्केश दशानन रावण एवं मेघनाद इन्द्रजित्",
              title: "Foremost Shaiva Ascetic of the Rakshasas • Composer of Shiva Tandava Stotram",
              category: "Rakshasa Shaiva Dynasties",
              tradition: "Shiva Purana",
              parent: "sp-daitya-shaiva-lineage",
              parentName: "The Daitya & Rakshasa Shaiva Dynasties",
              consort: "Mandodari (daughter of Mayasura) & Sulochana",
              vahana: "Pushpaka Vimana",
              ayudha: "Chandrahasa Divine Sword, Atmalinga & Brahmashira",
              color: "#991B1B",
              glowColor: "rgba(153, 27, 27, 0.9)",
              icon: "⚔️",
              summary: "Great-grandson of Brahma; lifted Mount Kailasha and sang the Shiva Tandava Stotram using his own veins as Veena strings. Received the Chandrahasa sword and the sacred Atmalinga.",
              shloka: {
                devanagari: "जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् । डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥",
                transliteration: "Jaṭā-ṭavī-galaj-jala-pravāha-pāvita-sthale gale'valambya lambitāṁ bhujaṅga-tuṅga-mālikām | Ḍamaḍ-ḍamaḍ-ḍamaḍ-ḍaman-nināda-vaḍ-ḍamarvayaṁ cakāra caṇḍa-tāṇḍavaṁ tanotu naḥ śivaḥ śivam ||",
                source: "Shiva Tandava Stotram (by Ravana)",
                meaning: "May that Lord Shiva bless us with auspiciousness, who performed the intense Tandava dance accompanied by the resonant beats of the Damaru, whose neck is garlanded by serpents and washed by the celestial Ganga flowing from His matted locks!"
              },
              details: `
                In Shiva Purana (*Kotirudra Samhita 28*), Ravana is portrayed as the ultimate ascetic devotee (*Parama Shaiva*).
                Intending to bring Kailasha to Lanka, he lifted the entire mountain. When Mother Parvati trembled, Shiva pressed His toe, trapping Ravana's arms beneath the mountain.
                Instead of screaming in rage, Ravana tore his own sinews to fashion a veena and sang the 16 stanzas of the **Shiva Tandava Stotram**.
                Lord Shiva was so overwhelmed by his musical devotion that He released Ravana, named him 'Ravana' (one of terrifying roar), gave him the divine sword **Chandrahasa**, and gifted him His own personal **Atmalinga** (which settled at Vaidyanath and Gokarna).
              `,
              keyAttributes: ["Composer of the immortal Shiva Tandava Stotram", "Lifted Mount Kailasha and won the sword Chandrahasa", "Father of Indrajit, who worshipped Nikumbhila Shiva temple"],
              children: []
            }
          ]
        }
      ]
    }

  ]
};


/* ==========================================================================
   Helper Functions & Node Indexing for Each Purana Tradition
   ========================================================================== */
const GENERAL_PURANA_MAP = new Map();
const VISHNU_PURANA_MAP = new Map();
const SHIVA_PURANA_MAP = new Map();

function indexTradition(node, mapInstance, parent = null, depth = 0) {
  node.parent = parent ? parent.id : null;
  node.depth = depth;
  mapInstance.set(node.id, node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => indexTradition(child, mapInstance, node, depth + 1));
  }
}

indexTradition(GENERAL_PURANA_DATA, GENERAL_PURANA_MAP);
indexTradition(VISHNU_PURANA_DATA, VISHNU_PURANA_MAP);
indexTradition(SHIVA_PURANA_DATA, SHIVA_PURANA_MAP);

// Backward compatibility pointers
const GODS_DATA = GENERAL_PURANA_DATA;
const GODS_MAP = GENERAL_PURANA_MAP;
