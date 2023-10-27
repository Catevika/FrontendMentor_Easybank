import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { useMediaQuery } from 'react-responsive';
import Button from '../Button/Button';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const desktopView = useMediaQuery({ minWidth: 920 });
  return (
    <header className='header'>
      <Logo />
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Navbar id='primary-nav' isMenuOpen={isMenuOpen} ariaLabel={isMenuOpen ? 'primary-mobile' : 'primary'} />
      {desktopView ? <Button /> : null}
    </header>
  );
};

export default Header;

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};