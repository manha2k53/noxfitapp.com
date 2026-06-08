// Shared theme toggle + mobile nav for all pages
(function() {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  if (toggle) toggle.textContent = saved === 'dark' ? '🌙' : '☀️';
  if (toggle) toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    toggle.textContent = next === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', next);
  });
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) navToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });
})();
