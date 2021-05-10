import React,{useState,useEffect} from 'react'
import c from "classnames";
import { BrowserRouter as Router } from "react-router-dom";
import Fondo1 from './image/fondo1.jpg';
import Fondo2 from './image/fondo2.jpg';
import Fondo3 from './image/fondo3.jpg';
import Fondo4 from './image/fondo4.jpg';
import Fondo5 from './image/fondo5.jpg';
import "./sass/App.scss";
// import { IntlProvider ,FormattedMessage} from "react-intl";
// import English from './languages/en-US.json'
// import Spanish from './languages/es-ES.json'
// import {langContext} from './context/langContext'
// import React,{useContext} from 'react'
function App({ children }) {

  const [fondo,setFondo]=useState();
  const pictureArray = [Fondo1,Fondo2,Fondo3,Fondo4,Fondo5];
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const selectedPicture = pictureArray[randomIndex];
  
 
    useEffect(function (){
      setFondo(selectedPicture);
         document.body.background=fondo;
})


  // const idioma =useContext(langContext);
  // console.log(idioma);
  return (
    // <IntlProvider locale="en" messages={English}>
      <Router>
        <div className={c("app")}>{children}</div>
      </Router>
    // </IntlProvider>
  );
}

export default App;
