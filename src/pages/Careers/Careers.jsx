import PropTypes from 'prop-types';

const Careers = ({ isMenuOpen }) => {
  return (
    <main>
      <section className='section-container other-page'>
        <div className='section-text-content'>
          <h3 className='section-subtitle'>Careers</h3>
        </div>
        <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
          {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
        </div>
      </section>
    </main>
  );
};

export default Careers;

Careers.propTypes = {
  isMenuOpen: PropTypes.bool
};