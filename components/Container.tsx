const Container = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    // <div className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={style}>
    <div className={`w-full mx-auto  h-full max-w-lg ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
