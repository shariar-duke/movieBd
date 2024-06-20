import React from 'react'
import checkout from "../../assets/icons/checkout.svg"

export default function CartDetails({setShowCart}) {
  return (
    <div className='bg-black/60   z-10  fixed inset-0 flex items-center justify-center  text-white' >
         <div className='w-[600px] max-h-[400px] overflow-y-auto  bg-[#12141D] rounded-lg p-[40px] flex flex-col gap-[10px]'>
            <h2 className='text-[40px] font-extrabold'>Your Carts</h2>
            <div>
                <p className='text-24px font-bold'>Your Cart Data is Empty</p>
            </div>

            <div className='flex w-full justify-end'>
                 <div className='flex gap-[16px]'>
                    <button className='p-[8px] flex gap-[6px] text-sm font-semibold bg-primary rounded-md justify-center w-[100px]'>
                        <img className ="mt-[2px]"src={checkout} alt="checkout" height={14} width={14}/>
                        Checkout</button>
                    <button onClick={()=> setShowCart(false)} className='p-[8px] text-sm font-semibold rounded-md border border-[#74766F] w-[100px]'>Cancel</button>
                 </div>
            </div>
         </div>
    </div>
  )
}
