'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { arbitrum, mainnet, sepolia } from 'viem/chains';
import { WagmiConfig } from 'wagmi';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '0e6567764ba109a872690da9709f7af8';

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3 Demo Modal',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Modal({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
