import * as React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../utils';
import { Button } from './button';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

interface NavigationItem {
  title: string;
  href?: string;
  description?: string;
  items?: NavigationItem[];
}

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  navigationItems?: NavigationItem[];
  showThemeToggle?: boolean;
  variant?: 'default' | 'sticky' | 'transparent';
}

const defaultNavigationItems: NavigationItem[] = [
  {
    title: 'Features',
    href: '#features',
    description: 'Explore the platform features',
  },
  {
    title: 'Documentation',
    href: '#docs',
    description: 'Get started with our documentation',
  },
  {
    title: 'Components',
    items: [
      {
        title: 'UI Components',
        href: '#components',
        description: 'Reusable UI components built with React',
      },
      {
        title: 'Layout Components',
        href: '#layouts',
        description: 'Layout components for page structure',
      },
      {
        title: 'Form Components',
        href: '#forms',
        description: 'Form components with validation',
      },
    ],
  },
];

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      navigationItems = defaultNavigationItems,
      showThemeToggle = true,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    const headerVariants = {
      default:
        'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm',
      sticky:
        'sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md',
      transparent:
        'absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent',
    };

    return (
      <header
        ref={ref}
        className={cn(headerVariants[variant], className)}
        {...props}
      >
        <div className="container flex h-10 items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subItem.title}
                              href={subItem.href || '#'}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      href={item.href || '#'}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Theme Toggle */}
            {showThemeToggle && <ThemeToggle />}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="default" className="md:hidden">
                  <Menu className="h-4 w-4" strokeWidth={2} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate through the platform
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium leading-none">{item.title}</h4>
                      {item.items ? (
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href || '#'}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={item.href || '#'}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.description || 'Navigate to ' + item.title}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = 'Header';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';

export { Header, type HeaderProps, type NavigationItem };
