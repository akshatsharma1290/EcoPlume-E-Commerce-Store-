import BrandLogo from "../assets/ecoplumeLogo.png";
import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Cart from "./Cart";

const Navbar = () => {
  // const navItems = ["Men", "Women", "Kids", "Socks", "Sale", "Sus"];

  return (
    <>
      <header>
        <nav className="mt-2 flex justify-between items-center px-4 bg-white">
          <div className="mobileNavToggle w-16">
            <span className="text-4xl">
              <BiMenu />
            </span>
          </div>
          <div className="brand-name">
            <img src={BrandLogo} className="h-14" alt="Logo Of EcoPlume" />
          </div>
          <div className="icons flex gap-2">
            <span className="text-3xl">
              <CiSearch strokeWidth={1} />
            </span>
            <Cart />
          </div>
        </nav>  
      </header>
    </>
  );
};

export default Navbar;
