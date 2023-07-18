import BrandLogo from "../assets/ecoplumeLogo.png";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {

  return (
    <>
      <header className="fixed w-screen top-0 bg-white z-10">
        <nav className="mt-2 flex justify-between items-center px-4 shadow-md border-b-0 border-b-slate-500">
          <Link to={"/"} className="brand-name cursor-pointer">
            <img src={BrandLogo} className="h-14" alt="Logo Of EcoPlume" />
          </Link>
          <div className="icons flex gap-2">
            <span className="search text-3xl cursor-pointer">
              <CiSearch strokeWidth={1} />
            </span>
            <span className="user-account text-4xl cursor-pointer">
              <CiUser strokeWidth={1} />
            </span>
            <Cart />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
