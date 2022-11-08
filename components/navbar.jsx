import Link from "next/link";
import { Router, useRouter } from "next/router";
import ActiveRoute from "./ActiveRoute";
import { useEnglish } from "./English";

export default function Navbar() {
  const [english, setEnglish] = useEnglish();

  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="flex justify-around px-10">
      <ActiveRoute href="/">{english ? "Acerca" : "About"}</ActiveRoute>
      <ActiveRoute href="/web">Web</ActiveRoute>
      <ActiveRoute href="/mobile">Móvil</ActiveRoute>
      <ActiveRoute href="/seo">SEO</ActiveRoute>
      <ActiveRoute href="/contact">
        {" "}
        {english ? "Contacto" : "Contact"}
      </ActiveRoute>
    </div>
  );
}
