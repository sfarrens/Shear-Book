---
layout: chapter
title: Systematics & Calibration
nav_order: 5
description: Bias, photometric redshifts, and validation
---

Cosmic shear analyses must control numerous systematic effects to achieve sub-percent-level precision on cosmological parameters.

## Shear systematics

- **Multiplicative bias $$m$$**: Calibrated with image simulations; typically $$\lvert m\rvert \lesssim 0.01$$
- **Additive bias $$c$$**: Often from PSF residuals; can be modelled or marginalised
- **Selection biases**: Detection and selection can couple to PSF and create spurious shear
- **Blending**: Overlapping galaxies bias shape measurements; needs deblending or cuts

## Photometric redshifts

Galaxies in lensing surveys typically lack spectroscopic redshifts. Photometric redshift (photo-$$z$$) estimates are used for:

- Tomographic binning (split by redshift)
- Redshift distributions $$n(z)$$ for each bin

Photo-\(z\) errors dilute the signal and bias constraints. Methods include template fitting, machine learning, and clustering redshifts for calibration.

## Validation

Robust analyses require:

- Internal consistency checks (e.g. null tests)
- Cross-survey comparisons
- Simulation-based validation (e.g. with known input cosmology)
