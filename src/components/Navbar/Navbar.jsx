import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ isMenuOpen }) => {
  return (
    <nav className={isMenuOpen === true ? 'nav-items open' : 'nav-items'}>
      <NavLink to='/' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Home</NavLink>
      <NavLink to='about' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>About</NavLink>
      <NavLink to='contact' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Contact</NavLink>
      <NavLink to='blog' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Blog</NavLink>
      <NavLink to='careers' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Careers</NavLink>
      <NavLink to='/support' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Support</NavLink>
      <NavLink to='/privacy' className={({ isActive }) => isActive ? "nav-item active" : "nav-item"
      }>Privacy Policy</NavLink>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool
};