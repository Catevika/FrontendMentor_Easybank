import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BasicLayout = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <svg className='lineargradient'>
        <defs><linearGradient id="logo" x1="72.195%" x2="17.503%" y1="0%" y2="100%"><stop offset="0%" stopColor="#33D35E" /><stop offset="100%" stopColor="#2AB6D9" /></linearGradient></defs>
      </svg>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Outlet isMenuOpen={isMenuOpen} />
      <Footer />
    </>
  );
};

export default BasicLayout;

BasicLayout.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};