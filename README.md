# Interactive Bookshelf — Next.js + Framer Motion

An editorial-style interactive bookshelf with spring animations and morphing transitions.

## Stack
- **Next.js 14** (App Router, static export)
- **Tailwind CSS**
- **Framer Motion** (spring physics, layoutId morphing, AnimatePresence)
- Deployable on **Netlify**

## Local Dev

```bash
npm install
npm run dev
```

## Deploy on Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zabre/interactive-bookshelf-next)

Build command: `npm run build`  
Publish directory: `out`

## Architecture

```
src/
├── app/
│   ├── layout.tsx       # Root layout + grain overlay
│   └── page.tsx         # Entry point
├── components/
│   ├── Bookshelf.tsx    # State manager (hovered/selected)
│   ├── BookSpine.tsx    # Animated spine + expand panel
│   └── BookOverlay.tsx  # Full detail modal
└── data/
    └── books.ts         # Book data + TypeScript type
```

## Customise books

Edit `src/data/books.ts`. Each book:
```ts
{
  id, title, author,
  spineColor,  // CSS color
  cover,       // image URL
  tag,         // genre label
  review,      // your thoughts
  link         // external URL
}
```
