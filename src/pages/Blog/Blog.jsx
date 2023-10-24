import PropTypes from 'prop-types';

const Blog = ({ isMenuOpen }) => {
  return (
    <section className='section-container other-page'>
      <div className='section-text-content'>
        <h2 className='section-subtitle'>Blog</h2>
      </div>
      <div className={isMenuOpen === true ? 'home-background mobile-open' : null}>
        {isMenuOpen === true ? <div className='home-background-gradient'></div> : null}
      </div>
    </section>
  );
};

export default Blog;

Blog.propTypes = {
  isMenuOpen: PropTypes.bool
};