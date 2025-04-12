import Layout from '@/components/layout/Layout';
import Banner from '@/components/home/Banner';
import CategoryCard from '@/components/home/CategoryCard';
import ProductCard from '@/components/home/ProductCard';

const products = [
  {
    id: '1',
    title: 'ワイヤレスイヤホン',
    price: 19999,
    image: '/images/electronics.jpg',
    category: 'Electronics',
  },
  {
    id: '2',
    title: 'スキンケアセット',
    price: 12800,
    image: '/images/beauty.jpg',
    category: 'Beauty',
  },
  {
    id: '3',
    title: '多機能調理器',
    price: 24800,
    image: '/images/home-kitchen.jpg',
    category: 'Home & Kitchen',
  },
];

export default function Home() {
  return (
    <Layout>
      <Banner />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
        <CategoryCard
          title='Beauty'
          imageSrc='/images/beauty.jpg'
          productId='2'
        />
        <CategoryCard
          title='Electronics'
          imageSrc='/images/electronics.jpg'
          productId='1'
        />
        <CategoryCard
          title='Home & Kitchen'
          imageSrc='/images/home-kitchen.jpg'
          productId='3'
        />
        <CategoryCard
          title='Fashion'
          imageSrc='/images/fashion.jpg'
          productId='1'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
        <CategoryCard
          title='Women'
          imageSrc='/images/women.jpg'
          productId='2'
        />
        <CategoryCard title='Men' imageSrc='/images/men.jpg' productId='1' />
        <CategoryCard
          title='Premium Brands'
          imageSrc='/images/premium.jpg'
          productId='3'
        />
        <CategoryCard
          title='All fashion'
          imageSrc='/images/all-fashion.jpg'
          productId='2'
        />
      </div>

      {/* 商品一覧 */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>おすすめ商品</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
