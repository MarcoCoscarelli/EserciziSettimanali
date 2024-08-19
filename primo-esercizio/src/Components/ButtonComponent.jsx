import React, { useState } from 'react';
import './ButtonComponent.css';

function ButtonComponent({ text }) {
    const [showMessage, setShowMessage] = useState(false);
  
    const handleClick = () => {
      setShowMessage(true);
  
      
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    };
  
    return (
      <div style={{ position: 'relative' }}>
        <button className="button-magnify" onClick={handleClick}>
          {text}
        </button>
        {showMessage && (
          <div style={styles.message}>
            Magic is Magic 🎉
          </div>
        )}
      </div>
    );
  }
  
  const styles = {
    message: {
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '10px 20px',
      backgroundColor: 'lightblue',
      borderRadius: '5px',
      animation: 'moveMessage 3s ease-in-out'
    }
  };
  
  export default ButtonComponent;