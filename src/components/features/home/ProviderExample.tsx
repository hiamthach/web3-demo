'use client';

import { Web3ReactHooks, Web3ReactProvider, useWeb3React } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import React from 'react';

import { metaMask, hooks as metaMaskHooks } from '@/config/connectors/metaMask';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

function Child() {
  const { connector } = useWeb3React();
  console.log(`Priority Connector is:`, connector);
  return null;
}

export default function ProviderExample() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  );
}
