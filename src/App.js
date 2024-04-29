import "./App.css";
import Testimonio from "./components/Testimonio.js";
import testimoniosData from "./datos/testimonios.json"
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      {testimoniosData.map((testimonio, index) => (
          <Testimonio
            key={index}
            nombre={testimonio.nombre}
            img={testimonio.img}
            alt={testimonio.alt}
            pais={testimonio.pais}
            cargo={testimonio.cargo}
            empresa={testimonio.empresa}
            testimonio={testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
