const ArrowTopRight = ({ color = "#3366E8" }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.03552 20.8799L20.7947 4.12072L20.8431 11.1434"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
      <path
        d="M20.7947 4.12081L13.772 4.07238"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </svg>
  );
};

export default ArrowTopRight;
