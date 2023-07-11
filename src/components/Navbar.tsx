import BrandLogo from "../assets/ecoplumeLogo.png";
import { BiMenu } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav className="mt-1 flex justify-between">
        <div className="mobileNavToggle"><img src={BiMenu} alt="Menu Toggler" /></div>
        <header>
          <div className="brand-name">
            <img src={BrandLogo} className="h-14" alt="Logo Of EcoPlume" />
          </div>
        </header>
        
      </nav>
    </>
  );
};

export default Navbar;
