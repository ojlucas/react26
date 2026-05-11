import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import NuevoProducto from "./pages/NuevoProducto";
import Contacto from "./pages/Contacto";
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nuevoproducto" element={<NuevoProducto />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>  
  )
}

export default App
