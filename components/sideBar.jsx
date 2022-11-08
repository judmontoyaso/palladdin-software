import { useRouter } from "next/router";
import { useEnglish } from "./English";

export default function SideBar() {
  const ruta = useRouter();
  const [english, setEnglish] = useEnglish();

  
  return (
    <div className="w-4/6 bg-white/60">
      <h1 className="text-xl">PALLADDIN</h1>
      <h3>
        {ruta.pathname == "/"
          ? "Dev"
          : ruta.pathname == "/web"
          ? (english ? "Diseño web" : "Web design")
          : ruta.pathname == "/mobile"
          ? (english ? "Aplicaciones móviles" : "Mobile apps")
          : ruta.pathname == "/seo"
          ? "SEO"
          : ruta.pathname == "/contact"
          ? (english ? "Contacto" : "Contact")
          : ""}
      </h3>
    </div>
  );
}
