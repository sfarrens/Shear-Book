---
layout: chapter
title: Weak Gravitational Lensing
nav_order: 2
description: The physics of deflection, shear, and convergence
---

In weak gravitational lensing, the deflection of light by intervening matter is small. The lens mapping can be linearised, and the effect on a source image is described by the **convergence** $$\kappa$$ and **shear** $$\gamma$$.

## The lens equation

The apparent position $$\boldsymbol{\theta}$$ of a source at true position $$\boldsymbol{\beta}$$ is:

$$
\boldsymbol{\beta} = \boldsymbol{\theta} - \boldsymbol{\alpha}(\boldsymbol{\theta})
$$

where $$\boldsymbol{\alpha}$$ is the deflection angle. The geometry is set by the angular diameter distances: $$D_{\mathrm{ol}}$$ (observer–lens), $$D_{\mathrm{os}}$$ (observer–source), and $$D_{\mathrm{ls}}$$ (lens–source). Adjust the distances below to see how the lens geometry changes.

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

$$
g = \frac{\gamma}{1 - \kappa}
$$

which is the quantity we measure from galaxy shapes in the weak regime ($$\kappa$$, $$\lvert\gamma\rvert \ll 1$$).

## Convergence and shear

The convergence $$\kappa$$ is related to the projected mass density; the shear $$\gamma$$ encodes the anisotropic stretching. In the flat-sky limit:

$$
\kappa(\boldsymbol{\theta}) = \int_0^{\chi_s} \mathrm{d}\chi \, W(\chi) \, \delta(\chi \boldsymbol{\theta}, \chi)
$$

where $$W$$ is the lensing kernel and $$\delta$$ is the matter overdensity. The shear is a spin-2 field derived from $$\kappa$$ via the mass-sheet degeneracy-breaking relation.

## Shear response

The figure below illustrates a simple shear–ellipticity relation: observed galaxy ellipticity responds linearly to applied shear in the weak regime. Real surveys must account for noise, blending, and intrinsic alignments.

<div class="chart-container">
  <canvas id="shearResponseChart"></canvas>
</div>
