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
      <div ref={ref} className="flex flex-col ">
        {language && (
          <div className="border mb-2 bg-white/60 text-black pt-1 -translate-y-4">
            {" "}
            <span className="text-lg ">Language</span>
            <LanguageSwitch />
          </div>
        )}

        <FontAwesomeIcon
          className="cursor-pointer px-10"
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
