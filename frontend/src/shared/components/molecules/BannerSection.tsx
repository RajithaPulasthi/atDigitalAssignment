import Image1 from "../../../assets/pcImage.png";
import Image2 from "../../../assets/searchImage.png";
import Button from "../atoms/Button";
import Description from "../atoms/Description";
import TitleComponent from "../atoms/TitleComponent";

const BannerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex w-[1064px] h-[414px] items-center justify-between">
        <img src={Image1} alt="" />
        <div className="w-[542px]">
          <div className="">
            <TitleComponent text="Web & Mobile App Development" />
          </div>
          <div className="pt-4">
            <Description text="Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online." />
          </div>
          <div className="pt-4">
            <Button text="LEARN MORE" />
          </div>
        </div>
      </div>
      <div className="flex w-[1064px] h-[414px] items-center justify-between">
        <div className="w-[542px]">
          <div className="">
            <TitleComponent text="Digital Strategy Consulting" />
          </div>
          <div className="pt-4">
            <Description text="Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business." />
          </div>
          <div className="pt-4">
            <Button text="LEARN MORE" />
          </div>
        </div>
        <img src={Image2} alt="" />
      </div>
    </div>
  );
};

export default BannerSection;
