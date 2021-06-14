interface DividerProps {
  readonly size?: "sm" | "md" | "lg";
}

const Divider: React.FC<DividerProps> = ({ size = "md" }) => {
  return <div className={`border border-black w-3/6 h-0`} />;
};

export default Divider;
