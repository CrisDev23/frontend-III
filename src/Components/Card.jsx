import React from 'react';

function Card({ modelo, patente }) {
  return (
    <div className="card">
      <h2>Información del Auto:</h2>
      <p>Modelo: {modelo}</p>
      <p>Patente: {patente}</p>
    </div>
  );
}

export default Card;