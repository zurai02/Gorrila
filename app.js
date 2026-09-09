// Single deliberate motion: fill the population ruler once it enters view
document.addEventListener('DOMContentLoaded', () => {
  const fill = document.getElementById('rulerFill');
  if (!fill) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        fill.style.width = '23%';
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  obs.observe(fill);
});
