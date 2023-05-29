import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserCard from './UserCard'
import TimeCard from './TimeCard'
import "./juego.css"

function Juego() {

    const [Jugador1, setjugador1] = useState("");
    const [Jugador2, setjugador2] = useState("");

    let numero = 0;
    let maquina = ["piedra", "papel", "tijera"]
    let winner;

    function piedra() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("piedra")
        console.log(maquina[numero])

    }

    function papel() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("papel")
        console.log(maquina[numero])

    }


    function tijera() {

        numero = Math.floor(Math.random() * 3)

        setjugador2(maquina[numero])
        setjugador1("tijera")
        console.log(maquina[numero])

    }


    if (Jugador1 === Jugador2) {
        winner = "Empate";
    } else if (Jugador1 === "piedra" && Jugador2 === "papel") {
        winner = "Perdiste";
    } else if (Jugador1 === "piedra" && Jugador2 === "tijera") {
        winner = "Ganaste";
    } else if (Jugador1 === "papel" && Jugador2 === "piedra") {
        winner = "Gane";
    } else if (Jugador1 === "papel" && Jugador2 === "tijera") {
        winner = "perdistes";
    } else if (Jugador1 === "tijera" && Jugador2 === "piedra") {
        winner = "perdistes";
    } else if (Jugador1 === "tijera" && Jugador2 === "papel") {
        winner = "Ganastes";
    }



    return (
        <div className='container'>

            <h1>holiis,vamos a jugar o que?</h1>
            <button className='boton' onClick={piedra}>piedra</button>
            <button className='boton' onClick={papel}>papel</button>
            <button className='boton' onClick={tijera}>tijera</button>

            <p className='oponente'>tu oponente saco: {Jugador2}</p>
            <p className='oponente'>tu sacastes: {Jugador1} </p>

            <p className='oponente'>ganador: {winner} </p>

        </div>

    )
}

export default Juego