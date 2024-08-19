import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';
import SpeedControlButton from './Components/SpeedControlButton';

function App() {
  const [rotationSpeed, setRotationSpeed] = useState(1); // Velocità iniziale della rotazione

  // Funzione per gestire il cambiamento della velocità
  const handleSpeedChange = (newSpeed) => {
    setRotationSpeed(newSpeed); // Aggiorna la velocità con il valore dello slider
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Logo di React con rotazione controllata */}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{
            animation: `App-logo-spin ${rotationSpeed}s linear infinite`
          }}
        />
        {/* Componente ButtonComponent */}
        <div>
          <h3>Esempio di MagicButton</h3>
          <ButtonComponent text="Magnify!" />
        </div>
        {/* Componente ImageComponent */}
        <div>
          <h3>Clicca sull'immagine per la vera MAGIA!</h3>
          <ImageComponent
            src="https://img.freepik.com/free-vector/magician-with-magic-hat-wand_1308-37654.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722470400&semt=ais_hybrid" // URL di esempio
            alt="Mago"
          />
        </div>
        {/* Componente SpeedControlButton */}
        <SpeedControlButton onSpeedChange={handleSpeedChange} />
        {/* Link per la documentazione di React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;