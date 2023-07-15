import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return <img className='rounded-full w-10 h-10' src={photoURL} alt={displayName} />;
}
