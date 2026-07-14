# Homeland Jobs - Freelance Marketplace Platform

A modern, production-ready React application showcasing a premium freelancing marketplace UI, similar to Upwork or LinkedIn Jobs. Built from the ground up prioritizing responsive design, robust state management, and modern Web Content Accessibility Guidelines (WCAG).

## Features
- **Sophisticated Job Discovery:** Explore available jobs with a highly responsive, multi-column grid layout that automatically adjusts perfectly across mobile, tablet, and desktop screens.
- **Advanced Filtering & Sorting:** Real-time multi-dimensional filtering (Search, Category, Location, Budget) combined with a robust sorting mechanism (Newest, Budget High/Low) applied intelligently post-filter.
- **Job Detail Modal & Proposal Engine:** An immersive, fully scroll-locked Modal view presenting detailed job contexts, paired with an intelligent Proposal Form.
- **Inline Form Validation:** Drop-in, custom form validation guaranteeing instant feedback without relying on intrusive browser alerts or native tooltips.
- **Simulated API Lifecycle:** Elegant data mocking utilizing `setTimeout` and Promises, accurately mirroring a real API lifecycle including polished Loading Skeletons, interactive Error States, and Empty State handling.
- **Accessible & Semantic UI:** Strictly relies on HTML5 semantic elements (`<article>`, `<header>`, `<footer>`, `<time>`, `<section>`), ARIA labels, and custom focus-trapping functionality ensuring a great keyboard/screen-reader experience.
- **Zero Inline Styles:** Styling is strictly maintained within dedicated CSS classes to ensure separation of concerns and maximum maintainability.

## Setup Steps

### Prerequisites
Make sure you have Node.js installed (v16.0.0 or higher recommended) and `npm`.

1. **Clone or Download the Repository**
2. **Install Dependencies:**
   Open a terminal in the project root directory (`homeland-jobs`) and run:
   ```bash
   npm install
   ```
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
4. **Build for Production:**
   To create an optimized production build:
   ```bash
   npm run build
   ```

## AI Tools Used
- Development and designed using the assistance of  **Google DeepMind's Antigravity (AGY)** intelligent agent system, focusing on high-quality iterative architecture, UX aesthetics, and complex problem-solving.
- Code improvement adheres to the provided Senior Frontend Engineer ruleset encompassing clean architecture, hooks-based functional React components, and responsive pure-CSS frameworks.

## Known Limitations
- **Mock Data Engine:** The app currently runs entirely on static mock data. API submissions (`fetch`, `POST`) are simulated with timeouts and `Promise.resolve`. A live backend is required for persistent proposal storage.
- **Client-Side Processing:** Search and Filtering calculations are performed purely on the client-side, which handles the limited mock dataset excellently but would require moving to server-side query parameters for large-scale production databases to prevent memory bloat.
- **Session State:** Because there is no external database or local storage mapping configured, refreshing the browser clears active filter states and reverts job order.
