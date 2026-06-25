const SectionTitle = ({ text, bgText }) => {
  return (
    <div className="relative h-[64px] lg:h-[230px] flex items-center justify-center">
      <h3 className="uppercase z-0 absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[50px] lg:text-[176px] leading-[64px] lg:leading-[229.15px] font-medium text-white font-outline-sm lg:font-outline-1">
        {[1, 2, 3].map(() => `${bgText}  `)}
      </h3>
      <h2 className="z-10 font-bold lg:font-medium leading-[26px] lg:leading-[62.4px] text-[20px] lg:text-[48px]">{text}</h2>
    </div>
  );
};

export default SectionTitle;
