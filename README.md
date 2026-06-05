# Xuemei Jiang — Personal Website

Personal website of Xuemei (Simone) Jiang, AI/ML Engineer based in Heidelberg, Germany. Live at **[simonejiang7.github.io](https://simonejiang7.github.io)**.

Built with [PRISM](https://github.com/xyjoey/PRISM) — a Next.js personal website template.

## Getting Started

### Prerequisites

- Node.js 22 or later ([download](https://nodejs.org/en/download))
- npm

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

Generates a static `out/` directory. Deployment to GitHub Pages is automated via GitHub Actions on every push to `main`.

## Updating Content

All content lives in the `content/` directory — no code changes needed.

| File | What it controls |
|------|-----------------|
| `content/config.toml` | Name, title, social links, navigation |
| `content/bio.md` | About page bio text |
| `content/skills.md` | Skills section on the About page |
| `content/about.toml` | About page layout and research interests |
| `content/publications.bib` | Publications (BibTeX format) |
| `content/cv.md` | CV page content |
