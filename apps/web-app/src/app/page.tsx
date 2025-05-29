import {
  Header,
  Hero,
  Features,
  Scripts,
  type NavigationItem,
} from '@metaba-platform/shared-ui';

const navigationItems: NavigationItem[] = [
  {
    title: 'Features',
    href: '#features',
    description: 'Explore platform capabilities and features',
  },
  {
    title: 'Scripts',
    href: '#scripts',
    description: 'Available development and build scripts',
  },
  {
    title: 'Documentation',
    href: '#docs',
    description: 'Get started with comprehensive guides',
  },
  {
    title: 'Components',
    items: [
      {
        title: 'UI Components',
        href: '#ui-components',
        description: 'Reusable UI components built with React and Tailwind',
      },
      {
        title: 'Layout Components',
        href: '#layout-components',
        description: 'Layout components for consistent page structure',
      },
      {
        title: 'Form Components',
        href: '#form-components',
        description: 'Form components with built-in validation',
      },
      {
        title: 'Data Components',
        href: '#data-components',
        description: 'Components for displaying and managing data',
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header with improved navigation */}
      <Header
        variant="sticky"
        navigationItems={navigationItems}
        showThemeToggle={true}
        className="pt-12"
      />

      {/* Hero Section */}
      <Hero
        subtitle="Welcome to"
        title="Metaba Platform"
        description="An Nx-managed monorepo designed to build and scale modern web applications. Features a Nest.js backend API and Next.js frontend application built with scalability and maintainability in mind."
        primaryAction={{
          label: 'Get Started',
          href: '#features',
        }}
        secondaryAction={{
          label: 'View Documentation',
          href: '#docs',
        }}
      />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Scripts Section */}
      <div id="scripts">
        <Scripts />
      </div>

      {/* Getting Started Section */}
      <section id="docs" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Getting Started
          </h2>
          <div className="prose prose-slate max-w-none">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Node.js (v18 or v20+ recommended)</li>
                  <li>• pnpm (Package manager)</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                <div className="space-y-3">
                  <code className="block bg-muted p-3 rounded text-sm">
                    pnpm install
                  </code>
                  <code className="block bg-muted p-3 rounded text-sm">
                    pnpm dev:all
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="container text-center text-muted-foreground">
          <p>
            &copy; 2025 Metaba Platform. Built with Nx, Nest.js, and Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
