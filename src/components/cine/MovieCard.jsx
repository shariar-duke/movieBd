import React from 'react'
import MovieRating from './MovieRating'
import { getImgUrl } from '../../utils/cine-utility'
export default function MovieCard({movie}) {
    const imgUrl = getImgUrl(movie?.cover)
  return (
    <figure className='p-4 border border-white/10 shadow-sm  rounded-xl cursor-pointer'>
      <div>
        <div  className='relative '>
        <img src={imgUrl} alt="movie" className='w-full object-cover h-[500px]'/>
        </div>

        <figcaption className='pt-4'>
            <h3 className='text-xl mb-1 text-white font-bold '>{movie.title}</h3>
            <p className='text-[#575A6E] text-sm mb-2'>{movie.genre}</p>
            <MovieRating rating ={movie.rating}/>
            <a href="#" className='bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm'>
                <span> ${movie.price} | Add to Cart </span>
            </a>
        </figcaption>
      </div>
    </figure>
  )
}