import React from 'react';
import Style from "./ending.css";
import { FaInstagram, FaWhatsapp, FaGithub, FaAt, FaLinkedinIn, FaFacebook} from 'react-icons/fa';


const Ending = () => {
	return (
<div class="redes">

<div class="tititulo">
<h1>Social Networks</h1>
</div>


 <div class="iconos">
                <a href="https://www.instagram.com/uli.a.marin/"><h1 class="i1"> <FaInstagram /> </h1></a>
                <a href="https://api.whatsapp.com/qr/ZRRUTMZLWKXPM1?autoload=1&app_absent=0"><h1 class="i2"> <FaWhatsapp /> </h1></a>                                                                              
                <a href="https://github.com/NAUTA2022"><h1 class="i3"> <FaGithub /> </h1></a>
                <a href="mailto:andresquinteros2017@gmail.com"><h1 class="i4"> <FaAt /> </h1></a>                                                                  
                <a href="https://www.linkedin.com/in/ulises-marin/"><h1 class="i5"> <FaLinkedinIn /> </h1></a>
                <a href="https://www.facebook.com/ulises.a.quinteros/"><h1 class="i6"> <FaFacebook /> </h1></a>
</div>
<div class="derechos">

                <p class="derechos1" align="center">
                All rights reserved.
                </p>
                <p class="derechos2" align="center">
                © 2022 Ulises Marin
                </p>
</div>

</div>
		);
}

export default Ending;