import * as React from 'react';
import { cn } from '../../utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Server, Globe, Zap, Code, Database, Layers } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeaturesProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: 'Backend API',
    description:
      'Robust Nest.js backend API providing server-side functionality with modern architecture patterns.',
    icon: Server,
  },
  {
    title: 'Frontend Web App',
    description:
      'Modern Next.js frontend application delivering exceptional user experiences with React.',
    icon: Globe,
  },
  {
    title: 'Nx Monorepo',
    description:
      'Powerful Nx tooling for efficient development, testing, and deployment workflows.',
    icon: Layers,
  },
  {
    title: 'TypeScript',
    description:
      'Full TypeScript support across the entire platform for type safety and better developer experience.',
    icon: Code,
  },
  {
    title: 'Scalable Architecture',
    description:
      'Built with scalability and maintainability in mind, ready for enterprise-level applications.',
    icon: Zap,
  },
  {
    title: 'Development Ready',
    description:
      'Pre-configured development environment with hot reload, testing, and deployment scripts.',
    icon: Database,
  },
];

const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  (
    {
      className,
      title = 'Platform Features',
      subtitle = 'Everything you need to build modern web applications',
      features = defaultFeatures,
      ...props
    },
    ref
  ) => {
    return (
      <section ref={ref} className={cn('py-24 px-6', className)} {...props}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
);

Features.displayName = 'Features';

export { Features, type Feature };
