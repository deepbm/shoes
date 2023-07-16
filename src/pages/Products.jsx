import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/firebase';

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5, // 5분
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {products.length > 0 &&
        products.map(product => <ProductCard key={product.id} product={product} />)}
    </ul>
  );
}
