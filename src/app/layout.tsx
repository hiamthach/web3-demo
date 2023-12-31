import type { Metadata } from 'next';
import { Onest } from 'next/font/google';

import MainLayout from '@/components/layout/MainLayout';

import AppProvider from './providers';

import '@/styles/globals.css';

const sans = Onest({
  subsets: ['latin'],
  weight: ['100', '200', '300', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Web3 Demo',
  description: 'Web3 Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
