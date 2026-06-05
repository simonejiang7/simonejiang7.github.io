# Profile Personalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all placeholder content in the PRISM template with Xuemei (Simone) Jiang's real profile data.

**Architecture:** Pure content-file changes — no code modifications. All changes are in `content/` (TOML, Markdown, BibTeX). The dev server hot-reloads content, so changes can be verified visually by running `npm run dev`.

**Tech Stack:** Next.js 15, TOML (smol-toml), BibTeX, Markdown

---

## Files Changed

| File | Action |
|------|--------|
| `content/config.toml` | Modify — name, author, social links, navigation |
| `content/about.toml` | Modify — research interests, sections |
| `content/skills.md` | Create — skills grouped by category |
| `content/publications.bib` | Modify — replace with 2 real IGARSS papers |
| `content/publications.toml` | Modify — update description |
| `content/cv.md` | Modify — replace with real CV content |
| `content/projects.toml` | Create — empty stub |
| `content/blogs.toml` | Create — empty stub |

---

## Task 1: Update `content/config.toml`

**Files:**
- Modify: `content/config.toml`

- [ ] **Step 1: Replace the file content**

Replace the entire contents of `content/config.toml` with:

```toml
[site]
title = "Xuemei Jiang"
description = "AI/ML Engineer based in Heidelberg, Germany"
favicon = "/favicon.svg"
last_updated = "June 5, 2026"

[author]
name = "Xuemei Jiang"
title = "AI/ML Engineer"
institution = ""
avatar = "/bio.jpg"

[social]
email = "xuemei.jg@gmail.com"
location = "Heidelberg, Germany"
github = "https://github.com/simonejiang7"
linkedin = "https://linkedin.com/in/xuemeijiang"

[features]
enable_likes = true
enable_one_page_mode = false

[i18n]
enabled = true
locales = ["zh", "en"]
default_locale = "en"
mode = "auto"
fixed_locale = "en"
persist = true
switcher = true

[i18n.labels]
zh = "中文"
en = "English"

[[navigation]]
title = "About"
type = "page"
target = "about"
href = "/"

[[navigation]]
title = "Publications"
type = "page"
target = "publications"
href = "/publications"

[[navigation]]
title = "CV"
type = "page"
target = "cv"
href = "/cv"
```

- [ ] **Step 2: Commit**

```bash
git add content/config.toml
git commit -m "content: update site config with real author info and trim navigation"
```

---

## Task 2: Update `content/about.toml` and create `content/skills.md`

**Files:**
- Modify: `content/about.toml`
- Create: `content/skills.md`

- [ ] **Step 1: Replace `content/about.toml`**

```toml
type = "about"
title = "About"

[profile]
research_interests = [
  "Computer Vision",
  "Active Learning",
  "Representation Learning",
  "Remote Sensing"
]

[[sections]]
id = "about"
type = "markdown"
source = "bio.md"
title = "About"

[[sections]]
id = "skills"
type = "markdown"
source = "skills.md"
title = "Skills"
```

- [ ] **Step 2: Create `content/skills.md`**

```markdown
**Languages:** Python, TypeScript

**ML / CV:** PyTorch, NumPy, Computer Vision, Distributed Training, Embedding Models, VLMs

**Retrieval & Search:** Vector Search, Milvus, RAG, Semantic Search

**Infrastructure:** Docker, FastAPI, DVC, W&B, MLflow, AWS, Azure ML, Git, Linux

**LLM & Agents:** LiteLLM, vLLM, Multi-agent Systems
```

- [ ] **Step 3: Commit**

```bash
git add content/about.toml content/skills.md
git commit -m "content: update about page sections and add skills"
```

---

## Task 3: Update publications

**Files:**
- Modify: `content/publications.bib`
- Modify: `content/publications.toml`

- [ ] **Step 1: Replace `content/publications.bib`**

```bibtex
@inproceedings{jiang2024lessmore,
  selected={true},
  title = {Less is More: Active Self-Supervised Learning in Remote Sensing},
  author = {Xuemei Jiang* and Linus Scheibenreif and Damian Borth},
  booktitle = {IGARSS 2024 - 2024 IEEE International Geoscience and Remote Sensing Symposium},
  year = {2024},
  month = jul,
  doi = {10.1109/IGARSS53475.2024.10640981},
  url = {https://ieeexplore.ieee.org/abstract/document/10640981},
  description = {Active learning strategy for self-supervised learning in remote sensing, accepted as oral presentation at IGARSS 2024.},
  keywords = {Remote Sensing, Active Learning, Self-Supervised Learning, Computer Vision}
}

@inproceedings{grau2023ssl,
  title = {Self Supervised Learning in Remote Sensing: Quantifying Approaches Effectiveness Across Downstream Tasks},
  author = {Marc Grau# and Anton Lontke# and Xuemei Jiang# and Linus Scheibenreif},
  booktitle = {IGARSS 2023 - 2023 IEEE International Geoscience and Remote Sensing Symposium},
  year = {2023},
  month = jul,
  doi = {10.1109/IGARSS52108.2023.10282926},
  url = {https://ieeexplore.ieee.org/abstract/document/10282926},
  description = {Comprehensive evaluation of self-supervised learning approaches across downstream tasks in remote sensing, accepted as oral presentation at IGARSS 2023.},
  keywords = {Remote Sensing, Self-Supervised Learning, Computer Vision, Benchmark}
}
```

