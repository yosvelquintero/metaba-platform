import './global.css';
import { ThemeProvider } from '@metaba-platform/shared-ui';

export const metadata = {
  title: 'Metaba Platform - Modern Web Application Framework',
  description:
    'Metaba Platform is an Nx-managed monorepo with Nest.js backend API and Next.js frontend application, built for scalability and maintainability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
