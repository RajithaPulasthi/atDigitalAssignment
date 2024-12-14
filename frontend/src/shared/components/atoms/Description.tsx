interface DescriptionProps {
  text: string;
}

const Description = ({text}: DescriptionProps) => {
  return <p className="font-inter font-normal text-base">{text}</p>;
};

export default Description;
