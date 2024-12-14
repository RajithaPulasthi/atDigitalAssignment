import Logo from "../../../assets/Logo.png";
const Footer = () => {
  return (
    <div className="bg-primary w-full h-[266px] text-white">
      <div className="flex flex-row ml-16">
        <div className="basis-1/2 text-white">
          {" "}
          <img src={Logo} alt="Footer Logo" />
          <p className="text-base font-normal">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="basis-1/4">
          <h2 className="text-2xl font-semibold">Our Technologies </h2>
          <ul className="text-sm font-medium">
            <li>ReactJs</li>
            <li>Gatsby</li>
            <li>NextJs</li>
            <li>NodeJs</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <h2 className="text-2xl font-semibold">Our Technologies </h2>
          <ul className="text-sm font-medium">
            <li>Social Media Marketing</li>
            <li>Mobile & App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center text-white">
        Privacy Policy | Terms & Conditions
      </div>
    </div>
  );
};

export default Footer;
