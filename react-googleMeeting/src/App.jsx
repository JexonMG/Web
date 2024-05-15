import React, { useState } from 'react';
import './App.css';
import TituloGenial from './TituloGenial';

const icons = ['Tier 1: 🦎 ', 'Tier 2 🐍: ', 'Tier 3 🐢: ', 'Tier 4 🐊: ', 'Tier 5 🐉: '];
let mejoras = 0;

function mejorasClicks(contador){
  if (mejoras === 0){
    mejoras = 1;
    contador = contador - 100;
  }else if (mejoras === 1){
    mejoras = 2;
    contador = contador - 200;
  } else if (mejoras === 2){
    mejoras = 3;
    contador = contador - 300;
  }

  if (mejoras >= 3){
    mejoras = 3;
  }

  return contador;
}

function actualizarClicks(contador, cantidad, setCantidad) {
  if (contador >= 400) {
    setCantidad(4 + mejoras);
  } else if (contador >= 300) {
    setCantidad(3 + mejoras);
  } else if (contador >= 200) {
    setCantidad(2+ mejoras );
  } else if (contador >= 100) {
    setCantidad(1 + mejoras);
  }
  return contador + cantidad;
}


function App() {
  const [contador, setCount] = useState(0);
  const [cantidad, setCantidad] = useState(1); 

  return (
    <div className="App">
      <header className="App-header">
        <TituloGenial contador={contador} icons= {icons}/>
        <button className= "botonReptil" onClick={() => setCount(actualizarClicks(contador, cantidad, setCantidad))}>¡Crear reptiles!</button>
        <button className= "botonReptil" onClick={() => setCount(mejorasClicks(contador))}>¡Mejora!</button>
      </header>
    </div>
  );
}

export default App;
