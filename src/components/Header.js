import React, { useState } from 'react';
import '../stylesheets/Header.css';
import Logo from '../images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDimmed, setIsDimmed] = useState(false); // Состояние для затемнения
  const [currentPath] = useState(window.location.pathname); // Текущее положение

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDimmed(!isDimmed); // Переключаем затемнение при открытии/закрытии меню
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDimmed(false); // Убираем затемнение при закрытии меню
  };

  const getLinkClass = (path) => {
    return currentPath === path ? 'active' : '';
  };

  return (
    <div className="Header">
      <div className={`overlay ${isDimmed ? 'visible' : ''}`} onClick={closeMenu}></div>

      <div className="Logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="links">
        <a href="/">1 лаба</a>
        <a href="/">2 лаба</a>
        <a href="/">3 лаба</a>
        <a href="/">4 лаба</a>
        <a href="/">4 лаба</a>
      </div>

      <div className='UserAndLang'>
        <div className='BurgerButton' onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className={`links-container ${isMenuOpen ? 'visible' : ''}`}>
          <div className='close-button' onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className='links'>
            <a href="/map" className={getLinkClass('/firstlab')}><span>1 лаба</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/travels" className={getLinkClass('/secondlab')}><span>2 лаба</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/routes" className={getLinkClass('/thirdlab')}><span>3 лаба</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/help" className={getLinkClass('/fourthlab')}><span>4 лаба</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/help" className={getLinkClass('/fifthlab')}><span>5 лаба</span><i className="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
