# 🛡️ Startpage Cleaner

**Startpage Cleaner** is a lightweight, open‑source browser extension for **Brave** (and Chromium‑based browsers) that removes sponsored ads, clutter, and tracking iframes from Startpage search results – giving you a cleaner, faster, and more private search experience.

![Startpage Cleaner Demo](https://via.placeholder.com/800x400/171b25/a7b1fc?text=Startpage+Cleaner+Demo)  
*(Replace with an actual screenshot or GIF)*

---

## ✨ Features

- 🚫 **Blocks all sponsored results** – removes `#adBlock`, `#gcsa-top`, and all ad‑iframes.
- 🔄 **Dynamic detection** – uses a MutationObserver to catch ads that load after the page renders.
- 🎨 **Minimal & dark‑mode friendly** – blends seamlessly with Startpage’s dark theme.
- ⚙️ **Optional settings page** – toggle ad‑blocking on/off (uses `chrome.storage`).
- 🧩 **Extensible** – easy to update selectors if Startpage changes their layout.

---

## 📦 Installation

### From source (developer mode)

1. **Download or clone** this repository:
   ```bash
   git clone https://github.com/your-username/startpage-cleaner.git
