import React from 'react';
import './Header.css';
import Logo from '../../assets/logos/LOGO_CORPPAZ-COLOR-recortada-2.png';
import Img_header from '../../assets/Header/Header_pequeño.svg';

function Header() {
  return (
    <section className='section_header' id='index'>
        <div className='header_container'>
          <div className="logo_container">
            <a href="#index" className='button' tabIndex={0}>
              <img src={Logo} alt="Logo de CORPPAZ" />
            </a>
          </div>
          <div className='image_container'>
            <img className='image_header' src={Img_header} alt="test" />
            <div className='menu_buttons'>
              <nav className='nav'>
                <ul className='ul'>
                  <li className='li'><a href="#index" className='button'>Inicio</a></li>
                  <li className='li'><a href="#services" className='button'>Servicios</a></li>
                  <li className='li'><a href="#about_us" className='button'>Nosotros</a></li>
                  <li className='li'><a href="#projects" className='button'>Proyectos</a></li>
                  <li className='li_final'><a href="#contact" className='button_final'>Contactanos</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Header;
