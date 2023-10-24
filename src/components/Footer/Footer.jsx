import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import Navbar from '../NavBar/Navbar';
import Button from '../Button/Button';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-first-part'>
        <Logo />
        <div className='socials-container'>
          <Socials />
        </div>
      </div>
      <Navbar />
      <div className='footer-third-part'>
        <Button />
        <p className='footer-copyright'>© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;