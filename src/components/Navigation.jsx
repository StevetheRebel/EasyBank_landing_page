import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="flex px-10 lg:px-[10%] md:px-[5%] justify-between items-center h-16 bg-white">
        <div className=" w-1/2 md:w-1/4 xl:w-1/3">
          <img src={logo} alt="logo" />
        </div>
        <div className="h-full hidden md:flex items-center md:w-3/4 xl:w-2/3 justify-between">
          <ul className="flex xl:gap-8 h-full items-center">
            {/* Regular menu items for desktop */}
            <MenuItems />
          </ul>
          <div>
            <Button text={"Request Invite"} />
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="text-3xl"
          />
        </div>
      </nav>

      {/* Mobile menu items */}
      {menuOpen && (
        <div className="absolute h-[calc(100svh-64px)] top-16 right-0 w-2/3 bg-white/30 backdrop-blur-sm flex flex-col items-center gap-12 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <MenuItems />
          </ul>
          <Button text={"Request Invite"} />
        </div>
      )}
    </>
  );
}

function MenuItems() {
  return (
    <>
      {["Home", "About", "Contact", "Blog", "Careers"].map((item) => (
        <li
          key={item}
          className="relative px-2 text-neutral-grayish-blue text-base md:text-lg lg:text-xl hover:text-black hover:cursor-pointer h-full flex items-center group"
        >
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-lime-green to-bright-cyan h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          {item}
        </li>
      ))}
    </>
  );
}

function Button({ text }) {
  return (
    <button className="border-2 py-2 px-4 rounded-3xl bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-60 text-neutral-light-grayish-blue">
      {text}
    </button>
  );
}

export default Navigation;
