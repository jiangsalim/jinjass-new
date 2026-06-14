markdown
# Jinja Senior Secondary School Website

![Jinja SS](https://jinjass.sc.ug/)

A modern, fully-featured website for **Jinja Senior Secondary School (JINJA SS)** — a government school founded in 1948 offering O'Level and A'Level education in Jinja, Uganda.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS v3** | Utility-first styling |
| **Framer Motion** | Animations & page transitions |
| **Sanity.io** | Headless CMS (content management) |
| **Brevo** | Contact form & email API |
| **Vercel** | Hosting & deployment |

---

## Features

Modern Design** — Clean, professional UI with navy & teal color scheme
Dark/Light Mode** — Toggle between themes with system preference detection
Smart Search** — Hover-expand search bar with live dropdown results
Fully Responsive** — Works perfectly on mobile, tablet, and desktop
Smooth Animations** — Page transitions, scroll reveals, parallax, count-up numbers
News & Events** — Blog with search, category filters, and individual article pages
Gallery** — Filterable image grid with lightbox viewer
Administration** — Staff profiles with individual detail pages
Contact Form** — Brevo API integration for email notifications
Sports & Clubs** — Dedicated pages for all sports and student clubs
Academics** — Subjects, UNEB results, timetable
Fees Structure** — O'Level and A'Level fees display
Google Maps** — Embedded school location
SEO Optimized** — Metadata, sitemap.xml, robots.txt
Accessible** — Semantic HTML, ARIA labels, keyboard navigation

---

## 📂 Project Structure
jinjass-new/
├── app/ # Next.js App Router pages
│ ├── about/ # About pages (history, head teacher, anthem)
│ ├── academics/ # Academics (subjects, results, timetable)
│ ├── administration/ # Admin team listing + profiles
│ ├── admissions/ # Admissions info
│ ├── api/contact/ # Brevo contact form API
│ ├── clubs/ # Student clubs pages
│ ├── contact/ # Contact page with form
│ ├── e-learn/ # E-Learning portal
│ ├── e-report/ # Results portal
│ ├── gallery/ # Photo gallery with lightbox
│ ├── news/ # News listing + single articles
│ ├── privacy/ # Privacy policy
│ ├── sitemap/ # Visual sitemap
│ ├── sports/ # Sports pages
│ ├── terms/ # Terms & conditions
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Homepage
├── components/ # Reusable components
│ ├── AdminTeam.tsx
│ ├── AnnouncementBar.tsx
│ ├── ContactSection.tsx
│ ├── Footer.tsx
│ ├── Hero.tsx
│ ├── HoverSearch.tsx
│ ├── Navbar.tsx
│ ├── PageHero.tsx
│ ├── PageTransition.tsx
│ ├── SearchModal.tsx
│ ├── SectionHeading.tsx
│ ├── ThemeToggle.tsx
│ └── ... (20+ components)
├── context/ # React context
│ └── ThemeContext.tsx # Dark/light mode provider
├── public/ # Static assets
│ └── badge.png # School logo/badge
├── tailwind.config.ts # Tailwind configuration
├── next.config.ts # Next.js configuration
└── package.json

text

---

##  Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jiangsalim/jinjass-new.git

# Navigate to project
cd jinjass-new

# Install dependencies
npm install

# Start development server
npm run dev
Visit http://localhost:3000

Environment Variables
Create a .env.local file:

env
BREVO_API_KEY=your_brevo_api_key_here
BREVO_TO_EMAIL=jinjass1948@gmail.com
🏗️ Build & Deploy
bash
# Build for production
npm run build

# Start production server
npm start
Deployed on Vercel at jinjass.sc.ug

   Color System
Color	Hex	Usage
Navy	#0A1F3F	Headers, footer, hero sections
Navy Dark	#06162E	Footer background
Navy Light	#132D52	Borders, overlays
Teal	#00C2BA	Buttons, links, highlights
Teal Dark	#00A8A0	Button hover states
   Pages
Page	Route
Home	/
School History	/about/history
Head Teacher	/about/head-teacher
School Anthem	/about/anthem
Academics	/academics
Subjects	/academics/subjects
UNEB Results	/academics/results
Timetable	/academics/timetable
News & Events	/news
Gallery	/gallery
Contact	/contact
Admissions	/admissions
Sports	/sports
Student Clubs	/clubs
Administration	/administration
E-Learning	/e-learn
E-Report	/e-report
Privacy Policy	/privacy
Terms	/terms
Sitemap	/sitemap
  Developer
Developed by Herman Software Solutions
https://herman-software-website.vercel.app/

    License
© 2026 Jinja Senior Secondary School. All rights reserved.

text

---

## Step 3: Create .gitignore (if not exists)

```bash
Get-ChildItem .gitignore
If it doesn't exist, create one:

text
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
