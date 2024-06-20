import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MovieList from "./components/cine/MovieList";
import { useState , useReducer } from "react";
import { cartReducer, initialState } from "./reducers/CartReducer"; // eta cartReducer theke anlam 
import { MovieContext, ThemeContext } from "./context"; 
export default function App() {

  const [darkMode, setDarkMode] = useState(true) ;

  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <>
      {/* cartData and setCartDate er bodol a amra pathabo ekhn state and dispatch  */}
      <MovieContext.Provider value={{ state, dispatch }}> 
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
