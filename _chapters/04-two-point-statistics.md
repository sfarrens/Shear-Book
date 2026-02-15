---
layout: chapter
title: Two-Point Statistics
nav_order: 4
description: Correlation functions and power spectra
---

Two-point statistics capture the Gaussian part of the cosmic shear signal. The two standard estimators are the **shear correlation functions** $$\xi_{\pm}$$ and the **cosmic shear power spectrum** $$C_\ell$$.

## Correlation functions

In real space, we measure:

$$
\xi_+(\theta) = \langle \gamma_t \gamma_t \rangle + \langle \gamma_\times \gamma_\times \rangle
$$

$$
\xi_-(\theta) = \langle \gamma_t \gamma_t \rangle - \langle \gamma_\times \gamma_\times \rangle
$$

where $$\gamma_t$$ and $$\gamma_\times$$ are the tangential and cross components of the shear with respect to the separation vector. The correlation functions can be expressed as integrals over the convergence power spectrum $$C_\kappa(\ell)$$.

## Power spectrum

In harmonic space:

$$
C_\kappa(\ell) = \int_0^{\chi_H} \frac{\mathrm{d}\chi}{\chi^2} \, W^2(\chi) \, P_\delta\left(\frac{\ell}{\chi}, \chi\right)
$$

where $$P_\delta$$ is the 3D matter power spectrum. The $$\xi_\pm$$ are Hankel transforms of $$C_\kappa$$.

## Practical considerations

- **Binning**: Correlation functions are typically binned in $$\theta$$; power spectra in $$\ell$$
- **Covariance**: Sample variance and shape noise dominate; covariance matrices are crucial for likelihood analyses
- **Scale cuts**: Large scales are affected by additive systematics; small scales by baryons and modelling uncertainty
