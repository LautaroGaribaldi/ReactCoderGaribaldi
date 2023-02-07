import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes,} from "react-router-dom";
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import Footer from './componentes/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListConteiner />} />
        <Route path='/categorias/:idCategoria' element={<ItemListConteiner />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailConteiner/>} />
        <Route path='*' element={ <Navigate to="/"/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
