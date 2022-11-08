import { useEffect, useState } from "react";
import React from "react";
import { useContext, createContext } from "react";
import { useEnglish, EnglishContext } from "./English";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function LanguageSwitch({}) {
  const [context, setContext] = useEnglish();
  const [languageEnglish, setLanguageEnglish] = useState(!context);

  const LanguageChange = () => {
    setLanguageEnglish(!languageEnglish);

    setContext(languageEnglish);
  };

  return (
    <ol className="mt-1">
      <li
        className={
          (languageEnglish == true
            ? "cursor-pointer"
            : "border-amber-400 border-b-2") +
          " " +
          "mb-1"
        }
        onClick={() => {
          languageEnglish == true ? LanguageChange() : "";
        }}
      >
        {" "}
        Español
      </li>
      <li
        className={
          (languageEnglish == false
            ? "cursor-pointer"
            : "border-amber-400 border-b-2") +
          " " +
          "mb-1"
        }
        onClick={() => {
          languageEnglish == false ? LanguageChange() : "";
        }}
      >
        {" "}
        Inglés
      </li>
    </ol>
  );
}
