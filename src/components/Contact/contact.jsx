import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instragram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lu3n6si', 'template_j7cy7sm', form.current, {
        publicKey: 'gRRUebNl1CGBsrHB_r8C0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sit dignissimos hic animi ullam officia incidunt enim tenetur doloremque odio eos, modi esse vel voluptatem natus dolorum deserunt voluptatum id.</p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className='clientImg' />
                <img src={Adobe} alt="" className='clientImg' />
                <img src={Microsoft} alt="" className='clientImg' />
                <img src={Facebook} alt="" className='clientImg' />
            </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quisquam sapiente maxime aperiam. Odio delectus ex deserunt quo perferendis quisquam id modi, ullam et ea porro natus minima ad neque?</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="Facebook" className="link" />
              <img src={TwitterIcon} alt="Twitter" className="link" />
              <img src={YouTubeIcon} alt="Youtube" className="link" />
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
