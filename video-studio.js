/**
 * SanatanOrigin • Automated YouTube Video Studio & Director Engine
 * 
 * Orchestrates a complete 7-act cinematic showcase of SanatanOrigin:
 * 1. The Primordial Source (Parabrahman & Omkara)
 * 2. Cosmic OM Synthesizer (136.1 Hz Sadja tone & dynamic 3D celestial canvas)
 * 3. Progressive Disclosure (Unfurling Trideva, frictionless pan/zoom, dock controls)
 * 4. The 4 Sacred Traditions (General, Vaishnava, Shaiva, Samkhya Tattvas)
 * 5. Divine Profile Inspector (Lord Shiva, Layman's guide, mantras, lineage trail)
 * 6. Smart Search & Guided Yatras (Searching "Lord Rama", auto-unfurl, camera fly-to)
 * 7. Mobile Experience & Creator Credits (Madhup Tiwari, LinkedIn link, CTA)
 * 
 * Features:
 * - Live broadcast golden lower-thirds & chapter progress bar
 * - SpeechSynthesis narration with synchronized subtitle tracking
 * - High-definition screen/tab recorder with auto-download of .webm video file
 * - Full manual controls: Play, Pause, Skip Beat, Restart, Voice Mode Toggle
 */

(function () {
  'use strict';

  class VideoStudioDirector {
    constructor() {
      this.currentBeatIndex = 0;
      this.isPlaying = false;
      this.isRecording = false;
      this.voiceMode = 'speech'; // 'speech' | 'mute'
      this.timerId = null;
      this.recordingTimerId = null;
      this.recordingStartTime = 0;
      this.mediaRecorder = null;
      this.recordedChunks = [];
      this.mediaStream = null;

      // DOM Elements
      this.chapterTag = document.getElementById('studio-chapter-tag');
      this.chapterTitle = document.getElementById('studio-chapter-title');
      this.progressFill = document.getElementById('cinema-progress-fill');
      this.lowerThirdSanskrit = document.getElementById('lower-third-sanskrit');
      this.lowerThirdHeadline = document.getElementById('lower-third-headline');
      this.lowerThirdTag = document.getElementById('lower-third-tag');
      this.lowerThirdEmblem = document.getElementById('lower-third-emblem');
      this.subtitlesBanner = document.getElementById('live-subtitles-banner');
      this.playBtn = document.getElementById('studio-play-btn');
      this.playIcon = document.getElementById('studio-play-icon');
      this.playLabel = document.getElementById('studio-play-label');
      this.recordBtn = document.getElementById('studio-record-btn');
      this.recordIcon = document.getElementById('studio-record-icon');
      this.recordLabel = document.getElementById('studio-record-label');
      this.recIndicator = document.getElementById('recording-live-indicator');
      this.recTimeCounter = document.getElementById('rec-time-counter');
      this.modalOverlay = document.getElementById('studio-modal-overlay');
      this.modalDownloadBtn = document.getElementById('modal-download-btn');

      // Build Beat Registry
      this.beats = this.buildBeats();

      // Ensure SpeechSynthesis is warmed up
      if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = window.speechSynthesis.getVoices();
        };
        this.voices = window.speechSynthesis.getVoices();
      }

      // Initialize UI to beat 0
      this.updateDisplay(0);
    }

    buildBeats() {
      return [
        /* ========================================================================
           ACT 1: The Primordial Source & The Problem
           ======================================================================== */
        {
          act: 'ACT 1',
          chapter: 'The Primordial Source',
          sanskrit: '✦ दिव्य मूलम् • सर्वकारणकारणम्',
          headline: 'How are all Hindu Deities connected?',
          tag: 'VEDIC GENEALOGY',
          emblem: '🕉️',
          speech: 'Have you ever wondered how all the deities in Sanatan Dharma are actually connected? Who originated from whom? How do Brahma, Vishnu, and Shiva trace back to the single ultimate reality?',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('general');
              window.cosmicApp.resetToApexOnly();
            }
            if (window.cosmicAudio && !window.cosmicAudio.isPlaying) {
              window.cosmicAudio.start();
            }
          }
        },
        {
          act: 'ACT 1',
          chapter: 'The Scriptural Challenge',
          sanskrit: '✦ अष्टादश महापुराणानि • चत्वारो वेदाः',
          headline: 'Traditional Texts: 18 Puranas & 4 Vedas',
          tag: 'ANCIENT WISDOM',
          emblem: '📜',
          speech: 'For thousands of years, this sacred knowledge has been scattered across 18 Mahapuranas, 4 Vedas, and countless philosophical schools. To any curious seeker or lifelong devotee, it can feel vast and overwhelming.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.targetScale = window.cosmicApp.getOptimalScale() * 1.15;
              window.cosmicApp.requestRender();
            }
          }
        },
        {
          act: 'ACT 1',
          chapter: 'Introducing SanatanOrigin',
          sanskrit: '✦ सनातनोत्पत्तिः • ब्रह्माण्डदर्शनम्',
          headline: 'Interactive Vedic Cosmology & Lineage Map',
          tag: 'SANATAN ORIGIN',
          emblem: '✨',
          speech: 'That is exactly why SanatanOrigin was built. It is an interactive, visual cosmic genealogy map and digital encyclopedia that brings the entire hierarchy of Sanatan Dharma to your fingertips—from the unmanifested Absolute down to Lord Rama and Lord Krishna.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.resetToApex();
            }
          }
        },

        /* ========================================================================
           ACT 2: Cosmic OM Synthesizer & Celestial Canvas
           ======================================================================== */
        {
          act: 'ACT 2',
          chapter: 'Cosmic OM Synthesizer',
          sanskrit: '✦ ॐकार ध्वनिः • १३६.१ हर्ट्ज़ षड्ज स्वरः',
          headline: '136.1 Hz Cosmic Frequency: Primordial Sadja',
          tag: 'PROCEDURAL AUDIO',
          emblem: '🪕',
          speech: 'When you open SanatanOrigin, notice the meditative atmosphere. In the top header bar, the Cosmic OM synthesizer generates the exact 136.1 Hertz frequency, known in Indian classical music and cosmology as the primordial Omkara or Sadja.',
          action: () => {
            const btn = document.getElementById('audio-toggle-btn');
            if (btn) {
              btn.style.boxShadow = '0 0 28px #FFD700';
              setTimeout(() => { btn.style.boxShadow = ''; }, 3500);
            }
            if (window.cosmicAudio) {
              window.cosmicAudio.start();
            }
          }
        },
        {
          act: 'ACT 2',
          chapter: 'Harmonic Synthesis & Pure Audio',
          sanskrit: '✦ नादब्रह्म • सहज ध्यानम्',
          headline: 'Zero External Assets • Procedural Synthesis',
          tag: 'REAL-TIME SYNTHESIS',
          emblem: '🔔',
          speech: 'This is completely procedural—zero MP3 downloads. It breathes with harmonic overtones and meditative temple chimes. You can toggle it off anytime with one click, and it remembers your preference for silent study.',
          action: () => {
            if (window.cosmicBg) {
              window.cosmicBg.addRipple(window.innerWidth / 2, window.innerHeight * 0.35);
            }
          }
        },
        {
          act: 'ACT 2',
          chapter: '3D Celestial Canvas',
          sanskrit: '✦ श्रीयन्त्रम् • प्राणकणाः',
          headline: 'Dynamic 3D Celestial Canvas & Prana Particles',
          tag: 'COSMIC BACKGROUND',
          emblem: '🌌',
          speech: 'Behind the map is a dynamic Vedic canvas with moving 3D starfields, subtle Sri Yantra sacred geometry, and golden Prana particles that react dynamically as you interact with the screen.',
          action: () => {
            if (window.cosmicBg) {
              window.cosmicBg.addRipple(window.innerWidth * 0.3, window.innerHeight * 0.4);
              setTimeout(() => {
                if (window.cosmicBg) window.cosmicBg.addRipple(window.innerWidth * 0.7, window.innerHeight * 0.5);
              }, 600);
            }
          }
        },

        /* ========================================================================
           ACT 3: Progressive Disclosure & Navigation Controls
           ======================================================================== */
        {
          act: 'ACT 3',
          chapter: 'Progressive Disclosure',
          sanskrit: '✦ परब्रह्मन् • निराकार चिदानन्दम्',
          headline: 'Step 1: The Primordial Source (Parabrahman)',
          tag: 'PROGRESSIVE DISCLOSURE',
          emblem: '🕉️',
          speech: 'Unlike chaotic family tree websites that overwhelm you with hundreds of boxes at once, SanatanOrigin uses Progressive Disclosure. It starts at the absolute beginning: Parabrahman—the Formless, Infinite Reality beyond time and space.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.resetToApexOnly();
            }
          }
        },
        {
          act: 'ACT 3',
          chapter: 'Unfurling the Trimurti',
          sanskrit: '✦ त्रिमूर्ति प्रादुर्भावः • ब्रह्मा विष्णुः शिवः',
          headline: 'Click Child God Pill to Unfurl Lines (Nadis)',
          tag: 'BRANCH EXPANSION',
          emblem: '🔱',
          speech: 'At the bottom of each box with descendants, click the child gods pill. Immediately, the golden Nadis curve gracefully downward to reveal the primary manifestations: Lord Brahma, Lord Vishnu, and Lord Shiva.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.toggleCollapse('general-parabrahman');
            }
          }
        },
        {
          act: 'ACT 3',
          chapter: 'Frictionless Navigation',
          sanskrit: '✦ स्वच्छन्द विचरणम् • आकर्षण विस्तारौ',
          headline: 'Drag to Pan • Scroll or Pinch to Zoom',
          tag: 'GESTURE CONTROLS',
          emblem: '🖐️',
          speech: 'Navigating the cosmic stage is completely frictionless: Click and drag anywhere to pan smoothly in any direction. Scroll your mouse wheel or pinch on your laptop trackpad to zoom in for minute details or zoom out for the bird\'s-eye view.',
          action: () => {
            if (window.cosmicApp) {
              // Smooth pan down towards Vishnu & Shiva
              window.cosmicApp.targetScrollY -= 120;
              window.cosmicApp.targetScale *= 1.1;
              window.cosmicApp.requestRender();
            }
          }
        },
        {
          act: 'ACT 3',
          chapter: 'Floating Dock Shortcuts',
          sanskrit: '✦ यन्त्र नियन्त्रणम् • संक्षेप विस्तारौ',
          headline: 'Fit to Viewport (⛶) • Expand All (🌳) • Reset Apex (🕉️)',
          tag: 'CONTROL DOCK',
          emblem: '🧭',
          speech: 'If you ever lose your place, check the floating dock in the bottom right corner: Click Fit to Screen to scale the entire visible tree to your window, or click the Om icon to instantly re-center back to the apex origin.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.fitTreeToViewport(true);
            }
          }
        },

        /* ========================================================================
           ACT 4: The 4 Sacred Canonical Traditions
           ======================================================================== */
        {
          act: 'ACT 4',
          chapter: '4 Canonical Traditions',
          sanskrit: '✦ एकं सद् विप्रा बहुधा वदन्ति',
          headline: '4 Canonical Perspectives Built Right In',
          tag: 'VEDIC PLURALISM',
          emblem: '📖',
          speech: 'One of the greatest strengths of SanatanOrigin is that it does not force a single sectarian viewpoint. In Sanatan Dharma, different Puranas view the Supreme through different lenses. SanatanOrigin lets you explore all four major traditions with one click.',
          action: () => {
            const bar = document.querySelector('.tradition-segmented-bar');
            if (bar) {
              bar.style.boxShadow = '0 0 24px rgba(255, 215, 0, 0.6)';
              setTimeout(() => { bar.style.boxShadow = ''; }, 3000);
            }
          }
        },
        {
          act: 'ACT 4',
          chapter: 'General Purana Tradition',
          sanskrit: '✦ सामूहिक पुराण परम्परा • वैदिक समन्वयः',
          headline: 'Trimurti • Saptarishis • Prajapati Kashyapa • Devas',
          tag: 'TRADITION 1: GENERAL',
          emblem: '📜',
          speech: 'First, the General Purana tradition—the universal synthesis of the Bhagavata and Vishnu Puranas. It shows Parabrahman manifesting through the Trimurti, then Brahma creating the Saptarishis, descending to Prajapati Kashyapa, the Solar Dynasty, and the Lunar Dynasty.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('general');
              window.cosmicApp.ensureNodeVisible('gen-saptarishis');
              window.cosmicApp.selectNode('gen-saptarishis', false, true);
            }
          }
        },
        {
          act: 'ACT 4',
          chapter: 'Vaishnava Tradition',
          sanskrit: '✦ वैष्णव परम्परा • पर वासुदेव नारायणः',
          headline: 'Para Vasudeva • Chatur-Vyuha • Dashavatara',
          tag: 'TRADITION 2: VAISHNAVA',
          emblem: '🪷',
          speech: 'Now let\'s switch to the Vaishnava Tradition. The layout reconfigures dynamically. Here, the Supreme Origin is Para Vasudeva Narayana in Vaikuntha. You can trace the quadruple Chatur-Vyuha emanation into Mahavishnu and all ten divine Dashavatara descents.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('vishnu');
              window.cosmicApp.toggleCollapse('vp-narayana');
              window.cosmicApp.ensureNodeVisible('vp-dashavatara');
              window.cosmicApp.selectNode('vp-dashavatara', false, true);
            }
          }
        },
        {
          act: 'ACT 4',
          chapter: 'Shaiva Tradition',
          sanskrit: '✦ शैव परम्परा • परमशिव सदाशिव महेश्वरः',
          headline: 'Paramashiva • 12 Jyotirlingas • 11 Rudras • Kailasha',
          tag: 'TRADITION 3: SHAIVA',
          emblem: '🔱',
          speech: 'Next, the Shaiva Tradition. Here, the supreme source is Paramashiva—the transcendent consciousness. As you expand, discover five-faced Sadashiva, the twelve sacred Jyotirlingas, the eleven Rudras, Bhairavas, and the Kailasha family of Ganesha and Kartikeya.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('shiva');
              window.cosmicApp.toggleCollapse('sp-sadashiva');
              window.cosmicApp.ensureNodeVisible('sp-kailasha-family');
              window.cosmicApp.selectNode('sp-kailasha-family', false, true);
            }
          }
        },
        {
          act: 'ACT 4',
          chapter: 'Cosmology & Tattvas',
          sanskrit: '✦ सांख्य दर्शनम् • २४ तत्त्वानि चतुर्दश भुवनानि',
          headline: 'Purusha & Prakriti • Mahat • 5 Mahabhutas • 14 Lokas',
          tag: 'TRADITION 4: TATTVAS',
          emblem: '🌌',
          speech: 'And fourth, for philosophical thinkers: the Cosmology and Tattvas mode based on Samkhya philosophy. It maps the 24 cosmic principles—Purusha, Prakriti, Cosmic Intellect Mahat, Ego Ahankara, the five elements, and all fourteen universal Lokas.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('tattvas');
              window.cosmicApp.toggleCollapse('nirguna-brahman');
              window.cosmicApp.fitTreeToViewport(true);
            }
          }
        },

        /* ========================================================================
           ACT 5: Divine Profile Inspector & Layman's Guides
           ======================================================================== */
        {
          act: 'ACT 5',
          chapter: 'Divine Profile Inspector',
          sanskrit: '✦ दिव्य स्वरूप विवरणम् • तत्त्वजिज्ञासा',
          headline: 'Click any Card for Full Scriptural Dossier',
          tag: 'PROFILE INSPECTOR',
          emblem: '🔍',
          speech: 'Clicking any pill expands child branches. But what happens if you click on the box itself? Watch this. Clicking any box opens the Divine Profile Inspector—a sliding cosmic drawer packed with authoritative, verified scriptural information.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.switchTradition('general');
              window.cosmicApp.ensureNodeVisible('gen-shiva');
              window.cosmicApp.selectNode('gen-shiva', true, true);
            }
          }
        },
        {
          act: 'ACT 5',
          chapter: 'Canonical Metadata & Iconography',
          sanskrit: '✦ आयुधम् • वाहनम् • लोकः • शक्तिः',
          headline: 'Sanskrit Devanagari • Consort • Mount • Weapon • Abode',
          tag: 'CANONICAL DATA',
          emblem: '🔱',
          speech: 'At the top, you get the sacred title and Sanskrit Devanagari script. Right below is an instant quick-glance breakdown: Divine Aspect, Consort, Mount, Canonical Weapons, and Heavenly Abode—verified against classical texts.',
          action: () => {
            const drawerBody = document.querySelector('.drawer-body');
            if (drawerBody) {
              drawerBody.scrollTo({ top: 100, behavior: 'smooth' });
            }
          }
        },
        {
          act: 'ACT 5',
          chapter: "The Layman's Guide",
          sanskrit: '✦ सरल व्याख्या • सुगम वेदान्तः',
          headline: 'Complex Metaphysics Translated into Simple English',
          tag: "LAYMAN'S GUIDE",
          emblem: '💡',
          speech: 'My favorite part is the Layman\'s Guide. Vedic philosophy can sometimes feel cryptic. This section translates complex metaphysical concepts into clear, beautiful, accessible English so that anyone worldwide can understand the deeper meaning.',
          action: () => {
            const laymanSection = document.getElementById('drawer-layman');
            if (laymanSection) {
              laymanSection.style.border = '2px solid #FFD700';
              laymanSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              setTimeout(() => { laymanSection.style.border = ''; }, 3500);
            }
          }
        },
        {
          act: 'ACT 5',
          chapter: 'Mantras & Lineage Breadcrumbs',
          sanskrit: '✦ महामृत्यंजय मन्त्रः • वंशावली पथः',
          headline: 'Sacred Chants & Lineage Path Breadcrumbs',
          tag: 'LINEAGE TRAIL',
          emblem: '📿',
          speech: 'Below that, you have authentic scriptural citations and sacred chants. Look at the bottom of the screen: the Lineage Path Breadcrumbs show the exact spiritual ancestry from this deity straight back to Parabrahman.',
          action: () => {
            const bar = document.querySelector('.breadcrumb-bar');
            if (bar) {
              bar.style.boxShadow = '0 0 24px rgba(255, 215, 0, 0.8)';
              setTimeout(() => { bar.style.boxShadow = ''; }, 3500);
            }
          }
        },

        /* ========================================================================
           ACT 6: Smart Search & Guided Cosmic Yatras
           ======================================================================== */
        {
          act: 'ACT 6',
          chapter: 'Instant Cosmic Search',
          sanskrit: '✦ दिव्य अनुसंधानम् • त्वरित अन्वेषणम्',
          headline: 'Real-Time Typeahead Search across All Deities',
          tag: 'SMART SEARCH',
          emblem: '⚡',
          speech: 'What if you are looking for someone specific—like Lord Rama, Hanuman, or Goddess Saraswati? You don\'t have to hunt through hundreds of nodes manually. Just use the Cosmic Search Bar at the top.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.closeDetailDrawer();
            }
            const input = document.getElementById('search-input');
            if (input) {
              input.focus();
              input.value = 'Lord Rama';
              input.style.boxShadow = '0 0 20px #FFD700';
              setTimeout(() => { input.style.boxShadow = ''; }, 3000);
            }
          }
        },
        {
          act: 'ACT 6',
          chapter: 'Auto-Unfurling Camera Fly-To',
          sanskrit: '✦ मर्यादा पुरुषोत्तम • श्री रामचन्द्रः',
          headline: 'Auto-Unfurls Parent Branches & Glides Camera',
          tag: 'CAMERA FLY-TO',
          emblem: '🏹',
          speech: 'When you select a deity—watch this: the map automatically unfurls all necessary parent branches, glides the camera straight to the box with a golden pulse, and opens their profile!',
          action: () => {
            const input = document.getElementById('search-input');
            if (input) input.value = '';
            if (window.cosmicApp) {
              window.cosmicApp.ensureNodeVisible('gen-avatar-rama');
              window.cosmicApp.selectNode('gen-avatar-rama', true, true);
            }
          }
        },
        {
          act: 'ACT 6',
          chapter: 'Guided Cosmic Yatras',
          sanskrit: '✦ मार्गदर्शित यात्रा • देव यात्रा',
          headline: 'Curated Step-by-Step Cosmic Pilgrimage',
          tag: 'GUIDED TOURS',
          emblem: '🌟',
          speech: 'If you want a structured tour, click the Cosmic Tour button. Each tradition has its own guided Yatra—taking you step-by-step through the major milestones of creation with tailored commentary at each stop.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.closeDetailDrawer();
              window.cosmicApp.startGuidedTour();
              setTimeout(() => {
                if (window.cosmicApp) window.cosmicApp.closeTour();
              }, 4000);
            }
          }
        },

        /* ========================================================================
           ACT 7: Mobile Experience, Creator Credits & Outro
           ======================================================================== */
        {
          act: 'ACT 7',
          chapter: '100% Mobile Ready',
          sanskrit: '✦ सर्वोपकरण अनुकूलितम् • स्पर्श सुलभम्',
          headline: 'Seamless Gestures on iPhone, iPad & Android',
          tag: 'RESPONSIVE DESIGN',
          emblem: '📱',
          speech: 'Best of all, SanatanOrigin is 100% responsive and optimized for mobile devices. Whether you are on an iPhone, iPad, Android phone, or a 4K desktop monitor, the gesture controls and hardware-accelerated rendering make it smooth as butter.',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.fitTreeToViewport(true);
            }
          }
        },
        {
          act: 'ACT 7',
          chapter: 'Creator & Copyright Credit',
          sanskrit: '✦ निर्माणम् • मधुप् तिवारी',
          headline: 'Designed & Developed by Madhup Tiwari',
          tag: 'CREATOR CREDIT',
          emblem: '👨‍💻',
          speech: 'This web application is completely free and open to all seekers of knowledge. It was designed and developed with devotion by Madhup Tiwari. You can connect with Madhup directly via the LinkedIn link in the footer and description below.',
          action: () => {
            const footer = document.getElementById('site-footer');
            if (footer) {
              footer.style.boxShadow = '0 0 32px #FFD700';
              footer.style.transform = 'translateX(-50%) scale(1.05)';
              setTimeout(() => {
                footer.style.boxShadow = '';
                footer.style.transform = 'translateX(-50%)';
              }, 4000);
            }
          }
        },
        {
          act: 'ACT 7',
          chapter: 'Outro & Call to Action',
          sanskrit: '✦ ॐ शान्तिः शान्तिः शान्तिः • शुभम् भवतु',
          headline: 'Link in Description • Like, Share & Subscribe!',
          tag: 'JOIN THE COMMUNITY',
          emblem: '🙏',
          speech: 'The link to try SanatanOrigin right now is in the first line of the description. Bookmark it, explore your favorite deities, and share it with your family and study groups. Hit that like button, subscribe, and leave a comment below! Har Har Mahadev, Jai Shri Krishna, and see you in the next one!',
          action: () => {
            if (window.cosmicApp) {
              window.cosmicApp.resetToApex();
            }
            if (this.isRecording) {
              setTimeout(() => {
                this.stopRecording();
              }, 4000);
            }
          }
        }
      ];
    }

    /* ========================================================================
       Playback & Director Controls
       ======================================================================== */
    togglePlay() {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    }

    play() {
      this.isPlaying = true;
      if (this.playIcon) this.playIcon.textContent = '⏸️';
      if (this.playLabel) this.playLabel.textContent = 'Pause Walkthrough';
      this.executeBeat(this.currentBeatIndex);
    }

    pause() {
      this.isPlaying = false;
      if (this.playIcon) this.playIcon.textContent = '▶️';
      if (this.playLabel) this.playLabel.textContent = 'Resume Walkthrough';
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    nextScene() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (this.currentBeatIndex < this.beats.length - 1) {
        this.currentBeatIndex++;
        if (this.isPlaying) {
          this.executeBeat(this.currentBeatIndex);
        } else {
          this.updateDisplay(this.currentBeatIndex);
          if (this.beats[this.currentBeatIndex].action) {
            this.beats[this.currentBeatIndex].action();
          }
        }
      } else {
        this.pause();
      }
    }

    restart() {
      this.pause();
      this.currentBeatIndex = 0;
      this.updateDisplay(0);
      if (this.beats[0].action) {
        this.beats[0].action();
      }
      this.play();
    }

    setVoiceMode(mode) {
      this.voiceMode = mode;
      if (mode === 'mute' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    }

    updateDisplay(index) {
      const beat = this.beats[index];
      if (!beat) return;

      if (this.chapterTag) this.chapterTag.textContent = beat.act;
      if (this.chapterTitle) this.chapterTitle.textContent = beat.chapter;
      if (this.lowerThirdSanskrit) this.lowerThirdSanskrit.textContent = beat.sanskrit;
      if (this.lowerThirdHeadline) this.lowerThirdHeadline.textContent = beat.headline;
      if (this.lowerThirdTag) this.lowerThirdTag.textContent = beat.tag;
      if (this.lowerThirdEmblem) this.lowerThirdEmblem.textContent = beat.emblem;
      if (this.subtitlesBanner) this.subtitlesBanner.innerHTML = `"${beat.speech}"`;

      // Progress bar fill
      if (this.progressFill) {
        const pct = ((index + 1) / this.beats.length) * 100;
        this.progressFill.style.width = `${pct}%`;
      }
    }

    executeBeat(index) {
      if (index >= this.beats.length) {
        this.pause();
        return;
      }

      this.currentBeatIndex = index;
      const beat = this.beats[index];
      this.updateDisplay(index);

      // Execute scene visual action
      try {
        if (typeof beat.action === 'function') {
          beat.action();
        }
      } catch (err) {
        console.warn('Beat action warning:', err);
      }

      // Handle speech or timer progression
      if (this.voiceMode === 'speech' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(beat.speech);
        utterance.rate = 1.02;
        utterance.pitch = 1.0;

        // Pick preferred English voice if available
        if (this.voices && this.voices.length > 0) {
          const preferredVoice = this.voices.find(v => 
            v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Samantha') || v.name.includes('George'))
          ) || this.voices.find(v => v.lang.startsWith('en'));
          if (preferredVoice) utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
          if (!this.isPlaying) return;
          // Pause briefly between beats for visual breathing room
          this.timerId = setTimeout(() => {
            this.nextScene();
          }, 850);
        };

        utterance.onerror = (e) => {
          console.warn('Speech error, falling back to timer:', e);
          this.scheduleTimerFallback(beat.speech);
        };

        window.speechSynthesis.speak(utterance);
      } else {
        this.scheduleTimerFallback(beat.speech);
      }
    }

    scheduleTimerFallback(text) {
      const wordCount = (text || '').split(/\s+/).length;
      // ~160 words per minute plus a 1.2s pause
      const durationMs = Math.max(3800, (wordCount * 365) + 1200);

      this.timerId = setTimeout(() => {
        if (this.isPlaying) {
          this.nextScene();
        }
      }, durationMs);
    }

    /* ========================================================================
       HD Screen & Tab Recording Engine
       ======================================================================== */
    async toggleRecording() {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        await this.startRecording();
      }
    }

    async startRecording() {
      try {
        // Request capture of current browser tab or window
        let stream = null;
        if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
          stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
              displaySurface: 'browser',
              frameRate: { ideal: 60, max: 60 }
            },
            audio: true
          });
        } else {
          // Fallback to canvas stream
          const canvas = document.getElementById('cosmic-canvas');
          if (canvas && canvas.captureStream) {
            stream = canvas.captureStream(60);
          }
        }

        if (!stream) {
          alert('Screen capture is not supported in this browser environment. You can still use the Play Walkthrough mode to present or record with external software (OBS / QuickTime).');
          return;
        }

        this.mediaStream = stream;
        this.recordedChunks = [];

        // Select optimal recording codec
        const mimeTypes = [
          'video/webm;codecs=vp9,opus',
          'video/webm;codecs=vp8,opus',
          'video/webm',
          'video/mp4'
        ];
        let chosenMime = '';
        for (const type of mimeTypes) {
          if (MediaRecorder.isTypeSupported(type)) {
            chosenMime = type;
            break;
          }
        }

        this.mediaRecorder = new MediaRecorder(stream, chosenMime ? { mimeType: chosenMime } : {});

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            this.recordedChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          this.finalizeRecording();
        };

        // If the user stops screen sharing from browser UI
        stream.getVideoTracks().forEach(track => {
          track.onended = () => {
            if (this.isRecording) {
              this.stopRecording();
            }
          };
        });

        this.mediaRecorder.start(1000); // 1-second chunks
        this.isRecording = true;

        // UI Updates
        if (this.recordBtn) {
          this.recordBtn.classList.add('recording');
          if (this.recordIcon) this.recordIcon.textContent = '⏹️';
          if (this.recordLabel) this.recordLabel.textContent = 'Stop Recording';
        }
        if (this.recIndicator) {
          this.recIndicator.style.display = 'inline-flex';
        }

        // Start timer
        this.recordingStartTime = Date.now();
        this.recordingTimerId = setInterval(() => {
          const elapsedSec = Math.floor((Date.now() - this.recordingStartTime) / 1000);
          const mins = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
          const secs = String(elapsedSec % 60).padStart(2, '0');
          if (this.recTimeCounter) {
            this.recTimeCounter.textContent = `REC ${mins}:${secs}`;
          }
        }, 1000);

        // If walkthrough is not playing, start it automatically
        if (!this.isPlaying) {
          this.restart();
        }
      } catch (err) {
        console.warn('Recording permission or launch cancelled:', err);
      }
    }

    stopRecording() {
      if (!this.isRecording) return;
      this.isRecording = false;

      if (this.recordingTimerId) {
        clearInterval(this.recordingTimerId);
        this.recordingTimerId = null;
      }

      if (this.recordBtn) {
        this.recordBtn.classList.remove('recording');
        if (this.recordIcon) this.recordIcon.textContent = '⏺️';
        if (this.recordLabel) this.recordLabel.textContent = 'Record Video';
      }
      if (this.recIndicator) {
        this.recIndicator.style.display = 'none';
      }

      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }

      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.mediaStream = null;
      }
    }

    finalizeRecording() {
      if (this.recordedChunks.length === 0) return;

      const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(blob);

      if (this.modalDownloadBtn) {
        this.modalDownloadBtn.href = videoUrl;
        this.modalDownloadBtn.download = `SanatanOrigin-YouTube-Explainer-${Date.now()}.webm`;
      }

      if (this.modalOverlay) {
        this.modalOverlay.style.display = 'flex';
      }
    }
  }

  // Initialize and mount to window once DOM is fully ready
  window.addEventListener('DOMContentLoaded', () => {
    window.videoStudio = new VideoStudioDirector();
  });

})();
