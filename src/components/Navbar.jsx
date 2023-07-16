import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useUser } from '../contexts/UserContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, setUser, login, logout } = useUser();
  const handleLogIn = async () => {
    login().then(setUser);
  };
  const handleLogOut = () => {
    logout().then(setUser);
  };

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
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && <User user={user} />}
        {user ? (
          <Button text='LogOut' onClick={handleLogOut} />
        ) : (
          <Button text='LogIn' onClick={handleLogIn} />
        )}
      </nav>
    </header>
  );
}
