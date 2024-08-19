

import React, { Component } from 'react';
import './ImageComponent.css'; 

class ImageComponent extends Component {
  handleClick = () => {
    
    const image = document.querySelector('.image-component');
    image.classList.add('explosion');
    
   
    setTimeout(() => {
      image.classList.remove('explosion');
    }, 1000); 
  };

  render() {
    const { src, alt } = this.props;

    return (
      <a href="#" onClick={this.handleClick} className="image-link">
        <img className="image-component" src={src} alt={alt} />
      </a>
    );
  }
}

export default ImageComponent;