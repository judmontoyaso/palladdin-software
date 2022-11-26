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
      <div className="flex flex-col lg:flex-row grid-rows-2 bg-background bg-cover bg-scroll lg:h-screen">
        <SideBar />
        <div className="flex lg:w-4/5 flex-col pt-4 justify-between text-white bg-black/50">
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
