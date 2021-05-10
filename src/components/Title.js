import React from "react";
function Title(props) {
  return (
    <div className={props.className}>
      <h1>{props.value}</h1>
    </div>
  );
}

export default Title;
