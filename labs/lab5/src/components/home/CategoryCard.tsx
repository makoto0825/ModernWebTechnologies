import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  productId: string;
}

const CategoryCard = ({ title, imageSrc, productId }: CategoryCardProps) => {
  return (
    <div className='bg-white p-4 flex flex-col'>
      <h2 className='text-xl font-bold mb-4'>{title}</h2>
      <div className='relative h-[200px] mb-4'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <Link
        href={`/product/${productId}`}
        className='text-sm text-blue-500 hover:text-blue-600 hover:underline mt-auto'
      >
        Shop now
      </Link>
    </div>
  );
};

export default CategoryCard;
