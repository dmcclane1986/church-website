# Liberty Baptist Church – Pine Bluff (Next.js 15)

Next.js 15 App Router project created from the existing HTML/Wix export.

## Structure

- **`app/`** – App Router routes  
  - `page.tsx` (Home, from Church.html)  
  - `about-pastor/page.tsx`  
  - `plan-your-visit/page.tsx` (from I'm New.html)  
  - `way-to-heaven/page.tsx` (from Heaven.html)  
  - `statement-of-faith/page.tsx`  
  - `media/page.tsx`  
  - `calendar/page.tsx` (new)  
  - `contact/page.tsx` (new)  
- **`components/`** – Shared UI: `Navbar`, `Footer`, `ServiceTimes`  
- **`public/assets/`** – Images and media (see `public/assets/ASSETS_README.md`)  
- **`scripts/copy-assets.js`** – Copies images from `*_files` into `public/assets` with logical names (run if you have local image files)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Original files

The original HTML files and `*_files` folders are still in the project root. After you migrate their content into the React pages, you can remove them. The copy script uses paths like `Church_files/Logo Maybe Final.jpg` → `public/assets/church-logo.jpg` when those files exist.
