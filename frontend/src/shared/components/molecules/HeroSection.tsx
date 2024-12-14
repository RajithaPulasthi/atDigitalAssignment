import HeroImage from "../../../assets/heroImage.png";
import Button from "../atoms/Button";

const HeroSection = () => {
  return (
    <section>
      <div
        className="w-full h-[700px] font-inter bg-no-repeat
        lg:bg-cover bg-center
        sm:bg-auto hidden md:block lg:block xl:block"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="w-[630px] h-[306px] bg-gradient-to-r from-dark2 to-analogous2 ml-16 relative top-[350px] hidden md:block lg:block xl:block">
          <h1 className="text-5xl text-white font-bold font-inter pl-8 pt-6 w-[566px]">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <div className="pt-6 pl-8">
            <Button text="Get free consultation" type="button" />
          </div>
        </div>
      </div>
      <div className=" xl:hidden lg:hidden md:hidden sm:block ">
        <img
          src={HeroImage}
          alt=""
          className="xl:hidden lg:hidden md:hidden sm:block "
        />
      </div>
      <div className="bg-gradient-to-r from-dark2 to-analogous2 pb-4 md:max-h-[258px] xl:hidden lg:hidden md:hidden sm:block">
        <h1 className=" text-white font-bold font-inter pl-4 pt-4 text-4xl max-w-full sm:text-5xl sm:max-w-[668px]">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
        </h1>
        <div className="pt-4 pl-4">
          <Button text="Get free consultation" type="button" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
