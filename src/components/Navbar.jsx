import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center'>
      <Link to='/'>
        <img className='w-32' src='/img/logo.svg' alt='logo' />
      </Link>
      <nav className='flex items-center gap-4'>
        <Link to='/products'>Products</Link>
        <Link to='/products/new'>
          <BsFillPencilFill />
        </Link>
        <Link to='/carts'>Carts</Link>
        <button>LogIn</button>
      </nav>
    </header>
  );
}
