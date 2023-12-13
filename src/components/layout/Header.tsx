import React from 'react';

import ConnectBtn from '@/components/shared/ConnectBtn';
import Logo from '@/components/shared/Logo';

const Header = () => {
  return (
    <header className="fluid-container py-8 flex justify-between items-center">
      <Logo />

      <ConnectBtn />
    </header>
  );
};

export default Header;
