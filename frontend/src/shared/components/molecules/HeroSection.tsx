import HeroImage from "../../../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[700px] font-inter bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div>
        <h1 className="text-6xl text-white font-bold pt-20 pl-20">
          We are here to help you grow
        </h1>
        <p className="text-2xl text-white font-normal pl-20 pt-4 w-1/2">
          We are a team of talented developers and designers who are here to
          help you grow your business.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
