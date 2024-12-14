import FAQComponent from "../atoms/FAQComponent";
import TitleComponent from "../atoms/TitleComponent";

const FAQSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="text-center mt-8">
        <TitleComponent text="Frequently asked questions" />
      </div>
      <FAQComponent />
    </div>
  );
};

export default FAQSection;
