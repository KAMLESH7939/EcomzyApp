import React from 'react'

import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';
import { RiDeleteBin6Fill } from "react-icons/ri";
export default function CartItems({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  }
  return (
 
      <div className="w-full flex flex-row p-3 gap-3 items-center mt-2 mb-2 border-b-[3px] border-slate-500 mx-auto">
        <div className="w-[30%] md:w-[20%]">
          <img src={item.image} alt="nope" className="object-cover" />
        </div>


        <div className='flex flex-col w-full'>
          <div className=" self-start space-y-5 ml-2 md:ml-5">
            <h1 className="text-[0.9rem] md:text-[1rem] text-slate-700 font-semibold">{item.title}</h1>
            <p className="text-[0.7rem] leading-[1] md:leading-[1.5] text-gray-600  font-light md:font-medium "> {item.description.split(" ").slice(0,13).join(" ") + "..." } </p>
          </div>
          <div className="w-full flex flex-row  justify-between items-center flex-wrap mt-1 md:mt-10">
            <p className="text-green-600 font-bold text-lg ml-5">${item.price}</p>
            <div onClick={removeFromCart} className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3" >
            <RiDeleteBin6Fill className='text-xl' />
            </div>
          </div>
        </div>


      </div>
    
  )
}
