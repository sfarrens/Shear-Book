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

    // Canvas dimensions and layout
    var width = 500;
    var height = 320;
    var margin = 60;
    var x0 = margin; // Observer position (left)
    var x2 = width - margin; // Image/Source plane (right)
    var yBaseline = height / 2 + 30; // Optical axis

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
      var dl = Math.max(10, Math.min(90, parseInt(dolInput.value, 10) || 35));
      var ds = Math.max(50, Math.min(150, parseInt(dosInput.value, 10) || 100));
      if (dl >= ds) dl = ds - 10;
      dolInput.value = dl;
      dosInput.value = ds;
      var dls = ds - dl;

      dolValueEl.textContent = dl;
      dosValueEl.textContent = ds;
      dlsValueEl.textContent = dls;

      // Position lens based on D_L / D_S ratio
      var frac = dl / ds;
      var x1 = x0 + frac * (x2 - x0); // Lens position

      // Source position (off optical axis on the right)
      var sourceOffsetY = -65; // Above the optical axis
      var ySource = yBaseline + sourceOffsetY;

      // Image position (also on the right, but different offset)
      var imageOffsetY = -42; // Less offset than source
      var yImage = yBaseline + imageOffsetY;

      var accent = getAccentColor();
      var textColor = getTextColor();
      var muted = getMutedColor();
      var lightMuted = isDark() ? 'rgba(176, 176, 176, 0.3)' : 'rgba(0, 0, 0, 0.2)';

      function isDark() {
        return document.documentElement.getAttribute('data-theme') === 'dark';
      }

      // Calculate angles in arcseconds (for display)
      // Using small angle approximation: angle ≈ offset / distance
      // Convert to arcseconds (1 radian = 206265 arcsec)
      var theta = Math.abs(imageOffsetY) / (x2 - x0) * 206265 / 10; // scaled for reasonable values
      var beta = Math.abs(sourceOffsetY) / (x2 - x1) * 206265 / 10;
      var alpha = theta - beta * (x2 - x1) / (x2 - x0); // deflection angle
      
      // For display purposes, make them reasonable values
      theta = theta * 0.5;
      beta = beta * 0.5;
      alpha = Math.abs(theta - beta);

      var html = '';

      // Optical axis (dashed horizontal line)
      html += '<line x1="' + x0 + '" y1="' + yBaseline + '" x2="' + x2 + '" y2="' + yBaseline + '" stroke="' + muted + '" stroke-width="1" stroke-dasharray="4,2" opacity="0.5"/>';

      // Vertical lines at observer, lens, and image/source planes
      html += '<line x1="' + x0 + '" y1="' + (yBaseline - 90) + '" x2="' + x0 + '" y2="' + (yBaseline + 20) + '" stroke="' + lightMuted + '" stroke-width="1" stroke-dasharray="2,2"/>';
      html += '<line x1="' + x1 + '" y1="' + (yBaseline - 90) + '" x2="' + x1 + '" y2="' + (yBaseline + 20) + '" stroke="' + lightMuted + '" stroke-width="1" stroke-dasharray="2,2"/>';
      html += '<line x1="' + x2 + '" y1="' + (yBaseline - 90) + '" x2="' + x2 + '" y2="' + (yBaseline + 20) + '" stroke="' + lightMuted + '" stroke-width="1" stroke-dasharray="2,2"/>';

      // Light ray from source to lens (incoming)
      html += '<line x1="' + x2 + '" y1="' + ySource + '" x2="' + x1 + '" y2="' + yBaseline + '" stroke="' + accent + '" stroke-width="2.5" opacity="0.8"/>';
      
      // Light ray from lens to observer (deflected, with arrow)
      html += '<line x1="' + x1 + '" y1="' + yBaseline + '" x2="' + x0 + '" y2="' + yBaseline + '" stroke="' + accent + '" stroke-width="2.5" marker-end="url(#arrowhead-lens)"/>';

      // Line from observer to observed image position
      html += '<line x1="' + x0 + '" y1="' + yBaseline + '" x2="' + x2 + '" y2="' + yImage + '" stroke="' + accent + '" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>';

      // Undeflected ray (dashed) - from source straight to observer
      html += '<line x1="' + x2 + '" y1="' + ySource + '" x2="' + x0 + '" y2="' + yBaseline + '" stroke="' + muted + '" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>';

      // Deflection angle alpha (at the lens)
      var alphaArcRadius = 30;
      var alphaAngleDeg = Math.atan2(ySource - yBaseline, x2 - x1) * 180 / Math.PI;
      var alphaArcStartX = x1 + alphaArcRadius * Math.cos(180 * Math.PI / 180);
      var alphaArcStartY = yBaseline + alphaArcRadius * Math.sin(180 * Math.PI / 180);
      var alphaArcEndX = x1 + alphaArcRadius * Math.cos(alphaAngleDeg * Math.PI / 180);
      var alphaArcEndY = yBaseline + alphaArcRadius * Math.sin(alphaAngleDeg * Math.PI / 180);
      var largeArcFlag = Math.abs(alphaAngleDeg - 180) > 180 ? 1 : 0;
      html += '<path d="M ' + alphaArcStartX + ' ' + alphaArcStartY + ' A ' + alphaArcRadius + ' ' + alphaArcRadius + ' 0 0 0 ' + alphaArcEndX + ' ' + alphaArcEndY + '" stroke="' + muted + '" stroke-width="1.5" fill="none"/>';
      html += '<text x="' + (x1 - 45) + '" y="' + (yBaseline - 20) + '" fill="' + textColor + '" font-size="11" font-weight="600">α̂ = ' + alpha.toFixed(2) + '"</text>';

      // Beta angle (true source position angle from optical axis)
      var betaArcRadius = 40;
      var betaLineEndX = x2;
      var betaLineEndY = yBaseline + sourceOffsetY;
      html += '<line x1="' + x2 + '" y1="' + yBaseline + '" x2="' + (x2 + betaArcRadius) + '" y2="' + yBaseline + '" stroke="' + lightMuted + '" stroke-width="1"/>';
      html += '<line x1="' + x2 + '" y1="' + yBaseline + '" x2="' + betaLineEndX + '" y2="' + betaLineEndY + '" stroke="' + lightMuted + '" stroke-width="1"/>';
      html += '<text x="' + (x2 + 45) + '" y="' + (yBaseline - 15) + '" fill="' + textColor + '" font-size="11" font-weight="600">β = ' + beta.toFixed(2) + '"</text>';

      // Theta angle (observed image position angle from optical axis at observer)  
      var thetaArcRadius = 35;
      var thetaLineEndX = x2;
      var thetaLineEndY = yImage;
      html += '<line x1="' + x0 + '" y1="' + yBaseline + '" x2="' + (x0 + thetaArcRadius) + '" y2="' + yBaseline + '" stroke="' + lightMuted + '" stroke-width="1"/>';
      html += '<line x1="' + x0 + '" y1="' + yBaseline + '" x2="' + thetaLineEndX + '" y2="' + thetaLineEndY + '" stroke="' + lightMuted + '" stroke-width="1" opacity="0.5"/>';
      html += '<text x="' + (x0 + 50) + '" y="' + (yBaseline - 25) + '" fill="' + textColor + '" font-size="11" font-weight="600">θ = ' + theta.toFixed(2) + '"</text>';

      // Points: Observer, Lens, Image, Source
      // Observer point
      html += '<circle cx="' + x0 + '" cy="' + yBaseline + '" r="8" fill="' + accent + '" stroke="' + textColor + '" stroke-width="1.5"/>';
      html += '<text x="' + x0 + '" y="' + (yBaseline + 35) + '" text-anchor="middle" fill="' + textColor + '" font-size="12" font-weight="600">Observer</text>';

      // Lens (larger circle)
      html += '<circle cx="' + x1 + '" cy="' + yBaseline + '" r="10" fill="' + accent + '" stroke="' + textColor + '" stroke-width="1.5"/>';
      html += '<text x="' + x1 + '" y="' + (yBaseline + 35) + '" text-anchor="middle" fill="' + textColor + '" font-size="12" font-weight="600">Lens</text>';

      // Image point (at the image plane)
      html += '<circle cx="' + x2 + '" cy="' + yImage + '" r="7" fill="' + accent + '" stroke="' + textColor + '" stroke-width="1.5"/>';
      html += '<text x="' + (x2 + 35) + '" y="' + (yImage + 5) + '" fill="' + textColor + '" font-size="12" font-weight="600">Image</text>';

      // Source point (at the source plane)
      html += '<circle cx="' + x2 + '" cy="' + ySource + '" r="7" fill="' + accent + '" stroke="' + textColor + '" stroke-width="1.5"/>';
      html += '<text x="' + (x2 + 35) + '" y="' + (ySource + 5) + '" fill="' + textColor + '" font-size="12" font-weight="600">Source</text>';

      // Plane labels at bottom
      html += '<text x="' + x0 + '" y="' + (height - 10) + '" text-anchor="middle" fill="' + muted + '" font-size="11" opacity="0.7">Observer plane</text>';
      html += '<text x="' + x1 + '" y="' + (height - 10) + '" text-anchor="middle" fill="' + muted + '" font-size="11" opacity="0.7">Lens plane</text>';
      html += '<text x="' + x2 + '" y="' + (height - 10) + '" text-anchor="middle" fill="' + muted + '" font-size="11" opacity="0.7">Image/Source plane</text>';

      // Distance labels (at top)
      var labelY = 20;
      html += '<line x1="' + x0 + '" y1="' + labelY + '" x2="' + x1 + '" y2="' + labelY + '" stroke="' + muted + '" stroke-width="1" opacity="0.6" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>';
      html += '<text x="' + (x0 + x1) / 2 + '" y="' + (labelY - 5) + '" text-anchor="middle" fill="' + muted + '" font-size="11">D<tspan font-size="9" dy="3">L</tspan></text>';

      html += '<line x1="' + x1 + '" y1="' + (labelY + 12) + '" x2="' + x2 + '" y2="' + (labelY + 12) + '" stroke="' + muted + '" stroke-width="1" opacity="0.6" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>';
      html += '<text x="' + (x1 + x2) / 2 + '" y="' + (labelY + 7) + '" text-anchor="middle" fill="' + muted + '" font-size="11">D<tspan font-size="9" dy="3">LS</tspan></text>';

      html += '<line x1="' + x0 + '" y1="' + (labelY + 24) + '" x2="' + x2 + '" y2="' + (labelY + 24) + '" stroke="' + muted + '" stroke-width="1" opacity="0.6" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"/>';
      html += '<text x="' + (x0 + x2) / 2 + '" y="' + (labelY + 19) + '" text-anchor="middle" fill="' + muted + '" font-size="11">D<tspan font-size="9" dy="3">S</tspan></text>';

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

  function initVarPopup() {
    const popup = document.getElementById('var-popup');
    const symbolEl = document.getElementById('var-popup-symbol');
    const defEl = document.getElementById('var-popup-def');
    const eqLinkEl = document.getElementById('var-popup-eq-link');
    const closeBtn = popup && popup.querySelector('.var-popup-close');

    function showPopup(symbol, definition, eqId, eqPage) {
      if (!popup || !symbolEl || !defEl) return;
      symbolEl.innerHTML = symbol;
      defEl.textContent = definition;
      if (eqLinkEl) {
        if (eqId && (eqPage || document.getElementById(eqId))) {
          if (eqPage) {
            eqLinkEl.href = (eqPage.indexOf('/') === -1 ? '../' + eqPage + '/' : eqPage) + '#' + eqId;
          } else {
            eqLinkEl.href = '#' + eqId;
          }
          eqLinkEl.style.display = '';
        } else {
          eqLinkEl.style.display = 'none';
        }
      }
      popup.hidden = false;
      popup.classList.add('var-popup-visible');
    }

    function hidePopup() {
      if (popup) {
        popup.hidden = true;
        popup.classList.remove('var-popup-visible');
      }
    }

    document.addEventListener('click', function (e) {
      const link = e.target.closest('a[href^="#var-"]');
      if (link) {
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        const dt = document.getElementById(id);
        if (!dt) return;
        const dd = dt.nextElementSibling;
        const symbol = dt.innerHTML;
        const definition = dd ? dd.textContent.trim() : '';
        const eqId = dt.getAttribute('data-eq-id') || null;
        const eqPage = dt.getAttribute('data-eq-page') || null;
        showPopup(symbol, definition, eqId, eqPage);
        return;
      }
      if (popup && !popup.contains(e.target)) {
        hidePopup();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', hidePopup);
    }
    if (eqLinkEl) {
      eqLinkEl.addEventListener('click', function () {
        hidePopup();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && popup && !popup.hidden) {
        hidePopup();
      }
    });
  }

  function init() {
    initThemeToggle();
    initShearResponseChart();
    initLensEquationDiagram();
    initVarPopup();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();