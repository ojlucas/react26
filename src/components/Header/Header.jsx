
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {

    const links = [ "Productos", "Contacto"];

	return <header className="header">
    <div className="header-container">
      <Link to="/" className="logo">React dMODA </Link>	
      <nav className="nav">
        <ul className="nav-list">
          <li key="0"><Link to="/" className="nav-link">Inicio</Link></li>
          <li key="1"><Link to="/productos" className="nav-link">Productos</Link></li>
          <li key="2"><Link to="/contacto" className="nav-link">Contacto</Link></li>
			
		     
          <li>
            <button className="cart-btn" id="cartBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>Carrito</span>             
            </button>
          </li>
        </ul>
      </nav>
      <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Abrir menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
  </header>;
}

export default Header;