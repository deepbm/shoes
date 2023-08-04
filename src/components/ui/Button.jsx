import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand py-3 px-4 rounded-sm hover:bg-black hover:text-white'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
