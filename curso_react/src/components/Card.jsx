import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card({title = 'Titulo de tarjeta',  description = 'Descripción de tarjeta', image = 'https://www.w3schools.com/w3images/lights.jpg'}) {
    return (
    <div className='Card'>
        <Link to= {title}><h2>{title}</h2></Link>
        <p>{description}</p>
        <Link to= {title}><img src= {image} alt='imagen' /></Link>
    </div>
    );
}

export default Card