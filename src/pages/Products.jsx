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
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {products.length > 0 &&
        products.map(product => <ProductCard key={product.id} product={product} />)}
    </ul>
  );
}
