import React, { useState } from "react";
import logo from "/logo-icon.svg";
import { LuChefHat, LuPhoneCall } from "react-icons/lu";
import Button from "../ui/Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      path: "#home",
      text: "Acceuil",
    },
    {
      path: "#menu",
      text: "Menu",
    },
    {
      path: "#about",
      text: "Notre entreprise",
    },
  ];

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-violet-50 flex items-center justify-between relative p-4 lg:px-20 xl:px-24 lg:text-xl xl:text-2xl">
      <div className="text-violet-700 md:text-2xl text-xl bg-red-400  flex gap-1 items-center lg:text-4xl">
        <LuChefHat className="text-violet-700 p-0 m-0" />
        <span className="font-bold font-[Montserrat] tracking-[-2px] md:tracking-[-4px]">
          Les Délices de Gabi
        </span>
      </div>
      <ul className="hidden  lg:flex  md:gap-1 lg:gap-9 xl:items-center">
        {menu.map((el) => (
          <li key={el.text}>
            <Button
              variant="none"
              className="!shadow-none hover:shadow-none hover:border-b-2 hover:border-b-violet-700 xl:text-2xl lg:text-xl  transition-all"
              shape="square"
              href={el.path}
            >
              {el.text}
            </Button>
          </li>
        ))}
      </ul>
      <Button
        href="tel:+15814461643"
        size="lg"
        className="hidden! lg:flex!  lg:items-s lg:gap-1.5 lg:items-center"
      >
        <LuPhoneCall />
        <span className="text-2xl -mt-2">contact&nbsp;</span>
      </Button>

      <div
        onClick={handleOpenMenu}
        className="flex flex-col gap-1 lg:hidden cursor-pointer"
      >
        <div
          className={`${
            isOpen && "rotate-45"
          } border-2 w-[20px] transition-all`}
        ></div>
        <div className={`border-2 w-[20px]`}></div>
        <div
          className={`${
            isOpen && "-rotate-[45deg]"
          } border-2 w-[20px] transition-all`}
        ></div>
      </div>

      <ul
        className={`${
          isOpen ? "visible opacity-100" : " opacity-0 invisible"
        } absolute top-full left-0 w-full bg-violet-500 p-4 text-violet-50 transition-all ease-linear md:text-lg sm:text-base `}
      >
        <li className="hover:bg-violet-50 hover:text-violet-700 hover:font-bold">
          <a href="#acceuil">Accueil</a>
        </li>
        <li className="hover:bg-violet-50 hover:text-violet-700 hover:font-bold">
          <a href="#menu">Menu</a>
        </li>
        <li className="hover:bg-violet-50 hover:text-violet-700 hover:font-bold">
          <a href="#a_propos">À propos</a>
        </li>
        <li className="hover:bg-violet-50 hover:text-violet-700 hover:font-bold">
          <a href="tel:5814461643">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
