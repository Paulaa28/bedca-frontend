import React,{useContext} from 'react'
import Spanish from '../image/Es.png'
import English from '../image/Us.png'
import {langContext} from '../context/langContext'



function Translate() {
    const idiom = useContext(langContext);
// console.log(idiom.changeLanguage());
    return (
        <div className="translate">
          
              <button onClick={() => idiom.changeLanguage('es-ES')}><img src={Spanish} alt="flag"></img></button>
              <button onClick={() => idiom.changeLanguage('en-US')}><img src={English} alt="flag"></img></button>
          
        </div>
    )
}

export default Translate
