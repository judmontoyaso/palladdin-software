import LanguageModal from "./languageModal";
import Navbar from "./navbar";
import SideBar from "./sideBar";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className={poppins.className}>
      <div className="flex h-screen bg-background bg-cover">
        <SideBar />
        <div className="flex flex-col w-full py-10 justify-between text-white bg-black/50">
          <Navbar />
          <main>{children}</main>
          <div className="flex columns-1 justify-end">
            <LanguageModal />
          </div>
        </div>
      </div>
    </div>
  );
}
