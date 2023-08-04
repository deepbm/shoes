import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbTrashFilled } from 'react-icons/tb';
import useCarts from '../hooks/useCarts';

const ICON_CLASS = 'cursor-pointer transition-all hover:text-brand hover:scale-105';

export default function CartItem({
  product,
  product: { id, image, title, price, size, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCarts();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between items-center py-6 border-t'>
      <img className='w-20 md:w-36' src={image} alt={title} />
      <div className='flex-1 flex justify-between ml-8'>
        <div className='basis-3/5'>
          <p className='mb-4 text-[#9b9b9b]'>닥터마틴</p>
          <p className='text-lg font-bold'>{title}</p>
          <p className='mb-8 text-[#9b9b9b]'>{size}</p>
          <p className='text-sm'>{price.toLocaleString()}원</p>
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-12 py-1 px-4 border border-gray-100 rounded text-md'>
            <AiOutlineMinus className={ICON_CLASS} onClick={handleMinus} />
            <span>{quantity}</span>
            <AiOutlinePlus className={ICON_CLASS} onClick={handlePlus} />
          </div>
          <TbTrashFilled className={`text-xl ${ICON_CLASS}`} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
