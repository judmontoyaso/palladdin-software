import { createContext, useContext } from "react";

export const EnglishContext = createContext(true);

export const useEnglish = () => {
  return useContext(EnglishContext);
};
