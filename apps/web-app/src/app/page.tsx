import { Logo, Hero, Features, Scripts } from '@metaba-platform/shared-ui';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#scripts"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Scripts
            </a>
            <a
              href="#docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </a>
          </nav>
        </div>
      </header>

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
                    pnpm run dev:all
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
