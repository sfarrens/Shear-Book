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
<p class="equation-key">Variables: <a href="#var-beta">β</a> true position · <a href="#var-theta">θ</a> observed · <a href="#var-alpha">α</a> deflection</p>
</div>

where <a href="#var-alpha" class="var-link">$$\boldsymbol{\alpha}$$</a> is the deflection angle. The geometry is set by the angular diameter distances: <a href="#var-dol" class="var-link">$$D_{\mathrm{ol}}$$</a> (observer–lens), <a href="#var-dos" class="var-link">$$D_{\mathrm{os}}$$</a> (observer–source), and <a href="#var-dls" class="var-link">$$D_{\mathrm{ls}}$$</a> (lens–source). Adjust the distances below to see how the lens geometry changes.

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
      <span class="control-label"><span class="math-inline">D<sub>ol</sub></span> (observer–lens)</span>
      <input type="range" id="lensDol" min="10" max="90" value="35" class="control-slider">
      <span class="control-value" id="lensDolValue">35</span> Mpc
    </label>
    <label class="control-row">
      <span class="control-label"><span class="math-inline">D<sub>os</sub></span> (observer–source)</span>
      <input type="range" id="lensDos" min="50" max="150" value="100" class="control-slider">
      <span class="control-value" id="lensDosValue">100</span> Mpc
    </label>
    <label class="control-row">
      <span class="control-label"><span class="math-inline">D<sub>ls</sub></span> (lens–source)</span>
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

## Convergence and shear

The convergence <a href="#var-kappa" class="var-link">$$\kappa$$</a> is related to the projected mass density; the shear <a href="#var-gamma" class="var-link">$$\gamma$$</a> encodes the anisotropic stretching. In the flat-sky limit:

<div class="equation-block">
$$
\kappa(\boldsymbol{\theta}) = \int_0^{\chi_s} \mathrm{d}\chi \, W(\chi) \, \delta(\chi \boldsymbol{\theta}, \chi)
$$
<p class="equation-key">Variables: <a href="#var-kappa">κ</a> convergence · <a href="#var-theta">θ</a> position · <a href="#var-chi">χ</a> comoving distance · <a href="#var-chi-s">χ<sub>s</sub></a> to source · <a href="#var-W">W</a> lensing kernel · <a href="#var-delta">δ</a> matter overdensity</p>
</div>

where <a href="#var-W" class="var-link">$$W$$</a> is the lensing kernel and <a href="#var-delta" class="var-link">$$\delta$$</a> is the matter overdensity. The shear is a spin-2 field derived from <a href="#var-kappa" class="var-link">$$\kappa$$</a> via the mass-sheet degeneracy-breaking relation.

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
  <dd>Deflection angle at the lens plane</dd>
  <dt id="var-kappa">κ</dt>
  <dd>Convergence; projected mass density, isotropic magnification</dd>
  <dt id="var-gamma">γ</dt>
  <dd>Shear; anisotropic stretching of galaxy images</dd>
  <dt id="var-g">g</dt>
  <dd>Reduced shear; observable from galaxy shapes</dd>
  <dt id="var-dol">D<sub>ol</sub></dt>
  <dd>Observer–lens angular diameter distance</dd>
  <dt id="var-dos">D<sub>os</sub></dt>
  <dd>Observer–source angular diameter distance</dd>
  <dt id="var-dls">D<sub>ls</sub></dt>
  <dd>Lens–source angular diameter distance</dd>
  <dt id="var-chi">χ</dt>
  <dd>Comoving distance</dd>
  <dt id="var-chi-s">χ<sub>s</sub></dt>
  <dd>Comoving distance to source</dd>
  <dt id="var-W">W</dt>
  <dd>Lensing kernel; weight function along line of sight</dd>
  <dt id="var-delta">δ</dt>
  <dd>Matter overdensity</dd>
</dl>
