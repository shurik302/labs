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
        <a href="/">1 лінк</a>
        <a href="/">2 лінк</a>
        <a href="/">3 лінк</a>
        <a href="/">4 лінк</a>
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
            <a href="/map" className={getLinkClass('/map')}><span>1</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/travels" className={getLinkClass('/travels')}><span>3</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/routes" className={getLinkClass('/routes')}><span>4</span><i className="fa-solid fa-chevron-right"></i></a>
            <a href="/help" className={getLinkClass('/help')}><span>5</span><i className="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
