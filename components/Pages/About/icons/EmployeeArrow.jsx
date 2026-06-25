const EmployeeArrow = ({ className }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-[24px] lg:w-[50px] h-[24px] lg:h-[50px]`}
    >
      <path
        d="M41.1465 24.4281L9.89648 24.4281"
        stroke="black"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.543 11.8774L41.1471 24.4274L28.543 36.9795"
        stroke="black"
        strokeWidth="3.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EmployeeArrow;
