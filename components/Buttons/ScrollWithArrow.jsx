import ScrollArrowIcon from "../Pages/Index/Landing/ScrollArrowIcon";

const ScrollWithArrow = ({ color, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <p
        className={`transform -rotate-180 font-medium text-[14px] leading-[19.6px] tracking-[0.25em]`}
        style={{ writingMode: "tb", color: color }}
      >
        SCROLL
      </p>
      <ScrollArrowIcon color={color} />
    </div>
  );
};

export default ScrollWithArrow;
