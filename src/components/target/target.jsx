import React from 'react';
import Style from "./target.css";
import perfil from './perfil.png';
import codigo from './codigodebarra/codigo.png';


const Target = () => {
	return (

  <div class="tarjeta">
  <div class="cabeza">
    <img className="img" src={perfil} alt="Ulises"/>
    <p class="titulo">IDENTIFICATION CARD</p>
  </div>
  <div class="cuerpo">
    <p class="subtitulo">Ulises Andres Marin Quinteros</p>
    <p class="subtitulo">Graduate at Henry</p>
    <p class="subtitulo">Full Stack Developer</p>
    <p class="subtitulo">Age: 20 - Nationality: Argentina</p>
  </div>
  <div class="end">
    <a href="#" class="link">About</a>
    <img className="code" src={codigo} alt="No hace nada jaja"/>
  </div>
  </div>

		);
}

export default Target;