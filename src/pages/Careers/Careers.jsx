import PropTypes from 'prop-types';

const Careers = ({ isMenuOpen }) => {
  return (
    <section className='section-container other-page'>
      <div className='section-text-content'>
        <h2 className='section-subtitle'>Careers</h2>
      </div>
      <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
        {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
      </div>
    </section>
  );
};

export default Careers;

Careers.propTypes = {
  isMenuOpen: PropTypes.bool
};