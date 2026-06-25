import LinkedinIcon from "./icons/LinkedinIcon";
import ShareIcon from "./icons/ShareIcon";
import TwitterIcon from "./icons/TwitterIcon";

const ArticleMeta = () => {
  return (
    <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-between">
      <ul className="flex flex-wrap gap-4 uppercase text-[16px] leading-[29px] text-app-main-text">
        <li className="py-2 px-4 rounded-full border-[1px] border-opacity-[0.08]">
          creative
        </li>
        <li className="py-2 px-4 rounded-full border-[1px] border-opacity-[0.08]">
          inspiration
        </li>
        <li className="py-2 px-4 rounded-full border-[1px] border-opacity-[0.08]">
          travel
        </li>
        <li className="py-2 px-4 rounded-full border-[1px] border-opacity-[0.08]">
          photography
        </li>
      </ul>
      <div className="flex items-center gap-4 mt-6 lg:mt-0">
        <TwitterIcon />
        <LinkedinIcon />
        <ShareIcon />
      </div>
    </div>
  );
};

export default ArticleMeta;
