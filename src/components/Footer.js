import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const appLinks = [
    {
      icon: 'fa-apple',
      title: 'App Store',
      text: 'Download on the',
    },
    {
      icon: 'fa-google-play',
      title: 'Play Store',
      text: 'Download on the',
    },
  ];

  const footerMenus = [
    {
      title: 'PRODUCTS & SERVICES',
      items: ['For Business', 'For Partnerts', 'For Advertising', 'Contact Us'],
    },
    {
      title: 'TERMS & CONDITIONS',
      items: ['Terms and conditions of sale', 'Privacy Policy', 'Website terms and conditions'],
    },
    {
      title: 'SUBSCRIPTION',
      items: ['How to start', 'Pricing', 'Subscribe for free', 'FAQ'],
    },
  ];

const socialLinks = [
  {
    icon: 'fa-square-facebook',
    label: 'Facebook',
    url: 'https://facebook.com',
  },
  {
    icon: 'fa-instagram',
    label: 'Instagram',
    url: 'https://instagram.com',
  },
  {
    icon: 'fa-square-x-twitter',
    label: 'Twitter',
    url: 'https://twitter.com',
  },
  {
    icon: 'fa-youtube',
    label: 'YouTube',
    url: 'https://youtube.com',
  },
];
  return (
    <footer className='footer container'>
        <div className="footer-body">
            <div className="footer-icons">
                <div className='site-name'>WHATWEATHER</div>
                <div className="mobile-links">
                    {appLinks.map((link, index) => (
                    <a className='app-links' href='/' key={index} aria-label={link.title} rel='noopener noreferrer'>
                        <i className={`fa-brands ${link.icon}`}></i>
                        <div className="link-text">
                        <span>{link.text}</span>
                        <p>{link.title}</p>
                        </div>
                    </a>
                    ))}
                </div>
                <div className="social-links">
                    {socialLinks.map((socialLinks, index) => (
                        <a href={socialLinks.url} key={index} aria-label={socialLinks.label} target='_blank' rel='noopener noreferrer'>
                        <i className={`fa-brands ${socialLinks.icon}`}></i>
                        </a>
                    ))}
                </div>
            </div>
            <div className="menu">
                {footerMenus.map((menu, index) => (
                    <div className='footer-menu' key={index}>
                        <h3 className='footer-menu-title'>{menu.title}</h3>
                        <ul className='footer-list'>
                            {menu.items.map((item, i) => (
                                <li className='footer-list-item' key={i}><Link to={'/'}>{item}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
