function initTimer() {
  const DURATION = 10 * 60;
  const stored = localStorage.getItem('vigorati_timer');
  let remaining = stored !== null ? parseInt(stored, 10) : DURATION;

  const timerEl = document.getElementById('countdown');
  const headerTextEl = document.getElementById('header-urgency');

  function formatTime(secs) {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  }

  function tick() {
    if (remaining <= 0) {
      timerEl.textContent = '00:00';
      timerEl.style.color = '#f39c12';
      if (headerTextEl) headerTextEl.textContent = '¡Última oportunidad!';
      return;
    }
    timerEl.textContent = formatTime(remaining);
    remaining--;
    localStorage.setItem('vigorati_timer', remaining);
    setTimeout(tick, 1000);
  }

  tick();
}

document.addEventListener('DOMContentLoaded', initTimer);
