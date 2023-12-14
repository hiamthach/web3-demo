'use client';

import Btn from '@/components/shared/Btn';
import Loader from '@/components/shared/Loader';

import { CONTRACT_ABI } from '@/config/constants/contract.const';
import { CONTRACT_ADDRESS } from '@/config/constants/env.const';

import { parseEther } from 'ethers';
import { useContractWrite, useSendTransaction } from 'wagmi';

export default function HomeHero() {
  const { write, isLoading } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'transfer',
  });

  const { write: withdraw, isLoading: isWithdrawing } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'withdraw',
  });

  const { sendTransaction } = useSendTransaction({
    to: '0xD6ffBcBED20d5db67A47C83768F504141e7320D3',
    value: parseEther('0.1'),
  });

  return (
    <section
      className="flex flex-col justify-center items-center text-center"
      style={{
        minHeight: 'calc(100vh - 100px)',
      }}
    >
      <h1 className="max-w-4xl text-white text-display-2 leading-tight mb-4">
        Buy, sell and trade crypto like never before
      </h1>
      <p className="max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit elit, a, eget tristique
        metus, turpis vestibulum, pretium donec cras at sit et, etiam ac venenatis ut eu
        eu eu sollicitudin.
      </p>

      <div className="flex gap-4 items-center justify-center mt-10 mb-32">
        {isLoading ? (
          <Loader />
        ) : (
          <Btn
            onClick={() => {
              const amount = parseEther('0.1');
              console.debug('Write Transaction: ', amount);
              // write({
              //   args: ['0x0A97F7c41bE3c9553D16A4aC3bF34b4a81852A56', amount],
              //   value: amount,
              //   data: '0x0A97F7c41bE3c9553D16A4aC3bF34b4a81852A56',
              // });
              sendTransaction();
            }}
          >
            Get Started
          </Btn>
        )}
        {isWithdrawing ? (
          <Loader />
        ) : (
          <Btn
            variant="tertiary"
            onClick={() => {
              withdraw();
            }}
          >
            Learn More
          </Btn>
        )}
      </div>
    </section>
  );
}
