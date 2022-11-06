import { useRouter } from "next/router";
import Link from "next/link";

export default function ActiveRoute({ children, href }) {
  const router = useRouter();
  const active = router.pathname == href ? true : false;
  const border = active ? "border-amber-400 border-b-2 " : "border-cyan-900";

  return (
    <Link href={href}>
      <div className={border}>{children}</div>
    </Link>
  );
}
