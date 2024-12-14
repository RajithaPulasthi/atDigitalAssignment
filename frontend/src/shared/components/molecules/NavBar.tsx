import { useState } from "react";
import Logo from "../../../assets/Logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-primary w-full h-[77px] flex items-center justify-between font-inter sticky top-0 z-50">
      <div className="ml-6 md:ml-16">
        <img src={Logo} alt="AT Digital Logo" />
      </div>

      <button
        className="text-white text-2xl mr-6 md:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-[77px] left-0 w-full md:static md:flex md:items-center md:justify-between md:w-auto bg-white text-textColor md:bg-primary md:text-white `}
      >
        <ul className="flex flex-col pl-2 md:flex-row md:mr-8">
          <li className="py-4 md:py-0 md:mr-4">
            <a href="">SERVICES</a>
          </li>
          <li className="py-4 md:py-0 md:mr-4">
            <a href="">ABOUT US</a>
          </li>
          <li className="py-4 md:py-0 md:mr-4">
            <a href="">CONTACT US</a>
          </li>
          <li className="py-4 md:py-0 md:mr-4">
            <a href="">CAREERS</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
