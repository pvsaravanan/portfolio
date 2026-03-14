# Portfolio Codebase Analysis

## 🚀 Overview
This project is a modern, high-performance personal portfolio website built with **React**, **Vite**, and **TypeScript**. It features a smooth, interactive user experience with parallax effects, custom animations, and a responsive design.

## 🛠 Technology Stack
- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions and scroll effects.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)

## 📁 Project Structure
The repository follows a standard React project structure:

```text
portfolio/
├── docs/                # Documentation and reports
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable UI components and page sections
│   │   ├── ui/          # Low-level shadcn/ui components
│   │   └── ...          # Feature-specific sections (Hero, About, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and shared logic
│   ├── pages/           # Page components (Index.tsx, NotFound.tsx)
│   ├── test/            # Test suites and configuration
│   ├── App.tsx          # Main application component & providers
│   ├── main.tsx         # Entry point for the React app
│   └── index.css        # Global styles and Tailwind directives
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite project configuration
└── package.json         # Dependencies and scripts
```

## ✨ Core Features
- **Single Page Architecture**: The entire portfolio is a long-scrolling page managed in `src/pages/Index.tsx`.
- **Parallax Effects**: Interactive backgrounds and section dividers (`ParallaxBackground`, `ParallaxDivider`).
- **Interactive UI**: Custom cursor (`CustomCursor`) and section transitions (`SectionTransition`).
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities.
- **Dark Mode Support**: Implemented via `next-themes`.

## ⚙️ Key Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Generates the production build.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run test`: Executes unit tests via Vitest.

## 🏗 Coding Patterns
- **Component-Based Architecture**: UI is broken down into small, reusable components in `src/components`.
- **Utility-First Styling**: Tailwind CSS is used for almost all styling needs.
- **Type Safety**: TypeScript is strictly enforced across the codebase.
- **Declarative Animations**: Framer Motion is used to handle complex UI interactions declaratively.
