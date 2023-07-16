import React from 'react';

export default function ProductCard({ product: { title, price, image } }) {
  return (
    <li className='rounded-lg overflow-hidden shadow-md cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='p-2'>
        <h3>{title}</h3>
        <p className='text-sm text-gray-500'>&#8361; {price.toLocaleString()}</p>
      </div>
    </li>
  );
}
