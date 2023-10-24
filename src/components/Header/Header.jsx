import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import Navbar from '../NavBar/Navbar';
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
      <Navbar isMenuOpen={isMenuOpen} />
      {desktopView ? <Button /> : null}
    </header>
  );
};

export default Header;

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};