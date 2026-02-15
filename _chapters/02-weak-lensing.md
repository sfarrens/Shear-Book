---
layout: chapter
title: Weak Gravitational Lensing
nav_order: 2
description: The physics of deflection, shear, and convergence
---

In weak gravitational lensing, the deflection of light by intervening matter is small. The lens mapping can be linearised, and the effect on a source image is described by the **convergence** <a href="#var-kappa" class="var-link">$$\kappa$$</a> and **shear** <a href="#var-gamma" class="var-link">$$\gamma$$</a>.

## The lens equation

The apparent position <a href="#var-theta" class="var-link">$$\boldsymbol{\theta}$$</a> of a source at true position <a href="#var-beta" class="var-link">$$\boldsymbol{\beta}$$</a> is:

<div class="equation-block">
$$
\boldsymbol{\beta} = \boldsymbol{\theta} - \boldsymbol{\alpha}(\boldsymbol{\theta})
$$
<p class="equation-key">Variables: <a href="#var-beta">β</a> true position · <a href="#var-theta">θ</a> observed · <a href="#var-alpha">α</a> scaled deflection</p>
</div>

where <a href="#var-alpha" class="var-link">$$\boldsymbol{\alpha}(\boldsymbol{\theta})$$</a> is the scaled deflection angle. The physical deflection angle <a href="#var-alpha-hat" class="var-link">$$\hat{\boldsymbol{\alpha}}$$</a> is related to the scaled version by:

<div class="equation-block">
$$
\boldsymbol{\alpha}(\boldsymbol{\theta}) = \frac{D_{LS}}{D_S} \hat{\boldsymbol{\alpha}}(\boldsymbol{\theta})
$$
<p class="equation-key">Variables: <a href="#var-alpha">α</a> scaled deflection · <a href="#var-alpha-hat">α̂</a> physical deflection · <a href="#var-dls">D<sub>LS</sub></a> lens–source distance · <a href="#var-ds">D<sub>S</sub></a> observer–source distance</p>
</div>

The geometry is set by the angular diameter distances: <a href="#var-dl" class="var-link">$$D_L$$</a> (observer–lens), <a href="#var-ds" class="var-link">$$D_S$$</a> (observer–source), and <a href="#var-dls" class="var-link">$$D_{LS}$$</a> (lens–source). Adjust the distances below to see how the lens geometry changes.

<div class="interactive-figure lens-equation-figure">
  <div class="lens-diagram-container">
    <svg id="lensEquationSvg" viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowhead-lens" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" class="arrowhead-fill"/>
        </marker>
      </defs>
      <g id="lensDiagramContent"></g>
    </svg>
  </div>
  <div class="lens-controls">
    <label class="control-row">
      <span class="control-label"><span class="math-inline">D<sub>L</sub></span> (observer–lens)</span>
      <input type="range" id="lensDol" min="10" max="90" value="35" class="control-slider">
      <span class="control-value" id="lensDolValue">35</span> Mpc
    </label>
    <label class="control-row">
      <span class="control-label"><span class="math-inline">D<sub>S</sub></span> (observer–source)</span>
      <input type="range" id="lensDos" min="50" max="150" value="100" class="control-slider">
      <span class="control-value" id="lensDosValue">100</span> Mpc
    </label>
    <label class="control-row">
      <span class="control-label"><span class="math-inline">D<sub>LS</sub></span> (lens–source)</span>
      <span class="control-value" id="lensDlsValue">65</span> Mpc
      <span class="control-hint">(computed)</span>
    </label>
  </div>
</div>

In the weak regime, the Jacobian of this mapping defines the **reduced shear**:

<div class="equation-block">
$$
g = \frac{\gamma}{1 - \kappa}
$$
<p class="equation-key">Variables: <a href="#var-g">g</a> reduced shear · <a href="#var-gamma">γ</a> shear · <a href="#var-kappa">κ</a> convergence</p>
</div>

which is the quantity we measure from galaxy shapes in the weak regime (<a href="#var-kappa" class="var-link">$$\kappa$$</a>, <a href="#var-gamma" class="var-link">$$\lvert\gamma\rvert \ll 1$$</a>).

## The lensing Jacobian

The lens mapping can be described by the Jacobian matrix <a href="#var-A" class="var-link">$$\mathcal{A}$$</a>:

<div class="equation-block">
$$
\mathcal{A}_{ij} = \frac{\partial \beta_i}{\partial \theta_j} = \delta_{ij} - \frac{\partial \alpha_i}{\partial \theta_j}
$$
<p class="equation-key">Variables: <a href="#var-A">𝒜</a> Jacobian matrix · <a href="#var-beta">β</a> true position · <a href="#var-theta">θ</a> observed · <a href="#var-alpha">α</a> deflection</p>
</div>

In the weak regime, we can write:

<div class="equation-block">
$$
\mathcal{A} = \begin{pmatrix} 1 - \kappa - \gamma_1 & -\gamma_2 \\ -\gamma_2 & 1 - \kappa + \gamma_1 \end{pmatrix}
$$
<p class="equation-key">Variables: <a href="#var-kappa">κ</a> convergence · <a href="#var-gamma1">γ₁</a> shear component 1 · <a href="#var-gamma2">γ₂</a> shear component 2</p>
</div>

where the **convergence** <a href="#var-kappa" class="var-link">$$\kappa$$</a> is:

<div class="equation-block">
$$
\kappa = \frac{1}{2}\left(\frac{\partial \alpha_1}{\partial \theta_1} + \frac{\partial \alpha_2}{\partial \theta_2}\right)
$$
<p class="equation-key">Variables: <a href="#var-kappa">κ</a> convergence · <a href="#var-alpha">α</a> deflection components · <a href="#var-theta">θ</a> angular position</p>
</div>

