import BrandLogo from "../assets/ecoplumeLogo.png";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {

  // Accessing The Access Key From Environment Variable
  interface ImportMetaEnvWithUnsplashAccessKey extends ImportMetaEnv {
    VITE_UNSPLASH_ACCESS_KEY: string;
  }

  const accessKey = import.meta.env as ImportMetaEnvWithUnsplashAccessKey;
  const unsplashAccessKey: string = accessKey.VITE_UNSPLASH_ACCESS_KEY;

  return (
    <>
      <header>
        <nav className="mt-2 flex justify-between items-center px-4 bg-white">
          <Link to={"/"} className="brand-name cursor-pointer">
            <img src={BrandLogo} className="h-14" alt="Logo Of EcoPlume" />
          </Link>
          <div className="icons flex gap-2">
            <span className="user-account text-4xl cursor-pointer">
              <CiUser strokeWidth={1} />
            </span>
            <span className="text-3xl cursor-pointer">
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
