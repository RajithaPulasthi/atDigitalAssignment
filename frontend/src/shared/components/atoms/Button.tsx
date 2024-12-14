type ButtonProps = {
  text: string;
  color: string;
  textColor: string;
};

const Button: React.FC<ButtonProps> = ({ text, color, textColor }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: textColor,
        border: "none",
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 700, // Bold text
        fontFamily: "Inter, sans-serif",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
