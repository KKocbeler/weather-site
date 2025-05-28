import './ContactPage.css';
import { Link } from 'react-router-dom';

const socialLinks = [
  { href: 'https://facebook.com', icon: 'fa-facebook-f', label: 'Facebook' },
  { href: 'https://twitter.com', icon: 'fa-x-twitter', label: 'Twitter' },
  { href: 'https://instagram.com', icon: 'fa-instagram', label: 'Instagram' },
  { href: 'https://linkedin.com', icon: 'fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://pinterest.com', icon: 'fa-pinterest-p', label: 'Pinterest' },
];

const ContactPage = () => {
  return (
    <div className='contact-page container'>
        <div className='contact-body'>
            <h1>CONTACT US</h1>
            <div className='contact-main'>
                <div className='contact-info'>
                    <div className='info-body'>
                        <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                        <div>
                            2912 Meadowbrook Road Los Angeles, CA <br /> 90017
                        </div>
                    </div>

                    <div className='info-body'>
                        <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
                        <div>lorem@impus.com</div>
                    </div>

                    <div className='info-body'>
                        <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
                        <a href="tel:+1234567890">123-456-7890</a>
                    </div>
                    <div className="contact-icons">
                        {socialLinks.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                        >
                            <i className={`fa-brands ${item.icon}`}></i>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="contact-form">
                    <h2 className="form-title">Send a Message</h2>
                    <form className='form-contact'>
                        <div className='input-box'>
                            <input type="text" id='firstname' name='firstname' required />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className='input-box'>
                            <input type="text" id='lastname' name='lastname' required />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                        <div className='input-box'>
                            <input type="email" id='email' name='email' required />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className='input-box'>
                            <input type="tel" id="phone" name="phone" required />
                            <label htmlFor="phone">Mobile Number</label>
                        </div>
                        <div className='message-box'>
                            <label htmlFor="message">Write your message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className='form-button'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
