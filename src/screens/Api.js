import React from "react";
import Navbar from "../components/NavBar";
import Guide from '../components/guide';
import { Translate } from "../components";
import Aside from "../components/Aside";



function ApiGuide() {
  return (
    <div>
      <Navbar />
      <div className="content">
      <Aside/>
      <Guide className="Guide"/>
      </div>
      <Translate />
    </div>
  );
}

export default ApiGuide;
