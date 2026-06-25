import ServicesItemSlider from "./ServicesItemSlider";

const ServicesItem = () => {
  return (
    <div className="flex flex-col">
      <div className="app-container mt-8 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
        <div className="flex flex-col">
          <p className="text-[18px] lg:text-[20px] leading-[35px] text-app-text-details opacity-30">
            01
          </p>
          <h3 className="mt-4 font-bold lg:font-normal text-[24px] lg:text-[55px] leading-[31px] lg:leading-[71px] text-app-main-text">
            Branding
          </h3>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px] text-app-text-details">
            Strategy is at the heart of all we do—it’s what makes a brand move
            with intent and ambition. Whether your current brand is a thing of
            beauty, something you’ve outgrown, or something needed from scratch,
            our strategic thinking and actionable insights will reveal your
            brand’s opportunities for what’s next.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-wrap capitalize text-[18px] leading-[21.6px] text-app-main-text gap-4">
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Brand audit
            </li>
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Visual Identity
            </li>
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Packaging Design
            </li>
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Logo Design
            </li>
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Icon graphy
            </li>
            <li className="hover:bg-app-main hover:text-white transition lg:mb-1 flex py-4 px-12 rounded-full border-[1px] border-black border-opacity-[0.12]">
              Brand Strategy
            </li>
          </ul>
        </div>
      </div>
      <ServicesItemSlider />
      <div className="app-container">
        <div className="mt-8 lg:mt-12 border-b-[1px] border-black w-full border-opacity-20"></div>
      </div>
    </div>
  );
};

export default ServicesItem;
