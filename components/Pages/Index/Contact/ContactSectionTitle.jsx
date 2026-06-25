const ContactSectionTitle = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 uppercase z-0 flex items-center whitespace-nowrap text-center text-[49.3px] lg:text-[176px] leading-[64px] lg:leading-[229.15px] font-medium text-app-main">
      <div className="flex items-center gap-4 lg:gap-14 ">
        <svg
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 lg:h-12 lg:w-12 ml-2"
        >
          <circle
            cx="24"
            cy="24.5"
            r="23.25"
            stroke="#3366E8"
            strokeWidth="1.5"
          />
        </svg>
        {[1, 2, 3].map((i) => (
          <>
            <span>CONTACT US</span>
            <svg
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 lg:h-12 lg:w-12"
            >
              <circle
                cx="24"
                cy="24.5"
                r="23.25"
                stroke="#3366E8"
                strokeWidth="1.5"
              />
            </svg>
          </>
        ))}
      </div>
    </div>
  );
};

export default ContactSectionTitle;
