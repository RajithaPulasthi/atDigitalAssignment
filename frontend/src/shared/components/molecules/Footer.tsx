import Logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="bg-primary w-full h-[266px] text-white font-inter ">
      <div className="flex flex-row ml-16 pt-8">
        <div className="basis-1/2 text-white">
          {" "}
          <img src={Logo} alt="Footer Logo" />
          <p className="text-base font-normal w-96 pt-2">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="basis-1/4">
          <h2 className="text-2xl font-semibold">Our Technologies </h2>
          <ul className="text-sm font-medium">
            <li className="pt-2">ReactJs</li>
            <li className="pt-2">Gatsby</li>
            <li className="pt-2">NextJs</li>
            <li className="pt-2">NodeJs</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <h2 className="text-2xl font-semibold">Our Technologies </h2>
          <ul className="text-sm font-medium ">
            <li className="pt-2">Social Media Marketing</li>
            <li className="pt-2">Mobile & App Development</li>
            <li className="pt-2">Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center text-white pt-2">
        <p className=" border-white border-t-2 mt-8 w-[50vw] justify-center text-center pt-2">
          Privacy Policy | Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
