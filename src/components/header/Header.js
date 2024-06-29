import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import style_header from './Header.module.css';
import Logo from '../../assets/logos/LOGO_CORPPAZ-COLOR-recortada-2.png';
import Img_header from '../../assets/Header/Header_pequeño.svg';
import Menu from '../../assets/Header/menu.svg';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth >= 800 && open) { // Verifica si está abierto
            handleClose(); 
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [open]); 

  return (
    <section className={style_header.section_header} id='index'>
      <div className={style_header.header_container}>
        <div className={style_header.logo_container}>
          <a href="#index" className={style_header.button} tabIndex={0}>
            <img src={Logo} alt="Logo de CORPPAZ" className={style_header.logo}/>
          </a>
        </div>
        <div className={style_header.image_container}>
          <img className={style_header.image_header} src={Img_header} alt="test" />
          <div className={style_header.menu_buttons}>
            <div className={style_header.menu_buttons_reduced}>
              <Button
                variant="text"
                onClick={handleClick}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                className={style_header.basic_button}
              >
                <img src={Menu} alt='button_menu' />
              </Button>
              <Popper open={open} anchorEl={anchorEl} >
                <MenuList className={style_header.menu_reduced}>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><a href="#index" className={style_header.button}>Inicio</a></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><a href="#services" className={style_header.button}>Servicios</a></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><a href="#about_us" className={style_header.button}>Nosotros</a></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><a href="#projects" className={style_header.button}>Proyectos</a></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><a href="#contact" className={style_header.button_final}>Contactanos</a></MenuItem>
                </MenuList>
              </Popper>
            </div>
            <nav className={style_header.nav}>
              <ul className={style_header.ul}>
                <li className={style_header.li}><a href="#index" className={style_header.button}>Inicio</a></li>
                <li className={style_header.li}><a href="#services" className={style_header.button}>Servicios</a></li>
                <li className={style_header.li}><a href="#about_us" className={style_header.button}>Nosotros</a></li>
                <li className={style_header.li}><a href="#projects" className={style_header.button}>Proyectos</a></li>
                <li className={style_header.li_final}><a href="#contact" className={style_header.button_final}>Contactanos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
