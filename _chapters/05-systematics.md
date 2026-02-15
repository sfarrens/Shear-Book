---
layout: chapter
title: Systematics & Calibration
nav_order: 5
description: Bias, photometric redshifts, and validation
---

Cosmic shear analyses must control numerous systematic effects to achieve sub-percent-level precision on cosmological parameters.

## Shear systematics

- **Multiplicative bias** <a href="#var-m" class="var-link">$$m$$</a>: Calibrated with image simulations; typically $$\lvert m\rvert \lesssim 0.01$$
- **Additive bias** <a href="#var-c" class="var-link">$$c$$</a>: Often from PSF residuals; can be modelled or marginalised
- **Selection biases**: Detection and selection can couple to PSF and create spurious shear
- **Blending**: Overlapping galaxies bias shape measurements; needs deblending or cuts

## Photometric redshifts

Galaxies in lensing surveys typically lack spectroscopic redshifts. Photometric redshift (photo-<a href="#var-z" class="var-link">$$z$$</a>) estimates are used for:

- Tomographic binning (split by redshift)
- Redshift distributions <a href="#var-nz" class="var-link">$$n(z)$$</a> for each bin

Photo-$$z$$ errors dilute the signal and bias constraints. Methods include template fitting, machine learning, and clustering redshifts for calibration.

## Validation

Robust analyses require:

- Internal consistency checks (e.g. null tests)
- Cross-survey comparisons
- Simulation-based validation (e.g. with known input cosmology)

---

## Notation {#notation}

<dl class="notation-list">
  <dt id="var-m">m</dt>
  <dd>Multiplicative bias; scales the shear</dd>
  <dt id="var-c">c</dt>
  <dd>Additive bias; offset in shear</dd>
  <dt id="var-z">z</dt>
  <dd>Redshift</dd>
  <dt id="var-nz">n(z)</dt>
  <dd>Redshift distribution; number of galaxies per redshift bin</dd>
</dl>
