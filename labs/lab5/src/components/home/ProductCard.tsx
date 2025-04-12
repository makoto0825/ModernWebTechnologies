import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className='group'>
      <div className='bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
        <div className='relative h-48 mb-4 rounded-md overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
        <div>
          <p className='text-sm text-gray-500 mb-1'>{category}</p>
          <h3 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2'>
            {title}
          </h3>
          <p className='text-xl font-bold text-gray-900'>
            ¥{price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
