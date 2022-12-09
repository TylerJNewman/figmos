const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Digg"
    //  width={47} height={27} viewBox="0 0 23.5 13.5"
    width={64}
    height={64}
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      className="fill-current text-th-primary-dark transition-colors"
      d="M5.025 10.025H7V17H5.025v-6.975zM0 21h12V0H7v6H0v15zM14 6h5v15h-5zm0-6h5v4h-5zm12 10h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H21v15zm19-11h2v7h-2v-7zm-5 11h7v2h-7v4h12V6H35v15z"
      // fillRule="evenodd"
    />
  </svg>
);

export default SvgComponent;
