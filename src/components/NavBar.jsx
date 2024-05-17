import { useState, useEffect } from "react";
import iconMenu from "../assets/images/icon-menu.svg";
import iconCloseMenu from "../assets/images/icon-menu-close.svg";

export const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleClickMenu = () => {
    setMenuClicked(!menuClicked);
  };

  /* useEffect(() => {
    if (menuClicked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuClicked]); */

  return (
    <>
      <div
        className={`${
          menuClicked
            ? "fixed inset-0 bg-gray-900 bg-opacity-50 z-10"
            : "hidden"
        } sm:hidden`}
        onClick={handleClickMenu}
      ></div>
      <ul
        className={`${
          menuClicked ? "z-20" : "hidden"
        } absolute bg-white top-0 right-0 w-[256px] p-[24px] h-full text-[18px] sm:flex sm:items-center sm:w-[438px] sm:justify-between sm:p-0 sm:h-auto sm:relative sm:text-[16px]`}
      >
        <li
          className={`${
            menuClicked ? "" : "hidden"
          }   cursor-pointer sm:hidden flex place-content-end`}
        >
          <img
            className="w-8 h-8 mb-[87px]"
            src={iconCloseMenu}
            onClick={handleClickMenu}
            alt="Close menu"
          />
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Home
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            New
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Popular
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Trending
          </a>
        </li>
        <li className="mb-8 sm:mb-0">
          <a className="hover:text-SoftRed" href="#">
            Categories
          </a>
        </li>
      </ul>
      <img
        onClick={handleClickMenu}
        className={`${
          menuClicked ? "hidden" : ""
        } w-10 h-4 cursor-pointer sm:hidden`}
        src={iconMenu}
        alt="Icon Menu"
      />
    </>
  );
};
