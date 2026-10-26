# Nirzor Das — Developer Portfolio

A high-performance, minimalist personal portfolio for **Nirzor Das** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed with an ultra-clean aesthetic (monochrome focus, hairline borders, no excessive margins or heavy drop-shadows), optimized for instant static generation and deployment to **Vercel**.

---

## ⚡ Highlights

- **Aesthetic**: Refined, content-first minimalist UI inspired by modern engineering systems (Linear, Vercel).
- **Zero Bloat**: No redundant wrappers, heavy drop-shadows, or excessive margins/padding.
- **Data-Driven**: Populated with authentic resume content, AIUB academic achievements (CGPA 3.78), projects, and verified credentials.
- **Interactive Lightbox**: Full-resolution interactive certificate viewer modal with ESC keyboard dismiss and responsive touch support.
- **Real-Time Elements**: Dynamic live Dhaka time clock (GMT+6) and status indicator.
- **Theme**: Automatic system theme detection with manual light/dark toggle and flash-prevention script.
- **One-Click Actions**: Direct CV PDF download, one-tap email/phone clipboard copy, and email contact dispatch.
- **Vercel Native**: Fully static prerendering (`○ Static`), fast Core Web Vitals, and zero runtime configuration needed.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Sections Overview

1. **Header**: Name badge, desktop & mobile navigation, live Dhaka clock, CV shortcut, theme toggle.
2. **Hero**: Professional headshot, AIUB CSE title, open-to-work status, direct actions (Contact, Download CV, Copy Email).
3. **01 / Background**: Executive narrative, 4 core metric cards (CGPA 3.78, Next.js+Nest, Shannon Entropy, Leadership), and faculty reference endorsement (Mir Md. Kawsur, AIUB).
4. **02 / Selected Works**: Interactive category filter (`All`, `Full Stack`, `Backend / System`, `Systems / C++`, `Research`) featuring **Crisis Connect**, **Agriculture Management System**, **Home Service Management**, **Tetris Arcade Engine**, and **Shannon Entropy Research**.
5. **03 / Technical Stack**: Grouped competency matrix (Frontend, Backend, Databases, Core Languages, Machine Learning, Tools).
6. **04 / Education & Leadership**: Academic history (AIUB, BEPZA HSC, NGHS SSC) & community service (NCTF Child Researcher, Bangladesh Red Crescent Training Chief, BNCC Cadet).
7. **05 / Honors & Certifications**: Grid of real verified certificates & trophies with category filters and interactive image preview modal.
8. **06 / Connect**: Direct channels (Email, Phone/WhatsApp, Location), copy buttons, and instant message dispatch form.
9. **Footer**: System status, time zone, and smooth back-to-top shortcut.

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🌐 Deploying to Vercel

### Option 1: Via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete minimalist portfolio"
   ```
2. Push the repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), select the repository, and click **Deploy**. Vercel will automatically detect Next.js and build it without any configuration.

### Option 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link your Vercel account and deploy immediately.

---

## 📄 License
MIT &copy; Nirzor Das
