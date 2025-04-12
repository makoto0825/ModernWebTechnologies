import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  category: string;
}

type ProductsType = {
  [key: string]: Product;
};

// 商品データ（実際のアプリケーションではAPIやデータベースから取得）
const products: ProductsType = {
  '1': {
    id: '1',
    title: 'Wireless Earbuds',
    price: 19999,
    description:
      'Premium wireless earbuds featuring the latest noise-cancelling technology. Enjoy up to 24 hours of continuous playback with water resistance capabilities.',
    features: [
      'Advanced Noise Cancellation',
      'Bluetooth 5.2 Compatible',
      'IPX4 Water Resistant',
      'Touch Sensor Controls',
      'Fast Charging Support',
    ],
    images: ['/images/electronics.jpg'],
    category: 'Electronics',
  },
  '2': {
    id: '2',
    title: 'Skincare Set',
    price: 12800,
    description:
      'A 5-piece skincare set made with natural ingredients. Safe for sensitive skin and dermatologically tested.',
    features: [
      'All Natural Formula',
      'Deep Hydration',
      'Anti-aging Benefits',
      'Sensitive Skin Safe',
      'Made in Japan',
    ],
    images: ['/images/beauty.jpg'],
    category: 'Beauty',
  },
  '3': {
    id: '3',
    title: 'Multi-function Cooker',
    price: 24800,
    description:
      'Versatile cooking appliance with over 10 cooking modes. Perfect for quick meals and gourmet cooking alike.',
    features: [
      '10 Cooking Modes',
      '6L Capacity',
      'Timer Function',
      'Auto Keep Warm',
      'Recipe Book Included',
    ],
    images: ['/images/home-kitchen.jpg'],
    category: 'Home & Kitchen',
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id] as Product | undefined;

  if (!product) {
    return <div className='text-center p-8'>Product not found</div>;
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Product Image */}
        <div className='relative h-96 bg-gray-100 rounded-lg overflow-hidden'>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* Product Information */}
        <div className='flex flex-col'>
          <div className='mb-4'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              {product.title}
            </h1>
            <p className='text-sm text-gray-500'>{product.category}</p>
          </div>

          <div className='mb-6'>
            <p className='text-2xl font-bold text-gray-900'>
              ¥{product.price.toLocaleString()}
            </p>
          </div>

          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Description</h2>
            <p className='text-gray-600'>{product.description}</p>
          </div>

          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>Features</h2>
            <ul className='list-disc list-inside space-y-1'>
              {product.features.map((feature, index) => (
                <li key={index} className='text-gray-600'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-auto'>
            <button className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
