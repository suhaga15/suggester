interface ButtonProps {
  readonly buttonText: string;
  readonly className?: string;
  readonly size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  className = "",
  size = "md",
}) => {
  let buttonTextFontSize, buttonSize;
  switch (size) {
    case "sm":
      buttonTextFontSize = "text-sm";
      buttonSize = "p-2";
      break;
    case "md":
      buttonTextFontSize = "text-base";
      buttonSize = "p-2";
      break;
    case "lg":
      buttonTextFontSize = "text-lg";
      buttonSize = "p-4";
      break;
    default:
      buttonTextFontSize = "";
      buttonSize = "";
  }
  return (
    <button
      className={`bg-gray-200 hover:bg-gray-300 rounded ${buttonTextFontSize} ${buttonSize} ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
