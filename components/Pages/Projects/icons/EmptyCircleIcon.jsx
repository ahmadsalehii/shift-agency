const EmptyCircleIcon = ({ className }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:flex"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="10"
        stroke="#E3E3E3"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-dasharray="5 5"
      />
    </svg>
  );
};

export default EmptyCircleIcon;
