---
layout: chapter
title: Shear Measurement
nav_order: 3
description: From galaxy images to unbiased shear estimates
---

Measuring cosmic shear requires estimating the weak distortion of millions of galaxy shapes from noisy, pixellised images. This is one of the most challenging aspects of weak lensing cosmology.

## The measurement problem

Galaxies are:

- Small (a few arcseconds)
- Faint (SNR often &lt; 20)
- Convolved by the point-spread function (PSF)
- Subject to pixel noise and blending

We need algorithms that recover an unbiased shear estimate <a href="#var-g-hat" class="var-link">$$\hat{g}$$</a> from these data, with well-characterised noise and systematics.

## Common methods

| Method | Principle | Pros | Cons |
|--------|-----------|------|------|
| **KSB** | Moment-based, PSF correction | Fast, interpretable | Sensitive to weight function |
| **Lensfit** | Model fitting, Bayesian | Good for low-SNR | Computationally expensive |
| **IM3SHAPE** | Model fitting | Flexible | Needs good prior |
| **Metacalibration** | Self-calibration | Minimal prior | Extra observations |
| **Fourier_Quad** | FFT-based | No model needed | Newer, less validated |

## Shear calibration

Most methods require calibration factors <a href="#var-m" class="var-link">$$m$$</a> (multiplicative bias) and <a href="#var-c" class="var-link">$$c$$</a> (additive bias):

<div class="equation-block">
$$
\hat{g} = (1 + m)\, g + c
$$
<p class="equation-key">Variables: <a href="#var-g-hat">ĝ</a> estimated shear · <a href="#var-g">g</a> true shear · <a href="#var-m">m</a> multiplicative bias · <a href="#var-c">c</a> additive bias</p>
</div>

Modern surveys (e.g. DES, KiDS, HSC, Euclid) perform extensive simulations to constrain <a href="#var-m" class="var-link">$$m$$</a> and <a href="#var-c" class="var-link">$$c$$</a> as a function of galaxy properties.

---

## Notation {#notation}

<dl class="notation-list">
  <dt id="var-g-hat">ĝ</dt>
  <dd>Estimated shear from galaxy shapes</dd>
  <dt id="var-g">g</dt>
  <dd>True shear</dd>
  <dt id="var-m">m</dt>
  <dd>Multiplicative bias; scales the shear estimate</dd>
  <dt id="var-c">c</dt>
  <dd>Additive bias; offset in shear estimate</dd>
</dl>
