import Image1 from "../../../assets/pcImage.png";
import Image2 from "../../../assets/searchImage.png";
import Button from "../atoms/Button";
import Description from "../atoms/Description";
import TitleComponent from "../atoms/TitleComponent";

const BannerSection = () => {
  return (
    <div className="w-full md:w-[90vw] md:flex-col md:items-center md:justify-center md:mx-auto md:pt-8">
      <div className="sm:flex-row justify-center items-center md:flex lg:flex xl:flex">
        <img src={Image1} alt="" className="place-self-center" />
        <div className="text-center md:text-left lg:text-left xl:text-left ">
          <div className="">
            <TitleComponent text="Web & Mobile App Development" />
          </div>
          <div className="pt-4 md:max-w-[542px] ">
            <Description text="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online." />
          </div>
          <div className="pt-4">
            <Button text="LEARN MORE" />
          </div>
        </div>
      </div>
      <div className="sm:flex-row justify-center items-center md:flex lg:flex xl:flex">
        <img
          src={Image2}
          alt=""
          className="place-self-center xl:hidden lg:hidden md:hidden sm:block"
        />
        <div className="text-center md:text-left lg:text-left xl:text-left ">
          <div className="">
            <TitleComponent text="Digital Strategy Consulting" />
          </div>
          <div className="pt-4 md:max-w-[542px] ">
            <Description text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business." />
          </div>
          <div className="pt-4">
            <Button text="LEARN MORE" />
          </div>
        </div>
        <img
          src={Image2}
          alt=""
          className="place-self-center sm:hidden lg:block xl:block md:block"
        />
      </div>
    </div>
  );
};

export default BannerSection;
