import React from "react";
import {NavBar, Guide, Translate, Aside} from '../components';

function ApiGuide() {
  return (
    <div>
      <NavBar />
      <div className="content">
      <Aside/>
      <Guide className="Guide"/>
      </div>
      <Translate />
    </div>
  );
}

export default ApiGuide;
