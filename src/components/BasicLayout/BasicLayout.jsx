import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BasicLayout = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
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