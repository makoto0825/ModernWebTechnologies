import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className='flex items-center space-x-3 p-2 pl-6 bg-[#232f3e] text-white text-sm'>
      <div className='flex items-center'>
        <p className='link flex items-center'>
          <span className='mr-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
          All
        </p>
      </div>

      <div className='flex items-center space-x-4'>
        <Link href='/deals' className='link'>
          Deals Store
        </Link>
        <Link href='/buy-again' className='link'>
          Buy Again
        </Link>
        <Link href='/business' className='link'>
          Amazon Business
        </Link>
        <Link href='/kindle-books' className='link'>
          Kindle Books
        </Link>
        <Link href='/browsing-history' className='link'>
          Browsing History
        </Link>
        <Link href='/makoto-store' className='link'>
          Makoto&apos;s Store
        </Link>
        <Link href='/best-sellers' className='link'>
          Best Sellers
        </Link>
        <Link href='/books' className='link'>
          Books
        </Link>
        <Link href='/registry' className='link'>
          Registry
        </Link>
        <Link href='/gift-ideas' className='link'>
          Gift Ideas
        </Link>
        <Link href='/customer-service' className='link'>
          Customer Service
        </Link>
        <Link href='/new-releases' className='link'>
          New Releases
        </Link>
        <Link href='/' className='link'>
          Home
        </Link>
      </div>

      <div className='ml-auto'>
        <Link href='/watch-now' className='link text-white'>
          G20 - Watch now
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
