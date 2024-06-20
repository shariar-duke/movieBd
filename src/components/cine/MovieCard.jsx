import React from "react";
import MovieRating from "./MovieRating";
import { getImgUrl } from "../../utils/cine-utility";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext } from "react"; // useContext hook ta nia aslm 
import { MovieContext } from "../../context"; // And MovieContext ta nia aslm 
export default function MovieCard({ movie }) {
  const imgUrl = getImgUrl(movie?.cover);
  const [showModal, setShowModal] = useState(false);
  
  // ekhn just ei hook er mohde amra context ta pass korlei oi context ta amader j j value return kore ta pabo 

  const {cartData, setCartData} = useContext(MovieContext)

  // function call. Function call hole age stopProgapation kore nite hbe 
  const handleAddToCart =(e , movie)=> 
  {
    e.stopPropagation()

    // ami chabo j ekta movie ekbarei jno ei cartData er mohde dhukuk 

    const found = cartData.find((item) => {
      return item.id === movie.id
    })

    if(!found) 
    {
      setCartData([...cartData, movie])
    } else 
    {
      console.error(`The movie ${movie.title} has been added to the cart already`)
    }
   
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={movie} setShowModal={setShowModal} />
      )}
      <figure onClick={()=> setShowModal(true)} className="p-4 border border-white/10 shadow-sm  rounded-xl cursor-pointer">
        <div>
          <div className="relative ">
            <img
              src={imgUrl}
              alt="movie"
              className="w-full object-cover h-[450px]"
            />
          </div>

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1 text-white font-bold ">
              {movie.title}
            </h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <MovieRating rating={movie.rating} />
            <a
            // ekhane onClick a ei funtion call holo jar modhe event ta pathano dorkar
              onClick={(e)=>handleAddToCart(e , movie)}
              href="#"
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            >
              <span> ${movie.price} | Add to Cart </span>
            </a>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
