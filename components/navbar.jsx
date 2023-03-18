import { faBars, faClose, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import ActiveRoute from "./ActiveRoute";
import { useEnglish } from "./English";

export default function Navbar() {
  const [english, setEnglish] = useEnglish();

  const router = useRouter();
  const [menuButton, setMenuButton] = useState(false);
  const handleClick = () => {
    setMenuButton(!menuButton);
  };

  return (
    <>
      <button
        className="float-left top-5 pr-3 pl-3 pt-1  hover:text-gray-600 rounded-sm lg:hidden text-white ml-auto outline-none justify-end   hover:text-xl fixed"
        onClick={handleClick}
      >
        {!menuButton ? (
          <FontAwesomeIcon icon={faBars} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faClose} size="lg" />
        )}
      </button>

      <div
        className={`${
          menuButton ? "block ml-10 top-4 fixed" : "hidden"
        } lg:visible flex flex-col lg:flex-row justify-around mr-10 lg:flex lg:border-none border  sm:p-7 md:p-7 bg-white/90 lg:bg-transparent lg:text-white text-black lg:relative`}
      >
        <ActiveRoute href="/">{english ? "Acerca" : "About"}</ActiveRoute>
        <ActiveRoute href="/web">
          {english ? "Diseño web" : "Web design"}
        </ActiveRoute>
        <ActiveRoute href="/mobile">
          {english ? "Aplicaciones móviles" : "Mobile apps"}
        </ActiveRoute>
        <ActiveRoute href="/seo">SEO</ActiveRoute>
        <ActiveRoute href="/contact">
          {english ? "Contacto" : "Contact"}
        </ActiveRoute>
      </div>
    </>
  );
}
