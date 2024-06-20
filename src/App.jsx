import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { useState , useReducer } from "react";
import { cartReducer, initialState } from "./reducers/CartReducer"; // eta cartReducer theke anlam 
import { MovieContext, ThemeContext } from "./context"; 
export default function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true) ;
  // ekta reudcer k initilize korte hoy ekte reducer function dia jeta holo cartReducer r ekta initial state dia seta holo initialState 
  // tar bodole pawa jay  etar currect state and dispatch
  const [state, dispatch] = useReducer(cartReducer, initialState)
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
