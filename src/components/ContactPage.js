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
        <h1>Contact Us</h1>
        <div className='contact-body '>
            <div className='contact-main'>
                <div className='contact-info'>
                <h2 className='info-title c-light'>Contact Info</h2>

                <div className='f-normal c-light ama'>
                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <div className='f-normal c-light'>
                        2912 Meadowbrook Road Los Angeles, CA <br /> 90017
                    </div>
                </div>

                <div className='ama'>
                    <i className="fa-solid fa-envelope-open-text" aria-hidden="true"></i>
                    <div className="f-normal c-light">lorem@impus.com</div>
                </div>

                <div className='ama'>
                    <i className="fa-solid fa-phone-volume" aria-hidden="true"></i>
                    <a href="tel:+1234567890" className='f-normal c-light'>123-456-7890</a>
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
                <form className='formcontact'>
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
                    <label className='f-normal' htmlFor="message">Write your message</label>
                    <textarea className='f-normal' id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className='form-button f-normal c-light'>Send</button>
                </form>
                </div>
            </div>
        </div>
    </div>

  );
};

export default ContactPage;
