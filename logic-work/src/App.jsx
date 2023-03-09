import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './componentes/ItemDetailConteiner/ItemDetailConteiner';
import Footer from './componentes/Footer/Footer';
import CartConteiner from './componentes/CartConteiner/CartConteiner';
import { CartContextProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';

import style from "./style.css"


function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/categories/:idCategory' element={<ItemListConteiner />} />
          <Route path='/detail/:idProduct' element={<ItemDetailConteiner />} />
          <Route path="/cart" element={<CartConteiner />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
