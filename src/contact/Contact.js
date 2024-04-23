import  {useRef} from 'react';
import React from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_1jf2tzm', 'template_t3lx8am', form.current, {
            publicKey: 'V9xrBKM-iUsx2BovB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert('Email sent');
            },
             (error) => {
              console.log('FAILED...', error.text);
             },
          );
      };
  return (
    <div id="contact">
        <h1 className='contactPageTitle'> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name=' your_name' />
            <input type="email" className='email' placeholder='Your Email' name='your_email'/>
            <textarea  className="msg" name="message" id=""  rows="5"placeholder='Your Message'></textarea>
           <button  type="submit" value="send" className='submitBtn'>Submit</button>
          
        </form>
    </div>
  )
}

export default Contact