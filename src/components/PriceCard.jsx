import React from 'react';

export default function PriceCard({ text, price }) {
  return (
    <div className='mx-2 p-8 bg-gray-50 rounded-2xl text-center'>
      <p>{text}</p>
      <p className='font-bold'>{price.toLocaleString()}</p>
    </div>
  );
}
