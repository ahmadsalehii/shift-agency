const MenuCloseIcon = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick }
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 18.728L17.7279 6.00011"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 6L17.7279 18.7279"
        stroke="#3366E8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuCloseIcon;
