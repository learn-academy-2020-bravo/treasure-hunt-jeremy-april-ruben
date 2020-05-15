import React from 'react';
import logo from '../images/header-img.png'; // Tell webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <img id="img" src={ logo } alt="Logo" />;
}
export default Header;
