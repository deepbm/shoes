import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsCheck2All } from 'react-icons/bs';
import Button from '../components/ui/Button';
import useCarts from '../hooks/useCarts';

export default function ProductDetail() {
  const {
    state: {
      product: { id, title, image, price, description, category, size },
    },
  } = useLocation();
  const [selected, setSelected] = useState(size && size[0]);
  const [success, setSuccess] = useState();
  const { addOrUpdateItem } = useCarts();
  const handleAddCart = () => {
    const addedProduct = { id, title, image, price, size: selected, quantity: 1 };
    addOrUpdateItem.mutate(addedProduct, {
      onSuccess: () => {
        setSuccess('장바구니에 추가했습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <div className='mx-auto w-10/12'>
      <h2 className='my-4 ml-8 text-2xl font-bold'>제품 상세보기</h2>
      <p className='mt-4 mx-8 text-gray-500'>
        전체&nbsp;&nbsp;/&nbsp;&nbsp;<span className='font-bold'>{category}</span>
      </p>
      <section className='flex flex-col md:flex-row p-4'>
        <img className='basis-5/12 px-4 w-full max-w-xl' src={image} alt={title} />
        <div className='basis-7/12 flex flex-col w-full p-4'>
          <h2 className='pl-2 text-3xl font-bold'>{title}</h2>
          <p className='mb-8 py-2 pl-2 text-gray-500'>{description}</p>
          <select
            className='my-2 py-2 pl-4 outline-none border border-gray-100'
            onChange={e => setSelected(e.target.value)}
          >
            {size && size.map((value, index) => <option key={index}>{value}</option>)}
          </select>
          <div className='flex justify-between my-2 mb-6 pl-2'>
            <p className='font-bold'>주문금액</p>
            <p className='pb-2'>{price.toLocaleString()}원</p>
          </div>
          <Button
            text='장바구니 추가'
            onClick={handleAddCart}
            disabled={addOrUpdateItem.isLoading}
          />
          {success && (
            <div className='flex justify-end items-center gap-1 my-2'>
              <BsCheck2All className='text-xl font-bold' />
              <p>{success}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
