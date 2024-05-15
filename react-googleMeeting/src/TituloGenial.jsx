import React from 'react';

const TituloGenial = ({ contador, icons }) => {
  let numeroIterativo = Math.floor(contador / 100);
  if (numeroIterativo > 4) {
    numeroIterativo = 4;
  }
  return (
    <div>
      <h1 className='titulo'>
        {icons[numeroIterativo]}
        {contador}
      </h1>
      <p>¡Haz clic en el botón para crear reptiles!</p>
    </div>
  );
};

export default TituloGenial;
