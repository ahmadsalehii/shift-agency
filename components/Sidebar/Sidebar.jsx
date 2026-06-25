import Link from "next/link";
import MenuCloseIcon from "../Header/icons/MenuCloseIcon";
import LogoLight from "../Logo/LogoLight";

const Sidebar = ({ show, onClose }) => {
  return (
    show && (
      <div className="z-[99999] fixed top-0 left-0 bg-[#1A1A1A] flex flex-col w-full h-screen">
        <div className="h-[82px] lg:h-[88px] py-7 px-8 border-[1px] flex justify-between border-white border-opacity-[0.08]">
          <LogoLight />
          <MenuCloseIcon onClick={onClose} />
        </div>
        <div className="flex flex-col p-8 h-full justify-between items-start">
          <ul className="flex flex-col gap-14 items-start text-white text-[32px] leading-[38px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <div className="flex flex-col text-white">
            <p className="text-[16px] leading-[21px] opacity-50">
              Have project?
            </p>
            <p className="mt-2 text-[20px] leading-[26px] font-bold">
              Call@shift.agency
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
