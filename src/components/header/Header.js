import React from 'react';
import './Header.css';
import Logo from '../../assets/logos/LOGO_CORPPAZ-COLOR-recortada-2.png';
import { Toolbar, Container } from '@mui/material';

function Header() {
  return (
    <Container>

      <section className='section_header'>
        <Toolbar>
          <div className='header_container'>
            <div className="logo_container">
              <a href="index.html" className='button' tabIndex={0}>
                <img src={Logo} alt="Logo de CORPPAZ" />
              </a>
            </div>
            <div className='menu_buttons'>
              <nav className='nav'>
                <ul className='ul'>
                  <li className='li' tabIndex={0}><a href="index.html" className='button'>Inicio</a></li>
                  <li className='li' tabIndex={0}><a href="index.html" className='button'>Programas</a></li>
                  <li className='li' tabIndex={0}><a href="index.html" className='button'>Nosotros</a></li>
                  <li className='li' tabIndex={0}><a href="index.html" className='button'>Proyectos</a></li>
                  <li className='li' tabIndex={0}><a href="index.html" className='button'>Conócenos</a></li>
                </ul>
              </nav>
              {/* <Button color="inherit">Inicio</Button>
              <Button color="inherit">Programas</Button>
              <Button color="inherit">Nosotros</Button>
              <Button color="inherit">Proyectos</Button>
              <Button color="inherit">Conócenos</Button> */}
            </div>
          </div>
        </Toolbar>
      </section>
    </Container>
  );
}

export default Header;
