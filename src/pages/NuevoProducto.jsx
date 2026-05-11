function NuevoProducto() {
  return (
     <section id="nuevo-producto" class="contact-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">Nuevo producto</h2>
        <p class="section-subtitle">Agregar nuevo producto</p>
      </div>
      <form class="contact-form" id="contactForm">
       
          <div class="form-group">
            <label for="name">Nombre del producto</label>
            <input type="text" id="name" name="name" placeholder="Nombre del producto" required />
          </div>
           <div class="form-row">
          <div class="form-group">
            <label for="price">Precio</label>
            <input type="text" id="price" name="price" placeholder="Precio del producto" required />
          </div>
           <div class="form-group">
            <label for="stock">Stock</label>
            <input type="text" id="stock" name="stock" placeholder="Cantidad en stock" required />
          </div>
        </div>
        
        <div class="form-group">
          <label for="message">Imagen</label>
         <input type="text" id="image" name="image" placeholder="URL de la imagen del producto" required />
        </div>
        <button type="submit" class="submit-btn">Guardar producto</button>
      </form>
    </div>
  </section>
  );
}
export default NuevoProducto;