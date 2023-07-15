import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../api/imgUploader';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
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
    uploadImage(file).then(url => console.log(url));
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt={file.name} />}
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
        <Button text='제품 등록하기' onClick={handleSubmit} />
      </form>
    </section>
  );
}
