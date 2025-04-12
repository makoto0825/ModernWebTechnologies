import Image from 'next/image';

// 商品データ（実際のアプリケーションではAPIやデータベースから取得）
const products = {
  '1': {
    id: '1',
    title: 'ワイヤレスイヤホン',
    price: 19999,
    description:
      '最新のノイズキャンセリング技術を搭載したワイヤレスイヤホン。最大24時間の連続再生が可能で、防水機能も備えています。',
    features: [
      '高性能ノイズキャンセリング',
      'Bluetooth 5.2対応',
      'IPX4防水',
      'タッチセンサー搭載',
      '急速充電対応',
    ],
    images: ['/images/electronics.jpg'],
    category: 'Electronics',
  },
  '2': {
    id: '2',
    title: 'スキンケアセット',
    price: 12800,
    description:
      '自然由来の成分を使用した5点セットのスキンケア商品。敏感肌の方にも安心してお使いいただけます。',
    features: [
      '無添加処方',
      '保湿効果',
      'エイジングケア',
      '敏感肌対応',
      '日本製',
    ],
    images: ['/images/beauty.jpg'],
    category: 'Beauty',
  },
  '3': {
    id: '3',
    title: '多機能調理器',
    price: 24800,
    description:
      '10種類以上の調理モードを搭載した多機能調理器。時短調理から本格料理まで幅広く対応します。',
    features: [
      '10種類の調理モード',
      '大容量6L',
      'タイマー機能',
      '自動保温機能',
      'レシピブック付き',
    ],
    images: ['/images/home-kitchen.jpg'],
    category: 'Home & Kitchen',
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

  if (!product) {
    return <div className='text-center p-8'>商品が見つかりません</div>;
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* 商品画像 */}
        <div className='relative h-96 bg-gray-100 rounded-lg overflow-hidden'>
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* 商品情報 */}
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
            <h2 className='text-lg font-semibold mb-2'>商品説明</h2>
            <p className='text-gray-600'>{product.description}</p>
          </div>

          <div className='mb-6'>
            <h2 className='text-lg font-semibold mb-2'>特徴</h2>
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
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
