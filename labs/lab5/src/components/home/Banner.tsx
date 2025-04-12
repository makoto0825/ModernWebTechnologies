'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const banners = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentBanner(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating]
  );

  const nextBanner = useCallback(() => {
    const newIndex = (currentBanner + 1) % banners.length;
    handleTransition(newIndex);
  }, [currentBanner, handleTransition]);

  const prevBanner = useCallback(() => {
    const newIndex = (currentBanner - 1 + banners.length) % banners.length;
    handleTransition(newIndex);
  }, [currentBanner, handleTransition]);

  useEffect(() => {
    const timer = setInterval(nextBanner, 5000);
    return () => clearInterval(timer);
  }, [nextBanner]);

  return (
    <div className='relative bg-pink-100 group'>
      {/* バナーコンテナ */}
      <div className='relative w-full h-[300px] overflow-hidden'>
        <div
          className='absolute flex w-[300%] h-full transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${
              (currentBanner * 100) / banners.length
            }%)`,
          }}
        >
          {/* バナーリスト */}
          {banners.map((banner, index) => (
            <div
              key={index}
              className='relative w-full h-full'
              style={{ width: `${100 / banners.length}%` }}
            >
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 0%' }}
                priority={index === 0}
                sizes='100vw'
                quality={90}
              />
            </div>
          ))}
        </div>

        {/* 左ボタン */}
        <button
          onClick={prevBanner}
          className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 z-10'
          aria-label='Previous banner'
          disabled={isAnimating}
        >
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
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>

        {/* 右ボタン */}
        <button
          onClick={nextBanner}
          className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full
                   opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/50 z-10'
          aria-label='Next banner'
          disabled={isAnimating}
        >
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
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>

        {/* インジケーター */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTransition(index)}
              className={`w-2 h-2 rounded-full transition-all
                ${
                  currentBanner === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              aria-label={`Go to banner ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
