import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './components/BasicLayout/BasicLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Careers from './pages/Careers/Careers';
import Support from './pages/Support/Support';
import Privacy from './pages/Privacy/Privacy';
import './App.css';

function App() {
  // For Hamburger menu
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Routes>
        <Route path='/' element={<BasicLayout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}>
          <Route path='/' element={<Home isMenuOpen={isMenuOpen} />}>Home</Route>
          <Route path='/about' element={<About isMenuOpen={isMenuOpen} />}>About</Route>
          <Route path='/contact' element={<Contact isMenuOpen={isMenuOpen} />}>Contact</Route>
          <Route path='/blog' element={<Blog isMenuOpen={isMenuOpen} />}>Blog</Route>
          <Route path='/careers' element={<Careers isMenuOpen={isMenuOpen} />}>Careers</Route>
          <Route path='/support' element={<Support />}>Support</Route>
          <Route path='/privacy' element={<Privacy />}>Privacy</Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
