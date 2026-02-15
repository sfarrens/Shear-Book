/**
 * Shear-Book: Main JavaScript
 * Theme toggle, Chart.js initialisation.
 */
(function () {
  'use strict';

  function initThemeToggle() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      const html = document.documentElement;
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('shear-book-theme', next);
    });
  }

  function initShearResponseChart() {
    const canvas = document.getElementById('shearResponseChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(176, 176, 176, 0.2)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDark ? '#b0b0b0' : '#495057';
    const accentColor = isDark ? 'rgba(79, 195, 247, 0.9)' : 'rgba(0, 122, 184, 0.9)';

    const ctx = canvas.getContext('2d');
    const g = [0, 0.01, 0.02, 0.03, 0.04, 0.05];
    const e = g.map(function (x) { return 0.98 * x; });

    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Observed ellipticity vs. true shear',
          data: g.map(function (gi, i) { return { x: gi, y: e[i] }; }),
          pointRadius: 6,
          pointBackgroundColor: accentColor,
          pointBorderColor: accentColor,
          showLine: true,
          borderColor: accentColor,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Shear–ellipticity relation (weak regime)',
            font: { size: 14 },
            color: textColor
          }
        },
        scales: {
          x: {
            title: { display: true, text: 'True shear g', color: textColor },
            min: 0,
            max: 0.06,
            grid: { color: gridColor },
            ticks: { color: textColor }
          },
          y: {
            title: { display: true, text: 'Observed ellipticity e', color: textColor },
            min: 0,
            max: 0.06,
            grid: { color: gridColor },
            ticks: { color: textColor }
          }
        }
      }
    });
  }

  function initLensEquationDiagram() {
    var svg = document.getElementById('lensEquationSvg');
    var content = document.getElementById('lensDiagramContent');
    var dolInput = document.getElementById('lensDol');
    var dosInput = document.getElementById('lensDos');
    var dolValueEl = document.getElementById('lensDolValue');
    var dosValueEl = document.getElementById('lensDosValue');
    var dlsValueEl = document.getElementById('lensDlsValue');
    if (!svg || !content || !dolInput || !dosInput) return;

    var x0 = 60;
    var x1 = 440;
    var yAxis = 160;
    var yTop = 50;

    function getAccentColor() {
      var style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--pst-color-primary').trim() || '#007ab8';
    }
    function getTextColor() {
      var style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--pst-color-on-background').trim() || '#212529';
    }
    function getMutedColor() {
      var style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--pst-color-on-surface').trim() || '#495057';
    }

    function render() {
      var dol = Math.max(10, Math.min(90, parseInt(dolInput.value, 10) || 35));
      var dos = Math.max(50, Math.min(150, parseInt(dosInput.value, 10) || 100));
      if (dol >= dos) dol = dos - 10;
      dolInput.value = dol;
      dosInput.value = dos;
      var dls = dos - dol;

      dolValueEl.textContent = dol;
      dosValueEl.textContent = dos;
      dlsValueEl.textContent = dls;

      var frac = dol / dos;
      var xLens = x0 + frac * (x1 - x0);
      var ySource = yAxis - 45;

      var accent = getAccentColor();
      var textColor = getTextColor();
      var muted = getMutedColor();

      var html = '';
      html += '<line x1="' + x0 + '" y1="' + yAxis + '" x2="' + x1 + '" y2="' + yAxis + '" stroke="' + muted + '" stroke-width="1" stroke-dasharray="4,2" opacity="0.7"/>';
      html += '<line x1="' + x1 + '" y1="' + ySource + '" x2="' + xLens + '" y2="' + yAxis + '" stroke="' + accent + '" stroke-width="2" marker-end="url(#arrowhead-lens)"/>';
      html += '<line x1="' + xLens + '" y1="' + yAxis + '" x2="' + x0 + '" y2="' + yAxis + '" stroke="' + accent + '" stroke-width="2" marker-end="url(#arrowhead-lens)"/>';
      html += '<circle cx="' + x0 + '" cy="' + yAxis + '" r="8" fill="' + accent + '" opacity="0.9"/>';
      html += '<circle cx="' + xLens + '" cy="' + yAxis + '" r="10" fill="' + accent + '"/>';
      html += '<circle cx="' + x1 + '" cy="' + ySource + '" r="8" fill="' + accent + '" opacity="0.9"/>';
      html += '<text x="' + x0 + '" y="' + (yAxis + 32) + '" text-anchor="middle" fill="' + textColor + '" font-size="13" font-weight="600">Observer</text>';
      html += '<text x="' + xLens + '" y="' + (yAxis + 32) + '" text-anchor="middle" fill="' + textColor + '" font-size="13" font-weight="600">Lens</text>';
      html += '<text x="' + x1 + '" y="' + (ySource + 28) + '" text-anchor="middle" fill="' + textColor + '" font-size="13" font-weight="600">Source</text>';
      html += '<text x="' + (x0 + xLens) / 2 + '" y="' + (yAxis - 12) + '" text-anchor="middle" fill="' + muted + '" font-size="11">D<tspan font-size="9" dy="4">ol</tspan></text>';
      html += '<text x="' + (xLens + x1) / 2 + '" y="' + ((yAxis + ySource) / 2 - 8) + '" text-anchor="middle" fill="' + muted + '" font-size="11">D<tspan font-size="9" dy="4">ls</tspan></text>';
      content.innerHTML = html;
    }

    function onInput() {
      var dos = parseInt(dosInput.value, 10) || 100;
      var dol = parseInt(dolInput.value, 10) || 35;
      if (dol >= dos) dolInput.value = Math.max(10, dos - 10);
      render();
    }

    dolInput.addEventListener('input', onInput);
    dosInput.addEventListener('input', onInput);
    render();
  }

  function init() {
    initThemeToggle();
    initShearResponseChart();
    initLensEquationDiagram();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
