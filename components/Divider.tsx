const Divider = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return <div className={`w-full h-px bg-th-primary-light ${className}`} style={style} />;
};

export default Divider;
