import ItemList from "../ItemList/ItemList";
import React, { useState,useEffect } from 'react';

function ItemListContainer({ mensaje }) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
 fetch(`./assets/productos.json`)
 .then((respuesta) => respuesta.json())
 .then((datos) => setProductos(datos))
 .catch((error) => console.error('Error:',
error));
 }, []);
 

  return (     
    <div class="products-grid" id="productsGrid">         
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;