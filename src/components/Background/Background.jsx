import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import desktopBg from '../../assets/images/bg-intro-desktop.svg';
import mobileBg from '../../assets/images/bg-intro-mobile.svg';
import mockups from '../../assets/images/image-mockups.png';


const Background = ({ isMenuOpen }) => {
  const desktopView = useMediaQuery({ minWidth: 920 });

  return (
    <div className={isMenuOpen ? 'home-background mobile-open' : 'home-background'}>
      {desktopView ?
        <div className='desktop-bg-container'>
          <img src={desktopBg} alt="Mobile phones" className='desktop-bg' />
        </div> :
        <div className='colors-bg-container'>
          <img src={mobileBg} alt="Background colors" className='colors-bg' />
        </div>}
      {isMenuOpen === false ?
        <div className='mobile-bg-container'>
          <img src={mockups} alt="Mobile phones mockups" className='mobile-bg' />
        </div>
        : <div className='home-background-gradient'></div>}
    </div>
  );
};

export default Background;

Background.propTypes = {
  isMenuOpen: PropTypes.bool
};