import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TwitterIcon from "./icons/TwitterIcon";

const FooterSocials = () => {
  return (
    <div className="flex flex-col text-white pr-20">
      <p className="font-bold text-[16px] leading-[20.8px] lg:text-[18px] lg:leading-[25px]">
        Follow Us
      </p>
      <ul className="flex flex-col mt-3 lg:mt-6 gap-2 text-[14px] leading-[19.6px] lg:text-[16px] lg:leading-[29px]">
        <li>
          <a href="#" target="_blank" className="flex">
            <FacebookIcon />
            <span className="ml-4">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="flex">
            <InstagramIcon />
            <span className="ml-4">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="flex">
            <TwitterIcon />
            <span className="ml-4">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className="flex">
            <LinkedinIcon />
            <span className="ml-4">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocials;
