import Link from "next/link";

const HeaderMenuItem = ({ children, href = "#" }) => {
  return (
    <li className="hover:line-through font-medium text-[16px] leading-[21px]">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default HeaderMenuItem;
