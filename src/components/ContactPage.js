import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='contact-page container'>
        <div className='contact-main'>
            <div className="contact-info">
                <div className='info-title c-light'> Contact Info </div>
                <div className='f-normal c-light ama'>
                    <i className="fa-solid fa-location-dot"></i> 
                    <div className='f-normal c-light'>2912 Meadowbrook Road Los Angeles, CA <br /> 90017</div> 
                </div>
                <div className='ama'>
                    <i className="fa-solid fa-envelope-open-text"></i> 
                    <div className="f-normal c-light">lorem@impus.com</div> 
                </div>
                <div className='ama'>
                    <i className="fa-solid fa-phone-volume"></i>
                    <Link to={'tel:+1234567890'} className='f-normal c-light'>123-456-7890 </Link>    
                </div>
                <div className="contact-icons">
                    <Link>
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-x-twitter"></i></Link>
                    <Link>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link>
                        <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                </div>
            </div>
            <div className="contact-form">
                <div className="form-title">
                    Send a Message
                </div>
                <form className='formcontact' action="">
                    <div className='input-box'>
                        <input type="text" id='firstname' name='firstname' required/>
                        <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className='input-box'>
                        <input type="text" id='lastname' name='lastname' required/>
                        <label htmlFor="lastname">Last Name</label>
                    </div>
                    <div className='input-box'>
                        <input type="email" id='email' name='email' required/>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className='input-box'>
                        <input type="tel" id="phone" name="phone" required />
                        <label htmlFor="phone">Mobile Number</label>
                    </div>
                    <div className='message-box'>
                        <label className='f-normal' htmlFor="message">Write your massage </label>
                        <textarea className='f-normal' id="message" name="message" rows="5"></textarea>
                    </div>
                    <button className='form-button f-normal c-light'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage