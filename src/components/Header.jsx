import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg"
import Logo from "../assets/logo.svg";
import Ring from "../assets/icons/ring.svg";
import Cart from "../assets/shopping-cart.svg";
import { useState , useContext } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext , ThemeContext  } from "../context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const {cartData} = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext)
 
  return (
    <>
      {showCart && <CartDetails setShowCart ={setShowCart} />}
      <header className="py-5 ">
        <nav className="container  flex justify-between">
          <a href="#">
            <img src={Logo} alt="Logo" width="139" height="26" />
          </a>
          <ul className="flex gap-[8px]">
            <li className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer">
              <img height={30} width={30} src={Ring} alt="Ring" />
            </li>
            <li
            onClick={()=> setDarkMode(darkMode => !darkMode)}
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer">
              <img height={24} width={24} src={darkMode ? Sun :Moon} alt="Moon" />
            </li>
            <li
              onClick={() => setShowCart(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer"
            >
              <img height={24} width={24} src={Cart} alt="Cart" />
              {
                cartData.length > 0 && 
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">{cartData.length}</span>
              }
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
