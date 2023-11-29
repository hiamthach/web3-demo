import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import MainLayout from '@/components/layout/MainLayout';

import AppProvider from './providers';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web3 Demo',
  description: 'Web3 Demo',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
