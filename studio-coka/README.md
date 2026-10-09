# Crystal Kizor — Personal Brand Website

A single-page personal brand landing page for **Crystal Kizor** — Architect, Designer, Entrepreneur, Speaker, and Creator. Built as part of a Stage 1 Web Developer Assessment.

---

## Overview

The website presents Crystal's ecosystem of seven initiatives under one cohesive personal brand identity.

The central idea — **“Crystal Kizor builds worlds.”** — connects architecture, furniture design, education, community, faith, speaking, and research into a single narrative.

### Links

Live Website: https://crystalkizor-xi.vercel.app/
GitHub Repository: https://github.com/pianstp/Studio_coka



## Tech Stack

| Tool        | Version |
| ----------- | ------- |
| React       | 19      |
| Vite        | 8       |
| CSS Modules | —       |

No external UI libraries or CSS frameworks were used. All styling is hand-written to maintain complete control over the visual system and responsive behaviour.


## Project Structure

```text
src/
├── assets/
│   ├── Crystal_s pictures/          # Crystal's portrait photography
│   ├── Nature Home/                 # Nature Home project images
│   ├── Nature Home 2/               # Nature Home 2 project images
│   ├── Community Centre Project/    # Community Centre project images
│   ├── logo.png                    # Crystal Kizor logo
│   └── Crystal Kizor Logo Collection.png
│
├── components/
│   ├── Navbar/                      # Fixed navigation with mobile menu
│   ├── Hero/                        # Hero section with image carousel
│   ├── About/                       # About section and philosophy pillars
│   ├── Brands/                      # Seven initiatives
│   ├── Speaking/                    # Speaking engagements section
│   ├── Contact/                     # Visitor pathways and contact section
│   ├── Footer/                      # Footer with brand links
│   └── Skeleton/                    # Skeleton loading screens
│
├── hooks/
│   └── useInView.js                 # IntersectionObserver hook
│
├── App.jsx                          # Root application component
├── App.module.css                   # Application-level styles
└── index.css                        # Global variables, reset and animations
```

---

## Features

### Skeleton Loading

The site uses skeleton loading screens that mirror the layout of the main sections.

A shimmer animation is displayed during the initial loading experience before the main page fades into view.

### Hero Image Carousel

The hero section features an automatically advancing image carousel using six of Crystal's portraits.

* Automatic slide change every 4.5 seconds
* Crossfade transitions
* Subtle Ken Burns zoom effect
* Clickable slide indicators
* Responsive behaviour across screen sizes

### Scroll Animations

A custom `useInView` hook built with the **IntersectionObserver API** triggers animations as elements enter the viewport.

The implementation includes:

* Fade-up animations
* Fade-in animations
* Staggered animation delays
* One-time observation for performance

### Seven Initiatives

The website presents Crystal's seven initiatives as different expressions of one cohesive personal brand.

The initiatives include:

1. **Studio COKA** — Architecture & Design
2. **ELEvated** — Furniture & Product Design
3. **The Effective Architect** — Education & Media
4. **AKO Alliance** — Access & Opportunity
5. **Speaking Engagements** — Talks & Conversations
6. **Alive and Free** — Faith & Youth
7. **Crystal Kizor** — Research, Writing & Media

### Responsive Design

The website is designed to provide a consistent experience across desktop, tablet, and mobile devices.

Responsive breakpoints include:

* 1024px
* 900px
* 768px
* 600px
* 560px
* 480px
* 360px

Interactive elements are designed with a minimum **44px touch target** for mobile usability.

### Responsive Initiatives Layout

The initiatives section adapts based on screen size:

* **Desktop (>900px):** Three-column grid
* **Tablet (560–900px):** Two-column grid
* **Mobile (<560px):** Horizontal swipe carousel with dot indicators and pointer/touch drag support

### Navigation

The navigation is fixed and adapts based on scroll position.

**Desktop:**

* Transparent navigation on initial load
* Background blur effect after scrolling
* Smooth section navigation

**Mobile:**

* Full-screen navigation overlay
* Opacity transition
* Touch-friendly navigation controls

---

## The Seven Initiatives

| #  | Initiative              | Category                   |
| -- | ----------------------- | -------------------------- |
| 01 | Studio COKA             | Architecture & Design      |
| 02 | ELEvated                | Furniture & Product Design |
| 03 | The Effective Architect | Education & Media          |
| 04 | AKO Alliance            | Access & Opportunity       |
| 05 | Speaking Engagements    | Talks & Conversations      |
| 06 | Alive and Free          | Faith & Youth              |
| 07 | Crystal Kizor           | Research, Writing & Media  |

---

## Design System

The visual system is defined through reusable CSS variables in `src/index.css`.

```css
--bg: #F4F2EE;
--bg-alt: #EFECE6;
--bg-dark: #2B2D27;

--accent: #C86D51;
--accent-warm: #D4A373;

--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-sans: 'Inter', system-ui, sans-serif;

--max-width: 1200px;
--section-pad: clamp(2.5rem, 6vw, 8rem);
--px: clamp(1.25rem, 5vw, 2rem);
```

The design combines an editorial serif typeface with a modern sans-serif system to create a visual language that reflects architecture, design, and personal storytelling.

---

## Getting Started

### 1. Clone the repository

```bash
git clone [your-github-repository-url]
```

### 2. Navigate into the project

