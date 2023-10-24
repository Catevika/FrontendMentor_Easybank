import PropTypes from 'prop-types';

const About = ({ isMenuOpen }) => {
  return (
    <section className='section-container other-page'>
      <div className='section-text-content'>
        <h2 className='section-subtitle'>About</h2>
      </div>
      <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
        {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
      </div>
    </section>
  );
};

export default About;

About.propTypes = {
  isMenuOpen: PropTypes.bool
};