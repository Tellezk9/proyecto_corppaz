import React from 'react';
import './Header.css';
import Logo from '../../assets/logos/LOGO_CORPPAZ-COLOR-recortada-2.png';
import { Toolbar } from '@mui/material';

function Header() {
  return (
      <section className='section_header' id='index'>
        <Toolbar>
            <div className='header_container'>
              <div className="logo_container">
                <a href="#index" className='button' tabIndex={0}>
                  <img src={Logo} alt="Logo de CORPPAZ" />
                </a>
              </div>
              <div className='menu_buttons'>
                <nav className='nav'>
                  <ul className='ul'>
                    <li className='li'><a href="#index" className='button'>Inicio</a></li>
                    <li className='li'><a href="#services" className='button'>Servicios</a></li>
                    <li className='li'><a href="#about_us" className='button'>Nosotros</a></li>
                    <li className='li'><a href="#projects" className='button'>Proyectos</a></li>
                    <li className='li_final'><a href="#contact" className='button_final'>Conócenos</a></li>
                  </ul>
                </nav>
              </div>
            </div>
        </Toolbar>
      </section>
  );
}

export default Header;
