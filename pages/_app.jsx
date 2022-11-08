import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "../components/layout";
import { EnglishContext } from "../components/English";
import { useState } from "react";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  const [context, setContext] = useState(true);
  return (
    <EnglishContext.Provider value={[context, setContext]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EnglishContext.Provider>
  );
}
