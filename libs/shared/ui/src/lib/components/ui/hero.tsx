import * as React from 'react';
import { cn } from '../../utils';
import { Button } from './button';

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      primaryAction,
      secondaryAction,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative flex min-h-[60vh] items-center justify-center px-6 py-24 text-center',
          className
        )}
        {...props}
      >
        <div className="max-w-4xl space-y-8">
          {subtitle && (
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              {primaryAction && (
                <Button
                  size="lg"
                  asChild={!!primaryAction.href}
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.href ? (
                    <a href={primaryAction.href}>{primaryAction.label}</a>
                  ) : (
                    primaryAction.label
                  )}
                </Button>
              )}

              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  asChild={!!secondaryAction.href}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.href ? (
                    <a href={secondaryAction.href}>{secondaryAction.label}</a>
                  ) : (
                    secondaryAction.label
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero };
