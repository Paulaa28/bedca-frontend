import React from "react";
export default function NavBar() {
  return (
    <div className="searchFood">
    <h2>Bedca</h2>
      <h4>Escriba un tipo de comida:</h4>
      <div className="searchTool">
        <input type="search" name="search" id="search" />
        <button>Buscar</button>
      </div>
    </div>
  );
}
