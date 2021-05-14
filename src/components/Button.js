import React from "react";

function Button(props) {
  return (
    <div>
      <input
        type="submit"
        id={props.id}
        className="submit"
        value={props.value}
      ></input>
    </div>
  );
}

export default Button;