import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, product: { id, title, price, image } }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <li
      className='rounded-lg overflow-hidden shadow-md cursor-pointer transition-all hover:scale-105'
      onClick={handleClick}
    >
      <img className='w-full' src={image} alt={title} />
      <div className='p-2'>
        <h3>{title}</h3>
        <p className='text-sm text-gray-500'>&#8361; {price.toLocaleString()}</p>
      </div>
    </li>
  );
}
