import React from 'react';
//images
import troll_face from "../../images/troll_face.png";
//Styles
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
        <img className="header--image" src={troll_face} alt="troll face" />
        <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
