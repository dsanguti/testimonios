import React from "react";
import "../css/Testimonio.css";

function Testimonio(props) {
  // Función para procesar el texto del testimonio y aplicar formato de negrita a las etiquetas <strong>
  const procesarTexto = (texto) => {
    return texto.split('<strong>').map((part, index) => {
      if (index === 0) {
        return part;
      } else {
        const contenido = part.split('</strong>');
        const etiquetaFuera = contenido.shift(); // Extraer la parte antes de </strong>
        const resto = contenido.join('</strong>'); // Resto del texto después de </strong>
        return (
          <React.Fragment key={index}>
            <strong>{etiquetaFuera}</strong>
            {resto}
          </React.Fragment>
        );
      }
    });
  };

  const altText = `Imagen de ${props.alt}`;

  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        alt={altText}
        src={require(`../img/img-${props.img}.png`)}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio"> {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
         {procesarTexto(props.testimonio)}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
