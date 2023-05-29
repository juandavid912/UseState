import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './UserCard'
import TimeCard from './TimeCard'
import Juego from "./juego"

function App() {


  const [numero, setNumero] = useState(0);

  function cambiarNumero() {

    if (numero < 20) {
      setNumero(numero + 1)
      console.log(numero)
    }


  }

  function cambiarmenosNumero() {

    if (numero > 0) {
      setNumero(numero - 1)
      console.log(numero)
    }

  }

  return (
    <div>
      {/*       <h1 className='text-black'>Hola {nombre}</h1>
      <button onClick={cambiarNombre}>Cambiar nombre</button> */}

      <h1 className='text-black'>Numero:{numero}</h1>
      <button onClick={cambiarNumero}>Incrementar</button>
      <button onClick={cambiarmenosNumero}>Decrementar</button>
      <Juego/>
    </div>

  )
}

export default App