- [ ] **Step 2: Update `content/publications.toml`**

```toml
type = "publication"
title = "Publications"
description = "My research publications."
source = "publications.bib"
```

- [ ] **Step 3: Commit**

```bash
git add content/publications.bib content/publications.toml
git commit -m "content: replace publications with real IGARSS 2023 and 2024 papers"
```

---

## Task 4: Update `content/cv.md`

**Files:**
- Modify: `content/cv.md`

- [ ] **Step 1: Replace `content/cv.md`**

```markdown
## Education

**University of St.Gallen**, MSc Computer Science, *2021–2025*
- Thesis (5.75/6.00): Active Learning for Self-Supervised Learning in Remote Sensing
- Courses: Deep Learning, Advanced Software and Systems Engineering, Advanced Databases

**University of St.Gallen**, MA Banking and Finance, *2018–2021*
- Courses: Financial Markets, Financial Institutions, Quantitative Methods

**Peking University**, BA Economics, *2013–2017*
- Courses: Microeconomics, Macroeconomics, Econometrics, Linear Algebra, Statistics

## Experience

**AI Developer** — [Everest Systems](https://everest-systems.com/), Heidelberg, Germany
*Dec 2025 – May 2026*
- Built an automated pipeline for a coding agent that generates web applications, covering API discovery, test generation, and execution to catch runtime errors
- Contributed to architectural design of a spreadsheet AI agent; gained hands-on exposure to multi-agent system design patterns and agentic workflows
- Built a dashboard using cloud provider APIs to track AI token usage and costs across multiple operational levels

**Machine Learning Engineer** — [WIPO (UN)](https://www.wipo.int), Geneva, Switzerland
*Aug 2024 – Nov 2025*
- Trained image embedding models on 22M industrial design images using data-parallel distributed training across multiple GPUs, improving top-5 accuracy by 10% and reducing training time by 30%
- Designed a multi-view retrieval system with feature-level and image-level fusion strategies, achieving 3.5% improvement in recall over a DINOv2 ViT baseline
- Built evaluation pipelines for embedding models and retrieval systems including metric definition, latency tracking, and benchmarking
- Built a Dockerized image quality assessment service using FastAPI + Streamlit for patent examiners

**Machine Learning Engineer Intern** — [WIPO (UN)](https://www.wipo.int), Geneva, Switzerland
*Feb 2024 – Aug 2024*
- Benchmarked and deployed vector search across a 10M+ document corpus using Milvus, achieving 150ms query response time
- Built a golden QA dataset of 3,000+ labeled examples from WIPO patent documents for RAG evaluation
- Generated synthetic instruction datasets to support LLM fine-tuning

**Machine Learning Engineer Intern** — [VIUN](https://www.viun.tech/), Zurich, Switzerland
*Oct 2023 – Feb 2024*
- Built a full ML pipeline for visual defect detection covering data processing, training, experiment tracking, and deployment on Azure ML
- Designed a proof-of-concept active learning automation lifecycle for continuous model improvement

## Skills

**Languages:** Python, TypeScript

**ML / CV:** PyTorch, NumPy, Computer Vision, Distributed Training, Embedding Models, VLMs

**Retrieval & Search:** Vector Search, Milvus, RAG, Semantic Search

**Infrastructure:** Docker, FastAPI, DVC, W&B, MLflow, AWS, Azure ML, Git, Linux

**LLM & Agents:** LiteLLM, vLLM, Multi-agent Systems

## Languages

- **English:** Fluent
- **Chinese:** Native
- **Korean:** Bilingual
- **German:** Basic
```

- [ ] **Step 2: Commit**

```bash
git add content/cv.md
git commit -m "content: replace CV with real education, experience, and skills"
```

---

## Task 5: Create stub files for Projects and Blogs

**Files:**
- Create: `content/projects.toml`
- Create: `content/blogs.toml`

- [ ] **Step 1: Create `content/projects.toml`**

```toml
# Placeholder — not linked in navigation yet
```

- [ ] **Step 2: Create `content/blogs.toml`**

```toml
# Placeholder — not linked in navigation yet
```

- [ ] **Step 3: Commit**

```bash
git add content/projects.toml content/blogs.toml
git commit -m "content: add stub files for future Projects and Blogs pages"
```

---

## Task 6: Visual verification

**Files:** None — read-only verification step

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Expected: server starts on `http://localhost:3000`

- [ ] **Step 2: Check the About page (`/`)**

Verify:
- Name shows "Xuemei Jiang" and title "AI/ML Engineer" in the sidebar
- Research interests show: Computer Vision, Active Learning, Representation Learning, Remote Sensing
- Bio section is present (placeholder text unchanged)
- Skills section is present with all 5 categories
- No News or Selected Publications section visible

- [ ] **Step 3: Check the Publications page (`/publications`)**

Verify:
- Two papers listed: IGARSS 2024 and IGARSS 2023
- "Xuemei Jiang" is highlighted in the author list
- DOI links are present

- [ ] **Step 4: Check the CV page (`/cv`)**

Verify:
- Education section has 3 entries (St.Gallen MSc, St.Gallen MA, PKU BA)
- Experience section has 4 roles
- Skills and Languages sections are present
- No Publications section

- [ ] **Step 5: Check the navigation bar**

Verify: only "About", "Publications", "CV" are shown — no Teaching, Awards, or Services links

- [ ] **Step 6: Stop the dev server**

`Ctrl+C`
