import React from "react";

function Guia() {
  return (
    <div className="guide">
      <div className="info">
        <h2>Registrate</h2>
        <p>
          Si desea poder utilizar nuestro servicio contactenos para tener una
          clave para la <strong>API.</strong>
        </p>
        <p>
          En un corto periodo de tiempo nos pondremos en contacto contigo para
          la tramitación y uso de este servicio.
        </p>
      </div>
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
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Guia;
