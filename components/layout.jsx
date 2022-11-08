import LanguageModal from "./languageModal";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-background bg-cover">
      <div className="w-4/6 bg-white/60">
        <h1 className="text-xl">PALLADDIN</h1>
        <h3>Dev</h3>
      </div>

      <div className="flex flex-col w-full py-10 justify-between text-white bg-black/40">
        <Navbar />
        <main>{children}</main>
        <div className="flex columns-1 justify-end">
          <LanguageModal />
        </div>
      </div>
    </div>
  );
}