and the **shear** components <a href="#var-gamma1" class="var-link">$$\gamma_1$$</a> and <a href="#var-gamma2" class="var-link">$$\gamma_2$$</a> are:

<div class="equation-block">
$$
\gamma_1 = \frac{1}{2}\left(\frac{\partial \alpha_1}{\partial \theta_1} - \frac{\partial \alpha_2}{\partial \theta_2}\right)
$$
$$
\gamma_2 = \frac{1}{2}\left(\frac{\partial \alpha_1}{\partial \theta_2} + \frac{\partial \alpha_2}{\partial \theta_1}\right)
$$
<p class="equation-key">Variables: <a href="#var-gamma1">γ₁</a>, <a href="#var-gamma2">γ₂</a> shear components</p>
</div>

The complex shear is often written as <a href="#var-gamma" class="var-link">$$\gamma = \gamma_1 + i\gamma_2$$</a>.

## Convergence and shear

The convergence <a href="#var-kappa" class="var-link">$$\kappa$$</a> is related to the projected surface mass density <a href="#var-Sigma" class="var-link">$$\Sigma$$</a>:

<div class="equation-block">
$$
\kappa(\boldsymbol{\theta}) = \frac{\Sigma(\boldsymbol{\theta})}{\Sigma_{\mathrm{crit}}}
$$
<p class="equation-key">Variables: <a href="#var-kappa">κ</a> convergence · <a href="#var-Sigma">Σ</a> surface mass density · <a href="#var-Sigma-crit">Σ<sub>crit</sub></a> critical surface density</p>
</div>

where the **critical surface density** is:

<div class="equation-block">
$$
\Sigma_{\mathrm{crit}} = \frac{c^2}{4\pi G} \frac{D_S}{D_L D_{LS}}
$$
<p class="equation-key">Variables: <a href="#var-Sigma-crit">Σ<sub>crit</sub></a> critical density · <a href="#var-ds">D<sub>S</sub></a> observer–source · <a href="#var-dl">D<sub>L</sub></a> observer–lens · <a href="#var-dls">D<sub>LS</sub></a> lens–source</p>
</div>

In cosmological applications, the convergence can be expressed as a line-of-sight integral:

<div class="equation-block">
$$
\kappa(\boldsymbol{\theta}) = \int_0^{\chi_S} \mathrm{d}\chi \, W(\chi) \, \delta(\chi \boldsymbol{\theta}, \chi)
$$
<p class="equation-key">Variables: <a href="#var-kappa">κ</a> convergence · <a href="#var-chi">χ</a> comoving distance · <a href="#var-chi-s">χ<sub>S</sub></a> to source · <a href="#var-W">W</a> lensing kernel · <a href="#var-delta">δ</a> matter overdensity</p>
</div>

where <a href="#var-W" class="var-link">$$W(\chi)$$</a> is the lensing efficiency (or lensing kernel) and <a href="#var-delta" class="var-link">$$\delta$$</a> is the matter overdensity. The shear <a href="#var-gamma" class="var-link">$$\gamma$$</a> is a spin-2 field that encodes the anisotropic stretching and can be derived from <a href="#var-kappa" class="var-link">$$\kappa$$</a> through derivatives.

## Shear response

The figure below illustrates a simple shear–ellipticity relation: observed galaxy ellipticity responds linearly to applied shear in the weak regime. Real surveys must account for noise, blending, and intrinsic alignments.

<div class="chart-container">
  <canvas id="shearResponseChart"></canvas>
</div>

---

## Notation {#notation}

<dl class="notation-list">
  <dt id="var-beta">β</dt>
  <dd>True angular position of the source (unlensed)</dd>
  <dt id="var-theta">θ</dt>
  <dd>Observed angular position on the sky</dd>
  <dt id="var-alpha">α</dt>
  <dd>Scaled deflection angle (dimensionless angular deflection)</dd>
  <dt id="var-alpha-hat">α̂</dt>
  <dd>Physical deflection angle</dd>
  <dt id="var-A">𝒜</dt>
  <dd>Lensing Jacobian matrix (distortion matrix)</dd>
  <dt id="var-kappa">κ</dt>
  <dd>Convergence; dimensionless surface mass density</dd>
  <dt id="var-gamma">γ</dt>
  <dd>Shear; complex shear γ = γ₁ + iγ₂</dd>
  <dt id="var-gamma1">γ₁</dt>
  <dd>First component of shear (+ elongation)</dd>
  <dt id="var-gamma2">γ₂</dt>
  <dd>Second component of shear (× elongation)</dd>
  <dt id="var-g">g</dt>
  <dd>Reduced shear; observable from galaxy shapes</dd>
  <dt id="var-dl">D<sub>L</sub></dt>
  <dd>Observer–lens angular diameter distance</dd>
  <dt id="var-ds">D<sub>S</sub></dt>
  <dd>Observer–source angular diameter distance</dd>
  <dt id="var-dls">D<sub>LS</sub></dt>
  <dd>Lens–source angular diameter distance</dd>
  <dt id="var-Sigma">Σ</dt>
  <dd>Surface mass density (projected mass per unit area)</dd>
  <dt id="var-Sigma-crit">Σ<sub>crit</sub></dt>
  <dd>Critical surface density for lensing</dd>
  <dt id="var-chi">χ</dt>
  <dd>Comoving distance</dd>
  <dt id="var-chi-s">χ<sub>S</sub></dt>
  <dd>Comoving distance to source</dd>
  <dt id="var-W">W</dt>
  <dd>Lensing kernel (lensing efficiency function)</dd>
  <dt id="var-delta">δ</dt>
  <dd>Matter overdensity δ = (ρ - ρ̄)/ρ̄</dd>
</dl>
