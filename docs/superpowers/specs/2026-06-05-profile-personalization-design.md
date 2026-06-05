# Profile Personalization Design

**Date:** 2026-06-05  
**Status:** Approved

## Goal

Replace all placeholder content in the PRISM academic website template with Xuemei (Simone) Jiang's real profile. English content only. Bio text is intentionally left as placeholder for manual editing in a later pass.

## Navigation

Trim the nav to three pages:

| Page | Route | Status |
|------|-------|--------|
| About | `/` | Keep |
| Publications | `/publications` | Keep |
| CV | `/cv` | Keep |
| Teaching | `/teaching` | Remove from nav |
| Awards | `/awards` | Remove from nav |
| Services | `/services` | Remove from nav |
| Projects | `/projects` | Stub only, no nav entry |
| Blogs | `/blogs` | Stub only, no nav entry |

## `content/config.toml`

Update the following fields:

- `site.title` → `"Xuemei Jiang"`
- `site.description` → `"AI/ML Engineer based in Heidelberg, Germany"`
- `author.name` → `"Xuemei Jiang"`
- `author.title` → `"AI/ML Engineer"`
- `author.institution` → `""` (empty — not at an institution)
- `social.email` → `"xuemei.jg@gmail.com"`
- `social.location` → `"Heidelberg, Germany"`
- `social.github` → `"https://github.com/simonejiang7"`
- `social.linkedin` → `"https://linkedin.com/in/xuemeijiang"`
- Remove `google_scholar` and `orcid` fields

Remove `[[navigation]]` entries for Teaching, Awards, and Services.

## About Page (`content/about.toml`)

**Profile sidebar — research interests:**
```
["Computer Vision", "Active Learning", "Representation Learning", "Remote Sensing"]
```

**Sections — keep only:**
1. `about` (markdown, bio.md — text unchanged)
2. `skills` (new, type `markdown`, source `skills.md`)

**Remove sections:**
- `featured_publications`
- `news`

## Skills (`content/skills.md` — new file)

```markdown
## Skills

**Languages:** Python, TypeScript

**ML / CV:** PyTorch, NumPy, Computer Vision, Distributed Training, Embedding Models, VLMs

**Retrieval & Search:** Vector Search, Milvus, RAG, Semantic Search

**Infrastructure:** Docker, FastAPI, DVC, W&B, MLflow, AWS, Azure ML, Git, Linux

**LLM & Agents:** LiteLLM, vLLM, Multi-agent Systems
```

## Publications (`content/publications.bib`)

Replace with two real papers:

1. **IGARSS 2024** — "Less is More: Active Self-Supervised Learning in Remote Sensing"  
   Authors: X. Jiang, L. Scheibenreif, D. Borth  
   Oral presentation · DOI: 10.1109/IGARSS53475.2024.10640981  
   URL: https://ieeexplore.ieee.org/abstract/document/10640981

2. **IGARSS 2023** — "Self Supervised Learning in Remote Sensing: Quantifying Approaches Effectiveness Across Downstream Tasks"  
   Authors: M. Grau, A. Lontke, X. Jiang (co-first), L. Scheibenreif  
   Oral presentation · DOI: 10.1109/IGARSS52108.2023.10282926  
   URL: https://ieeexplore.ieee.org/abstract/document/10282926

Also update `content/publications.toml` description to match.

## CV Page (`content/cv.md`)

Sections (no Publications):

### Education
- MSc Computer Science, University of St.Gallen, 2021–2025  
  Thesis (5.75/6.00): Active Learning for Self-Supervised Learning in Remote Sensing
- MA Banking and Finance, University of St.Gallen, 2018–2021
- BA Economics, Peking University, 2013–2017

### Experience
- AI Developer, Everest Systems, Heidelberg — Dec 2025–May 2026
- Machine Learning Engineer, WIPO (UN), Geneva — Aug 2024–Nov 2025
- Machine Learning Engineer Intern, WIPO (UN), Geneva — Feb 2024–Aug 2024
- Machine Learning Engineer Intern, VIUN, Zurich — Oct 2023–Feb 2024

### Skills
Same categories as the About page skills section.

### Languages
English (Fluent), Chinese (Native), Korean (Bilingual), German (Basic)

## Stub Files

- `content/projects.toml` — empty file, no nav entry
- `content/blogs.toml` — empty file, no nav entry

## Out of Scope

- `content/bio.md` — text left unchanged, to be edited manually later
- `content_zh/` — Chinese translations not updated in this pass
- Avatar/photo — not changed in this pass
- Any code/component changes — content files only
