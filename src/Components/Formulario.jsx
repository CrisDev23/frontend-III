import React, { useState } from 'react';

function Formulario({ onSearchResults }) {
  const [modelo, setModelo] = useState('');
  const [patente, setPatente] = useState('');
  const [error, setError] = useState('');

  const handleModeloChange = (e) => {
    setModelo(e.target.value);
  };

  const handlePatenteChange = (e) => {
    setPatente(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patente) {
      setError('El campo de patente no puede estar vacío.');
    } else {
      setError('');
      onSearchResults(modelo, patente);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Modelo del Auto:</label>
          <input type="text" value={modelo} onChange={handleModeloChange} />
        </div>
        <div>
          <label>Patente del Auto:</label>
          <input type="text" value={patente} onChange={handlePatenteChange} />
        </div>
        <button type="submit">Buscar</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Formulario;