import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Fashion from '../logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const {cart} = useSelector((state)=> state);
  return (
    <div className=''>
      <nav className='flex justify-between items-center h-[5.2rem] max-w-6xl mx-auto'>

        <NavLink to="/" >
          <div className='ml-6'>
            <img src={Fashion} alt='nope' className='h-9 md:h-14'   />
          </div>
        </NavLink>
        
        <div className='flex flex-row items-center gap-x-3 md:gap-x-7 mr-6 text-slate-100 -tracking-tighter font-medium'>
        <NavLink to="/">
        <p className="text-[0.9rem] leading-5 md:text-xl hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">Home</p>
        </NavLink>
          {/* icons */}
          <NavLink to="/cart" >
            <div className="relative">
            <FaShoppingCart className='text-xl md:text-2xl hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
            {
              cart.length > 0 &&
              <span className="absolute -top-3 -right-4 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
            </div> 
          </NavLink>
          
        </div>
      </nav>
    </div>


  )
}

