import React from 'react';

import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const Btn = ({ variant = 'primary', size, children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        'text-center text-white text-lg font-semibold cursor-pointer px-6 py-7 border-none outline-none rounded-[6px] transition-all hover:-translate-y-1',
        variant === 'primary' && 'bg-btn-gradient hover:shadow-btn-dark',
        variant === 'secondary' && 'bg-white hover:shadow-white-light',
        variant === 'tertiary' &&
          'bg-neutral-700 bg-opacity-90 hover:bg-white hover:text-neutral-800',
      )}
    >
      <div className={clsx(variant === 'secondary' && 'gradient-text')}>{children}</div>
    </button>
  );
};

export default Btn;