```bash
cd [project-folder]
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

---

## Assessment Notes

This project represents **Part 1** of a three-part Web Developer Assessment.

### Part 1 — Website

A fully responsive personal brand website for Crystal Kizor, designed and developed with React and Vite.

### Part 2 — AI Product Thinking

A proposed AI-powered product addressing a specific problem within one of Crystal's initiatives.

**Maximum length:** 300 words.

### Part 3 — Analytics & Improvement

An analytics and optimisation strategy covering measurement, user behaviour, conversion, and improvement.

**Maximum length:** 250 words.

---

## Submission

**Submission Deadline:** 4:00 PM, Saturday, 10 October 2026

### Required Deliverables

* Live website link
* GitHub repository link
* Part 2 — AI Product Thinking
* Part 3 — Analytics & Improvement
* Short submission note explaining the thinking and key decisions

**Assessment Stage:** Stage 1 — Web Developer Assessment

---

## Philosophy

> **One person. Many dimensions. One vision.**

The website was designed around the idea that Crystal Kizor's work should not be presented as a collection of disconnected initiatives.

Instead, the experience positions Crystal at the centre and presents each initiative as a different expression of the same underlying philosophy — using architecture, design, education, entrepreneurship, community, and ideas to create meaningful impact.

---

## Developer's Note

I started by carefully reviewing the assessment brief to understand the requirements and the overall direction of the project. Even after getting a general idea of what was expected, I went through the document again because I wanted to understand the design direction more clearly before writing any code. During this process, I took note of the website's flow, color palette, typography, imagery, content, and the different sections that needed to be included.

My main goal was to create a website that presents Crystal Kizor's work and the different initiatives under her brand in a clear and connected way, rather than making them feel like separate entities. I paid attention to the layout and content hierarchy to make the page easy to navigate and visually engaging.

For the technology stack, I chose React.js with Vite for a fast development workflow and reusable components, while CSS Modules helped me organize the styling and avoid conflicts between components. I also used Amazon Q as an AI assistant during development, mainly to support my problem-solving process and help me work through implementation challenges.

Overall, my focus was to translate the brief into a functional, responsive, and visually consistent website while making deliberate decisions throughout the development process.

---

## Part 2 — AI Product Proposal

### TEA Mentor: An AI Career Guide for Architects

**What it does:** TEA Mentor is an AI-powered assistant that helps users find relevant advice from The Effective Architect's existing podcasts, articles, and courses. It provides answers with links to supporting sources and can eventually create personalised 90-day growth plans.

**Who it's for:** Architecture students, young architects, and aspiring studio owners — particularly those who have limited access to professional mentorship.

**The problem:** Valuable advice about pricing projects, finding clients, developing skills, and starting a practice can be difficult to locate across multiple resources. Some young professionals also lack experienced mentors to guide their decisions.

**How it works:** A visitor selects their career stage and asks a question, such as "How do I price my first project?" The assistant searches relevant TEA content, provides a clear answer, links to its sources, and recommends useful resources or next steps.

**Technology:** Claude API for language generation, Supabase with pgvector for storing and retrieving relevant content, and a React interface connected through a Vercel serverless API route. Retrieval-augmented generation (RAG) would help ground responses in TEA's content rather than relying entirely on the model's general knowledge.

**First version:** Start with 20-30 carefully selected transcripts and articles, build the retrieval and response API, and integrate a simple chat interface with source links and feedback buttons. Test with a small group of architects before expanding content and features.

**Limitations and safeguards:** AI responses can still be inaccurate. The assistant should acknowledge when reliable supporting information is unavailable, clearly display sources, and avoid presenting answers as legal, licensing, or structural advice. User data should be protected, with consent obtained before storing personal information. Rate limits and usage caps would help control costs.

---

## Part 3 — Analytics & Improvement

### Measuring Website Performance and Driving Improvement

**What I would track:** Traffic sources, device types, new and returning visitors, engagement with key sections, clicks on brand cards and calls to action, contact-link clicks, enquiry submissions, and Core Web Vitals — particularly on mobile.

**Tools:** Google Analytics 4 for visitor behaviour and conversions, Microsoft Clarity for heatmaps and session recordings, Google Search Console for search performance, and Lighthouse or PageSpeed Insights for performance assessment.

**How I would use the data:** Review results monthly, identify areas where visitors struggle or leave, develop a specific improvement hypothesis, and measure the outcome after making changes. Use usability testing and A/B testing where sufficient traffic is available.

**Scenario: 5,000 visitors but only 5 enquiries.**

The enquiry conversion rate is 0.1%. I would investigate in this order:

1. **Technical issues** — Test the contact process on desktop and mobile, verify that tracking works, and confirm that enquiries are being delivered successfully.
2. **Traffic quality** — Compare conversion rates across traffic sources to determine whether visitors match the intended audience.
3. **Visitor behaviour** — Examine scroll depth, click patterns, and session recordings to understand whether visitors discover the relevant information and calls to action.
4. **Clarity and trust** — Check whether visitors quickly understand Crystal Kizor's work, who the website serves, and what action to take next.

**Next steps:** Fix any technical problems first, then improve unclear messaging, make calls to action more relevant to each audience, and strengthen credibility with project examples or testimonials. If the contact process is difficult, simplify it or introduce a short enquiry form. Monitor results over four weeks and compare with the original conversion rate to determine whether changes improved performance.

---

## Built With Intention

**Crystal Kizor**
Architect · Designer · Entrepreneur · Speaker · Creator

*Designed and built with intention.*
