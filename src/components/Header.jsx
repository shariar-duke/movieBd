import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/icons/ring.svg";
import Cart from "../assets/shopping-cart.svg";

export default function Header() {
  return (
    <header className="py-5 border border-white">
      <nav className="container  flex justify-between">
        <a href="#">
          <img src={Logo} alt="Logo" width="139" height="26" />
        </a>
        <ul className="flex gap-[8px]">
          <li className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer">
            <img height={30} width={30} src={Ring} alt="Ring" />
          </li>
          <li className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer">
            <img height={24} width={24} src={Moon} alt="Moon" />
          </li>
          <li className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1  flex justify-center items-center cursor-pointer">
            <img height={24} width={24} src={Cart} alt="Cart" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
