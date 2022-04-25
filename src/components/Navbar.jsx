import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { ThemeContext } from '../context/ThemeContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, changeTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div className='brand-container'>
        <div className='brand'>
          <img src={logo} alt='logo' />
        </div>
        <div className='toggle-container'>
          <div className='toggle' style={{ cursor: 'pointer' }}>
            {isOpen ? (
              <MdClose onClick={() => setIsOpen(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setIsOpen(true)} />
            )}
          </div>
          <div
            className='mode'
            onClick={changeTheme}
            style={{ cursor: 'pointer' }}
          >
            {isDark ? (
              <ImSun className='light' />
            ) : (
              <BsFillMoonFill className='dark' />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${isOpen ? 'nav-visible' : ''}`}>
        <ul className='links'>
          <li>
            <a href='#features'>Features</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#launch'>Launch</a>
          </li>
          <li>
            <a href='#signup'>Sign Up</a>
          </li>
          <li onClick={changeTheme} style={{ cursor: 'pointer' }}>
            {isDark ? (
              <ImSun className='light' />
            ) : (
              <BsFillMoonFill className='dark' />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
