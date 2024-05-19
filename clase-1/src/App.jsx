import { useEffect, useState } from 'react'
import Title from './components/Title';
import Button from './components/Button';
import TextInput from './components/TextInput';

import './App.css'

const App = () => {
  const [count, setCount] = useState(100);
  const [nombre, setNombre] = useState('');

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleName = (e) => {
    setNombre(e.target.value)
  } 

  // este codigo ejecuta cuando Count cambia
  useEffect(() => {
  // este codigo, se ejecuta cuando uno de los observables (state o props) cambia
  if(count === 116){
    setCount(100)
  }
  }, [count]);

  let textoBoton = 'Presioneme';

  // patron de diseño: firewall
  if(count === 101){
    textoBoton = 'Boton sorpresa'
  }

  return (
    <div>
      <Title mainTitle={nombre} subtitle={count} />
      <Button handleClick={handleClick} >
        {textoBoton}
      </Button>
      <TextInput handleName={handleName} />
    </div>
  )
}

export default App;
