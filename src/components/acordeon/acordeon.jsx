import React from 'react';
import Style from "./acordeon.css";


const Acordeon = () => {
	return (
	<div class="acordeon">
	     <div class="acordeon-item">
	         <input type="checkbox" name="acordeon" id="item1"/>
	         <label for="item1" class="acordeon-titulo"><b>Educational information</b></label>
	         <p class="acordeon-contenido"><b>- High school: Escuela Normal Superior Dr. Alejandro Carbo.<br/>- Bootcamp: Henry - Full Stack Developer.</b></p>
	     </div>
	     <div class="acordeon-item">
	         <input type="checkbox" name="acordeon" id="item2"/>
	         <label for="item2" class="acordeon-titulo"><b>Skills</b></label>
	         <p class="acordeon-contenido"><b>HTML, JAVASCRIPT, CSS, REACT.JS, REACT-REDUX, BOOTSTRAP,<br/>  CHACRA UI, NODE.JS, MySQL, BABYLON.JS, THREE.js, A-FRAME.</b></p>
	     </div>
		 <div class="acordeon-item">
	         <input type="checkbox" name="acordeon" id="item3"/>
	         <label for="item3" class="acordeon-titulo"><b>Extra skills</b></label>
	         <p class="acordeon-contenido"><b>Photoshop, Krita, Blender 3D, Unity.</b></p>
	     </div>

	</div>

		);
}

export default Acordeon;