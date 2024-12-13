import Logo from "../../../assets/Logo.png";

const NavBar = () => {
  return (
    <div className="bg-primary w-full h-[77px] flex items-center justify-between">
      <div className="ml-16">
        <img src={Logo} alt="AT Digital Logo " />
      </div>
      <div>
        <ul className="flex items-center text-white mr-16">
          <a href="">
            <li className="mr-4">SERVICES</li>
          </a>
          <a href="">
            <li className="mr-4">ABOUT US</li>
          </a>
          <a href="">
            <li className="mr-4">CONTACT US</li>
          </a>
          <a href="">
            <li className=" mr-4">CAREERS</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
