import { Container } from '@/components/shared/Container';
import Filters from '@/components/shared/Filters';
import ProductsGroupList from '@/components/shared/ProductsGroupList';
import { Title } from '@/components/shared/Title';
import TopBar from '@/components/shared/Top-Bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Усі піци" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* филтрация  */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* список товаров   */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },

                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },{
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp'
                  },
                ]}
                categoryId={1}
              />
               <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },

                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:
                      'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp',
                  },{
                    id: 1,
                    name: 'Чизбургер пицца',
                    price: 500,
                    items: [{ price: 500 }],
                    imageUrl:'https://pizza.od.ua/upload/resize_cache/webp/iblock/e12/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/zhr2xux5uyy01oqph7fv1k6flracmlcb.webp'
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
