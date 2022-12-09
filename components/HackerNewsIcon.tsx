const SvgComponent = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={50} height={50} {...props}>
    <path
      className="fill-current text-th-primary-dark transition-colors"
      d="M4 4v42h42V4H4zm40 40H6V6h38v38zM42 8H8v34h34V8zM27 28v8h-4v-8l-7-13h3.18L25 25.19 30.82 15H34l-7 13z"
    />
  </svg>
);

export default SvgComponent;
