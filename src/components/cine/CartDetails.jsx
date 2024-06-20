import React from "react";
import checkout from "../../assets/icons/checkout.svg";
import { getImgUrl } from "../../utils/cine-utility";
import { useContext } from "react";
import { MovieContext } from "../../context";
import del from "../../assets/delete.svg";

export default function CartDetails({ setShowCart }) {
  const { state, dispatch } = useContext(MovieContext);

  const handleDeleteMovie = (e, id) => {
    e.stopPropagation();
    const newMovieList = cartData.filter((movie) => {
      return movie.id !== id;
    });

    setCartData(newMovieList);
  };
  return (
    <div className="bg-black/60   z-10  fixed inset-0 flex items-center justify-center  text-white">
      <div className="w-[600px] max-h-[400px] overflow-y-auto  bg-[#12141D] rounded-lg p-[40px] flex flex-col gap-[10px]">
        <h2 className="text-[40px] font-extrabold">Your Carts</h2>

        {cartData?.length > 0 ? (
          cartData?.map((cart, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-[16px]">
                {" "}
                <img
                  height={60}
                  width={60}
                  src={getImgUrl(cart.cover)}
                  alt=""
                />
                <div>
                  <p className="text-[18px]">{cart.title}</p>
                  <p className="text-[#575A6E]">{cart.genre}</p>
                  <p className="md-text-xs">${cart.price}</p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={(e) => handleDeleteMovie(e, cart.id)}
                  className="p-[8px] flex gap-[6px] text-sm font-semibold bg-[#D42967] rounded-md justify-center w-[100px]"
                >
                  <img
                    className="mt-[2px]"
                    src={del}
                    alt="delete"
                    height={16}
                    width={16}
                  />
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex  items-center">
            <p className="text-[30px] font-bold">Your Cart Data is empty</p>{" "}
          </div>
        )}

        <div className="flex w-full justify-end mt-[24px]">
          <div className="flex gap-[16px]">
            <button className="p-[8px] flex gap-[6px] text-sm font-semibold bg-primary rounded-md justify-center w-[100px]">
              <img
                className="mt-[2px]"
                src={checkout}
                alt="checkout"
                height={14}
                width={14}
              />
              Checkout
            </button>
            <button
              onClick={() => setShowCart(false)}
              className="p-[8px] text-sm font-semibold rounded-md border border-[#74766F] w-[100px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
