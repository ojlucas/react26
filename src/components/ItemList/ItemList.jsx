import Item from "../Item/Item";
import React, { useState } from 'react';


function ItemList({ productos }) {
  return (
      <>
       {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
      </>
  );
}

export default ItemList;