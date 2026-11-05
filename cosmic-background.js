/**
 * Cosmic Background Canvas Engine
 * Implements:
 * - 3D Twinkling Starfield with celestial depth
 * - Ethereal Nebulae in Vedic sacred colors (Saffron, Suvarna Gold, Celestial Indigo, Shiva Azure)
 * - Faint rotating Sacred Mandala / Sri Yantra celestial blueprint
 * - Floating Cosmic Prana / Stardust particles reacting softly to interaction
 */

class CosmicCanvasBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.stars = [];
    this.pranaParticles = [];
    this.nebulaPoints = [];
    this.ripples = [];
    this.mandalaAngle = 0;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.isRunning = true;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    // Create starfield
    const starCount = Math.min(260, Math.floor((this.width * this.height) / 5000));
    this.stars = [];
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 1.8 + 0.3,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        color: this.getRandomStarColor()
      });
    }

    // Create drifting Prana particles (cosmic golden dust)
    const pranaCount = 45;
    this.pranaParticles = [];
    for (let i = 0; i < pranaCount; i++) {
      this.pranaParticles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: Math.random() * 0.4 + 0.15, // Cascading downwards like cosmic grace
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.4 ? "40, 100%, 65%" : "25, 95%, 60%" // Golden / Saffron
      });
    }

    // Setup cosmic nebula centers
    this.nebulaPoints = [
      { x: this.width * 0.5, y: this.height * 0.2, color: "rgba(255, 160, 50, 0.07)", radius: 450 }, // Apex golden glow
      { x: this.width * 0.25, y: this.height * 0.6, color: "rgba(99, 102, 241, 0.06)", radius: 500 }, // Blue indigo nebula
      { x: this.width * 0.75, y: this.height * 0.7, color: "rgba(217, 70, 239, 0.05)", radius: 480 }, // Shakti magenta
      { x: this.width * 0.5, y: this.height * 0.85, color: "rgba(16, 185, 129, 0.04)", radius: 400 }  // Prakriti emerald
    ];

    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  getRandomStarColor() {
    const colors = [
      "#ffffff", // Diamond white
      "#fff7ed", // Warm pearl
      "#fef3c7", // Golden starlight
      "#e0f2fe", // Ice ether blue
      "#fed7aa"  // Saffron tinge
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  addRipple(x, y) {
    this.ripples.push({
      x: x || this.width / 2,
      y: y || this.height * 0.2,
      radius: 10,
      maxRadius: 350,
      alpha: 0.7,
      growth: 3.5
    });
  }

  setScrollParallax() {
    // Parallax disabled - steady ambient cosmic canvas
  }

  drawSacredMandala(centerX, centerY, radius) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(this.mandalaAngle);
    ctx.strokeStyle = "rgba(255, 215, 0, 0.045)"; // Sacred Suvarna gold watermark
    ctx.lineWidth = 1;

    // Outer concentric circles
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.arc(0, 0, radius * 0.82, 0, Math.PI * 2);
    ctx.arc(0, 0, radius * 0.55, 0, Math.PI * 2);
    ctx.stroke();

    // 12-petaled cosmic lotus wheel
    const petals = 12;
    for (let i = 0; i < petals; i++) {
      const angle = (i * Math.PI * 2) / petals;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      const x1 = Math.cos(angle) * radius * 0.82;
      const y1 = Math.sin(angle) * radius * 0.82;
      const x2 = Math.cos(angle + Math.PI / petals) * radius * 0.55;
      const y2 = Math.sin(angle + Math.PI / petals) * radius * 0.55;
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Intersecting Triangles (Sri Yantra motif)
    const triRadius = radius * 0.5;
    for (let t = 0; t < 2; t++) {
      const offset = (t * Math.PI) / 3;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const a = offset + (i * Math.PI * 2) / 3;
        const tx = Math.cos(a) * triRadius;
        const ty = Math.sin(a) * triRadius;
        if (i === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      }
      ctx.closePath();
      ctx.stroke();
    }

    ctx.restore();
  }

  animate() {
    if (!this.isRunning) return;

    // Deep cosmic background gradient
    const bgGrad = this.ctx.createRadialGradient(
      this.width * 0.5,
      this.height * 0.15,
      50,
      this.width * 0.5,
      this.height * 0.6,
      this.width
    );
    bgGrad.addColorStop(0, "#08061a"); // Subtle divine glow near top
    bgGrad.addColorStop(0.4, "#04030d");
    bgGrad.addColorStop(1, "#020106"); // Deepest cosmic void

    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Draw ethereal cosmic nebulae
    this.nebulaPoints.forEach(neb => {
      const grad = this.ctx.createRadialGradient(neb.x, neb.y, 10, neb.x, neb.y, neb.radius);
      grad.addColorStop(0, neb.color);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(neb.x - neb.radius, neb.y - neb.radius, neb.radius * 2, neb.radius * 2);
    });

    // Draw faint rotating Sacred Mandala centered near the apex origin
    this.mandalaAngle += 0.0004; // Very slow majestic cosmic rotation
    this.drawSacredMandala(
      this.width * 0.5,
      this.height * 0.35,
      Math.min(this.width, this.height) * 0.55
    );

    // Draw Steady Twinkling Stars (No parallax motion)
    this.stars.forEach(s => {
      s.twinklePhase += s.twinkleSpeed;
      const alpha = s.baseAlpha * (0.65 + 0.35 * Math.sin(s.twinklePhase));
      
      this.ctx.fillStyle = s.color;
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.globalAlpha = 1;

    // Draw Drifting Prana Dust (downward cascading cosmic energy)
    this.pranaParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.pulsePhase += p.pulseSpeed;

      // Wrap around screen
      if (p.y > this.height) {
        p.y = -10;
        p.x = Math.random() * this.width;
      }
      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;

      const pAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulsePhase));
      this.ctx.fillStyle = `hsla(${p.hue}, ${pAlpha})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Soft halo on larger dust
      if (p.radius > 1.8) {
        this.ctx.fillStyle = `hsla(${p.hue}, ${pAlpha * 0.25})`;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });

    // Draw Spandana / Cosmic Shockwave Ripples
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.radius += r.growth;
      r.alpha -= 0.012;

      if (r.alpha <= 0 || r.radius > r.maxRadius) {
        this.ripples.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.strokeStyle = `rgba(255, 215, 0, ${r.alpha})`;
      this.ctx.lineWidth = 1.8;
      this.ctx.shadowColor = "#FFD700";
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Global initialization helper
window.initCosmicCanvas = function(canvasId) {
  window.cosmicBg = new CosmicCanvasBackground(canvasId);
};
