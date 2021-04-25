import React from "react";

function Form() {
  return (
    <div className="formulario">
      <form>
        <div>
          <label for="">Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Apellidos</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Email</label>
          <input type="text" />
        </div>
        <div>
        <label for="">Mensaje</label>
          <textarea></textarea>
        </div>
        <div>
            <input type="submit" value="Enviar"/>
        </div>
      </form>
    </div>
  );
}

export default Form;
