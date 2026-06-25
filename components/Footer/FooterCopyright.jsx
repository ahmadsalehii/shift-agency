import Link from "next/link";

const FooterCopyright = () => {
  return (
    <div className="flex justify-between items-center text-white pt-[16px] lg:pt-[33px]">
      <p className="text-[14px] leading-[21px]">
        2023 Shift. All right reserved.
      </p>
      <ul className="text-[14px] leading-[29px] flex gap-[22px]">
        <li className="underline underline-offset-4">
          <Link href="#">Privacy Policy</Link>
        </li>
        <li className="underline underline-offset-4 hidden lg:block">
          <Link href="#">Terms of Service</Link>
        </li>
        <li className="underline underline-offset-4 hidden lg:block">
          <Link href="#">Cookies Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCopyright;
