import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="flex flex-col text-white">
      <p className="font-medium lg:font-bold text-[16px] leading-[20.8px] lg:text-[18px] lg:leading-[25px]">
        Quick Links
      </p>
      <ul className="flex flex-col mt-3 lg:mt-6 gap-2 text-[14px] leading-[19.6px] lg:text-[16px] lg:leading-[29px]">
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
