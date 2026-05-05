/* ----------------------------------------
   script.js — Portfolio interactivity
---------------------------------------- */

/* ========================================
   PROJECT CARD RENDERER
   Reads from projects.js → PROJECTS array
======================================== */

const LINK_DEFS = [
  {
    key: 'code',
    label: 'Code',
    svg: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
  },
  {
    key: 'android',
    label: 'Android',
    svg: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.523 15.341a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-9.046 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM1.854 8.5h20.292a.5.5 0 0 1 .496.562l-1.404 9.84A2 2 0 0 1 19.254 20H4.746a2 2 0 0 1-1.984-1.098L1.358 9.062A.5.5 0 0 1 1.854 8.5zM15.535 2.21l1.353-2.006a.25.25 0 0 0-.414-.28l-1.38 2.046A7.97 7.97 0 0 0 12 1.5c-1.06 0-2.07.205-2.994.57L7.626-.076a.25.25 0 0 0-.414.28l1.353 2.007A8.02 8.02 0 0 0 4 8h16a8.02 8.02 0 0 0-4.465-5.79z"/></svg>`
  },
  {
    key: 'ios',
    label: 'iOS',
    svg: `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`
  },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof PROJECTS === 'undefined' || !PROJECTS.length) return;

  grid.innerHTML = PROJECTS.map(p => {
    // Thumbnail: real image OR emoji + gradient background
    const thumbClass = p.thumbGradient ? `thumb-${p.thumbGradient}` : '';
    const thumbContent = p.image
      ? `<img src="${p.image}" alt="${escHtml(p.title)}" class="game-thumb-img" loading="lazy">`
      : `<div class="game-thumb-inner">${p.icon || '🎮'}</div>`;

    // Tags
    const tags = (p.tags || [])
      .map(t => `<span class="tag">${escHtml(t)}</span>`)
      .join('');

    // Links — only render entries that have a URL
    const linkHTML = LINK_DEFS
      .filter(def => p.links && p.links[def.key])
      .map(def => `<a href="${escHtml(p.links[def.key])}" class="game-link" target="_blank" rel="noopener noreferrer">
            ${def.svg} ${def.label}
          </a>`)
      .join('');

    return `
    <div class="game-card">
      <div class="game-thumb ${thumbClass}">
        ${thumbContent}
      </div>
      <div class="game-body">
        <div class="game-title-row">
          <div class="game-title">${escHtml(p.title)}</div>
          ${p.badge ? `<span class="game-badge">${escHtml(p.badge)}</span>` : ''}
        </div>
        ${tags ? `<div class="game-tags">${tags}</div>` : ''}
        <p class="game-desc">${escHtml(p.description)}</p>
        ${linkHTML ? `<div class="game-links">${linkHTML}</div>` : ''}
      </div>
    </div>`;
  }).join('');
}

// Prevent XSS from user-supplied project data
function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Render immediately (projects.js is loaded before script.js)
renderProjects();

/* ========================================
   DOM-DEPENDENT INTERACTIONS
======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile nav hamburger ---- */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Copy to clipboard on contact items ---- */
  document.querySelectorAll('.contact-item[data-copy]').forEach(item => {
    item.addEventListener('click', () => {
      const text = item.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        const hint = item.querySelector('.copy-hint');
        hint.textContent = 'Copied!';
        item.classList.add('copied');
        setTimeout(() => {
          hint.textContent = 'Copy';
          item.classList.remove('copied');
        }, 2000);
      });
    });
  });

  /* ---- Hire Me button smooth scroll ---- */
  const hireMeBtn = document.getElementById('hire-me-btn');
  if (hireMeBtn) {
    hireMeBtn.addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ---- Contact form submission ---- */
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (form && submitBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;

      // Validate each required field
      form.querySelectorAll('[data-required]').forEach(field => {
        const group = field.closest('.form-group');
        const isEmpty = field.value.trim() === '';
        const isInvalidEmail = field.type === 'email' && !isEmpty && !field.value.includes('@');

        group.classList.toggle('invalid', isEmpty || isInvalidEmail);
        if (isEmpty || isInvalidEmail) valid = false;
      });

      if (!valid) return;

      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;

      const data = {
        access_key: '4711b831-79b0-4daf-a99d-439010036cf4',
        name:    form.querySelector('#name').value.trim(),
        email:   form.querySelector('#email').value.trim(),
        subject: form.querySelector('#subject').value.trim(),
        message: form.querySelector('#message').value.trim(),
      };

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          if (res.success) {
            submitBtn.textContent = 'Message Sent ✓';
            submitBtn.classList.add('success');
            form.reset();
            setTimeout(() => {
              submitBtn.textContent = 'Send Message ✈';
              submitBtn.classList.remove('success');
              submitBtn.disabled = false;
            }, 3000);
          } else {
            submitBtn.textContent = 'Failed — Try Again';
            submitBtn.disabled = false;
          }
        })
        .catch(() => {
          submitBtn.textContent = 'Failed — Try Again';
          submitBtn.disabled = false;
        });
    });

    // Clear validation state on input
    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.closest('.form-group').classList.remove('invalid');
      });
    });
  }

});
