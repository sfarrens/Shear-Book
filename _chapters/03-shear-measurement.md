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

We need algorithms that recover an unbiased shear estimate $$\hat{g}$$ from these data, with well-characterised noise and systematics.

## Common methods

| Method | Principle | Pros | Cons |
|--------|-----------|------|------|
| **KSB** | Moment-based, PSF correction | Fast, interpretable | Sensitive to weight function |
| **Lensfit** | Model fitting, Bayesian | Good for low-SNR | Computationally expensive |
| **IM3SHAPE** | Model fitting | Flexible | Needs good prior |
| **Metacalibration** | Self-calibration | Minimal prior | Extra observations |
| **Fourier_Quad** | FFT-based | No model needed | Newer, less validated |

## Shear calibration

Most methods require calibration factors $$m$$ (multiplicative bias) and $$c$$ (additive bias):

$$
\hat{g} = (1 + m)\, g + c
$$

Modern surveys (e.g. DES, KiDS, HSC, Euclid) perform extensive simulations to constrain $$m$$ and $$c$$ as a function of galaxy properties.
