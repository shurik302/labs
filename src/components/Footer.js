import React, { useState } from 'react';
import '../stylesheets/Footer.css';
import Logo from '../images/logo.png';

function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className='Footer'>
      <div className='UpFooter'>
        <div className='LeftFoooter'>
          <div className='LogoFooter'>
            <div className='Logo'>
              <a href='/'>
                <img src={Logo} alt='Logo' />
              </a>
            </div>
          </div>
        </div>

        <div className='MiddleFooter'>
          <div className={`NameSectionFooter ${openMenu === 'middle' ? 'active' : ''}`} onClick={() => toggleMenu('middle')}>
            <span>Проєкти</span>
            <i className={`fa-solid fa-chevron-down ${openMenu === 'middle' ? 'open' : ''}`}></i>
          </div>
          <div className={`LinksFooter ${openMenu === 'middle' ? 'open' : ''}`}>
            <a href="/"><span>1 лаба</span></a>
            <a href="/"><span>2 лаба</span></a>
            <a href="/"><span>3 лаба</span></a>
            <a href="/"><span>4 лаба</span></a>
            <a href="/"><span>4 лаба</span></a>
          </div>
        </div>

        <div className='MiddleRightFooter'>
          <div className={`NameSectionFooter ${openMenu === 'middleRight' ? 'active' : ''}`} onClick={() => toggleMenu('middleRight')}>
            <span>Посилання</span>
            <i className={`fa-solid fa-chevron-down ${openMenu === 'middleRight' ? 'open' : ''}`}></i>
          </div>
          <div className={`LinksFooter ${openMenu === 'middleRight' ? 'open' : ''}`}>
            <a href="/"><span>1 лаба</span></a>
            <a href="/"><span>2 лаба</span></a>
            <a href="/"><span>3 лаба</span></a>
            <a href="/"><span>4 лаба</span></a>
          </div>
        </div>

        <div className='RightFooter'>
          <div className={`NameSectionFooter ${openMenu === 'right' ? 'active' : ''}`} onClick={() => toggleMenu('right')}>
            <span>Соціальні мережі</span>
            <i className={`fa-solid fa-chevron-down ${openMenu === 'right' ? 'open' : ''}`}></i>
          </div>
          <div className={`LinksFooter ${openMenu === 'right' ? 'open' : ''}`}>
            <a href="https://github.com/shurik302"><span><i class="fa-brands fa-github"></i></span></a>
            <a href='https://www.youtube.com/@Temich_Artemich'><span><i class="fa-brands fa-youtube"></i></span></a>
            <a href="https://t.me/Temich_Artemich"><span><i class="fa-brands fa-telegram"></i></span></a>
          </div>
        </div>
      </div>

      <div className='DownFooter'>
        <span>Тьома Team</span>
        <i className="fa-solid fa-copyright"></i>
      </div>
    </div>
  );
}

export default Footer;
