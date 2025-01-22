// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import ErrorBoundary from '@/app/components/ErrorBoundary';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mi App',
  description: 'Aplicación Next.js con App Router y Error Boundary',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        
      </body>
    </html>
  );
}
