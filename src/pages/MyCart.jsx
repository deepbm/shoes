import React from 'react';
import CartItem from '../components/CartItem';
import useCarts from '../hooks/useCarts';
import { Link } from 'react-router-dom';

const DELIVERY_FEE = 3000;

export default function MyCart() {
  const {
    cartsQuery: { isLoading, error, data: carts },
  } = useCarts();

  const hasCarts = carts && carts.length > 0;
  const totalPrice = hasCarts && carts.reduce((a, b) => a + parseInt(b.price) * b.quantity, 0);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className='mx-auto w-10/12 px-8'>
      <h2 className='my-4 text-2xl font-bold'>내 장바구니</h2>
      {!hasCarts && <p>장바구니가 비어있습니다.</p>}
      {hasCarts && (
        <>
          <ul>
            {carts.map(cart => (
              <CartItem key={cart.id} product={cart} />
            ))}
          </ul>
          <div className='flex my-12 border'>
            <div className='basis-4/5 p-4 px-12'>
              <div className='flex justify-between py-6 border-b'>
                <p className='font-bold'>주문금액</p>
                <p className='text-sm'>{totalPrice.toLocaleString()}원</p>
              </div>
              <div className='flex justify-between py-6'>
                <p className='font-bold'>배송료</p>
                <p className='text-sm'>{DELIVERY_FEE.toLocaleString()}원</p>
              </div>
            </div>
            <div className='basis-1/5 flex flex-col justify-center items-left pl-10 bg-[#f4f4f4]'>
              <p className='font-bold'>결제 예정 금액</p>
              <p className='text-sm text-gray-800'>주문금액 &#43; 배송료</p>
              <p className='mt-4 text-red-600 text-xl font-bold'>
                {(totalPrice + DELIVERY_FEE).toLocaleString()}원
              </p>
            </div>
          </div>
          <div className='text-center'>
            <Link to='/'>
              <button className='mr-4 py-2.5 px-6 border hover:border-black rounded-sm bg-white'>
                홈으로 이동
              </button>
            </Link>
            <button className='bg-brand py-2.5 px-8 rounded-sm hover:bg-black hover:text-white'>
              주문하기
            </button>
          </div>
        </>
      )}
    </section>
  );
}
