<div align="center">

# Shreya Dubey — Portfolio

**A single-page portfolio site for an AI/ML & Security engineer**
*B.Tech CSE '26 · AI/ML · Cybersecurity · Full-stack*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No framework](https://img.shields.io/badge/dependencies-zero-DB9A34?style=flat-square)
![GitHub Pages ready](https://img.shields.io/badge/GitHub%20Pages-ready-2E9C93?style=flat-square&logo=github)

</div>

<br>

<img src="docs/preview.png" alt="Portfolio homepage preview" width="100%">

<sub>⚠️ Preview rendered offline, so it's showing fallback system fonts instead of Fraunces/Inter/IBM Plex Mono — those load correctly once deployed with normal internet access.</sub>

<br>

## ✨ What makes this different

Most portfolio templates default to one of two looks: cream-and-serif "editorial," or
near-black-with-neon "hacker." This one does neither — a cool **mist slate** palette
with a **warm signal-amber** accent (think oscilloscope phosphor, not Matrix green),
paired with **Fraunces** for display type and **IBM Plex Mono** for data.

The signature move: the **Skills section is literally formatted as port-scanner
output** —

```
PORT       STATE    SERVICE                              CATEGORY
3.11/py    open     Python                                Languages
torch/1    open     PyTorch                               AI / ML
sec/01     open     Network Security & Vuln. Assessment    Security
```

— a direct callback to the [Network Vulnerability Scanner](https://github.com/dshreya1503-stack/network-vulnerability-scanner)
project below it, not decoration for its own sake.

## 🧩 Sections

| Section | What's there |
|---|---|
| **Hero** | Name, role, and an animated "profile scan" terminal readout (respects `prefers-reduced-motion`) |
| **About** | Quick facts — location, CGPA, graduation date, focus areas |
| **Skills** | The scan-table shown above |
| **Projects** | All 4 shipped repos, each with tech tags and a live GitHub link |
| **Experience** | Chronological internship timeline — DRDO, YHills, Ordnance Factory |
| **Contact** | Email, GitHub, LinkedIn, and a résumé download |

## 🔗 Links used on this site

| Field | Value |
|---|---|
| Email | dubeyshreya1503@gmail.com |
| Phone | +91 74095 58351 |
| GitHub | [github.com/dshreya1503-stack](https://github.com/dshreya1503-stack) |
| LinkedIn | [linkedin.com/in/shreya-du1](https://www.linkedin.com/in/shreya-du1) |
| Résumé | `resume.pdf` (included in this repo) |

**Projects linked:**
- [Phishing_Detection_System](https://github.com/dshreya1503-stack/Phishing_Detection_System)
- [adaptive-noise-cancellation](https://github.com/dshreya1503-stack/adaptive-noise-cancellation)
- [network-vulnerability-scanner](https://github.com/dshreya1503-stack/network-vulnerability-scanner)
- [employee-management-dashboard](https://github.com/dshreya1503-stack/employee-management-dashboard)

If any of these repo names change later, update the matching `href` in the
Projects section of `index.html` to match.

## 🚀 Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## 🌐 Deploy free via GitHub Pages (~2 minutes)

1. Push this folder to a GitHub repo
2. **Settings → Pages → Source → Deploy from a branch → `main` → `/ (root)`**
3. Wait ~1 minute, then visit `https://dshreya1503-stack.github.io/<repo-name>/`

**Want the short URL** (`dshreya1503-stack.github.io`, no repo name in the path)?
Name the repo *exactly* `dshreya1503-stack.github.io` — GitHub Pages treats that
name as a special case and serves it at the root automatically.

## 📁 Structure

```
shreya-portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── docs/
│   └── preview.png        # README banner image
└── resume.pdf
```

## ♿ Accessibility & performance

- Respects `prefers-reduced-motion` — the hero's animated boot-log becomes static
- Visible, on-brand focus outlines on every interactive element (not just the
  browser default, which is easy to miss)
- Skip-to-content link for keyboard/screen-reader users
- Zero JS frameworks — plain HTML/CSS + ~15 lines of vanilla JS, loads instantly

<div align="center">
<sub>Built by Shreya Dubey · <a href="https://github.com/dshreya1503-stack">github.com/dshreya1503-stack</a></sub>
</div>
