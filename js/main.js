/* GRANITAS KG — main.js
   Burger menu, IntersectionObserver scroll-reveal, FAQ accordion, smooth scroll */

(function () {
  'use strict';

  // ---------- Burger ----------
  const burger = document.querySelector('[data-burger]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (burger && mobileMenu) {
    const close = () => {
      burger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    const open = () => {
      burger.classList.add('is-open');
      mobileMenu.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-open')) close();
      else open();
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    window.addEventListener('resize', () => { if (window.innerWidth > 960) close(); });
  }

  // ---------- Scroll reveal — disabled, handled by effects.js (GSAP) ----------

  // ---------- FAQ accordion ----------
  document.querySelectorAll('[data-faq-q]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const open = item.classList.contains('is-open');
      // Single-open behavior
      document.querySelectorAll('.faq-item.is-open').forEach(i => {
        i.classList.remove('is-open');
        const q = i.querySelector('[data-faq-q]');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------- Smooth scroll for anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 0;
      const top = t.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Pause off-screen video to save perf ----------
  const vids = document.querySelectorAll('video[data-autoplay]');
  if ('IntersectionObserver' in window && vids.length) {
    const vo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const v = e.target;
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    }, { threshold: 0.25 });
    vids.forEach(v => vo.observe(v));
  }
})();
