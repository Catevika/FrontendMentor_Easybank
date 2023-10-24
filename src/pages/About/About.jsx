import PropTypes from 'prop-types';

const About = ({ isMenuOpen }) => {
  return (
    <main>
      <section className='section-container other-page'>
        <div className='section-text-content'>
          <h3 className='section-subtitle'>About</h3>
        </div>
        <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
          {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
        </div>
      </section>
    </main>
  );
};

export default About;

About.propTypes = {
  isMenuOpen: PropTypes.bool
};