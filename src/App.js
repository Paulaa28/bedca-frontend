import React from "react";
import c from "classnames";
import { BrowserRouter as Router } from "react-router-dom";
import Fondo1 from "./image/fondo1.jpg";
import Fondo2 from "./image/fondo2.jpg";
import Fondo3 from "./image/fondo3.jpg";
import Fondo4 from "./image/fondo4.jpg";
import Fondo5 from "./image/fondo5.jpg";
import "./sass/App.scss";

function App({ children }) {
  const pictureArray = [Fondo1, Fondo2, Fondo3, Fondo4, Fondo5];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const selectedPicture = pictureArray[randomIndex];
  document.body.background = selectedPicture;

 
  return (
    
    <Router>
      <div className={c("app")}>{children}</div>
    </Router>
   
  );
}

export default App;
