// import React,{useContext} from "react";
import Logo from "../image/logo1.png";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
// import {langContext} from '../context/langContext'


export default function NavBar() {

//   const idiom = useContext(langContext);
// console.log(idiom.changeLanguage());
  return (
    <div className="navbar">
      <img src={Logo} alt="logo"></img>
      <ul>
        <li>
          <Link to="/home">
              <FormattedMessage
                  id="menu.home"
                  defaultMessage="Home"
              />
          </Link>
        </li>
        |
        <li>
          <Link to="/api">
          <FormattedMessage
                  id="menu.api"
                  defaultMessage="Api"
              />
          </Link>
        </li>
        |
        <li>
          <Link to="/contact">
          <FormattedMessage
                  id="menu.contact"
                  defaultMessage="Contact"
              />
          </Link>
        </li>
      </ul>
    </div>
  );
}
