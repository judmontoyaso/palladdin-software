import Navbar from "./navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const [language, setLanguage] = useState(false);

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
          <div className="flex flex-col">
            {language && (
              <div className="border mb-2   -translate-y-4">
                {" "}
                <span className="text-lg">Language</span>
                
          
                 <LanguageSwitch/>
                
              </div>
            )}

            <FontAwesomeIcon
              className="cursor-pointer px-10"
              icon={faGlobe}
              size={"2xl"}
              onClick={() => setLanguage(!language)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
