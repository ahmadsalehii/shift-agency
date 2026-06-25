const ArrowButton = () => {
  return (
    <button className="px-7 py-2 border-[1px] border-app-main stroke-app-main rounded-full hover:bg-app-main hover:stroke-white transition-all">
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

export default ArrowButton;
