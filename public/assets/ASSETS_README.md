# Assets

This folder holds images, icons, and media for the Liberty Baptist site.

## Migration from original site

- The original site was built with **Wix**; most images were served from `https://static.wixstatic.com/media/...`.
- The `*_files` folders next to the saved HTML contained mainly Wix JS/CSS bundles; any **local** images from those folders have been copied here with logical names (see below).
- When building pages, reference assets as `/assets/filename` (e.g. `/assets/church-logo.jpg`).

## Hero image

- **`liberty-baptist-church.jpg`** — Homepage hero. Use this exact filename (lowercase, hyphens). For a “no background” look, use an image editor (e.g. [remove.bg](https://remove.bg)) to make the background transparent and save as **`Liberty Baptist Church.png`** in this folder; then we can switch the hero to the PNG.

## Suggested filenames (for when you add or rename files)

- **Church / home:** `church-logo.jpg`, `liberty-baptist-church.jpg` (hero), `church-giving.jpg`, `church-heaven-section.jpg`, `church-contact-bg.jpg`
- **Pastor:** `pastor-portrait.jpg`
- **Icons / UI:** `facebook-icon.png`, `favicon.ico`

If you have local copies of images from the Wix export (e.g. from `Church_files/`), place them here and use the names above where they fit.
