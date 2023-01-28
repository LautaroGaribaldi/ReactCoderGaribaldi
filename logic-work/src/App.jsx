import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'

function App() {

  return (
    <div className="App">
      <h1>Logic-Work</h1>
      <NavBar />
     <ItemListConteiner name = "Lautaro"/>
    </div>
  )
}

export default App
