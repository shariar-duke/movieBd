import React from 'react'

export default function MovieDetailsModal() {
  return (
    <div className='bg-black bg-opacity-70  fixed inset-0 flex items-center justify-center  text-white'>
        <div className='grid lg:grid-cols-[3fr_1fr] max-w-[700px] h-[350px] bg-[#12141D] rounded-lg'>
            <div className='p-[30px]  text-white'>
                <h1 className='text-3xl font-extrabold '>Once Upon a Time ..in HollyWood</h1>
                <p className='mt-1 text-sm text-[#9fa0a4]'>Comedy/drama</p>
                <p className='mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, voluptas aliquam, harum impedit aperiam maxime saepe ea inventore, quam delectus iure animi placeat mollitia amet. </p>

                <div className='flex justify-between mt-6 gap-4'>
                    <button className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] w-full'>Add to Cart</button>
                    <button className='w-full py-2 px-5 flex rounded-lg items-center justify-center border border-[#74766F] font-semibold text-sm '>Cancel</button>
                </div>
            </div>

            <div>Img</div>
        </div>
    </div>
  )
}
