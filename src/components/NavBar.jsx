import iconMenu from "../assets/images/icon-menu.svg";

export const NavBar = () => {
  return (
    <>
      <ul className="hidden sm:flex text-[18px] sm:text-[16px] sm:gap-5 lg:gap-10 sm:items-center text-VeryDarkBlue">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer sm:hidden"
        src={iconMenu}
        alt="Icon Menu"
      />
    </>
  );
};
