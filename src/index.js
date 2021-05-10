import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/langContext";

render(
  <LangProvider>
    <Router>
      <AppRoutes />
    </Router>
  </LangProvider>,
  document.getElementById("root")
);

reportWebVitals();
