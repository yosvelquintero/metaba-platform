# Metaba Platform

Welcome to the Metaba Platform monorepo! This repository contains the core applications and shared libraries that power the Metaba ecosystem.

## Overview

Metaba Platform is an Nx-managed monorepo designed to build and scale modern web applications. It features a component-first architecture with shared libraries and multiple applications:

### Applications

- **`api-app`**: A Nest.js backend API providing robust server-side functionality
- **`web-app`**: A Next.js frontend application delivering modern user experiences

### Libraries

- **`shared/ui`**: A reusable UI component library built with React, Tailwind CSS, and Radix UI primitives. Includes its own build, lint, and test scripts for independent development.

The architecture is built with scalability and maintainability in mind, leveraging Nx's powerful tooling for efficient development and deployment workflows.

## Workspace Structure

This workspace is organized using Nx to manage applications and shared libraries efficiently:

```
metaba-platform/
├── apps/                         # Deployable applications
│   ├── api-app/                  # Nest.js backend API
│   ├── api-app-e2e/              # E2E tests for api-app
│   ├── web-app/                  # Next.js frontend application
│   └── web-app-e2e/              # E2E tests for web-app
├── libs/                         # Shared libraries and utilities
│   └── shared/
│       └── ui/                   # Reusable UI component library
├── nx.json                       # Nx workspace configuration
├── package.json                  # Root package.json with scripts
├── tsconfig.base.json            # Base TypeScript configuration
├── DESIGN_SYSTEM.md              # Design system architecture guide
└── README.md                     # This file
```

## Available Scripts

All scripts should be run from the root of the monorepo using `pnpm run <script-name>`.

### API App (Nest.js) Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `dev:api-app`        | Start development server with hot reload |
| `build:api-app`      | Build for development                    |
| `build:api-app:prod` | Build for production                     |
| `serve:api-app`      | Serve the built application              |
| `serve:api-app:prod` | Serve production build                   |
| `lint:api-app`       | Run ESLint                               |
| `test:api-app`       | Run Jest tests                           |

### Web App (Next.js) Scripts

| Script               | Description                             |
| -------------------- | --------------------------------------- |
| `dev:web-app`        | Start Next.js development server via Nx |
| `build:web-app`      | Build for development                   |
| `build:web-app:dev`  | Build development configuration         |
| `build:web-app:prod` | Build for production                    |
| `serve:web-app`      | Serve with Nx (development)             |
| `serve:web-app:dev`  | Serve development build                 |
| `serve:web-app:prod` | Serve production build                  |
| `start:web-app`      | Start production server (next start)    |
| `export:web-app`     | Export static files                     |
| `lint:web-app`       | Run ESLint                              |
| `test:web-app`       | Run Jest tests                          |
| `test:web-app:ci`    | Run tests with CI configuration         |
| `type-check:web-app` | TypeScript type checking                |

### UI Library (shared/ui) Scripts

| Script     | Description                    |
| ---------- | ------------------------------ |
| `build:ui` | Build the UI component library |
| `lint:ui`  | Run ESLint on UI library       |
| `test:ui`  | Run Jest tests for UI library  |

### Global Scripts

| Script           | Description                                      |
| ---------------- | ------------------------------------------------ |
| `build:all`      | Build all projects                               |
| `build:all:prod` | Build all projects for production                |
| `dev:all`        | Run both apps with concurrently (colored output) |
| `lint:all`       | Lint all projects                                |
| `test:all`       | Test all projects                                |
| `type-check:all` | Type-check all projects                          |

### E2E Testing Scripts

| Script        | Description               |
| ------------- | ------------------------- |
| `e2e:api-app` | Run E2E tests for API app |
| `e2e:web-app` | Run E2E tests for web app |
| `e2e:all`     | Run all E2E tests         |

### Quality & Development Scripts

| Script           | Description                         |
| ---------------- | ----------------------------------- |
| `format`         | Format code with Nx                 |
| `format:check`   | Check code formatting               |
| `affected:build` | Build only affected projects        |
| `affected:test`  | Test only affected projects         |
| `affected:lint`  | Lint only affected projects         |
| `affected:e2e`   | Run E2E tests for affected projects |

### Nx Utility Scripts

| Script      | Description                   |
| ----------- | ----------------------------- |
| `graph`     | View project dependency graph |
| `reset`     | Reset Nx cache                |
| `dep-graph` | Show dependency graph         |

### Development Modes

This workspace offers to run both applications in development:

- **`pnpm run dev:all`** - Run both apps with concurrently (colored output and timestamps)

