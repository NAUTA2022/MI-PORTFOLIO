import React from 'react';
import Style from "./form.css";
import { FaInstagram, FaWhatsapp, FaGithub, FaAt, FaLinkedinIn, FaFacebook} from 'react-icons/fa';


const Form = () => {
	return (
<div class="formu">
    <form class="form" action="https://formspree.io/f/xgedqbzk" method="POST">
      <div class="form__container">
        <h2 class="form__title">Contact me</h2>
        <input type="text" class="form__input" placeholder="Name:" name="name"/>
        <input type="email" class="form__input" placeholder="Email:" name="_replyto"/>
        <textarea class="form__input form__input--message" placeholder="Message:" name="message"></textarea>
        <input type="submit" value="Send" class="form__cta"/>
      </div>
    </form>

<div class="redes">
    <div class="tititulo">
<h1>Social Networks</h1>
</div>
        <div class="icons1">
            <a href="#"><h1 class="i1"> <FaInstagram /> </h1></a>
            <a href="#"><h1 class="i2"> <FaWhatsapp /> </h1></a>
        </div>
        <div class="icons2">
            <a href="#"><h1 class="i3"> <FaGithub /> </h1></a>
            <a href="#"><h1 class="i4"> <FaAt /> </h1></a>
        </div>
        <div class="icons3">
            <a href="#"><h1 class="i5"> <FaLinkedinIn /> </h1></a>
            <a href="#"><h1 class="i6"> <FaFacebook /> </h1></a>
    </div>
</div>
</div>
		);
}

export default Form;