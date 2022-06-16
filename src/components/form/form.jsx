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
</div>
		);
}

export default Form;