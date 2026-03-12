/* ============================================================
   JE Labs — Creative Interactions & Animations
   ============================================================ */

(function () {
  'use strict';

  // ── Scroll Reveal (Intersection Observer) ──────────────────
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
  }

  // ── Header scroll effect ──────────────────────────────────
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Mobile Nav Toggle ─────────────────────────────────────
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? 'Close' : 'Menu';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav on link click
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
        document.body.style.overflow = '';
      });
    });
  }

  // ── Cursor Glow Follow ────────────────────────────────────
  function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!glow.classList.contains('active')) glow.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
      glow.classList.remove('active');
    });

    function animate() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + 'px';
      glow.style.top = cy + 'px';
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ── Tilt / Magnetic Hover on Cards ────────────────────────
  function initTiltCards() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cards = document.querySelectorAll('.panel');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ── Wave Text Animation ───────────────────────────────────
  function initWaveText() {
    const targets = document.querySelectorAll('.section-break span, .hero-branding');

    targets.forEach((el) => {
      const text = el.textContent.trim();
      if (!text) return;

      el.innerHTML = '';
      el.classList.add('wave-text');

      [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.transitionDelay = `${i * 0.03}s`;
        el.appendChild(span);
      });

      // Add wave animation on hover
      el.addEventListener('mouseenter', () => {
        const spans = el.querySelectorAll('span');
        spans.forEach((s, i) => {
          s.style.transform = `translateY(${Math.sin(i * 0.5) * -12}px)`;
        });
      });

      el.addEventListener('mouseleave', () => {
        const spans = el.querySelectorAll('span');
        spans.forEach((s) => {
          s.style.transform = '';
        });
      });
    });
  }

  // ── Floating Gradient Orbs ────────────────────────────────
  function initGradientOrbs() {
    const shell = document.querySelector('.site-shell');
    if (!shell) return;

    for (let i = 1; i <= 3; i++) {
      const orb = document.createElement('div');
      orb.className = `gradient-orb gradient-orb--${i}`;
      shell.appendChild(orb);
    }
  }

  // ── Noise / Grain Overlay ─────────────────────────────────
  function initNoiseOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'noise-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  // ── Marquee Strip ─────────────────────────────────────────
  function initMarquee() {
    const heroSection = document.querySelector('.stats-strip');
    if (!heroSection) return;

    const marquee = document.createElement('div');
    marquee.className = 'marquee-strip';
    marquee.setAttribute('aria-hidden', 'true');

    const words = [
      'Strategy', 'Narrative', 'Distribution', 'Ecosystem',
      'Growth', 'Innovation', 'Momentum', 'Global',
      'Strategy', 'Narrative', 'Distribution', 'Ecosystem',
      'Growth', 'Innovation', 'Momentum', 'Global'
    ];

    const inner = document.createElement('div');
    inner.className = 'marquee-inner';
    words.forEach((word) => {
      const span = document.createElement('span');
      span.innerHTML = word + '<span class="dot"></span>';
      inner.appendChild(span);
    });

    marquee.appendChild(inner);
    heroSection.after(marquee);
  }

  // ── Stat Counter Animation ────────────────────────────────
  function initStatCounters() {
    const statValues = document.querySelectorAll('.stat-value');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statValues.forEach((el) => observer.observe(el));
  }

  function animateCounter(el) {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,.]+)(\+?)(.*)$/);
    if (!match) return;

    const numStr = match[1].replace(/,/g, '');
    const target = parseFloat(numStr);
    const suffix = (match[2] || '') + (match[3] || '');
    const hasDecimal = numStr.includes('.');
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;

      if (target >= 1000000) {
        el.textContent = (current / 1000000).toFixed(current < target ? 1 : 0).replace(/\.0$/, '') + 'M' + suffix;
      } else if (target >= 1000) {
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      } else {
        el.textContent = (hasDecimal ? current.toFixed(0) : Math.floor(current)) + suffix;
      }

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = text; // restore original text exactly
    }

    requestAnimationFrame(tick);
  }

  // ── Smooth Scroll for Anchor Links ────────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ── Parallax on Hero Backdrop ─────────────────────────────
  function initParallax() {
    const backdrop = document.querySelector('.hero-backdrop span');
    if (!backdrop || window.matchMedia('(pointer: coarse)').matches) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          backdrop.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0002})`;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Hover Ripple Effect on Buttons ────────────────────────
  function initButtonRipple() {
    document.querySelectorAll('.button').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          left: ${e.clientX - rect.left - size / 2}px;
          top: ${e.clientY - rect.top - size / 2}px;
          transform: scale(0);
          animation: ripple-expand 0.6s ease-out forwards;
          pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Inject ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-expand {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // ── Magnetic Effect on CTA Buttons ────────────────────────
  function initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.querySelectorAll('.button--secondary, .header-cta').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.03)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ── Initialize Everything ─────────────────────────────────
  function init() {
    initReveal();
    initHeaderScroll();
    initMobileNav();
    initCursorGlow();
    initTiltCards();
    initWaveText();
    initGradientOrbs();
    initNoiseOverlay();
    initMarquee();
    initStatCounters();
    initSmoothScroll();
    initParallax();
    initButtonRipple();
    initMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
