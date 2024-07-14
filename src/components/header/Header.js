import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import style_header from './Header.module.css';
import Logo from '../../assets/logos/LOGO_CORPPAZ-COLOR-recortada-2.png';
import Img_header from '../../assets/Header/Header_pequeño.svg';
import Menu from '../../assets/Header/menu.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const elementId = location.hash.replace("#", "")
    if (elementId) {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
    <section className={`${isHomePage ? style_header.section_header : style_header.section_header_program}`} id='index'>
      <div className={style_header.header_container}>
        <div className={style_header.logo_container}>
          <Link to="/#index" className={style_header.button} tabIndex={0}>
            <img src={Logo} alt="Logo de CORPPAZ" className={style_header.logo} />
          </Link>
        </div>
        <div className={`${isHomePage ? style_header.image_container : style_header.image_container_program}`}>
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
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/#index" className={style_header.button}>Inicio</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/#services" className={style_header.button}>Servicios</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/#about_us" className={style_header.button}>Nosotros</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/#projects" className={style_header.button}>Proyectos</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/programa-social" className={style_header.button}>Programa Social</Link></MenuItem>
                  <MenuItem onClick={handleClose} className={style_header.menu_reduced_items}><Link to="/#contact" className={style_header.button_final}>Contactanos</Link></MenuItem>
                </MenuList>
              </Popper>
            </div>
            <nav className={style_header.nav}>
              <ul className={style_header.ul}>
                <li className={style_header.li}><Link to="/#index" className={style_header.button}>Inicio</Link></li>
                <li className={style_header.li}><Link to="/#services" className={style_header.button}>Servicios</Link></li>
                <li className={style_header.li}><Link to="/#about_us" className={style_header.button}>Nosotros</Link></li>
                <li className={`${style_header.li} ${style_header.menu_dropdown}`}><Link to="/#projects" className={style_header.button}>Proyectos</Link>
                  <ul className={style_header.ul_menu_proyects}>
                    <li className={style_header.li_item_proyects}><Link to="/#projects" className={style_header.button_proyects}>Nuestros Proyectos</Link></li>
                    <li className={style_header.li_item_proyects}><Link to="/programa-social" className={style_header.button_proyects}>Nuestro Programa Social</Link></li>
                  </ul>
                </li>
                <li className={style_header.li_final}><Link to="/#contact" className={style_header.button_final}>Contactanos</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
