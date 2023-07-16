import React from 'react';

export default function Banner({ src, text }) {
  return (
    <div className='my-4'>
      <img className='w-full' src={src} alt={text} />
    </div>
  );
}
