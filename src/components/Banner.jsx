import React from 'react';

export default function Banner({ src, text }) {
  return (
    <div className='mb-4'>
      <img className='w-full' src={src} alt={text} />
    </div>
  );
}
