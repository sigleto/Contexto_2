import { useState } from 'react'
import Mercado from './componentes/Mercado'
import Orden from './Orden'
import './App.css'
import Provider from './Contexto/Provider'
function App() {
  

  return (
    <Provider>
    <div className="App">
      <Mercado/>
    </div>
    <Orden/>
    </Provider>
  )
}

export default App
