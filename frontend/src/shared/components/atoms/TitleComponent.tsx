interface TitleComponentProps {
  text: string;
}

const titleStyle = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "27px",
};

const TitleComponent = ({ text }: TitleComponentProps) => {
  return (
    <p className="font-bold text-primary" style={titleStyle}>
      {text}
    </p>
  );
};

export default TitleComponent;
