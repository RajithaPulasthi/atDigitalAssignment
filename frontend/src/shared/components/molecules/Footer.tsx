import Logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="bg-primary w-full text-white font-inter sm:h-[600px] md:max-h-[420px] lg:max-h-[266px]">
      <div className="ml-16 pt-8 lg:flex lg:pt-4">
        <div className="basis-1/2 text-white">
          <img src={Logo} alt="Footer Logo" />
          <p className="text-base font-normal pt-2 max-w-[413px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className=" mt-16 basis-1/2 md:flex md:mt-4 lg:mt-0">
          <div className="mt-4 basis-2/4">
            <h2 className="text-2xl font-semibold">Our Technologies </h2>
            <ul className="text-sm font-medium">
              <li className="pt-2">ReactJs</li>
              <li className="pt-2">Gatsby</li>
              <li className="pt-2">NextJs</li>
              <li className="pt-2">NodeJs</li>
            </ul>
          </div>
          <div className="mt-4 basis-2/4">
            <h2 className="text-2xl font-semibold">Our Technologies </h2>
            <ul className="text-sm font-medium ">
              <li className="pt-2">Social Media Marketing</li>
              <li className="pt-2">Web & Mobile App Development</li>
              <li className="pt-2">Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-white pt-2">
        <div className="h-[1px] bg-white w-[70vw] mt-8 lg:mt-4"></div>
        <p className="  mt-2 w-full justify-center text-center pt-2">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
