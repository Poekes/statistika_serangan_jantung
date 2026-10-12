/**
 * PRESENTASI ANALISIS STATISTIKA DAN PROBABILITAS
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

  // Chart tracking cache
  const initializedCharts = {};

  // Build Overview Grid Cards
  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === currentIndex ? 'active' : ''}`;
      
      const titleElem = slide.querySelector('.slide-title');
      const titleText = titleElem ? titleElem.innerText : `Slide ${idx + 1}`;
      
      const tagElem = slide.querySelector('.slide-tag');
      const tagText = tagElem ? tagElem.innerText : `Bagian ${idx + 1}`;

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

    // Update UI elements
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
    progressFill.style.width = `${progressPercent}%`;

    slideCounter.innerHTML = `<span>${String(currentIndex + 1).padStart(2, '0')}</span> / ${String(totalSlides).padStart(2, '0')}`;

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === totalSlides - 1;

    // Update Hash without scrolling
    history.replaceState(null, null, `#slide-${currentIndex + 1}`);

    // Trigger Chart initialization if applicable
    triggerSlideChart(currentIndex);

    // Update active state in overview modal
    const cards = overviewGrid.querySelectorAll('.overview-card');
    cards.forEach((c, idx) => {
      c.classList.toggle('active', idx === currentIndex);
    });
  }

  // Trigger Slide Charts dynamically
  function triggerSlideChart(slideIndex) {
    if (slideIndex === 8 && !initializedCharts[8]) {
      // Slide 9: Age Distribution (Index 8)
      initAgeChart();
      initializedCharts[8] = true;
    } else if (slideIndex === 9 && !initializedCharts[9]) {
      // Slide 10: Ogive Curve (Index 9)
      initOgiveChart();
      initializedCharts[9] = true;
    } else if (slideIndex === 13 && !initializedCharts[13]) {
      // Slide 14: Relative Risk (Index 13)
      initRelativeRiskChart();
      initializedCharts[13] = true;
    } else if (slideIndex === 16 && !initializedCharts[16]) {
      // Slide 17: Normal Distribution & Z-Score (Index 16)
      initNormalDistributionChart();
      initializedCharts[16] = true;
    } else if (slideIndex === 17 && !initializedCharts[17]) {
      // Slide 18: CLT Simulation (Index 17)
      initCLTChart();
      initializedCharts[17] = true;
    }
  }

  // Chart 1: Distribusi Usia (Sturges Histogram)
  function initAgeChart() {
    const canvas = document.getElementById('chartAgeDist');
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
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            titleColor: '#22D3EE',
            bodyColor: '#F1F5F9',
            borderColor: 'rgba(6, 182, 212, 0.3)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          }
        }
      }
    });
  }

  // Chart 2: Kurva Ogive Usia
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
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
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
          legend: {
            position: 'top',
            labels: { color: '#CBD5E1', font: { size: 11 } }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8', font: { size: 10 } }
          }
        }
      }
    });
  }

  // Chart 3: Relative Risk
  function initRelativeRiskChart() {
    const canvas = document.getElementById('chartRelativeRisk');
    if (!canvas || typeof Chart === 'undefined') return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Fibrilasi Atrium', 'Ginjal Kronis', 'Diabetes', 'Riwayat Keluarga', 'Hipertensi', 'Perokok'],
        datasets: [{
          label: 'Relative Risk (RR)',
          data: [4.41, 4.19, 3.00, 1.18, 0.98, 0.97],
          backgroundColor: [
            'rgba(244, 63, 94, 0.75)',
            'rgba(244, 63, 94, 0.65)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(99, 102, 241, 0.65)',
            'rgba(6, 182, 212, 0.55)',
            'rgba(6, 182, 212, 0.55)'
          ],
          borderColor: [
            '#F43F5E',
            '#F43F5E',
            '#F59E0B',
            '#6366F1',
            '#06B6D4',
            '#06B6D4'
          ],
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8' }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#F1F5F9', font: { weight: 600 } }
          }
        }
      }
    });
  }

  // Chart 4: Normal Distribution SBP
  function initNormalDistributionChart() {
    const canvas = document.getElementById('chartNormalDist');
    if (!canvas || typeof Chart === 'undefined') return;

    const labels = [];
    const normalData = [];
    const mu = 129.88;
    const sigma = 17.68;

    for (let x = 70; x <= 190; x += 3) {
      labels.push(x.toString());
      const exponent = -Math.pow(x - mu, 2) / (2 * Math.pow(sigma, 2));
      const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      normalData.push(y);
    }

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Kepadatan Peluang PDF N(129.88, 17.68)',
          data: normalData,
          borderColor: '#22D3EE',
          backgroundColor: 'rgba(6, 182, 212, 0.15)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          borderWidth: 2.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#94A3B8', font: { size: 11 } }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Tekanan Darah Sistolik (mmHg)', color: '#94A3B8', font: { size: 11 } },
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8', font: { size: 9 } }
          },
          y: {
            display: false
          }
        }
      }
    });
  }

  // Chart 5: Central Limit Theorem
  function initCLTChart() {
    const canvas = document.getElementById('chartCLT');
    if (!canvas || typeof Chart === 'undefined') return;

    const labels = ['35', '38', '41', '44', '47', '50', '53', '56', '59'];
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'n = 5 (SE = 7.59)',
            data: [25, 65, 140, 230, 270, 220, 150, 70, 30],
            borderColor: '#F43F5E',
            tension: 0.4,
            borderWidth: 1.5,
            pointRadius: 2
          },
          {
            label: 'n = 30 (SE = 3.10)',
            data: [0, 15, 90, 310, 480, 320, 85, 10, 0],
            borderColor: '#F59E0B',
            tension: 0.4,
            borderWidth: 1.8,
            pointRadius: 2
          },
          {
            label: 'n = 100 (SE = 1.70)',
            data: [0, 0, 20, 380, 780, 390, 25, 0, 0],
            borderColor: '#06B6D4',
            tension: 0.4,
            borderWidth: 2.2,
            pointRadius: 2
          },
          {
            label: 'n = 500 (SE = 0.76)',
            data: [0, 0, 0, 410, 950, 420, 0, 0, 0],
            borderColor: '#10B981',
            tension: 0.4,
            borderWidth: 2.8,
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: '#CBD5E1', font: { size: 11 } }
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'Rata-rata Sampel Usia (Tahun)', color: '#94A3B8' },
            grid: { color: 'rgba(255, 255, 255, 0.04)' },
            ticks: { color: '#94A3B8' }
          },
          y: {
            display: false
          }
        }
      }
    });
  }

  // Open & Close Overview Modal
  function openOverview() {
    buildOverviewGrid();
    overviewModal.classList.add('open');
  }

  function closeOverview() {
    overviewModal.classList.remove('open');
  }

  // Fullscreen Toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Event Listeners
  btnNext.addEventListener('click', () => goToSlide(currentIndex + 1));
  btnPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
  btnOverview.addEventListener('click', openOverview);
  btnCloseOverview.addEventListener('click', closeOverview);
  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Keyboard Navigation
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

  // Touch Swipe for Mobile & Tablet
  let touchStartX = 0;
  let touchEndX = 0;

  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        goToSlide(currentIndex + 1); // Swipe left -> next
      } else {
        goToSlide(currentIndex - 1); // Swipe right -> prev
      }
    }
  }

  // Initial Hash check
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const slideNum = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= totalSlides) {
      goToSlide(slideNum - 1);
      return;
    }
  }

  // Start at slide 0
  goToSlide(0);
});
