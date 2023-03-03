// ACA EL CODIGO DE REACT
import CardWidget from "../CardWidget";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button>Inicio</button>
        </li>
        <li>
          <button>Productos</button>
        </li>
        <li>
          <button>Ofertas Seleccionadas</button>
        </li>
        <li>
          <button>Sobre Nosotros</button>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
