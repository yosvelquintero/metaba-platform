import * as React from 'react';
import { cn } from '../../utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Badge } from './badge';
import { Terminal, Play, Hammer, TestTube, Zap } from 'lucide-react';

interface Script {
  name: string;
  command: string;
  description: string;
  category: 'development' | 'build' | 'test' | 'deploy' | 'utility';
}

interface ScriptsProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  scripts?: Script[];
}

const defaultScripts: Script[] = [
  {
    name: 'Development',
    command: 'pnpm run dev:all',
    description: 'Start both applications in development mode with hot reload',
    category: 'development',
  },
  {
    name: 'Web App Dev',
    command: 'pnpm run dev:web-app',
    description: 'Start Next.js development server',
    category: 'development',
  },
  {
    name: 'API Dev',
    command: 'pnpm run dev:api-app',
    description: 'Start Nest.js development server',
    category: 'development',
  },
  {
    name: 'Build All',
    command: 'pnpm run build:all',
    description: 'Build all projects for development',
    category: 'build',
  },
  {
    name: 'Build Production',
    command: 'pnpm run build:all:prod',
    description: 'Build all projects for production',
    category: 'build',
  },
  {
    name: 'Test All',
    command: 'pnpm run test:all',
    description: 'Run tests for all projects',
    category: 'test',
  },
  {
    name: 'Lint All',
    command: 'pnpm run lint:all',
    description: 'Lint all projects',
    category: 'utility',
  },
  {
    name: 'Dependency Graph',
    command: 'pnpm run graph',
    description: 'View project dependency graph',
    category: 'utility',
  },
];

const categoryIcons = {
  development: Play,
  build: Hammer,
  test: TestTube,
  deploy: Zap,
  utility: Terminal,
};

const categoryColors = {
  development: 'bg-green-500/10 text-green-700 border-green-200',
  build: 'bg-blue-500/10 text-blue-700 border-blue-200',
  test: 'bg-yellow-500/10 text-yellow-700 border-yellow-200',
  deploy: 'bg-purple-500/10 text-purple-700 border-purple-200',
  utility: 'bg-gray-500/10 text-gray-700 border-gray-200',
};

const Scripts = React.forwardRef<HTMLElement, ScriptsProps>(
  (
    {
      className,
      title = 'Available Scripts',
      subtitle = 'Common commands to build, test, and run the platform',
      scripts = defaultScripts,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn('py-24 px-6 bg-muted/30', className)}
        {...props}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {scripts.map((script, index) => {
              const IconComponent = categoryIcons[script.category];
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-xs',
                          categoryColors[script.category]
                        )}
                      >
                        {script.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-6">
                      {script.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <code className="text-sm bg-muted px-2 py-1 rounded font-mono block mb-3">
                      {script.command}
                    </code>
                    <CardDescription className="text-sm leading-relaxed">
                      {script.description}
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

Scripts.displayName = 'Scripts';

export { Scripts, type Script };
