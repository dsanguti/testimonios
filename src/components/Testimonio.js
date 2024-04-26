import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        alt="imagen de testimonio"
        src={require("../img/imgShawn.png")}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> Shawn Wang en Singapur</p>
      </div>
    </div>
  );
}
