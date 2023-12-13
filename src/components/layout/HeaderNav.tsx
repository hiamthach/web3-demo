import Link from 'next/link';

const sidebars = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const HeaderNav = () => {
  return (
    <nav className="flex justify-center items-center gap-8 flex-1">
      {sidebars.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className="text-body-md text-white no-underline hover:underline"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderNav;
