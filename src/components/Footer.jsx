import React from "react";
import logo from "./../assets/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faSquareFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {

  const date = new Date()
  let year = date.getFullYear()

  return (
    <>
      <footer className="bg-dark-blue h-auto flex flex-col items-center py-8 gap-6 sm:flex-row sm:justify-around sm:h-48 ">
        <div className="flex flex-col gap-6 items-center sm:h-full sm:justify-around ">
          <img src={logo} alt="easybank logo" className="" />
          <div className="flex gap-4 text-2xl text-neutral-white ">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              className="hover:text-lime-green cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:text-lime-green cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-lime-green cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPinterest}
              className="hover:text-lime-green cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-lime-green cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-1/3 xl:w-1/4 sm:justify-between">
          <ul className="flex flex-col items-center gap-2 pb-2 sm:items-start">
            <li className="hoverEffect">About Us</li>
            <li className="hoverEffect">Contact</li>
            <li className="hoverEffect">Blog</li>
          </ul>
          <ul className="flex flex-col items-center gap-2 pb-2 sm:items-start">
            <li className="hoverEffect">Careers</li>
            <li className="hoverEffect">Support</li>
            <li className="hoverEffect">Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Button text="Request Invite" />
          <p className="text-neutral-grayish-blue text-sm  sm:text-xs">
            &copy; {year} Steve Odumbe. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

function Button({ text }) {
  return (
    <button className="py-2 px-4 rounded-3xl bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-60 text-neutral-light-grayish-blue">
      {text}
    </button>
  );
}

export default Footer;
