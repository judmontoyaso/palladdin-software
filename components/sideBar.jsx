import Image from "next/image";
import { useRouter } from "next/router";
import { useEnglish } from "./English";

import logo from "../public/assets/logo.png";

export default function SideBar() {
  const ruta = useRouter();
  const [english, setEnglish] = useEnglish();

  let section = "";

  const rute = ruta.pathname;

  switch (rute) {
    case "/":
      section = "Dev";
      break;

    case "/web":
      section = english ? "Diseño web" : "Web design";
      break;

    case "/mobile":
      section = english ? "Aplicaciones móviles" : "Mobile apps";
      break;

    case "/seo":
      section = "SEO";
      break;

    case "/contact":
      section = english ? "Contacto" : "Contact";
      break;

    default:
      break;
  }

  return (
    <div className="lg:w-2/5 lg:h-screen bg-white/60 flex flex-col justify-evenly items-center">
      <Image src={logo} alt="PalladinDev Logo" />

      {/* <h1 className="text-xl">PALLADDIN</h1> */}

      <h3 className="text-2xl">{section}</h3>
    </div>
  );
}
