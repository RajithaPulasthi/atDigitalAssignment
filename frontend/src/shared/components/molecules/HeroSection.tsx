import HeroImage from "../../../assets/heroImage.png";
import Button from "../atoms/Button";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[700px] font-inter bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="w-[630px] h-[306px] bg-gradient-to-r from-dark2 to-analogous2 ml-16 relative top-[350px]">
        <h1 className="text-5xl text-white font-bold font-inter pl-8 pt-6 w-[566px]">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <div className="pt-6 pl-8">
          <Button text="Get free consultation" type="button" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
