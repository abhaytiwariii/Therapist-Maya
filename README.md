# Dr. Maya Reynolds — Clinical Psychologist Portfolio

A design-forward, fully responsive **Next.js** website built for the **Dr. Therapist Maya**.

This project demonstrates **UI accuracy**, **creative redesign**, and **modern frontend engineering** using a fictional clinical psychologist persona.

---

## Project Structure

├── app/<br>
│   ├── blog/           # Blog listing and dynamic [slug] pages <br>
│   ├── contact/        # Contact page (Hero, Booking, Map, Gallery)<br>
│   ├── globals.css     # Global theme variables<br>
│   ├── layout.tsx      # Root layout and font configuration<br>
│   └── page.tsx        # Homepage composition<br>
├── components/         # Reusable UI components<br>
└── public/             # Static assets and imagery<br>


## 📌 Project Overview

This project addresses two core challenges:

### UI Cloning
Recreating the layout, spacing, and responsive structure of the **“Lilac” Squarespace template**, including complex grid systems and section rhythms.

### Creative Redesign
Reimagining the brand identity for **Dr. Maya Reynolds** using a new visual language—color palette, typography, and copy—while preserving the original architectural layout.

**Live Demo:** _Add Vercel / Netlify link_

---

## 🎨 Design Rationale — *The Sanctuary Theme*

The original “Lilac” aesthetic was replaced with a grounded, earth-tone system to align with Dr. Maya’s clinical focus on burnout recovery and grounding techniques.

### Color Palette

- **Primary — `#2C332A` (Deep Forest)**  
  Used for headings, body text, and primary actions to convey stability and professionalism.

- **Background — `#F9F7F2` (Warm Sand)**  
  A soft off-white base that reduces eye strain and creates a calm, “safe space” feel.

- **Secondary Accents — `#8A9A5B` (Moss), `#E8E6E1` (Greige)**  
  Used for section separation (CTAs, newsletter, content blocks) without disrupting the overall calm aesthetic.

### Typography

- **Headings:** Playfair Display (Serif)  
  Adds editorial elegance and clinical authority.

- **Body:** Inter (Sans-serif)  
  Ensures high readability for long-form content.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS (custom color and font configuration)
- **Animations:** Framer Motion (scroll reveals, modals)
- **Icons:** Lucide React
- **Language:** TypeScript

---

## ✨ Key Features

### 1. Architectural Layouts
Accurately replicated complex layout patterns from the reference template, including:
- Arched imagery using custom Tailwind utility composition (`rounded-t-full`)
- Asymmetrical grid layouts across key sections
- Responsive stacking behavior that mirrors the original design intent

### 2. Custom “Our Office” Section
A newly designed section (not present in the original template) showcasing the physical practice.

- Focuses on sensory details such as light, space, and privacy
- Implemented with staggered Framer Motion entrance animations

### 3. Interactive UI Elements

- **Social Lightbox**  
  Custom modal image gallery with keyboard navigation support (Arrow keys, Escape).

- **Booking Widget UI**  
  A responsive, state-driven interface mock-up for selecting services and viewing availability.

- **Mobile Navigation**  
  Fully responsive menu that reorders content based on viewport (image-first on mobile, text-first on desktop) using Flexbox.

### 4. Dynamic Blog System

- **Route:** `/blog/[slug]`
- **Functionality:**  
  Renders individual blog posts via dynamic routing from a shared data source.
- **Presentation:**  
  Full prose-styled reading environment optimized for long-form content.

---

## 📸 Screenshots
<img width="1875" height="907" alt="Screenshot 2026-02-07 221906" src="https://github.com/user-attachments/assets/20e8af8f-2800-40fb-8cc4-a48369f57ce6" />

<img width="1897" height="909" alt="Screenshot 2026-02-07 221827" src="https://github.com/user-attachments/assets/1fc4ebd7-878c-4048-908a-d433757c25a4" />
<img width="1896" height="906" alt="Screenshot 2026-02-07 221845" src="https://github.com/user-attachments/assets/f748b0f9-250c-4d36-887c-8ada0846be87" />

- Homepage (Desktop)
- Homepage (Mobile)
- Custom “Our Office” Section
- Blog Detail Page

---

# Install Dependencies

- npm install

# Run the development server

- npm run dev
