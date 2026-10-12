/**
 * PRESENTASI ANALISIS STATISTIKA & PROBABILITAS (19 POIN LENGKAP)
 * Engine Slide Interaktif Vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentIndex = 0;

  const progressFill = document.getElementById('progressFill');
  const slideCounter = document.getElementById('slideCounter');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnOverview = document.getElementById('btnOverview');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const overviewModal = document.getElementById('overviewModal');
  const btnCloseOverview = document.getElementById('btnCloseOverview');
  const overviewGrid = document.getElementById('overviewGrid');

  const initializedCharts = {};

  // Build Overview Grid Cards for the 19 Points
  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === currentIndex ? 'active' : ''}`;
      
      const titleElem = slide.querySelector('.slide-title');
      const titleText = titleElem ? titleElem.innerText : `Poin ${idx + 1}`;
      
      const tagElem = slide.querySelector('.slide-tag');
      const tagText = tagElem ? tagElem.innerText : `Poin ${idx + 1}`;

      card.innerHTML = `
        <div class="overview-card-num">${String(idx + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')} &bull; ${tagText}</div>
        <div class="overview-card-title">${titleText}</div>
      `;

      card.addEventListener('click', () => {
        goToSlide(idx);
        closeOverview();
      });

      overviewGrid.appendChild(card);
    });
  }

  // Go to Slide
  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;

    slides[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');

    // Update Progress Bar
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
    progressFill.style.width = `${progressPercent}%`;

    slideCounter.innerHTML = `<span>${String(currentIndex + 1).padStart(2, '0')}</span> / ${String(totalSlides).padStart(2, '0')}`;

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === totalSlides - 1;

    history.replaceState(null, null, `#slide-${currentIndex + 1}`);

    // Trigger Chart initialization
    triggerSlideChart(currentIndex);

    // Update overview active card
    const cards = overviewGrid.querySelectorAll('.overview-card');
    cards.forEach((c, idx) => {
      c.classList.toggle('active', idx === currentIndex);
    });
  }

  function triggerSlideChart(slideIndex) {
    if (slideIndex === 13 && !initializedCharts[13]) {
      // Slide 14: Statistik Deskriptif (Sturges Age Dist)
      initSturgesChart();
      initializedCharts[13] = true;
    } else if (slideIndex === 14 && !initializedCharts[14]) {
      // Slide 15: Rencana Visualisasi (Kurva Ogive)
      initOgiveChart();
      initializedCharts[14] = true;
    } else if (slideIndex === 15 && !initializedCharts[15]) {
      // Slide 16: Konsep Probabilitas (Relative Risk)
      initRRChart();
      initializedCharts[15] = true;
    }
  }

  // Chart: Sturges Histogram
  function initSturgesChart() {
    const canvas = document.getElementById('chartSturges');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['18-21', '22-25', '26-29', '30-33', '34-37', '38-41', '42-45', '46-49', '50-53', '54-57', '58-61', '62-65', '66-69', '70-73', '74-77', '78-79'],
        datasets: [{
          label: 'Frekuensi Pasien',
          data: [4210, 4890, 5100, 5230, 5400, 5600, 5950, 6120, 5800, 5520, 5310, 4980, 4610, 4200, 3920, 2743],
          backgroundColor: 'rgba(6, 182, 212, 0.45)',
          borderColor: '#06B6D4',
          borderWidth: 1.5,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#94A3B8', font: { size: 9 } } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#94A3B8', font: { size: 9 } } }
        }
      }
    });
  }

  // Chart: Ogive
  function initOgiveChart() {
    const canvas = document.getElementById('chartOgive');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['<18', '<22', '<26', '<30', '<34', '<38', '<42', '<46', '<50', '<54', '<58', '<62', '<66', '<70', '<74', '<78', '>=79'],
        datasets: [
          {
            label: 'Ogive Positif (Kurang Dari)',
            data: [0, 4210, 9100, 14200, 19430, 24830, 30430, 36380, 42500, 48300, 53820, 59130, 64110, 68720, 72920, 76840, 79583],
            borderColor: '#06B6D4',
            backgroundColor: 'rgba(6, 182, 212, 0.12)',
            fill: true,
            tension: 0.35,
            borderWidth: 2
          },
          {
            label: 'Ogive Negatif (Lebih Dari)',
            data: [79583, 75373, 70483, 65383, 60153, 54753, 49153, 43203, 37083, 31283, 25763, 20453, 15473, 10863, 6663, 2743, 0],
            borderColor: '#6366F1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            fill: true,
            tension: 0.35,
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { color: '#CBD5E1', font: { size: 10 } } }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#94A3B8', font: { size: 9 } } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#94A3B8', font: { size: 9 } } }
        }
      }
    });
  }

  // Chart: Relative Risk
  function initRRChart() {
    const canvas = document.getElementById('chartRR');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Fibrilasi Atrium', 'Ginjal Kronis', 'Diabetes', 'Riwayat Keluarga', 'Hipertensi', 'Perokok'],
        datasets: [{
          label: 'Relative Risk (RR)',
          data: [4.41, 4.19, 3.00, 1.18, 0.98, 0.97],
          backgroundColor: [
            'rgba(244, 63, 94, 0.8)',
            'rgba(244, 63, 94, 0.7)',
            'rgba(245, 158, 11, 0.75)',
            'rgba(99, 102, 241, 0.7)',
            'rgba(6, 182, 212, 0.6)',
            'rgba(6, 182, 212, 0.6)'
          ],
          borderColor: ['#F43F5E', '#F43F5E', '#F59E0B', '#6366F1', '#06B6D4', '#06B6D4'],
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.04)' }, ticks: { color: '#94A3B8' } },
          y: { grid: { display: false }, ticks: { color: '#F1F5F9', font: { weight: 600, size: 10 } } }
        }
      }
    });
  }

  function openOverview() {
    buildOverviewGrid();
    overviewModal.classList.add('open');
  }

  function closeOverview() {
    overviewModal.classList.remove('open');
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));
  btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
  btnOverview.addEventListener('click', openOverview);
  btnCloseOverview.addEventListener('click', closeOverview);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  window.addEventListener('keydown', (e) => {
    if (overviewModal.classList.contains('open')) {
      if (e.key === 'Escape') closeOverview();
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goToSlide(currentIndex + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'Backspace':
        e.preventDefault();
        goToSlide(currentIndex - 1);
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'o':
      case 'O':
        e.preventDefault();
        openOverview();
        break;
      case 'Escape':
        closeOverview();
        break;
    }
  });

  // Touch Swipe
  let touchStartX = 0;
  let touchEndX = 0;
  window.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goToSlide(currentIndex + 1);
      else goToSlide(currentIndex - 1);
    }
  }, { passive: true });

  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const slideNum = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      goToSlide(slideNum - 1);
      return;
    }
  }

  goToSlide(0);
});
