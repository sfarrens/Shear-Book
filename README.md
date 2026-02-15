# Shear-Book

An interactive Jekyll-based book on cosmic shear and weak gravitational lensing, built for GitHub Pages with Chart.js visualisations.

## Contents

The site is organised as a book with five chapters:

1. **Introduction to Cosmic Shear** — Motivation and context
2. **Weak Gravitational Lensing** — Deflection, shear, and convergence
3. **Shear Measurement** — From galaxy images to shear estimates
4. **Two-Point Statistics** — Correlation functions and power spectra
5. **Systematics & Calibration** — Bias, photo-z, and validation

## Local development

1. Install [Ruby](https://www.ruby-lang.org/) (2.7+) and [Bundler](https://bundler.io/).

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open [http://localhost:4000](http://localhost:4000).

## Hosting on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages** in the repository.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Click **Save**. GitHub will build and deploy the Jekyll site.

Your site will be available at `https://<username>.github.io/Shear-Book/` (or your custom domain).

## Tech stack

- **Jekyll** — Static site generator
- **Chart.js** — Interactive charts (e.g. shear–ellipticity relation)
- **MathJax** — LaTeX math rendering
- **GitHub Pages** — Hosting

## License

MIT — see [LICENSE](LICENSE).
