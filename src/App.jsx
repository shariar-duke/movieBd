import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList"
import { useState } from "react";
import MovieDetailsModal from "./components/cine/MovieDetailsModal";
import { MovieContext } from "./context"; // context k import korlam
export default function App() {
  const[cartData, setCartData] = useState([])
  return (
    <>
      <MovieContext.Provider value={{cartData, setCartData}}>
        <div className="h-full pb-[80px]">
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.8rem] mt-[10px]">
              <SideBar />
              <MovieList />
            </div>
          </main>
        </div>
      </MovieContext.Provider>
    </>
  );
}
