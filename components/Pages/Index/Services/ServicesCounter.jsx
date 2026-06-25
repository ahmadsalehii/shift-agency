const ServicesCounter = () => {
  return (
    <div className="mt-8 lg:mt-14 border-b-[9px] border-app-main bg-black">
      <div className="app-container flex flex-col lg:flex-row gap-[52px] lg:gap-0 justify-around py-6">
        <div className="flex flex-col items-center">
          <p className="font-bold text-[32px] lg:text-[65px] leading-[41px] lg:leading-[116px] text-white">4</p>
          <p className="-mt-1 text-white text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px]">Teams</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[32px] lg:text-[65px] leading-[41px] lg:leading-[116px] text-white">
            +120
          </p>
          <p className="-mt-1 text-white text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px]">
            Employees
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-[32px] lg:text-[65px] leading-[41px] lg:leading-[116px] text-white">
            +70
          </p>
          <p className="-mt-1 text-white text-[16px] lg:text-[18px] leading-[25.6px] lg:leading-[32px]">
            Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCounter;
