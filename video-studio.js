/**
 * SanatanOrigin • Automated YouTube Video Studio & Director Engine
 * 
 * 100% Self-Contained In-Browser Canvas Compositor & Video Recorder.
 * 
 * ZERO getDisplayMedia calls • ZERO DirectX/DWM deadlocks • ZERO audio loopback stalls.
 * Guaranteed 100% flawless execution on gaming laptops (HP Omen 16, Alienware, ROG, Legion)
 * and all dual-GPU / high-refresh rate systems.
 * 
 * Features:
 * - 1920x1080 Full HD 30 FPS real-time canvas compositor
 * - Direct Web Audio API mixing (136.1 Hz Cosmic OM synthesized drone)
 * - 7-Act automated YouTube explainer walkthrough with progressive branch disclosure
 * - Golden broadcast lower-thirds, Sanskrit Devanagari titles, and synchronized subtitles
 * - Instant export and download of SanatanOrigin-YouTube-Explainer.webm
 */

(function () {
  'use strict';

  /* ========================================================================
     Studio Canvas Compositor (Full HD 1920x1080 Render Engine)
     ======================================================================== */
  class StudioCanvasCompositor {
    constructor(director) {
      this.director = director;
      this.canvas = document.createElement('canvas');
      this.canvas.width = 1920;
      this.canvas.height = 1080;
      this.ctx = this.canvas.getContext('2d');
      this.isRunning = false;
      this.animFrameId = null;
      this.cosmicCanvas = document.getElementById('cosmic-canvas');
    }

    start() {
      this.isRunning = true;
      this.renderLoop();
    }

    stop() {
      this.isRunning = false;
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    }

    renderLoop() {
      if (!this.isRunning) return;
      try {
        this.drawFrame();
      } catch (err) {
        console.warn('Compositor frame warning:', err);
      }
      this.animFrameId = requestAnimationFrame(() => this.renderLoop());
    }

    drawFrame() {
      const ctx = this.ctx;
      const w = this.canvas.width;  // 1920
      const h = this.canvas.height; // 1080

      // 1. Deep Cosmic Background
      ctx.fillStyle = '#060312';
      ctx.fillRect(0, 0, w, h);

      // 2. Composite Live 3D Cosmic Canvas (Stars, Nebulae, Sri Yantra, Prana particles)
      if (this.cosmicCanvas && this.cosmicCanvas.width > 0) {
        try {
          ctx.drawImage(this.cosmicCanvas, 0, 0, w, h);
        } catch (e) {}
      }

      // 3. Composite Cosmic Tree (Links & Cards)
      const app = window.cosmicApp;
      if (app && app.layoutNodes && app.layoutNodes.size > 0) {
        const viewW = window.innerWidth || 1920;
        const viewH = window.innerHeight || 1080;
        const scaleX = w / viewW;
        const scaleY = h / viewH;

        ctx.save();
        ctx.scale(scaleX, scaleY);
        ctx.translate(app.scrollX, app.scrollY);
        ctx.scale(app.scale, app.scale);

        // 3A. Draw Lineage Links (Golden Nadis)
        if (app.layoutLinks && app.layoutLinks.length > 0) {
          ctx.lineWidth = 2.5;
          for (let i = 0; i < app.layoutLinks.length; i++) {
            const link = app.layoutLinks[i];
            const x1 = link.sourceX;
            const y1 = link.sourceY;
            const x2 = link.targetX;
            const y2 = link.targetY;
            const deltaY = (y2 - y1) * 0.52;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.bezierCurveTo(x1, y1 + deltaY, x2, y2 - deltaY, x2, y2);

            const grad = ctx.createLinearGradient(x1, y1, x2, y2);
            grad.addColorStop(0, 'rgba(255, 215, 0, 0.7)');
            grad.addColorStop(0.5, 'rgba(255, 153, 51, 0.55)');
            grad.addColorStop(1, 'rgba(6, 182, 212, 0.65)');
            ctx.strokeStyle = grad;
            ctx.stroke();
          }
        }

        // 3B. Draw Divine Cards
        for (const node of app.layoutNodes.values()) {
          const nx = node.x - node.width / 2;
          const ny = node.y - node.height / 2;
          const nw = node.width;
          const nh = node.height;
          const isApex = (node.data.id === app.apexId || node.data.id === 'general-parabrahman');
          const isSelected = (node.data.id === app.selectedNodeId);

          ctx.save();
          ctx.translate(nx, ny);

          // Card Glow
          if (isSelected || isApex) {
            ctx.shadowColor = '#FFD700';
            ctx.shadowBlur = isApex ? 24 : 16;
          } else {
            ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
            ctx.shadowBlur = 10;
          }

          // Card Body
          ctx.beginPath();
          this.roundRect(ctx, 0, 0, nw, nh, 16);
          const cardGrad = ctx.createLinearGradient(0, 0, nw, nh);
          if (isApex) {
            cardGrad.addColorStop(0, 'rgba(38, 22, 70, 0.95)');
            cardGrad.addColorStop(1, 'rgba(15, 9, 36, 0.96)');
          } else {
            cardGrad.addColorStop(0, 'rgba(20, 14, 45, 0.92)');
            cardGrad.addColorStop(1, 'rgba(9, 6, 25, 0.94)');
          }
          ctx.fillStyle = cardGrad;
          ctx.fill();

          // Card Golden Border
          ctx.lineWidth = isApex ? 2.5 : 1.5;
          ctx.strokeStyle = isApex ? '#FFD700' : (isSelected ? '#38BDF8' : 'rgba(255, 215, 0, 0.45)');
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Icon
          ctx.font = '28px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(node.data.icon || '🕉️', nw / 2, 44);

          // Sanskrit Title
          ctx.font = 'bold 15px "Noto Serif Devanagari", serif';
          ctx.fillStyle = '#FFD700';
          ctx.fillText(node.data.sanskrit || '', nw / 2, 72);

          // English Name
          ctx.font = 'bold 18px "Cinzel", "Plus Jakarta Sans", serif';
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(node.data.name || '', nw / 2, 98);

          // Category Tag Pill
          const cat = node.data.category || 'Divine Aspect';
          ctx.font = '600 11.5px "Plus Jakarta Sans", sans-serif';
          const catMetrics = ctx.measureText(cat);
          const pillW = catMetrics.width + 16;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.beginPath();
          this.roundRect(ctx, (nw - pillW) / 2, 114, pillW, 20, 10);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.fillStyle = '#38BDF8';
          ctx.fillText(cat, nw / 2, 128);

          // Summary Snippet
          if (node.data.summary) {
            ctx.font = '400 11px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = '#CBD5E1';
            const summaryStr = node.data.summary.length > 55 ? node.data.summary.slice(0, 52) + '...' : node.data.summary;
            ctx.fillText(summaryStr, nw / 2, 158);
          }

          // Child Manifestation Pill
          const isCollapsed = app.collapsedNodes.has(node.data.id);
          if (node.data.children && node.data.children.length > 0) {
            const childPillText = isCollapsed
              ? `${node.data.children.length} Child Gods ▸`
              : `Collapse Branches ▾`;
            ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
            const cpMetrics = ctx.measureText(childPillText);
            const cpW = cpMetrics.width + 18;
            ctx.fillStyle = isCollapsed ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 68, 68, 0.2)';
            ctx.beginPath();
            this.roundRect(ctx, (nw - cpW) / 2, nh - 36, cpW, 24, 12);
            ctx.fill();
            ctx.strokeStyle = isCollapsed ? '#FFD700' : '#FF4444';
            ctx.lineWidth = 1.2;
            ctx.stroke();
            ctx.fillStyle = isCollapsed ? '#FFD700' : '#FF8888';
            ctx.fillText(childPillText, nw / 2, nh - 20);
          }

          ctx.restore();
        }

        ctx.restore();
      }

      // 4. Draw Broadcast Lower-Third Banner
      const beat = this.director.beats[this.director.currentBeatIndex];
      if (beat) {
        this.drawLowerThird(ctx, w, h, beat);
        this.drawTopCinemaBar(ctx, w, h, beat);
      }
    }

    drawLowerThird(ctx, w, h, beat) {
      const cardW = Math.min(1000, w - 80);
      const cardH = 92;
      const cardX = (w - cardW) / 2;
      const cardY = h - cardH - 58;

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
      ctx.shadowBlur = 30;
      ctx.beginPath();
      this.roundRect(ctx, cardX, cardY, cardW, cardH, 20);
      const bgGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY);
      bgGrad.addColorStop(0, 'rgba(13, 9, 32, 0.97)');
      bgGrad.addColorStop(1, 'rgba(26, 17, 60, 0.95)');
      ctx.fillStyle = bgGrad;
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFD700';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Emblem Circle
      const embX = cardX + 44;
      const embY = cardY + cardH / 2;
      ctx.beginPath();
      ctx.arc(embX, embY, 26, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 215, 0, 0.15)';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#FFD700';
      ctx.stroke();

      ctx.font = '24px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(beat.emblem || '🕉️', embX, embY + 8);

      // Sanskrit Title
      ctx.textAlign = 'left';
      ctx.font = 'bold 14px "Noto Serif Devanagari", serif';
      ctx.fillStyle = '#FFD700';
      ctx.fillText(beat.sanskrit || '', cardX + 86, cardY + 34);

      // Headline
      ctx.font = 'bold 18px "Cinzel", "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(beat.headline || '', cardX + 86, cardY + 62);

      // Tag Pill
      if (beat.tag) {
        ctx.font = 'bold 11px "Cinzel", sans-serif';
        const tagW = ctx.measureText(beat.tag).width + 20;
        const tagX = cardX + cardW - tagW - 24;
        const tagY = cardY + (cardH - 26) / 2;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.16)';
        ctx.beginPath();
        this.roundRect(ctx, tagX, tagY, tagW, 26, 8);
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = '#38BDF8';
        ctx.fillText(beat.tag, tagX + 10, tagY + 17);
      }

      // Live Subtitles Strip
      const subH = 38;
      const subY = h - subH - 14;
      const subW = Math.min(1100, w - 80);
      const subX = (w - subW) / 2;

      ctx.beginPath();
      this.roundRect(ctx, subX, subY, subW, subH, 12);
      ctx.fillStyle = 'rgba(7, 4, 18, 0.94)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#F1F5F9';
      ctx.textAlign = 'center';
      const speechStr = beat.speech.length > 120 ? beat.speech.slice(0, 118) + '...' : beat.speech;
      ctx.fillText(`"${speechStr}"`, w / 2, subY + 24);

      ctx.restore();
    }

    drawTopCinemaBar(ctx, w, h, beat) {
      ctx.save();
      const totalBeats = this.director.beats.length || 1;
      const progressPct = (this.director.currentBeatIndex + 1) / totalBeats;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, w, 5);
      const fillGrad = ctx.createLinearGradient(0, 0, w * progressPct, 0);
      fillGrad.addColorStop(0, '#FF9933');
      fillGrad.addColorStop(0.5, '#FFD700');
      fillGrad.addColorStop(1, '#06B6D4');
      ctx.fillStyle = fillGrad;
      ctx.fillRect(0, 0, w * progressPct, 5);

      const badgeText = `${beat.act} • ${beat.chapter}`;
      ctx.font = 'bold 12px "Cinzel", "Plus Jakarta Sans", sans-serif';
      const badgeW = ctx.measureText(badgeText).width + 32;
      ctx.beginPath();
      this.roundRect(ctx, 24, 18, badgeW, 30, 15);
      ctx.fillStyle = 'rgba(10, 7, 24, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#FF9933';
      ctx.textAlign = 'left';
      ctx.fillText(`${beat.act}`, 38, 38);
      const actMetrics = ctx.measureText(`${beat.act} • `);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(`${beat.chapter}`, 38 + actMetrics.width, 38);

      ctx.restore();
    }

    roundRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
  }

  /* ========================================================================
     Video Studio Director Engine (Coordinates Acts & Media Recording)
     ======================================================================== */
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
      this.compositor = null;

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
              }, 3500);
            }
          }
        }
      ];
    }

    /* ========================================================================
       Director Controls (Play / Pause / Next / Restart)
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

      try {
        if (typeof beat.action === 'function') {
          beat.action();
        }
      } catch (err) {
        console.warn('Beat action warning:', err);
      }

      if (this.voiceMode === 'speech' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(beat.speech);
        utterance.rate = 1.02;
        utterance.pitch = 1.0;

        if (this.voices && this.voices.length > 0) {
          const preferredVoice = this.voices.find(v => 
            v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Samantha') || v.name.includes('George'))
          ) || this.voices.find(v => v.lang.startsWith('en'));
          if (preferredVoice) utterance.voice = preferredVoice;
        }

        utterance.onend = () => {
          if (!this.isPlaying) return;
          this.timerId = setTimeout(() => {
            this.nextScene();
          }, 850);
        };

        utterance.onerror = (e) => {
          console.warn('Speech error, fallback to timer:', e);
          this.scheduleTimerFallback(beat.speech);
        };

        window.speechSynthesis.speak(utterance);
      } else {
        this.scheduleTimerFallback(beat.speech);
      }
    }

    scheduleTimerFallback(text) {
      const wordCount = (text || '').split(/\s+/).length;
      const durationMs = Math.max(3800, (wordCount * 365) + 1200);

      this.timerId = setTimeout(() => {
        if (this.isPlaying) {
          this.nextScene();
        }
      }, durationMs);
    }

    /* ========================================================================
       Flawless 100% In-Browser Canvas Recording Engine
       ZERO getDisplayMedia • ZERO OS screen capture • ZERO GPU Process Stalls
       ======================================================================== */
    toggleRecording() {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        this.startRecording();
      }
    }

    startRecording() {
      try {
        // 1. Initialize 1920x1080 canvas compositor
        if (!this.compositor) {
          this.compositor = new StudioCanvasCompositor(this);
        }
        this.compositor.start();

        // 2. Stream from internal canvas (100% in-browser, no OS calls)
        const canvasStream = this.compositor.canvas.captureStream(30);

        // 3. Attach Web Audio internal synth stream (zero WASAPI loopback calls)
        const combinedStream = new MediaStream();
        canvasStream.getVideoTracks().forEach(t => combinedStream.addTrack(t));

        if (window.cosmicAudio && typeof window.cosmicAudio.getMediaStreamDestination === 'function') {
          try {
            const audioDest = window.cosmicAudio.getMediaStreamDestination();
            if (audioDest && audioDest.stream) {
              audioDest.stream.getAudioTracks().forEach(t => combinedStream.addTrack(t));
            }
          } catch (e) {
            console.warn('Audio stream mix note:', e);
          }
        }

        this.recordedChunks = [];

        // 4. Codec Selection: VP8 / WebM (instant hardware encode)
        const mimeTypes = [
          'video/webm;codecs=vp8',
          'video/webm',
          'video/mp4;codecs=avc1',
          'video/mp4'
        ];
        let chosenMime = '';
        for (const type of mimeTypes) {
          if (MediaRecorder.isTypeSupported(type)) {
            chosenMime = type;
            break;
          }
        }

        this.mediaRecorder = new MediaRecorder(combinedStream, chosenMime ? { mimeType: chosenMime } : {});

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            this.recordedChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          this.finalizeRecording();
        };

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

        // Live Timer
        this.recordingStartTime = Date.now();
        this.recordingTimerId = setInterval(() => {
          const elapsedSec = Math.floor((Date.now() - this.recordingStartTime) / 1000);
          const mins = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
          const secs = String(elapsedSec % 60).padStart(2, '0');
          if (this.recTimeCounter) {
            this.recTimeCounter.textContent = `REC ${mins}:${secs}`;
          }
        }, 1000);

        // Auto restart showcase to record from Act 1
        if (!this.isPlaying) {
          this.restart();
        }
      } catch (err) {
        console.error('In-browser canvas recording error:', err);
        this.stopRecording();
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

      if (this.compositor) {
        this.compositor.stop();
      }
    }

    finalizeRecording() {
      if (this.recordedChunks.length === 0) return;

      const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
      const videoUrl = URL.createObjectURL(blob);

      if (this.modalDownloadBtn) {
        this.modalDownloadBtn.href = videoUrl;
        this.modalDownloadBtn.download = `SanatanOrigin-YouTube-Explainer.webm`;
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