## Getting Started

Follow these steps to get the Metaba Platform running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or v20+ recommended)
- [pnpm](https://pnpm.io/installation) (Package manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url> metaba-platform
   cd metaba-platform
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

### Quick Start

**Start both applications in development mode:**

```bash
pnpm run dev:all
```

**Or start them individually:**

1. **Backend API (api-app):**

   ```bash
   pnpm run dev:api-app
   ```

2. **Frontend App (web-app):**
   ```bash
   pnpm run dev:web-app
   ```

### Building for Production

**Build all applications:**

```bash
pnpm run build:all:prod
```

**Or build individually:**

```bash
pnpm run build:api-app:prod
pnpm run build:web-app:prod
```

## Key Technologies

This platform is built using modern and robust technologies:

### Monorepo & Core Tooling

- **[Nx](https://nx.dev)**: Smart, fast, and extensible build system with first-class monorepo support
- **[pnpm](https://pnpm.io)**: Fast, disk space-efficient package manager
- **[TypeScript](https://www.typescriptlang.org)**: Statically typed superset of JavaScript

### Backend (`api-app`)

- **[NestJS](https://nestjs.com)**: Progressive Node.js framework for scalable server-side applications
- **[Jest](https://jestjs.io)**: Testing framework for unit and integration tests
- **[ESLint](https://eslint.org)**: Linting and code quality

### Frontend (`web-app`)

- **[Next.js](https://nextjs.org)**: React framework with SSR/SSG capabilities
- **[React](https://react.dev)**: JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework
- **[Jest](https://jestjs.io)**: Testing framework
- **[ESLint](https://eslint.org)**: Code linting and formatting

### Development Tools

- **[Prettier](https://prettier.io)**: Code formatter
- **[Playwright](https://playwright.dev)**: End-to-end testing (E2E apps)
- **[SWC](https://swc.rs)**: Fast JavaScript/TypeScript compiler

## Development Workflow

### Adding New Features

1. **Create feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Fixing bugs:**

   ```bash
   git checkout -b bugfix/your-bug-name
   ```

3. **Start development servers:**

   ```bash
   pnpm run dev:all
   ```

4. **Run tests:**

   ```bash
   pnpm run test:all
   ```

5. **Lint code:**

   ```bash
   pnpm run lint:all
   ```

6. **Type check:**
   ```bash
   pnpm run type-check:all
   ```

### Code Quality

The workspace is configured with:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Jest** for testing

Run all quality checks:

```bash
pnpm run lint:all && pnpm run type-check:all && pnpm run test:all
```

## Project Structure

### API App (`apps/api-app`)

```
api-app/
├── src/
│   ├── app/          # Application modules
│   ├── main.ts       # Application entry point
│   └── assets/       # Static assets
├── project.json      # Nx project configuration
├── webpack.config.js # Webpack configuration
└── jest.config.ts    # Jest configuration
```

### Web App (`apps/web-app`)

```
web-app/
├── src/
│   └── app/          # Next.js app directory
│       ├── layout.tsx
│       ├── page.tsx
│       └── api/      # API routes
├── public/           # Static assets
├── project.json      # Nx project configuration
├── next.config.js    # Next.js configuration
└── tailwind.config.js # Tailwind configuration
```

## Useful Commands

### Nx Commands

```bash
# View project graph
nx graph

# Show project details
nx show project api-app --web
nx show project web-app --web

# Run specific target for all projects
nx run-many --target=build
nx run-many --target=test --parallel

# Generate new application
nx g @nx/nest:app my-api
nx g @nx/next:app my-web-app

# Generate new library
nx g @nx/js:lib my-lib
```

### Dependency Management

```bash
# Add dependency to specific project
pnpm add <package> --filter api-app
pnpm add <package> --filter web-app

# Add dev dependency
pnpm add -D <package> --filter api-app

# Update all dependencies
pnpm update
```

---

## Architecture

This platform implements a **component-first design system** with:

- **Decoupled UI components** in `libs/shared/ui` that work with any Tailwind setup
- **App-specific configurations** where each app controls its own theming
- **CSS variables** for consistent theming contracts between apps and components

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for detailed architecture information.

## Learn More

- **[Nx Documentation](https://nx.dev)** - Learn about Nx features and capabilities
- **[Nx Cloud](https://nx.app)** - Distributed task execution and caching
- **[Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)** - VS Code extension for Nx

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests and linting (`pnpm run test:all && pnpm run lint:all`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.
