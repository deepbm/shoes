import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { getCart } from '../api/firebase';
import { useUser } from '../contexts/UserContext';

export default function CartStatus() {
  const { user } = useUser();
  const { data: carts } = useQuery({
    queryKey: ['carts', user],
    queryFn: () => getCart(user.uid),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className='relative'>
      <FaShoppingCart className='text-2xl' />
      {carts && carts.length > 0 && (
        <p className='absolute -right-2 -top-2 w-5 h-5 rounded-full bg-brand text-center text-sm'>
          {carts.length}
        </p>
      )}
    </div>
  );
}
