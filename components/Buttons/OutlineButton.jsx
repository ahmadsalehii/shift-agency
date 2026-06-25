const OutlineButton = ({ children, className }) => {
  return (
    <button
      className={`bg-white hover:bg-app-main gap-3 stroke-app-main hover:stroke-white hover:text-white flex items-center justify-center border-[1.5px] text-app-main transition-all border-app-main rounded-full w-full ${className}`}
    >
      <span className="text-[16px] lg:text-[20px] leading-[25.6px] lg:leading-[38px]">{children} </span>
      <svg
        width="39"
        height="14"
        viewBox="0 0 39 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H37L32.0685 12"
          stroke="current"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="bevel"
        />
        <path
          d="M37 7L32.0685 2"
          stroke="current"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="bevel"
        />
      </svg>
    </button>
  );
};

export default OutlineButton;
