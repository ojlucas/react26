import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
	return (  
    <>
  <section id="inicio" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Colecci&oacute;n 2026</h1>
      <p class="hero-subtitle">Descubre las ultimas tendencias en moda para esta temporada</p>
      <Link to="/productos" className="hero-btn">Ver Productos</Link>
    </div>
  </section>   
  </>  
  );
}

export default Home;