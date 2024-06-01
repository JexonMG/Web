import React from 'react'
import "./Amigo_Page.css";

export default function Amigo_Page({amigo}) {
    return (
        <div className="amigo-page">
            <h1>
                {amigo.name}	
            </h1>
            <img src={`https://unavatar.io/${amigo.picture}`} alt={amigo.name} />
            <p>
                {amigo.nickname}
            </p>
            <a href="/" className="home-link">Ir a la página principal</a>
        </div>
    )
}