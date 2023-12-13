'use client';

import { Toaster } from 'react-hot-toast';

import { Web3Modal } from '@/components/shared/Web3Modal';

import { TOAST_DEFAULT_OPTIONS } from '@/config/helpers/toast.helper';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Web3Modal>
      {children}
      <Toaster {...TOAST_DEFAULT_OPTIONS} />
    </Web3Modal>
  );
};

export default AppProvider;
