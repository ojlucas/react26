import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function Productos() {
  return (
 <section id="productos" class="products-section">
    <div class="section-container">
      <div class="section-header">
        <h2 class="section-title">Nuestros Productos</h2>
        <p class="section-subtitle">Encuentra tu estilo perfecto</p>
      </div>
       <ItemListContainer mensaje="Listado productos" />
    </div>
  </section>   
  );
}
export default Productos;