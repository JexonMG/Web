import Card from './components/Card';
import './App.css';
import React from 'react';
import vehicles from './data/vehicles';
import ShowHide from './components/ShowHide';


function App() {
  const vehicleCards = vehicles.map(v => {
    return <Card title={v.name} description={v.description} image={v.image} />
  })
  return (
  <div className='App'>
    <h1>Curso de React</h1>
    <div className='container'>
      {vehicleCards}
    </div>
    <div className='button'>
    <h3>🔹The magic button🔹</h3>
    <ShowHide />
    </div>
  </div>
  )
} 

export default App
