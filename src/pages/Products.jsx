import React from 'react';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className='mt-4'>
      <h2 className='my-4 ml-8 text-2xl font-bold'>제품 전체보기</h2>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-10 p-4'>
        {products.length > 0 &&
          products.map(product => <ProductCard key={product.id} product={product} />)}
      </ul>
    </section>
  );
}
