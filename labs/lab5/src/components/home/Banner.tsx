import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='relative bg-pink-100'>
      <div className='relative w-full h-[300px]'>
        <Image
          src='/mothers-day-banner.jpg'
          alt="Mother's Day Gifts under $100"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className='absolute top-10 left-10 text-black'>
          <h2 className='text-2xl font-bold mb-2'>
            Mother&apos;s Day is May 11
          </h2>
          <h1 className='text-4xl font-bold mb-4'>
            Mother&apos;s Day
            <br />
            gifts under $100
          </h1>
          <Link
            href='/mothers-day'
            className='inline-block bg-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors'
          >
            Shop now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
