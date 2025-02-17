import React from 'react'
import Fashion from '../logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
// import {logoo} from '../Components/logo.png'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-white p-8 mt-2' >
      <div className='flex flex-col lg:flex-row justify-between text-sm mb-8 mx-4 lg:mx-10'>
        <div className='flex flex-col items-center lg:items-start mb-8 lg:mb-0'>
          <img src={Fashion} alt='nope' loading='lazy' className='h-16 mb-4' />
          <div className='flex space-x-4 mt-4 mb-4'>
            <a href='https://www.instagram.com'><FaInstagram className='h-[28px] w-[28px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in ' /> </a>
            <a href='https://www.facebook.com'> <FaFacebookF className='h-[28px] w-[28px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in' /></a>
            <a href='https://www.twitter.com'><FaTwitter className='h-[28px] w-[28px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in' /> </a>
            <a href='https://www.pinterest.com'><FaPinterest className='h-[28px] w-[28px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in' /> </a>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20'>
          <div className='flex-1'>
            <h4 className='border-b-2 border-green-400 pb-2 mb-4 text-center lg:text-left'>TRENDING</h4>
            <ul className='text-center lg:text-left'>
              <li className="mb-2"><a href="/" className="hover:underline">ACOSTA Collection</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Anime</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Oversized Shirt</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Oversized T-shirt</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Bottoms Women</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Bottoms Men</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Sweatshirts & Hoodies</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Jacket</a></li>
            </ul>
          </div>
          <div className='flex-1'>
            <h4 className='border-b-2 border-green-400 pb-2 mb-4 text-center lg:text-left'>INFO</h4>
            <ul className='text-center lg:text-left'>
              <li className="mb-2"><a href="/" className="hover:underline">Stores</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Return / Exchange – T&C</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Business</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="/" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-green-400 pt-8 mt-8 mx-4 lg:mx-10'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='text-center lg:text-left mb-4 lg:mb-0'>
            <a href='/' className='block mb-2 hover:underline'>Download Our App</a>
            <a href='/' className='hover:underline'>Stores Near Me</a>
          </div>
          <div className='flex space-x-4 flex-wrap'>
            <FaCcVisa className='h-[38px] w-[38px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
            <FaCcMastercard className='h-[38px] w-[38px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
            <FaCcPaypal className='h-[38px] w-[38px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
            <FaGooglePay className='h-[46px] w-[46px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
            <FaApplePay className='h-[46px] w-[46px] hover:text-green-400 cursor-pointer duration-300 transition-all ease-in'/>
          </div>
        </div>
        <div className='text-center mt-8 '>
             <p className='font-poppins text-[0.8rem]'>© Ecomzy 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
