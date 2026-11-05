/**
 * Authentic Cosmological Data of Sanatan Dharma (Hinduism)
 * Sourced from:
 * - Rigveda (Nasadiya Sukta 10.129, Purusha Sukta 10.90, Hiranyagarbha Sukta 10.121)
 * - Taittiriya, Chandogya, Katha, and Mandukya Upanishads
 * - Srimad Bhagavatam (Cantos 2 & 3)
 * - Vishnu Purana (Amsa 1)
 * - Samkhya Karika of Ishvarakrishna
 * - Bhagavad Gita (Chapters 7, 8, 13, 14, 15)
 */

const COSMOLOGY_DATA = {
  id: "nirguna-brahman",
  name: "Nirguna Parabrahman",
  sanskrit: "निर्गुण परब्रह्मन्",
  title: "The Absolute Unmanifest & Infinite Reality",
  tier: "origin",
  tierLevel: 0,
  category: "Ultimate Reality",
  color: "#FFD700", // Sacred Suvarna Gold
  glowColor: "rgba(255, 215, 0, 0.7)",
  icon: "🕉️",
  summary: "The causeless First Cause; timeless, formless, unmanifest consciousness beyond existence and non-existence.",
  shloka: {
    devanagari: "नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥",
    transliteration: "Nāsadāsīn no sadāsīt tadānīṁ nāsīd rajo no vyomā paro yat |\nKim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṁ gabhīram ||",
    source: "Rigveda 10.129.1 (Nāsadīya Sūkta)",
    meaning: "Then there was neither non-existence nor existence; there was no realm of air, nor the sky beyond it. What covered it, and where? And what gave it shelter? Was there water, unfathomed and deep?"
  },
  details: `
    Before the dawn of creation, there was only <strong>Parabrahman</strong>—the supreme, eternal, infinite reality devoid of material attributes (<em>Nirguna</em>), beyond spatial and temporal boundaries (<em>Desha-Kala-Anavachhinna</em>). It is pure unconditioned consciousness (<em>Sat-Chit-Ananda</em>: Truth, Consciousness, Bliss).
    <br><br>
    In this transcendent stillness, there are no dualities: no observer and observed, no subject and object, no cause and effect. It is the silent, infinite ocean of consciousness within which all potential creation rests in unmanifest repose.
  `,
  keyAttributes: [
    "Anadi & Ananta (Without beginning, without end)",
    "Nirakara & Nirguna (Formless and attributeless)",
    "Sat-Chit-Ananda (Truth, Pure Consciousness, Infinite Bliss)",
    "The Substratum (Adhishthana) upon which all cosmic projection rests"
  ],
  children: [
    {
      id: "adi-spandana",
      name: "Adi Spandana & Saguna Brahman",
      sanskrit: "आदि स्पन्दन एवं सगुण ब्रह्मन्",
      title: "Primordial Vibration (Omkara) & The Cosmic Will",
      tier: "vibration",
      tierLevel: 1,
      category: "Cosmic Will",
      color: "#FF9933", // Sacred Saffron
      glowColor: "rgba(255, 153, 51, 0.7)",
      icon: "✨",
      summary: "The unmanifest Brahman manifests the divine will to create; the primordial sound vibration (Nada Brahman / Omkara) awakens.",
      shloka: {
        devanagari: "तदैक्षत बहु स्यां प्रजायेयेति तत्तेजोऽसृजत ।",
        transliteration: "Tadaikṣata bahu syāṁ prajāyeyeti tat tejo'sṛjata |",
        source: "Chāndogya Upaniṣad 6.2.3",
        meaning: "It willed: 'May I become many, may I manifest forth.' It then generated radiant cosmic energy (Tejas)."
      },
      details: `
        Creation begins with the divine impulse known as <strong>Ikshana</strong> (the cosmic glance or creative volition). The unmanifest absolute manifests as <strong>Saguna Brahman</strong> (the Supreme Being endowed with infinite divine qualities), revered in Puranic cosmogony as <strong>Karanodakashayi Vishnu (Maha-Vishnu)</strong> reclining on the Ocean of Causality (<em>Karanodaka</em>).
        <br><br>
        As Maha-Vishnu exhales in His divine <em>Yoga-nidra</em>, countless millions of cosmic eggs (<em>Brahmandas</em>) emanate from the pores of His transcendental skin like bubbles of light, carried upon the primordial cosmic vibration: <strong>Pranava (AUM / Nada Brahman)</strong>.
      `,
      keyAttributes: [
        "Nada Brahman (The divine sound vibration - OM)",
        "Karanodakashayi Vishnu resting in Yoga-nidra",
        "Karana Samudra (The Causal Ocean of potentiality)",
        "Emanation of multiverse clusters with divine exhalation"
      ],
      children: [
        {
          id: "purusha-prakriti",
          name: "Purusha & Prakriti",
          sanskrit: "पुरुष एवं प्रकृति",
          title: "Conscious Witness & The Primordial Matrix",
          tier: "duality",
          tierLevel: 2,
          category: "Dual Cosmic Principles",
          color: "#A855F7", // Mystical Purple
          glowColor: "rgba(168, 85, 247, 0.65)",
          icon: "☯️",
          summary: "The eternal polarity: Purusha (Conscious Spirit) and Mula-Prakriti (Primordial Creative Nature with 3 Gunas).",
          shloka: {
            devanagari: "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि ।\nविकारांश्च गुणांश्चैव विद्धि प्रकृतिसंभवान् ॥",
            transliteration: "Prakṛtiṁ puruṣaṁ caiva viddhy anādī ubhāv api |\nVikārāṁś ca guṇāṁś caiva viddhi prakṛti-sambhavān ||",
            source: "Bhagavad Gita 13.20",
            meaning: "Know that both material nature (Prakriti) and the conscious soul (Purusha) are beginningless. Know also that all transformations and the three modes (Gunas) are born of Prakriti."
          },
          details: `
            In the Samkhya and Bhagavata cosmology, cosmic manifestation unfolds through the interplay of two eternal principles:
            <br><br>
            1. <strong>Purusha</strong>: Pure, unattached, unchanging Consciousness. It acts as the illuminating witness (<em>Sakshi</em>) and spiritual animating spark.
            <br>
            2. <strong>Mula-Prakriti (Pradhana)</strong>: The unmanifest womb of nature holding the three fundamental cosmic qualities (<em>Gunas</em>)—<strong>Sattva</strong> (harmony, light), <strong>Rajas</strong> (passion, dynamic movement), and <strong>Tamas</strong> (inertia, mass)—in perfect equilibrium. When the divine glance of Time (Kala) acts upon Prakriti, the equilibrium breaks, sparking the great chain of cosmic evolution.
          `,
          keyAttributes: [
            "Purusha: The Transcendental Conscious Seer",
            "Mula-Prakriti: Unmanifest Primordial Substance",
            "Triguna: Equilibrium of Sattva, Rajas, and Tamas",
            "Spiritual catalysis through Divine Glance (Kala & Ikshana)"
          ],
          children: [
            {
              id: "mahat-tattva",
              name: "Mahat-Tattva",
              sanskrit: "महत्तत्त्व",
              title: "Cosmic Intelligence & Universal Blueprint",
              tier: "cosmic-intelligence",
              tierLevel: 3,
              category: "Universal Intellect",
              color: "#38BDF8", // Sky Azure
              glowColor: "rgba(56, 189, 248, 0.65)",
              icon: "🧠",
              summary: "The first cosmic product of Prakriti's agitation: the great reservoir of cosmic intelligence, wisdom, and blueprints.",
              shloka: {
                devanagari: "प्रकृतेर्महानभून्महतोऽहङ्कारस्त्रिविधः ।",
                transliteration: "Prakṛter mahān abhūn mahato'haṅkāras tri-vidhaḥ |",
                source: "Srimad Bhagavatam 3.5.27",
                meaning: "From the agitated Prakriti arose the Mahat-tattva (universal intelligence), and from Mahat arose the threefold Ahankara (cosmic ego)."
              },
              details: `
                <strong>Mahat-Tattva</strong> (The Great Principle or Cosmic Buddhi) represents the total cosmic sum of intelligence. Before individual minds or physical forms can exist, the overarching architecture, cosmic laws (<em>Rta</em>), mathematics, and archetypes of all possible worlds are illuminated within Mahat.
                <br><br>
                It is dominated by pure luminous Sattva and reflects the supreme consciousness directly into the creative domain.
              `,
              keyAttributes: [
                "Universal Cosmic Mind & Wisdom",
                "Repository of cosmic laws (Rta and Dharma)",
                "Predominantly Sattva Guna (Luminous Clarity)",
                "The matrix from which individual consciousness differentiates"
              ],
              children: [
                {
                  id: "ahankara-tattva",
                  name: "Ahankara (Cosmic Ego)",
                  sanskrit: "अहङ्कार तत्त्व",
                  title: "Principle of Individuation & The 3 Guna Streams",
                  tier: "ego-differentiation",
                  tierLevel: 4,
                  category: "Individuation",
                  color: "#EC4899", // Ruby Magenta
                  glowColor: "rgba(236, 72, 153, 0.65)",
                  icon: "💠",
                  summary: "The principle of 'I-ness' and distinction that splits into 3 streams according to Sattva, Rajas, and Tamas.",
                  shloka: {
                    devanagari: "वैकारिकस्तैजसश्च तामसश्चेत्यहं त्रिधा ।\nद्रव्यशक्तिः क्रियाशक्तिर्ज्ञानशक्तिरिति प्रभो ॥",
                    transliteration: "Vaikārikas taijasaś ca tāmasaś cety ahaṁ tridhā |\nDravya-śaktiḥ kriyā-śaktir jñāna-śaktir iti prabho ||",
                    source: "Srimad Bhagavatam 3.26.23",
                    meaning: "The ego (Ahankara) is threefold: Vaikarika (Sattvic / knowledge), Taijasa (Rajasic / activity), and Tamasic (material energy / substance)."
                  },
                  details: `
                    <strong>Ahankara</strong> is the cosmic principle of individuation—the power that conceives separate existence ('Aham' = I am, 'Kara' = maker). It fractures into three streams according to the Three Gunas:
                    <br><br>
                    1. <strong>Vaikarika (Sattva)</strong>: Yields the Cosmic Mind (<em>Manas</em>) and the Presiding Deities (<em>Adhidevatas</em>).
                    <br>
                    2. <strong>Taijasa (Rajas)</strong>: Generates the 10 Senses (<em>Indriyas</em>) and the vital life currents (<em>Prana</em>).
                    <br>
                    3. <strong>Tamasika (Tamas)</strong>: Generates the 5 Subtle Potentials (<em>Tanmatras</em>) and the 5 Gross Elements (<em>Mahabhutas</em>).
                    <br>
                    4. <strong>Hiranyagarbha Convergence</strong>: The integration of all 24 Tattvas forming the Golden Cosmic Egg!
                  `,
                  keyAttributes: [
                    "Vaikarika (Sattvic): Jnana-shakti (power of knowledge)",
                    "Taijasa (Rajasic): Kriya-shakti (power of dynamic action)",
                    "Tamasika (Tamasic): Dravya-shakti (power of material substance)",
                    "The bridge between unmanifest intelligence and manifested worlds"
                  ],
                  children: [
                    {
                      id: "sattvic-stream",
                      name: "Sattvika Ahankara (Vaikarika)",
                      sanskrit: "वैकारिक सात्त्विक अहङ्कार",
                      title: "Cosmic Mind (Manas) & 10 Presiding Deities",
                      tier: "elements",
                      tierLevel: 5,
                      category: "Mental & Divine Realm",
                      color: "#FBBF24", // Golden Amber
                      glowColor: "rgba(251, 191, 36, 0.65)",
                      icon: "☀️",
                      summary: "Generates the cosmic coordinating mind and the celestial presiding deities governing perception.",
                      shloka: {
                        devanagari: "वैकारिकाद् विकुर्वाणान्मनस्तत्त्वमजायत ।\nयत्सङ्कल्पविकल्पाभ्यां वर्तते कामसम्भवः ॥",
                        transliteration: "Vaikārikād vikurvāṇān manas-tattvam ajāyata |\nYat saṅkalpa-vikalpābhyāṁ vartate kāma-sambhavaḥ ||",
                        source: "Srimad Bhagavatam 3.26.27",
                        meaning: "From the transformation of the Sattvic Ahankara arose the mind (Manas), which operates through desire, resolve, and doubt."
                      },
                      details: `
                        The Sattvic branch of Ahankara manifests:
                        <br><br>
                        - <strong>Manas (The Mind)</strong>: The inner sensory coordinator that synthesizes inputs, processes thoughts, and mediates between the senses and intelligence.
                        <br>
                        - <strong>The 10 Adhidevatas</strong>: Cosmic intelligences that govern human faculties:
                        Surya (eyes), Dik (ears), Varuna (taste), Ashvins (smell), Vayu (touch), Agni (speech), Indra (hands), Upendra (feet), Mitra (elimination), Prajapati (generation).
                      `,
                      keyAttributes: [
                        "Manas (The central sensory synthesis)",
                        "10 Adhidevatas presiding over faculties",
                        "Harmonious interface between microcosm & macrocosm"
                      ],
                      children: [
                        {
                          id: "manas-tattva",
                          name: "Manas & Chitta (Cosmic Mind)",
                          sanskrit: "मनस् एवं चित्त",
                          title: "Cognitive Faculty, Memory & Desire",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Inner Instrument",
                          color: "#FDE047",
                          glowColor: "rgba(253, 224, 71, 0.6)",
                          icon: "💡",
                          summary: "The faculty of Sankalpa (acceptance) and Vikalpa (doubt), storing memories and impressions.",
                          shloka: {
                            devanagari: "चन्द्रमा मनसो जातः ।",
                            transliteration: "Candramā manaso jātaḥ |",
                            source: "Rigveda 10.90.13 (Purusha Sukta)",
                            meaning: "From the mind of the Supreme Cosmic Being, the Moon (Chandra) was born."
                          },
                          details: `
                            <strong>Manas</strong> is the 11th sensory faculty, coordinating the 5 organs of knowledge and 5 organs of action. It constantly oscillates between attraction and aversion, illuminated by the inner witness.
                          `,
                          keyAttributes: ["Sankalpa-Vikalpa", "Presided over by Chandra", "Memory & Emotion"],
                          children: []
                        },
                        {
                          id: "adhidevatas-pantheon",
                          name: "10 Adhidevatas (Presiding Deities)",
                          sanskrit: "दश अधिदेवता",
                          title: "Celestial Intelligences Governing the Senses",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Cosmic Governors",
                          color: "#F59E0B",
                          glowColor: "rgba(245, 158, 11, 0.6)",
                          icon: "👑",
                          summary: "The cosmic administrative divinities that empower and preside over each sensory and motor organ.",
                          shloka: {
                            devanagari: "दिशां श्रोत्रं विदुर्वायोस्त्वचं सूर्यस्य चक्षुषी ।",
                            transliteration: "Diśāṁ śrotraṁ vidur vāyos tvacaṁ sūryasya cakṣuṣī |",
                            source: "Bhagavata Purana",
                            meaning: "The directions preside over hearing, Vayu over the skin, and Surya over sight."
                          },
                          details: `
                            In Sanatan Dharma, the human body is a microcosm (<em>Pinda</em>) reflecting the cosmic macrocosm (<em>Brahmanda</em>). Every human sense is an altar tended by a cosmic divinity.
                          `,
                          keyAttributes: ["Surya, Chandra, Indra, Varuna", "Microcosm-Macrocosm Harmony", "Divine Guardians"],
                          children: []
                        }
                      ]
                    },
                    {
                      id: "rajasic-stream",
                      name: "Rajasika Ahankara (Taijasa)",
                      sanskrit: "तैजस राजसिक अहङ्कार",
                      title: "10 Indriyas (Senses & Action Organs) + Prana",
                      tier: "elements",
                      tierLevel: 5,
                      category: "Sensory & Kinetic Realm",
                      color: "#F97316", // Radiant Orange
                      glowColor: "rgba(249, 115, 22, 0.65)",
                      icon: "⚡",
                      summary: "Produces the 5 cognitive sense faculties (Jnanendriyas), the 5 motor organs (Karmendriyas), and vital Prana.",
                      shloka: {
                        devanagari: "तैजसात्तु विकुर्वाणाद् बुद्धितत्त्वमभून्नृप ।\nज्ञानेन्द्रियाणि प्राणाश्च कर्मेन्द्रियाणि च ॥",
                        transliteration: "Taijasāt tu vikurvāṇād buddhi-tattvam abhūn nṛpa |\nJñānendriyāṇi prāṇāś ca karmendriyāṇi ca ||",
                        source: "Vishnu Purana 1.2.47",
                        meaning: "From the transformation of Rajasic Ahankara arose the sensory powers: the cognitive senses, vital energies, and motor organs."
                      },
                      details: `
                        Dynamic energy (Rajas) supplies the kinetic power (<em>Kriya-shakti</em>) required for interaction with the cosmos:
                        <br><br>
                        - <strong>5 Jnanendriyas (Sense Organs)</strong>: Hearing (Shrotra), Feeling (Tvak), Seeing (Chakshu), Tasting (Rasana), Smelling (Ghrana).
                        <br>
                        - <strong>5 Karmendriyas (Organs of Action)</strong>: Speech (Vak), Hands (Pani), Feet (Pada), Elimination (Payu), Procreation (Upastha).
                        <br>
                        - <strong>Pancha Prana</strong>: The five vital breaths (Prana, Apana, Samana, Udana, Vyana).
                      `,
                      keyAttributes: [
                        "5 Jnanendriyas (Cognitive Faculties)",
                        "5 Karmendriyas (Active Faculties)",
                        "Pancha Prana (The vital cosmic currents)"
                      ],
                      children: [
                        {
                          id: "jnanendriyas-tattva",
                          name: "5 Jnanendriyas (Cognitive Faculties)",
                          sanskrit: "पञ्च ज्ञानेन्द्रिय",
                          title: "Organs of Perception: Ears, Skin, Eyes, Tongue, Nose",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Cognitive Instruments",
                          color: "#FB923C",
                          glowColor: "rgba(251, 146, 60, 0.6)",
                          icon: "👁️",
                          summary: "The five perceptive instruments through which consciousness perceives sound, touch, form, taste, and scent.",
                          shloka: {
                            devanagari: "श्रोत्रं त्वक् चक्षुषी जिह्वा नासिका चैव पञ्चमी ।",
                            transliteration: "Śrotraṁ tvak cakṣuṣī jihvā nāsikā caiva pañcamī |",
                            source: "Samkhya Karika 26",
                            meaning: "The ears, the skin, the eyes, the tongue, and the nose are the five organs of perception."
                          },
                          details: `
                            These faculties receive external signals from the subtle Tanmatras and channel them inwards to Manas and Buddhi.
                          `,
                          keyAttributes: ["Shrotra, Tvak, Chakshu, Rasana, Ghrana", "Receivers of subtle stimuli", "Doors of perception"],
                          children: []
                        },
                        {
                          id: "karmendriyas-prana",
                          name: "5 Karmendriyas & Pancha Prana",
                          sanskrit: "पञ्च कर्मेन्द्रिय एवं प्राण",
                          title: "Organs of Action & The Five Vital Life Breaths",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Action & Vital Force",
                          color: "#EA580C",
                          glowColor: "rgba(234, 88, 12, 0.6)",
                          icon: "🔥",
                          summary: "Organs of action (speech, grasping, walking, excretion, generation) powered by the 5 vital pranas.",
                          shloka: {
                            devanagari: "प्राणापानसमानाख्यान उदानव्यानयोस्तथा ।",
                            transliteration: "Prāṇāpāna-samānākhyān udāna-vyānayos tathā |",
                            source: "Prashna Upanishad",
                            meaning: "Prana, Apana, Samana, Udana, and Vyana sustain all life movement within the living vessel."
                          },
                          details: `
                            Karmendriyas execute physical work, driven by the five circulating currents of vital bio-energy (Prana).
                          `,
                          keyAttributes: ["Vak, Pani, Pada, Payu, Upastha", "Pancha Prana (Lifeforce)", "Execution of physical karma"],
                          children: []
                        }
                      ]
                    },
                    {
                      id: "tamasic-stream",
                      name: "Tamasika Ahankara (Bhutadi)",
                      sanskrit: "तामस अहङ्कार (भूतादि)",
                      title: "5 Tanmatras (Subtle Potentials) & 5 Gross Elements",
                      tier: "elements",
                      tierLevel: 5,
                      category: "Physical & Material Reality",
                      color: "#06B6D4", // Luminous Cyan
                      glowColor: "rgba(6, 182, 212, 0.65)",
                      icon: "🌌",
                      summary: "Generates the subtle sensory potentials (Tanmatras) which condense into the 5 fundamental physical elements (Mahabhutas).",
                      shloka: {
                        devanagari: "तस्माद्वा एतस्मादात्मन आकाशः संभूतः । आकाशाद्वायुः ।\nवायोरग्निः । अग्नेरापः । अद्भ्यः पृथिवी ॥",
                        transliteration: "Tasmād vā etasmād ātmana ākāśaḥ saṁbhūtaḥ | Ākāśād vāyuḥ |\nVāyor agniḥ | Agner āpaḥ | Adbhyaḥ pṛthivī ||",
                        source: "Taittirīya Upaniṣad 2.1.3",
                        meaning: "From that Supreme Self, Space (Akasha) was born; from space, Air (Vayu); from air, Fire (Agni); from fire, Water (Apah); and from water, Earth (Prithvi)."
                      },
                      details: `
                        Through subtle condensation and <strong>Pancheekarana</strong> (quintuplication / cosmic compounding), physical matter manifests in sequential order:
                        <br><br>
                        1. <strong>Shabda Tanmatra (Sound)</strong> ➔ <strong>Akasha (Ether / Space)</strong>: Possesses dimension and vibration.
                        <br>
                        2. <strong>Sparsha Tanmatra (Touch)</strong> ➔ <strong>Vayu (Air / Gas)</strong>: Possesses motion and pressure.
                        <br>
                        3. <strong>Rupa Tanmatra (Form)</strong> ➔ <strong>Agni (Fire / Radiant Energy)</strong>: Possesses light, heat, transformation.
                        <br>
                        4. <strong>Rasa Tanmatra (Taste)</strong> ➔ <strong>Jala (Water / Liquid)</strong>: Possesses cohesion and fluidity.
                        <br>
                        5. <strong>Gandha Tanmatra (Smell)</strong> ➔ <strong>Prithvi (Earth / Solid)</strong>: Possesses solidity, mass, and structure.
                      `,
                      keyAttributes: [
                        "Akasha (Space/Ether) - Sound / Vibration",
                        "Vayu (Air) - Motion / Expansion",
                        "Agni (Fire) - Light / Transformation",
                        "Jala (Water) - Fluidity / Cohesion",
                        "Prithvi (Earth) - Solidity / Mass"
                      ],
                      children: [
                        {
                          id: "tanmatras-subtle",
                          name: "5 Tanmatras (Subtle Potentials)",
                          sanskrit: "पञ्च तन्मात्र",
                          title: "Subtle Energy Blueprints: Sound, Touch, Form, Taste, Scent",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Subtle Blueprint",
                          color: "#22D3EE",
                          glowColor: "rgba(34, 211, 238, 0.6)",
                          icon: "🎵",
                          summary: "The pure, uncompounded quantum potentials of sensory perception that precede physical mass.",
                          shloka: {
                            devanagari: "शब्दादीनां पञ्चानां तन्मात्राणि भवन्ति ।",
                            transliteration: "Śabdādīnāṁ pañcānāṁ tanmātrāṇi bhavanti |",
                            source: "Samkhya Karika",
                            meaning: "The five subtle potentials: Sound (Shabda), Touch (Sparsha), Form (Rupa), Taste (Rasa), and Smell (Gandha)."
                          },
                          details: `
                            Tanmatras are the subtle vibrational frequencies of nature. They cannot be perceived by the physical senses, but serve as the seed potentials from which all physical atoms condense.
                          `,
                          keyAttributes: ["Shabda, Sparsha, Rupa, Rasa, Gandha", "Subtle quantum seeds", "Non-physical precursors"],
                          children: []
                        },
                        {
                          id: "mahabhutas-gross",
                          name: "5 Mahabhutas (Physical Elements)",
                          sanskrit: "पञ्च महाभूत (आकाश, वायु, अग्नि, जल, पृथ्वी)",
                          title: "Space, Air, Fire, Water, and Earth",
                          tier: "tattva-leaf",
                          tierLevel: 6,
                          category: "Physical Elements",
                          color: "#0284C7",
                          glowColor: "rgba(2, 132, 199, 0.6)",
                          icon: "🌍",
                          summary: "The five tangible physical building blocks of the material cosmos synthesized through Pancheekarana.",
                          shloka: {
                            devanagari: "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च ।\nअहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा ॥",
                            transliteration: "Bhūmir āpo'nalo vāyuḥ khaṁ mano buddhir eva ca |\nAhaṅkāra itīyaṁ me bhinnā prakṛtir aṣṭadhā ||",
                            source: "Bhagavad Gita 7.4",
                            meaning: "Earth, water, fire, air, ether, mind, intellect, and ego—these eight comprise My separated material energy."
                          },
                          details: `
                            Every physical atom, galaxy, planet, and organic body in the universe is woven from varying combinations of these five Mahabhutas.
                          `,
                          keyAttributes: ["Akasha, Vayu, Agni, Jala, Prithvi", "Pancheekarana (Quintuplication)", "Material building blocks"],
                          children: []
                        }
                      ]
                    },
                    {
                      id: "hiranyagarbha",
                      name: "Hiranyagarbha (The Cosmic Golden Egg)",
                      sanskrit: "हिरण्यगर्भ / ब्रह्माण्ड",
                      title: "Integration of 24 Elements & Garbhodakashayi Vishnu",
                      tier: "cosmic-egg",
                      tierLevel: 5,
                      category: "Cosmic Manifestation",
                      color: "#EAB308", // Golden Sun
                      glowColor: "rgba(234, 179, 8, 0.75)",
                      icon: "🥚",
                      summary: "The 24 cosmic elements coalesce into the luminous Golden Egg floating on the Garbhodaka Ocean.",
                      shloka: {
                        devanagari: "हिरण्यगर्भः समवर्तताग्रे भूतस्य जातः पतिरेक आसीत् ।\nस दाधार पृथिवीं द्यामुतेमां कस्मै देवाय हविषा विधेम ॥",
                        transliteration: "Hiraṇyagarbhaḥ samavartatāgre bhūtasya jātaḥ patir eka āsīt |\nSa dādhāra pṛthivīṁ dyām utemāṁ kasmai devāya haviṣā vidhema ||",
                        source: "Rigveda 10.121.1 (Hiraṇyagarbha Sūkta)",
                        meaning: "In the beginning arose the Golden Womb (Hiranyagarbha); He was the sole lord of all created beings. He upheld this earth and heaven—to which Divine Lord shall we offer our oblation?"
                      },
                      details: `
                        For thousands of celestial years, the 24 elemental components remained uncombined. Activated by the glance of Supreme Time (<em>Kala-shakti</em>), they assembled into a magnificent golden spheroid called <strong>Hiranyagarbha</strong> or <strong>Brahmanda</strong> (Cosmic Egg).
                        <br><br>
                        Inside this cosmic egg, the Supreme Lord expands as <strong>Garbhodakashayi Vishnu</strong>, reclining on the serpent <strong>Ananta Shesha</strong> atop the Garbhodaka ocean. From His navel (<em>Nabhi</em>) blossoms a dazzling golden lotus (<em>Kamala</em>), resplendent like a million suns, carrying the seed of all living dimensions.
                      `,
                      keyAttributes: [
                        "Brahmanda (The Cosmic Sphere / Universe)",
                        "Garbhodakashayi Vishnu resting on Ananta Shesha",
                        "Sahasrapatra Kamala (The Navel Lotus)",
                        "The unitive containment of all physical & subtle dimensions"
                      ],
                      children: [
                        {
                          id: "lord-brahma",
                          name: "Chaturmukha Brahma (The Creator)",
                          sanskrit: "चतुर्मुख ब्रह्मा",
                          title: "The Four-Faced Architect of Secondary Creation (Visarga)",
                          tier: "creator",
                          tierLevel: 6,
                          category: "Divine Architect",
                          color: "#F59E0B", // Radiant Topaz
                          glowColor: "rgba(245, 158, 11, 0.75)",
                          icon: "🪷",
                          summary: "Born upon the lotus from Vishnu's navel; performs deep penance (Tapas) and manifests secondary creation (Visarga).",
                          shloka: {
                            devanagari: "स तपोऽतप्यत । स तपस्तप्त्वा । इदं सर्वमसृजत । यदिदं किञ्च ॥",
                            transliteration: "Sa tapo'tapyata | Sa tapas taptvā | Idaṁ sarvam asṛjata | Yad idaṁ kiñca ||",
                            source: "Taittirīya Upaniṣad 2.6.1",
                            meaning: "He performed intense austerity (Tapas). Having performed Tapas, he projected forth all this universe, whatever exists here."
                          },
                          details: `
                            <strong>Lord Brahma</strong> is the secondary creator (<em>Visarga-karta</em>). Awaking on the lotus blossom in darkness, he sought the origin of his stem but could not fathom it. Hearing the divine command <strong>'TA-PA'</strong> (perform austerity), he entered a thousand celestial years of profound meditation.
                            <br><br>
                            Pleased by his devotion, Lord Vishnu granted him the sacred Gayatri and revealed the universal plan. With his four heads, Brahma manifests the four Vedas (Rig, Yajur, Sama, Atharva) and systematically designs the physical structures, planetary spheres, and species of our universe.
                          `,
                          keyAttributes: [
                            "Svayambhu (Self-manifested on the divine lotus)",
                            "Four Heads: The Four Vedas and Four Directions",
                            "Lord of Saraswati (Wisdom, Speech, and Arts)",
                            "Architect of the 14 Lokas and diverse forms of life"
                          ],
                          children: [
                            {
                              id: "kumaras-path",
                              name: "The Four Kumaras (Nivritti Marga)",
                              sanskrit: "चतुःसन (सनक, सनन्दन, सनातन, सनत्कुमार)",
                              title: "Mind-Born Sons & The Path of Ascetic Wisdom",
                              tier: "beings",
                              tierLevel: 7,
                              category: "Spiritual Forebears",
                              color: "#C084FC", // Light Violet
                              glowColor: "rgba(192, 132, 252, 0.6)",
                              icon: "🧘",
                              summary: "Sanaka, Sanatana, Sanandana, and Sanatkumara—Brahma's first mind-born sons who chose perpetual brahmacharya and spiritual liberation.",
                              shloka: {
                                devanagari: "सनकं च सनन्दं च सनातनमथात्मभूः ।\nसनत्कुमारं च मुनीन् निष्क्रियानूर्ध्वरेतसः ॥",
                                transliteration: "Sanakaṁ ca sanandaṁ ca sanātanam athātma-bhūḥ |\nSanatkumāraṁ ca munīn niṣkriyān ūrdhva-retasaḥ ||",
                                source: "Srimad Bhagavatam 3.12.4",
                                meaning: "In the beginning, Brahma created from his mind four sages: Sanaka, Sanandana, Sanatana, and Sanatkumara, who were lifelong celibates free from worldly desire."
                              },
                              details: `
                                Brahma initially intended the Kumaras to populate the cosmos. However, endowed with transcendental wisdom from birth, they declined domestic life and chose the <strong>Nivritti Marga</strong> (path of inward contemplation and spiritual renunciation). They remain eternally youthful boys of five years, traveling the cosmos transmitting highest Advaitic and Bhagavata wisdom.
                              `,
                              keyAttributes: [
                                "Sanaka, Sanatana, Sanandana, Sanatkumara",
                                "Path of Nivritti (Spiritual Contemplation)",
                                "Eternal youth and purity (Balakhilya state)"
                              ],
                              children: []
                            },
                            {
                              id: "rudra-manifestation",
                              name: "Lord Rudra (Shiva Tattva)",
                              sanskrit: "भगवान् रुद्र (शिव तत्त्व)",
                              title: "Manifestation of Supreme Consciousness for Dissolution",
                              tier: "beings",
                              tierLevel: 7,
                              category: "Cosmic Transformer",
                              color: "#38BDF8", // Ice Blue
                              glowColor: "rgba(56, 189, 248, 0.65)",
                              icon: "🔱",
                              summary: "Emanates from between Brahma's eyebrows as Rudra; divides into the 11 Rudras governing cosmic regeneration and dissolution.",
                              shloka: {
                                devanagari: "अन्तर्भ्रूवोः सुतो जज्ञे नीललोहितसंज्ञकः ।\nस वै रुरोद देवानां पूर्वजो भगवान् भवः ॥",
                                transliteration: "Antar-bhrūvoḥ suto jajñe nīla-lohita-saṁjñakaḥ |\nSa vai ruroda devānāṁ pūrvajo bhagavān bhavaḥ ||",
                                source: "Srimad Bhagavatam 3.12.7",
                                meaning: "From between the eyebrows of Brahma appeared a child of red and blue complexion known as Nila-lohita (Rudra), crying out for his name and dwelling places."
                              },
                              details: `
                                When the Kumaras chose renunciation, Brahma felt a momentary wave of restrained anger. From the concentration between his eyebrows emerged <strong>Rudra (Nila-lohita)</strong>. Brahma granted him eleven names, eleven consorts (<em>Rudranis</em>), and eleven domains.
                                <br><br>
                                Rudra embodies the divine transformative force (<em>Samhara-shakti</em>), maintaining cosmic equilibrium, destroying stagnation, and facilitating the dissolution of the universe back into the eternal source at the end of time.
                              `,
                              keyAttributes: [
                                "Ekadasha Rudras (11 Aspects of Rudra)",
                                "Samhara-Karta (Cosmic Dissolution and Reintegration)",
                                "Mahadeva: The archetype of intense Tapas and Compassion"
                              ],
                              children: []
                            },
                            {
                              id: "saraswati-vedas",
                              name: "Goddess Saraswati & The Four Vedas",
                              sanskrit: "सरस्वती एवं चत्वारो वेदाः",
                              title: "Divine Goddess of Knowledge, Speech & The Eternal Vedas",
                              tier: "beings",
                              tierLevel: 7,
                              category: "Divine Knowledge",
                              color: "#F472B6", // Sacred Lotus Pink
                              glowColor: "rgba(244, 114, 182, 0.65)",
                              icon: "🪕",
                              summary: "Manifests from Brahma's speech: the goddess of art, music, and wisdom, bringing forth Rig, Yajur, Sama, and Atharva Vedas.",
                              shloka: {
                                devanagari: "प्रणो देवी सरस्वती वाजेभिर्वाजिनीवती ।\nधीनामवित्र्यवतु ॥",
                                transliteration: "Pra ṇo devī sarasvatī vājebhir vājinīvatī |\nDhīnām avitry avatu ||",
                                source: "Rigveda 6.61.4",
                                meaning: "May the divine Saraswati, rich in celestial treasures and defender of thoughts, protect and inspire our intellect."
                              },
                              details: `
                                <strong>Goddess Saraswati</strong> is the embodiment of transcendental knowledge, pure speech (<em>Vak</em>), music, and fine arts. Through her inspiration, Brahma channeled the four eternal Vedas from his four heads:
                                <br><br>
                                - <strong>Rigveda</strong>: Hymns of divine illumination and cosmic order (Eastern head)
                                <br>
                                - <strong>Yajurveda</strong>: Ritual actions and sacred sciences (Southern head)
                                <br>
                                - <strong>Samaveda</strong>: Celestial chants and melodic harmony (Western head)
                                <br>
                                - <strong>Atharvaveda</strong>: Everyday sciences, healing, and formulas (Northern head)
                              `,
                              keyAttributes: [
                                "Vak-Devi (Goddess of cosmic speech and resonance)",
                                "Four Vedas: Rig, Yajur, Sama, and Atharva",
                                "Embodies pure Sattvic wisdom and spiritual arts"
                              ],
                              children: []
                            },
                            {
                              id: "prajapatis-saptarishis",
                              name: "Saptarishis & Prajapatis",
                              sanskrit: "सप्तर्षि एवं प्रजापति",
                              title: "Mind-Born Patriarchs & Progenitors of Creation (Pravritti Marga)",
                              tier: "beings",
                              tierLevel: 7,
                              category: "Cosmic Progenitors",
                              color: "#34D399", // Sylvan Emerald
                              glowColor: "rgba(52, 211, 153, 0.65)",
                              icon: "🌿",
                              summary: "The great cosmic seers and progenitors born from Brahma's mind and body to guide humanity and perpetuate living beings.",
                              shloka: {
                                devanagari: "मरीचिरत्र्यङ्गिरसौ पुलस्त्यः पुलहः क्रतुः ।\nभृगुर्वसिष्ठो दक्षश्च दशमस्तत्र नारदः ॥",
                                transliteration: "Marīcir atry-aṅgirasau pulastyaḥ pulahaḥ kratuḥ |\nBhṛgur vasiṣṭho dakṣaś ca daśamas tatra nāradaḥ ||",
                                source: "Srimad Bhagavatam 3.12.22",
                                meaning: "Brahma brought forth Marichi, Atri, Angiras, Pulastya, Pulaha, Kratu, Bhrigu, Vashistha, Daksha, and as the tenth, Narada."
                              },
                              details: `
                                To establish the path of action and societal order (<strong>Pravritti Marga</strong>), Brahma generated the mind-born sages:
                                <br><br>
                                - <strong>Marichi</strong> (mind), <strong>Atri</strong> (eyes), <strong>Angiras</strong> (mouth), <strong>Pulastya</strong> (ears), <strong>Pulaha</strong> (navel), <strong>Kratu</strong> (hands), <strong>Bhrigu</strong> (skin), <strong>Vashistha</strong> (breath), <strong>Daksha</strong> (thumbs), <strong>Narada</strong> (lap).
                                <br>
                                - Brahma also created <strong>Svayambhuva Manu</strong> and <strong>Shatarupa</strong>, from whom human civilization springs forth.
                                <br>
                                - Through Sage <strong>Kashyapa</strong> and Daksha's daughters, diverse cosmic families (Devas, Daityas, Nagas, humans, animals) were populated.
                              `,
                              keyAttributes: [
                                "The 10 Mind-Born Sons (Manasa-putras)",
                                "Svayambhuva Manu & Shatarupa (Progenitors of humanity)",
                                "Sage Kashyapa & Daughters of Daksha (Populators of realms)"
                              ],
                              children: [
                                /* --- 1. SVAYAMBHUVA MANU DYNASTY --- */
                                {
                                  id: "cosmo-svayambhuva-manu",
                                  name: "Svayambhuva Manu & Queen Shatarupa",
                                  sanskrit: "स्वायम्भुव मनु एवं शतरूपा (आदि राजवंश)",
                                  title: "First Lawgiver of Creation • Fountainhead of Terrestrial Monarchy",
                                  tier: "beings",
                                  tierLevel: 8,
                                  category: "Cosmic Royal Dynasties",
                                  color: "#F59E0B",
                                  glowColor: "rgba(245, 158, 11, 0.75)",
                                  icon: "📜",
                                  summary: "Emanated from the two halves of Brahma; established moral society, human ethics (Manusmriti), and fathered Priyavrata and Uttanapada.",
                                  shloka: {
                                    devanagari: "स्वायम्भुवः स पुरुषः शतवेधास्तथाङ्गना । ततो मनुं स चक्रे वै स्वायम्भुवमकल्मषम् ॥",
                                    transliteration: "Svāyambhuvaḥ sa puruṣaḥ śatavedhās tathāṅganā | Tato manuṁ sa cakre vai svāyambhuvam akalmaṣam ||",
                                    source: "Matsya Purana & Bhagavata Purana 3.12.54",
                                    meaning: "Brahma divided his cosmic body into two halves—one became the male Svayambhuva Manu, and the other the pristine woman Shatarupa."
                                  },
                                  details: `
                                    In Puranic cosmology, Svayambhuva Manu and Shatarupa inaugurate civilized human history (*Manava Vamsha*).
                                    Their two sons, Priyavrata and Uttanapada, established the foundational geographic and astronomical structures of the universe.
                                  `,
                                  keyAttributes: [
                                    "First Manu of the current Kalpa",
                                    "Father of Kings Priyavrata and Uttanapada",
                                    "Codifier of the primal social and moral laws"
                                  ],
                                  children: [
                                    {
                                      id: "cosmo-priyavrata-dynasty",
                                      name: "King Priyavrata (Carver of the 7 Oceans & 7 Dvipas)",
                                      sanskrit: "राजा प्रियव्रत (सप्तद्वीप एवं सप्तसमुद्र कर्ता)",
                                      title: "Cosmic Solar Charioteer • Architect of Planetary Geography",
                                      tier: "beings",
                                      tierLevel: 9,
                                      category: "Cosmic Royal Dynasties",
                                      color: "#EAB308",
                                      glowColor: "rgba(234, 179, 8, 0.75)",
                                      icon: "🌏",
                                      summary: "Drove his radiant celestial chariot behind the sun for 7 cosmic days, the wheel-ruts becoming the 7 concentric oceans and 7 island-continents (Sapta Dvipas).",
                                      shloka: {
                                        devanagari: "सप्त द्वीपपरिक्षेपो रथाङ्गकृतमार्गगैः । समुद्रैः सप्तभिर्युक्तो यदासीन्मण्डलं भुवः ॥",
                                        transliteration: "Sapta dvīpa-parikṣepo rathāṅga-kṛta-mārgagaiḥ | Samudraiḥ saptabhir yukto yad āsīn maṇḍalaṁ bhuvaḥ ||",
                                        source: "Bhagavata Purana 5.1.39",
                                        meaning: "By the deep tracks etched by the wheels of Priyavrata's chariot, the earth was divided into seven concentric island-continents surrounded by seven oceans."
                                      },
                                      details: `
                                        Priyavrata ruled universal space with spiritual mastery. Unwilling to leave the earth in nocturnal darkness, he rode a flaming chariot following the sun.
                                        The seven continents formed were Jambudvipa, Plakshadvipa, Shalmalidvipa, Kushadvipa, Kraunchadvipa, Shakadvipa, and Pushkaradvipa.
                                      `,
                                      keyAttributes: [
                                        "Architect of the 7 cosmic continents (Sapta Dvipa)",
                                        "Etched the 7 oceans with his solar chariot",
                                        "Father of Agnidhra and ancestor of Rishabhadeva"
                                      ],
                                      children: [
                                        {
                                          id: "cosmo-rishabha-bharata",
                                          name: "Rishabhadeva & Emperor Bharata (Bharatavarsha)",
                                          sanskrit: "ऋषभदेव एवं चक्रवर्ती भरत (जडभरत)",
                                          title: "Avatara of Renunciation & Emperor who Named Bharatavarsha",
                                          tier: "beings",
                                          tierLevel: 10,
                                          category: "Cosmic Royal Dynasties",
                                          color: "#CA8A04",
                                          glowColor: "rgba(202, 138, 4, 0.75)",
                                          icon: "👑",
                                          summary: "Descent from Priyavrata -> Agnidhra -> Nabhi -> Rishabhadeva. His son Emperor Bharata consecrated this sacred subcontinent as 'Bharatavarsha'.",
                                          shloka: {
                                            devanagari: "अजनाभं नामैतद् वर्षं भारतमिति यत आरभ्य व्यपदिशन्ति ॥",
                                            transliteration: "Ajanābhaṁ nāmaitad varṣaṁ bhāratam iti yata ārabhya vyapadiśanti ||",
                                            source: "Bhagavata Purana 5.7.3 & Vishnu Purana 2.3.1",
                                            meaning: "This subcontinent, formerly called Ajanabha-Varsha, has since the reign of Emperor Bharata been celebrated across all worlds as Bharatavarsha."
                                          },
                                          details: `
                                            Lord Rishabhadeva taught the paramount path of self-realization (*Avadhuta*).
                                            His eldest son Emperor Bharata ruled the earth with immaculate virtue, performed hundreds of Vedic sacrifices, and later renounced his universal empire for meditation, ultimately attaining liberation as Sage Jada Bharata.
                                          `,
                                          keyAttributes: [
                                            "Renamed Ajanabha-Varsha to Bharatavarsha",
                                            "Son of Rishabhadeva, the Avatara of detachment",
                                            "Emperor Bharata's realization as enlightened Jada Bharata"
                                          ],
                                          children: []
                                        }
                                      ]
                                    },
                                    {
                                      id: "cosmo-uttanapada-dynasty",
                                      name: "King Uttanapada & Dhruva Maharaja",
                                      sanskrit: "राजा उत्तानपाद एवं भक्त ध्रुव (ध्रुव मण्डल)",
                                      title: "The Celestial Pivot • The Unshakeable Pole Star (Axis of Kala Chakra)",
                                      tier: "beings",
                                      tierLevel: 9,
                                      category: "Cosmic Royal Dynasties",
                                      color: "#38BDF8",
                                      glowColor: "rgba(56, 189, 248, 0.8)",
                                      icon: "⭐",
                                      summary: "Second son of Manu; 5-year-old prince Dhruva meditated in Madhuvana, granted by Vishnu the eternal station of the Pole Star around which all constellations rotate.",
                                      shloka: {
                                        devanagari: "ध्रुवं व्रज भद्रं ते यत्स्थानं न नश्यति । ताराग्रहगणाः सर्वे यत्र बद्धा भ्रमन्ति वै ॥",
                                        transliteration: "Dhruvaṁ vraja bhadraṁ te yat sthānaṁ na naśyati | Tārā-graha-gaṇāḥ sarve yatra baddhā bhramanti vai ||",
                                        source: "Vishnu Purana 1.12.92 & Bhagavata 4.9.21",
                                        meaning: "Depart, O Dhruva! Attain that supreme unshakeable station that never perishes, to which all planets and constellations are anchored like oxen to a center pivot!"
                                      },
                                      details: `
                                        In Hindu celestial mechanics, **Dhruvaloka** (the North Pole Star) is the astronomical and metaphysical axis of the universe.
                                        All stars, planetary spheres, and the celestial wheel of time (*Shishumara Chakra*) revolve unceasingly around Dhruva.
                                      `,
                                      keyAttributes: [
                                        "Astronomical pivot of the planetary systems",
                                        "Attained Lord Vishnu's vision at age five",
                                        "Progenitor of Emperor Prithu"
                                      ],
                                      children: [
                                        {
                                          id: "cosmo-prithu-emperor",
                                          name: "Emperor Prithu (First Sovereign who Milked Prithvi)",
                                          sanskrit: "चक्रवर्ती महाराज पृथु (आदिराज / पृथ्वी-जनक)",
                                          title: "First Anointed Universal Chakravartin • Namesake of Planet Earth (Prithvi)",
                                          tier: "beings",
                                          tierLevel: 10,
                                          category: "Cosmic Royal Dynasties",
                                          color: "#10B981",
                                          glowColor: "rgba(16, 185, 129, 0.8)",
                                          icon: "🌍",
                                          summary: "Emanated from the churning of King Vena's arms; chased Mother Earth as a cow, leveled mountains, milked crops and minerals, and gave earth her sacred name 'Prithvi'.",
                                          shloka: {
                                            devanagari: "दुदोह गां स भगवान् पृथुर्वैन्यः प्रतापवान् । ततोऽन्नं च पयांसि च पृथिवी प्रासूत वै ॥",
                                            transliteration: "Dudoha gāṁ sa bhagavān pṛthur vainyaḥ pratāpavān | Tato'nnaṁ ca payāṁsi ca pṛthivī prāsūta vai ||",
                                            source: "Bhagavata Purana 4.18.9 & Matsya Purana",
                                            meaning: "The glorious and mighty Emperor Prithu milked Mother Earth in the form of a cow, whereupon she yielded all grains, herbs, and nourishing life-essences."
                                          },
                                          details: `
                                            Emperor Prithu is hailed as the **Adiraja** (the first true King in history).
                                            He pioneered town planning, agriculture, mining, road networks, and ecological harmony, demonstrating that righteous leadership nurtures rather than exploits nature.
                                          `,
                                          keyAttributes: [
                                            "First anointed monarch (Adiraja) in cosmic history",
                                            "Milked Mother Earth, who was consecrated as 'Prithvi'",
                                            "Pioneered civil infrastructure, leveling, and urban planning"
                                          ],
                                          children: [
                                            {
                                              id: "cosmo-ten-prachetas",
                                              name: "The Ten Prachetas & Prajapati Daksha",
                                              sanskrit: "दश प्रचेतसः एवं प्रजापति दक्ष",
                                              title: "Oceanic Ascetics • Sages of the Rudra Gita & Reseeders of the Earth",
                                              tier: "beings",
                                              tierLevel: 11,
                                              category: "Cosmic Royal Dynasties",
                                              color: "#06B6D4",
                                              glowColor: "rgba(6, 182, 212, 0.75)",
                                              icon: "🌊",
                                              summary: "Ten royal sons of King Prachinabarhi; meditated underwater for 10,000 years singing the Rudra Gita taught by Shiva; fathered the reborn Prajapati Daksha.",
                                              shloka: {
                                                devanagari: "प्रचेतसो दश तथा प्राचीनाग्रैः कुशैरथ । समुद्रममलं गत्वा पेतुस्तीव्रेण चेतसा ॥",
                                                transliteration: "Pracetaso daśa tathā prācīnāgraiḥ kuśair atha | Samudram amalaṁ gatvā petus tīvreṇa cetasā ||",
                                                source: "Bhagavata Purana 4.24.13",
                                                meaning: "The ten Prachetas entered the pure waters of the cosmic ocean and performed supreme penances with undivided concentration."
                                              },
                                              details: `
                                                Encountering Lord Shiva rising from a luminous lake, the Prachetas received the sacred *Rudra Gita* hymn.
                                                Emerging from their oceanic Tapas, they married Princess Marisha, whose son was Prajapati Daksha, reseeding all species across the 14 Lokas.
                                              `,
                                              keyAttributes: [
                                                "Meditated underwater for 10,000 years",
                                                "Received the famous Rudra Gita directly from Shiva",
                                                "Fathers of Prajapati Daksha in the Chakshusha Manvantara"
                                              ],
                                              children: []
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                                },

                                /* --- 2. VAIVASVATA MANU (7TH MANVANTARA HUMAN DYNASTIES) --- */
                                {
                                  id: "cosmo-vaivasvata-manu",
                                  name: "Vaivasvata Manu (Progenitor of Current Human Epoch)",
                                  sanskrit: "वैवस्वत मनु (वर्तमान सप्तम मन्वन्तराधिपति)",
                                  title: "Sovereign of the Present Manvantara • Fountainhead of Solar & Lunar Dynasties",
                                  tier: "beings",
                                  tierLevel: 8,
                                  category: "Cosmic Royal Dynasties",
                                  color: "#F97316",
                                  glowColor: "rgba(249, 115, 22, 0.8)",
                                  icon: "☀️",
                                  summary: "Son of Surya (Vivasvan); rescued by Matsya Avatara during the cosmic deluge; father of Ikshvaku (Suryavamsha) and Ila (Chandravamsha).",
                                  shloka: {
                                    devanagari: "वैवस्वतो मनुर्नाम प्राज्ञः सत्यव्रतो नृपः । तस्य वंशे समुद्भूता राजानः सत्यविक्रमाः ॥",
                                    transliteration: "Vaivasvato manur nāma prājñaḥ satyavrato nṛpaḥ | Tasya vaṁśe samudbhūtā rājānaḥ satya-vikramāḥ ||",
                                    source: "Matsya Purana & Bhagavata Purana 8.13.1",
                                    meaning: "The wise King Satyavrata became known as Vaivasvata Manu, in whose dynastic branches descended the heroic monarchs of truth."
                                  },
                                  details: `
                                    Vaivasvata Manu presides over our current cosmic era (the 7th Manvantara).
                                    From his sons and daughter sprang the two grand human lineages that structured world history on Bhurloka:
                                    The **Solar Dynasty** (*Suryavamsha*) and the **Lunar Dynasty** (*Chandravamsha*).
                                  `,
                                  keyAttributes: [
                                    "Presiding Manu of the current 7th cosmic era",
                                    "Rescued during the Mahapralaya by Matsya Avatara",
                                    "Parent of King Ikshvaku and Queen Ila"
                                  ],
                                  children: [
                                    /* 2.1 COSMOLOGICAL SURYAVAMSHA */
                                    {
                                      id: "cosmo-suryavamsha",
                                      name: "The Cosmological Solar Dynasty (Suryavamsha)",
                                      sanskrit: "ब्रह्माण्डीय सूर्यवंश (अयोध्या महासाम्राज्य)",
                                      title: "The Golden Solar Dynasty of Bhurloka • Lineage of Uncompromising Dharma",
                                      tier: "beings",
                                      tierLevel: 9,
                                      category: "Cosmic Royal Dynasties",
                                      color: "#F59E0B",
                                      glowColor: "rgba(245, 158, 11, 0.85)",
                                      icon: "☀️",
                                      summary: "The radiant dynasty originating from Surya and Ikshvaku; ruled from sacred Ayodhya, producing the monarchs Mandhata, Harishchandra, Sagara, Bhagiratha, Raghu, and Sri Rama.",
                                      shloka: {
                                        devanagari: "इक्ष्वाकुवंशप्रभवो रामो नाम जनैः श्रुतः । नियतात्मा महावीर्यो द्युतिमान् धृतिमान् वशी ॥",
                                        transliteration: "Ikṣvāku-vaṁśa-prabhavo rāmo nāma janaiḥ śrutaḥ | Niyatātmā mahā-vīryo dyutimān dhṛtimān vaśī ||",
                                        source: "Valmiki Ramayana (Bala Kanda 1.8)",
                                        meaning: "Born in the illustrious dynasty of Ikshvaku, celebrated among all people by the name of Rama, self-controlled, mighty, radiant, steadfast, and master of His senses!"
                                      },
                                      details: `
                                        In Puranic cosmology, the Suryavamsha exemplifies **Aditya Tattva** (radiant truth, solar vigor, and uncompromising rectitude).
                                        Its kings served as the cosmic guardians of civilization, defending the sages and preserving Vedic Dharma across Treta and Dvapara Yugas.
                                      `,
                                      keyAttributes: [
                                        "Founded in Ayodhya by King Ikshvaku",
                                        "Embodied the solar principle of cosmic righteousness",
                                        "Culminated in the Avatara of Sri Ramachandra"
                                      ],
                                      children: [
                                        {
                                          id: "cosmo-ikshvaku",
                                          name: "King Ikshvaku of Ayodhya",
                                          sanskrit: "महाराज इक्ष्वाकु (अयोध्या संस्थापक)",
                                          title: "First Solar King • Patriarch of the Kosala Empire",
                                          tier: "beings",
                                          tierLevel: 10,
                                          category: "Cosmic Royal Dynasties",
                                          color: "#EAB308",
                                          glowColor: "rgba(234, 179, 8, 0.8)",
                                          icon: "👑",
                                          summary: "Eldest son of Vaivasvata Manu; established Ayodhya as the capital of righteous world governance, fathering 100 royal sons across northern and southern India.",
                                          shloka: {
                                            devanagari: "इक्ष्वाकुः प्रथमं राजा बभूव मनुसम्भवः । अयोध्यां राजधानीं तु चक्रे धर्मपुरोधसः ॥",
                                            transliteration: "Ikṣvākuḥ prathamaṁ rājā babhūva manu-sambhavaḥ | Ayodhyāṁ rājadhānīṁ tu cakre dharma-purodhasaḥ ||",
                                            source: "Vishnu Purana & Bhagavata",
                                            meaning: "Ikshvaku was the first monarch born of Manu, who established Ayodhya as the radiant capital of righteous governance."
                                          },
                                          details: `
                                            King Ikshvaku ruled with high Vedic wisdom, guided by Sage Vashistha.
                                            His descendants divided the kingdom into Kosala, Videha (Janaka's lineage), and southern principalities.
                                          `,
                                          keyAttributes: ["First king of the Solar Dynasty", "Founder of sacred Ayodhya", "Guided by royal preceptor Sage Vashistha"],
                                          children: [
                                            {
                                              id: "cosmo-mandhata-sagara",
                                              name: "Emperor Mandhata & King Sagara",
                                              sanskrit: "चक्रवर्ती मान्धाता एवं राजा सगर",
                                              title: "Universal Monarchs • Conquerors of Continents & Diggers of Oceans",
                                              tier: "beings",
                                              tierLevel: 11,
                                              category: "Cosmic Royal Dynasties",
                                              color: "#CA8A04",
                                              glowColor: "rgba(202, 138, 4, 0.8)",
                                              icon: "🌊",
                                              summary: "Mandhata conquered the earth in a single day; King Sagara performed 99 Ashvamedha sacrifices, his 60,000 sons digging the great oceanic basins of the world.",
                                              shloka: {
                                                devanagari: "सगरस्य सुताः सर्वे चक्रुः खातं महार्णवे । अश्वमार्गं विचिन्वन्तो रसातलगतास्तदा ॥",
                                                transliteration: "Sagarasya sutāḥ sarve cakruḥ khātaṁ mahārṇave | Aśva-mārgaṁ vicinvanto rasātala-gatās tadā ||",
                                                source: "Ramayana & Bhagavata 9.8.9",
                                                meaning: "Searching for the sacrificial horse, all the sons of King Sagara excavated the earth, penetrating down to Rasatala and shaping the oceans."
                                              },
                                              details: `
                                                Puranic cosmology explains the formation of the oceans (*Sagara*) as the direct handiwork of Sagara's princes.
                                                Burnt to ashes by Sage Kapila's yogic fire in the netherworld, their redemption awaited Bhagiratha's celestial penance.
                                              `,
                                              keyAttributes: ["Formed the geological basins of the world's oceans", "Mandhata ruled from sunrise to sunset", "Kapila Muni episode in Patala"],
                                              children: [
                                                {
                                                  id: "cosmo-bhagiratha-raghu",
                                                  name: "King Bhagiratha & Emperor Raghu",
                                                  sanskrit: "महाराज भगीरथ एवं चक्रवर्ती रघु",
                                                  title: "Bringer of Ganga & Universal Conqueror (Namesake of Raghuvamsha)",
                                                  tier: "beings",
                                                  tierLevel: 12,
                                                  category: "Cosmic Royal Dynasties",
                                                  color: "#38BDF8",
                                                  glowColor: "rgba(56, 189, 248, 0.85)",
                                                  icon: "🌊",
                                                  summary: "Bhagiratha brought the celestial river Ganga down to earth and netherworld; Emperor Raghu conquered all directions in Digvijaya, giving the dynasty its name 'Raghuvamsha'.",
                                                  shloka: {
                                                    devanagari: "दिग्विजये प्रवृत्तस्य रघोः सैन्यं महीतले । आज्ञां चक्रे सुराधीश इव लोकेषु विश्रुतः ॥",
                                                    transliteration: "Digvijaye pravṛttasya raghoḥ sainyaṁ mahī-tale | Ājñāṁ cakre surādhīśa iva lokeṣu viśrutaḥ ||",
                                                    source: "Raghuvamsham & Vishnu Purana",
                                                    meaning: "Setting forth on universal conquest, Emperor Raghu commanded the earth with majestic brilliance like the sovereign of heaven."
                                                  },
                                                  details: `
                                                    Bhagiratha channeled Ganga across the plains of Bharatavarsha, creating the world's most fertile river civilization.
                                                    Emperor Raghu performed the Vishvajit Yajna, donating his entire wealth to the citizens and sages, crowning the moral glory of the solar dynasty.
                                                  `,
                                                  keyAttributes: ["Ganga's descent unified heaven, earth, and underworld", "Raghu performed the complete donation of his wealth", "Ancestor of King Aja, Dasharatha, and Sri Rama"],
                                                  children: [
                                                    {
                                                      id: "cosmo-sri-rama",
                                                      name: "Sri Ramachandra (Cosmic Embodiment of Dharma)",
                                                      sanskrit: "मर्यादा पुरुषोत्तम भगवान् श्रीरामचन्द्र",
                                                      title: "Seventh Avatara • The Ultimate Pinnacle of the Solar Dynasty",
                                                      tier: "beings",
                                                      tierLevel: 13,
                                                      category: "Cosmic Royal Dynasties",
                                                      color: "#60A5FA",
                                                      glowColor: "rgba(96, 165, 250, 0.85)",
                                                      icon: "🏹",
                                                      summary: "Son of Dasharatha and Kausalya; vanquished Ravana, established Ramarajya where righteousness flourished for 11,000 years, father of Kusha and Lava.",
                                                      shloka: {
                                                        devanagari: "रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः । राजा सर्वस्य लोकस्य देवानाम् इव वासवः ॥",
                                                        transliteration: "Rāmo vigrahavān dharmaḥ sādhuḥ satya-parākramaḥ | Rājā sarvasya lokasya devānām iva vāsavaḥ ||",
                                                        source: "Valmiki Ramayana (Aranya Kanda 37.13)",
                                                        meaning: "Rama is Dharma personified—virtuous, of unyielding truth and valor, the righteous sovereign of all the worlds like Indra among the gods!"
                                                      },
                                                      details: `
                                                        Sri Rama represents the harmonious culmination of royal power and absolute moral virtue.
                                                        Under His ideal governance (*Ramarajya*), natural calamities ceased, grief vanished, and all living beings thrived in cosmic harmony.
                                                      `,
                                                      keyAttributes: ["Dharma personified (Vigrahavan Dharma)", "Vanquisher of tyranny and establish of Ramarajya", "Father of Kusha (who ruled Kosala) and Lava"],
                                                      /* --- COSMOLOGICAL SURYAVAMSHA CONTINUATION TO 500 AD --- */
                                                    children: [
                                                      {
                                                        id: "cosmo-kusha-atithi",
                                                        name: "King Kusha & King Atithi (Cosmic Kings of Kosala)",
                                                        sanskrit: "राजा कुश एवं अतिथि (कौशल साम्राज्य)",
                                                        title: "Sons and Heirs of Sri Rama • Sovereigns of Kushavati & Ayodhya",
                                                        tier: "beings",
                                                        tierLevel: 14,
                                                        category: "Cosmic Royal Dynasties",
                                                        color: "#60A5FA",
                                                        glowColor: "rgba(96, 165, 250, 0.8)",
                                                        icon: "👑",
                                                        summary: "Kusha ruled Dakshina Kosala from Kushavati; returned to Ayodhya and crowned his son Atithi, continuing the solar kings through Nishadha, Nala, and Nabhas.",
                                                        shloka: {
                                                          devanagari: "कुशस्य चाभवत् पुत्रोऽतिथी राजर्षिसत्तमः । ततो निषधनामाभूत् नलो नाम ततः परम् ॥",
                                                          transliteration: "Kuśasya cābhavat putro'tithī rājarṣi-sattamaḥ | Tato niṣadha-nāmābhūt nalo nāma tataḥ param ||",
                                                          source: "Bhagavata Purana 9.12.1",
                                                          meaning: "Kusha's son was the exalted royal sage Atithi; from him sprang Nishadha, and after him King Nala, sustaining the solar throne."
                                                        },
                                                        details: `
                                                          In Puranic cosmology, the succession after Sri Rama preserved universal order across northern and central India through Kusha and Atithi.
                                                        `,
                                                        keyAttributes: ["Heirs of Sri Rama in Ayodhya", "Preserved the moral constitution of Ramarajya", "Progenitors of the later solar emperors"],
                                                        children: [
                                                          {
                                                            id: "cosmo-hiranyanabha-brihadbala",
                                                            name: "King Hiranyanabha to King Brihadbala",
                                                            sanskrit: "महर्षि हिरण्यनाभ ते राजा बृहद्बल (द्वापरान्त)",
                                                            title: "Masters of Adhyatma Yoga & The Sovereign of the Mahabharata Era",
                                                            tier: "beings",
                                                            tierLevel: 15,
                                                            category: "Cosmic Royal Dynasties",
                                                            color: "#38BDF8",
                                                            glowColor: "rgba(56, 189, 248, 0.85)",
                                                            icon: "🏹",
                                                            summary: "Hiranyanabha mastered the science of Yoga from Jaimini; King Brihadbala led the Kosala imperial forces in the Kurukshetra war at the transition into Kali Yuga.",
                                                            shloka: {
                                                              devanagari: "हिरण्यनाभाद् योगज्ञो मरुः शिष्यस्ततः परम् । बृहद्बलस्तु कौसल्यो युधि कौरवपक्षतः ॥",
                                                              transliteration: "Hiraṇyanābhād yoga-jño maruḥ śiṣyas tataḥ param | Bṛhadbalas tu kauśalyo yudhi kaurava-pakṣataḥ ||",
                                                              source: "Vishnu Purana 4.4 & Mahabharata",
                                                              meaning: "From Hiranyanabha descended King Maru, master of Yoga, and King Brihadbala of Kosala, who fought in the great war."
                                                            },
                                                            details: `
                                                              The cosmic transition from Dvapara Yuga into Kali Yuga occurred during the reign of King Brihadbala.
                                                            `,
                                                            keyAttributes: ["Mastery of Yoga united with royal sovereignty", "Brihadbala fought in the Mahabharata war", "Marked the cosmic Yuga transition"],
                                                            children: [
                                                              {
                                                                id: "cosmo-shakya-sumitra",
                                                                name: "King Shakya, Suddhodana & King Sumitra",
                                                                sanskrit: "राजा शाक्य, शुद्धोदन एवं सुमित्र (अन्तिम इक्ष्वाकु)",
                                                                title: "Rulers of Kapilavastu & Last Crowned Ikshvaku Monarch of the Kali Yuga",
                                                                tier: "beings",
                                                                tierLevel: 16,
                                                                category: "Cosmic Royal Dynasties",
                                                                color: "#CA8A04",
                                                                glowColor: "rgba(202, 138, 4, 0.8)",
                                                                icon: "🪷",
                                                                summary: "The Shakya branch of the Solar Dynasty produced Prince Siddhartha (Buddha); the Puranas conclude the classical Ikshvaku dynasty with King Sumitra.",
                                                                shloka: {
                                                                  devanagari: "एष इक्ष्वाकुवंशस्तु सुमित्रान्तो भविष्यति । यतस्तं प्राप्य राजानं संस्थां प्राप्स्यति वै कलौ ॥",
                                                                  transliteration: "Eṣa ikṣvāku-vaṁśas tu sumitrānto bhaviṣyati | Yatas taṁ prāpya rājānaṁ saṁsthāṁ prāpsyati vai kalau ||",
                                                                  source: "Vishnu Purana 4.22.14 & Bhagavata 9.12.16",
                                                                  meaning: "This celebrated dynasty of Ikshvaku shall conclude with King Sumitra, reaching whom the classical line attains completion in Kali Yuga."
                                                                },
                                                                details: `
                                                                  King Sumitra marks the transition of the Ikshvaku lineage from epic antiquity into the historical regional monarchies of India.
                                                                `,
                                                                keyAttributes: ["Ancestors of Gautama Buddha in Kapilavastu", "King Sumitra closes the Puranic Ikshvaku canon", "Transition into historical regional dynasties"],
                                                                children: [
                                                                  {
                                                                    id: "cosmo-solar-empires-500ad",
                                                                    name: "Solar Monarchies of Bhurloka to 500 AD (Yashodharman)",
                                                                    sanskrit: "भूलोक सूर्यवंशीय साम्राज्य (५०० ईस्वी • यशोधर्मन्)",
                                                                    title: "Defenders of Aryavarta • Liberators from the Huna Invasions (c. 500–528 AD)",
                                                                    tier: "beings",
                                                                    tierLevel: 17,
                                                                    category: "Cosmic Royal Dynasties",
                                                                    color: "#FACC15",
                                                                    glowColor: "rgba(250, 204, 21, 0.9)",
                                                                    icon: "🏛️",
                                                                    summary: "Preserved the solar lineage on earth through 500 AD: King Yashodharman of Malwa (528 AD) routed the barbarian Hunas, re-establishing classical Vedic civilization and temple culture.",
                                                                    shloka: {
                                                                      devanagari: "आलौहित्योपकण्ठात् तलिनवनगहनोपत्यकादा महेन्द्रादागङ्गाश्लिष्टसानोस्तुहिनशिखरिणः पश्चिमात् पयोराशेः ॥",
                                                                      transliteration: "Ālauhityopakaṇṭhāt talina-vana-gahanopatyakād ā mahendrād āgaṅgāśliṣṭa-sānos tuhina-śikhariṇaḥ paścimāt payorāśeḥ ||",
                                                                      source: "Mandsaur Pillar Inscription of Yashodharman (528 AD)",
                                                                      meaning: "From the banks of the Brahmaputra (Lauhitya) to Mount Mahendra in the south, and from the snowy Himalayas kissed by Ganga to the Western Ocean—his righteous suzerainty was acknowledged!"
                                                                    },
                                                                    details: `
                                                                      Reaching 500 AD on Bhurloka, the solar monarchs preserved cosmic Dharma during foreign invasions, rebuilding the grand stone temples of northern India.
                                                                    `,
                                                                    keyAttributes: ["Brought the cosmological solar line down to 500–528 AD", "Vanquished the tyrannical Hunas at the Battle of Sondani", "Safeguarded the cultural and religious continuity of Bharatavarsha"],
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
                                    },

                                    /* 2.2 COSMOLOGICAL CHANDRAVAMSHA */
                                    {
                                      id: "cosmo-chandravamsha",
                                      name: "The Cosmological Lunar Dynasty (Chandravamsha)",
                                      sanskrit: "ब्रह्माण्डीय चन्द्रवंश (हस्तिनापुर महासाम्राज्य)",
                                      title: "The Silver Lunar Dynasty of Bhurloka • Lineage of Mind, Valor & Epic Destiny",
                                      tier: "beings",
                                      tierLevel: 9,
                                      category: "Cosmic Royal Dynasties",
                                      color: "#818CF8",
                                      glowColor: "rgba(129, 140, 248, 0.85)",
                                      icon: "🌙",
                                      summary: "Originating from Soma (the Moon), Budha, and Ila; ruled from Pratishthana and Hastinapura, producing Emperor Pururavas, Yayati, Bharata, Kuru, the Pandavas, and Sri Krishna.",
                                      shloka: {
                                        devanagari: "सोमो राजा प्रथमं बभूव ततो बुधस्तस्य सुतो महात्मा । पुरूरवास्तस्य सुतो नरेन्द्राः प्रवर्तिताश्चन्द्रमसो हि वंशम् ॥",
                                        transliteration: "Somo rājā prathamaṁ babhūva tato budhas tasya suto mahātmā | Purūravās tasya suto narendrāḥ pravartitāś candramaso hi vaṁśam ||",
                                        source: "Mahabharata & Vishnu Purana 4.6.1",
                                        meaning: "Soma was the primal king, from whom was born the high-souled Budha; his son was Pururavas, and thus the illustrious monarchs established the Lunar Dynasty."
                                      },
                                      details: `
                                        In Puranic cosmology, the Chandravamsha represents **Soma Tattva** (intuitive intelligence, emotional depth, royal dynamism, and complex philosophical dramas).
                                        It encompasses the entire narrative fabric of the Mahabharata, Harivamsha, and Bhagavata Purana.
                                      `,
                                      keyAttributes: [
                                        "Originated from the divine Moon (Soma) and Budha",
                                        "Spanned the great kingdoms of Hastinapura, Mathura, and Dvaraka",
                                        "Setting for the Bhagavad Gita and the Mahabharata war"
                                      ],
                                      children: [
                                        {
                                          id: "cosmo-budha-pururavas",
                                          name: "Budha Deva & King Pururavas",
                                          sanskrit: "बुध देव एवं चक्रवर्ती पुरूरवा",
                                          title: "Presiding Deity of Intellect & Progenitor of the Lunar Kings",
                                          tier: "beings",
                                          tierLevel: 10,
                                          category: "Cosmic Royal Dynasties",
                                          color: "#A78BFA",
                                          glowColor: "rgba(167, 139, 250, 0.8)",
                                          icon: "👑",
                                          summary: "Budha (planet Mercury) and Ila wedded; their son King Pururavas established Pratishthana, beloved of Apsara Urvashi, and manifested the 3 sacrificial fires on earth.",
                                          shloka: {
                                            devanagari: "इलायां जनयामास बुधः पुत्रं पुरूरवम् । यस्योर्वश्या समभवत् प्रीतिर्लोकेषु विश्रुता ॥",
                                            transliteration: "Ilāyāṁ janayāmāsa budhaḥ putraṁ purūravam | Yasyorvaśyā samabhavat prītir lokeṣu viśrutā ||",
                                            source: "Rigveda 10.95 & Bhagavata 9.14.15",
                                            meaning: "Through Ila, Budha begot King Pururavas, whose romantic love with the celestial Urvashi is celebrated across all the worlds."
                                          },
                                          details: `
                                            King Pururavas brought the three sacred Vedic sacrificial fires (*Garhapatya, Ahavaniya, Anvaharyapacana*) from Gandharvaloka into the human realm.
                                          `,
                                          keyAttributes: ["Son of Budha and Manu's daughter Ila", "Manifested the threefold sacrificial fire on earth", "Capital established at Pratishthana (Prayagraj)"],
                                          children: [
                                            {
                                              id: "cosmo-yayati-bharata",
                                              name: "Emperor Yayati & Emperor Bharata",
                                              sanskrit: "चक्रवर्ती ययाति एवं चक्रवर्ती भरत",
                                              title: "Universal Chakravartins of the Lunar Line • Progenitors of Yadu & Puru",
                                              tier: "beings",
                                              tierLevel: 11,
                                              category: "Cosmic Royal Dynasties",
                                              color: "#C084FC",
                                              glowColor: "rgba(192, 132, 252, 0.8)",
                                              icon: "🏛️",
                                              summary: "Yayati divided the globe among his five sons (founding Yadu and Puru lines); Emperor Bharata (son of Dushyanta) unified the continent, offering 100 royal sacrifices.",
                                              shloka: {
                                                devanagari: "यदुं च तुर्वसुं चैव द्रुह्युं चानुं पुरुं तथा । पञ्च पुत्राञ्जनयामास ययातिर्धर्मकोविदः ॥",
                                                transliteration: "Yaduṁ ca turvasuṁ caiva druhyuṁ cānuṁ puruṁ tathā | Pañca putrāñ janayāmāsa yayātir dharma-kovidaḥ ||",
                                                source: "Mahabharata Adi Parva 75.32",
                                                meaning: "Yayati, well-versed in Dharma, begot five noble sons: Yadu, Turvasu, Druhyu, Anu, and Puru, who divided the civilized continents."
                                              },
                                              details: `
                                                Through Yadu sprang the Yaduvamsha where Sri Krishna manifested.
                                                Through Puru sprang Emperor Bharata, King Kuru, and the dynasty of Hastinapura.
                                              `,
                                              keyAttributes: ["Fountainhead of Yaduvamsha and Pauravavamsha", "Emperor Bharata's lion-mastering courage in Kanva ashram", "Unified all royal branches under imperial Dharma"],
                                              children: [
                                                {
                                                  id: "cosmo-kuru-pandavas",
                                                  name: "King Kuru & The Five Pandavas",
                                                  sanskrit: "राजा कुरु एवं पञ्च पाण्डवाः (धर्मयुद्ध वीर)",
                                                  title: "Founders of Kurukshetra • Champions of Dharma in the Great War",
                                                  tier: "beings",
                                                  tierLevel: 12,
                                                  category: "Cosmic Royal Dynasties",
                                                  color: "#38BDF8",
                                                  glowColor: "rgba(56, 189, 248, 0.85)",
                                                  icon: "🏹",
                                                  summary: "King Kuru ploughed Kurukshetra with ascetic virtue; Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva stood victorious under Sri Krishna's divine guidance.",
                                                  shloka: {
                                                    devanagari: "यतो धर्मस्ततो जयः । यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ॥",
                                                    transliteration: "Yato dharmas tato jayaḥ | Yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ ||",
                                                    source: "Mahabharata & Bhagavad Gita 18.78",
                                                    meaning: "Where there is Dharma, there is victory! Wherever there is Krishna, the Lord of Yoga, and Arjuna, the supreme archer, there is eternal fortune, victory, and morality."
                                                  },
                                                  details: `
                                                    The Pandavas represent the triumph of virtue over overwhelming material hubris.
                                                    On the battlefield of Kurukshetra, Lord Krishna delivered the immortal Bhagavad Gita to Arjuna, synthesizing Jnana, Karma, and Bhakti.
                                                  `,
                                                  keyAttributes: ["Consecrators of the field of Kurukshetra", "Recipients of the Bhagavad Gita", "Established righteous rule across the Dvapara-Kali transition"],
                                                  children: [
                                                    {
                                                      id: "cosmo-parikshit-janamejaya",
                                                      name: "Emperor Parikshit & King Janamejaya",
                                                      sanskrit: "चक्रवर्ती परीक्षित् एवं राजा जनमेजय",
                                                      title: "Last Chakravartins of the Classical Epoch • Inaugurators of the Kali Yuga History",
                                                      tier: "beings",
                                                      tierLevel: 13,
                                                      category: "Cosmic Royal Dynasties",
                                                      color: "#60A5FA",
                                                      glowColor: "rgba(96, 165, 250, 0.8)",
                                                      icon: "🛡️",
                                                      summary: "Abhimanyu's son Parikshit curbed the demonic influence of Kali; heard the 18,000 verses of the Bhagavata from Shukadeva; Janamejaya listened to the entire Mahabharata from Vaishampayana.",
                                                      shloka: {
                                                        devanagari: "शुकप्रोक्तां भागवतीं संहितां परमर्षिभिः । शुश्राव स परीक्षित् तु गङ्गाकूले मुदान्वितः ॥",
                                                        transliteration: "Śuka-proktāṁ bhāgavatīṁ saṁhitāṁ paramarṣibhiḥ | Śuśrāva sa parīkṣit tu gaṅgā-kūle mudānvitaḥ ||",
                                                        source: "Srimad Bhagavatam 1.3.43",
                                                        meaning: "On the banks of the sacred Ganga, surrounded by supreme seers, King Parikshit listened with overflowing joy to the Bhagavata Samhita spoken by Shukadeva."
                                                      },
                                                      details: `
                                                        Emperor Parikshit was the exemplary sovereign who bound Kali to four vices (gambling, intoxication, illicit indulgence, and slaughter).
                                                        His peaceful departure through seven days of Srimad Bhagavatam discourse marks the transition into our recorded epoch.
                                                      `,
                                                      keyAttributes: ["Curbed the advance of Kali Yuga on earth", "Audience for the complete Srimad Bhagavatam", "Father of King Janamejaya who heard the Mahabharata"],
                                                      /* --- COSMOLOGICAL CHANDRAVAMSHA CONTINUATION TO 500 AD --- */
                                                    children: [
                                                      {
                                                        id: "cosmo-nichakshu-udayana",
                                                        name: "King Nichakshu & King Udayana (Kausambi Transfer)",
                                                        sanskrit: "राजा निचक्षु एवं उदयन (कौशाम्बी साम्राज्य)",
                                                        title: "Great-Grandsons of Janamejaya • Shift of Capital to Kausambi",
                                                        tier: "beings",
                                                        tierLevel: 14,
                                                        category: "Cosmic Royal Dynasties",
                                                        color: "#EAB308",
                                                        glowColor: "rgba(234, 179, 8, 0.8)",
                                                        icon: "🏛️",
                                                        summary: "Following the inundation of Hastinapura by the Ganga, King Nichakshu moved the Paurava throne to Kausambi; King Udayana ruled during the era of Buddha.",
                                                        shloka: {
                                                          devanagari: "हस्तिनापुरमाप्लुत्य गङ्गा वेगेन संहृता । कौशाम्ब्यां न्यवसन् राजा निचक्षुर्वत्समण्डले ॥",
                                                          transliteration: "Hastināpuram āplutya gaṅgā vegena saṁhṛtā | Kauśāmbyāṁ nyavasan rājā nicakṣur vatsa-maṇḍale ||",
                                                          source: "Matsya Purana & Vishnu Purana 4.21",
                                                          meaning: "When Hastinapura was inundated by the torrential waters of Ganga, King Nichakshu established the lunar throne at Kausambi in the fertile land of Vatsa."
                                                        },
                                                        details: `
                                                          In Puranic cosmic geography, the shift of the capital preserved the institutional continuity of the Pandava throne into the historical era.
                                                        `,
                                                        keyAttributes: ["Capital transferred from Hastinapura to Kausambi", "King Udayana contemporary with Buddha", "Pivotal archaeological anchor of Puranic chronology"],
                                                        children: [
                                                          {
                                                            id: "cosmo-magadha-mauryas",
                                                            name: "The Magadha Axis & The Maurya Empire",
                                                            sanskrit: "मगध साम्राज्य एवं मौर्य चक्रवर्तिनः (चन्द्रगुप्त-अशोक)",
                                                            title: "Pan-Indian Unification • Emperor Ashoka's Cosmic Dharma Edicts",
                                                            tier: "beings",
                                                            tierLevel: 15,
                                                            category: "Cosmic Royal Dynasties",
                                                            color: "#38BDF8",
                                                            glowColor: "rgba(56, 189, 248, 0.9)",
                                                            icon: "🦁",
                                                            summary: "The center of world governance shifted to Pataliputra; Chandragupta Maurya and Emperor Ashoka the Great unified the Indian subcontinent, inscribing moral Dharma on rock and pillar across all realms.",
                                                            shloka: {
                                                              devanagari: "देवानंप्रियस्य प्रियदर्शिनो राज्ञो धर्मलिपिः । इह न किञ्चि जीवं आरभित्पा प्रजूहितव्यं ॥",
                                                              transliteration: "Devānaṁpriyasya priyadarśino rājño dharma-lipiḥ | Iha na kiñci jīvaṁ ārabhitpā prajūhitavyaṁ ||",
                                                              source: "Major Rock Edict I of Emperor Ashoka",
                                                              meaning: "This is the edict of King Devanampriya Priyadarsin (Ashoka): Here no living being must be slaughtered or sacrificed; all life must be cherished with compassion!"
                                                            },
                                                            details: `
                                                              The Maurya Empire created the largest geographic empire in ancient Indian history, building highways, rest houses, and inscribing ethical codes across four languages (Prakrit, Greek, Aramaic, Sanskrit).
                                                            `,
                                                            keyAttributes: ["Pan-Indian geographic unification", "Guided by Chanakya's Arthashastra", "Universal moral edicts inscribed on stone across India"],
                                                            children: [
                                                              {
                                                                id: "cosmo-shungas-satavahanas",
                                                                name: "Shunga & Satavahana Empires (Revival of Cosmic Yajnas)",
                                                                sanskrit: "शुङ्ग एवं सातवाहन साम्राज्य (अश्वमेध याजकाः)",
                                                                title: "Lords of the Deccan & Aryavarta • Revivers of Vedic Sacrifices",
                                                                tier: "beings",
                                                                tierLevel: 16,
                                                                category: "Cosmic Royal Dynasties",
                                                                color: "#10B981",
                                                                glowColor: "rgba(16, 185, 129, 0.85)",
                                                                icon: "⚓",
                                                                summary: "Pushyamitra Shunga revived the Ashvamedha sacrifice and patronized Sage Patanjali; Gautamiputra Satakarni established maritime trade and rock-cut cave sanctuaries across the Deccan.",
                                                                shloka: {
                                                                  devanagari: "अश्वमेधसहस्रस्य वाजपेयशतस्य च । फलं प्राप्नोति मेधावी धर्मं संरक्ष्य यत्नतः ॥",
                                                                  transliteration: "Aśvamedha-sahasrasya vājapeya-śatasya ca | Phalaṁ prāpnoti medhāvī dharmaṁ saṁrakṣya yatnataḥ ||",
                                                                  source: "Nayanika Inscription of Nanaghat",
                                                                  meaning: "The fruits of a thousand Ashvamedha sacrifices and a hundred Vajapeya yajnas are attained by the wise ruler who earnestly preserves Dharma."
                                                                },
                                                                details: `
                                                                  The Shungas and Satavahanas bridged northern and southern India through maritime trade networks, Vedic sacrifices, and the construction of the Great Stupa of Sanchi.
                                                                `,
                                                                keyAttributes: ["Revived ancient Vedic yajnas (Ashvamedha, Vajapeya)", "Gautamiputra Satakarni protected the Deccan", "Pioneered rock-cut architecture at Nanaghat and Karle"],
                                                                children: [
                                                                  {
                                                                    id: "cosmo-gupta-empire-500ad",
                                                                    name: "The Imperial Gupta Golden Age (to 500 AD • Aryabhata)",
                                                                    sanskrit: "गुप्त साम्राज्य (सुवर्णयुग • आर्यभट्ट एवं वराहमिहिर • ५०० ईस्वी)",
                                                                    title: "Zenith of Classical Indian Astronomy, Mathematics & Culture (499–550 AD)",
                                                                    tier: "beings",
                                                                    tierLevel: 17,
                                                                    category: "Cosmic Royal Dynasties",
                                                                    color: "#FACC15",
                                                                    glowColor: "rgba(250, 204, 21, 0.95)",
                                                                    icon: "🌌",
                                                                    summary: "Pinnacle of cosmological science and culture by 500 AD: In 499 AD, Aryabhata composed the Aryabhatiya in Pataliputra; Varahamihira composed the Pancha Siddhantika; Nalanda University flourished under Kumaragupta and Skandagupta.",
                                                                    shloka: {
                                                                      devanagari: "कुसुमपुरेऽभ्यर्चितं ज्ञानम् । षष्ट्यब्दानां षष्टिर्यदा व्यतीतास्त्रयश्च युगपादाः । त्र्यधिका विंशतिरब्दास्तदेह मम जन्मनोऽतीताः ॥",
                                                                      transliteration: "Kusumppure'bhyarcitaṁ jñānam | Ṣaṣṭy-abdānāṁ ṣaṣṭir yadā vyatītās trayaś ca yuga-pādāḥ | Try-adhikā viṁśatir abdās tadeha mama janmano'tītāḥ ||",
                                                                      source: "Aryabhatiya of Aryabhata (Composed 499 AD at Pataliputra)",
                                                                      meaning: "At Kusumapura (Pataliputra), this sacred astronomical wisdom was revealed: When sixty times sixty years (3,600 years of Kali Yuga) and three quarters of a Yuga had elapsed, twenty-three years had passed since my birth (499 AD)!"
                                                                    },
                                                                    details: `
                                                                      The Imperial Gupta era at **c. 500 AD** represents the glorious culmination where Puranic cosmology and empirical mathematical science converged:
                                                                      - In **499 AD** at the Gupta capital of Pataliputra, the 23-year-old astronomer **Aryabhata** composed the *Aryabhatiya*, formulating the spherical rotating earth, heliocentric planetary models, the value of $\pi$ to four decimals (3.1416), and the sine table.
                                                                      - **Varahamihira** synthesized the five classical astronomical systems in the *Pancha Siddhantika*.
                                                                      - **Nalanda Mahavihara University** taught astronomy (*Khagola*), logic (*Nyaya*), medicine (*Ayurveda*), and philosophy to scholars from across Asia.
                                                                      - This brings the cosmic lineages of Sanatan Dharma from the unmanifest Parabrahman directly down to the historic threshold of **500 AD**!
                                                                    `,
                                                                    keyAttributes: [
                                                                      "Aryabhata composed the Aryabhatiya in 499 AD at Pataliputra",
                                                                      "Pinnacle of classical Indian mathematical astronomy and zero concept",
                                                                      "Brought the continuous genealogical lineage down to 500 AD"
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

                                /* --- 3. THE 14 COSMIC MANVANTARAS --- */
                                {
                                  id: "cosmo-fourteen-manvantaras",
                                  name: "The 14 Manvantaras (The Dynasties of Cosmic Time)",
                                  sanskrit: "चतुर्दश मन्वन्तराणि (कालचक्र मन्वन्तराधिपतयः)",
                                  title: "The Fourteen Administrative Epochs • Rulers, Indras & Sages of Cosmic History",
                                  tier: "beings",
                                  tierLevel: 8,
                                  category: "Cosmic Time Dynasties",
                                  color: "#EC4899",
                                  glowColor: "rgba(236, 72, 153, 0.8)",
                                  icon: "⏳",
                                  summary: "A Kalpa (day of Brahma) comprises 14 Manvantaras. Each era is presided over by a distinct Manu, Indra, Saptarishis, and divine royal sons who govern universal order.",
                                  shloka: {
                                    devanagari: "चतुर्दशैते मनवः कल्पे कल्पे भवन्ति च । यैर्धार्यते जगत् सर्वं यावत् कल्पविकल्पना ॥",
                                    transliteration: "Caturdaśaite manavaḥ kalpe kalpe bhavanti ca | Yair dhāryate jagat sarvaṁ yāvat kalpa-vikalpanā ||",
                                    source: "Vishnu Purana 3.1.28 & Surya Siddhanta",
                                    meaning: "These fourteen Manus manifest in every day of Brahma (Kalpa), by whom this entire universe is righteously sustained throughout the cosmic cycle."
                                  },
                                  details: `
                                    Each Manvantara spans 71 Chatur-Yugas (approximately 306,720,000 human years).
                                    The 14 Manus are:
                                    1. **Svayambhuva** (1st)
                                    2. **Svarochisha** (2nd)
                                    3. **Uttama** (3rd)
                                    4. **Tamasa** (4th)
                                    5. **Raivata** (5th)
                                    6. **Chakshusha** (6th)
                                    7. **Vaivasvata** (7th, Current)
                                    8. **Savarni** (8th, Future)
                                    9. **Daksha-Savarni** (9th)
                                    10. **Brahma-Savarni** (10th)
                                    11. **Dharma-Savarni** (11th)
                                    12. **Rudra-Savarni** (12th)
                                    13. **Raucya / Deva-Savarni** (13th)
                                    14. **Indra-Savarni** (14th).
                                  `,
                                  keyAttributes: [
                                    "14 administrative epochs in one cosmic Kalpa",
                                    "We currently live in the 7th (Vaivasvata) Manvantara",
                                    "Each Manvantara has its unique Manu, Indra, and Saptarishis"
                                  ],
                                  children: []
                                }
                              ]

                            },
                            {
                              id: "fourteen-lokas",
                              name: "The 14 Cosmic Lokas (Bhuvana)",
                              sanskrit: "चतुर्दश भुवन / लोक",
                              title: "The 14 Dimensions: 7 Upper Realms & 7 Subterranean Realms",
                              tier: "lokas",
                              tierLevel: 7,
                              category: "Cosmic Geography",
                              color: "#818CF8", // Periwinkle / Cosmic Violet
                              glowColor: "rgba(129, 140, 248, 0.75)",
                              icon: "🪐",
                              summary: "The vertical hierarchy of dimensions within Brahmanda: Satyaloka down to Patala, sustained by cosmic dharma.",
                              shloka: {
                                devanagari: "भूर्लोकः कल्पितः पद्भ्यां भुवर्लोकोऽस्य नाभितः ।\nहृदा स्वर्लोक उरसा महर्लोको महीयते ॥",
                                transliteration: "Bhūr-lokaḥ kalpitaḥ padbhyāṁ bhuvar-loko'sya nābhitaḥ |\nHṛdā svar-loka urasā mahar-loko mahīyate ||",
                                source: "Srimad Bhagavatam 2.5.38",
                                meaning: "Bhurloka is conceived from the feet of the Universal Form, Bhuvarloka from His navel, Svarloka from His heart, and Maharloka from His chest."
                              },
                              details: `
                                The universe is structured vertically into <strong>14 Lokas</strong> (planetary systems or planes of vibration):
                                <br><br>
                                <strong>7 Upper Realms (Urdhva Lokas)</strong>:
                                <br>
                                1. <strong>Satyaloka (Brahmaloka)</strong>: Supreme abode of Brahma; sphere of highest realization.
                                <br>
                                2. <strong>Tapoloka</strong>: Sphere of intense spiritual tapasya; home of the Kumaras.
                                <br>
                                3. <strong>Janaloka</strong>: Sphere of exalted yogis and rishis.
                                <br>
                                4. <strong>Maharloka</strong>: Abode of Bhrigu and patriarchal sages.
                                <br>
                                5. <strong>Svarloka (Indraloka)</strong>: Celestial heaven of Devas, Gandharvas, and Apsaras.
                                <br>
                                6. <strong>Bhuvarloka</strong>: Atmospheric astral region; home of Siddhas and Pitrs.
                                <br>
                                7. <strong>Bhurloka</strong>: Earthly physical plane; karma-bhumi and testing ground of mortals.
                                <br><br>
                                <strong>7 Lower Realms (Adho Lokas / Bila-Svarga)</strong>:
                                <br>
                                8. <strong>Atala</strong> (ruled by Bala), 9. <strong>Vitala</strong> (Hatakeshvara Shiva), 10. <strong>Sutala</strong> (realm of King Bali, protected by Vamana), 11. <strong>Talatala</strong> (Maya Danava), 12. <strong>Mahatala</strong> (realm of great Nagas), 13. <strong>Rasatala</strong> (Daityas and Danavas), 14. <strong>Patala</strong> (Vasuki and <strong>Lord Ananta Shesha</strong> supporting all planetary systems).
                              `,
                              keyAttributes: [
                                "7 Upper Lokas (Spiritual and Celestial Spheres)",
                                "Bhurloka (Earth: The Karma-Bhumi / arena of moral choice)",
                                "7 Lower Lokas (Bila-Svarga: Subterranean realms)",
                                "Upheld upon the thousands of hoods of Lord Ananta Shesha"
                              ],
                              children: [
                                 {
                                   id: "cosmo-upper-lokas",
                                   name: "The 7 Upper Realms (Urdhva Lokas)",
                                   sanskrit: "सप्त ऊर्ध्व लोकाः (सत्य, तप, जन, महः, स्वः, भुवः, भूः)",
                                   title: "Celestial, Ascetic & Terrestrial Spheres of Consciousness",
                                   tier: "dimension",
                                   tierLevel: 8,
                                   category: "Upper Dimensions",
                                   color: "#38BDF8",
                                   glowColor: "rgba(56, 189, 248, 0.75)",
                                   icon: "🌌",
                                   summary: "The ascending realms of spiritual elevation: from earthly Bhuloka up through Svarloka to Satyaloka (Brahmaloka).",
                                   shloka: {
                                     devanagari: "सत्यं तपो जनश्चैव महः स्वर्भूभुवस्तथा । सप्तोर्ध्वलोका विख्याता धर्मिणां पुण्यसंश्रयाः ॥",
                                     transliteration: "Satyaṁ tapo janaś caiva mahaḥ svar-bhū-bhuvas tathā | Saptordhva-lokā vikhyātā dharmiṇāṁ puṇya-saṁśrayāḥ ||",
                                     source: "Vishnu Purana 2.7.12",
                                     meaning: "Satya, Tapas, Jana, Mahas, Svar, Bhuvar, and Bhu—these seven upper realms are renowned as the sacred abodes of the righteous."
                                   },
                                   details: `
                                     In Vedic cosmology, each upper realm represents a refined frequency of consciousness:
                                     • <strong>Satyaloka</strong>: Abode of Lord Brahma and liberated souls.
                                     • <strong>Tapoloka</strong>: Home of the Four Sanat Kumaras established in unbroken samadhi.
                                     • <strong>Janaloka</strong>: Realm of mind-born creator sages.
                                     • <strong>Maharloka</strong>: Abode of Sage Bhrigu and enduring rishis.
                                     • <strong>Svarloka</strong>: Heaven of King Indra, Devas, and Gandharvas.
                                     • <strong>Bhuvarloka</strong>: Astral sphere of Siddhas and atmospheric devas.
                                     • <strong>Bhuloka</strong>: Earthly terrestrial sphere (Karma-Bhumi) where souls exercise moral free will.
                                   `,
                                   keyAttributes: [
                                     "Ascending levels of vibration and spiritual refinement",
                                     "Satyaloka survives standard Naimittika Pralaya",
                                     "Bhuloka is the Karma-Bhumi: arena of spiritual liberation"
                                   ],
                                   children: []
                                 },
                                 {
                                   id: "cosmo-lower-lokas",
                                   name: "The 7 Nether Realms (Adho Lokas / Bila-Svarga)",
                                   sanskrit: "सप्त अधो लोकाः (अतल, वितल, सुतल, तलातल, महातल, रसातल, पाताल)",
                                   title: "Subterranean Paradises & The Realm of Ananta Shesha",
                                   tier: "dimension",
                                   tierLevel: 8,
                                   category: "Lower Dimensions",
                                   color: "#64748B",
                                   glowColor: "rgba(100, 116, 139, 0.75)",
                                   icon: "🕳️",
                                   summary: "The subterranean realms (Bila-Svarga) endowed with mystic gems, cities of Daityas, Nagas, and Lord Ananta Shesha.",
                                   shloka: {
                                     devanagari: "अतलं वितलं चैव सुतलं च तलातलम् । महातलं रसातलं पातालं चापि सप्तमम् ॥",
                                     transliteration: "Atalaṁ vitalaṁ caiva sutalaṁ ca talātalam | Mahātalaṁ rasātalaṁ pātālaṁ cāpi saptamam ||",
                                     source: "Srimad Bhagavatam 5.24.7",
                                     meaning: "Atala, Vitala, Sutala, Talatala, Mahatala, Rasatala, and Patala the seventh—these are the nether realms."
                                   },
                                   details: `
                                     Far from being 'hells', the Puranas describe the Bila-Svargas as subterranean paradises adorned with architectural splendors and glowing jewels:
                                     • <strong>Atala</strong>: Realm of mystic Maya of demon Bala.
                                     • <strong>Vitala</strong>: Golden realm sanctified by Hatakeshvara Shiva.
                                     • <strong>Sutala</strong>: Realm of Emperor Mahabali, guarded eternally by Lord Vamana.
                                     • <strong>Talatala</strong>: Fortress of Maya Danava, master architect of mystic illusions.
                                     • <strong>Mahatala</strong>: Domain of ferocious hooded serpents (Kuhaka, Takshaka).
                                     • <strong>Rasatala</strong>: Abode of mighty Daityas and Danavas.
                                     • <strong>Patala</strong>: Nagaloka ruled by King Vasuki, resting directly above Lord Ananta Shesha who holds all planetary globes on His hoods.
                                   `,
                                   keyAttributes: [
                                     "Bila-Svarga: Subterranean paradises with celestial opulence",
                                     "Sutala is blessed by Vishnu's eternal personal presence",
                                     "Patala rests upon the thousand hoods of Ananta Shesha"
                                   ],
                                   children: []
                                 },
                                 {
                                   id: "species-yonis",
                                   name: "8.4 Million Species (Chaurasi Lakh Yoni)",
                                   sanskrit: "चतुराशीति लक्ष योनि",
                                   title: "Embodied Life Forms in the Matrix of Transmigration",
                                   tier: "life",
                                   tierLevel: 8,
                                   category: "Biological & Conscious Forms",
                                   color: "#10B981",
                                   glowColor: "rgba(16, 185, 129, 0.65)",
                                   icon: "🦚",
                                   summary: "The classification of all living entities transmigrating across the cosmos according to karma and gunas.",
                                   shloka: {
                                     devanagari: "जलजा नव लक्षाणि स्थावरा लक्षविंशति ।\nकृमयो रुद्रसङ्ख्याकाः पक्षिणां दश लक्षणम् ॥\nत्रिंशल्लक्षाणि पशवः चतुरक्षाणि मानवाः ॥",
                                     transliteration: "Jalajā nava-lakṣāṇi sthāvarā lakṣa-viṁśati |\nKṛmayo rudra-saṅkhyākāḥ pakṣiṇāṁ daśa-lakṣaṇam ||\nTriṁśal-lakṣāṇi paśavaḥ catur-akṣāṇi mānavāḥ ||",
                                     source: "Padma Purana & Vishnu Purana",
                                     meaning: "900,000 species of aquatic creatures; 2,000,000 species of plant life; 1,100,000 species of reptiles and insects; 1,000,000 species of birds; 3,000,000 species of beasts; and 400,000 human species."
                                   },
                                   details: `
                                     In Sanatan Dharma, life is not viewed as an accident but as the conscious spirit (*Jivatma*) clothing itself in diverse biological suits according to desire and karma.
                                     Human birth (*Manushya Janma*) is uniquely precious because only in the human vessel can consciousness reflect upon its eternal source and achieve Moksha.
                                   `,
                                   keyAttributes: [
                                     "8,400,000 graded biological vessels",
                                     "Consciousness evolving from dormant to self-aware",
                                     "Manushya birth: Sole gateway to Moksha"
                                   ],
                                   children: []
                                 },
                                 {
                                   id: "kala-chakra",
                                   name: "Kala Chakra (Cosmic Cycles of Time)",
                                   sanskrit: "काल चक्र एवं महाप्रलय",
                                   title: "Chatur-Yugas, Kalpas & The Inevitable Mahapralaya",
                                   tier: "time",
                                   tierLevel: 8,
                                   category: "Cosmic Time Dynamics",
                                   color: "#E11D48",
                                   glowColor: "rgba(225, 29, 72, 0.7)",
                                   icon: "⌛",
                                   summary: "Cyclic cosmic time: the four Yugas, Manvantaras, Kalpa (Day of Brahma), and Mahapralaya (Dissolution back to Brahman).",
                                   shloka: {
                                     devanagari: "सहस्रयुगपर्यन्तमहर्यद् ब्रह्मणो विदुः ।\nरात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ॥",
                                     transliteration: "Sahasra-yuga-paryantam ahar yad brahmaṇo viduḥ |\nRātriṁ yuga-sahasrāntāṁ te'ho-rātra-vido janāḥ ||",
                                     source: "Bhagavad Gita 8.17",
                                     meaning: "By human calculation, a thousand Mahayugas constitute one day of Brahma, and equally another thousand make up his night. Those who know this understand cosmic time."
                                   },
                                   details: `
                                     Time in Sanatan Dharma is non-linear and endlessly cyclical:
                                     • <strong>1 Mahayuga = 4 Yugas (4.32 Million solar years)</strong>
                                     • <strong>1 Kalpa = 1,000 Mahayugas (4.32 Billion years)</strong>: A single day of Brahma.
                                     • <strong>100 Years of Brahma = Maha-Kalpa (311.04 Trillion years)</strong>: At its conclusion, <strong>Maha-Pralaya</strong> dissolves all 24 Tattvas back into Nirguna Brahman until the next cosmic cycle breathes forth!
                                   `,
                                   keyAttributes: [
                                     "Chatur-Yuga Cycle (4.32 million years)",
                                     "Kalpa (Day of Brahma = 4.32 billion years)",
                                     "Lifespan of Universe = 311.04 trillion years",
                                     "Mahapralaya: Complete dissolution into the Unmanifest Absolute"
                                   ],
                                   children: [
                                     {
                                       id: "cosmo-four-yugas",
                                       name: "The Four Cyclic Yugas (Chatur-Yuga)",
                                       sanskrit: "चतुर्युग (सत्य, त्रेता, द्वापर, कलि)",
                                       title: "The Four Epochs of Human Consciousness and Virtue",
                                       tier: "time-epoch",
                                       tierLevel: 9,
                                       category: "Time Epochs",
                                       color: "#F59E0B",
                                       glowColor: "rgba(245, 158, 11, 0.8)",
                                       icon: "🔄",
                                       summary: "Satya Yuga (1,728,000 yrs - Meditation), Treta (1,296,000 yrs - Yajna), Dvapara (864,000 yrs - Temple Worship), Kali (432,000 yrs - Harinaam Sankirtana).",
                                       shloka: {
                                         devanagari: "कृते यद् ध्यायतो विष्णुं त्रेतायां यजतो मखैः । द्वापरे परिचर्यायां कलौ तद्धरिकीर्तनात् ॥",
                                         transliteration: "Kṛte yad dhyāyato viṣṇuṁ tretāyāṁ yajato makhaiḥ | Dvāpare paricaryāyāṁ kalau tad dhari-kīrtanāt ||",
                                         source: "Vishnu Purana 6.2.17",
                                         meaning: "What was attained in Satya Yuga by meditation, in Treta Yuga by grand sacrifices, and in Dvapara by elaborate temple worship, is attained in Kali Yuga simply by chanting the holy names of God."
                                       },
                                       details: `
                                         Across the four Yugas, human life expectancy and spiritual capacity decline from 100,000 years (Satya) to 10,000 (Treta), 1,000 (Dvapara), and 100 years (Kali).
                                         However, Sage Vyasa declares Kali Yuga blessed because supreme liberation is achieved with the minimal, gentle exertion of pure devotion (*Harinaam*).
                                       `,
                                       keyAttributes: ["Four legs of Dharma: Truth, Purity, Compassion, Austerity", "Ratio 4:3:2:1 duration", "Kali Yuga's special benediction of Namasankirtana"],
                                       children: []
                                     },
                                     {
                                       id: "cosmo-four-pralayas",
                                       name: "The Four Cosmic Dissolutions (Pralaya)",
                                       sanskrit: "चतुर्विध प्रलय (नित्य, नैमित्तिक, प्राकृत, आत्यन्तिक)",
                                       title: "The Natural, Periodic, Elemental & Absolute Liberations",
                                       tier: "dissolution",
                                       tierLevel: 9,
                                       category: "Cosmic Dissolution",
                                       color: "#991B1B",
                                       glowColor: "rgba(153, 27, 27, 0.85)",
                                       icon: "🌊",
                                       summary: "Nitya (Sleep & death), Naimittika (Brahma's night), Prakritika (End of Brahma's 100 years), and Atyantika (Supreme liberation/Moksha).",
                                       shloka: {
                                         devanagari: "नैमित्तिकः प्राकृतिकस्तथैवात्यन्तिको द्विज । नित्यश्च सर्वभूतानां प्रलयश्चतुर्विधः स्मृतः ॥",
                                         transliteration: "Naimittikaḥ prākṛtikas tathaivātyantiko dvija | Nityaś ca sarva-bhūtānāṁ pralayaś catur-vidhaḥ smṛtaḥ ||",
                                         source: "Vishnu Purana 1.7.41",
                                         meaning: "Occasional, Elemental, Absolute, and Constant—these are the four types of dissolution recognized by the wise, O sage."
                                       },
                                       details: `
                                         1. <strong>Nitya Pralaya</strong>: Momentary continuous change, sleep, and physical mortality.
                                         2. <strong>Naimittika Pralaya</strong>: Occurs at the end of each Kalpa when Brahma sleeps; lower three realms (Bhu, Bhuvar, Svar) are submerged by cosmic fire and waters.
                                         3. <strong>Prakritika Pralaya</strong>: Occurs after 100 years of Brahma (311.04 trillion solar years); all elements dissolve in reverse sequence back into unmanifest Mula-Prakriti.
                                         4. <strong>Atyantika Pralaya</strong>: Absolute liberation (*Moksha*), where the individual soul dissolves all ignorance and realizes eternal oneness with Parabrahman.
                                       `,
                                       keyAttributes: [
                                         "Four scientific categories of dissolution",
                                         "Prakritika Pralaya: Elemental reverse resolution",
                                         "Atyantika Pralaya: Ultimate Moksha beyond all cosmic cycles"
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
};

// Quick helper to collect all nodes in a flat map for instant lookup & search
const COSMOLOGY_MAP = new Map();
function indexNodes(node, parent = null, depth = 0) {
  node.parent = parent ? parent.id : null;
  node.depth = depth;
  COSMOLOGY_MAP.set(node.id, node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => indexNodes(child, node, depth + 1));
  }
}
indexNodes(COSMOLOGY_DATA);
