/**
 * Cosmic Audio Synthesizer (Web Audio API)
 * Procedural generation of the Primordial Omkara (136.1 Hz Cosmic Frequency)
 * With overtone harmonics, breathing lowpass filter, and temple chime resonances.
 * 100% client-side, zero external assets required.
 */

class CosmicOmSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.desiredPlaying = false;
    this.masterGain = null;
    this.filter = null;
    this.lfo = null;
    this.lfoGain = null;
    this.oscillators = [];
    this.analyser = null;
    this.chimeTimer = null;
    this.volume = 0.42;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // Master Gain initialized directly to audible volume
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

    // Analyser node for UI soundwave / visualizer
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 64;

    // Resonant Warm Filter (Breathing Cosmic filter)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // LFO to create the subtle "cosmic breath" swelling (8-second cycle)
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);

    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.filter.frequency);
    this.lfo.start();

    // Connect filter -> master gain -> analyser -> destination
    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);

    // State change listener ensures oscillators and volume are active whenever browser unpauses audio
    this.ctx.onstatechange = () => {
      if (this.ctx && this.ctx.state === "running" && this.desiredPlaying) {
        this._ensurePlaying();
      }
    };
  }

  start() {
    this.init();
    this.desiredPlaying = true;

    // Attempt immediate resume (succeeds instantly if MEI threshold or user gesture exists)
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }

    // Immediately start oscillators and ensure audible volume
    this._ensurePlaying();
  }

  _startOscillators() {
    this._ensurePlaying();
  }

  _ensurePlaying() {
    if (!this.desiredPlaying || !this.ctx) return;

    if (!this.isPlaying || this.oscillators.length === 0) {
      this.isPlaying = true;

      // Fundamental: 136.1 Hz (C#3 / OM frequency)
      const baseFreq = 136.1;
      // Harmonic series: Sub-octave (68.05), Fundamental (136.1), Fifth (204.15), Octave (272.2), Higher Fifth (408.3)
      const harmonicRatios = [
        { mult: 0.5, type: "sine", gain: 0.4 },
        { mult: 1.0, type: "sine", gain: 0.5 },
        { mult: 1.5, type: "triangle", gain: 0.25 }, // Pa (Fifth)
        { mult: 2.0, type: "sine", gain: 0.18 },
        { mult: 3.0, type: "triangle", gain: 0.08 }
      ];

      this.oscillators = [];

      harmonicRatios.forEach(h => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        
        osc.type = h.type;
        // Detune for rich analog chorus
        const detuneCents = (Math.random() - 0.5) * 4;
        osc.frequency.setValueAtTime(baseFreq * h.mult, this.ctx.currentTime);
        osc.detune.setValueAtTime(detuneCents, this.ctx.currentTime);

        oscGain.gain.setValueAtTime(h.gain, this.ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(this.filter);

        osc.start();
        this.oscillators.push({ osc, gain: oscGain });
      });

      // Start occasional celestial bell chime
      this.scheduleTempleChime();
    }

    // Always ensure master gain is audible at target volume
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      } catch (e) {
        try { this.masterGain.gain.value = this.volume; } catch (err) {}
      }
    }
  }

  stop() {
    this.desiredPlaying = false;
    if (!this.isPlaying || !this.ctx) return;
    this.isPlaying = false;

    if (this.chimeTimer) {
      clearTimeout(this.chimeTimer);
      this.chimeTimer = null;
    }

    // Smooth fade out
    try {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value || this.volume, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
    } catch (e) {}

    const dyingOscs = this.oscillators;
    this.oscillators = [];
    setTimeout(() => {
      dyingOscs.forEach(o => {
        try { o.osc.stop(); o.osc.disconnect(); } catch (e) {}
      });
    }, 500);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.isPlaying && this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  // Pure procedural bell chime (resembling meditative Ghanta / Singing Bowl)
  playChime(freq = 544.4) {
    if (!this.ctx || !this.isPlaying) return;

    const chimeGain = this.ctx.createGain();
    chimeGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    chimeGain.gain.linearRampToValueAtTime(0.12 * this.volume, this.ctx.currentTime + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 5.0);

    // Partial frequencies for brass singing bowl
    const partials = [1, 2.76, 5.4, 8.9];
    partials.forEach((p, idx) => {
      const pOsc = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();
      pOsc.type = "sine";
      pOsc.frequency.setValueAtTime(freq * p, this.ctx.currentTime);
      pGain.gain.setValueAtTime(1 / (idx + 1), this.ctx.currentTime);

      pOsc.connect(pGain);
      pGain.connect(chimeGain);
      pOsc.start();
      pOsc.stop(this.ctx.currentTime + 5.2);
    });

    chimeGain.connect(this.ctx.destination);
  }

  scheduleTempleChime() {
    if (!this.isPlaying) return;
    const nextInterval = 18000 + Math.random() * 12000; // Every 18-30 seconds
    this.chimeTimer = setTimeout(() => {
      if (this.isPlaying) {
        // Play gentle bell in harmonic with 136.1 (e.g., 272.2 or 544.4 Hz)
        const chimeFreqs = [272.2, 408.3, 544.4];
        const chosen = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];
        this.playChime(chosen);
        this.scheduleTempleChime();
      }
    }, nextInterval);
  }

  getVisualizerData() {
    if (!this.analyser || !this.isPlaying) return null;
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    return dataArray;
  }
}

// Global instance
window.cosmicAudio = new CosmicOmSynth();
