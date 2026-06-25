import React from "react";

const ArticleRelated = () => {
  return (
    <div className="flex flex-col mt-12">
      <h5 className="text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px] font-medium">
        You might also like
      </h5>
      <div className="mt-3 w-full border-[1px] border-opacity-[0.15]"></div>
      <div className="w-[68px] border-[1px] border-black -mt-[1.5px]"></div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px]">
        <div className="flex flex-col">
          <img
            src="/images/blog/1.png"
            alt=""
            className="h-[280px] object-cover border-[1px] border-opacity-20 rounded-[8px]"
          />
          <h6 className="mt-4 lg:mt-6 font-medium text-app-main-text text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px]">
            The difference between ...
          </h6>
          <div className="my-2 w-[165px] border-b"></div>
          <p className="text-[16px] lg:text-[20px] leading-[21px] lg:leading-[35px] text-app-text-details opacity-30">
            Ui/Ux Design - Google - Ads
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/blog/5.png"
            alt=""
            className="h-[280px] object-cover border-[1px] border-opacity-20 rounded-[8px]"
          />
          <h6 className="mt-4 lg:mt-6 font-medium text-app-main-text text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px]">
            The difference between ...
          </h6>
          <div className="my-2 w-[165px] border-b"></div>
          <p className="text-[16px] lg:text-[20px] leading-[21px] lg:leading-[35px] text-app-text-details opacity-30">
            Ui/Ux Design - Google - Ads
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src="/images/blog/4.png"
            alt=""
            className="h-[280px] object-cover border-[1px] border-opacity-20 rounded-[8px]"
          />
          <h6 className="mt-4 lg:mt-6 font-medium text-app-main-text text-[16px] lg:text-[24px] leading-[21px] lg:leading-[29px]">
            The difference between ...
          </h6>
          <div className="my-2 w-[165px] border-b"></div>
          <p className="text-[16px] lg:text-[20px] leading-[21px] lg:leading-[35px] text-app-text-details opacity-30">
            Ui/Ux Design - Google - Ads
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleRelated;
