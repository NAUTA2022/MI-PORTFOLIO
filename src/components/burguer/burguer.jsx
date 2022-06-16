import React from 'react';
import Style from "./burguer.css"

const Burguer = () => {
	return (

<div class="burguer">

	     <div class="burguer-item">
	         <input type="checkbox" name="burguer" id="itemH"/>
	         <div class="burguer-style">
	         <label for="itemH" class="burguer-titulo"><p class="te"><b>☰</b></p><p class="loguito">💼</p></label>
	         </div>
	         <p class="burguer-contenido"><a href="#">About</a><br/><br/><a href="#">Projects</a><br/><br/><a href="#">Contact</a></p>
	     </div>

	</div>


		);
}

export default Burguer;