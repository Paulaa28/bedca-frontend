import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../languages/en-US.json";
import Spanish from "../languages/es-ES.json";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [text, setText] = useState(English);
  const [locale, setLocal] = useState("en-US");

  const changeLanguage = (language) => {
    console.log('Cambiamos lenguaje a ',language);

    switch (language) {
      case "es-ES":
        setText(Spanish);
        setLocal("es-ES");
        break;
      case "en-US":
        setText(English);
        setLocal("en-US");
        break;
      default:
        setText(English);
        setLocal("es-ES");
        break;
    }
  }

  return (
    <langContext.Provider value={{ changeLanguage: changeLanguage }}>
      <IntlProvider locale={locale} messages={text}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
}

export { LangProvider, langContext };
