import "./Home.css";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function Home() {
	return (  
    <>
  <section id="inicio" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Colecci&oacute;n 2026</h1>
      <p class="hero-subtitle">Descubre las ultimas tendencias en moda para esta temporada</p>
      <a href="#productos" class="hero-btn">Ver Productos</a>
    </div>
  </section>
    <section id="productos" class="products-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">Nuestros Productos</h2>
        <p class="section-subtitle">Encuentra tu estilo perfecto</p>
      </div>
       <ItemListContainer mensaje="Listado productos" />
    </div>
  </section>

    <section id="contacto" class="contact-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">Contacto</h2>
        <p class="section-subtitle">Estamos aqui para ayudarte</p>
      </div>
      <form class="contact-form" id="contactForm">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="tu@email.com" required />
          </div>
        </div>
        <div class="form-group">
          <label for="subject">Asunto</label>
          <input type="text" id="subject" name="subject" placeholder="Asunto del mensaje" required />
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aqui..." required></textarea>
        </div>
        <button type="submit" class="submit-btn">Enviar Mensaje</button>
      </form>
    </div>
  </section>
  </>  
  );
}

export default Home;