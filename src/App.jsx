import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
Import Productos from "./pages/Productos";
import {Rountes, Route} from "react-router-dom";

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/productos" element={<Layout><Productos /></Layout>} />
      <Route path="/nuevoproducto" element={<Layout><Producto /></Layout>} />
    </Routes>  
  )
}

export default App
