import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

export default function LanguageModal({}) {
  const [language, setLanguage] = useState(false);

  const Language = () => {
    setLanguage(!language);
  };
  const ref = useRef();

  useOnClickOutside(ref, () => setLanguage(false));

  return (
    <>
      {" "}
      <div ref={ref} className="flex flex-col">
        {language && (
          <div className="border py-2 px-4 mb-2 h-fit bg-white/70 text-black pt-1 -translate-y-4 absolute bottom-16 right-5">
            {" "}
            <span className="text-lg">Language</span>
            <LanguageSwitch />
          </div>
        )}

        <FontAwesomeIcon
          className={`cursor-pointer px-10 ${language ? 'text-white/80': ''} transition hover:text-white/80`}
          icon={faGlobe}
          size={"2xl"}
          onClick={() => Language()}
        />
      </div>
    </>
  );

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
}
