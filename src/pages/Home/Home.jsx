import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import desktopBg from '../../assets/images/bg-intro-desktop.svg';
import mobileBg from '../../assets/images/bg-intro-mobile.svg';
import mockups from '../../assets/images/image-mockups.png';
import Button from '../../components/Button/Button';
import Reasons from '../../components/Reasons/Reasons';
import Articles from '../../components/Articles/Articles';

const Home = ({ isMenuOpen }) => {
  const desktopView = useMediaQuery({ minWidth: 920 });

  return (
    <>
      <section className='section-container'>
        <div className='section-text-content'>
          <h1 className='section-title'>Next generation digital banking</h1>
          <p className='section-text'>Take your financial life online. Your Easybank account will be a one-stop-shop;
            for spending, saving, budgeting, investing, and much more.</p>
          <Button />
        </div>
        <div className={isMenuOpen ? 'home-background mobile-open' : 'home-background'}>
          {desktopView ? <div className='desktop-bg-container'><img src={desktopBg} alt="Mobile phones" className='desktop-bg' /></div> :
            <div className='colors-bg-container'><img src={mobileBg} alt="Background colors" className='colors-bg' /></div>}
          {isMenuOpen === false ? <div className='mobile-bg-container'><img src={mockups} alt="Mobile phones mockups" className='mobile-bg' /></div> : <div className='home-background-gradient'></div>}
        </div>
      </section>
      <section className='section-container'>
        <div className='section-text-content'>
          <h2 className='section-subtitle'>Why choose Easybank?</h2>
          <p className='section-text'>We leverage Open Banking to turn your bank account into your financial hub. Control
            your finances like never before.</p>
          <Reasons />
        </div>
      </section>
      <section className='section-container'>
        <div className='section-text-content'>
          <h2 className='section-subtitle'>Latest Articles</h2>
          <Articles />
        </div>
      </section>
    </>
  );
};

export default Home;

Home.propTypes = {
  isMenuOpen: PropTypes.bool
};