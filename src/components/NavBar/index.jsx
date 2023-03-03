// ACA EL CODIGO DE REACT
import CardWidget from "../CardWidget";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <a href="#"><img src="../pictures/sneaker.ico"></img></a>
      <ul>
        <li>
        <button class="button-48" role="button"><span class="text">Inicio</span></button>
        <button class="button-48" role="button"><span class="text">Button 48</span></button>
        </li>
        <li>
        <button class="button-48" role="button"><span class="text">Productos</span></button>
        </li>
        <li>
        <button class="button-48" role="button"><span class="text">Ofertas Seleccionadas</span></button>
        </li>
        <li>
        <button class="button-48" role="button"><span class="text">Sobre Nosotros</span></button>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;





