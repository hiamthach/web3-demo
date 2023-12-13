'use client';

import ConnectBtn from '@/components/shared/ConnectBtn';

export default function HomeHero() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center bg-pattern-lg bg-transparent bg-top"
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
    </section>
  );
}
