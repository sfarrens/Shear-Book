---
layout: chapter
title: Two-Point Statistics
nav_order: 4
description: Correlation functions and power spectra
---

Two-point statistics capture the Gaussian part of the cosmic shear signal. The two standard estimators are the **shear correlation functions** <a href="#var-xi" class="var-link">$$\xi_{\pm}$$</a> and the **cosmic shear power spectrum** <a href="#var-C-ell" class="var-link">$$C_\ell$$</a>.

## Correlation functions

In real space, we measure:

<div class="equation-block">
$$
\xi_+(\theta) = \langle \gamma_t \gamma_t \rangle + \langle \gamma_\times \gamma_\times \rangle
$$

$$
\xi_-(\theta) = \langle \gamma_t \gamma_t \rangle - \langle \gamma_\times \gamma_\times \rangle
$$
<p class="equation-key">Variables: <a href="#var-xi">ξ₊, ξ₋</a> shear correlation functions · <a href="#var-theta">θ</a> angular separation · <a href="#var-gamma-t">γ<sub>t</sub></a> tangential shear · <a href="#var-gamma-x">γ<sub>×</sub></a> cross shear</p>
</div>

where <a href="#var-gamma-t" class="var-link">$$\gamma_t$$</a> and <a href="#var-gamma-x" class="var-link">$$\gamma_\times$$</a> are the tangential and cross components of the shear with respect to the separation vector. The correlation functions can be expressed as integrals over the convergence power spectrum <a href="#var-C-kappa" class="var-link">$$C_\kappa(\ell)$$</a>.

## Power spectrum

In harmonic space:

<div class="equation-block">
$$
C_\kappa(\ell) = \int_0^{\chi_H} \frac{\mathrm{d}\chi}{\chi^2} \, W^2(\chi) \, P_\delta\left(\frac{\ell}{\chi}, \chi\right)
$$
<p class="equation-key">Variables: <a href="#var-C-kappa">C<sub>κ</sub></a> convergence power spectrum · <a href="#var-ell">ℓ</a> multipole · <a href="#var-chi">χ</a> comoving distance · <a href="#var-chi-H">χ<sub>H</sub></a> horizon · <a href="#var-W">W</a> lensing kernel · <a href="#var-P-delta">P<sub>δ</sub></a> matter power spectrum</p>
</div>

where <a href="#var-P-delta" class="var-link">$$P_\delta$$</a> is the 3D matter power spectrum. The <a href="#var-xi" class="var-link">$$\xi_\pm$$</a> are Hankel transforms of <a href="#var-C-kappa" class="var-link">$$C_\kappa$$</a>.

## Practical considerations

- **Binning**: Correlation functions are typically binned in <a href="#var-theta" class="var-link">$$\theta$$</a>; power spectra in <a href="#var-ell" class="var-link">$$\ell$$</a>
- **Covariance**: Sample variance and shape noise dominate; covariance matrices are crucial for likelihood analyses
- **Scale cuts**: Large scales are affected by additive systematics; small scales by baryons and modelling uncertainty

---

## Notation {#notation}

<dl class="notation-list">
  <dt id="var-xi">ξ₊, ξ₋</dt>
  <dd>Shear correlation functions (tangential ± cross)</dd>
  <dt id="var-C-ell">C<sub>ℓ</sub></dt>
  <dd>Convergence/shear power spectrum</dd>
  <dt id="var-C-kappa">C<sub>κ</sub></dt>
  <dd>Convergence power spectrum</dd>
  <dt id="var-theta">θ</dt>
  <dd>Angular separation</dd>
  <dt id="var-ell">ℓ</dt>
  <dd>Multipole / angular wavenumber</dd>
  <dt id="var-gamma-t">γ<sub>t</sub></dt>
  <dd>Tangential shear component</dd>
  <dt id="var-gamma-x">γ<sub>×</sub></dt>
  <dd>Cross shear component</dd>
  <dt id="var-chi">χ</dt>
  <dd>Comoving distance</dd>
  <dt id="var-chi-H">χ<sub>H</sub></dt>
  <dd>Comoving horizon distance</dd>
  <dt id="var-W">W</dt>
  <dd>Lensing kernel</dd>
  <dt id="var-P-delta">P<sub>δ</sub></dt>
  <dd>3D matter power spectrum</dd>
</dl>
