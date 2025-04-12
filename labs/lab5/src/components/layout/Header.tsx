import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-[#131921] text-white'>
      <div className='flex items-center p-2 flex-grow'>
        {/* Logo */}
        <Link
          href='/'
          className='mt-2 flex items-center flex-grow sm:flex-grow-0'
        >
          <Image
            src='/amazon-logo.png'
            alt='Amazon Logo'
            width={100}
            height={40}
            className='cursor-pointer'
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Delivery Location */}
        <div className='hidden sm:flex items-center text-white mx-6 whitespace-nowrap'>
          <div className='flex flex-col'>
            <span className='text-xs text-gray-300'>Deliver to Makoto</span>
            <span className='text-sm font-bold'>Toronto M9V 1P</span>
          </div>
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded'>
          <select className='h-full p-2 bg-gray-100 rounded-l text-black'>
            <option>All</option>
          </select>
          <input
            className='h-full w-6 flex-grow p-2 focus:outline-none text-black'
            type='text'
          />
          <div className='h-full p-4 bg-yellow-400 hover:bg-yellow-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex items-center mx-6 space-x-6 whitespace-nowrap text-sm'>
          <div className='link'>
            <p>EN</p>
          </div>

          <div className='link'>
            <p className='text-xs'>Hello, Makoto</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link'>
            <p className='text-xs'>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              0
            </span>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Cart
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
