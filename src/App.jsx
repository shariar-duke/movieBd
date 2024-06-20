import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { useState } from "react";

import { MovieContext, ThemeContext } from "./context"; // context k import korlam
export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true) // theme control korar state
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          <div className={`h-full w-full ${darkMode ? "dark" :""} pb-[80px]`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.8rem] mt-[10px]">
                <SideBar />
                <MovieList />
              </div>
            </main>
          </div>
        </ThemeContext.Provider>
      </MovieContext.Provider>
    </>
  );
}
