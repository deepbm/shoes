import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Navbar() {
  const [user, setUser] = useState();
  const handleLogIn = async () => {
    login().then(setUser);
  };
  const handleLogOut = () => {
    logout().then(setUser);
  };
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        {user ? (
          <button onClick={handleLogOut}>LogOut</button>
        ) : (
          <button onClick={handleLogIn}>LogIn</button>
        )}
      </nav>
    </header>
  );
}
