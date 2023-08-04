import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='mt-28 p-8 py-10 bg-black text-[#9b9b9b] text-sm'>
      <Link to='/'>
        <img className='w-32' src='/img/logo.svg' alt='logo' />
      </Link>
      <div className='my-8'>
        <p>
          서울특별시 강남구 도산대로 318 (SB타워) 14층 1,2호&nbsp;&nbsp;&#124;&nbsp;&nbsp;대표이사 :
          챈카키데렉
          <br />
          사업자등록번호 : 123-45-67890&nbsp;&nbsp;&#124;&nbsp;&nbsp;사업자정보확인 통신판매업신고 :
          2013-서울마포-1212호
          <br />
          개인정보 관리책임자 : 이태영
        </p>
      </div>
      <p className='mt-4 font-light'>
        본 사이트의 상품이미지 저작권은 닥터마틴에 있으며, 내용의 무단복제를 금합니다.
        <br />
        콘텐츠산업진흥법에 의한 콘텐츠보호안내
      </p>
    </footer>
  );
}
