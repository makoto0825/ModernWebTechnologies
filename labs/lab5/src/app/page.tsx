import Layout from '@/components/layout/Layout';
import Banner from '@/components/home/Banner';
import CategoryCard from '@/components/home/CategoryCard';

export default function Home() {
  return (
    <Layout>
      <Banner />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
        <CategoryCard
          title='Beauty'
          imageSrc='/images/beauty.jpg'
          link='/beauty'
        />
        <CategoryCard
          title='Electronics'
          imageSrc='/images/electronics.jpg'
          link='/electronics'
        />
        <CategoryCard
          title='Home & Kitchen'
          imageSrc='/images/home-kitchen.jpg'
          link='/home-kitchen'
        />
        <CategoryCard
          title='Fashion'
          imageSrc='/images/fashion.jpg'
          link='/fashion'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
        <CategoryCard
          title='Women'
          imageSrc='/images/women.jpg'
          link='/women'
        />
        <CategoryCard title='Men' imageSrc='/images/men.jpg' link='/men' />
        <CategoryCard
          title='Premium Brands'
          imageSrc='/images/premium.jpg'
          link='/premium'
        />
        <CategoryCard
          title='All fashion'
          imageSrc='/images/all-fashion.jpg'
          link='/fashion'
        />
      </div>
    </Layout>
  );
}
