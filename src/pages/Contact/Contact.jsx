import PropTypes from 'prop-types';

const Contact = ({ isMenuOpen }) => {
  return (
    <section className='section-container other-page'>
      <div className='section-text-content'>
        <h2 className='section-subtitle'>Contact</h2>
      </div>
      <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
        {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
      </div>
    </section>
  );
};

export default Contact;

Contact.propTypes = {
  isMenuOpen: PropTypes.bool
};