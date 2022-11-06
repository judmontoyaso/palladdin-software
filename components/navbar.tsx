import Link from "next/link";
import { Router, useRouter } from "next/router";
import ActiveRoute from "./ActiveRoute";




export default function Navbar(){
    const router = useRouter();
console.log(router.pathname);
    return(
        <div className="flex justify-around px-10">
            
            <ActiveRoute href = "/">Acerca</ActiveRoute> 
            <ActiveRoute href="/web">Web</ActiveRoute>
            <ActiveRoute href="/mobile">Móvil</ActiveRoute>
            <ActiveRoute href="/seo">SEO</ActiveRoute>
            <ActiveRoute href="/contact">Contacto</ActiveRoute>
        </div>
    )
}