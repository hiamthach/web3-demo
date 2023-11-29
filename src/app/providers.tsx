'use client';

import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { Toaster } from 'react-hot-toast';

import { metaMask, hooks as metaMaskHooks } from '@/config/connectors/metaMask';
import { TOAST_DEFAULT_OPTIONS } from '@/config/helpers/toast.helper';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toaster {...TOAST_DEFAULT_OPTIONS} />
    </>
  );
};

export default AppProvider;
