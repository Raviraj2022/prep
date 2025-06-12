import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.cart.length);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">MyShop</Link>
      <Link to="/cart">🛒 Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;
