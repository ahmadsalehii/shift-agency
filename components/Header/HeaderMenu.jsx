import HeaderMenuItem from "./HeaderMenuItem";

const HeaderMenu = ({ className = "text-app-main-text" }) => {
  return (
    <ul className={`hidden lg:flex items-center gap-20 ${className}`}>
      <HeaderMenuItem href="/projects">Projects</HeaderMenuItem>
      <HeaderMenuItem href="/services">Services</HeaderMenuItem>
      <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
    </ul>
  );
};

export default HeaderMenu;
