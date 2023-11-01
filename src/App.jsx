import React, { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Card from './Components/Card';

const autos = [
  {
    id: 1,
    modelo: 'Toyota Camry',
    patente: 'ABC123',
 },
  {
    id: 2,
    modelo: 'Ford Focus',
    patente: 'XYZ789',
  },
  {
    id: 3,
    modelo: 'Honda Civic',
    patente: 'LMN456',
  },
  {
    id: 4,
    modelo: 'Chevrolet Malibu',
    patente: 'QWE789',
  },
  {
    id: 5,
    modelo: 'Volkswagen Golf',
    patente: 'JKL321',
  },
];

function App() {
  const [carInfo, setCarInfo] = useState(null);

  const handleSearchResults = (patente) => {
    const carData = autos.find((auto) => auto.patente === patente);

    if (carData) {
      setCarInfo(carData);
    } else {
      setCarInfo(null);
    }
  };

  return (
    <div className="App">
      <h1>Buscar Autos por Patente</h1>
      <Formulario onSearchResults={handleSearchResults} />
      {carInfo && <Card car={carInfo} />}
    </div>
  );
}

export default App;