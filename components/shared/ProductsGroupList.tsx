'use client';
import { useIntersection } from 'react-use';

import { FunctionComponent } from 'react';
import { Title } from './Title';
import { cn } from '@/lib/utils';
import ProductCard from './ProductCard';
import React from 'react';
import { useCategoryStore } from '@/store/category';
interface ProductItem {
  id: number;
  name: string;
  imageUrl: string;
  items: { price: number }[];
}

interface ProductsGroupListProps {
  className?: string;
  title: string;
  items: ProductItem[];
  listClassName?: string;
  categoryId: number;
}

const ProductsGroupList: FunctionComponent<ProductsGroupListProps> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLElement | null>(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
