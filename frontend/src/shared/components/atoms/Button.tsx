interface ButtonProps {
  text: string;
  type?: "submit" | "button";
}

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button
      className="rounded bg-secondary px-3 py-2 text-sm text-white shadow-sm font-inter font-bold"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
