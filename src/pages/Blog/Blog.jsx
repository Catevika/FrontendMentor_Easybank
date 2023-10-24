import PropTypes from 'prop-types';

const Blog = ({ isMenuOpen }) => {
  return (
    <main>
      <section className='section-container other-page'>
        <div className='section-text-content'>
          <h3 className='section-subtitle'>Blog</h3>
        </div>
        <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
          {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
        </div>
      </section>
    </main>
  );
};

export default Blog;

Blog.propTypes = {
  isMenuOpen: PropTypes.bool
};