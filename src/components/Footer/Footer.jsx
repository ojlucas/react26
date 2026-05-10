import "./Footer.css";

function Footer() {
	return <>
	<footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <a href="#inicio" class="footer-logo">React dMODA</a>
        <p class="footer-description">Tu tienda de ropa favorita. Ofrecemos las &uacute;ltimas tendencias en moda con la mejor calidad y precios competitivos.</p>
        <div class="footer-contact">
          <p><strong>Direcci&oacute;n:</strong> Calle Principal 123, mi Ciudad</p>
          <p><strong>Tel&eacute;fono:</strong> +34 123 456 789</p>
          <p><strong>Email:</strong> info@modastore.com</p>
        </div>
      </div>

      <div class="footer-team">
        <h3 class="footer-team-title">Nuestro Equipo</h3>
        <div class="team-cards">
          <div class="team-card">
            <div class="team-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span class="team-name">Lucas Ojunian</span>
            <span class="team-email">lucas@modastore.com</span>
          </div>
          <div class="team-card">
            <div class="team-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span class="team-name">Carlos Rodriguez</span>
            <span class="team-email">carlos@modastore.com</span>
          </div>
          <div class="team-card">
            <div class="team-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span class="team-name">Ana Garcia</span>
            <span class="team-email">ana@modastore.com</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 React dMODA Store</p>
    </div>
  </footer>
	</>;
}

export default Footer;