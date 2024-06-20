import React from "react";
import MovieRating from "./MovieRating";
import { getImgUrl } from "../../utils/cine-utility";
import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext } from "react"; 
import { MovieContext } from "../../context"; 
export default function MovieCard({ movie }) {
  const imgUrl = getImgUrl(movie?.cover);
  const [showModal, setShowModal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);

  console.log("The cartData is", cartData)

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    let found = cartData?.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCartData([...cartData, movie]);
    } else {
      console.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={movie} setShowModal={setShowModal} onCartAdd ={handleAddToCart} />
      )}
      <figure
        onClick={() => setShowModal(true)}
        className="p-4 border border-white/10 shadow-sm  rounded-xl cursor-pointer"
      >
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
              onClick={(e) => handleAddToCart(e, movie)}
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
