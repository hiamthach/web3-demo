import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="text-3xl no-underline font-bold gradient-text hover:opacity-60 transition-opacity duration-300"
    >
      Web3Demo
    </Link>
  );
};

export default Logo;
