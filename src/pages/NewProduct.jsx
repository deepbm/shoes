import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/imgUploader';
import useProducts from '../hooks/useProducts';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();
  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    uploadImage(file) //
      .then(url => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('성공적으로 제품을 추가하였습니다.');
              setTimeout(() => {
                setSuccess(null);
              }, 3000);
            },
          }
        );
      });
  };
  return (
    <section>
      <h2 className='my-4 text-2xl font-bold'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img className='mx-auto mb-2 w-96' src={URL.createObjectURL(file)} alt={file.name} />
      )}
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type='file' accept='image/*' name='file' required onChange={handleChange} />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='size'
          value={product.size ?? ''}
          placeholder='사이즈(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />
        <Button
          text={addProduct.isLoading ? '업로드 중...' : '제품 등록하기'}
          onClick={handleSubmit}
          disabled={addProduct.isLoading}
        />
      </form>
    </section>
  );
}
