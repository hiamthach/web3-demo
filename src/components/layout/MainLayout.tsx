import React from 'react';

import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-neutral-800 text-neutral-300">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
