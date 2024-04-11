import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mm5b8fd', 'template_knymwgj', form.current, {
        publicKey: 'SO79QmEXQuJpzBYpN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your Email has been sent successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-container' >
      <div className="contact">
        <div className="contact-form-contents">


          <h1 className="contact-heading">
            Let's Connect
          </h1>
          <p>Looking for any business query, or just want to have some chit chat? Send your contact information and I will get to you soon.</p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="row-half">
              <div className="column-half">
                <p>Name</p>
                <input type="text" name="from_name" required />
              </div>
              <div className="column-half">
                <p>Company Name </p>
                <input type="text" name="from_company" required />
              </div>
            </div>
            <div className="row-half">
              <div className="column-half">
                <p>Email</p>
                <input type="email" name="from_email" required />
              </div>
              <div className="column-half">
                <p>Phone Number</p>
                <input type="number" name="phone" required />
              </div>
            </div>
            <div className="row-full">
              <p>Subject</p>
              <input type="text" name='subject' />
            </div>
            <div className="row-full">
              <p>Your Message</p>
              <textarea name="message" cols="20" rows="3"></textarea>
            </div>
            <div className="row-full">
            <input type="submit" value="Submit" />

            </div>

          </form>
        </div>
        <div className="get-touch">
          <h3>Get in Touch</h3>
          <div className="touch-box">
            <p>Interested in working <br />together? </p>
            <pre>
              
              <span><FaLocationArrow className='icon' /> &nbsp; Karachi, Pakistan</span>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
