import React from 'react';
import Style from "./doors.css";
import puerta from './puerta.png';
import puerta2 from './puerta2.png';



const Doors = () => {
	return (
<div class="uno">
<img className="img1" src={puerta} alt="u"/>
<img className="img2" src={puerta2} alt="u"/>
</div>
		);
}

export default Doors;