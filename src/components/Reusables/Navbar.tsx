import BrandLogo from "../../assets/ecoplumeLogo.png";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Cart from "../CartComponents/Cart";
import CartPanel from "../../pages/CartPanel";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showCart } from "../../store/slices/cartPageTransform";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { setTheme, themeSelector } from "../../store/slices/themeSlice";
import { FocusedElement, moveFocus } from "../../store/slices/focusSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(themeSelector);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    }
  };

  return (
    <>
      <header className="fixed w-screen top-0 bg-white z-40 transition-all duration-500 dark:bg-black dark:text-white dark:font-light">
        <nav className="mt-2 flex justify-between items-center px-4 shadow-md border-b-0 border-b-slate-500">
          <Link
            to={"/"}
            className="brand-name cursor-pointer transition-all duration-500 dark:invert"
          >
            <img src={BrandLogo} className="h-14" alt="Logo Of EcoPlume" />
          </Link>
          <div className="icons flex gap-2">
            <Link to={"/search"} className="search text-3xl cursor-pointer">
              <CiSearch strokeWidth={1} />
            </Link>
            <Link to={"/auth"} className="user-account text-4xl cursor-pointer">
              <CiUser strokeWidth={1} />
            </Link>
            <button
              onClick={() => {
                dispatch(showCart());
                dispatch(moveFocus(FocusedElement.CartPanel))
              }}
            >
              <Cart />
            </button>
            <button className="theme text-xl " onClick={toggleTheme}>
              {theme === "light" ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
          </div>
        </nav>
        <CartPanel />
      </header>
    </>
  );
};

export default Navbar;
