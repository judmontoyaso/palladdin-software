import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex justify-around px-10">
            <Link href="/about" className="uppercase font-medium">Acerca</Link>
            <Link href="/web" className="uppercase font-medium">Web</Link>
            <Link href="/mobile" className="uppercase font-medium">Móvil</Link>
            <Link href="/seo" className="uppercase font-medium">SEO</Link>
            <Link href="/contact" className="uppercase font-medium">Contacto</Link>
        </div>
    )
}