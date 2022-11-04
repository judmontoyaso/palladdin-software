import Navbar from "./navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGlobe
} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';

export default function Layout({children}: React.PropsWithChildren<{}>){

    const [language, setLanguage] = useState(false)

    return(
        <div className="flex h-screen bg-background bg-cover">
            <div className="w-4/6 bg-white/60">

                <h1 className="text-xl">PALLADDIN</h1>
                <h3>Dev</h3>
                
            </div>

            <div className="flex flex-col w-full py-10 justify-between text-white bg-black/40">
                <Navbar />

                <main>
                    {children}
                </main>
                
                <div className="flex justify-end">
                    <FontAwesomeIcon
                        className="cursor-pointer px-10"
                        icon={faGlobe}
                        size={'2xl'}
                        onClick={() => setLanguage(!language)}
                    />
                </div>

                {language && (
                    <h1 className="text-lg">Language</h1>
                )}
                
            </div>

        </div>
    )
}