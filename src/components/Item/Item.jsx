 import React, { useState } from 'react';

function Item({ id, nombre, precio, stock, foto }) {
   
 const [cantidad, setCantidad] = useState(0);
 const [stockActual, setStockActual] = useState(stock); // Stock como estado

  const ComprarClick = () => {
    alert(`Has comprado ${nombre} por $${precio}`);
  } 
 
  const AgregarCarrito = () => {
    if (cantidad < stockActual) {
      setCantidad(cantidad + 1);
      setStockActual(stockActual - 1); // Decrementar el stock
      alert(`Producto ${id} agregado. Cantidad: ${cantidad + 1}, Stock restante: ${stockActual - 1}`);
    } else {
      alert(`No hay suficiente stock. Stock disponible: ${stockActual}`);
    }
  }
 
  const RemoverDelCarrito = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setStockActual(stockActual + 1); // Incrementar stock nuevamente
      alert(`Producto ${id} removido. Cantidad: ${cantidad - 1}, Stock restante: ${stockActual + 1}`);
    }
  }


  return (
    
    <article class="product-card">
      <img src={foto} alt="Camiseta Basica Blanca" class="product-image" loading="lazy"></img>
      <div class="product-info">        
        <h3 class="product-name">{nombre}</h3>
        <p class="product-price">${precio}</p>
        <p class="product-stock">Stock: {stockActual}</p>     
        <button className="add-to-cart-btn" data-id={id} onClick={AgregarCarrito}>
          Comprar
        </button>
    
      </div>
    </article>   
     
  );
}

export default Item;