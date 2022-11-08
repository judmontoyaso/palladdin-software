import { useEffect, useState } from "react";
import React from "react";
import { useContext, createContext } from "react";
import { useEnglish, EnglishContext } from "./English";

export default function LanguageSwitch({}) {
  const [languageEnglish, setLanguageEnglish] = useState();
  const [context, setContext] = useEnglish();

  const LanguageChange = () => {
    setLanguageEnglish(!languageEnglish);

    setContext(languageEnglish);
  };

  return (
    <ol>
      <li
        className="cursor-pointer"
        onClick={() => {
          languageEnglish ? LanguageChange() : "";
        }}
      >
        {" "}
        Español
      </li>
      <li
        className="cursor-pointer"
        onClick={() => {
          !languageEnglish ? LanguageChange() : "";
        }}
      >
        {" "}
        Inglés
      </li>
    </ol>
  );
}
