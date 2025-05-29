import './global.css';

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
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
