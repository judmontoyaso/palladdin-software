
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
          <div className="border mb-2   -translate-y-4">
            {" "}
            <span className="text-lg">Language</span>
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
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
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
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }
}
