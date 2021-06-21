interface ButtonProps {
  readonly buttonText: string;
  readonly className?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, className = "" }) => {
  return (
    <button
      className={`bg-gray-200 hover:bg-gray-300 rounded text-base p-2 ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
