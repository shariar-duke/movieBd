import React from 'react'
import { getImgUrl } from "../../utils/cine-utility";
export default function MovieDetailsModal({movie , setShowModal }) {
  const imgUrl = getImgUrl(movie?.cover);
  return (
    <div className='bg-black bg-opacity-30 z-10  fixed inset-0 flex items-center justify-center  text-white'>
        <div className='grid lg:grid-cols-[3fr_1.5fr] max-w-[700px] h-[300px] bg-[#12141D] rounded-lg'>
            <div className='p-[30px]  text-white'>
                <h1 className='text-3xl font-extrabold '>{movie.title}</h1>
                <p className='mt-1 text-sm text-[#9fa0a4]'>{movie.genre}</p>
                <p className='mt-1'>{movie.description}</p>

                <div className='flex justify-between mt-10 gap-4'>
                    <button className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] w-full'>${movie.price} | Add to Cart</button>
                    <button onClick={()=> setShowModal(false)} className='w-full py-2 px-5 flex rounded-lg items-center justify-center border border-[#74766F] font-semibold text-sm '>Cancel</button>
                </div>
            </div>

            <div>
            <img
              src={imgUrl}
              alt="movie"
              className="w-full object-cover h-[300px] rounded-lg"
            />
            </div>
        </div>
    </div>
  )
}
