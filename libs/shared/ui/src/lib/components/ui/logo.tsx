import * as React from 'react';
import { cn } from '../../utils';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-6 w-auto',
      md: 'h-8 w-auto',
      lg: 'h-12 w-auto',
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center space-x-2', className)}
        {...props}
      >
        <div
          className={cn('font-bold text-2xl text-primary', sizeClasses[size])}
        >
          Metaba
        </div>
      </div>
    );
  }
);

Logo.displayName = 'Logo';

export { Logo };
